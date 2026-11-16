// Employee app: claim an open shift, propose a swap with a colleague, and ask for time off.
//
// Setup (as admin): takes a colleague off a future Bediening shift on a day the employee is free
// and publishes, so there is an open shift to claim. cleanup() withdraws the claim, the swap and the
// leave request again (approved leave is revoked by the admin, which leaves it as denied), puts
// the colleague back and publishes.
import { APP, launch } from '../lib.mjs';

const EMPLOYEE = 'Sophie Janssen';
const COLLEAGUE = 'Vera Hoekstra';
const RANKS = ['Ober', 'Stagiair']; // functions Sophie (Hoofdober) may fill

let setup = null; // { slotId, week, original }
let before = null; // the employee's own swap and leave requests before the clip

const call = (page, method, path, body) =>
  page.evaluate(
    async ([method, path, body]) => {
      const res = await fetch(path, { method, headers: body ? { 'Content-Type': 'application/json' } : {}, body: body ? JSON.stringify(body) : undefined });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(`${method} ${path}: ${res.status} ${JSON.stringify(data)}`);
      return data;
    },
    [method, path, body],
  );

const ymd = (d) => d.toISOString().slice(0, 10);
const mondayOf = (d) => {
  const m = new Date(Date.UTC(d.getUTCFullYear(), d.getUTCMonth(), d.getUTCDate()));
  m.setUTCDate(m.getUTCDate() - ((m.getUTCDay() + 6) % 7));
  return m;
};

async function asAdmin(fn) {
  const admin = await launch({ who: 'admin', device: 'desktop' });
  try {
    await admin.page.goto(`${APP}/admin`);
    return await fn(admin.page);
  } finally {
    await admin.browser.close();
  }
}

// An open Bediening shift the employee can claim: a future one on a day she is free.
async function openShift() {
  return asAdmin(async (page) => {
    const soon = new Date(Date.now() + 2 * 86400e3);
    for (const monday of [mondayOf(soon), new Date(mondayOf(soon).getTime() + 7 * 86400e3)]) {
      const week = ymd(monday);
      const slots = await call(page, 'GET', `/api/admin/schedule?week=${week}`);
      const busy = new Set(slots.filter((s) => s.assignedEmployee?.name === EMPLOYEE).map((s) => s.date));
      const slot = slots.find(
        (s) =>
          s.date.slice(0, 10) >= ymd(soon) && s.isPublished && !s.hasDraft && !s.isLocked && !s.isAdHoc &&
          s.assignedEmployee && s.assignedEmployee.name !== EMPLOYEE && RANKS.includes(s.requiredRank?.name) && !busy.has(s.date),
      );
      if (!slot) continue;
      await call(page, 'PUT', `/api/admin/schedule/${slot.id}/assign`, { employeeId: null, thisWeekOnly: true });
      await call(page, 'POST', '/api/admin/schedule/publish', { week });
      return { slotId: slot.id, week, original: slot.assignedEmployee.id };
    }
    return null;
  });
}

const mine = async (page) => ({
  swaps: (await call(page, 'GET', '/api/me/swap-requests')).myOffers.map((r) => r.id),
  leave: (await call(page, 'GET', '/api/me/leave-requests')).map((r) => r.id),
});

export default {
  name: 'staff-requests',
  who: 'employee',
  device: 'mobile',

  async prepare({ page, h }) {
    setup = await openShift();
    await h.goto('/me/switch-shifts');
    before = await mine(page);
    await h.park(195, 500);
  },

  async run({ page, h, t }) {
    const main = page.locator('main');
    await h.sleep(700);

    // 1. Claim an open shift
    const request = main.getByRole('button', { name: t('Aanvragen', 'Request'), exact: true }).filter({ visible: true });
    const free = request.and(page.locator(':not([disabled])')).first();
    if (await free.count()) {
      await h.click(free, 1600);
      const anyway = main.getByRole('button', { name: t('Toch aanvragen', 'Request anyway') });
      if (await anyway.count()) await h.click(anyway, 1600);
    }

    // 2. Swap one of my shifts with a colleague
    await h.click(page.locator('nav a[href="/me"]').last(), 1200);
    const shift = page.locator('main li button').filter({ hasText: /\d\d:\d\d–\d\d:\d\d/ }).last();
    const box = await shift.boundingBox();
    await h.scroll(box.y - 420, 1300);
    await h.click(shift, 1000);
    const sheet = page.getByRole('dialog');
    await h.click(sheet.getByRole('button', { name: t('Ruilen', 'Swap'), exact: true }), 700);
    await h.click(sheet.getByRole('button', { name: t('Met een collega', 'With a colleague') }), 800);
    await h.click(sheet.getByRole('button', { name: COLLEAGUE, exact: true }), 1000);
    await h.click(sheet.getByRole('button').filter({ hasText: /·.*\d\d:\d\d–\d\d:\d\d/ }).last(), 700);
    await h.type(sheet.getByPlaceholder(t('Opmerking (optioneel)', 'Note (optional)')), t('Kun jij deze? Dan neem ik die van jou.', 'Could you take this one? I’ll do yours.'), 400);
    await h.click(sheet.getByRole('button', { name: t('Bevestigen', 'Confirm'), exact: true }), 1600);

    // 3. Ask for a few days off
    await h.click(page.locator('nav a[href="/me/meer"]').last(), 1000);
    await h.click(main.locator('a[href="/me/holidays"]').filter({ visible: true }).first(), 1300);
    const from = new Date(Date.now() + 40 * 86400e3); // past the published weeks, so no shifts are freed
    const to = new Date(from.getTime() + 2 * 86400e3);
    const fromInput = main.locator(`input[type=date][aria-label="${t('Van', 'From')}"]`);
    const toInput = main.locator(`input[type=date][aria-label="${t('Tot en met', 'Up to and including')}"]`);
    await h.hover(fromInput, 300);
    await fromInput.fill(ymd(from));
    await h.sleep(600);
    await h.hover(toInput, 300);
    await toInput.fill(ymd(to));
    await h.sleep(600);
    await h.type(main.getByPlaceholder(t('Vakantie, persoonlijke redenen, etc.', 'Vacation, personal reasons, etc.')), t('Bruiloft van mijn zus', 'My sister’s wedding'), 400);
    await h.click(main.getByRole('button', { name: t('Aanvragen', 'Request'), exact: true }), 2000);
  },

  async cleanup({ page }) {
    if (!page.url().startsWith(APP)) await page.goto(`${APP}/me`);
    if (before) {
      const now = await mine(page);
      for (const id of now.swaps.filter((id) => !before.swaps.includes(id))) await call(page, 'DELETE', `/api/me/swap-requests/${id}`).catch(() => {});
      // Leave is approved automatically on dev, and only a manager can revoke approved leave.
      const leave = now.leave.filter((id) => !before.leave.includes(id));
      for (const id of leave) await call(page, 'DELETE', `/api/me/leave-requests/${id}`).catch(() => {});
      if (leave.length) await asAdmin(async (admin) => { for (const id of leave) await call(admin, 'DELETE', `/api/admin/leave-requests/${id}`).catch(() => {}); });
      before = null;
    }
    if (setup) {
      const { slotId, week, original } = setup;
      setup = null;
      await call(page, 'DELETE', `/api/me/open-shifts/${slotId}/claim`).catch(() => {});
      await asAdmin(async (admin) => {
        await call(admin, 'PUT', `/api/admin/schedule/${slotId}/assign`, { employeeId: original, thisWeekOnly: true });
        await call(admin, 'POST', '/api/admin/schedule/publish', { week });
      });
    }
  },
};

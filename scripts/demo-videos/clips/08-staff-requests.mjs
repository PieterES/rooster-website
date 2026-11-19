// Employee app, Ruilen and time off: colleagues' offers, request an open shift, swap your shift with a
// colleague, ask for time off, and follow the status of it all under "Mijn verzoeken".
// cleanup() withdraws the claim, the swap and the leave request (approved leave is revoked by the admin).
import { APP } from '../lib.mjs';
import { STAFF, asAdmin, call, toTop, ymd, mondayOf } from '../staff.mjs';

const EMPLOYEE = 'Sophie Janssen';
const COLLEAGUE = 'Vera Hoekstra';
let before = null;
let targets = []; // open shifts on days she doesn't work: { date, startTime, endTime }

const mine = async (page) => ({
  claims: (await call(page, 'GET', '/api/me/open-shifts')).filter((s) => s.hasPendingClaim).map((s) => s.id),
  swaps: (await call(page, 'GET', '/api/me/swap-requests')).myOffers.map((r) => r.id),
  leave: (await call(page, 'GET', '/api/me/leave-requests')).map((r) => r.id),
});

export default {
  name: 'staff-requests',
  ...STAFF,

  async prepare({ page, h }) {
    await h.goto('/me/switch-shifts');
    before = await mine(page);
    // Requesting a shift on a day she already works is refused, so pick one on a free day.
    const busy = await asAdmin(async (admin) => {
      const monday = mondayOf(new Date());
      const dates = new Set();
      for (const w of [monday, new Date(monday.getTime() + 7 * 86400e3)])
        for (const s of await call(admin, 'GET', `/api/admin/schedule?week=${ymd(w)}`))
          if (s.assignedEmployee?.name === EMPLOYEE) dates.add(s.date.slice(0, 10));
      return dates;
    });
    targets = (await call(page, 'GET', '/api/me/open-shifts')).filter((s) => !s.hasPendingClaim && !busy.has(s.date));
    await h.park(300, 640);
  },

  async run({ page, h, t }) {
    const main = page.locator('main');
    const tab = (href) => page.locator(`nav a[href="${href}"]`).last();
    const tabs = main.locator('[role=tab]');
    await h.sleep(600);

    // Colleagues' offers: take one with one tap
    await h.click(tabs.nth(2), 1600);
    // Open shifts: request one
    await h.click(tabs.nth(1), 1000);
    const request = main.getByRole('button', { name: t('Aanvragen', 'Request'), exact: true });
    let free = request.and(page.locator(':not([disabled])')).first();
    // Her own department first (other departments ask "request anyway?")
    const ordered = [...targets.map((o) => [o, /Bediening/]), ...targets.map((o) => [o, /./])];
    for (const [o, dept] of ordered) {
      const btn = main.locator('li')
        .filter({ hasText: dept })
        .filter({ hasText: `${o.startTime}–${o.endTime}` })
        .filter({ hasText: new RegExp(`(^|\\D)${+o.date.slice(8)}(\\D|$)`) })
        .getByRole('button', { name: t('Aanvragen', 'Request'), exact: true }).first();
      if ((await btn.count()) && (await btn.isEnabled())) { free = btn; break; }
    }
    if (await free.count()) {
      await h.click(free, 1300);
      const anyway = main.getByRole('button', { name: t('Toch aanvragen', 'Request anyway') });
      if (await anyway.count()) await h.click(anyway, 1300);
    }

    // Swap one of your shifts with a colleague
    await h.click(tab('/me'), 1000);
    const now = main.locator('button.soul-now');
    await toTop(h, now.first(), 230);
    await h.click(now.last(), 900);
    const sheet = page.getByRole('dialog');
    await h.click(sheet.getByRole('button', { name: t('Ruilen', 'Swap'), exact: true }), 600);
    await h.click(sheet.getByRole('button', { name: t('Met een collega', 'With a colleague') }), 700);
    await h.click(sheet.getByRole('button', { name: COLLEAGUE, exact: true }), 800);
    await h.click(sheet.getByRole('button').filter({ hasText: /·.*\d\d:\d\d–\d\d:\d\d/ }).last(), 600);
    await h.type(sheet.getByPlaceholder(t('Opmerking (optioneel)', 'Note (optional)')), t('Kun jij deze? Dan neem ik die van jou.', 'Could you take this one? I’ll do yours.'), 300);
    await h.click(sheet.getByRole('button', { name: t('Bevestigen', 'Confirm'), exact: true }), 1300);

    // Ask for a few days off
    await h.click(tab('/me/meer'), 900);
    await h.click(main.locator('a[href="/me/holidays"]').filter({ visible: true }).first(), 1000);
    const from = new Date(Date.now() + 40 * 86400e3); // past the published weeks, so no shifts are freed
    const to = new Date(from.getTime() + 2 * 86400e3);
    const fromInput = main.locator(`input[type=date][aria-label="${t('Van', 'From')}"]`);
    const toInput = main.locator(`input[type=date][aria-label="${t('Tot en met', 'Up to and including')}"]`);
    await h.hover(fromInput, 200);
    await fromInput.fill(ymd(from));
    await h.sleep(400);
    await h.hover(toInput, 200);
    await toInput.fill(ymd(to));
    await h.sleep(400);
    await h.type(main.getByPlaceholder(t('Vakantie, persoonlijke redenen, etc.', 'Vacation, personal reasons, etc.')), t('Bruiloft van mijn zus', 'My sister’s wedding'), 300);
    await h.click(main.getByRole('button', { name: t('Aanvragen', 'Request'), exact: true }), 1700);

    // Follow your requests: waiting for the manager, approved
    await h.click(tab('/me/switch-shifts'), 900);
    await h.click(tabs.nth(0), 2000);
  },

  async cleanup({ page }) {
    if (!before) return;
    if (!page.url().startsWith(APP)) await page.goto(`${APP}/me`);
    const now = await mine(page);
    for (const id of now.claims.filter((id) => !before.claims.includes(id))) await call(page, 'DELETE', `/api/me/open-shifts/${id}/claim`).catch(() => {});
    for (const id of now.swaps.filter((id) => !before.swaps.includes(id))) await call(page, 'DELETE', `/api/me/swap-requests/${id}`).catch(() => {});
    const leave = now.leave.filter((id) => !before.leave.includes(id));
    for (const id of leave) await call(page, 'DELETE', `/api/me/leave-requests/${id}`).catch(() => {});
    if (leave.length) await asAdmin(async (admin) => { for (const id of leave) await call(admin, 'DELETE', `/api/admin/leave-requests/${id}`).catch(() => {}); });
    before = null;
  },
};

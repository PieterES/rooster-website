// Employee app: my shifts with today marked, a shift with a briefing from the manager, the team
// schedule (closing shifts labelled), and adding the schedule to your own calendar.
// prepare() puts a briefing on the employee's next shift (as admin); cleanup() restores it.
import { APP, launch } from '../lib.mjs';

const EMPLOYEE = 'Sophie Janssen';
let setup; // { slotId, before, date }

async function asAdmin(fn) {
  const admin = await launch({ who: 'admin', device: 'desktop' });
  try {
    await admin.page.goto(`${APP}/admin`);
    return await fn(admin.page);
  } finally {
    await admin.browser.close();
  }
}

const mondayOf = (d) => {
  const m = new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()));
  m.setUTCDate(m.getUTCDate() - ((m.getUTCDay() + 6) % 7));
  return m.toISOString().slice(0, 10);
};

export default {
  name: 'staff-schedule',
  who: 'employee',
  device: 'mobile',

  async prepare({ h, t }) {
    const briefing = t(
      'Vanavond groep van 24 aan de lange tafel. Allergieën staan op de kaart bij de pass.',
      'Group of 24 at the long table tonight. Allergies are on the card at the pass.',
    );
    setup = await asAdmin(async (page) => {
      const today = new Date().toISOString().slice(0, 10);
      const slots = await page.evaluate(async (w) => (await fetch(`/api/admin/schedule?week=${w}`)).json(), mondayOf(new Date()));
      const next = slots
        .filter((s) => s.assignedEmployee?.name === EMPLOYEE && s.isPublished && s.date.slice(0, 10) > today)
        .sort((a, b) => a.date.localeCompare(b.date))[0];
      if (!next) return null;
      await page.evaluate(
        ([id, b]) => fetch(`/api/admin/schedule/${id}/briefing`, { method: 'PUT', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ briefing: b }) }),
        [next.id, briefing],
      );
      return { slotId: next.id, before: next.briefing ?? '', date: next.date.slice(0, 10) };
    });
    await h.goto('/me');
    await h.park(195, 600);
  },

  async run({ page, h, t }) {
    const toggle = (current) => page.locator(`main button[aria-label^="${current}. "]`).first();
    await h.sleep(700);

    // This week, today marked
    const week = page.locator('main').getByText(/^Week \d+$/).first();
    const wb = await week.boundingBox();
    await h.scroll(wb.y - 110, 1300);
    await h.sleep(700);

    // The next shift has a briefing
    if (setup) {
      const dd = String(+setup.date.slice(8));
      const shift = page.locator('main li').filter({ hasText: new RegExp(`(^|\\D)${dd}\\s+[a-z]{3}`, "i") }).locator('button').first();
      await h.click(shift, 2400);
      await h.click(page.getByRole('dialog').getByRole('button', { name: t('Sluiten', 'Close') }).first(), 700);
    }

    // The team schedule: who works when, closing shifts labelled
    const tb = await toggle(t('Mijn rooster', 'My schedule')).boundingBox();
    await h.scroll(tb.y - 200, 1200);
    await h.click(toggle(t('Mijn rooster', 'My schedule')), 1400);
    const closing = page.locator('main').getByText(new RegExp(t('Sluitdienst', 'Closing'))).first();
    if (await closing.count()) {
      const cb = await closing.boundingBox();
      await h.scroll(cb.y - 360, 1500);
      await h.hover(closing, 1000);
    }
    const back = await toggle('Team').boundingBox();
    await h.scroll(back.y - 200, 1000);
    await h.click(toggle('Team'), 1200);

    // Into your own calendar
    const cal = page.getByRole('link', { name: t('Zet in je agenda', 'Add to your calendar') });
    const kb = await cal.boundingBox();
    await h.scroll(kb.y - 500, 1200);
    await h.click(cal, 1500);
    const agenda = page.locator('#agenda');
    if (await agenda.count()) {
      const ab = await agenda.boundingBox();
      if (ab.y > 300) await h.scroll(ab.y - 140, 1000);
    }
    await h.sleep(1500);
  },

  async cleanup() {
    if (!setup) return;
    const { slotId, before } = setup;
    setup = undefined;
    await asAdmin((page) =>
      page.evaluate(
        ([id, b]) => fetch(`/api/admin/schedule/${id}/briefing`, { method: 'PUT', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ briefing: b }) }),
        [slotId, before],
      ),
    );
  },
};

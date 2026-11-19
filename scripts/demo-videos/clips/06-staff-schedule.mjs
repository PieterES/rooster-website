// Employee app, Rooster: your next shifts; a shift's sheet with the manager's briefing, colleagues that
// day and swap / give away / report sick; tap a day to see who you work with; swipe to next week and
// open an open shift (the request sheet, not sent); month view; into your own calendar.
// prepare() puts a briefing on the employee's next shift (as admin); cleanup() restores it.
import { APP } from '../lib.mjs';
import { STAFF, asAdmin, call, toTop, ymd, mondayOf } from '../staff.mjs';

const EMPLOYEE = 'Sophie Janssen';
let setup; // { slotId, before }

export default {
  name: 'staff-schedule',
  ...STAFF,

  async prepare({ h, t }) {
    const briefing = t(
      'Vanavond groep van 24 aan de lange tafel. Allergieën staan op de kaart bij de pass.',
      'Group of 24 at the long table tonight. Allergies are on the card at the pass.',
    );
    setup = await asAdmin(async (page) => {
      const today = ymd(new Date());
      const monday = mondayOf(new Date());
      for (const week of [monday, new Date(monday.getTime() + 7 * 86400e3)]) {
        const slots = await call(page, 'GET', `/api/admin/schedule?week=${ymd(week)}`);
        const next = slots
          .filter((s) => s.assignedEmployee?.name === EMPLOYEE && s.isPublished && s.date.slice(0, 10) > today)
          .sort((a, b) => a.date.localeCompare(b.date))[0];
        if (!next) continue;
        await call(page, 'PUT', `/api/admin/schedule/${next.id}/briefing`, { briefing });
        return { slotId: next.id, before: next.briefing ?? '' };
      }
      return null;
    });
    await h.goto('/me');
    await h.park(300, 640);
  },

  async run({ page, h, t }) {
    const main = page.locator('main');
    await h.sleep(500);

    // Your next shifts at a glance
    const now = main.locator('button.soul-now');
    await toTop(h, now.first(), 230);
    await h.sleep(600);
    // The next shift: the briefing, colleagues that day, and swap / give away / report sick
    await h.click(now.nth(1), 2200);
    const sheet = page.getByRole('dialog');
    for (const name of [t('Ruilen', 'Swap'), t('Weggeven', 'Give away'), t('Ziek melden', 'Report sick')]) {
      await h.hover(sheet.getByRole('button', { name, exact: true }), 350);
    }
    await h.click(sheet.getByRole('button', { name: t('Sluiten', 'Close') }).first(), 400);

    // The week; tap a day to see who you work with
    const cycle = main.locator('.soul-cyc').first();
    await toTop(h, cycle, 70);
    const day = main.locator('li button[aria-expanded=false]').filter({ hasText: /\d\d:\d\d–\d\d:\d\d/ }).last();
    await h.click(day, 1400);

    // Swipe to next week; on a free day, open shifts can be requested with one tap
    await toTop(h, cycle, 70);
    await h.swipe(cycle, -220);
    await page.waitForLoadState('networkidle');
    await h.sleep(1200);
    // (the date and "vrij" have no space between them in the text)
    const free = main.locator('li button[aria-expanded=false]').filter({ hasText: new RegExp(`\\d\\s*${t('vrij', 'off')}\\s*$`) }).first();
    if (await free.count()) {
      await toTop(h, free, 260);
      await h.click(free, 900);
      const open = main.locator('button.soul-card-open:visible').first();
      if (await open.count()) {
        await h.click(open, 1000);
        const req = page.getByRole('dialog');
        await h.hover(req.getByRole('button', { name: t('Aanvragen', 'Request'), exact: true }).first(), 900);
        await h.click(req.getByRole('button', { name: t('Sluiten', 'Close') }).first(), 500);
      }
    }

    // Month view
    await toTop(h, cycle, 70);
    await h.click(cycle.getByText(t('Tik voor maand', 'Tap for month')), 0);
    // wait until the month view is really there (it can take a few seconds on `next dev`)
    await main.getByText(t('Tik voor week', 'Tap for week')).first().waitFor({ timeout: 20000 });
    await page.waitForTimeout(400); // the scroll position shifts as the month renders
    // Show the whole calendar before moving on
    await toTop(h, main.locator('.soul-cyc').first(), 70);
    await h.sleep(2000);

    // Into your phone's calendar
    const cal = page.getByRole('link', { name: t('Zet in je agenda', 'Add to your calendar') });
    if (await cal.count()) await h.hover(cal, 1200);
  },

  async cleanup() {
    if (!setup) return;
    const { slotId, before } = setup;
    setup = undefined;
    await asAdmin((page) => call(page, 'PUT', `/api/admin/schedule/${slotId}/briefing`, { briefing: before }));
  },
};

// Employee app: dashboard with upcoming shifts, month view, team schedule.
import { DEMO_WEEK } from './04-schedule.mjs';

export default {
  name: 'staff-schedule',
  who: 'employee',
  device: 'mobile',

  async prepare({ page, h }) {
    await h.goto('/me');
    await h.park(195, 600);
  },

  async run({ page, h, t }) {
    await h.sleep(600);
    await h.scroll(380, 1000);
    await h.sleep(500);
    await h.scroll(-380, 800);

    await h.click(page.locator('a[href="/me/schedule"]').last(), 1200);
    await h.click(page.locator('main button:has(svg.lucide-chevron-right)').first(), 900);

    // tap the day of the demo week that has a shift (2nd of the month)
    const day = String(+DEMO_WEEK.slice(8) + 1);
    await h.click(page.locator('main').getByText(day, { exact: true }).first(), 900);
    await h.scroll(420, 900);
    await h.sleep(700);
    await h.click(page.getByText(t('Mijn team', 'Team'), { exact: true }), 900);
    await h.scroll(500, 1200);
    await h.sleep(900);
    await h.scroll(-300, 900);
    await h.click(page.getByText(t('Open diensten', 'Open shifts'), { exact: true }), 1200);
  },
};

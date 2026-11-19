// Vandaag: is today under control? The three numbers, the timeline (finished, running, the now
// line), the side column with what is waiting for you and this week's open shifts, and this week's
// coverage with one day folded open. Read-only.
// Recorded wide (side column next to the timeline). Best during service, so shifts are running.
export default {
  name: 'dashboard',
  who: 'admin',
  device: 'wide',
  speed: 1.4, // same pace as the employee clips

  async prepare({ h }) {
    await h.goto('/admin');
    await h.park(820, 180);
  },

  async run({ page, h, t }) {
    const main = page.locator('main');
    const vis = (loc) => loc.filter({ visible: true }).first();
    await h.sleep(700);

    // The three numbers
    for (const label of [t('Nu aan het werk', 'Working now'), t('Komt nog', 'Still to come'), t('Open vandaag', 'Open today')]) {
      const el = vis(main.getByText(new RegExp(`^${label}$`, 'i')));
      if (await el.count()) await h.hover(el, 500);
    }

    // The timeline: a finished shift, a running one, the now line
    const bars = main.locator('text=/^\\d\\d:\\d\\d–\\d\\d:\\d\\d$/').filter({ visible: true });
    const n = await bars.count();
    for (const i of [0, Math.min(1, n - 1), Math.min(4, n - 1)]) if (n) await h.hover(bars.nth(i), 600);
    const now = vis(main.getByText(new RegExp(`^${t('nu', 'now')} \\d\\d:\\d\\d$`)));
    if (await now.count()) await h.hover(now, 900);

    // The side column: what is waiting for you, and this week's open shifts
    const side = page.locator('aside[data-tour="dashboard-stats"]');
    for (const label of [t('Claims op open diensten', 'Claims on open shifts'), t('Ruilverzoeken', 'Swap requests')]) {
      const el = vis(side.getByText(new RegExp(`^${label}$`)));
      if (await el.count()) await h.hover(el, 600);
    }
    const openRow = vis(side.getByText(/^\d\d:\d\d–\d\d:\d\d$/));
    if (await openRow.count()) await h.hover(openRow, 900);

    // This week: covered days next to days with open shifts; one day folds open underneath.
    // The whole page fits the screen (timeline, side column and this week), so no scrolling here.
    const covered = vis(main.getByText(new RegExp(`^${t('gedekt', 'covered')}$`)));
    if (await covered.count()) await h.hover(covered, 600);
    const open = vis(main.getByText(/^\d+ open$/));
    if (await open.count()) await h.hover(open, 1000);
    await h.moveTo(820, 560);
    await h.sleep(1500);
  },
};

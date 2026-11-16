// Vandaag: is today under control? The three numbers, the timeline (finished, running, the now
// line), this week's coverage and what is waiting for you. Read-only.
// Best recorded during service (afternoon/evening), so the timeline has running shifts.
export default {
  name: 'dashboard',
  who: 'admin',
  device: 'desktop',

  async prepare({ h }) {
    await h.goto('/admin');
    await h.park(700, 160);
  },

  async run({ page, h, t }) {
    const main = page.locator('main');
    await h.sleep(600);
    // The three numbers
    for (const label of [t('Nu aan het werk', 'Working now'), t('Komt nog', 'Still to come'), t('Open vandaag', 'Open today')]) {
      const el = main.getByText(new RegExp(`^${label}$`, 'i')).filter({ visible: true }).first();
      if (await el.count()) await h.hover(el, 500);
    }

    // The timeline: a finished shift, a running one, the now line
    const bars = main.locator('text=/^\\d\\d:\\d\\d–\\d\\d:\\d\\d$/').filter({ visible: true });
    const n = await bars.count();
    for (const i of [0, Math.min(1, n - 1), Math.min(4, n - 1)]) if (n) await h.hover(bars.nth(i), 600);
    const now = main.getByText(new RegExp(`^${t('nu', 'now')} \\d\\d:\\d\\d$`)).filter({ visible: true }).first();
    if (await now.count()) await h.hover(now, 900);

    // This week: covered days next to days with open shifts
    await h.moveTo(720, 600);
    await h.scroll(560, 1400);
    const open = main.getByText(/^\d+ open$/).filter({ visible: true }).first();
    const covered = main.getByText(new RegExp(`^${t('gedekt', 'covered')}$`)).filter({ visible: true }).first();
    if (await covered.count()) await h.hover(covered, 600);
    // A day with open shifts opens underneath: who is on, what is open, who is free.
    if (await open.count()) {
      await h.click(open, 1600);
      await h.scroll(300, 900);
      await h.sleep(700);
    }

    // Waiting for you
    for (const label of [t('Claims op open diensten', 'Claims on open shifts'), t('Ruilverzoeken', 'Swap requests')]) {
      const el = main.getByText(new RegExp(`^${label}$`)).filter({ visible: true }).first();
      if (await el.count()) await h.hover(el, 600);
    }
    await h.moveTo(900, 500);
    await h.sleep(900);
  },
};

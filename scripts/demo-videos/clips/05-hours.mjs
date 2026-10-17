// Hours & labour cost report for a month (read-only).
export default {
  name: 'hours',
  who: 'admin',
  device: 'desktop',

  async prepare({ page, h }) {
    await h.goto('/admin/reports?from=2026-07-01&to=2026-07-31');
    await page.locator('main tbody tr:visible').first().waitFor();
    await h.park(820, 160);
  },

  async run({ page, h, t }) {
    const cards = page.locator('main').getByText(
      new RegExp(`^(${t('Gewerkte uren \\(netto\\)|Loonkosten|No-shows|Medewerkers', 'Hours worked \\(net\\)|Labor cost|Labour cost|No-shows|Employees')})$`),
    );
    const n = Math.min(4, await cards.count());
    for (let i = 0; i < n; i++) await h.hover(cards.nth(i), 450);

    await h.moveTo(900, 520);
    await h.scroll(330, 1200);
    for (const name of ['Emma de Wit', 'Joost Hendriks', 'Thomas Bakker']) {
      await h.hover(page.locator('main tbody tr:visible', { hasText: name }).locator('td').nth(3), 500);
    }
    await h.hover(page.locator('main tfoot tr, main tbody tr:visible').last().locator('td').nth(4), 700);
    await h.hover(page.getByRole('button', { name: /Salarisexport|Payroll/ }), 400);
    await h.hover(page.getByRole('button', { name: 'Export Excel' }), 400);
    await h.hover(page.getByRole('button', { name: 'Export PDF' }), 600);
    await h.scroll(650, 1400);
    await h.moveTo(1050, 600);
    await h.sleep(1200);
  },
};

// Uren: planned against clocked per day (on time, late, missed), one shift with its clock-out
// answers (break, staff meal), a correction request, and the report with the exports.
// Read-only: the correction is opened, not decided.
export default {
  name: 'hours',
  who: 'admin',
  device: 'desktop',

  async prepare({ page, h }) {
    await h.goto('/admin/hours');
    await h.park(760, 200);
  },

  async run({ page, h, t }) {
    const main = page.locator('main');
    const vis = (loc) => loc.filter({ visible: true }).first();

    // Yesterday: a full day, planned next to clocked
    await h.click(page.getByRole('link', { name: t('Vorige dag', 'Previous day') }).first(), 1500);
    for (const label of [t('Gepland', 'Scheduled'), t('Geklokt', 'Clocked')]) {
      const el = vis(main.getByText(new RegExp(`^${label}$`)));
      if (await el.count()) await h.hover(el, 450);
    }
    await h.moveTo(700, 420);
    for (const status of [/^(Klopt|Correct|On time)$/, /te laat|late/, /te vroeg|early|Niet ingeklokt|Not clocked in|No-show/i]) {
      const el = vis(main.getByText(status));
      if (await el.count()) await h.hover(el, 500);
    }

    // One shift: clocked times and what they filled in when clocking out
    const row = vis(main.locator('[role=button], tr, a, button').filter({ hasText: /\d\d:\d\d–\d\d:\d\d/ }));
    await h.click(row, 1600);
    await h.moveTo(1220, 420);
    await h.sleep(1200);

    // A correction request from an employee
    await h.click(vis(main.getByRole('link', { name: new RegExp(`^${t('Correcties', 'Corrections')}`) })), 1300);
    const corr = vis(page.locator('main [role=button][aria-pressed]'));
    if (await corr.count()) {
      await h.click(corr, 1200);
      await h.hover(vis(page.getByRole('button', { name: new RegExp(`^${t('Goedkeuren', 'Approve')}`) })), 1000);
    }

    // The report: totals per period and per employee, and the exports
    const nav = page.getByRole('navigation', { name: t('Hoofdmenu', 'Main menu') });
    await h.click(nav.getByRole('button', { name: new RegExp(`^${t('Uren', 'Hours')}`) }), 500);
    await h.click(page.getByRole('link', { name: t('Rapporten', 'Reports'), exact: true }), 1500);
    // Last month: a complete period
    await h.click(page.getByRole('button', { name: t('Vorige maand', 'Previous month') }).first(), 1600);
    for (const label of [t('Gewerkt', 'Worked'), t('Gepland', 'Scheduled'), t('Loonkosten', 'Labor cost'), t('Niet komen opdagen', 'No-shows')]) {
      const el = vis(main.locator('p.caption', { hasText: new RegExp(`^${label}$`) }));
      if (await el.count()) await h.hover(el, 400);
    }
    await h.hover(page.getByRole('button', { name: 'Export PDF' }), 400);
    await h.hover(page.getByRole('button', { name: 'Export Excel' }), 400);
    await h.hover(page.getByRole('button', { name: t('Loonexport', 'Payroll export') }), 700);
    await h.moveTo(900, 560);
    await h.scroll(700, 1500);
    await h.sleep(1300);
  },
};

// Medewerkers: the team per department with contract hours and this week's hours, then a profile:
// contact details, when they can usually work ("Kan meestal") and this week's shifts. Read-only.
export default {
  name: 'employee',
  who: 'admin',
  device: 'desktop',

  async prepare({ h }) {
    await h.goto('/admin/employees');
    await h.park(800, 450);
  },

  async run({ page, h, t }) {
    const main = page.locator('main');
    const name = (n) => main.getByText(n, { exact: true }).filter({ visible: true }).first();
    await h.sleep(600);

    // Contract and this week's hours per person
    await h.hover(main.getByText(/^Contract$/i).filter({ visible: true }).first(), 500);
    await h.hover(main.getByText(new RegExp(`^${t('Deze week', 'This week')}$`, 'i')).filter({ visible: true }).first(), 700);
    await h.moveTo(700, 560);
    await h.scroll(420, 1200);
    await h.sleep(500);

    // A profile in the side panel
    await h.click(name('Sophie Janssen'), 1600);
    const panel = page.locator('aside').filter({ visible: true }).last();
    await h.hover(panel.getByText(new RegExp(`^${t('Kan meestal', 'Usually can')}$`)).first(), 900).catch(() => {});
    await h.hover(panel.getByText(new RegExp(`^${t('Deze week', 'This week')}$`)).first(), 1100).catch(() => {});

    // And another one
    await h.click(name('Lars van den Berg'), 1600);
    await h.moveTo(1220, 360);
    await h.sleep(1200);
  },
};

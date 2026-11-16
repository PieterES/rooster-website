// Verzoeken: one inbox for claims, swaps, leave and hours corrections. Filter with the chips,
// approve a claim, approve a swap with a note for the employees.
// Uses up one pending claim and one pending swap per recording: reseed dev before recording
// (HorecaRooster: npx tsx scripts/dev-demo-state.ts --apply --only requests,notifications,clock).
export default {
  name: 'requests',
  who: 'admin',
  device: 'desktop',

  async prepare({ h }) {
    await h.goto('/admin');
    await h.park(900, 500);
  },

  async run({ page, h, t }) {
    const nav = page.getByRole('navigation', { name: t('Hoofdmenu', 'Main menu') });
    await h.click(nav.getByRole('link', { name: new RegExp(`^${t('Verzoeken', 'Requests')}`) }), 1200);

    const chip = (label) => page.locator('main a[aria-pressed]').filter({ hasText: new RegExp(`^${label}`) }).first();
    // Clean requests (no "function doesn't meet the requirements" warning) make a calmer demo.
    const row = (caption) =>
      page
        .locator('main [role=button][aria-pressed]:visible')
        .filter({ hasText: caption })
        .filter({ hasNotText: /voldoet niet|does not meet|doesn't meet/ })
        .first();
    const approve = page.getByRole('button', { name: t('Goedkeuren', 'Approve'), exact: true });

    // The whole inbox, then only the claims
    await h.moveTo(560, 520);
    await h.sleep(700);
    await h.click(chip('Claims'), 1400);
    await h.click(row(/^Claim/), 1000);
    await h.hover(page.getByRole('button', { name: t('Afwijzen', 'Deny'), exact: true }), 400);
    await h.click(approve, 1800);

    // Swaps: approve one with a note for both employees
    await h.click(chip('Claims'), 600); // off
    await h.click(chip(t('Ruilen', 'Swaps')), 1400);
    await h.click(row(new RegExp(`^${t('Ruil', 'Swap')}`)), 1200);
    await h.type(page.getByPlaceholder(t('Opmerking voor medewerkers (optioneel)', 'Note for employees (optional)')).filter({ visible: true }).first(), t('Prima, fijne dienst!', 'Fine by me, have a good shift!'), 500);
    await h.click(approve, 1800);
    await h.click(chip(t('Ruilen', 'Swaps')), 1200); // back to everything
    await h.moveTo(900, 450);
    await h.sleep(800);
  },
};

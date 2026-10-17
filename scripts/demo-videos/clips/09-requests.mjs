// Manager: approve a shift claim and a swap request.
// Note: this consumes one pending claim and one pending swap per recording.
export default {
  name: 'requests',
  who: 'admin',
  device: 'desktop',

  async prepare({ h }) {
    await h.goto('/admin');
    await h.park(900, 500);
  },

  async run({ page, h, t }) {
    await h.click(page.locator('main a[href="/admin/claims"]').first(), 1200);
    const approve = page.getByRole('button', { name: t('Goedkeuren', 'Approve'), exact: true });
    if (!(await approve.count())) throw new Error('No pending claims left to approve');
    await h.hover(page.locator('main').getByRole('button', { name: t('Afwijzen', 'Deny'), exact: true }).first(), 300);
    await h.click(approve.first(), 1500);

    await h.click(page.locator('a[href="/admin/swap-requests"]').first(), 1200);
    if (!(await approve.count())) throw new Error('No pending swap requests left to approve');
    await h.type(page.locator('main input[type=text]').first(), t('Prima, veel plezier!', 'Fine by me, enjoy!'));
    await h.click(approve.first(), 1600);
    await h.moveTo(900, 450);
  },
};

// Build next week's schedule: apply fixed assignments, auto-generate, publish.
// The week stays published afterwards so the employee clips have shifts to show.
import { APP } from '../lib.mjs';

export const DEMO_WEEK = '2026-11-02';

const filledCount = (page) =>
  page.locator('main').innerText().then((s) => +(s.match(/(\d+)\/\d+ (diensten ingevuld|shifts filled)/)?.[1] ?? -1));

async function wipeWeek(page, t) {
  await page.goto(`${APP}/admin/schedule?week=${DEMO_WEEK}`);
  await page.waitForLoadState('networkidle');
  await page.getByRole('button', { name: t('Hulpmiddelen', 'Tools') }).click();
  await page.getByRole('button', { name: t('Week wissen', 'Clear week') }).click();
  await page.waitForTimeout(800);
  const confirm = page.locator('button:visible', { hasText: new RegExp(`^(${t('Wissen|Week wissen|Verwijderen|Bevestigen', 'Clear|Clear week|Delete|Confirm')})$`) });
  if (await confirm.count()) await confirm.last().click();
  await page.waitForTimeout(1500);
}

export default {
  name: 'schedule',
  who: 'admin',
  device: 'desktop',

  async prepare({ page, h, t }) {
    await wipeWeek(page, t);
    await h.goto(`/admin/schedule?week=${DEMO_WEEK}`);
    await h.park(900, 600);
  },

  async run({ page, h, t }) {
    await h.click(page.getByRole('button', { name: t('Afdelingen', 'Departments'), exact: true }), 400);
    await h.click(page.getByRole('button', { name: t('Alle afdelingen', 'All departments') }), 500);
    await h.click(page.locator('main h1'), 600); // close the dropdown

    await h.click(page.getByRole('button', { name: t('Hulpmiddelen', 'Tools') }), 500);
    await h.click(page.getByRole('button', { name: t('Vaste toewijzingen toepassen', 'Apply fixed') }), 2000);

    const before = await filledCount(page);
    await h.click(page.getByRole('button', { name: t('Genereren & publiceren', 'Generate & publish') }), 500);
    await h.click(page.getByRole('button', { name: new RegExp(t('Genereren \\d+ open', 'Generate \\d+ open')) }), 300);
    await page.waitForFunction(
      (b) => +(document.querySelector('main').innerText.match(/(\d+)\/\d+ (diensten ingevuld|shifts filled)/)?.[1] ?? -1) > b + 5,
      before,
      { timeout: 90000 },
    );
    await h.sleep(1200);
    await h.moveTo(1100, 500);
    await h.scroll(500, 1200);
    await h.sleep(800);
    await h.scroll(-500, 900);

    await h.click(page.getByRole('button', { name: t('Genereren & publiceren', 'Generate & publish') }), 500);
    await h.click(page.getByRole('button', { name: new RegExp(`^${t('Publiceren', 'Publish')}`) }), 1000);
    const confirm = page.locator('button:visible', { hasText: new RegExp(`^${t('Publiceren', 'Publish')}$`) });
    if (await confirm.count()) await h.click(confirm.last(), 1500);
    await h.moveTo(1000, 420);
    await h.sleep(1500);
  },
};

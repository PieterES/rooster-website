// Build a week's schedule: start from the template (fixed shifts filled), auto-generate, publish.
// The week stays published afterwards so the employee clips have shifts to show.
import { APP } from '../lib.mjs';

export const DEMO_WEEK = '2026-11-02';

const filledCount = (page) =>
  page.locator('main').innerText().then((s) => +(s.match(/(\d+) (van|of) \d+ (ingevuld|filled)/)?.[1] ?? -1));

// Back to the week's template with only the fixed shifts filled. "Week leegmaken" is disabled
// while the week is published, so withdraw the publication first.
export async function resetDemoWeek(page, t) {
  await page.goto(`${APP}/admin/schedule?week=${DEMO_WEEK}`);
  await page.waitForLoadState('networkidle');
  const tools = page.getByRole('button', { name: t('Hulpmiddelen', 'Tools') });
  await tools.click();
  const unpublish = page.getByRole('button', { name: t('Publicatie intrekken', 'Unpublish week') });
  if (await unpublish.count()) {
    await unpublish.click();
    await page.locator('button:visible', { hasText: new RegExp(`^${t('Intrekken', 'Unpublish')}$`) }).last().click();
    await page.waitForTimeout(2500);
    await tools.click();
  }
  await page.getByRole('button', { name: t('Week leegmaken', 'Clear week') }).click();
  await page.locator('button:visible', { hasText: new RegExp(`^${t('Wissen', 'Clear')}$`) }).last().click();
  await page.waitForTimeout(2500);
}

export default {
  name: 'schedule',
  who: 'admin',
  device: 'desktop',

  async prepare({ page, h, t }) {
    await resetDemoWeek(page, t);
    await h.goto(`/admin/schedule?week=${DEMO_WEEK}`);
    await h.park(900, 600);
  },

  async run({ page, h, t }) {
    await h.click(page.getByRole('button', { name: new RegExp(`^${t('Afdelingen', 'Departments')}`) }), 400);
    await h.click(page.getByRole('button', { name: t('Alle afdelingen', 'All departments') }), 700);
    await h.click(page.locator('main h1'), 600); // close the dropdown

    const before = await filledCount(page);
    await h.click(page.getByRole('button', { name: t('Genereren & publiceren', 'Generate & publish') }), 500);
    await h.click(page.getByRole('button', { name: new RegExp(`^${t('Genereren', 'Generate')}`) }).last(), 300);
    await page.waitForFunction(
      (b) => +(document.querySelector('main').innerText.match(/(\d+) (van|of) \d+ (ingevuld|filled)/)?.[1] ?? -1) > b + 5,
      before,
      { timeout: 90000 },
    );
    await h.sleep(1200);
    await h.moveTo(1100, 500);
    await h.scroll(500, 1200);
    await h.sleep(800);
    await h.scroll(-500, 900);

    await h.click(page.getByRole('button', { name: t('Genereren & publiceren', 'Generate & publish') }), 500);
    await h.click(page.getByRole('button', { name: new RegExp(`^${t('Publiceren', 'Publish')}`) }).last(), 1000);
    await h.click(page.locator('button:visible', { hasText: new RegExp(`^${t('Publiceren', 'Publish')}$`) }).last(), 1500);
    await h.moveTo(1000, 420);
    await h.sleep(1500);
  },
};

// Employee app: your standard week. The max days you want to work (saved straight away), then tick
// the shifts you can (or prefer to) work on a day, and save with the bar at the bottom of the screen.
import { APP } from '../lib.mjs';

const DAY = { nl: 'Zaterdag', en: 'Saturday' };

const dayBlock = (page, lang) =>
  page.locator('main li').filter({ has: page.getByText(DAY[lang], { exact: true }) }).first();
// Only the shifts of your own department/function (others carry a "Niet jouw ..." warning).
const myShifts = (page, lang) =>
  dayBlock(page, lang).locator('button[aria-pressed]:not([disabled]):not(:has-text("Niet jouw")):not(:has-text("Not your"))');

const maxDays = (page) => page.locator('main [role=radiogroup]').first();
let originalMax = null;

const state = (btn) =>
  btn.evaluate((b) => (b.getAttribute('aria-pressed') !== 'true' ? 'off' : b.classList.contains('bg-fit') ? 'preferred' : 'can'));

// Tap every shift of the day until it is in the wanted state (taps cycle off → can → preferred → off), then save.
async function setDay(page, lang, wanted) {
  await page.goto(`${APP}/me/availability`);
  await page.waitForLoadState('networkidle');
  for (const shift of await myShifts(page, lang).all()) {
    for (let i = 0; i < 3 && (await state(shift)) !== wanted; i++) await shift.click();
  }
  const save = page.getByRole('button', { name: lang === 'en' ? 'Save' : 'Opslaan', exact: true });
  if (await save.count()) {
    await save.click();
    await page.waitForTimeout(2000);
  }
}

export default {
  name: 'staff-availability',
  who: 'employee',
  device: 'mobile',

  async prepare({ page, h, lang }) {
    await setDay(page, lang, 'off');
    originalMax = await maxDays(page).locator('[role=radio][aria-checked=true]').innerText().catch(() => null);
    if (originalMax !== '7') {
      await maxDays(page).getByRole('radio', { name: '7', exact: true }).click();
      await page.waitForTimeout(1500);
    }
    await h.goto('/me/availability');
    await h.park(195, 500);
  },

  async run({ page, h, lang, t }) {
    await h.sleep(800);
    // How many days do you want to work at most? (saved straight away)
    const mb = await maxDays(page).boundingBox();
    await h.scroll(mb.y - 380, 1000);
    await h.click(maxDays(page).getByRole('radio', { name: '5', exact: true }), 1200);
    // Bring the day to the top, below the header.
    const box = await dayBlock(page, lang).boundingBox();
    await h.scroll(box.y - 90, 1600);
    await h.sleep(500);

    const shifts = myShifts(page, lang);
    const n = await shifts.count();
    // can, preferred (two taps), can, ...
    for (let i = 0; i < n; i++) {
      await h.click(shifts.nth(i), 450);
      if (i === 1) await h.click(shifts.nth(i), 450);
    }
    await h.sleep(600);
    // The save bar stays at the bottom of the screen.
    await h.click(page.getByRole('button', { name: t('Opslaan', 'Save'), exact: true }), 1800);
  },

  async cleanup({ page, lang }) {
    await setDay(page, lang, 'can');
    if (originalMax) {
      await maxDays(page).getByRole('radio', { name: originalMax, exact: true }).click().catch(() => {});
      await page.waitForTimeout(1500);
      originalMax = null;
    }
  },
};

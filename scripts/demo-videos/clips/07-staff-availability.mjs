// Employee app: tick the shifts you can (or prefer to) work on a day.
import { APP } from '../lib.mjs';

const DAY = { nl: 'Zaterdag', en: 'Saturday' };

const state = (btn) =>
  btn.evaluate((b) => {
    const svg = b.querySelector('span svg');
    if (!svg) return 'off';
    return svg.classList.contains('lucide-star') ? 'preferred' : 'can';
  });

// Tap every shift of the day until it is in the wanted state (taps cycle off → can → preferred → off).
async function setDay(page, lang, wanted) {
  await page.goto(`${APP}/me/availability`);
  await page.waitForLoadState('networkidle');
  const dayBtn = page.locator('main button', { has: page.getByText(DAY[lang], { exact: true }) }).first();
  await dayBtn.click();
  const shifts = dayBtn.locator('xpath=following-sibling::div[1]').locator('button:not(:has-text("Niet jouw")):not(:has-text("Not your"))');
  for (const shift of await shifts.all()) {
    for (let i = 0; i < 3 && (await state(shift)) !== wanted; i++) {
      await shift.click();
      await page.waitForTimeout(250);
    }
  }
  await page.waitForTimeout(2000); // autosave
}

export default {
  name: 'staff-availability',
  who: 'employee',
  device: 'mobile',

  async prepare({ page, h, lang }) {
    await setDay(page, lang, 'off');
    await h.goto('/me/availability');
    await h.park(195, 500);
  },

  async run({ page, h, lang }) {
    await h.sleep(500);
    const dayBtn = page.locator('main button', { has: page.getByText(DAY[lang], { exact: true }) }).first();
    await h.scroll(300, 900);
    await h.click(dayBtn, 800);
    const shifts = dayBtn.locator('xpath=following-sibling::div[1]').locator('button:not(:has-text("Niet jouw")):not(:has-text("Not your"))');
    const n = await shifts.count();
    // can, preferred (two taps), can, ...
    // Each tap autosaves; tapping again before the save returns gets overwritten, so wait it out.
    const saved = () => page.waitForTimeout(1500);
    for (let i = 0; i < n; i++) {
      await h.click(shifts.nth(i), 0);
      await saved();
      if (i === 1) {
        await h.click(shifts.nth(i), 0);
        await saved();
      }
    }
    await h.sleep(1200);
    await h.click(dayBtn, 800);
    await h.scroll(-300, 900);
  },

  async cleanup({ page, lang }) {
    await setDay(page, lang, 'can');
  },
};

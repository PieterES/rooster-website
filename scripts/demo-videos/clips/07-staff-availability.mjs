// Employee app, Beschikbaar: your standard week. The max days you want to work (saved straight away),
// tick the shifts you can work on a day (tap twice = preferred) and save; then switch to a single week.
// cleanup() unticks the day again and puts the max days back.
import { APP } from '../lib.mjs';
import { STAFF, toTop } from '../staff.mjs';

const DAY = { nl: 'Zaterdag', en: 'Saturday' };
let originalMax = null;

const slider = (page) => page.locator('main input[type=range]').first();
const dayHeader = (page, lang) => page.locator('main').getByText(DAY[lang], { exact: true }).first();
// Your own shifts on the open day (other departments say "Niet jouw afdeling").
const ticks = (page) => page.locator('main button[aria-pressed]:not([disabled]):visible').filter({ hasNotText: /Niet jouw|Not your/ });

export default {
  name: 'staff-availability',
  ...STAFF,

  async prepare({ page, h }) {
    await h.goto('/me/availability');
    originalMax = await slider(page).inputValue();
    await h.park(300, 640);
  },

  async run({ page, h, t, lang }) {
    const main = page.locator('main');
    await h.sleep(600);

    // Max days per week: tap 4 on the slider (saved straight away)
    const s = slider(page);
    await toTop(h, s, 420);
    const box = await s.boundingBox();
    const [min, max] = await s.evaluate((el) => [+el.min, +el.max]);
    const x = box.x + 12 + ((box.width - 24) * (4 - min)) / (max - min);
    await h.moveTo(x, box.y + box.height / 2);
    await page.mouse.down();
    await page.mouse.up();
    await h.sleep(1000);

    // Saturday: one tap = can, two taps = preferred; then save
    const day = dayHeader(page, lang);
    await toTop(h, day, 110);
    await h.click(day, 800);
    await h.click(ticks(page).nth(0), 450);
    await h.click(ticks(page).nth(1), 300);
    await h.click(ticks(page).nth(1), 700);
    await h.click(page.getByRole('button', { name: t('Opslaan', 'Save'), exact: true }), 1300);

    // Set it once as your standard week, or adjust a single week
    const which = main.locator('.soul-wmid').first();
    await toTop(h, which, 110);
    await h.click(which, 1600);
  },

  async cleanup({ page, lang, t }) {
    await page.goto(`${APP}/me/availability`);
    await page.waitForLoadState('networkidle');
    await dayHeader(page, lang).click();
    await page.waitForTimeout(500);
    let changed = false;
    for (const b of await ticks(page).all()) {
      for (let i = 0; i < 3 && (await b.getAttribute('aria-pressed')) === 'true'; i++) {
        await b.click();
        changed = true;
      }
    }
    if (changed) {
      await page.getByRole('button', { name: t('Opslaan', 'Save'), exact: true }).click();
      await page.waitForTimeout(1500);
    }
    if (originalMax) {
      await slider(page).fill(originalMax);
      await page.waitForTimeout(1500);
      originalMax = null;
    }
  },
};

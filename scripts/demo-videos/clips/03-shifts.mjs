// The week's template (shifts per department), then make two fixed shifts: drag a regular onto
// a shift in the demo week and click the lock. cleanup() unlocks them again, so they don't end
// up in every new week; the schedule clip resets the demo week afterwards.
import { APP } from '../lib.mjs';
import { DEMO_WEEK, resetDemoWeek } from './04-schedule.mjs';

// Shifts of the demo week we fill and lock during the clip (day 2 = Wednesday).
const SLOTS = [
  { shift: 'MIDDAG', day: 2, person: 'Mila Pietersen' },
  { shift: 'Avond', day: 2, person: 'Thomas Bakker' },
];

const slot = (page, s) => page.locator(`main [title^="${s.shift} "]:visible`).nth(s.day);
// The slot card is aria-disabled, so Playwright sees the lock inside it as disabled too.
const lock = (page, s) => slot(page, s).locator('span[role=button]');

async function unlockSlots(page) {
  await page.goto(`${APP}/admin/schedule?week=${DEMO_WEEK}`);
  await page.waitForLoadState('networkidle');
  for (const s of SLOTS) {
    const l = lock(page, s);
    if (!(await l.count()) || !/^(Vaste dienst|Fixed shift)/.test(await l.getAttribute('title'))) continue;
    await l.click({ force: true });
    await page.waitForTimeout(1500);
  }
}

// The person's chip in the "team" panel that sits in the same day column as the target slot.
async function teamChip(page, name, target) {
  const tb = await target.boundingBox();
  const chips = page.getByText(name, { exact: true });
  let best = null;
  for (const chip of await chips.all()) {
    const b = await chip.boundingBox();
    if (!b || b.y < tb.y + tb.height + 40) continue; // skip the schedule grid itself
    const dx = Math.abs(b.x + b.width / 2 - (tb.x + tb.width / 2));
    if (!best || dx < best.dx) best = { chip, dx };
  }
  if (!best) throw new Error(`No team chip for ${name}`);
  return best.chip;
}

export default {
  name: 'shifts',
  who: 'admin',
  device: 'desktop',

  async prepare({ page, h, t }) {
    await unlockSlots(page);
    await resetDemoWeek(page, t);
    await h.goto(`/admin/schedule?week=${DEMO_WEEK}`);
    await h.park(900, 520);
  },

  async run({ page, h, t }) {
    // The template: every shift per department, with times and minimum function.
    await h.click(page.getByRole('button', { name: t('Hulpmiddelen', 'Tools') }), 500);
    await h.click(page.getByRole('button', { name: t('Templates en diensten…', 'Templates and shifts…') }), 1000);
    const dialog = page.locator('[role=dialog]');
    const edit = dialog.locator('[aria-label$=" bewerken"], [aria-label^="Edit "]');
    for (const i of [0, 1, 3]) await h.hover(edit.nth(i).locator('xpath=..'), 400);
    await h.moveTo(720, 600);
    await h.scroll(350, 1000);
    await h.sleep(700);
    await h.click(dialog.getByRole('button', { name: t('Sluiten', 'Close') }), 800);

    // Fixed shifts: drag a regular onto a shift, then lock it.
    await h.click(page.getByRole('button', { name: new RegExp(`^${t('Tonen', 'Show')}`) }), 700);
    await h.moveTo(700, 500);
    await h.scroll(230);
    for (const s of SLOTS) {
      const target = slot(page, s);
      await h.drag(await teamChip(page, s.person, target), target, 900);
      // dragging near the top edge auto-scrolls the page; bring the slot out from under the sticky header
      const box = await target.boundingBox();
      if (box.y < 150) await h.scroll(box.y - 220, 500);
      await h.click(lock(page, s), 1300);
    }
    await h.moveTo(900, 330);
    await h.sleep(1500);
  },

  async cleanup({ page }) {
    await unlockSlots(page);
  },
};

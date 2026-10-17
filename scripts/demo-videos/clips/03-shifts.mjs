// Shift types overview, then fill the weekly fixed-shift template by drag & drop.
//
// Note: adding or editing a shift type is left out on purpose: on dev, adding one
// crashes the page after saving, and saving uppercases the shift code.
import { APP } from '../lib.mjs';

// Template slots we fill during the clip (and empty again afterwards).
const SLOTS = [
  { shift: /Middag · Bartender/i, day: 1, person: 'Mila Pietersen' }, // Tuesday
  { shift: /Avond · Barchef/i, day: 2, person: 'Thomas Bakker' }, // Wednesday
];

const slot = (page, s) => page.locator('main button', { hasText: s.shift }).nth(s.day);

async function emptySlots(page, t) {
  await page.goto(`${APP}/admin/templates`);
  await page.waitForLoadState('networkidle');
  for (const s of SLOTS) {
    const cell = slot(page, s);
    if (!(await cell.innerText()).includes(s.person)) continue;
    await cell.click({ force: true });
    const leeg = page.getByText(t('Leeg', 'Empty'), { exact: true }).last();
    const bb = await leeg.boundingBox();
    await page.mouse.click(bb.x + bb.width / 2, bb.y + bb.height / 2);
    await page.waitForTimeout(1000);
  }
}

// The person's chip in the "team" panel that sits in the same day column as the target slot.
async function teamChip(page, name, target) {
  const tb = await target.boundingBox();
  const chips = page.getByText(name, { exact: true });
  let best = null;
  for (const chip of await chips.all()) {
    const b = await chip.boundingBox();
    if (!b || b.y < tb.y + tb.height + 40) continue; // skip the template grid itself
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
    await emptySlots(page, t);
    await h.goto('/admin/shift-types');
    await h.park(760, 520);
  },

  async run({ page, h, t }) {
    const rows = page.locator('main tbody tr');
    for (let i = 0; i < 3; i++) await h.hover(rows.nth(i).locator('td').nth(2), 350);
    const deptFilter = page.locator('main select').nth(1);
    await h.select(deptFilter, { label: 'Bediening' }, 1200);
    await h.hover(rows.nth(2).locator('td').nth(2), 600);
    await h.select(deptFilter, { label: 'Bar' }, 800);

    await h.click(page.getByRole('link', { name: t('Vaste diensten', 'Fixed shifts') }), 1200);
    await h.click(page.getByRole('button', { name: t('Team tonen', 'Show team') }), 600);
    await h.scroll(230);

    for (const s of SLOTS) {
      const target = slot(page, s);
      await h.drag(await teamChip(page, s.person, target), target, 1000);
    }
    await h.moveTo(900, 330);
    await h.sleep(1500);
  },

  async cleanup({ page, t }) {
    await emptySlots(page, t);
  },
};

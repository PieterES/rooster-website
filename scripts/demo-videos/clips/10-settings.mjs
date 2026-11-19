// Instellingen: settings as decisions ("welke onderdelen gebruik je?", "hoeveel keur je zelf goed?")
// and clock rounding, with a live example under each choice. It adapts to how you work, no manual.
// Changes real company settings on dev; prepare() remembers them and cleanup() puts them back.
import { APP } from '../lib.mjs';

const claimGroup = (page, t) => page.getByRole('radiogroup', { name: t('Open diensten claimen', 'Claiming open shifts') });
const stepSelect = (page) => page.locator('#klokken select').nth(2);
const checkedLabel = (group) => group.locator('[role=radio][aria-checked=true]').innerText();

let original;

async function gotoSettings(page) {
  await page.goto(`${APP}/admin/settings`);
  await page.waitForLoadState('networkidle');
}

async function apply(page, t, claimLabel, step) {
  const group = claimGroup(page, t);
  // One change at a time: each one autosaves the whole form, and overlapping saves can undo each other.
  if ((await checkedLabel(group)).trim() !== claimLabel) {
    await group.getByRole('radio', { name: claimLabel, exact: true }).click();
    await page.waitForTimeout(2500);
  }
  if ((await stepSelect(page).inputValue()) !== step) {
    await stepSelect(page).selectOption(step);
    await page.waitForTimeout(2500);
  }
}

export default {
  name: 'settings',
  who: 'admin',
  device: 'desktop',
  speed: 1.4, // same pace as the employee clips

  async prepare({ page, h, t }) {
    await gotoSettings(page);
    original = { claim: (await checkedLabel(claimGroup(page, t))).trim(), step: await stepSelect(page).inputValue() };
    await apply(page, t, t('Ik beslis', 'I decide'), '15');
    await h.goto('/admin/settings');
    await h.park(900, 300);
  },

  async run({ page, h, t }) {
    const hint = (text) => page.locator('main').getByText(text, { exact: true }).filter({ visible: true }).first();
    await h.sleep(500);
    await h.moveTo(800, 520);
    await h.scroll(150, 800);

    // Which parts do you use?
    await h.hover(hint(t('welke onderdelen gebruik je?', 'which parts do you use?')), 700);
    const toggles = page.locator('#functies [role=switch]');
    for (let i = 0; i < Math.min(3, await toggles.count()); i++) await h.hover(toggles.nth(i), 400);

    // How much do you approve yourself?
    await h.hover(hint(t('hoeveel keur je zelf goed?', 'how much do you approve yourself?')), 700);
    const group = claimGroup(page, t);
    await h.hover(group.getByRole('radio', { name: t('Ik beslis', 'I decide'), exact: true }), 400);
    await h.click(group.getByRole('radio', { name: t('Zelfde functie gaat vanzelf', 'Same function automatic'), exact: true }), 1200);

    // Clock rounding: the example under it follows the choice.
    await h.moveTo(800, 600);
    const box = await page.locator('#klokken').boundingBox();
    await h.scroll(box.y - 140, 1500);
    await h.hover(page.locator('#klokken select').nth(0), 600);
    await h.select(stepSelect(page), '5', 1600);
    await h.moveTo(700, 560);
    await h.sleep(1000);
  },

  async cleanup({ page, t }) {
    if (!original) return;
    await gotoSettings(page);
    await apply(page, t, original.claim, original.step);
    original = undefined;
  },
};

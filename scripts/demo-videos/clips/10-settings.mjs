// Admin settings: switch optional modules, approval rules and how staff enter availability.
// Changes real company settings on dev; prepare() remembers them and cleanup() puts them back.
import { APP } from '../lib.mjs';

const TITLES = {
  features: /^(Functies|Features)$/,
  requests: /^(Verzoeken & goedkeuring|Requests & approval)$/,
  availability: /^(Beschikbaarheid invullen|Entering availability)$/,
};

const section = (page, key) => page.locator('details', { has: page.locator('summary h2', { hasText: TITLES[key] }) });
const claimSelect = (page) => section(page, 'requests').locator('select').first();
const modeSelect = (page) => section(page, 'availability').locator('select').first();

async function open(page, key) {
  const s = section(page, key);
  if ((await s.getAttribute('open')) === null) await s.locator('summary').click();
  await page.waitForTimeout(300);
}

let original;

async function gotoSettings(page) {
  await page.goto(`${APP}/admin/settings`);
  await page.waitForLoadState('networkidle');
}

export default {
  name: 'settings',
  who: 'admin',
  device: 'desktop',

  async prepare({ page, h }) {
    await gotoSettings(page);
    await open(page, 'requests');
    await open(page, 'availability');
    original = { claim: await claimSelect(page).inputValue(), mode: await modeSelect(page).inputValue() };
    // Start state: manual approval, availability per shift.
    if (original.claim !== 'MANUAL') await claimSelect(page).selectOption('MANUAL');
    if (original.mode !== 'SHIFTS') await modeSelect(page).selectOption('SHIFTS');
    await page.waitForTimeout(1500); // autosave
    await h.goto('/admin/settings');
    await h.park(900, 140);
  },

  async run({ page, h }) {
    await h.sleep(400);

    // Optional modules on/off (only shown, not toggled).
    await h.click(section(page, 'features').locator('summary'), 700);
    const toggles = section(page, 'features').locator('button[role=switch], input[type=checkbox]');
    for (let i = 0; i < Math.min(3, await toggles.count()); i++) await h.hover(toggles.nth(i), 450);
    await h.click(section(page, 'features').locator('summary'), 500);

    // Approval rules: auto-approve claims within the same function.
    await h.click(section(page, 'requests').locator('summary'), 700);
    await h.select(claimSelect(page), 'SAME_FUNCTION', 1200);
    await h.click(section(page, 'requests').locator('summary'), 500);

    // Availability: per shift → time window.
    await h.click(section(page, 'availability').locator('summary'), 800);
    await h.hover(section(page, 'availability').locator('p').filter({ hasText: /Tijdvak:|Time window:/ }), 900);
    await h.select(modeSelect(page), 'TIME_WINDOWS', 1500);
    await h.hover(section(page, 'availability').locator('summary'), 1200);
  },

  async cleanup({ page }) {
    if (!original) return;
    await gotoSettings(page);
    await open(page, 'requests');
    await open(page, 'availability');
    await claimSelect(page).selectOption(original.claim);
    await modeSelect(page).selectOption(original.mode);
    await page.waitForTimeout(2000); // autosave
  },
};

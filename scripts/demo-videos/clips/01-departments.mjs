// Afdelingen & functies: departments with their colour and functions (who may also fill what),
// "Mag roosteren" on a function (delegated scheduling), and the locations.
// Switches "Mag roosteren" on for one function; cleanup() puts it back the way it was.
import { APP } from '../lib.mjs';

const DEPT = 'Bediening';
const RANK = 'Hoofdober';
let wasOn = null;

const section = (page) => page.locator(`main section[aria-label="${DEPT}"]:visible`);
const rankButton = (page) => section(page).getByRole('button', { name: new RegExp(`^${RANK}`) }).first();
const scheduleBox = (page, t) =>
  section(page).locator('label', { hasText: t('Mag roosteren', 'Can build schedules') }).locator('input[type=checkbox]');

async function setSchedule(page, t, on) {
  await page.goto(`${APP}/admin/departments`);
  await page.waitForLoadState('networkidle');
  await rankButton(page).click();
  const box = scheduleBox(page, t);
  const now = await box.isChecked();
  if (now !== on) {
    await box.click();
    await page.waitForTimeout(1500);
  }
  return now;
}

export default {
  name: 'departments',
  who: 'admin',
  device: 'desktop',
  speed: 1.4, // same pace as the employee clips

  async prepare({ page, h, t }) {
    wasOn = await setSchedule(page, t, false);
    await h.goto('/admin');
    await h.park(700, 500);
  },

  async run({ page, h, t }) {
    const nav = page.getByRole('navigation', { name: t('Hoofdmenu', 'Main menu') });
    await h.click(nav.getByRole('button', { name: new RegExp(`^${t('Medewerkers', 'Employees')}`) }), 500);
    await h.click(page.getByRole('link', { name: t('Afdelingen & functies', 'Departments & functions') }), 1100);

    // Colour and functions per department ("mag ook": who may fill which function)
    for (const d of ['Bar', DEPT, 'Keuken']) {
      await h.hover(page.locator(`main section[aria-label="${d}"]:visible`).getByText(d, { exact: true }).first(), 450);
    }
    await h.hover(page.locator('main section[aria-label="Bar"]:visible [role=group] button').nth(2), 500);
    await h.hover(section(page).getByText(/^(mag ook|may also):/).filter({ visible: true }).first(), 700);

    // Delegated scheduling: this function may make the schedule
    await h.click(rankButton(page), 900);
    await h.click(scheduleBox(page, t), 1400);
    await h.click(rankButton(page), 900); // close: the "Mag roosteren" label stays on the function

    // Locations
    await h.moveTo(720, 600);
    await h.scroll(420, 1100);
    await h.hover(page.locator('main').getByText('Terras', { exact: true }).filter({ visible: true }).first(), 900);
    await h.moveTo(1150, 760);
    await h.sleep(900);
  },

  async cleanup({ page, t }) {
    if (wasOn === null) return;
    await setSchedule(page, t, wasOn);
    wasOn = null;
  },
};

// Templates and shifts: every new week fills itself from the template. A shift's weekdays (Ma–Zo,
// e.g. no late shift Monday to Thursday), "Sluitdienst", a day that is "Gesloten", and a fixed shift:
// drag a regular onto a shift and switch on the lock, from then on they're on it every new week.
// cleanup() ends that fixed shift again; the schedule clip resets the demo week afterwards.
import { APP } from '../lib.mjs';
import { DEMO_WEEK, resetDemoWeek, panelRow } from './04-schedule.mjs';

// The fixed shift we make during the clip (day 1 = Tuesday): Thomas already has the other evenings.
const SLOT = { shift: 'Avond 17:00', day: 1, person: 'Thomas Bakker' };

const slot = (page) => page.locator(`main [title^="${SLOT.shift}"]:visible`).nth(SLOT.day);
const tab = (page, name) => page.getByRole('tab', { name, exact: true });
// The row header of a shift in the Bar block opens its template settings.
const rowHeader = (page, name) =>
  page.locator('main button[title="Dienst bewerken"]:visible, main button[title="Edit shift"]:visible').filter({ hasText: name }).first();

async function unlockSlot(page) {
  await page.goto(`${APP}/admin/schedule?week=${DEMO_WEEK}`);
  await page.waitForLoadState('networkidle');
  const stop = slot(page).locator('span[role=button]');
  if (await stop.count()) {
    await stop.click({ force: true });
    await page.waitForTimeout(1500);
  }
}

export default {
  name: 'shifts',
  who: 'admin',
  device: 'wide', // the header (week, view, Acties, Publiceren) only fits on one line from ~1600px
  speed: 1.4, // same pace as the employee clips

  async prepare({ page, h }) {
    await unlockSlot(page);
    await resetDemoWeek(page);
    await h.goto(`/admin/schedule?week=${DEMO_WEEK}`);
    await h.park(560, 300);
  },

  async run({ page, h, t }) {
    // A shift's template: times, minimum function, the days it runs, closing shift.
    await h.click(rowHeader(page, 'Sluit'), 1000);
    const days = page.getByRole('group', { name: t('Dagen', 'Days') });
    await h.hover(days.getByRole('button').nth(0), 500); // Ma: off
    await h.hover(days.getByRole('button').nth(4), 500); // Vr: on
    await h.hover(page.locator('label', { hasText: new RegExp(`^${t('Sluitdienst', 'Closing shift')}$`) }).filter({ visible: true }).first(), 900);
    await h.click(page.getByRole('button', { name: t('Annuleren', 'Cancel'), exact: true }).filter({ visible: true }).first(), 600);

    // Monday to Thursday that shift is "Gesloten"; one click reopens it for a single day.
    await h.click(page.locator(`main button[title="${t('Gesloten', 'Closed')}"]:visible`).first(), 1300);

    // A fixed shift: drag a regular onto it and lock it.
    await h.click(tab(page, t('Medewerkers', 'Employees')), 500);
    const target = slot(page);
    await h.drag(panelRow(page, SLOT.person), target, 1000);
    await h.click(target, 900); // opens the Dienst tab for this shift
    await h.click(page.getByRole('button', { name: t('Vaste dienst', 'Fixed shift'), exact: true, pressed: false }), 1600);
    await h.moveTo(560, 330);
    await h.sleep(1300);
  },

  async cleanup({ page }) {
    await unlockSlot(page);
  },
};

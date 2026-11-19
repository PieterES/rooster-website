// Employee app, Klokken: clock in with one button, ask for a correction on an earlier clock-in, and
// clock out with the form (break, meals). What you worked this week and month is on the same page.
// A separate admin session moves the clock-in back ~5 hours off camera (so clocking out shows a real
// shift); cleanup() deletes the clock record and rejects the correction (it can't be deleted).
// Phone clocking must be on for the company, and the employee needs a shift today.
import { STAFF, openAdmin, call, toTop } from '../staff.mjs';

let admin; // { browser, page }
let logId;
let beforeCorrections = null;

const openLog = async () => (await call(admin.page, 'GET', '/api/admin/clock')).openLogs.find((l) => l.employeeName.startsWith('Sophie'));
const corrections = async (page) => ((await call(page, 'GET', '/api/me/hours/corrections')).corrections ?? []).map((c) => c.id);

export default {
  name: 'staff-clock',
  ...STAFF,

  async prepare({ page, h }) {
    admin = await openAdmin();
    // Leftover from an interrupted run: remove it so the clip starts clocked out.
    const stale = await openLog();
    if (stale) await call(admin.page, 'DELETE', `/api/admin/clock/${stale.id}`);
    logId = undefined;
    await h.goto('/me/clock');
    beforeCorrections = await corrections(page);
    await h.park(300, 640);
  },

  async run({ page, h, t }) {
    const main = page.locator('main');
    const big = (name) => page.getByRole('button', { name, exact: true }).first();
    await h.sleep(700);

    // Clock in
    await h.click(big(t('Inklokken', 'Clock in')), 0);
    await big(t('Uitklokken', 'Clock out')).waitFor();
    await h.sleep(1400);
    // Off camera: move the clock-in a few hours back.
    const log = await openLog();
    if (!log) throw new Error('No open clock record for Sophie');
    logId = log.id;
    const rewind = call(admin.page, 'PATCH', `/api/admin/clock/${logId}`, { clockIn: new Date(new Date(log.clockIn).getTime() - 5 * 3600e3).toISOString() });

    // This week and this month; tap an earlier clock-in to ask for a correction
    const row = main.locator('button').filter({ hasText: /[1-9]:\d\d\s*[uh](?![a-z])/ }).first(); // not today's open one (0:00)
    await toTop(h, row, 330);
    await h.click(row, 900);
    const dlg = page.getByRole('dialog');
    await h.click(dlg.getByRole('button', { name: '0:45', exact: true }), 400);
    await h.type(dlg.locator('textarea').first(), t('Pauze was langer, het was erg druk.', 'My break was longer, it was very busy.'), 300);
    await h.click(dlg.getByRole('button', { name: t('Correctie versturen', 'Submit correction') }), 1500);
    await rewind;
    // The manager's edit sends the employee a notification; keep the bell clean.
    await page.evaluate(() => fetch('/api/notifications')).catch(() => {});

    // Clock out with the form: break and meals
    const out = big(t('Uitklokken', 'Clock out'));
    await toTop(h, out, 400);
    await h.click(out, 800);
    const modal = page.getByRole('dialog');
    await h.click(modal.getByRole('button', { name: '0:30', exact: true }), 500);
    await h.click(modal.getByRole('button', { name: t('Uitklokken', 'Clock out'), exact: true }), 0);
    await main.getByText(new RegExp(`^${t('Klaar voor vandaag', 'Done for today')}$`)).waitFor();
    await h.sleep(1500);
    await h.scroll(380, 900);
    await h.sleep(1500);
  },

  async cleanup({ page }) {
    try {
      if (logId) await call(admin.page, 'DELETE', `/api/admin/clock/${logId}`).catch(() => {});
      if (beforeCorrections) {
        for (const id of (await corrections(page)).filter((id) => !beforeCorrections.includes(id)))
          await call(admin.page, 'PATCH', `/api/admin/hours/corrections/${id}`, { action: 'reject' }).catch(() => {});
      }
    } finally {
      await admin?.browser.close();
      admin = undefined;
      logId = undefined;
      beforeCorrections = null;
    }
  },
};

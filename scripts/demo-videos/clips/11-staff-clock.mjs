// Employee app: clock in, and later clock out with the clock-out form (lunch, break, dinner).
// Creates a real clock record on dev. A separate admin session moves the clock-in a few hours
// back while the employee is on the dashboard (so clocking out shows a realistic shift instead of
// negative hours after rounding), and cleanup() deletes the record again.
import { APP, launch } from '../lib.mjs';

let admin; // { browser, page }
let logId;

const api = (method, path, body) =>
  admin.page.evaluate(
    async ([method, path, body]) => {
      const res = await fetch(path, {
        method,
        headers: body ? { 'Content-Type': 'application/json' } : {},
        body: body ? JSON.stringify(body) : undefined,
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(`${method} ${path}: ${res.status} ${JSON.stringify(data)}`);
      return data;
    },
    [method, path, body],
  );

const EMPLOYEE_NAME = 'Sophie';
const findSophie = async () => {
  const { openLogs } = await api('GET', '/api/admin/clock');
  return openLogs.find((l) => l.employeeName.startsWith(EMPLOYEE_NAME));
};

export default {
  name: 'staff-clock',
  who: 'employee',
  device: 'mobile',

  async prepare({ page, h }) {
    admin = await launch({ who: 'admin', device: 'desktop' });
    await admin.page.goto(`${APP}/admin`);
    // Leftover from an interrupted run: remove it so the clip starts clocked out.
    const stale = await findSophie();
    if (stale) await api('DELETE', `/api/admin/clock/${stale.id}`);
    logId = undefined;

    await h.goto('/me');
    await h.park(195, 600);
  },

  async run({ page, h, t }) {
    const tab = (href) => page.locator(`nav a[href="${href}"]`).last();
    const big = () => page.getByRole('button', { name: new RegExp(`^(${t('Inklokken|Uitklokken', 'Clock in|Clock out')})$`) }).first();

    await h.sleep(700);
    await h.click(tab('/me/clock'), 1200);

    // Clock in.
    await h.click(big(), 0);
    await page.getByText(new RegExp(t('Ingeklokt sinds', 'Clocked in since'))).waitFor();
    await h.sleep(1600);

    // Move the clock-in ~5 hours back (off camera) while we glance at the dashboard.
    const log = await findSophie();
    if (!log) throw new Error('No open clock record found for Sophie');
    logId = log.id;
    const rewind = api('PATCH', `/api/admin/clock/${logId}`, { clockIn: new Date(Date.now() - 5 * 3600e3).toISOString() });
    await h.click(tab('/me'), 1600);
    await rewind;
    await h.click(tab('/me/clock'), 2400);

    // Clock out with the form.
    await h.click(big(), 900);
    const modal = page.locator('div.fixed', { has: page.getByText(t('Vul in voor het uitklokken', 'Fill in before clocking out')) }).last();
    await h.click(modal.getByRole('button', { name: t('Ja', 'Yes'), exact: true }).first(), 600);
    await h.click(modal.getByRole('button', { name: '30m', exact: true }), 600);
    await h.click(modal.getByRole('button', { name: t('Uitklokken', 'Clock out'), exact: true }), 0);
    await page.getByText(new RegExp(t('Uitgeklokt om', 'Clocked out at'))).waitFor();
    await h.sleep(1500);
    await h.scroll(350, 900);
    await h.sleep(1800);
  },

  async cleanup() {
    try {
      if (logId) await api('DELETE', `/api/admin/clock/${logId}`);
      else {
        const stale = await findSophie();
        if (stale) await api('DELETE', `/api/admin/clock/${stale.id}`);
      }
    } finally {
      await admin?.browser.close();
      admin = undefined;
    }
  },
};

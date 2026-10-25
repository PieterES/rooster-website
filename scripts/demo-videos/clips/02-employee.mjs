// Add a new employee and assign a department + function.
import { APP } from '../lib.mjs';

const NAME = 'Noah de Vries';

async function deleteEmployee(page, t) {
  await page.goto(`${APP}/admin/employees`);
  await page.waitForLoadState('networkidle');
  const card = page.locator('main a[href^="/admin/employees/c"]', { hasText: NAME });
  while (await card.count()) {
    await card.first().click();
    await page.waitForLoadState('networkidle');
    await page.getByRole('button', { name: t('Medewerker verwijderen', 'Delete employee') }).click();
    await page.getByRole('button', { name: t('Verwijderen', 'Delete'), exact: true }).click();
    // the app redirects back to the list after deleting
    await page.waitForURL((u) => u.pathname === '/admin/employees', { timeout: 30000 }).catch(() => {});
    await page.goto(`${APP}/admin/employees`, { waitUntil: 'domcontentloaded', timeout: 30000 });
    await page.waitForLoadState('networkidle');
  }
}

export default {
  name: 'employee',
  who: 'admin',
  device: 'desktop',

  async prepare({ page, h, t }) {
    await deleteEmployee(page, t);
    await h.goto('/admin/employees');
    await h.park(800, 450);
  },

  async run({ page, h, t }) {
    await h.click(page.getByText(t('Medewerker toevoegen', 'Add employee')), 900);
    await h.type(page.locator('input[name=name]'), NAME);
    await h.type(page.locator('input[name=email]'), 'noah.devries@example.com');
    await h.type(page.locator('input[name=phoneNumber]'), '06 12345678');
    await h.type(page.locator('input[name=availableDaysPerWeek]'), '4');
    await h.type(page.locator('input[name=hourlyRate]'), '14.50');

    const dept = page.locator('main button', { hasText: 'Bediening' });
    await h.click(dept, 600);
    const fn = page.locator('main select').filter({ hasText: 'Ober' });
    await h.select(fn, { label: 'Ober' }, 700);

    await h.scroll(450);
    await h.click(page.locator('main').getByRole('button', { name: t('Medewerker toevoegen', 'Add employee') }), 1500);
    await page.waitForURL((u) => !u.pathname.endsWith('/new'), { timeout: 6000 }).catch(() => {});
    if (!/\/admin\/employees$/.test(new URL(page.url()).pathname)) {
      await h.goto('/admin/employees');
    }
    await page.waitForLoadState('networkidle');
    const card = page.locator('main a', { hasText: NAME });
    if (await card.count()) await h.hover(card.first(), 1200);
  },

  async cleanup({ page, t }) {
    await deleteEmployee(page, t);
  },
};

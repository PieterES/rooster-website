// Create a department and add two functions to it.
import { APP } from '../lib.mjs';

const deptName = (t) => t('Bakkerij', 'Bakery');

async function deleteDept(page, t) {
  await page.goto(`${APP}/admin/departments`);
  await page.waitForLoadState('networkidle');
  const name = page.locator('main').getByText(deptName(t), { exact: true });
  while (await name.count()) {
    const row = name.first().locator('xpath=ancestor::*[.//select][1]');
    await row.locator('button').last().click();
    await page.getByRole('button', { name: t('Verwijderen', 'Delete'), exact: true }).click();
    await page.waitForLoadState('networkidle');
    await page.waitForTimeout(500);
  }
}

export default {
  name: 'departments',
  who: 'admin',
  device: 'desktop',

  async prepare({ page, h, t }) {
    await deleteDept(page, t);
    await h.goto('/admin');
    await h.park(700, 500);
  },

  async run({ page, h, t }) {
    await h.click(page.getByRole('button', { name: /^Team/ }), 500);
    await h.click(page.getByRole('link', { name: t('Afdelingen & locaties', 'Departments & locations') }), 900);
    await h.click(page.getByRole('button', { name: t('Afdeling toevoegen', 'Add department') }).first(), 500);
    await h.type(page.getByPlaceholder(t('Naam nieuwe afdeling', 'New department name')), deptName(t));
    await h.click(page.getByRole('button', { name: t('Afdeling toevoegen', 'Add department') }).first(), 1000); // the dialog's submit precedes the page button in the DOM

    const row = page.locator('main').getByText(deptName(t), { exact: true }).locator('xpath=ancestor::*[.//select][1]');
    await h.click(row.locator('button').first(), 700);

    const input = page.getByPlaceholder(t('Naam nieuwe functie', 'New function name'));
    const add = page.getByRole('button', { name: t('Functie toevoegen', 'Add function') });
    for (const fn of [t('Banketbakker', 'Pastry chef'), t('Bakker', 'Baker')]) {
      await h.type(input, fn);
      await h.click(add, 900);
    }
    await h.moveTo(900, 760);
    await h.sleep(1200);
  },

  async cleanup({ page, t }) {
    await deleteDept(page, t);
  },
};

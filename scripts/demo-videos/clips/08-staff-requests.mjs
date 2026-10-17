// Employee app: propose a shift swap with a colleague.
// The request is withdrawn again afterwards so the demo data stays clean.
import { APP } from '../lib.mjs';
import { DEMO_WEEK } from './04-schedule.mjs';

const COLLEAGUE = 'Vera Hoekstra';

async function withdraw(page, t) {
  await page.goto(`${APP}/me/switch-shifts`);
  await page.waitForLoadState('networkidle');
  // only our own demo request (Lunch on the demo week's Monday), not the seeded ones
  const card = page.getByRole('listitem').filter({ hasText: 'Lunch' }).filter({ has: page.getByRole('button', { name: t('Intrekken', 'Withdraw') }) });
  for (let i = 0; i < 3 && (await card.count()); i++) {
    await card.last().getByRole('button', { name: t('Intrekken', 'Withdraw') }).click();
    // confirm only inside a dialog; other cards have their own "withdraw" buttons
    const confirm = page.locator('div.fixed button:visible', { hasText: new RegExp(`^(${t('Intrekken|Bevestigen', 'Withdraw|Confirm')})$`) });
    await page.waitForTimeout(500);
    if (await confirm.count()) await confirm.last().click().catch(() => {});
    await page.waitForTimeout(1200);
  }
}

export default {
  name: 'staff-requests',
  who: 'employee',
  device: 'mobile',

  async prepare({ page, h, t }) {
    await withdraw(page, t);
    await h.goto(`/me/schedule?view=month&month=${DEMO_WEEK.slice(0, 7)}&day=${DEMO_WEEK}&filter=mine`);
    await h.park(195, 500);
  },

  async run({ page, h, t }) {
    await h.sleep(500);
    await h.scroll(420, 900);
    await h.click(page.locator('main').getByText('Lunch').last(), 900);
    await h.click(page.getByText(t('Ruil met collega', 'Swap with colleague')).first(), 900);

    // search the colleague, then pick one of their shifts in the demo week (Thursday's Middag)
    const sheet = page.locator('div.fixed').filter({ has: page.getByRole('button', { name: t('Bevestigen', 'Confirm'), exact: true }) }).last();
    await h.type(sheet.locator('input').first(), COLLEAGUE.split(' ')[0], 500);
    await h.click(sheet.getByText(COLLEAGUE, { exact: true }).last(), 1000);
    const day = String(+DEMO_WEEK.slice(8) + 3);
    await h.click(sheet.getByRole('button').filter({ hasText: new RegExp(`\\b${day}\\b`) }).filter({ hasText: 'Middag' }).first(), 700);
    await h.type(sheet.getByPlaceholder(t('Notitie (optioneel)', 'Note (optional)')), t('Kun jij maandag? Dan neem ik jouw donderdag.', 'Could you take Monday? I’ll do your Thursday.'), 500);
    await h.click(sheet.getByRole('button', { name: t('Bevestigen', 'Confirm'), exact: true }), 1800);
  },

  async cleanup({ page, t }) {
    await withdraw(page, t);
  },
};

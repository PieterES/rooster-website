// Takes the app screenshots used on the website (src/assets/screenshots/*.png).
//
//   node --env-file=.env.demo scripts/demo-videos/screenshots.mjs              # all
//   node --env-file=.env.demo scripts/demo-videos/screenshots.mjs admin-hours  # one
//
// Same accounts and overlay as the demo clips (no cursor, chat button and tutorial panel hidden).
// The interface is Dutch; the English pages use the same images.
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import { launch, setLanguage } from './lib.mjs';

const here = dirname(fileURLToPath(import.meta.url));
const outDir = join(here, '../../src/assets/screenshots');

const monday = (d = new Date()) => {
  const m = new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()));
  m.setUTCDate(m.getUTCDate() - ((m.getUTCDay() + 6) % 7));
  return m.toISOString().slice(0, 10);
};

const SHOTS = [
  // Yesterday: a full day, planned next to clocked (dev has clock history from the demo-state seed).
  { name: 'admin-hours', who: 'admin', device: 'desktop', path: () => `/admin/hours?date=${new Date(Date.now() - 86400e3).toISOString().slice(0, 10)}` },
  // The current (published) week.
  { name: 'admin-schedule', who: 'admin', device: 'desktop', path: () => `/admin/schedule?week=${monday()}` },
  { name: 'employee-dashboard', who: 'employee', device: 'mobile', path: '/me' },
];

const wanted = process.argv.slice(2).filter((a) => !a.startsWith('--'));
const selected = wanted.length ? SHOTS.filter((s) => wanted.includes(s.name)) : SHOTS;

for (const shot of selected) {
  const { browser, page } = await launch({ who: shot.who, device: shot.device, scale: shot.device === 'desktop' ? 1.5 : 2 });
  try {
    await setLanguage(page, shot.who, 'nl');
    const path = typeof shot.path === 'function' ? shot.path() : shot.path;
    await page.goto(page.url().replace(/(https?:\/\/[^/]+).*/, '$1') + path);
    await page.waitForLoadState('networkidle');
    await page.mouse.move(-100, -100);
    await page.waitForTimeout(1500); // let the rise-in animations finish
    await page.screenshot({ path: join(outDir, `${shot.name}.png`) });
    console.log(`✓ ${shot.name}`);
  } catch (e) {
    console.error(`✗ ${shot.name}: ${e.message}`);
    process.exitCode = 1;
  } finally {
    await browser.close();
  }
}

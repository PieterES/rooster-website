// Records the product demo clips into public/videos/.
//
//   node --env-file=.env.demo scripts/demo-videos/record.mjs                 # all clips, nl + en
//   node --env-file=.env.demo scripts/demo-videos/record.mjs departments     # one clip
//   node --env-file=.env.demo scripts/demo-videos/record.mjs --lang=nl schedule
import { mkdirSync, readdirSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import { launch, setLanguage, actions, recorder, encode } from './lib.mjs';

const here = dirname(fileURLToPath(import.meta.url));
const outDir = join(here, '../../public/videos');
mkdirSync(outDir, { recursive: true });

const args = process.argv.slice(2);
const langs = (args.find((a) => a.startsWith('--lang='))?.slice(7) ?? 'nl,en').split(',');
const dryRun = args.includes('--dry-run');
// --now=19:00: pretend it's that time today on dev (sets the app's demo-now cookie in every browser).
const now = args.find((a) => a.startsWith('--now='))?.slice(6);
if (now) {
  if (!/^([01]?\d|2[0-3]):[0-5]\d$/.test(now)) die(`--now wants HH:MM, got "${now}"`);
  process.env.GEDEKT_DEMO_NOW = now;
}
// --speed=1.5: every move and pause in the clips 1.5x shorter (clips can set their own `speed`).
const speedArg = Number(args.find((a) => a.startsWith('--speed='))?.slice(8)) || undefined;
const wanted = args.filter((a) => !a.startsWith('--'));

const clipFiles = readdirSync(join(here, 'clips')).filter((f) => f.endsWith('.mjs')).sort();
const clips = [];
for (const f of clipFiles) clips.push((await import(join(here, 'clips', f))).default);
const selected = wanted.length ? wanted.map((n) => clips.find((c) => c.name === n) ?? die(`Unknown clip ${n}`)) : clips;

function die(msg) {
  console.error(msg);
  process.exit(1);
}

for (const clip of selected) {
  for (const lang of langs) {
    const label = `${clip.name}-${lang}`;
    console.log(`▶ ${label}`);
    const { browser, page } = await launch({ who: clip.who, device: clip.device, cursor: clip.cursor });
    const h = actions(page, { speed: speedArg ?? clip.speed ?? 1 });
    const t = (nl, en) => (lang === 'en' ? en : nl);
    try {
      await setLanguage(page, clip.who, lang);
      await clip.prepare?.({ page, h, t, lang });
      const rec = await recorder(page, clip.device);
      await rec.start();
      await h.sleep(600);
      await clip.run({ page, h, t, lang });
      await h.sleep(1200);
      const captured = await rec.stop();
      if (!dryRun) encode(captured, join(outDir, label));
      console.log(`  ✓ ${captured.frames.length} frames`);
    } catch (e) {
      console.error(`  ✗ ${label}: ${e.message}`);
      await page.screenshot({ path: join(outDir, `${label}-error.png`) }).catch(() => {});
      process.exitCode = 1;
    } finally {
      await clip.cleanup?.({ page, h, t, lang }).catch((e) => console.error(`  cleanup failed: ${e.message}`));
      if (lang !== 'nl') await setLanguage(page, clip.who, 'nl').catch(() => {});
      await browser.close();
    }
  }
}

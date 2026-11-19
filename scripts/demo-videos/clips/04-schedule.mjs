// The flagship: build a week. Start from the template (fixed shifts filled), click a person to see
// the shifts they can take in green and place them, drag someone from the side panel onto a shift,
// let "Genereren" fill the rest, publish, look at the week "Op tijd" and back. Then change a shift in the published week and publish the
// changes: employees only see it then, and only the people it affects get a message.
// The week stays published afterwards.
import { APP } from '../lib.mjs';

export const DEMO_WEEK = '2026-12-07';
const SEASON = 'winter'; // the template the demo week runs on

const post = (page, path, body) =>
  page.evaluate(
    async ([path, body]) => {
      const res = await fetch(path, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(body) });
      if (!res.ok) throw new Error(`${path}: ${res.status} ${await res.text()}`);
    },
    [path, body],
  );

// Back to the week's template with only the fixed shifts filled (what "Leegmaken" used to do):
// withdraw the publication, then reload the template. The UI has no buttons for this.
// Note: this also deletes claims and swap requests on the week's shifts.
export async function resetDemoWeek(page) {
  if (!page.url().startsWith(APP)) await page.goto(`${APP}/admin`);
  await post(page, '/api/admin/schedule/unpublish', { week: DEMO_WEEK });
  await post(page, '/api/admin/schedule/import-empty', { week: DEMO_WEEK, season: SEASON });
}

// "59, waarvan 49 open" in the footer of the week.
const openCount = (page) =>
  page.locator('main').innerText().then((s) => +(s.match(/(?:waarvan|of which) (\d+) open/)?.[1] ?? -1));

export const panelRow = (page, name) => page.locator('div[aria-roledescription="draggable"]:visible', { hasText: name }).first();
const cells = (page) => page.locator('main button[aria-roledescription="draggable"]:visible');

const centerOf = async (loc) => {
  await loc.scrollIntoViewIfNeeded();
  const b = await loc.boundingBox();
  return { x: b.x + b.width / 2, y: b.y + b.height / 2 };
};

/**
 * Drag `source` and drop it on a cell the app lights up green while dragging (a shift this person
 * can do). `wantOpen`: an open shift, otherwise one that already has someone on it.
 */
export async function dragToEligible(page, h, source, { wantOpen, after = 1000, prefer, skip } = {}) {
  const a = await centerOf(source);
  await h.moveTo(a.x, a.y);
  await page.mouse.down();
  await h.sleep(150);
  await h.moveTo(a.x - 14, a.y + 6, 140);
  await h.sleep(350);
  const idx = await cells(page).evaluateAll(
    (els, [wantOpen, prefer, skip]) => {
      const ok = els
        .map((el, i) => ({ el, i, r: el.getBoundingClientRect() }))
        .filter(({ el, r }) => (el.className.includes('var(--fit)') || el.className.includes('bg-fit')) && r.top > 120 && r.bottom < innerHeight - 20)
        .filter(({ el }) => /^open\b/.test(el.innerText.trim()) === wantOpen)
        .filter(({ el }) => !skip || !el.innerText.trim().startsWith(skip));
      const pick = (prefer && ok.find(({ el }) => el.title.startsWith(prefer))) || ok[Math.floor(ok.length / 2)];
      return pick ? pick.i : -1;
    },
    [wantOpen, prefer, skip],
  );
  if (idx < 0) {
    await page.mouse.up();
    throw new Error('No eligible shift on screen to drop on');
  }
  const b = await cells(page).nth(idx).boundingBox();
  await h.moveTo(b.x + b.width / 2, b.y + b.height / 2, 900);
  await h.sleep(250);
  await page.mouse.up();
  await h.sleep(after);
}

export default {
  name: 'schedule',
  who: 'admin',
  device: 'wide', // the header (week, view, Acties, Publiceren) only fits on one line from ~1600px
  speed: 1.4, // same pace as the employee clips

  async prepare({ page, h }) {
    await resetDemoWeek(page);
    await h.goto(`/admin/schedule?week=${DEMO_WEEK}`);
    await h.park(560, 420);
  },

  async run({ page, h, t }) {
    // Template in, fixed shifts already filled. Click a person: the shifts they can take turn green.
    await h.sleep(800);
    await h.click(panelRow(page, 'Sophie Janssen'), 1400);
    const fit = cells(page).filter({ hasText: /^\+ / }).first();
    await h.hover(fit, 500);
    await h.click(fit, 1300); // places her there

    // Drag someone from the side panel onto an open shift (green while dragging).
    await dragToEligible(page, h, panelRow(page, 'Lars van den Berg'), { wantOpen: true, after: 1300 });

    // Let the engine fill the rest.
    const before = await openCount(page);
    await h.click(page.getByRole('button', { name: t('Acties', 'Actions'), exact: true }), 600);
    await h.click(page.getByRole('button', { name: new RegExp(`^${t('Genereren', 'Generate')}`) }), 300);
    await h.moveTo(640, 330); // the progress bar
    await page.waitForFunction(
      (b) => {
        const m = document.querySelector('main').innerText.match(/(?:waarvan|of which) (\d+) open/);
        return m && +m[1] < b - 5;
      },
      before,
      { timeout: 120000 },
    );
    await h.sleep(1500);
    await h.moveTo(1460, 520); // contract bars in the side panel
    await h.scroll(450, 1200);
    await h.sleep(800);
    await h.scroll(-450, 900);

    // Publish the week.
    await h.click(page.locator('main').getByRole('button', { name: t('Publiceren', 'Publish'), exact: true }), 800);
    await h.click(page.getByRole('alertdialog').getByRole('button', { name: t('Publiceren', 'Publish'), exact: true }), 1800);

    // The same week on time: one band per day, every shift a bar on the 08:00–01:00 axis. Then back.
    const view = (nl, en) => page.locator('main').getByRole('button', { name: t(nl, en), exact: true });
    await h.click(view('Op tijd', 'By time'), 1400);
    await h.moveTo(520, 520, 700);
    await h.moveTo(1100, 520, 1200); // along the day's axis
    await h.scroll(520, 1500);
    await h.sleep(900);
    await h.scroll(-520, 900);
    await h.click(view('Per dienst', 'By shift'), 1400);

    // A change in a published week: marked until you publish it, and only the people it affects hear about it.
    // Open a filled shift and take the person off it in the side panel: the shift is open again.
    // (After Genereren the week is full, so a drag has nowhere left to go.)
    const filled = cells(page).filter({ hasText: /^Roos V\./ }).first();
    await h.click(filled, 1100);
    await h.click(page.getByRole('button', { name: t('Roos Vermeer van de dienst halen', 'Take Roos Vermeer off the shift') }), 1500);
    await h.click(page.locator('main').getByRole('button', { name: t('Wijzigingen publiceren', 'Publish changes'), exact: true }), 1800);
    await h.click(page.getByRole('alertdialog').getByRole('button', { name: t('Publiceren', 'Publish'), exact: true }), 1800);
    await h.moveTo(900, 420);
    await h.sleep(1200);
  },
};

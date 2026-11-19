// Shared helpers for recording product demo clips from the Gedekt app.
// Frames are captured with the Chrome DevTools screencast (much sharper than
// Playwright's built-in recordVideo) and stitched together with ffmpeg.
import { chromium } from 'playwright';
import ffmpegPath from 'ffmpeg-static';
import { spawnSync } from 'node:child_process';
import { mkdirSync, rmSync, writeFileSync } from 'node:fs';
import { writeFile } from 'node:fs/promises';
import { join } from 'node:path';
import { homedir } from 'node:os';

export const APP = process.env.GEDEKT_APP_URL ?? 'https://dev.gedekt.com';

export const ACCOUNTS = {
  admin: { email: process.env.GEDEKT_ADMIN_EMAIL, password: process.env.GEDEKT_ADMIN_PASSWORD },
  employee: { email: process.env.GEDEKT_EMPLOYEE_EMAIL, password: process.env.GEDEKT_EMPLOYEE_PASSWORD },
};

export const MAX_VIDEO_WIDTH = 2560;

export const VIEWPORTS = {
  // Admin clips: 1680x1050 (16:10), wide enough (≥1500px) that every page shows its side panel
  // next to the content (Vandaag, Rooster, Verzoeken, Uren, Medewerkers) and the schedule header
  // stays on one line. Captured at 2x so the video stays sharp on high-DPI screens; the encoder
  // caps the width at MAX_VIDEO_WIDTH.
  desktop: { viewport: { width: 1680, height: 1050 }, deviceScaleFactor: 2 },
  wide: { viewport: { width: 1680, height: 1050 }, deviceScaleFactor: 2 },
  mobile: { viewport: { width: 390, height: 844 }, deviceScaleFactor: 2 },
  // Google Play phone screenshots: 9:16, 360x640 at 3x = 1080x1920.
  play: { viewport: { width: 360, height: 640 }, deviceScaleFactor: 3 },
  // Google Play tablet screenshots: the full admin at 16:9, 1680x945 at 2x = 3360x1890.
  tablet: { viewport: { width: 1680, height: 945 }, deviceScaleFactor: 2 },
};

// Fake cursor (desktop) or finger-tap indicator (mobile), plus hiding of UI
// that distracts in a demo (the floating AI button and the "Aan de slag" tutorial panel).
const overlayScript = (kind) => `
(() => {
  const KIND = ${JSON.stringify(kind)};
  const install = () => {
    if (document.getElementById('__demo_cursor')) return;
    const style = document.createElement('style');
    style.textContent = \`
      [data-chatbot], section[aria-labelledby^="tutorials-title-"] { display: none !important; }
      #__demo_cursor { position: fixed; left: 0; top: 0; z-index: 2147483647; pointer-events: none;
        transform: translate(-100px, -100px); will-change: transform; }
      #__demo_cursor svg { display: block; filter: drop-shadow(0 1px 2px rgba(0,0,0,.35)); transition: transform .12s ease; }
      #__demo_cursor.down svg { transform: scale(.85); }
      #__demo_cursor.finger { width: 34px; height: 34px; margin: -17px 0 0 -17px; border-radius: 50%;
        background: rgba(27,67,50,.28); border: 2px solid rgba(27,67,50,.55); opacity: 0; transition: opacity .2s; }
      #__demo_cursor.finger.visible { opacity: 1; }
      #__demo_cursor.finger.down { background: rgba(27,67,50,.45); }
      .__demo_ripple { position: fixed; z-index: 2147483646; pointer-events: none; width: 44px; height: 44px;
        margin: -22px 0 0 -22px; border-radius: 50%; border: 2px solid rgba(212,160,23,.9);
        animation: __demo_ripple .5s ease-out forwards; }
      @keyframes __demo_ripple { from { transform: scale(.3); opacity: 1 } to { transform: scale(1.4); opacity: 0 } }
    \`;
    document.documentElement.appendChild(style);
    const c = document.createElement('div');
    c.id = '__demo_cursor';
    if (KIND === 'finger') c.className = 'finger';
    else c.innerHTML = '<svg width="22" height="28" viewBox="0 0 22 28"><path d="M2 2 L2 22 L7.5 17 L11 25.5 L14.5 24 L11 15.8 L18.5 15.8 Z" fill="#111" stroke="#fff" stroke-width="1.6" stroke-linejoin="round"/></svg>';
    document.documentElement.appendChild(c);
    const pos = window.__demoPos || { x: -100, y: -100 };
    c.style.transform = 'translate(' + pos.x + 'px,' + pos.y + 'px)';
    addEventListener('mousemove', e => {
      window.__demoPos = { x: e.clientX, y: e.clientY };
      c.style.transform = 'translate(' + e.clientX + 'px,' + e.clientY + 'px)';
    }, true);
    addEventListener('mousedown', e => {
      c.classList.add('down');
      if (KIND === 'finger') c.classList.add('visible');
      const r = document.createElement('div');
      r.className = '__demo_ripple'; r.style.left = e.clientX + 'px'; r.style.top = e.clientY + 'px';
      document.documentElement.appendChild(r); setTimeout(() => r.remove(), 600);
    }, true);
    // Touch swipes (CDP touch events) don't move the mouse; the recorder drives the indicator directly.
    window.__demoFinger = (x, y, down) => {
      window.__demoPos = { x, y };
      c.style.transform = 'translate(' + x + 'px,' + y + 'px)';
      c.classList.toggle('down', down);
      if (KIND === 'finger') c.classList.toggle('visible', down);
    };
    addEventListener('mouseup', () => {
      c.classList.remove('down');
      if (KIND === 'finger') setTimeout(() => c.classList.remove('visible'), 250);
    }, true);
  };
  if (document.documentElement) install(); else addEventListener('DOMContentLoaded', install);
  addEventListener('DOMContentLoaded', install);
})();`;

export async function launch({ who, device, scale, cursor }) {
  const vp = VIEWPORTS[device];
  const dpr = scale ?? vp.deviceScaleFactor;
  // The DevTools screencast ignores Playwright's deviceScaleFactor; Chrome's own flag makes the
  // captured frames really 2x.
  const browser = await chromium.launch({ args: [`--force-device-scale-factor=${dpr}`] });
  const context = await browser.newContext({ ...vp, deviceScaleFactor: dpr, locale: 'nl-NL' });
  // `--now=19:00`: the dev app (AGENT_ENV=dev) then pretends it's that time today (Dutch time).
  const demoNow = process.env.GEDEKT_DEMO_NOW;
  if (demoNow) await context.addCookies([{ name: 'demo-now', value: demoNow, url: APP }]);
  // `cursor`: 'arrow' (a visible mouse pointer) or 'finger' (only a tap indicator); phones default to finger.
  await context.addInitScript(overlayScript(cursor ?? (device === 'mobile' || device === 'play' ? 'finger' : 'arrow')));
  const page = await context.newPage();
  page.setDefaultTimeout(15000);
  page.setDefaultNavigationTimeout(60000);
  await login(page, who);
  return { browser, context, page };
}

export async function login(page, who) {
  const { email, password } = ACCOUNTS[who];
  if (!email || !password) throw new Error(`Missing credentials for ${who}; see scripts/demo-videos/README.md`);
  // dev can be slow to respond; retry the login page a few times
  for (let attempt = 1; ; attempt++) {
    try {
      await page.goto(`${APP}/login`);
      await page.locator('#email').waitFor({ timeout: 20000 });
      break;
    } catch (e) {
      if (attempt === 3) throw e;
      await page.waitForTimeout(5000);
    }
  }
  await page.fill('#email', email);
  await page.fill('#password', password);
  await page.click('button[type=submit]');
  await page.waitForURL((u) => !u.pathname.startsWith('/login'));
  await page.waitForLoadState('networkidle');
  // A clean bell in every clip: fetching the notification list marks them all read.
  await page.evaluate(() => fetch('/api/notifications')).catch(() => {});
}

// The interface language is stored per user on the server.
export async function setLanguage(page, who, lang) {
  const label = lang === 'en' ? 'English' : 'Nederlands';
  await page.goto(`${APP}/${who === 'admin' ? 'admin' : 'me'}/settings`);
  await page.waitForLoadState('networkidle');
  await page.locator('#taal').getByRole('button', { name: label, exact: true }).click();
  await page.waitForTimeout(1500);
}

/** Human-looking interaction helpers bound to a page. `speed` > 1 makes every move and pause shorter. */
export function actions(page, { speed = 1 } = {}) {
  let pos = { x: 720, y: 450 };
  const sleep = (ms) => page.waitForTimeout(Math.round(ms / speed));
  const ease = (t) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);

  async function moveTo(x, y, ms) {
    const dist = Math.hypot(x - pos.x, y - pos.y);
    const duration = (ms ?? Math.min(900, 250 + dist * 0.6)) / speed;
    const steps = Math.max(6, Math.round(duration / 16));
    const from = { ...pos };
    for (let i = 1; i <= steps; i++) {
      const t = ease(i / steps);
      await page.mouse.move(from.x + (x - from.x) * t, from.y + (y - from.y) * t);
      await page.waitForTimeout(duration / steps);
    }
    pos = { x, y };
  }

  async function scrollBy(dy, ms = 700) {
    const steps = Math.max(4, Math.round(ms / speed / 16));
    let done = 0;
    for (let i = 1; i <= steps; i++) {
      const target = Math.round(dy * ease(i / steps));
      await page.mouse.wheel(0, target - done);
      done = target;
      await sleep(16);
    }
    await sleep(250);
  }

  // Off screen or under the fixed top bar / bottom nav: scroll there smoothly (Playwright's own
  // scrollIntoViewIfNeeded jumps), so the video never cuts to a new position.
  async function center(locator) {
    const vh = page.viewportSize().height;
    const b = await locator.boundingBox();
    if (b && (b.y < 70 || b.y + b.height > vh - 80)) {
      const dy = Math.round(b.y + b.height / 2 - vh / 2);
      await scrollBy(dy, Math.min(1200, 400 + Math.abs(dy) * 0.6));
    }
    await locator.scrollIntoViewIfNeeded();
    const box = await locator.boundingBox();
    if (!box) throw new Error('Element not visible: ' + locator);
    return { x: box.x + box.width / 2, y: box.y + box.height / 2 };
  }

  return {
    sleep,
    moveTo,
    async hover(locator, after = 250) {
      const c = await center(locator);
      await moveTo(c.x, c.y);
      await sleep(after);
    },
    async click(locator, after = 500) {
      const c = await center(locator);
      await moveTo(c.x, c.y);
      await sleep(120);
      await page.mouse.down();
      await sleep(70);
      await page.mouse.up();
      await sleep(after);
    },
    async doubleTap(locator, after = 500) {
      const c = await center(locator);
      await moveTo(c.x, c.y);
      await sleep(120);
      await page.mouse.down({ clickCount: 1 });
      await page.mouse.up({ clickCount: 1 });
      await sleep(90);
      await page.mouse.down({ clickCount: 2 });
      await page.mouse.up({ clickCount: 2 });
      await sleep(after);
    },
    async type(locator, text, after = 300) {
      await this.click(locator, 150);
      await locator.pressSequentially(text, { delay: Math.round(55 / speed) });
      await sleep(after);
    },
    async select(locator, value, after = 500) {
      await this.hover(locator, 200);
      await locator.selectOption(value);
      await sleep(after);
    },
    async drag(from, to, after = 600) {
      const a = await center(from);
      await moveTo(a.x, a.y);
      await page.mouse.down();
      await sleep(150);
      await moveTo(a.x + 12, a.y + 6, 120);
      const b = await center(to);
      await moveTo(b.x, b.y, 900);
      await sleep(200);
      await page.mouse.up();
      await sleep(after);
    },
    scroll: scrollBy,
    /** A real finger swipe (touch events) across `locator`: dx < 0 = to the left (next week). */
    async swipe(locator, dx = -200, ms = 350) {
      const c = await center(locator);
      const cdp = await page.context().newCDPSession(page);
      await cdp.send('Emulation.setTouchEmulationEnabled', { enabled: true, maxTouchPoints: 1 });
      const x0 = c.x - dx / 2, y = c.y;
      await moveTo(x0, y);
      const touch = (type, x) => cdp.send('Input.dispatchTouchEvent', { type, touchPoints: type === 'touchEnd' ? [] : [{ x, y }] });
      const finger = (x, down) => page.evaluate(([x, y, d]) => window.__demoFinger?.(x, y, d), [x, y, down]);
      await finger(x0, true);
      await touch('touchStart', x0);
      const steps = Math.max(6, Math.round(ms / speed / 16));
      for (let i = 1; i <= steps; i++) {
        const x = x0 + dx * ease(i / steps);
        await touch('touchMove', x);
        await finger(x, true);
        await page.waitForTimeout(ms / speed / steps);
      }
      await touch('touchEnd', x0 + dx);
      await finger(x0 + dx, false);
      pos = { x: x0 + dx, y };
      await page.mouse.move(pos.x, pos.y);
      await cdp.detach().catch(() => {});
    },
    async goto(path) {
      await page.goto(APP + path);
      await page.waitForLoadState('networkidle');
      await page.mouse.move(pos.x, pos.y);
    },
    async park(x, y) {
      pos = { x, y };
      await page.mouse.move(x, y);
    },
  };
}

/** Screencast recorder: start() / stop() → writes a list of timestamped JPEG frames. */
export async function recorder(page, device) {
  const { viewport, deviceScaleFactor } = VIEWPORTS[device];
  // On disk, not in /tmp: on this machine /tmp is a small RAM disk, and a 2x clip is ~700 MB of frames.
  const dir = join(process.env.GEDEKT_FRAMES_DIR ?? join(homedir(), '.cache', 'gedekt-demo-frames'), String(Date.now()));
  mkdirSync(dir, { recursive: true });
  const cdp = await page.context().newCDPSession(page);
  const frames = [];
  const writes = [];
  let stopped = false;
  cdp.on('Page.screencastFrame', ({ data, metadata, sessionId }) => {
    if (stopped) return;
    const file = join(dir, `f${String(frames.length).padStart(5, '0')}.jpg`);
    frames.push({ file, t: metadata.timestamp });
    writes.push(writeFile(file, Buffer.from(data, 'base64')));
    cdp.send('Page.screencastFrameAck', { sessionId }).catch(() => {});
  });
  return {
    async start() {
      await cdp.send('Page.startScreencast', {
        format: 'jpeg',
        quality: 95,
        maxWidth: viewport.width * deviceScaleFactor,
        maxHeight: viewport.height * deviceScaleFactor,
        everyNthFrame: 1,
      });
    },
    async stop() {
      stopped = true;
      const end = Date.now() / 1000;
      await cdp.send('Page.stopScreencast');
      await Promise.all(writes);
      return { dir, frames, end };
    },
    /** Throw the frames away (a dry run, or a failed take). */
    async discard() {
      stopped = true;
      await cdp.send('Page.stopScreencast').catch(() => {});
      await Promise.allSettled(writes);
      rmSync(dir, { recursive: true, force: true });
    },
  };
}

/** Turn captured frames into public/videos/<name>.mp4 + .webm + poster .jpg */
export function encode({ dir, frames, end }, outBase) {
  if (frames.length < 2) throw new Error('No frames captured');
  const list = [];
  for (let i = 0; i < frames.length; i++) {
    const next = i + 1 < frames.length ? frames[i + 1].t : Math.max(end, frames[i].t + 0.5);
    list.push(`file '${frames[i].file}'`, `duration ${Math.max(0.001, next - frames[i].t).toFixed(4)}`);
  }
  list.push(`file '${frames.at(-1).file}'`);
  const concat = join(dir, 'frames.txt');
  writeFileSync(concat, 'ffconcat version 1.0\n' + list.join('\n') + '\n');
  // At most MAX_VIDEO_WIDTH wide (2x desktop frames are 2880-3360px); even dimensions for yuv420p.
  const vf = `fps=30,scale='trunc(min(iw,${MAX_VIDEO_WIDTH})/2)*2':-2:flags=lanczos,format=yuv420p`;
  const run = (args) => {
    const r = spawnSync(ffmpegPath, ['-y', '-hide_banner', '-loglevel', 'error', ...args], { stdio: 'inherit' });
    if (r.status !== 0) throw new Error('ffmpeg failed: ' + args.join(' '));
  };
  const input = ['-f', 'concat', '-safe', '0', '-i', concat];
  run([...input, '-vf', vf, '-c:v', 'libx264', '-preset', 'slow', '-crf', '24', '-movflags', '+faststart', '-an', `${outBase}.mp4`]);
  run([...input, '-vf', vf, '-c:v', 'libvpx-vp9', '-crf', '36', '-b:v', '0', '-row-mt', '1', '-deadline', 'good', '-cpu-used', '4', '-an', `${outBase}.webm`]);
  run(['-i', frames[0].file, '-vf', `scale='trunc(min(iw,${MAX_VIDEO_WIDTH})/2)*2':-2:flags=lanczos`, '-q:v', '3', `${outBase}.jpg`]);
  rmSync(dir, { recursive: true, force: true });
}

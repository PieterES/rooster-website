// Renders the Google Ads (Performance Max) image assets from HTML templates with Playwright.
// Usage: node scripts/ad-assets/render.mjs   → writes PNGs to scripts/ad-assets/out/
// Uses the live logo (public/favicon.svg), the self-hosted Sora/Inter fonts and the app screenshots
// in src/assets/screenshots, so re-run it after re-recording the screenshots or changing the logo.
import { chromium } from "playwright";
import { readFileSync, mkdirSync } from "node:fs";
import { fileURLToPath } from "node:url";
import path from "node:path";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "../..");
const out = path.join(root, "scripts/ad-assets/out");
mkdirSync(out, { recursive: true });

// setContent pages can't load file:// URLs, so embed fonts and images as data URIs.
const mime = { ".png": "image/png", ".woff2": "font/woff2" };
const file = (p) => `data:${mime[path.extname(p)]};base64,${readFileSync(path.join(root, p)).toString("base64")}`;
const logo = readFileSync(path.join(root, "public/favicon.svg"), "utf8");
const shot = {
  schedule: file("src/assets/screenshots/admin-schedule.png"),
  hours: file("src/assets/screenshots/admin-hours.png"),
  phone: file("src/assets/screenshots/employee-dashboard.png"),
};

const base = `
<style>
  @font-face { font-family: Sora; src: url(${file("node_modules/@fontsource-variable/sora/files/sora-latin-wght-normal.woff2")}) format("woff2"); font-weight: 100 800; }
  @font-face { font-family: Inter; src: url(${file("node_modules/@fontsource-variable/inter/files/inter-latin-wght-normal.woff2")}) format("woff2"); font-weight: 100 900; }
  * { margin: 0; padding: 0; box-sizing: border-box; }
  html, body { width: 100%; height: 100%; }
  body { font-family: Inter, sans-serif; color: #fff; overflow: hidden;
    background: radial-gradient(circle at 88% 18%, rgba(217,119,6,.32), transparent 38%), #1B4332; }
  .display { font-family: Sora, sans-serif; font-weight: 700; letter-spacing: -0.02em; line-height: 1.08; }
  .amber { color: #F59E0B; }
  .brand { display: flex; align-items: center; gap: 18px; }
  .brand svg { border-radius: 14px; box-shadow: 0 0 0 2px rgba(255,255,255,.25); display: block; }
  .brand span { font-family: Sora, sans-serif; font-weight: 600; }
  .sub { color: rgba(255,255,255,.82); }
  .pill { border: 1px solid rgba(255,255,255,.25); background: rgba(255,255,255,.1); border-radius: 999px; }
  .frame { border-radius: 18px; overflow: hidden; box-shadow: 0 30px 60px rgba(0,0,0,.35), 0 0 0 1px rgba(255,255,255,.12); background: #fff; }
  .frame img { display: block; width: 100%; }
  .phone { border-radius: 44px; overflow: hidden; border: 10px solid #0b1410; box-shadow: 0 30px 60px rgba(0,0,0,.4); background: #fff; }
  .phone img { display: block; width: 100%; }
</style>`;

const brand = (size, text) =>
  `<div class="brand">${logo.replace("<svg ", `<svg width="${size}" height="${size}" `)}<span style="font-size:${text}px">Gedekt</span></div>`;

const assets = [
  // Logos
  {
    name: "logo-1200x1200",
    w: 1200, h: 1200,
    html: `<body style="background:#22342B">${logo.replace("<svg ", '<svg width="1200" height="1200" ')}</body>`,
  },
  {
    name: "logo-1200x300",
    w: 1200, h: 300,
    html: `<body style="background:#22342B;display:flex;align-items:center;justify-content:center">
      <div class="brand" style="gap:40px">${logo.replace("<svg ", '<svg width="200" height="200" style="box-shadow:none;border-radius:0" ')}
      <span style="font-size:150px">Gedekt</span></div></body>`,
  },
  // Landscape 1.91:1
  {
    name: "landscape-1200x628-tagline",
    w: 1200, h: 628,
    html: `<body style="padding:72px 80px;display:flex;flex-direction:column;justify-content:space-between">
      ${brand(52, 38)}
      <h1 class="display" style="font-size:76px">Jouw team altijd gedekt.<br><span class="amber">Elke dienst</span>, zonder chaos.</h1>
      <div style="display:flex;justify-content:space-between;align-items:center">
        <p class="sub" style="font-size:28px">Rooster app voor de Nederlandse horeca</p>
        <p class="pill" style="font-size:26px;padding:12px 28px">gedekt.com</p>
      </div></body>`,
  },
  {
    name: "landscape-1200x628-rooster",
    w: 1200, h: 628,
    html: `<body style="display:flex;align-items:center;padding:0 56px;gap:40px">
      <div style="width:400px;flex:none;display:flex;flex-direction:column;gap:26px">
        ${brand(44, 32)}
        <h1 class="display" style="font-size:46px">Het rooster <span class="amber">in minuten</span> klaar.</h1>
        <p class="sub" style="font-size:22px;line-height:1.4">Op basis van beschikbaarheid, functie en contracturen.</p>
      </div>
      <div class="frame" style="width:648px;flex:none"><img src="${shot.schedule}"></div></body>`,
  },
  {
    name: "landscape-1200x628-uren",
    w: 1200, h: 628,
    html: `<body style="display:flex;align-items:center;padding:0 56px;gap:40px">
      <div style="width:400px;flex:none;display:flex;flex-direction:column;gap:26px">
        ${brand(44, 32)}
        <h1 class="display" style="font-size:46px">Gewerkte uren <span class="amber">in één overzicht</span>.</h1>
        <p class="sub" style="font-size:22px;line-height:1.4">Medewerkers klokken in met hun telefoon. Verschillen zie je meteen.</p>
      </div>
      <div class="frame" style="width:648px;flex:none"><img src="${shot.hours}"></div></body>`,
  },
  // Square 1:1
  {
    name: "square-1200x1200-rooster",
    w: 1200, h: 1200,
    html: `<body style="padding:72px;display:flex;flex-direction:column;gap:30px">
      ${brand(52, 38)}
      <h1 class="display" style="font-size:72px">Het rooster <span class="amber">in minuten</span> klaar.</h1>
      <p class="sub" style="font-size:30px">Rooster app voor de Nederlandse horeca.</p>
      <div class="frame" style="width:1056px;margin-top:auto"><img src="${shot.schedule}"></div></body>`,
  },
  {
    name: "square-1200x1200-app",
    w: 1200, h: 1200,
    html: `<body style="display:flex;align-items:center;padding:0 84px;gap:64px">
      <div style="flex:1;display:flex;flex-direction:column;gap:36px">
        ${brand(56, 40)}
        <h1 class="display" style="font-size:64px">Je rooster <span class="amber">altijd op zak</span>.</h1>
        <p class="sub" style="font-size:28px;line-height:1.4">Medewerkers zien hun diensten, geven beschikbaarheid door en ruilen diensten in de app.</p>
        <p class="pill" style="font-size:26px;padding:12px 28px;align-self:flex-start">gedekt.com</p>
      </div>
      <div class="phone" style="flex:none"><img src="${shot.phone}" style="height:1020px;width:auto"></div></body>`,
  },
  // Portrait 4:5
  {
    name: "portrait-960x1200-app",
    w: 960, h: 1200,
    html: `<body style="padding:56px;display:flex;flex-direction:column;align-items:center;gap:22px;text-align:center">
      ${brand(48, 34)}
      <h1 class="display" style="font-size:56px">Je rooster <span class="amber">altijd op zak</span>.</h1>
      <p class="sub" style="font-size:26px">Rooster app voor de Nederlandse horeca</p>
      <div class="phone" style="margin-top:auto"><img src="${shot.phone}" style="height:820px;width:auto"></div></body>`,
  },
];

const browser = await chromium.launch();
const page = await browser.newPage({ deviceScaleFactor: 1 });
for (const a of assets) {
  await page.setViewportSize({ width: a.w, height: a.h });
  await page.setContent(`<!doctype html><html><head><meta charset="utf-8">${base}</head>${a.html}</html>`, { waitUntil: "load" });
  await page.evaluate(() => document.fonts.ready);
  await page.screenshot({ path: path.join(out, `${a.name}.png`) });
  console.log(`${a.name}.png`);
}
await browser.close();

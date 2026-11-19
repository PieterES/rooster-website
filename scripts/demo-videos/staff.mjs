// Helpers shared by the employee (phone) clips.
import { APP, launch } from './lib.mjs';

/** fetch() inside the page, as whoever is logged in there; throws on an error status. */
export const call = (page, method, path, body) =>
  page.evaluate(
    async ([method, path, body]) => {
      const res = await fetch(path, { method, headers: body ? { 'Content-Type': 'application/json' } : {}, body: body ? JSON.stringify(body) : undefined });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(`${method} ${path}: ${res.status} ${JSON.stringify(data)}`);
      return data;
    },
    [method, path, body],
  );

/** A separate admin browser (off camera). Close it with `.browser.close()`. */
export async function openAdmin() {
  const admin = await launch({ who: 'admin', device: 'desktop' });
  await admin.page.goto(`${APP}/admin`);
  return admin;
}

export async function asAdmin(fn) {
  const admin = await openAdmin();
  try {
    return await fn(admin.page);
  } finally {
    await admin.browser.close();
  }
}

/** Scroll smoothly until `locator` sits `offset` px below the top of the screen. */
export async function toTop(h, locator, offset = 90) {
  const b = await locator.boundingBox();
  if (b && Math.abs(b.y - offset) > 8) await h.scroll(b.y - offset, 700);
}

export const ymd = (d) => d.toISOString().slice(0, 10);
export const mondayOf = (d) => {
  const m = new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()));
  m.setUTCDate(m.getUTCDate() - ((m.getUTCDay() + 6) % 7));
  return m;
};

/** The employee clips: phone, visible pointer, a bit faster than real time. */
export const STAFF = { who: 'employee', device: 'mobile', cursor: 'arrow', speed: 1.4 };

# Demo videos

Short looping clips of the real app, shown on the product tour pages via
`src/components/DemoVideo.astro`. Output goes to `public/videos/<clip>-<lang>.{webm,mp4,jpg}`.

## Recording

Create `.env.demo` in the repo root (gitignored):

```
GEDEKT_APP_URL=https://dev.gedekt.com
GEDEKT_ADMIN_EMAIL=...
GEDEKT_ADMIN_PASSWORD=...
GEDEKT_EMPLOYEE_EMAIL=...
GEDEKT_EMPLOYEE_PASSWORD=...
```

Then:

```bash
npm run record:demos                          # every clip, nl + en
npm run record:demos -- schedule              # one clip
npm run record:demos -- --lang=nl employee    # one clip, one language
```

`--speed=1.5` makes every move and pause 1.5x shorter (a clip can set its own `speed`; the `staff-*` clips use 1.4 and show a mouse pointer instead of
the tap indicator, via `cursor: 'arrow'`).

Each clip lives in `clips/` and exports `prepare` (get the app into the start state),
`run` (the recorded part) and optionally `cleanup` (undo what the clip created).
The interface language is switched per user before each pass and set back to Dutch afterwards.

## Before recording: reset dev

Dev is put into a demo state by `scripts/dev-demo-state.ts` in the app repo (HorecaRooster). Before
each recording session run at least the requests, notifications and clock steps there:

```bash
npx tsx scripts/dev-demo-state.ts --apply --only requests,notifications,clock
```

`requests` uses up seeded claims and swaps (one of each per language), so reseed before recording it.

## Screenshots

The app screenshots on the website (`src/assets/screenshots/`) come from `screenshots.mjs`:

```bash
npm run screenshots                    # all
npm run screenshots -- admin-hours     # one
```

## Things to know

- `dashboard` and `staff-clock` need service hours: the Vandaag timeline then has finished and running
  shifts, and the employee has a shift to clock in for. Any time of day, pretend it's evening: seed the
  clock records for that time in the app repo, then record with the same `--now` (it sets the app's
  `demo-now` cookie, honoured only on dev, where the Pi's `.env` has `AGENT_ENV=dev`):

  ```bash
  npx tsx scripts/dev-demo-state.ts --apply --only close-open,clock,notifications --now 19:00   # HorecaRooster
  npm run record:demos -- --now=19:00 dashboard staff-clock                                      # here
  ```
- Admin clips record at 1680×1050 (16:10): from 1500px wide every page shows its side panel next to
  the content (Vandaag, Rooster, Verzoeken, Uren, Medewerkers) and the schedule header stays on one
  line. Phone clips are 390×844.
- Everything is captured at 2x (Chrome's `--force-device-scale-factor`, the screencast ignores
  Playwright's setting) and encoded at most 2560px wide, so the videos stay sharp on retina screens.
  Encoding a 2560px WebM takes a few minutes per clip.
- Every login marks that user's notifications read, so bells start clean.
- Clips run against real data on dev. Most clean up after themselves, but:
  - `shifts` and `schedule` both reset the demo week (`DEMO_WEEK` in `04-schedule.mjs`, a few weeks
    ahead; it needs availability filled in) through the API: `unpublish`, then `import-empty` with
    the `winter` template. That also deletes claims and swaps on that week.
    `shifts` makes one fixed shift and ends it in `cleanup`. `schedule` places people, generates,
    publishes, changes one shift and publishes again; the week stays **published**.
  - Never run two recordings at once: they share the dev accounts, the interface language and the
    company settings.
  - `departments` switches "Mag roosteren" on for Bediening/Hoofdober and back in `cleanup`.
  - `settings` changes claim approval and clock rounding and restores both in `cleanup`; if a run is
    killed halfway, check `/admin/settings` on dev (rounding should be 15 minutes).
  - `requests` approves one claim and one swap per language (see above).
  - The `staff-*` clips (shared helpers in `staff.mjs`) were last recorded against a freshly seeded
    local app (HorecaRooster: `npm run seed && npm run seed:scenarios`, phone clocking on, next week
    published), served with `next build && next start` (`next dev` shows blank frames while routes
    render). Point `GEDEKT_APP_URL` at `http://localhost:3001` with the seed's logins.
  - `staff-schedule` puts a briefing on the employee's next shift (as admin) and restores it.
  - `staff-availability` sets max days and ticks Saturday, and undoes both in `cleanup`.
  - `staff-requests` requests an open shift on a free day in her own department, swaps with Vera and
    asks for leave, and withdraws all of it. Withdrawn/revoked leave stays in her list as cancelled,
    and reseeding doesn't remove it, so delete Sophie's leave requests in the database before each
    language (`prisma.leaveRequest.deleteMany`), or the next take shows the previous one.
  - `staff-clock` clocks in and out for real (the employee needs a shift today), moves the clock-in
    back ~5 hours mid-clip (as admin), asks for a correction, deletes the clock record and rejects the
    correction in `cleanup`. Phone clocking must be on for the company.
- The Bar and Bediening "Sluit" shifts are marked as closing shifts in the template, so the employee's
  team view shows "Sluitdienst".

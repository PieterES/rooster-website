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
  - `staff-schedule` puts a briefing on the employee's next shift (as admin) and removes it again.
  - `staff-requests` frees a future Bediening shift for the employee to claim, makes a swap request and
    a leave request, and undoes all of it. Leave is approved automatically on dev and an employee can't
    cancel approved leave, so the admin revokes it, which leaves it in her list as denied.
  - `staff-clock` clocks the employee in and out for real, moves the clock-in back ~5 hours mid-clip
    (as admin) and deletes the record in `cleanup`. Phone clocking must be on for the company.
- The Bar and Bediening "Sluit" shifts are marked as closing shifts in the template, so the employee's
  team view shows "Sluitdienst".

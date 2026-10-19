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

## Things to know

- Clips run against real data on dev. Most clean up after themselves, but:
  - `schedule` leaves the demo week (`DEMO_WEEK` in `04-schedule.mjs`) **published**, because the
    employee clips need shifts to show.
  - `settings` switches the company's claim approval and availability input method; it restores the
    original values in `cleanup`, so if a run is killed halfway check `/admin/settings` on dev.
  - `staff-clock` clocks the employee in and out for real. It also logs in as admin to move the
    clock-in back ~5 hours mid-clip (otherwise quarter-hour rounding shows negative hours) and
    deletes the clock record in `cleanup`. Phone clocking must be on for the company.
  - `requests` **approves** one pending claim and one swap request per language. Once dev has no
    pending claims/swaps left, that clip fails until new ones exist.
- A full schedule needs enough staff and availability; the demo company was topped up with
  five extra employees (Bar and Keuken) and full standard availability for that reason.
- Adding or editing shift types is not shown: on dev, adding one crashes the page after
  saving and saving uppercases the shift code.

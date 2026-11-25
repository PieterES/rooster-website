import type { Guide } from "../guides";

const updated = "2026-10-17";

export const enGuides: Guide[] = [
  {
    id: "schedule",
    lang: "en",
    slug: "how-to-make-a-staff-rota",
    title: "How to make a hospitality staff rota: a 7-step guide",
    metaTitle: "How to make a restaurant staff rota (7 steps)",
    description:
      "Build a fair, accurate rota for your restaurant, café or hotel in the Netherlands. Step by step: from staffing levels to publishing and shift swaps.",
    updated,
    intro:
      "A good rota makes sure every shift is covered, keeps labour costs in check and tells your team where they stand. Yet in many venues it still eats up hours every week. This guide walks you through building a rota that works — on paper, in a spreadsheet or in a scheduling app.",
    sections: [
      {
        heading: "1. Work out how many people you need each day",
        html: `<p>Start with demand, not with your staff. Look at revenue or covers for the same week last year, bookings, the weather and local events. Turn that into shifts: how many people do you need front of house, behind the bar and in the kitchen, and from when to when?</p>`,
      },
      {
        heading: "2. Define fixed shifts and functions",
        html: `<p>Most weeks look alike. Define recurring shifts — say <em>floor evening 17:00–23:00</em> or <em>kitchen lunch 10:30–15:30</em> — and attach the function each one needs: line cook, bar lead, runner. That way you never end up with three runners and no supervisor on a Saturday. In Gedekt you set up <a href="/en/how-it-works/departments-and-functions">departments and functions</a> and <a href="/en/how-it-works/fixed-shifts">fixed shifts</a> once.</p>`,
      },
      {
        heading: "3. Collect availability on time",
        html: `<p>Set a fixed weekly deadline that fits your publishing schedule. If you publish three weeks ahead, as the Dutch hospitality collective agreement (cao Horeca) requires, collect availability about four weeks ahead. Use two levels, <strong>can</strong> and <strong>prefer</strong>, so you know not only who is available but who wants the hours. Anyone who misses the deadline is scheduled on their default availability.</p>`,
      },
      {
        heading: "4. Place your regulars first",
        html: `<p>Put staff with fixed contracts and fixed days on the rota first, then fill the rest with part-timers and on-call staff. Keep contract hours in mind: someone on 24 hours should get roughly 24 hours.</p>`,
      },
      {
        heading: "5. Check the rules",
        html: `<p>Dutch law sets limits: a maximum of 12 hours per shift, at least 11 hours of rest between shifts, and mandatory breaks. Staff under 18 have stricter limits. See the <a href="/en/dutch-working-time-act-hospitality">Dutch Working Hours Act for hospitality</a> and <a href="/en/young-workers-netherlands">young workers in Dutch hospitality</a>. On-call staff must normally be called in at least 4 days ahead — see <a href="/en/on-call-workers-netherlands">on-call workers in the Netherlands</a>.</p>`,
      },
      {
        heading: "6. Check your labour cost",
        html: `<p>Before publishing, add up the planned hours and multiply by the hourly cost including employer charges. Compare it with expected revenue. More in <a href="/en/restaurant-labour-cost">calculating restaurant labour cost</a>.</p>`,
      },
      {
        heading: "7. Publish at a fixed time — and sort out swaps",
        html: `<p>Publish at the same time every week. Under the cao Horeca, working days and times must be announced <strong>at least three weeks in advance</strong>, otherwise staff may refuse the hours. Make sure everyone can see it on their phone. Agree how swaps work: one channel, always with your approval. See <a href="/en/shift-swapping">shift swapping without the chaos</a>.</p>`,
      },
      {
        heading: "Faster: let the rota build itself",
        html: `<p>Steps 3 to 6 are exactly the kind of work software does better than people. In Gedekt your regulars are already on the schedule, and the engine fills the rest based on availability, function and contract hours. You publish, your team is notified. <a href="/en/how-it-works/creating-a-schedule">See it in 30 seconds</a>.</p>`,
      },
    ],
    faq: [
      {
        q: "How far in advance should a hospitality rota be published?",
        a: "Under the Dutch hospitality collective agreement (cao Horeca), working days and times must be announced at least three weeks in advance, or staff may refuse. The law itself requires at least 4 days' notice for on-call staff. Check which collective agreement applies to your venue.",
      },
      {
        q: "How long does it take to make a rota?",
        a: "By hand or in a spreadsheet, a weekly rota for 15 to 25 people often takes 2 to 4 hours. With an app that fills shifts automatically it comes down to a few minutes of checking.",
      },
    ],
    related: ["working-time-act", "excel", "choosing-software", "swaps"],
  },

  {
    id: "working-time-act",
    lang: "en",
    slug: "dutch-working-time-act-hospitality",
    title: "The Dutch Working Hours Act for hospitality: breaks, rest and maximum hours",
    metaTitle: "Dutch Working Hours Act (Arbeidstijdenwet) for hospitality",
    description:
      "How long can a shift be in the Netherlands? How much break is required? The Arbeidstijdenwet rules for hospitality rotas, explained in English with examples.",
    updated,
    intro:
      "The Dutch Working Hours Act (Arbeidstijdenwet, ATW) sets how long staff may work and how much rest they must get. For hospitality rotas with late nights, double shifts and busy weekends, that matters. These are the rules for staff aged 18 and over.",
    sections: [
      {
        heading: "Maximum working time",
        html: `<ul>
<li><strong>Per shift:</strong> 12 hours.</li>
<li><strong>Per week:</strong> 60 hours.</li>
<li><strong>Average over 4 weeks:</strong> 55 hours per week.</li>
<li><strong>Average over 16 weeks:</strong> 48 hours per week.</li>
</ul>`,
      },
      {
        heading: "Mandatory breaks",
        html: `<ul>
<li><strong>More than 5.5 hours:</strong> at least 30 minutes, which may be split into two 15-minute breaks.</li>
<li><strong>More than 10 hours:</strong> at least 45 minutes, in blocks of at least 15 minutes.</li>
</ul>
<p>Whether breaks are paid is set by the collective agreement or employment contract, not by the law.</p>`,
      },
      {
        heading: "Rest between shifts",
        html: `<p>At least <strong>11 consecutive hours</strong> between shifts. Once every 7 days this may be shortened to 8 hours if the nature of the work requires it.</p>
<p><strong>Example:</strong> someone who closes at 01:00 can start at 12:00 the next day at the earliest. Closing and then opening the next morning is allowed at most once a week.</p>`,
      },
      {
        heading: "Weekly rest",
        html: `<p>At least <strong>36 consecutive hours</strong> off per 7 days, or 72 hours per 14 days (which may be split into blocks of at least 32 hours).</p>`,
      },
      {
        heading: "Night shifts",
        html: `<p>A shift counts as a night shift when more than one hour falls between 00:00 and 06:00 — common for late bar and club closes. Night shifts are in principle limited to 10 hours; after a night shift ending after 02:00 at least 14 hours of rest is required (shortenable to 8 hours once a week); after a series of 3 or more night shifts, at least 46 hours of rest.</p>`,
      },
      {
        heading: "Recording hours",
        html: `<p>Employers must record working and rest times and keep those records. The Dutch Labour Inspectorate can ask for them. A planned rota is not enough — it has to reflect hours actually worked.</p>`,
      },
      {
        heading: "Collective agreements and exceptions",
        html: `<p>This guide covers the main statutory rules. Your collective agreement may add to them, and staff under 18 have stricter limits — see <a href="/en/young-workers-netherlands">young workers</a>. Always check the current rules at <a href="https://www.government.nl/topics/working-hours" rel="noopener" target="_blank">government.nl</a>.</p>`,
      },
    ],
    faq: [
      {
        q: "What is the maximum shift length in the Netherlands?",
        a: "12 hours per shift for staff aged 18 and over, 10 hours for a night shift in principle, and 9 hours for 16- and 17-year-olds.",
      },
      {
        q: "How much rest is required between two shifts in the Netherlands?",
        a: "At least 11 consecutive hours, which may be shortened to 8 hours once every 7 days. After a night shift ending after 02:00, at least 14 hours.",
      },
      {
        q: "How long a break do I get on a 6-hour shift in the Netherlands?",
        a: "Working more than 5.5 hours entitles you to at least 30 minutes of break, which may be split into two breaks of 15 minutes.",
      },
    ],
    related: ["young-workers", "on-call", "schedule"],
  },

  {
    id: "on-call",
    lang: "en",
    slug: "on-call-workers-netherlands",
    title: "Scheduling on-call workers in the Netherlands: the rules",
    metaTitle: "On-call workers Netherlands: 4-day notice & zero-hours rules",
    description:
      "Scheduling on-call or zero-hours staff in Dutch hospitality? The rules: 4 days' notice, pay when you cancel, a 3-hour minimum, and a fixed-hours offer after 12 months.",
    updated,
    intro:
      "On-call workers keep Dutch hospitality flexible. But since the Balanced Labour Market Act (WAB) came into force, there are clear rules on how and when you call them in. Ignore them and you pay for hours nobody worked.",
    sections: [
      {
        heading: "Who counts as an on-call worker?",
        html: `<p>Anyone on a zero-hours contract, a min-max contract, or a contract without fixed working times. A part-timer with fixed hours but no fixed days or times often falls under these rules too.</p>`,
      },
      {
        heading: "Notice: at least 4 days",
        html: `<p>You must call in on-call staff at least <strong>4 days in advance</strong>, in writing or electronically (a message or a published rota in an app counts). Call them in later and they may refuse without consequences. A collective agreement may shorten this to no less than 24 hours.</p>`,
      },
      {
        heading: "Cancelling within 4 days means paying anyway",
        html: `<p>If you cancel or change a call-in less than 4 days before the shift, the worker is entitled to pay for the original shift (unless your collective agreement sets a shorter term).</p>`,
      },
      {
        heading: "A 3-hour minimum per call-in",
        html: `<p>Staff on contracts under 15 hours a week without fixed times, or on zero-hours contracts, must be paid at least 3 hours per call-in — even if the shift is shorter.</p>`,
      },
      {
        heading: "After 12 months: offer fixed hours",
        html: `<p>After 12 months you must offer, within a month, a contract with fixed hours equal to at least the average of the past 12 months. The worker doesn't have to accept. If you make no offer, they are still entitled to pay for that average. Keep track of hours worked per person.</p>`,
      },
      {
        heading: "Changes on the way",
        html: `<p>Legislation is in the works to largely replace zero-hours contracts with so-called base contracts. Keep an eye on <a href="https://www.government.nl" rel="noopener" target="_blank">government.nl</a> for the current status.</p>`,
      },
      {
        heading: "Scheduling on-call staff smartly",
        html: `<p>Let on-call staff share their own availability, publish well ahead (the cao Horeca asks for three weeks), and post open shifts that people can claim with your approval. Gedekt does all three — <a href="/en/how-it-works/claims-and-swaps">see claims and swaps</a>.</p>`,
      },
    ],
    faq: [
      {
        q: "How much notice must on-call workers get in the Netherlands?",
        a: "At least 4 days, in writing or electronically. A collective agreement may shorten this to 24 hours. With less notice the worker may refuse.",
      },
      {
        q: "Do I have to pay an on-call worker if I cancel the shift?",
        a: "Yes, if you cancel or change it less than 4 days before the shift, unless your collective agreement sets a shorter term.",
      },
    ],
    related: ["working-time-act", "schedule", "labour-cost"],
  },

  {
    id: "young-workers",
    lang: "en",
    slug: "young-workers-netherlands",
    title: "Young workers in Dutch hospitality: how long can 13–17-year-olds work?",
    metaTitle: "How long can a 15, 16 or 17-year-old work in the Netherlands?",
    description:
      "Working hours for young staff in Dutch hospitality: daily and weekly limits for 13- to 17-year-olds, how late they can work, and required breaks.",
    updated,
    intro:
      "Many Dutch hospitality venues rely on school students. Staff under 18 face stricter rules than adults: shorter shifts, more rest and no night work. Here are the rules by age.",
    sections: [
      {
        heading: "16- and 17-year-olds",
        html: `<ul>
<li><strong>Per shift:</strong> max 9 hours.</li>
<li><strong>Per week:</strong> max 45 hours, and an average of 40 hours over 4 weeks.</li>
<li><strong>No work between 23:00 and 06:00.</strong></li>
<li><strong>Rest:</strong> at least 12 consecutive hours per 24 hours, including 23:00–06:00.</li>
<li><strong>Weekly rest:</strong> at least 36 consecutive hours per 7 days.</li>
<li><strong>Breaks:</strong> working more than 4.5 hours requires at least 30 minutes, in blocks of at least 15 minutes.</li>
</ul>
<p>In practice: a 17-year-old can't help close if you're open past 23:00.</p>`,
      },
      {
        heading: "15-year-olds",
        html: `<ul>
<li>School days: max 2 hours.</li>
<li>Non-school days: max 8 hours.</li>
<li>School weeks: max 12 hours.</li>
<li>Holidays: max 8 hours a day and 40 hours a week.</li>
<li>No work between 19:00 and 07:00, and only light, non-industrial work.</li>
</ul>`,
      },
      {
        heading: "13- and 14-year-olds",
        html: `<p>Only light, non-industrial work, never between 19:00 and 07:00. Max 2 hours on school days, 7 hours on non-school days, 12 hours in a school week, and in holidays 7 hours a day and 35 hours a week.</p>`,
      },
      {
        heading: "Serving alcohol",
        html: `<p>Separate rules in the Dutch Alcohol Act govern who may serve alcohol and who must be present as a supervisor. Check those separately before putting young staff behind the bar. Always verify the current rules at <a href="https://www.government.nl" rel="noopener" target="_blank">government.nl</a>.</p>`,
      },
    ],
    faq: [
      {
        q: "How late can a 16-year-old work in Dutch hospitality?",
        a: "Until 23:00. Staff aged 16 and 17 may not work between 23:00 and 06:00.",
      },
      {
        q: "How many hours can a 15-year-old work on a Saturday in the Netherlands?",
        a: "Up to 8 hours on a non-school day, and not between 19:00 and 07:00.",
      },
    ],
    related: ["working-time-act", "schedule"],
  },

  {
    id: "excel",
    lang: "en",
    slug: "staff-schedule-in-excel",
    title: "Making a staff schedule in Excel: when it works and when it doesn't",
    metaTitle: "Staff rota in Excel? Tips + the better alternative",
    description:
      "How to set up a staff rota in Excel or Google Sheets, where it breaks down, and when a scheduling app costs less than your own time.",
    updated,
    intro:
      "Almost every venue starts with a rota in Excel or Google Sheets. It's free and flexible. But as your team grows, the spreadsheet takes more and more of your time. Here's how to get the most out of it — and when to move on.",
    sections: [
      {
        heading: "Setting up a decent spreadsheet rota",
        html: `<ol>
<li>One tab per week, days as columns and shifts as rows.</li>
<li>A separate staff tab: name, function, contract hours, hourly rate, date of birth.</li>
<li>Drop-down lists (data validation) so only real names can be entered.</li>
<li>A per-person total with <code>COUNTIF</code> or <code>SUMIF</code> to check contract hours.</li>
<li>Conditional formatting to highlight empty shifts.</li>
</ol>`,
      },
      {
        heading: "Where spreadsheets fall short",
        html: `<ul>
<li>Availability arrives in chat messages you have to retype.</li>
<li>Swaps happen outside the file, which falls behind reality.</li>
<li>Versions multiply: "rota_week42_FINAL_v3.xlsx".</li>
<li>Rest periods and youth rules are on you to track.</li>
<li>Spreadsheets are unreadable on a phone, so staff screenshot an outdated copy.</li>
<li>Hours worked and labour cost are nowhere to be found at month-end.</li>
</ul>`,
      },
      {
        heading: "The real cost of a spreadsheet rota",
        html: `<p>Spend 3 hours a week on rotas, availability and swaps and that's over 150 hours a year. Even at €25 an hour, that's more than €3,900. Gedekt costs <a href="/en/pricing">from €10 a month</a>, flat — not per employee.</p>`,
      },
      {
        heading: "When to switch",
        html: `<p>A spreadsheet is fine for 3 to 5 regulars on the same shifts. Once you have more than 8 staff, on-call workers or students, frequent swaps, or you spend more than an hour a week on the rota, an app pays for itself. <a href="/en/how-it-works">See how Gedekt works</a>.</p>`,
      },
    ],
    related: ["choosing-software", "schedule", "swaps"],
  },

  {
    id: "labour-cost",
    lang: "en",
    slug: "restaurant-labour-cost",
    title: "Calculating labour cost in hospitality (and lowering it)",
    metaTitle: "Restaurant labour cost: calculate % of revenue + tips",
    description:
      "What does a hospitality employee really cost in the Netherlands? Calculate labour cost including employer charges, compare it with revenue, and lower it with smarter scheduling.",
    updated,
    intro:
      "Staff are often the biggest cost in hospitality, yet many owners only find out what a month really cost when payroll comes in. Here's how to calculate it upfront and steer.",
    sections: [
      {
        heading: "From gross wage to real cost",
        html: `<p>On top of the hourly wage, Dutch employers pay:</p>
<ul>
<li><strong>Holiday allowance:</strong> at least 8% of gross wages.</li>
<li><strong>Holiday hours:</strong> by law 4 times the weekly hours, per year.</li>
<li><strong>Employer contributions</strong> such as unemployment and disability insurance and the health insurance contribution.</li>
<li><strong>Pension</strong>, where required by your collective agreement or pension fund.</li>
</ul>
<p>As a rule of thumb, an employee costs 25–35% more than their gross wage. Your payroll provider can give you the exact figure.</p>`,
      },
      {
        heading: "Labour cost as a percentage of revenue",
        html: `<p>The key number is your <strong>labour cost percentage</strong>: staff costs divided by revenue (excluding VAT). In hospitality it's often between 30 and 40%.</p>
<p><strong>Example:</strong> €12,000 expected revenue in a week and a 32% target gives €3,840 for staff. At an average €22 per hour all-in, that's about 175 hours.</p>`,
      },
      {
        heading: "Five ways to lower labour cost",
        html: `<ol>
<li>Stagger start times so people arrive when the rush does.</li>
<li>Send people home in phases on quiet nights, by agreement.</li>
<li>Plan from data: last year's numbers and bookings.</li>
<li>Avoid overtime by scheduling to contract hours.</li>
<li>Reduce no-shows, which often lead to expensive last-minute cover.</li>
</ol>`,
      },
      {
        heading: "Know your staff cost every month",
        html: `<p>Gedekt shows hours worked, breaks, labour cost and no-shows per employee in one overview, exportable to Excel, PDF or payroll. <a href="/en/how-it-works/hours-and-labour-cost">See what it looks like</a>.</p>`,
      },
    ],
    faq: [
      {
        q: "What is a healthy labour cost percentage for a restaurant?",
        a: "Often between 30 and 40% of revenue excluding VAT, depending on the concept and how much service is involved.",
      },
    ],
    related: ["schedule", "choosing-software", "on-call"],
  },

  {
    id: "choosing-software",
    lang: "en",
    slug: "choosing-scheduling-software",
    title: "Choosing staff scheduling software for your venue: 10 things to check",
    metaTitle: "Best staff scheduling app for restaurants: 10 things to check",
    description:
      "Which scheduling app fits your restaurant, café or hotel? Ten points for comparing rota software: per-employee pricing, auto-scheduling, a staff app and more.",
    updated,
    intro:
      "There are dozens of rota apps, from big international suites to simple tools. Which one suits a venue with 5 to 30 staff? Use these ten points to compare them fairly.",
    sections: [
      {
        heading: "The checklist",
        html: `<ol>
<li><strong>Pricing:</strong> many tools charge €2.50–€4 per employee per month. With 25 staff that's €60–€100, rising with every hire. Flat pricing is more predictable. Watch out for annual contracts and setup fees.</li>
<li><strong>Auto-scheduling:</strong> the real time saver is software that fills shifts from availability, function and contract hours.</li>
<li><strong>A staff app people actually use</strong> for viewing shifts, sharing availability and swapping.</li>
<li><strong>Built for hospitality:</strong> functions per shift, late closes, on-call staff, fluctuating demand.</li>
<li><strong>Language:</strong> Dutch and English for a mixed team.</li>
<li><strong>Swaps and open shifts</strong> with manager approval.</li>
<li><strong>Time tracking and labour cost</strong> with a payroll export.</li>
<li><strong>Leave and availability</strong> in the same system as the rota.</li>
<li><strong>Time to first rota:</strong> today, or after weeks of implementation?</li>
<li><strong>Support</strong> from people who know your business.</li>
</ol>`,
      },
      {
        heading: "How Gedekt compares",
        html: `<p>Gedekt is built for Dutch hospitality venues with 5 to 20 staff: flat pricing <a href="/en/pricing">from €10 a month</a>, automatic scheduling, a staff app, swaps and open shifts, clock-in and labour cost reports, in Dutch and English. No annual contract, and from setup to first rota in under 30 minutes. <a href="/en/how-it-works">See how it works</a>.</p>`,
      },
    ],
    faq: [
      {
        q: "How much does scheduling software for restaurants cost?",
        a: "Many providers charge €2.50 to €4 per employee per month. Gedekt uses flat pricing from €10 a month for up to 15 staff.",
      },
    ],
    related: ["excel", "schedule"],
  },

  {
    id: "swaps",
    lang: "en",
    slug: "shift-swapping",
    title: "Shift swapping without the chaos",
    metaTitle: "Shift swapping for hospitality teams: rules & app",
    description:
      "Swap requests flooding the group chat? Set clear rules for shift swaps and open shifts and keep your rota accurate.",
    updated,
    intro:
      "\"Can anyone cover my Saturday?\" shows up in every hospitality group chat. Swapping is fine — but without rules nobody knows which rota is right.",
    sections: [
      {
        heading: "Agree on clear rules",
        html: `<ul>
<li>Swaps are allowed, always with manager approval.</li>
<li>The employee finds a replacement with the same function or higher.</li>
<li>At least 24 hours in advance, emergencies aside.</li>
<li>Through one channel — not the group chat, a note and a phone call.</li>
</ul>`,
      },
      {
        heading: "What to check before approving",
        html: `<ul>
<li>Does the replacement have the right function?</li>
<li>Does it break the Working Hours Act (12-hour shifts, 11 hours of rest)?</li>
<li>Is the replacement 16 or 17 and does the shift run past 23:00?</li>
<li>Does someone end up far above their contract hours?</li>
</ul>`,
      },
      {
        heading: "Swaps in Gedekt",
        html: `<p>Staff propose a swap in three taps or claim an open shift. You see both sides, get a warning if a function doesn't match, and approve with one click. The rota updates and everyone is notified. <a href="/en/how-it-works/claims-and-swaps">Watch it in 17 seconds</a>.</p>`,
      },
    ],
    related: ["schedule", "working-time-act"],
  },





];

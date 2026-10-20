import type { ManualArticle } from "../manual";

type Entry = Omit<ManualArticle, "lang">;

const articles: Entry[] = [
  // ─── Getting started ──────────────────────────────────────────────────────
  {
    id: "setup",
    slug: "first-time-setup",
    category: "start",
    title: "Setting up Gedekt for the first time",
    description: "The order to set up departments, shifts, employees and your standard week in, so your first schedule is right straight away.",
    sections: [
      {
        heading: "The order",
        html: `<p>Each step builds on the one before. Follow this order and you won't have to redo anything:</p>
<ol>
<li><strong>Departments and functions</strong>: for example Bar, Floor and Kitchen, with functions such as Manager and Bartender. See <a href="/en/manual/departments-and-functions">Setting up departments and functions</a>.</li>
<li><strong>Locations</strong>, only if you work at more than one site (Pro and Business). See <a href="/en/manual/locations">Working with multiple locations</a>.</li>
<li><strong>Shift types</strong>: your shifts with start and end times per department. See <a href="/en/manual/shift-types">Setting up shift types</a>.</li>
<li><strong>Employees</strong>: link everyone to a department and function. See <a href="/en/manual/add-employee">Adding an employee</a>.</li>
<li><strong>Fixed shifts</strong>: your standard week, optionally with fixed people. See <a href="/en/manual/fixed-shifts">Setting up your standard week</a>.</li>
<li><strong>Settings</strong>: how much you approve yourself and how employees enter availability. See <a href="/en/manual/choosing-settings">Choosing the key settings</a>.</li>
<li><strong>Your first schedule</strong>: build it and publish it. See <a href="/en/manual/build-schedule">Building a weekly schedule</a>.</li>
</ol>`,
      },
      {
        heading: "The guided tour",
        html: `<p>The first time you log in, a guided tour walks you through the main screens. For the settings it asks simple questions, so the app works the way your venue does. Employees get their own, shorter tour.</p>
<p>Want an employee to see the tour again? Open the employee and choose <span class="ui">Reset guide</span>.</p>`,
      },
      {
        heading: "The dashboard",
        html: `<p>After logging in you land on the dashboard. Under <span class="ui">Waiting on you</span> you see pending claims, swap requests, vacation requests, hours corrections, clock issues and sick calls from the last 72 hours. Below that you see who is working today.</p>
<p>A number next to a menu item also means something is waiting for you.</p>`,
      },
    ],
    related: ["settings", "departments", "add-employee"],
  },
  {
    id: "settings",
    slug: "choosing-settings",
    category: "start",
    title: "Choosing the key settings",
    description: "Which parts you switch on, how much you approve yourself, how employees enter availability and which reminders they get.",
    path: ["Admin", "Settings"],
    sections: [
      {
        heading: "Functions: which parts do you use?",
        html: `<ul>
<li><span class="ui">Vacation</span>: do employees request time off through the app? Leave it on. When it's off, vacation disappears from the menu.</li>
<li><span class="ui">Hours tracking</span>: switch it on if you want to track hours worked. You get clocking, the hours overview, reports, the payroll export and the clock kiosk.</li>
<li><span class="ui">Employees may clock in from their own phone</span>: useful if you have no tablet at the entrance. See <a href="/en/manual/phone-clocking">Clocking in by phone</a>.</li>
</ul>`,
      },
      {
        heading: "Requests & approval",
        html: `<p>Choose for each type of request how much you want to see yourself:</p>
<ul>
<li><span class="ui">Claiming open shifts</span> and <span class="ui">Swaps and handoffs</span>: choose <span class="ui">Always approve manually</span>, <span class="ui">Auto when same function</span> or <span class="ui">Always automatic</span>. "Same function" means: the same department and a function that is allowed to fill the shift. Anything else comes to you.</li>
<li><span class="ui">Only own department/function can pick up shifts</span>: switch this on if a cook should never pick up a bar shift.</li>
<li><span class="ui">Auto-approve vacation requests</span> and <span class="ui">Auto-approve hours corrections</span>.</li>
</ul>`,
      },
      {
        heading: "Entering availability",
        html: `<p>Do you work with fixed shifts such as Lunch, Dinner and Close? Choose <span class="ui">Per shift</span>, and employees tick the shifts they can work. Do your times change a lot? Choose <span class="ui">Time window</span>, and they enter a start and end time per day.</p>
<p>Do you schedule a few weeks ahead? Use <span class="ui">Lock availability</span>. More in <a href="/en/manual/team-availability">Your team's availability</a>.</p>`,
      },
      {
        heading: "Reminders and notifications",
        html: `<ul>
<li><span class="ui">Shift reminder</span>: employees get a daily reminder of that day's shift, at a time you choose.</li>
<li><span class="ui">Notifications</span>: switch on push notifications on every device where you want to hear that someone claims a shift or wants to swap.</li>
</ul>`,
      },
      {
        heading: "Advanced options",
        html: `<p>The defaults work for most venues. Here you'll find:</p>
<ul>
<li><span class="ui">Team chat</span> on or off.</li>
<li><span class="ui">Scheduling cadence</span>: whether you schedule per week, month or quarter. This sets how many weeks one scheduling action and the reminders handle at once.</li>
<li>The scheduling engine, <span class="ui">Auto-schedule</span> and <span class="ui">Auto-offer</span> (Pro and Business).</li>
<li><span class="ui">Availability reminder</span>.</li>
<li><span class="ui">Clock kiosk</span>. See <a href="/en/manual/clock-kiosk">Setting up the clock kiosk</a>.</li>
</ul>
<p>At the bottom you'll also find the <span class="ui">Clock-out form</span>, your <span class="ui">Account</span> (change password) and the app <span class="ui">Language</span>.</p>`,
      },
    ],
    related: ["setup", "swaps-claims", "availability-admin"],
  },

  // ─── Staff ────────────────────────────────────────────────────────────────
  {
    id: "add-employee",
    slug: "add-employee",
    category: "staff",
    title: "Adding an employee",
    description: "Create a new employee, link them to a department and function, and send an invitation to the app.",
    path: ["Staff", "Employees", "Add employee"],
    sections: [
      {
        heading: "Step by step",
        html: `<ol>
<li>Go to <span class="ui">Staff → Employees</span> and click <span class="ui">Add employee</span>.</li>
<li>Fill in <span class="ui">Full name</span>, <span class="ui">Date of birth</span>, <span class="ui">Email</span> and <span class="ui">Phone</span>. The date of birth is needed for the rules on young workers.</li>
<li>Under <span class="ui">Track by</span>, choose whether you track the contract in hours or days, then fill in <span class="ui">Min. contract hours / week</span> and <span class="ui">Max. days / week</span>.</li>
<li>Fill in the <span class="ui">Hourly rate (€)</span>. It's needed for labour costs in the schedule and reports.</li>
<li>Under <span class="ui">Departments</span>, tick where the person works and choose a <span class="ui">Function</span> for each department. If someone works in several departments, you can set the number of <span class="ui">Days/week</span> per department.</li>
<li>Click <span class="ui">Add employee</span>.</li>
</ol>`,
      },
      {
        heading: "The invitation to the app",
        html: `<p>If you filled in an email address, the employee gets an email to activate their account and set a password.</p>
<p>If the email can't be sent, the screen shows a temporary password. Pass it on yourself. The employee picks their own password the first time they log in.</p>
<p>You can schedule someone without an email address, but they won't have an account yet. You can create one later with <span class="ui">Create user account</span> on the employee's page.</p>`,
      },
      {
        heading: "Giving permissions straight away",
        html: `<p>Under <span class="ui">Individual permissions</span> you can let someone build schedules, approve requests or clock colleagues in and out. See <a href="/en/manual/permissions-and-roles">Giving permissions</a>.</p>`,
      },
    ],
    related: ["manage-employee", "departments", "permissions"],
  },
  {
    id: "manage-employee",
    slug: "manage-employee",
    category: "staff",
    title: "Editing, deactivating or deleting an employee",
    description: "Change details and contract, reset a password, resend an invitation or take someone off the team.",
    path: ["Staff", "Employees", "(employee)"],
    sections: [
      {
        heading: "Changing details and contract",
        html: `<p>In <span class="ui">Staff → Employees</span>, click a name. Use the search bar or filter by department if your team is large.</p>
<ul>
<li><span class="ui">Profile & contract</span>: name, contact details, contract hours, hourly rate, <span class="ui">Vacation days per year</span> and an <span class="ui">Internal note</span> only admins see. Save with <span class="ui">Save profile</span>.</li>
<li><span class="ui">Departments, rank & locations</span>: departments, function per department and locations. This block is saved separately.</li>
</ul>
<p>Further down the page you see the employee's hours summary and availability.</p>`,
      },
      {
        heading: "Resetting a password",
        html: `<p>Click <span class="ui">Reset password</span> at the top. You'll see a new temporary password. Pass it on: the employee must change it the first time they log in.</p>
<p>Hasn't the person activated their account yet? Use <span class="ui">Resend activation email</span>. <span class="ui">Resend app links</span> emails them the links to the app again.</p>`,
      },
      {
        heading: "Deactivating or deleting",
        html: `<p>Is someone leaving? Choose <span class="ui">Deactivate</span>. They can no longer log in and won't be scheduled, but their hours and history are kept. <span class="ui">Activate</span> turns it back on.</p>
<p>The <span class="ui">Danger zone</span> at the bottom has <span class="ui">Delete account</span> (only the login) and <span class="ui">Delete employee</span>. Deleting can't be undone, so deactivating is usually the better choice.</p>`,
      },
      {
        heading: "Seeing what the employee sees",
        html: `<p><span class="ui">View as employee</span> shows you the app the way that employee sees it. Handy when someone asks why a shift or button isn't there.</p>`,
      },
    ],
    related: ["add-employee", "permissions", "documents"],
  },
  {
    id: "departments",
    slug: "departments-and-functions",
    category: "staff",
    title: "Setting up departments and functions",
    description: "Create departments such as Bar and Kitchen, add functions and decide who may cover for whom.",
    path: ["Staff", "Manage departments"],
    sections: [
      {
        heading: "Adding a department",
        html: `<ol>
<li>In the menu under <span class="ui">Staff</span>, click <span class="ui">Manage departments</span>.</li>
<li>Click <span class="ui">Add department</span>, enter a name and optionally pick a <span class="ui">Color</span>. You'll see that colour in the schedule.</li>
<li>If you work with several locations, also choose the department's location.</li>
</ol>`,
      },
      {
        heading: "Adding functions",
        html: `<p>For a department, type a <span class="ui">New function name</span>, such as Manager, Bartender or Barback, and click <span class="ui">Add function</span>. Use <span class="ui">Move up</span> and <span class="ui">Move down</span> to order them from senior to junior.</p>
<p>Functions decide who can work which shift: each shift type has a minimum function.</p>`,
      },
      {
        heading: "Fill rules: who may cover for whom?",
        html: `<p>Each function has <span class="ui">Can also fill shifts of:</span>. Tick the functions this one may take over. For example, a Bar Manager may fill a Bartender shift.</p>
<p>These rules apply to the scheduling engine, to claims and swaps, and to the warnings in the schedule. That way a shift doesn't stay open just because that exact function is missing.</p>`,
      },
      {
        heading: "Permissions per function",
        html: `<p>You can give a whole function permissions: <span class="ui">Can approve swaps & claims</span>, <span class="ui">Can manage clock</span> and <span class="ui">Can build schedules</span>. Everyone with that function gets it. To give it to just one person, do it on that employee instead. See <a href="/en/manual/permissions-and-roles">Giving permissions</a>.</p>
<p class="tip">Deleting a department or function also deletes everything linked to it. Only do it if you really don't use it any more.</p>`,
      },
    ],
    related: ["shift-types", "add-employee", "permissions"],
  },
  {
    id: "permissions",
    slug: "permissions-and-roles",
    category: "staff",
    title: "Giving permissions: scheduler, approver, clock manager and admin",
    description: "Let a trusted employee build the schedule or approve requests without full admin access, or make someone an admin.",
    path: ["Staff", "Employees", "(employee)", "Individual permissions"],
    sections: [
      {
        heading: "Three permissions",
        html: `<ul>
<li><span class="ui">Can build schedules</span>: the employee can build and publish the schedule, without seeing pay rates or becoming an admin. They find it under <span class="ui">More → Scheduling</span>.</li>
<li><span class="ui">Can approve swaps & claims</span>: the employee gets <span class="ui">More → Approvals</span>, with colleagues' swap requests, claims and hours corrections.</li>
<li><span class="ui">Can manage clock</span>: the employee can clock colleagues in and out through <span class="ui">More → Clock colleagues in/out</span>.</li>
</ul>`,
      },
      {
        heading: "Per function or per person",
        html: `<p>If you give a permission to a function (in <a href="/en/manual/departments-and-functions">Manage departments</a>), everyone with that function gets it. To give it to one person only, open the employee and tick it under <span class="ui">Individual permissions</span>.</p>`,
      },
      {
        heading: "Making someone an admin",
        html: `<p>Open the employee and choose <span class="ui">Promote to admin</span>. They get full admin access and can still be scheduled. This can't be undone. The new admin has to log in again to see the admin area, and can switch to the employee side at the top right.</p>`,
      },
    ],
    related: ["departments", "manage-employee", "swaps-claims"],
  },
  {
    id: "locations",
    slug: "locations",
    category: "staff",
    title: "Working with multiple locations",
    description: "Add locations and schedule per location, with departments, employees and shifts per venue.",
    path: ["Staff", "Manage locations"],
    plan: "pro",
    sections: [
      {
        heading: "Adding a location",
        html: `<ol>
<li>In the menu under <span class="ui">Staff</span>, click <span class="ui">Manage locations</span>.</li>
<li>Click <span class="ui">Add location</span> and enter the name and, optionally, the address.</li>
<li>Then, in <a href="/en/manual/departments-and-functions">Manage departments</a>, link each department to a location, and for each employee choose which <span class="ui">Locations</span> they work at.</li>
</ol>`,
      },
      {
        heading: "Working per location",
        html: `<p>At the top of the screen you pick a location or <span class="ui">All locations</span>. The schedule, availability and overviews follow that choice. If you generate a schedule while a location is selected, the engine only builds that location's schedule.</p>
<p>If an employee works at several locations, the kiosk or their phone asks <span class="ui">Which location?</span> when they clock in.</p>`,
      },
      {
        heading: "Deleting a location",
        html: `<p>First delete that location's departments and shifts. Then you can delete the location itself. This can't be undone.</p>`,
      },
    ],
    related: ["departments", "build-schedule"],
  },
  {
    id: "documents",
    slug: "documents",
    category: "staff",
    title: "Storing employee contracts and documents",
    description: "Upload contracts and certificates per employee. Employees only download their own documents.",
    path: ["Staff", "Employees", "(employee)", "Documents"],
    sections: [
      {
        heading: "Uploading a document",
        html: `<ol>
<li>Open the employee through <span class="ui">Staff → Employees</span>.</li>
<li>Under <span class="ui">Documents</span>, choose the <span class="ui">Document type</span> and the file: PDF, JPG or PNG, up to 8 MB.</li>
<li>Click <span class="ui">Upload</span>.</li>
</ol>`,
      },
      {
        heading: "Who sees what?",
        html: `<p>Employees only see and download their own documents, under <span class="ui">More → My documents</span>. Employees who can build schedules don't see documents. Documents are deleted automatically after the legal retention period.</p>`,
      },
    ],
    related: ["manage-employee"],
  },

  // ─── Schedule ─────────────────────────────────────────────────────────────
  {
    id: "shift-types",
    slug: "shift-types",
    category: "schedule",
    title: "Setting up shift types",
    description: "Define your shifts with a shift code, start and end time, minimum function and different times on certain days.",
    path: ["Schedule", "Shift Types"],
    sections: [
      {
        heading: "Adding a shift type",
        html: `<ol>
<li>Go to <span class="ui">Schedule → Shift Types</span>. You need at least one department first.</li>
<li>Click <span class="ui">Add shift type</span> for the right department.</li>
<li>Enter a <span class="ui">Shift code</span> (for example A1 or Morning), the <span class="ui">Start</span> and the <span class="ui">End</span>.</li>
<li>Under <span class="ui">Min function</span>, choose the lowest function that can work it. Through the fill rules, higher functions can work it too.</li>
<li>Optionally use <span class="ui">Note</span> and <span class="ui">Priority</span>. The scheduling engine fills higher-priority shifts first.</li>
</ol>`,
      },
      {
        heading: "One shift type is one spot",
        html: `<p>Each shift type is one spot for one person. If you need three people behind the bar on Friday night, create three shift types, for example B1, B2 and B3. In <a href="/en/manual/fixed-shifts">Fixed shifts</a> you then decide on which days each one recurs.</p>`,
      },
      {
        heading: "Different times on certain days",
        html: `<p>Does a shift start later on Fridays? Click <span class="ui">Customize time per day</span> on the shift and set a different start or end time for that day. A shift that ends after midnight is marked <span class="ui">Past midnight</span> and counts correctly for rest time.</p>
<p>Use <span class="ui">Move up</span> and <span class="ui">Move down</span> to set the order in which shifts appear in the schedule.</p>`,
      },
    ],
    related: ["templates", "departments", "build-schedule"],
  },
  {
    id: "templates",
    slug: "fixed-shifts",
    category: "schedule",
    title: "Setting up your standard week (fixed shifts)",
    description: "Set up once which shifts you need on which days, optionally with fixed employees, so you don't start from scratch every week.",
    path: ["Schedule", "Fixed shifts"],
    sections: [
      {
        heading: "Filling in the standard week",
        html: `<ol>
<li>Go to <span class="ui">Schedule → Fixed shifts</span> and choose a department.</li>
<li>Each row is a shift type, each column a day. Switch a cell on for the days that shift is needed.</li>
<li>If someone always works a particular shift, pick that person in the cell or drag them there from <span class="ui">Show team</span>. That shift is then fixed for them.</li>
</ol>
<p><span class="ui">Only eligible</span> shows only people who are allowed and able to work the shift. Employees see their fixed shifts in the app under <span class="ui">My fixed shifts</span>.</p>`,
      },
      {
        heading: "Using the standard week",
        html: `<p>In the schedule, choose <span class="ui">Tools → Import template</span> to fill a week with these shifts. <span class="ui">Apply fixed</span> schedules the fixed people straight away. See <a href="/en/manual/build-schedule">Building a weekly schedule</a>.</p>`,
      },
      {
        heading: "Several templates (summer, winter)",
        html: `<p>Do you need a different week in summer than in winter? With Business you create several templates with <span class="ui">New template</span> and switch between them with the tabs at the top. In the schedule you choose which template to import.</p>`,
      },
    ],
    related: ["shift-types", "build-schedule", "engine"],
  },
  {
    id: "build-schedule",
    slug: "build-schedule",
    category: "schedule",
    title: "Building a weekly schedule",
    description: "Fill a week from your standard week or the previous week, schedule employees, and add a briefing or extra shift.",
    path: ["Schedule", "Schedule"],
    sections: [
      {
        heading: "Filling the week",
        html: `<ol>
<li>Go to <span class="ui">Schedule → Schedule</span> and choose the week with the arrows, or click the date.</li>
<li>Open <span class="ui">Tools</span> and choose <span class="ui">Import template</span>. The week gets the shifts from your <a href="/en/manual/fixed-shifts">standard week</a>.</li>
<li>Choose <span class="ui">Apply fixed</span> to schedule the fixed people.</li>
</ol>
<p>Is this week like last week? Choose <span class="ui">Copy prev. week</span> instead. Note: this overwrites what's already there.</p>`,
      },
      {
        heading: "Scheduling employees",
        html: `<p>Click an open shift. You'll see a list of candidates: first who's eligible, then who isn't and why (no availability, wrong function, not enough rest). Pick a name.</p>
<p>You can also open <span class="ui">Show team</span> and drag an employee onto a shift. If you drag a scheduled employee onto another shift, the two swap places.</p>
<p><span class="ui">Departments</span> filters the schedule, and <span class="ui">Employee filter</span> sets whether you see only eligible people or everyone.</p>`,
      },
      {
        heading: "Briefings, locking and extra shifts",
        html: `<ul>
<li><strong>Briefing</strong>: click a shift and write something under <span class="ui">Briefing for this shift</span>, such as "group of 20 at 7 pm". The employee sees it in their schedule.</li>
<li><strong>Locking</strong>: <span class="ui">Lock</span> guarantees an assignment stays put when you let the engine fill the schedule.</li>
<li><strong>Extra shift</strong>: <span class="ui">Tools → Add extra shift</span> creates a one-off shift outside your standard week, for example to train someone new.</li>
</ul>`,
      },
      {
        heading: "The summary at the top",
        html: `<p>Below the buttons you see how many shifts are filled, how many hours are scheduled and what the labour cost is. Shifts that aren't published yet count as <span class="ui">draft</span>. To start over, choose <span class="ui">Tools → Clear week</span>.</p>
<p>Is the week ready? Continue with <a href="/en/manual/publish-schedule">Publishing the schedule</a>.</p>`,
      },
    ],
    related: ["publish", "engine", "templates"],
  },
  {
    id: "publish",
    slug: "publish-schedule",
    category: "schedule",
    title: "Publishing and sharing the schedule",
    description: "Make a week visible to your team, make changes after publishing and export the schedule as PDF or Excel.",
    path: ["Schedule", "Schedule"],
    sections: [
      {
        heading: "Publishing",
        html: `<p>Employees only see their shifts once you publish. To publish a week:</p>
<ul>
<li>With Pro or Business: open <span class="ui">Generate & publish</span> and choose <span class="ui">Publish</span>.</li>
<li>With Starter: click <span class="ui">Publish</span>.</li>
</ul>
<p>Everyone with a shift gets a notification. The week is labelled <span class="ui">Published</span>.</p>`,
      },
      {
        heading: "Changing things after publishing",
        html: `<p>You can still edit a published week. If you change who works a shift, it's visible right away and both employees get a notification. Employees can claim an open shift in a published week themselves. See <a href="/en/manual/fill-open-shifts">Getting open shifts filled</a>.</p>`,
      },
      {
        heading: "Finding published weeks",
        html: `<p><span class="ui">Schedule → Published</span> lists all published weeks, with the number of shifts, employees and open shifts. Open a week to view or correct it.</p>`,
      },
      {
        heading: "Exporting and printing",
        html: `<p>Choose <span class="ui">Export → Export PDF</span> to put the schedule on the wall, or <span class="ui">Export Excel</span> to share it as a file. Employees can also add their shifts to their own calendar automatically. See <a href="/en/manual/view-schedule">Viewing your schedule</a>.</p>`,
      },
    ],
    related: ["build-schedule", "open-shifts", "notifications"],
  },
  {
    id: "engine",
    slug: "scheduling-engine",
    category: "schedule",
    title: "Letting the scheduling engine build the schedule",
    description: "Fill the whole week in one click based on availability, function, contract hours and rest time, and see why a shift stayed open.",
    path: ["Schedule", "Schedule", "Generate & publish"],
    plan: "pro",
    sections: [
      {
        heading: "Generating a schedule",
        html: `<ol>
<li>Set up the week's shifts with <span class="ui">Tools → Import template</span>. If you like, schedule some people yourself first and lock what must stay.</li>
<li>Open <span class="ui">Generate & publish</span> and choose <span class="ui">Generate</span>.</li>
<li>Check the result, adjust where needed and then choose <span class="ui">Publish</span>.</li>
</ol>`,
      },
      {
        heading: "What the engine takes into account",
        html: `<p>Availability, approved vacation, function and fill rules, contract hours, the maximum days per week and per department, and the rest time between shifts (11 hours by default, also across the week boundary). It also spreads shifts fairly across the team.</p>
<p>The engine fills open shifts. It leaves filled shifts alone, but to fill an open shift it may move an assignment that isn't locked. Locked shifts always stay put.</p>
<p><span class="ui">Schedule → Engine Guide</span> explains exactly which rules apply and who goes first. In <span class="ui">Settings → Advanced options</span> you switch parts of the engine on or off and set the <span class="ui">Minimum rest between shifts</span>.</p>`,
      },
      {
        heading: "\"No match found\"",
        html: `<p>If the engine couldn't fill a shift, it shows <span class="ui">No match found</span> in red. Hover over it to see why, for example that nobody is available that day. Fix that and generate again, or use <a href="/en/manual/fill-open-shifts">"Who can I call?"</a>.</p>`,
      },
      {
        heading: "Automatically on a set day",
        html: `<p>Under <span class="ui">Settings → Advanced options → Auto-schedule</span> you have the schedule built on a set day. Choose the <span class="ui">Day of week</span>, the <span class="ui">Repeat interval</span> and how many <span class="ui">Weeks ahead</span>. You check and publish the result yourself.</p>`,
      },
    ],
    related: ["build-schedule", "open-shifts", "availability-admin"],
  },
  {
    id: "open-shifts",
    slug: "fill-open-shifts",
    category: "schedule",
    title: "Getting open shifts filled",
    description: "Let employees claim open shifts, offer them automatically, and use \"Who can I call?\" to see who to ask.",
    sections: [
      {
        heading: "Letting employees claim",
        html: `<p>Employees see open shifts in a published week in the app under <span class="ui">More → Shifts</span>, and can <span class="ui">Claim</span> them. Depending on your settings, you approve the claim yourself or it goes through automatically. See <a href="/en/manual/swaps-and-claims">Approving claims and swap requests</a>.</p>`,
      },
      {
        heading: "Auto-offer",
        html: `<p>With Pro or Business, switch on <span class="ui">Settings → Advanced options → Auto-offer</span>. Every hour, open published shifts are offered to employees who qualify. Under <span class="ui">Lookahead window</span> you choose how many hours in advance that happens.</p>
<p>If you switch on <span class="ui">Auto-assign (skip approval)</span>, the first person to respond gets the shift straight away.</p>`,
      },
      {
        heading: "\"Who can I call?\"",
        html: `<p>If shifts stay open, <span class="ui">Who can I call?</span> appears below the schedule (Pro and Business). Click <span class="ui">Show suggestions</span>. For each person you get the best plan: who you call, who moves over and how many open shifts that fills.</p>
<p>If someone says yes, click <span class="ui">Said yes, apply</span> and all the moves are made at once. Every rule still applies, except the availability of the person you call.</p>`,
      },
    ],
    related: ["engine", "swaps-claims", "sick"],
  },

  // ─── Availability ─────────────────────────────────────────────────────────
  {
    id: "availability-admin",
    slug: "team-availability",
    category: "availability",
    title: "Viewing and managing your team's availability",
    description: "See who can work when, edit an employee's availability, choose per shift or time window, lock weeks and send reminders.",
    path: ["Schedule", "Availability"],
    sections: [
      {
        heading: "The overview",
        html: `<p><span class="ui">Schedule → Availability</span> shows per week who is <span class="ui">available</span>, who <span class="ui">prefers</span> to work (preferred day), who is <span class="ui">unavailable</span> and who is on <span class="ui">vacation</span>. Click a note to read it. Filter by department or search for an employee.</p>
<p>Click a name to edit that employee's availability yourself. You can always do this, even when the week is locked.</p>`,
      },
      {
        heading: "Per shift or per time window",
        html: `<p>Under <span class="ui">Settings → Entering availability</span> you choose the <span class="ui">Input method</span>:</p>
<ul>
<li><span class="ui">Time window</span>: employees enter a start and end time per day.</li>
<li><span class="ui">Per shift</span>: employees tick the shifts from your fixed shifts for each day. The engine then only schedules someone on ticked shifts. Under <span class="ui">Fixed shifts</span> you choose which template they pick from.</li>
</ul>
<p>If you switch later, both kinds of data are kept.</p>`,
      },
      {
        heading: "Locking availability",
        html: `<p>With <span class="ui">Lock availability</span>, employees can no longer change their availability for the current week plus the number of weeks you choose. If you schedule further ahead, also fill in a <span class="ui">Fixed date (optional)</span>. Whichever reaches furthest wins.</p>`,
      },
      {
        heading: "Sending a reminder",
        html: `<p>Under <span class="ui">Advanced options → Availability reminder</span>, switch the reminder on and choose <span class="ui">When</span> and how many <span class="ui">Weeks ahead</span>. The reminder follows your scheduling cadence: every week, every 4 weeks or every 13 weeks.</p>`,
      },
    ],
    related: ["give-availability", "engine", "settings"],
  },

  // ─── Requests ─────────────────────────────────────────────────────────────
  {
    id: "swaps-claims",
    slug: "swaps-and-claims",
    category: "requests",
    title: "Approving claims and swap requests",
    description: "How swapping, handing off and claiming work, where you approve them, and how to automate it or leave it to a team lead.",
    path: ["Requests", "Claims · Swap Requests"],
    sections: [
      {
        heading: "How employees swap",
        html: `<p>An employee taps one of their own shifts in the app and chooses:</p>
<ul>
<li><span class="ui">Open swap</span>: anyone can respond with a shift in exchange.</li>
<li><span class="ui">Open handoff</span>: anyone can take the shift, no swap needed.</li>
<li><span class="ui">Give to colleague</span>: hand it straight to one person.</li>
<li><span class="ui">Swap with colleague</span>: propose a specific shift of a colleague.</li>
</ul>
<p>Only when a colleague accepts does the request come to you.</p>`,
      },
      {
        heading: "Approving or denying",
        html: `<p>Open <span class="ui">Requests → Swap Requests</span> or <span class="ui">Requests → Claims</span>. Each request shows who gives and gets what. A <span class="ui">Warning</span> flags when it doesn't fit, for example because of function or rest time. Optionally add a note for the employees and click <span class="ui">Approve</span> or <span class="ui">Deny</span>. On approval the schedule is updated right away.</p>`,
      },
      {
        heading: "Approving less yourself",
        html: `<p>Under <span class="ui">Settings → Requests & approval</span>, choose per type <span class="ui">Always approve manually</span>, <span class="ui">Auto when same function</span> or <span class="ui">Always automatic</span>. <span class="ui">Only own department/function can pick up shifts</span> stops people from claiming or swapping outside their function.</p>
<p>Want a team lead to handle it? Give them <span class="ui">Can approve swaps & claims</span>. See <a href="/en/manual/permissions-and-roles">Giving permissions</a>.</p>`,
      },
    ],
    related: ["open-shifts", "permissions", "swap-shift"],
  },
  {
    id: "leave",
    slug: "vacation-requests",
    category: "requests",
    title: "Handling vacation requests",
    description: "Approve or deny time off, see how many days someone has left, and what happens to their shifts in that period.",
    path: ["Requests", "Vacation Requests"],
    sections: [
      {
        heading: "Handling a request",
        html: `<ol>
<li>Open <span class="ui">Requests → Vacation Requests</span>.</li>
<li>Each request shows the period and, if you track vacation days, how many days the employee has left.</li>
<li>Optionally add a note and click <span class="ui">Approve</span> or <span class="ui">Deny</span>.</li>
</ol>
<p>Handled requests are listed under <span class="ui">Recently handled</span>.</p>`,
      },
      {
        heading: "What happens on approval",
        html: `<p>The employee is unavailable for those dates, also for the scheduling engine. If they were already scheduled, those shifts are released and you get a notification about which shifts opened up.</p>`,
      },
      {
        heading: "Vacation days and settings",
        html: `<p>The balance comes from <span class="ui">Vacation days per year</span> on the employee. Leave it empty and no balance is tracked.</p>
<p>To approve requests automatically, switch on <span class="ui">Auto-approve vacation requests</span> in the settings. If you don't use vacation in the app, switch off <span class="ui">Vacation</span> under <span class="ui">Functions</span>.</p>`,
      },
    ],
    related: ["request-leave", "open-shifts", "settings"],
  },
  {
    id: "sick",
    slug: "sick-calls",
    category: "requests",
    title: "Handling sick calls",
    description: "What happens when an employee reports sick in the app, and how to get the shift filled again quickly.",
    sections: [
      {
        heading: "How a sick call works",
        html: `<p>An employee taps one of their upcoming shifts in the app and chooses <span class="ui">Report sick</span>, optionally with a note for you. The shift is released straight away, so a colleague can take it. You get a notification.</p>
<p>The dashboard shows sick calls from the last 72 hours. The reports show sick calls per week.</p>`,
      },
      {
        heading: "Filling the shift again",
        html: `<ul>
<li>Colleagues see the released shift among the open shifts and can claim it.</li>
<li>With auto-offer (Pro and Business), suitable colleagues get a message automatically.</li>
<li><span class="ui">Who can I call?</span> shows who you'd best ask.</li>
<li>Or schedule someone yourself in the schedule. They'll get a notification.</li>
</ul>
<p>More in <a href="/en/manual/fill-open-shifts">Getting open shifts filled</a>.</p>`,
      },
    ],
    related: ["open-shifts", "report-sick", "swaps-claims"],
  },

  // ─── Hours & clocking ─────────────────────────────────────────────────────
  {
    id: "kiosk",
    slug: "clock-kiosk",
    category: "hours",
    title: "Setting up the clock kiosk",
    description: "Set up a tablet at the entrance so employees clock in and out by tapping their name.",
    path: ["Admin", "Settings", "Advanced options", "Clock kiosk"],
    sections: [
      {
        heading: "Linking the kiosk",
        html: `<p>First switch on <span class="ui">Hours tracking</span> under <span class="ui">Settings → Functions</span>.</p>
<ol>
<li>Go to <span class="ui">Settings → Advanced options → Clock kiosk</span> and click <span class="ui">Generate token</span>.</li>
<li>Click <span class="ui">Copy</span>.</li>
<li>On the tablet, open <span class="ui">clock.gedekt.com</span>, paste the token and click <span class="ui">Activate kiosk</span>.</li>
</ol>
<p>You only do this once: the tablet remembers the token.</p>`,
      },
      {
        heading: "How employees clock",
        html: `<p>An employee searches for or taps their name and chooses <span class="ui">Clock In</span> or <span class="ui">Clock Out</span>. No PIN or number is needed. If you have a <a href="/en/manual/clock-out-form">clock-out form</a>, they fill it in when clocking out. If someone works at several locations, they pick the location.</p>`,
      },
      {
        heading: "Tablet lost or replaced?",
        html: `<p>Click <span class="ui">Regenerate token</span>. The old tablet stops working and you link the new one with the new token.</p>`,
      },
    ],
    related: ["phone-clock", "clock-out-form", "hours"],
  },
  {
    id: "phone-clock",
    slug: "phone-clocking",
    category: "hours",
    title: "Letting employees clock in by phone",
    description: "Switch on clocking in and out through the app, for venues without a tablet at the entrance.",
    path: ["Admin", "Settings", "Functions"],
    sections: [
      {
        heading: "Switching it on",
        html: `<p>Under <span class="ui">Settings → Functions</span>, first switch on <span class="ui">Hours tracking</span>, then <span class="ui">Employees may clock in from their own phone</span>.</p>
<p>Employees then get <span class="ui">Clock</span> in the bottom menu, in place of Checklist. Checklists move to <span class="ui">More</span>. The kiosk keeps working as before.</p>`,
      },
      {
        heading: "What the employee sees",
        html: `<p>On <span class="ui">Clock</span> the employee sees whether they're clocked in, today's shift and the hours they've worked this week. Clock-in times are rounded up to the quarter hour, clock-out times down.</p>`,
      },
    ],
    related: ["kiosk", "hours", "clock-in-out"],
  },
  {
    id: "hours",
    slug: "check-hours",
    category: "hours",
    title: "Checking and correcting hours worked",
    description: "See per day who was late or forgot to clock out, add or edit time records and approve hours corrections.",
    path: ["Overview", "Hours"],
    sections: [
      {
        heading: "The daily overview",
        html: `<p><span class="ui">Overview → Hours</span> shows every scheduled shift of the day with its clock status: <span class="ui">On time</span>, <span class="ui">Late</span>, <span class="ui">Early</span>, <span class="ui">Forgot to clock out</span> or <span class="ui">No clock-in</span>. If someone clocked in without a scheduled shift, it shows as <span class="ui">Extra (no scheduled shift)</span>.</p>`,
      },
      {
        heading: "Adding or editing hours",
        html: `<p>Click a row to edit the hours, or use <span class="ui">Add manual log</span>. Fill in <span class="ui">Clock in</span> and <span class="ui">Clock out</span> and optionally a note. The employee can see that note. If the clock-out time is before the clock-in time, it counts as a night shift.</p>`,
      },
      {
        heading: "Clocking someone in or out now",
        html: `<p>Under <span class="ui">Overview → Clock</span>, search for an employee by name and clock them in or out. You also see who's clocked in right now. Forgotten clock-outs show up here too, so you can close them.</p>`,
      },
      {
        heading: "Approving hours corrections",
        html: `<p>If an employee forgot to clock, they can request a correction in the app. You'll find it under <span class="ui">Requests → Hours corrections</span>, with the current and the requested times. Click <span class="ui">Approve</span>, or reject it with a reason.</p>
<p>Don't want to do this yourself? Switch on <span class="ui">Auto-approve hours corrections</span> in the settings, or give a team lead permission to approve.</p>`,
      },
    ],
    related: ["reports", "kiosk", "hours-corrections"],
  },
  {
    id: "clock-out-form",
    slug: "clock-out-form",
    category: "hours",
    title: "Setting up the clock-out form (breaks, meals)",
    description: "Your own questions at clock-out, such as break length or a staff meal with an amount.",
    path: ["Admin", "Settings", "Clock-out form"],
    sections: [
      {
        heading: "Adding a field",
        html: `<ol>
<li>Go to <span class="ui">Settings → Clock-out form</span>.</li>
<li>Under <span class="ui">Add field</span>, enter a <span class="ui">Label</span>, for example "Dinner".</li>
<li>Choose the <span class="ui">Type</span>: <span class="ui">Yes/No (checkbox)</span>, <span class="ui">Break time (minutes)</span> or a value in euros per time.</li>
<li>Click <span class="ui">Add</span>. <span class="ui">Active</span> and <span class="ui">Inactive</span> switch a field on or off for a while.</li>
</ol>`,
      },
      {
        heading: "Where the answers end up",
        html: `<p>Employees answer the questions when they clock out, on the kiosk or their phone. The break is deducted from the time worked. You'll see breaks and allowances in the <a href="/en/manual/reports-and-payroll-export">reports and payroll export</a>. Employees also fill them in when they request an hours correction.</p>`,
      },
    ],
    related: ["kiosk", "reports", "hours"],
  },
  {
    id: "reports",
    slug: "reports-and-payroll-export",
    category: "hours",
    title: "Reports and the payroll export",
    description: "View hours worked, labour cost, no-shows and contract hours for any period, and export them for your payroll administration.",
    path: ["Overview", "Reports"],
    sections: [
      {
        heading: "Viewing a report",
        html: `<p>Go to <span class="ui">Overview → Reports</span>. Pick a month with the arrows, or enter your own period under <span class="ui">From</span> and <span class="ui">To</span> and click <span class="ui">Apply</span>.</p>
<p>At the top you see the hours worked (net, after breaks), labour cost, no-shows and the number of active employees. The table shows hours, breaks, cost, allowances and contract hours per employee. <span class="ui">Insights</span> shows, among other things, swap requests, sick calls and scheduled labour cost per week.</p>`,
      },
      {
        heading: "Exporting",
        html: `<ul>
<li><strong>PDF or Excel</strong>: the report as a file.</li>
<li><span class="ui">Salarisexport (NL)</span>: an Excel file with Dutch column names (employee number, gross pay, meal allowance and so on) for your payroll administration.</li>
</ul>
<p class="tip">Labour costs are only right if every employee has an hourly rate.</p>`,
      },
    ],
    related: ["hours", "clock-out-form"],
  },

  // ─── Communication ────────────────────────────────────────────────────────
  {
    id: "announcements",
    slug: "announcements",
    category: "communication",
    title: "Sending an announcement to your team",
    description: "Send a message to everyone or to certain departments, functions or locations, optionally with a meeting date.",
    path: ["Communication", "Announcements"],
    sections: [
      {
        heading: "Sending an announcement",
        html: `<ol>
<li>Go to <span class="ui">Communication → Announcements</span>.</li>
<li>Enter a <span class="ui">Title</span> and <span class="ui">Message</span>.</li>
<li>Choose the <span class="ui">Recipients</span>: <span class="ui">All employees</span>, or a selection of departments, functions or locations.</li>
<li>If it's about a meeting, add a <span class="ui">Meeting date (optional)</span>.</li>
<li>Click <span class="ui">Send announcement</span>.</li>
</ol>
<p>Recipients get a notification. Earlier messages are under <span class="ui">Sent announcements</span>.</p>`,
      },
    ],
    related: ["chat-logbook", "notifications"],
  },
  {
    id: "chat-logbook",
    slug: "chat-and-logbook",
    category: "communication",
    title: "Team chat and logbook",
    description: "Chat with the whole team or one department, and keep daily handover notes with other admins.",
    path: ["Communication", "Chat · Logbook"],
    sections: [
      {
        heading: "Chat",
        html: `<p>Under <span class="ui">Communication → Chat</span> you send a message to the whole team or to one department. Employees find the chat under <span class="ui">More → Chat</span>. If you don't use chat, switch off <span class="ui">Team chat</span> under <span class="ui">Settings → Advanced options</span>.</p>`,
      },
      {
        heading: "Logbook",
        html: `<p>The <span class="ui">Logbook</span> holds handover notes between admins, per day. For example: "kitchen fridge is making a noise, engineer comes Tuesday". Pick a day, write a note and click <span class="ui">Add entry</span>. The search bar searches all notes. Employees don't see the logbook.</p>`,
      },
    ],
    related: ["announcements", "checklists"],
  },
  {
    id: "checklists",
    slug: "checklists",
    category: "communication",
    title: "Opening and closing checklists",
    description: "Create checklists for the start or end of a shift, assign one-off task lists and see what was ticked off.",
    path: ["Overview", "Checklists"],
    sections: [
      {
        heading: "Creating a checklist",
        html: `<ol>
<li>Go to <span class="ui">Overview → Checklists</span> and click <span class="ui">Manage checklists</span>.</li>
<li>Click <span class="ui">New</span>, enter a <span class="ui">Checklist name</span> and optionally a description, and click <span class="ui">Create checklist</span>.</li>
<li>Choose the <span class="ui">Timing</span>: <span class="ui">Start of shift</span>, <span class="ui">During shift</span>, <span class="ui">End of shift</span> or <span class="ui">Any time</span>.</li>
<li>Add tasks. The arrow next to a task lets you add an instruction for employees.</li>
</ol>`,
      },
      {
        heading: "One-off tasks",
        html: `<p>For jobs that need doing once, create a task list under <span class="ui">One-off tasks</span>. Assign it to someone or leave it <span class="ui">Unassigned</span> so everyone sees it, and optionally set a deadline.</p>`,
      },
      {
        heading: "Seeing what was done",
        html: `<p>The overview shows every submitted checklist per week: who filled it in and how many tasks were done. You can add an <span class="ui">Admin note</span>. <span class="ui">Per-checklist results</span> shows the history of a single list.</p>`,
      },
    ],
    related: ["employee-checklists", "chat-logbook"],
  },

  // ─── Settings & subscription ──────────────────────────────────────────────
  {
    id: "notifications",
    slug: "notifications",
    category: "account",
    title: "Setting up notifications and reminders",
    description: "Switch on push notifications for yourself, and decide which reminders your team gets about shifts and availability.",
    path: ["Admin", "Settings", "Notifications"],
    sections: [
      {
        heading: "Notifications for you",
        html: `<p>On the device where you want notifications, go to <span class="ui">Settings → Notifications</span> and switch on <span class="ui">Enable push notifications</span>. On an iPhone you first need to add the app to your home screen. <span class="ui">Shift claims & swap requests</span> tells you right away when someone claims a shift or wants to swap.</p>`,
      },
      {
        heading: "Reminders for your team",
        html: `<ul>
<li><span class="ui">Shift reminder</span>: a daily reminder of that day's shift, at a time you choose.</li>
<li><span class="ui">Availability reminder</span>: a reminder to fill in availability (under Advanced options).</li>
</ul>
<p>Employees also get a notification for a new schedule, a changed shift, swap requests and vacation. They choose which notifications they want under <span class="ui">More → Settings</span>.</p>`,
      },
    ],
    related: ["settings", "install-app"],
  },
  {
    id: "billing",
    slug: "billing",
    category: "account",
    title: "Your subscription: paying and cancelling",
    description: "Choose a plan after the free month, pay with iDEAL and cancel whenever you like.",
    path: ["Admin", "Billing"],
    sections: [
      {
        heading: "Paying",
        html: `<p>The first month is free and nothing is charged automatically. To continue, go to <span class="ui">Admin → Billing</span>, choose Starter, Pro or Business under <span class="ui">Choose your plan</span> and click <span class="ui">Pay</span>.</p>
<p>You pay the first month, for example with iDEAL. After that the amount is charged automatically every month. If you pay during the trial, the paid month only starts when the trial ends. You'll receive the invoice by email.</p>`,
      },
      {
        heading: "Cancelling",
        html: `<p>Click <span class="ui">Cancel subscription</span>. You can keep using Gedekt until the end of the paid period. After that you can still view everything, but not change anything.</p>`,
      },
      {
        heading: "A different plan",
        html: `<p>Want to switch to another plan? Get in touch through <span class="ui">Admin → Support</span> and we'll sort it out. What's in each plan is on the <a href="/en/pricing">pricing page</a>.</p>`,
      },
    ],
    related: ["support"],
  },
  {
    id: "support",
    slug: "help-and-support",
    category: "account",
    title: "Getting help, reporting a bug or suggesting an idea",
    description: "Where to go when you can't find something, something doesn't work or you're missing a feature.",
    path: ["Admin", "Support"],
    sections: [
      {
        heading: "Search first",
        html: `<p>Most questions are answered in this manual. Search for what you want to do, such as "approve swap" or "kiosk". You can do that at the top of the <a href="/en/manual">manual</a>, or in the app at the top of <span class="ui">Admin → Support</span>.</p>`,
      },
      {
        heading: "Asking a question",
        html: `<p>Not found it? Under <span class="ui">Didn't find your answer?</span>, choose <span class="ui">Question</span> and write what you'd like to know. If the search found nothing, <span class="ui">Ask this question</span> fills in your search words for you. You'll get the answer by email.</p>`,
      },
      {
        heading: "Reporting a bug or requesting a feature",
        html: `<p>In the same place, choose <span class="ui">Bug report</span> or <span class="ui">Feature request</span>. For a bug, describe what you did, what happened and what you expected. You get a ticket number. We read every request ourselves, so you help decide what we build next.</p>
<p>Prefer email or a call? See the <a href="/en/contact">contact page</a>.</p>`,
      },
    ],
    related: ["setup", "billing"],
  },

  // ─── For employees ────────────────────────────────────────────────────────
  {
    id: "install-app",
    slug: "install-app",
    category: "employee",
    title: "Installing the app and switching on notifications",
    description: "Activate your account, add Gedekt to your home screen and choose which notifications you get.",
    sections: [
      {
        heading: "Activating your account",
        html: `<p>You'll get an email from Gedekt. Click the link and choose a password. If your manager gave you a temporary password, you pick your own the first time you log in.</p>`,
      },
      {
        heading: "Adding it to your home screen",
        html: `<p>Gedekt works as an app without an app store:</p>
<ul>
<li><strong>iPhone</strong>: open app.gedekt.com in Safari, tap the share icon and choose <em>Add to Home Screen</em>.</li>
<li><strong>Android</strong>: open app.gedekt.com in Chrome, tap the menu (three dots) and choose <em>Install app</em> or <em>Add to Home screen</em>.</li>
</ul>`,
      },
      {
        heading: "Switching on notifications",
        html: `<p>Go to <span class="ui">More → Settings</span> and switch on <span class="ui">Push notifications</span>. Under <span class="ui">Notification preferences</span>, choose what you want to hear about: schedule changes, swap requests, vacation, reminders and team chat.</p>
<p>Not getting notifications on your iPhone? Add the app to your home screen first, and check that notifications for Gedekt are on in your phone's settings.</p>
<p>That's also where you choose the <span class="ui">Language</span> and <span class="ui">Dark mode</span>.</p>`,
      },
    ],
    related: ["give-availability", "view-schedule"],
  },
  {
    id: "give-availability",
    slug: "give-availability",
    category: "employee",
    title: "Entering your availability",
    description: "Set your regular availability, change a single week, and add a preferred day or a note.",
    path: ["Available"],
    sections: [
      {
        heading: "Your standard week",
        html: `<p>Tap <span class="ui">Available</span> at the bottom. On the <span class="ui">Default availability</span> tab you set when you can normally work. Depending on your venue, you enter a start and end time per day, or tick the shifts you can work. This applies every week until you change it.</p>
<p>Use <span class="ui">Mark as preferred</span> on a day you like to work, optionally pick a <span class="ui">Preferred shift</span>, and add a note.</p>`,
      },
      {
        heading: "One week different",
        html: `<p>Can you work differently one week, for example because of an appointment? Go to the <span class="ui">Week override</span> tab, choose the week and change just those days. Your standard week stays as it is.</p>`,
      },
      {
        heading: "\"This week is locked\"",
        html: `<p>When your manager is already working on the schedule, you can't change those weeks any more. Need to change something anyway? Contact your manager. The earlier you fill in your availability, the better the schedule can take it into account.</p>`,
      },
    ],
    related: ["view-schedule", "request-leave"],
  },
  {
    id: "view-schedule",
    slug: "view-schedule",
    category: "employee",
    title: "Viewing your schedule and adding it to your calendar",
    description: "See your shifts per week or month, read briefings, and put your schedule in Google Calendar or Apple Calendar automatically.",
    path: ["Schedule"],
    sections: [
      {
        heading: "Your schedule",
        html: `<p><span class="ui">Today</span> shows your upcoming shifts. Under <span class="ui">Schedule</span> you see your shifts per week or per month. You only see published shifts. If a shift has a briefing, you can open it.</p>`,
      },
      {
        heading: "In your own calendar",
        html: `<p>Go to <span class="ui">More → Settings</span> and under <span class="ui">Subscribe to calendar</span> choose:</p>
<ul>
<li><strong>iPhone</strong>: tap <span class="ui">Open in Calendar</span>.</li>
<li><strong>Android or Google Calendar</strong>: tap <span class="ui">Copy calendar link</span> and add the link in Google Calendar (Other calendars → From URL).</li>
</ul>
<p>Your shifts then stay up to date by themselves.</p>`,
      },
    ],
    related: ["swap-shift", "give-availability"],
  },
  {
    id: "swap-shift",
    slug: "swap-shift",
    category: "employee",
    title: "Swapping a shift or giving it to a colleague",
    description: "Swap, hand off or offer a shift you can't work to the whole team.",
    path: ["More", "Shifts"],
    sections: [
      {
        heading: "Offering a shift",
        html: `<ol>
<li>Go to <span class="ui">More → Shifts</span> and tap the shift.</li>
<li>Choose how:
<ul>
<li><span class="ui">Open swap</span>: anyone can respond with a shift in exchange.</li>
<li><span class="ui">Open handoff</span>: anyone can take the shift.</li>
<li><span class="ui">Give to colleague</span>: straight to one person.</li>
<li><span class="ui">Swap with colleague</span>: pick a colleague and one of their shifts.</li>
</ul></li>
<li>Optionally add a note and tap <span class="ui">Confirm</span>.</li>
</ol>`,
      },
      {
        heading: "What happens next",
        html: `<p>When a colleague accepts, the request goes to your manager, unless your venue approves these automatically. Until then the shift stays yours. You'll get a notification once it's settled.</p>
<p>All your requests are under <span class="ui">More → Requests</span>. There you can <span class="ui">Withdraw</span> a request, and <span class="ui">Accept</span> or decline requests from colleagues.</p>`,
      },
    ],
    related: ["claim-shift", "report-sick"],
  },
  {
    id: "claim-shift",
    slug: "claim-open-shift",
    category: "employee",
    title: "Picking up an open shift",
    description: "Work extra by claiming an open shift or taking over a colleague's shift.",
    path: ["More", "Shifts"],
    sections: [
      {
        heading: "Open shifts",
        html: `<p>Open shifts are listed under <span class="ui">More → Shifts</span>. Tap <span class="ui">Claim</span>. If you get a warning, for example because you weren't available that day, read it first. You can then still choose <span class="ui">Claim anyway</span>.</p>`,
      },
      {
        heading: "Colleagues' shifts",
        html: `<p>Under <span class="ui">Offered by colleagues</span>, tap <span class="ui">Take over</span>. Under <span class="ui">Open swap offers</span>, tap <span class="ui">Respond</span> and pick one of your own shifts to swap.</p>
<p>Sometimes the shift is yours straight away, sometimes your manager approves it first. Either way you'll get a notification.</p>`,
      },
    ],
    related: ["swap-shift", "view-schedule"],
  },
  {
    id: "report-sick",
    slug: "report-sick",
    category: "employee",
    title: "Reporting sick",
    description: "Report sick for a shift, so your manager knows right away and a colleague can take it over.",
    path: ["More", "Shifts"],
    sections: [
      {
        heading: "How to report sick",
        html: `<ol>
<li>Go to <span class="ui">More → Shifts</span> and tap the shift.</li>
<li>Choose <span class="ui">Report sick</span>.</li>
<li>Optionally write a note for your manager and confirm.</li>
</ol>
<p>Your manager gets a notification right away and the shift is released, so a colleague can take it.</p>
<p class="tip">Does your venue have its own rules for calling in sick, like also phoning in? Follow those too.</p>`,
      },
    ],
    related: ["swap-shift", "request-leave"],
  },
  {
    id: "request-leave",
    slug: "request-vacation",
    category: "employee",
    title: "Requesting vacation",
    description: "Ask for time off in the app, follow the status and see how many vacation days you have left.",
    path: ["More", "Vacation"],
    sections: [
      {
        heading: "Making a request",
        html: `<ol>
<li>Go to <span class="ui">More → Vacation</span> and tap <span class="ui">Request vacation</span>.</li>
<li>Choose <span class="ui">From</span> and <span class="ui">To</span> and optionally add a reason.</li>
<li>Send the request.</li>
</ol>
<p>You'll get a notification when your manager approves or denies it. You can cancel a request that's still pending. If your venue tracks vacation days, you'll see how many you have left.</p>`,
      },
    ],
    related: ["give-availability", "report-sick"],
  },
  {
    id: "clock-in-out",
    slug: "clock-in-out",
    category: "employee",
    title: "Clocking in and out",
    description: "Clock in on the kiosk or your phone, and what to do if you forgot.",
    sections: [
      {
        heading: "On the kiosk",
        html: `<p>Find or tap your name on the tablet and choose <span class="ui">Clock In</span>. At the end of your shift, do the same and choose <span class="ui">Clock Out</span>. If the screen asks something, such as your break or whether you had a staff meal, fill it in.</p>`,
      },
      {
        heading: "On your phone",
        html: `<p>If your venue has it switched on, you'll see <span class="ui">Clock</span> at the bottom. Tap clock in when you start and clock out when you're done. Clock-in times are rounded up to the quarter hour, clock-out times down.</p>`,
      },
      {
        heading: "Forgot to clock?",
        html: `<p>Request a correction. See <a href="/en/manual/hours-and-corrections">Viewing your hours and requesting a correction</a>.</p>`,
      },
    ],
    related: ["hours-corrections", "view-schedule"],
  },
  {
    id: "hours-corrections",
    slug: "hours-and-corrections",
    category: "employee",
    title: "Viewing your hours and requesting a correction",
    description: "See your hours worked per week and request a correction if you forgot to clock in or out.",
    path: ["More", "Hours"],
    sections: [
      {
        heading: "Your hours",
        html: `<p>Under <span class="ui">More → Hours</span> you see your shifts per week with the hours you <span class="ui">Worked</span>, what was <span class="ui">Scheduled</span> and the <span class="ui">Variance</span>.</p>`,
      },
      {
        heading: "Requesting a correction",
        html: `<p>Something not right, for example because you forgot to clock out? Tap <span class="ui">Request correction</span> on that shift, enter the right times and answer any questions about breaks or meals. Your manager approves the correction. You see its status on the shift.</p>`,
      },
    ],
    related: ["clock-in-out"],
  },
  {
    id: "employee-checklists",
    slug: "checklist",
    category: "employee",
    title: "Ticking off a checklist",
    description: "Tick off opening or closing tasks and submit the checklist.",
    path: ["Checklist"],
    sections: [
      {
        heading: "How it works",
        html: `<p>Tap <span class="ui">Checklist</span> at the bottom (or find it under <span class="ui">More</span> if your venue uses phone clocking). Tap <span class="ui">Start</span> on a checklist, tick off the tasks as you work and optionally add a note. Then tap <span class="ui">Submit checklist</span>. Your manager sees what was done.</p>
<p>One-off tasks assigned to you are listed there too, with a deadline if there is one.</p>`,
      },
    ],
    related: ["clock-in-out"],
  },
];

export const enManual: ManualArticle[] = articles.map((a) => ({ ...a, lang: "en" }));

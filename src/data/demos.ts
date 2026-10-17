// Demo pages under /hoe-het-werkt/<slug> and /en/how-it-works/<slug>.
// Each page shows one or more clips from public/videos (see scripts/demo-videos).

type Text = { nl: string; en: string };

export interface Demo {
  slug: Text;
  /** Clip names in public/videos (<name>-<lang>.mp4). Phone clips are shown side by side. */
  clips: { name: string; caption?: Text }[];
  device: "desktop" | "phone";
  url?: Text;
  title: Text;
  menuLabel: Text;
  lede: Text;
  steps: Text[];
  seconds: number;
}

export const demos: Demo[] = [
  {
    slug: { nl: "rooster-maken", en: "creating-a-schedule" },
    clips: [{ name: "schedule" }],
    device: "desktop",
    url: { nl: "app.gedekt.com/rooster", en: "app.gedekt.com/schedule" },
    menuLabel: { nl: "Rooster maken", en: "Creating a schedule" },
    title: { nl: "Een volledig rooster in drie klikken.", en: "A complete schedule in three clicks." },
    lede: {
      nl: "Vaste krachten staan er al op. De roostermotor vult de rest in op basis van beschikbaarheid, functie en contracturen. Daarna publiceer je — en je team krijgt direct een melding.",
      en: "Your regulars are already on it. The scheduling engine fills the rest based on availability, function and contract hours. Then you publish — and your team is notified right away.",
    },
    steps: [
      { nl: "Vaste toewijzingen toepassen", en: "Apply fixed assignments" },
      { nl: "Genereren: alle 59 diensten gevuld", en: "Generate: all 59 shifts filled" },
      { nl: "Publiceren naar het hele team", en: "Publish to the whole team" },
    ],
    seconds: 30,
  },
  {
    slug: { nl: "afdelingen-en-functies", en: "departments-and-functions" },
    clips: [{ name: "departments" }],
    device: "desktop",
    url: { nl: "app.gedekt.com/afdelingen", en: "app.gedekt.com/departments" },
    menuLabel: { nl: "Afdelingen & functies", en: "Departments & functions" },
    title: { nl: "Je bedrijf ingericht in twintig seconden.", en: "Your business set up in twenty seconds." },
    lede: {
      nl: "Maak een afdeling aan en geef haar functies. Zo weet de planner precies wie welke dienst mag draaien.",
      en: "Create a department and give it functions. The planner then knows exactly who can work which shift.",
    },
    steps: [
      { nl: "Afdeling toevoegen", en: "Add a department" },
      { nl: "Functies toevoegen", en: "Add functions" },
      { nl: "Klaar — direct te gebruiken in het rooster", en: "Done — ready to use in the schedule" },
    ],
    seconds: 21,
  },
  {
    slug: { nl: "medewerker-toevoegen", en: "adding-an-employee" },
    clips: [{ name: "employee" }],
    device: "desktop",
    url: { nl: "app.gedekt.com/medewerkers", en: "app.gedekt.com/employees" },
    menuLabel: { nl: "Medewerker toevoegen", en: "Adding an employee" },
    title: { nl: "Een nieuwe collega in een halve minuut.", en: "A new colleague in half a minute." },
    lede: {
      nl: "Vul de gegevens in, kies afdeling en functie, en stel contract en uurloon in. Je medewerker krijgt meteen een uitnodiging voor de app.",
      en: "Fill in the details, pick a department and function, and set contract and hourly rate. Your employee gets an invite to the app straight away.",
    },
    steps: [
      { nl: "Naam, e-mail en telefoon", en: "Name, email and phone" },
      { nl: "Dagen per week en uurloon", en: "Days per week and hourly rate" },
      { nl: "Afdeling en functie kiezen", en: "Pick department and function" },
    ],
    seconds: 33,
  },
  {
    slug: { nl: "vaste-diensten", en: "fixed-shifts" },
    clips: [{ name: "shifts" }],
    device: "desktop",
    url: { nl: "app.gedekt.com/vaste-diensten", en: "app.gedekt.com/fixed-shifts" },
    menuLabel: { nl: "Diensten & vaste diensten", en: "Shifts & fixed shifts" },
    title: { nl: "Eén keer instellen. Elke week gebruiken.", en: "Set it up once. Use it every week." },
    lede: {
      nl: "Diensten hebben vaste tijden en een minimale functie. Sleep je vaste krachten in het weektemplate — geschikte plekken lichten op terwijl je sleept.",
      en: "Shifts have set times and a minimum function. Drag your regulars into the weekly template — eligible slots light up as you drag.",
    },
    steps: [
      { nl: "Diensten per afdeling bekijken", en: "Review shifts per department" },
      { nl: "Team tonen in het weektemplate", en: "Show the team in the weekly template" },
      { nl: "Slepen en neerzetten — automatisch opgeslagen", en: "Drag and drop — saved automatically" },
    ],
    seconds: 27,
  },
  {
    slug: { nl: "claims-en-ruilverzoeken", en: "claims-and-swaps" },
    clips: [{ name: "requests" }],
    device: "desktop",
    url: { nl: "app.gedekt.com/ruilverzoeken", en: "app.gedekt.com/swap-requests" },
    menuLabel: { nl: "Claims & ruilverzoeken", en: "Claims & swaps" },
    title: { nl: "Goedkeuren met één klik.", en: "Approve with one click." },
    lede: {
      nl: "Medewerkers claimen open diensten en ruilen onderling. Jij ziet beide kanten, krijgt een waarschuwing als een functie niet past, en keurt goed.",
      en: "Staff claim open shifts and swap with each other. You see both sides, get a warning when a function doesn't match, and approve.",
    },
    steps: [
      { nl: "Openstaande claim goedkeuren", en: "Approve a pending claim" },
      { nl: "Opmerking toevoegen bij een ruil", en: "Add a note to a swap" },
      { nl: "Rooster wordt automatisch bijgewerkt", en: "The schedule updates automatically" },
    ],
    seconds: 17,
  },
  {
    slug: { nl: "uren-en-loonkosten", en: "hours-and-labour-cost" },
    clips: [{ name: "hours" }],
    device: "desktop",
    url: { nl: "app.gedekt.com/rapporten", en: "app.gedekt.com/reports" },
    menuLabel: { nl: "Uren & loonkosten", en: "Hours & labour cost" },
    title: { nl: "Elke maand weten wat je personeel kost.", en: "Know what your staff cost, every month." },
    lede: {
      nl: "Gewerkte uren, pauzes, loonkosten en no-shows per medewerker in één overzicht. Exporteer naar Excel, PDF of je salarisadministratie.",
      en: "Hours worked, breaks, labour cost and no-shows per employee in one overview. Export to Excel, PDF or your payroll.",
    },
    steps: [
      { nl: "Totalen voor de maand", en: "Totals for the month" },
      { nl: "Uren en kosten per medewerker", en: "Hours and cost per employee" },
      { nl: "Exporteren voor de administratie", en: "Export for your accountant" },
    ],
    seconds: 23,
  },
  {
    slug: { nl: "medewerkers-app", en: "staff-app" },
    clips: [
      { name: "staff-schedule", caption: { nl: "Rooster bekijken", en: "Check the schedule" } },
      { name: "staff-availability", caption: { nl: "Beschikbaarheid doorgeven", en: "Share availability" } },
      { name: "staff-requests", caption: { nl: "Dienst ruilen", en: "Swap a shift" } },
    ],
    device: "phone",
    menuLabel: { nl: "De app voor je team", en: "The app for your team" },
    title: { nl: "Je team regelt het zelf. Op hun telefoon.", en: "Your team handles it. On their phone." },
    lede: {
      nl: "Geen uitleg nodig: medewerkers zien hun diensten, geven door wanneer ze kunnen en ruilen met een collega — zonder appjes naar de manager.",
      en: "No training needed: staff see their shifts, share when they can work and swap with a colleague — without texting the manager.",
    },
    steps: [
      { nl: "Aankomende diensten en het teamrooster", en: "Upcoming shifts and the team schedule" },
      { nl: "Eén tik: kan. Twee tikken: liever.", en: "One tap: can. Two taps: prefer." },
      { nl: "Ruil voorstellen in drie tikken", en: "Propose a swap in three taps" },
    ],
    seconds: 26,
  },
];

export const demoHref = (demo: Demo, lang: "nl" | "en") =>
  lang === "nl" ? `/hoe-het-werkt/${demo.slug.nl}` : `/en/how-it-works/${demo.slug.en}`;

export const demoBySlug = (slug: string, lang: "nl" | "en") => demos.find((d) => d.slug[lang] === slug);

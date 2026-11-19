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
    title: { nl: "Een volledig rooster in een paar klikken.", en: "A complete schedule in a few clicks." },
    lede: {
      nl: "Vaste krachten staan er al op. Klik op iemand en je ziet in het groen welke diensten diegene kan doen, of sleep een collega erop. De roostermotor vult de rest op basis van beschikbaarheid, functie en contracturen. Pas je daarna iets aan, dan ziet je team het pas als je publiceert, en krijgen alleen de mensen die het raakt een melding.",
      en: "Your regulars are already on it. Click someone to see in green which shifts they can take, or drag a colleague onto one. The scheduling engine fills the rest based on availability, function and contract hours. Change something afterwards and your team only sees it when you publish, and only the people it affects get a message.",
    },
    steps: [
      { nl: "Klik op iemand: de diensten die diegene kan doen kleuren groen", en: "Click someone: the shifts they can take turn green" },
      { nl: "Sleep een collega op een dienst, of laat Genereren de rest vullen", en: "Drag a colleague onto a shift, or let Generate fill the rest" },
      { nl: "Publiceren, en later alleen de wijzigingen publiceren", en: "Publish, and later publish just the changes" },
    ],
    seconds: 42,
  },
  {
    slug: { nl: "vandaag", en: "today" },
    clips: [{ name: "dashboard" }],
    device: "desktop",
    url: { nl: "app.gedekt.com/vandaag", en: "app.gedekt.com/today" },
    menuLabel: { nl: "Vandaag in één oogopslag", en: "Today at a glance" },
    title: { nl: "In tien seconden weet je of vandaag loopt.", en: "Know in ten seconds whether today is on track." },
    lede: {
      nl: "Wie er nu werkt, wie nog komt en wat er open staat. Een tijdlijn met wie is ingeklokt, de bezetting van deze week per dag, en wat er op je wacht.",
      en: "Who is working now, who is still to come and what is open. A timeline of who has clocked in, this week's cover per day, and what is waiting for you.",
    },
    steps: [
      { nl: "Nu aan het werk, komt nog, open vandaag", en: "Working now, still to come, open today" },
      { nl: "De tijdlijn: ingeklokt, bezig, klaar", en: "The timeline: clocked in, running, done" },
      { nl: "Deze week: gedekte dagen en open diensten, en wat op je wacht", en: "This week: covered days and open shifts, and what is waiting for you" },
    ],
    seconds: 28,
  },
  {
    slug: { nl: "afdelingen-en-functies", en: "departments-and-functions" },
    clips: [{ name: "departments" }],
    device: "desktop",
    url: { nl: "app.gedekt.com/afdelingen", en: "app.gedekt.com/departments" },
    menuLabel: { nl: "Afdelingen & functies", en: "Departments & functions" },
    title: { nl: "Je zaak zoals hij echt werkt.", en: "Your business the way it really works." },
    lede: {
      nl: "Afdelingen met een eigen kleur, functies van hoog naar laag en wie welke functie mag invullen. Geef een functie \"Mag roosteren\" en je chef maakt zelf het rooster voor de keuken. Locaties erbij als je op meer plekken werkt.",
      en: "Departments with their own colour, functions from senior to junior and who may fill which function. Give a function \"Can schedule\" and your head chef makes the kitchen schedule. Add locations if you work in more than one place.",
    },
    steps: [
      { nl: "Afdelingen, kleuren en functies", en: "Departments, colours and functions" },
      { nl: "\"Mag roosteren\": het rooster maken overlaten aan je chef", en: "\"Can schedule\": leave the schedule to your head chef" },
      { nl: "Locaties, zoals een terras", en: "Locations, such as a terrace" },
    ],
    seconds: 23,
  },
  {
    slug: { nl: "medewerkers", en: "employees" },
    clips: [{ name: "employee" }],
    device: "desktop",
    url: { nl: "app.gedekt.com/medewerkers", en: "app.gedekt.com/employees" },
    menuLabel: { nl: "Je team", en: "Your team" },
    title: { nl: "Je hele team in één overzicht.", en: "Your whole team in one overview." },
    lede: {
      nl: "Per afdeling zie je ieders functie, contracturen en hoeveel uur ze deze week staan. Klik op iemand voor de contactgegevens, wanneer diegene meestal kan en de diensten van deze week.",
      en: "Per department you see everyone's function, contract hours and how many hours they have this week. Click someone for their contact details, when they can usually work and this week's shifts.",
    },
    steps: [
      { nl: "Per afdeling: functie, contract en uren deze week", en: "Per department: function, contract and hours this week" },
      { nl: "Een profiel met contactgegevens", en: "A profile with contact details" },
      { nl: "Wanneer iemand meestal kan, en de diensten van deze week", en: "When someone can usually work, and this week's shifts" },
    ],
    seconds: 21,
  },
  {
    slug: { nl: "vaste-diensten", en: "fixed-shifts" },
    clips: [{ name: "shifts" }],
    device: "desktop",
    url: { nl: "app.gedekt.com/vaste-diensten", en: "app.gedekt.com/fixed-shifts" },
    menuLabel: { nl: "Diensten & vaste diensten", en: "Shifts & fixed shifts" },
    title: { nl: "Eén keer instellen. Elke week vult zichzelf.", en: "Set it up once. Every week fills itself." },
    lede: {
      nl: "Elke dienst heeft tijden, een minimale functie en de dagen waarop hij draait, bijvoorbeeld geen late dienst op maandag. Markeer een sluitdienst, zet een dag dicht, en sleep een vaste kracht op een dienst met het slotje erop: elke nieuwe week begint zo vanzelf.",
      en: "Every shift has times, a minimum function and the days it runs, for example no late shift on Mondays. Mark a closing shift, close a day, and drag a regular onto a shift with the lock on: every new week starts that way by itself.",
    },
    steps: [
      { nl: "Dagen per dienst (ma–zo) en een sluitdienst", en: "Days per shift (Mon–Sun) and a closing shift" },
      { nl: "Een dag gesloten, met één klik weer open", en: "A day closed, reopened in one click" },
      { nl: "Vaste kracht erop, slotje aan: elke week weer ingepland", en: "A regular on it, lock on: scheduled again every week" },
    ],
    seconds: 25,
  },
  {
    slug: { nl: "claims-en-ruilverzoeken", en: "claims-and-swaps" },
    clips: [{ name: "requests" }],
    device: "desktop",
    url: { nl: "app.gedekt.com/verzoeken", en: "app.gedekt.com/requests" },
    menuLabel: { nl: "Verzoeken", en: "Requests" },
    title: { nl: "Eén inbox in plaats van vier pagina's.", en: "One inbox instead of four pages." },
    lede: {
      nl: "Claims, ruilverzoeken, vakantie en urencorrecties komen op één plek binnen. Filter met één klik, zie meteen of een functie past of iemand over zijn uren gaat, en keur goed, met een opmerking als je wilt.",
      en: "Claims, swaps, leave and hours corrections arrive in one place. Filter in one click, see straight away whether a function fits or someone goes over their hours, and approve, with a note if you like.",
    },
    steps: [
      { nl: "Alles in één inbox, filteren met de knoppen", en: "Everything in one inbox, filter with the buttons" },
      { nl: "Een claim op een open dienst goedkeuren", en: "Approve a claim on an open shift" },
      { nl: "Een ruil goedkeuren met een opmerking", en: "Approve a swap with a note" },
    ],
    seconds: 30,
  },
  {
    slug: { nl: "uren-en-loonkosten", en: "hours-and-labour-cost" },
    clips: [{ name: "hours" }],
    device: "desktop",
    url: { nl: "app.gedekt.com/uren", en: "app.gedekt.com/hours" },
    menuLabel: { nl: "Uren & loonkosten", en: "Hours & labour cost" },
    title: { nl: "Uren die kloppen, en weten wat je personeel kost.", en: "Hours that add up, and knowing what your staff cost." },
    lede: {
      nl: "Per dag gepland naast geklokt: op tijd, te laat of niet gekomen. Klik een dienst open voor de kloktijden en wat iemand bij het uitklokken invulde. Correcties keur je goed in de inbox, en het rapport toont uren en loonkosten per medewerker, met export naar PDF, Excel of je salarisadministratie.",
      en: "Per day, planned next to clocked: on time, late or a no-show. Open a shift for the clock times and what someone filled in when clocking out. Approve corrections in the inbox, and the report shows hours and labour cost per employee, with export to PDF, Excel or your payroll.",
    },
    steps: [
      { nl: "Gepland naast geklokt, per dag", en: "Planned next to clocked, per day" },
      { nl: "Een urencorrectie van een medewerker", en: "An hours correction from an employee" },
      { nl: "Rapport per maand, met export", en: "Monthly report, with export" },
    ],
    seconds: 37,
  },
  {
    slug: { nl: "medewerkers-app", en: "staff-app" },
    clips: [
      { name: "staff-schedule", caption: { nl: "Rooster bekijken", en: "Check the schedule" } },
      { name: "staff-availability", caption: { nl: "Beschikbaarheid doorgeven", en: "Share availability" } },
      { name: "staff-requests", caption: { nl: "Claimen, ruilen & vrij vragen", en: "Claim, swap & ask for time off" } },
      { name: "staff-clock", caption: { nl: "In- en uitklokken", en: "Clock in and out" } },
    ],
    device: "phone",
    menuLabel: { nl: "De app voor je team", en: "The app for your team" },
    title: { nl: "Je team regelt het zelf. Op hun telefoon.", en: "Your team handles it. On their phone." },
    lede: {
      nl: "Geen uitleg nodig: medewerkers zien hun diensten en de briefing, zetten hun rooster in hun eigen agenda, geven door wanneer ze kunnen, pakken open diensten, ruilen met een collega, vragen vrij en klokken in en uit — zonder appjes naar de manager.",
      en: "No training needed: staff see their shifts and the briefing, put their schedule in their own calendar, share when they can work, pick up open shifts, swap with a colleague, ask for time off and clock in and out — without texting the manager.",
    },
    steps: [
      { nl: "Je diensten met de briefing, wie er werkt en open diensten", en: "Your shifts with the briefing, who's working and open shifts" },
      { nl: "Eén tik: kan. Twee tikken: liever. En maximaal aantal dagen.", en: "One tap: can. Two taps: prefer. And a maximum number of days." },
      { nl: "Open dienst aanvragen, ruilen met een collega of vrij vragen", en: "Request an open shift, swap with a colleague or ask for time off" },
      { nl: "Inklokken, een correctie vragen en uitklokken met pauze en maaltijd", en: "Clock in, ask for a correction, and clock out with break and meals" },
    ],
    seconds: 30,
  },
];

export const demoHref = (demo: Demo, lang: "nl" | "en") =>
  lang === "nl" ? `/hoe-het-werkt/${demo.slug.nl}` : `/en/how-it-works/${demo.slug.en}`;

export const demoBySlug = (slug: string, lang: "nl" | "en") => demos.find((d) => d.slug[lang] === slug);

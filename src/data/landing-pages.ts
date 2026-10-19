// Dutch keyword landing pages at the site root (/personeelsplanning, /horecaplanning, ...).
// Each page targets one search term with its own angle and copy — don't turn these into
// copies of /hoe-het-werkt, Google treats duplicate pages as doorway pages.
// Rendered by src/pages/[slug].astro (shared with the guides, so slugs must not clash); linked from the footer. Only claim features that exist in the app.

export interface LandingSection {
  title: string;
  body: string;
  bullets: string[];
  /** Demo slug (NL) from demos.ts; shows its first clip next to the section. */
  demo?: string;
  /** Specific clip name for phone demos. */
  clip?: string;
}

export interface LandingPage {
  slug: string;
  /** Short name for footer links and breadcrumbs. */
  label: string;
  title: string;
  description: string;
  eyebrow: string;
  h1: string;
  intro: string;
  sections: LandingSection[];
  faq: { q: string; a: string }[];
  /** Guide ids (see guide-content/nl.ts) to link at the bottom. */
  guides: string[];
}

export const landingPages: LandingPage[] = [
  {
    slug: "personeelsplanning",
    label: "Personeelsplanning",
    title: "Personeelsplanning app voor de horeca",
    description:
      "Personeelsplanning voor horecazaken: beschikbaarheid, rooster, uren en loonkosten in één app. Gedekt plant automatisch in op wie kan en wie past. Eerste maand gratis.",
    eyebrow: "Personeelsplanning",
    h1: "Personeelsplanning voor de horeca, van beschikbaarheid tot loonkosten.",
    intro:
      "Personeelsplanning is meer dan een rooster invullen. Je wil weten wie wanneer kan, wie welke functie aankan, hoeveel uur iedereen draait en wat dat kost. Gedekt brengt dat samen in één app, voor jou en je team.",
    sections: [
      {
        title: "Weten wie er kan, zonder appjes na te lopen",
        body: "Medewerkers geven hun beschikbaarheid door in de app: met een begin- en eindtijd per dag of door diensten aan te vinken. Een vaste week loopt automatisch door; uitzonderingen zet je er los bij.",
        bullets: [
          "Automatische herinnering om beschikbaarheid in te vullen, op de dag en tijd die jij kiest",
          "Medewerkers geven ook aan wanneer ze liever werken",
          "Goedgekeurd verlof blokkeert iemand automatisch in het rooster",
        ],
        demo: "medewerkers-app",
        clip: "staff-availability",
      },
      {
        title: "Een rooster dat rekening houdt met je hele team",
        body: "De roostermotor vult diensten in op basis van beschikbaarheid, afdeling, functie en contracturen. Contractmedewerkers komen eerst aan de beurt, en wie achterloopt in uren gaat voor.",
        bullets: [
          "Minimale rusttijd tussen diensten, zelf in te stellen",
          "Je ziet per dienst wie er beschikbaar en geschikt is",
          "Pas alles handmatig aan voordat je publiceert",
        ],
        demo: "rooster-maken",
      },
      {
        title: "Uren en loonkosten in beeld",
        body: "Medewerkers klokken in en uit via de app of een klokpaal. Je ziet per week en per maand hoeveel uur er gewerkt is en wat je personeel kost.",
        bullets: [
          "Correctieverzoeken voor vergeten in- of uitklokken",
          "Signalering van te veel of te weinig uren ten opzichte van het contract",
          "Export voor je salarisadministratie",
        ],
        demo: "uren-en-loonkosten",
      },
    ],
    faq: [
      {
        q: "Wat kost personeelsplanning met Gedekt?",
        a: "Gedekt begint bij €10 per maand voor teams tot 15 medewerkers, met een vaste prijs in plaats van een bedrag per medewerker. De eerste maand is gratis, zonder betaalgegevens; daarna kun je maandelijks opzeggen.",
      },
      {
        q: "Hebben mijn medewerkers een aparte app nodig?",
        a: "Medewerkers installeren de Gedekt-app op hun telefoon. Daarin zien ze hun rooster, geven ze beschikbaarheid door, ruilen ze diensten en klokken ze in.",
      },
      {
        q: "Kan ik onderdelen uitzetten die ik niet gebruik?",
        a: "Ja. Teamchat, vakantieaanvragen en urenregistratie kun je los uitschakelen. Ze verdwijnen dan uit het menu voor jou en je team.",
      },
    ],
    guides: ["availability", "labour-cost", "hours", "choosing-software"],
  },
  {
    slug: "horecaplanning",
    label: "Horecaplanning",
    title: "Horecaplanning: roosteren voor bar, keuken en bediening",
    description:
      "Horecaplanning met afdelingen, functies, vaste diensten en oproepkrachten. Gedekt is gebouwd voor hoe een Nederlandse horecazaak echt draait. Eerste maand gratis.",
    eyebrow: "Horecaplanning",
    h1: "Horecaplanning die snapt hoe een horecazaak draait.",
    intro:
      "In de horeca wisselt de drukte per dag, werk je met een mix van vaste krachten en oproepkrachten, en kan niet iedereen elke plek invullen. Een algemene planningstool houdt daar geen rekening mee. Gedekt wel.",
    sections: [
      {
        title: "Bar, keuken en bediening, elk met eigen regels",
        body: "Richt afdelingen in met hun eigen functies en diensten. Leg vast wie wiens plek mag overnemen: een barmanager kan een bardienst draaien, een barmedewerker niet automatisch de leiding.",
        bullets: [
          "Eigen diensttypen per afdeling, met andere tijden per dag als dat nodig is",
          "Invulregels per functie, zodat er nooit iemand op een verkeerde plek staat",
          "Optioneel: alleen de eigen afdeling of functie mag open diensten oppakken",
        ],
        demo: "afdelingen-en-functies",
      },
      {
        title: "Vaste diensten voor drukke en rustige dagen",
        body: "Zet je standaardweek één keer neer: meer mensen op vrijdag en zaterdag, een kleinere bezetting op maandag. Vaste krachten zet je er direct op; de rest vult de roostermotor aan.",
        bullets: [
          "Vaste medewerkers per dienst blijven staan bij opnieuw genereren",
          "Medewerkers kunnen beschikbaarheid doorgeven door de vaste diensten aan te vinken",
          "Plan per week, per maand of per kwartaal",
        ],
        demo: "vaste-diensten",
      },
      {
        title: "Oproepkrachten en last-minute gaten",
        body: "Valt er iemand uit, dan zet je de dienst open. Medewerkers die beschikbaar en geschikt zijn kunnen hem claimen, en ruilen regelen ze onderling. Jij keurt goed, of laat dat automatisch gebeuren.",
        bullets: [
          "Goedkeuring per soort verzoek: altijd zelf, automatisch bij dezelfde functie, of altijd automatisch",
          "Pushmelding bij nieuwe roosters, open diensten en wijzigingen",
          "Checklists voor openen en sluiten, af te vinken in de app",
        ],
        demo: "claims-en-ruilverzoeken",
      },
    ],
    faq: [
      {
        q: "Is Gedekt geschikt voor kleine horecazaken?",
        a: "Ja. Gedekt is juist gemaakt voor cafés, restaurants en bars. Je probeert het eerst een maand gratis; daarna kost het Starter-plan €10 per maand voor teams tot 15 medewerkers.",
      },
      {
        q: "Houdt Gedekt rekening met rusttijden?",
        a: "De roostermotor houdt een minimale rusttijd tussen diensten aan, standaard 11 uur. Je stelt dat zelf in. Lees meer over de regels in onze gids over de Arbeidstijdenwet in de horeca.",
      },
      {
        q: "Kan ik meerdere locaties plannen?",
        a: "Ja, met het Enterprise-plan plan je meerdere locaties vanuit één account.",
      },
    ],
    guides: ["restaurant", "cafe-bar", "on-call", "working-time-act"],
  },
  {
    slug: "rooster-planning",
    label: "Roosterplanning",
    title: "Roosterplanning: automatisch je rooster maken",
    description:
      "Roosterplanning zonder Excel: Gedekt maakt in één klik een rooster op basis van beschikbaarheid, functie en contracturen. Publiceren, ruilen en goedkeuren in één app.",
    eyebrow: "Roosterplanning",
    h1: "Roosterplanning in minuten in plaats van uren.",
    intro:
      "Een rooster maken in Excel of op papier kost elke week weer uren: beschikbaarheid verzamelen, puzzelen, controleren en rondsturen. Met Gedekt doe je dat in een paar klikken, en zie je meteen waar het schuurt.",
    sections: [
      {
        title: "Eén klik voor een volledig rooster",
        body: "Vaste krachten staan er al op. De roostermotor vult de rest in op basis van beschikbaarheid, functie en contracturen. Daarna kijk je het na en publiceer je.",
        bullets: [
          "Waarschuwingen bij dubbele boekingen, te korte rusttijd en verkeerde afdeling",
          "Vergrendelde diensten blijven staan als je opnieuw genereert",
          "Automatisch genereren op een vaste dag in de week (Pro)",
        ],
        demo: "rooster-maken",
      },
      {
        title: "Publiceren zonder rond te sturen",
        body: "Zodra je publiceert krijgt je team een pushmelding. Iedereen ziet zijn eigen diensten in de app, en wijzigingen komen direct door.",
        bullets: [
          "Dagelijkse dienstherinnering op een tijd naar keuze",
          "Onbezette diensten automatisch aanbieden aan geschikte medewerkers (Pro)",
          "Geen losse screenshots of groepsappjes meer",
        ],
        demo: "medewerkers-app",
        clip: "staff-schedule",
      },
      {
        title: "Ruilen en wijzigen zonder gedoe",
        body: "Medewerkers vragen een ruil aan bij een collega of geven een dienst weg. Jij ziet alles in één overzicht en keurt met één klik goed.",
        bullets: [
          "Ruilen, overnemen en open diensten claimen vanuit de app",
          "Kies zelf welke verzoeken automatisch worden goedgekeurd",
          "Het rooster werkt direct bij na goedkeuring",
        ],
        demo: "claims-en-ruilverzoeken",
      },
    ],
    faq: [
      {
        q: "Kan ik ook zelf een rooster maken zonder de automatische motor?",
        a: "Ja. Het Starter-plan bevat een volledige roosterbouwer. Automatisch genereren zit in Pro.",
      },
      {
        q: "Hoe lang duurt het voordat ik mijn eerste rooster heb?",
        a: "De meeste zaken hebben binnen 30 minuten hun afdelingen, medewerkers en vaste diensten ingericht en een eerste rooster gemaakt.",
      },
      {
        q: "Ik werk nu in Excel. Waarom overstappen?",
        a: "Excel weet niet wie er beschikbaar is, controleert geen rusttijden en stuurt geen meldingen. In onze gids over roosteren in Excel lees je wanneer een spreadsheet nog volstaat en wanneer niet.",
      },
    ],
    guides: ["schedule", "excel", "swaps", "no-shows"],
  },
];

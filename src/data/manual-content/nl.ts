import type { ManualArticle } from "../manual";

type Entry = Omit<ManualArticle, "lang">;

const articles: Entry[] = [
  // ─── Aan de slag ──────────────────────────────────────────────────────────
  {
    id: "setup",
    slug: "eerste-keer-inrichten",
    category: "start",
    title: "Gedekt de eerste keer inrichten",
    description: "In welke volgorde je afdelingen, diensten, medewerkers en je standaardweek instelt, zodat je eerste rooster meteen klopt.",
    sections: [
      {
        heading: "De volgorde",
        html: `<p>Elke stap bouwt voort op de vorige. Houd deze volgorde aan, dan hoef je niets dubbel te doen:</p>
<ol>
<li><strong>Afdelingen en functies</strong>: bijvoorbeeld Bar, Bediening en Keuken, met functies als Manager en Bartender. Zie <a href="/handleiding/afdelingen-en-functies">Afdelingen en functies instellen</a>.</li>
<li><strong>Locaties</strong>, alleen als je op meer dan één plek werkt (Pro en Business). Zie <a href="/handleiding/locaties">Werken met meerdere locaties</a>.</li>
<li><strong>Diensten</strong>: je diensten met begin- en eindtijd per afdeling. Zie <a href="/handleiding/diensten-instellen">Diensten instellen</a>.</li>
<li><strong>Medewerkers</strong>: koppel iedereen aan een afdeling en functie. Zie <a href="/handleiding/medewerker-toevoegen">Een medewerker toevoegen</a>.</li>
<li><strong>Vaste diensten</strong>: je standaardweek, eventueel met vaste mensen. Zie <a href="/handleiding/vaste-diensten">Je standaardweek vastleggen</a>.</li>
<li><strong>Instellingen</strong>: hoeveel je zelf wilt goedkeuren en hoe medewerkers beschikbaarheid doorgeven. Zie <a href="/handleiding/instellingen-kiezen">De belangrijkste instellingen kiezen</a>.</li>
<li><strong>Je eerste rooster</strong>: maken en publiceren. Zie <a href="/handleiding/rooster-maken">Een weekrooster maken</a>.</li>
</ol>`,
      },
      {
        heading: "De rondleiding",
        html: `<p>De eerste keer dat je inlogt, loopt een rondleiding met je door de belangrijkste schermen. Bij de instellingen stelt hij de keuzes als simpele vragen, zodat de app werkt zoals jouw zaak werkt. Medewerkers krijgen hun eigen, kortere rondleiding.</p>
<p>Wil je een medewerker de rondleiding nog een keer laten zien? Open de medewerker en kies <span class="ui">Rondleiding opnieuw tonen</span>.</p>`,
      },
      {
        heading: "Het dashboard",
        html: `<p>Na het inloggen kom je op het dashboard. Onder <span class="ui">Wacht op jou</span> zie je openstaande claims, ruilverzoeken, vakantieverzoeken, urencorrecties, klokproblemen en ziekmeldingen van de afgelopen 72 uur. Daaronder staat wie er vandaag werkt.</p>
<p>Een getal naast een menu-item betekent ook dat er iets op je wacht.</p>`,
      },
    ],
    related: ["settings", "departments", "add-employee"],
  },
  {
    id: "settings",
    slug: "instellingen-kiezen",
    category: "start",
    title: "De belangrijkste instellingen kiezen",
    description: "Welke onderdelen je aanzet, hoeveel je zelf goedkeurt, hoe medewerkers beschikbaarheid doorgeven en welke herinneringen ze krijgen.",
    path: ["Beheer", "Instellingen"],
    sections: [
      {
        heading: "Functies: welke onderdelen gebruik je?",
        html: `<ul>
<li><span class="ui">Vakantie</span>: vragen medewerkers vakantie aan via de app? Laat dit aan. Uit verdwijnt vakantie uit het menu.</li>
<li><span class="ui">Uren registratie</span>: zet dit aan als je gewerkte uren wilt bijhouden. Je krijgt dan klokken, het urenoverzicht, rapporten, de salarisexport en de klokpaal.</li>
<li><span class="ui">Medewerkers mogen zelf klokken via hun telefoon</span>: handig als je geen tablet bij de ingang hebt. Zie <a href="/handleiding/klokken-met-telefoon">Klokken met de telefoon</a>.</li>
</ul>`,
      },
      {
        heading: "Verzoeken & goedkeuring",
        html: `<p>Kies per soort verzoek hoeveel je zelf wilt zien:</p>
<ul>
<li><span class="ui">Open diensten claimen</span> en <span class="ui">Ruilen en overnemen</span>: kies <span class="ui">Altijd zelf goedkeuren</span>, <span class="ui">Automatisch bij zelfde functie</span> of <span class="ui">Altijd automatisch</span>. "Zelfde functie" betekent: dezelfde afdeling en een functie die de dienst mag vullen. Al het andere komt dan bij jou.</li>
<li><span class="ui">Alleen eigen afdeling/functie mag diensten oppakken</span>: zet dit aan als een kok nooit een bardienst mag oppakken.</li>
<li><span class="ui">Vakantieaanvragen automatisch goedkeuren</span> en <span class="ui">Urencorrecties automatisch goedkeuren</span>.</li>
</ul>`,
      },
      {
        heading: "Beschikbaarheid invullen",
        html: `<p>Werk je met vaste diensten zoals Lunch, Diner en Sluit? Kies <span class="ui">Per dienst</span>, dan vinken medewerkers aan welke diensten ze kunnen. Wisselen je tijden vaak? Kies <span class="ui">Tijdvak</span>, dan vullen ze per dag een begin- en eindtijd in.</p>
<p>Maak je het rooster een paar weken vooruit? Gebruik <span class="ui">Beschikbaarheid vergrendelen</span>. Meer hierover in <a href="/handleiding/beschikbaarheid-beheren">Beschikbaarheid van je team</a>.</p>`,
      },
      {
        heading: "Herinneringen en meldingen",
        html: `<ul>
<li><span class="ui">Dienstherinnering</span>: medewerkers krijgen elke dag een herinnering aan hun dienst van die dag, op de tijd die jij kiest.</li>
<li><span class="ui">Meldingen</span>: zet pushmeldingen aan op elk apparaat waarop je wilt horen dat iemand een dienst claimt of wil ruilen.</li>
</ul>`,
      },
      {
        heading: "Geavanceerde opties",
        html: `<p>De standaardwaarden werken voor de meeste zaken. Hier vind je:</p>
<ul>
<li><span class="ui">Teamchat</span> aan of uit.</li>
<li><span class="ui">Roosterritme</span>: of je per week, maand of kwartaal roostert. Dit bepaalt hoeveel weken één rooster-actie en de herinneringen tegelijk afhandelen.</li>
<li><span class="ui">Roostermotor</span>, <span class="ui">Automatisch rooster</span> en <span class="ui">Automatisch aanbieden</span> (Pro en Business).</li>
<li><span class="ui">Beschikbaarheidsherinnering</span>.</li>
<li><span class="ui">Klokpaal (kiosk)</span>. Zie <a href="/handleiding/klokpaal-instellen">De klokpaal instellen</a>.</li>
</ul>
<p>Onderaan staan ook het <span class="ui">Uitklok-formulier</span>, je <span class="ui">Account</span> (wachtwoord wijzigen) en de <span class="ui">Taal</span> van de app.</p>`,
      },
    ],
    related: ["setup", "swaps-claims", "availability-admin"],
  },

  // ─── Personeel ────────────────────────────────────────────────────────────
  {
    id: "add-employee",
    slug: "medewerker-toevoegen",
    category: "staff",
    title: "Een medewerker toevoegen",
    description: "Een nieuwe medewerker aanmaken, koppelen aan een afdeling en functie, en een uitnodiging voor de app sturen.",
    path: ["Personeel", "Medewerkers", "Medewerker toevoegen"],
    sections: [
      {
        heading: "Stap voor stap",
        html: `<ol>
<li>Ga naar <span class="ui">Personeel → Medewerkers</span> en klik op <span class="ui">Medewerker toevoegen</span>.</li>
<li>Vul <span class="ui">Volledige naam</span>, <span class="ui">Geboortedatum</span>, <span class="ui">E-mail</span> en <span class="ui">Telefoon</span> in. De geboortedatum is nodig voor de regels voor jonge medewerkers.</li>
<li>Kies bij <span class="ui">Bijhouden op</span> of je contract in uren of dagen bijhoudt, en vul <span class="ui">Min. contract uren / week</span> en <span class="ui">Max. dagen / week</span> in.</li>
<li>Vul het <span class="ui">Uurloon (€)</span> in. Dat is nodig voor de loonkosten in het rooster en de rapporten.</li>
<li>Vink bij <span class="ui">Afdelingen</span> aan waar iemand werkt en kies per afdeling een <span class="ui">Functie</span>. Werkt iemand in meer afdelingen, dan kun je per afdeling het aantal <span class="ui">Dagen/week</span> instellen.</li>
<li>Klik op <span class="ui">Medewerker toevoegen</span>.</li>
</ol>`,
      },
      {
        heading: "De uitnodiging voor de app",
        html: `<p>Heb je een e-mailadres ingevuld, dan krijgt de medewerker een e-mail om het account te activeren en een wachtwoord in te stellen.</p>
<p>Kan de e-mail niet worden verstuurd, dan toont het scherm een tijdelijk wachtwoord. Geef dat zelf door. De medewerker kiest bij de eerste keer inloggen een eigen wachtwoord.</p>
<p>Iemand zonder e-mailadres kun je wel inroosteren, maar die heeft dan nog geen account. Later maak je dat aan via <span class="ui">Gebruikersaccount aanmaken</span> op de pagina van de medewerker.</p>`,
      },
      {
        heading: "Rechten meteen meegeven",
        html: `<p>Onder <span class="ui">Individuele rechten</span> kun je iemand laten roosteren, verzoeken laten goedkeuren of collega's laten in- en uitklokken. Zie <a href="/handleiding/rechten-en-rollen">Rechten geven</a>.</p>`,
      },
    ],
    related: ["manage-employee", "departments", "permissions"],
  },
  {
    id: "manage-employee",
    slug: "medewerker-beheren",
    category: "staff",
    title: "Een medewerker aanpassen, deactiveren of verwijderen",
    description: "Gegevens en contract wijzigen, een wachtwoord resetten, een uitnodiging opnieuw sturen of iemand uit dienst halen.",
    path: ["Personeel", "Medewerkers", "(medewerker)"],
    sections: [
      {
        heading: "Gegevens en contract wijzigen",
        html: `<p>Klik in <span class="ui">Personeel → Medewerkers</span> op een naam. Gebruik de zoekbalk of filter op afdeling als je team groot is.</p>
<ul>
<li><span class="ui">Profiel & contract</span>: naam, contact, contracturen, uurloon, <span class="ui">Vakantiedagen per jaar</span> en een <span class="ui">Interne notitie</span> die alleen beheerders zien. Sla op met <span class="ui">Profiel opslaan</span>.</li>
<li><span class="ui">Afdelingen, rang & locaties</span>: afdelingen, functie per afdeling en locaties. Dit blok sla je los op.</li>
</ul>
<p>Lager op de pagina zie je het urenoverzicht en de beschikbaarheid van de medewerker.</p>`,
      },
      {
        heading: "Wachtwoord resetten",
        html: `<p>Klik bovenaan op <span class="ui">Wachtwoord reset</span>. Je krijgt een nieuw tijdelijk wachtwoord te zien. Geef dat door: de medewerker moet het bij de eerste keer inloggen wijzigen.</p>
<p>Heeft iemand zijn account nog niet geactiveerd? Gebruik dan <span class="ui">Activatiemail opnieuw sturen</span>. Met <span class="ui">App-links opnieuw sturen</span> krijgt de medewerker de links naar de app nog eens per e-mail.</p>`,
      },
      {
        heading: "Deactiveren of verwijderen",
        html: `<p>Gaat iemand uit dienst? Kies <span class="ui">Deactiveren</span>. Die persoon kan dan niet meer inloggen en wordt niet meer ingepland, maar uren en geschiedenis blijven bewaard. Met <span class="ui">Activeren</span> zet je het terug.</p>
<p>In de <span class="ui">Gevarenzone</span> onderaan staan <span class="ui">Account verwijderen</span> (alleen de inlog) en <span class="ui">Medewerker verwijderen</span>. Verwijderen kan niet ongedaan worden gemaakt, dus deactiveren is meestal de betere keuze.</p>`,
      },
      {
        heading: "Meekijken als medewerker",
        html: `<p>Met <span class="ui">Bekijk als medewerker</span> zie je de app zoals die medewerker hem ziet. Handig als iemand vraagt waarom een dienst of knop er niet staat.</p>`,
      },
    ],
    related: ["add-employee", "permissions", "documents"],
  },
  {
    id: "departments",
    slug: "afdelingen-en-functies",
    category: "staff",
    title: "Afdelingen en functies instellen",
    description: "Afdelingen zoals Bar en Keuken aanmaken, functies toevoegen en bepalen wie voor wie mag invallen.",
    path: ["Personeel", "Afdelingen beheren"],
    sections: [
      {
        heading: "Een afdeling toevoegen",
        html: `<ol>
<li>Klik in het menu onder <span class="ui">Personeel</span> op <span class="ui">Afdelingen beheren</span>.</li>
<li>Klik op <span class="ui">Afdeling toevoegen</span>, vul een naam in en kies eventueel een <span class="ui">Kleur</span>. Die kleur zie je terug in het rooster.</li>
<li>Werk je met meerdere locaties, kies dan ook de locatie van de afdeling.</li>
</ol>`,
      },
      {
        heading: "Functies toevoegen",
        html: `<p>Typ bij een afdeling een <span class="ui">Naam nieuwe functie</span> in, bijvoorbeeld Manager, Bartender of Barback, en klik op <span class="ui">Functie toevoegen</span>. Met <span class="ui">Omhoog</span> en <span class="ui">Omlaag</span> zet je ze in volgorde van hoog naar laag.</p>
<p>Functies bepalen wie welke dienst kan draaien: bij elke dienst stel je een minimale functie in.</p>`,
      },
      {
        heading: "Invulregels: wie mag voor wie invallen?",
        html: `<p>Bij elke functie staat <span class="ui">Kan ook diensten invullen van:</span>. Vink daar de functies aan die deze functie mag overnemen. Een Barmanager mag bijvoorbeeld een Bartenderdienst invullen.</p>
<p>Die regels gelden voor de roostermotor, voor claims en ruilen, en voor de waarschuwingen in het rooster. Zo blijft een dienst niet open alleen omdat precies die functie ontbreekt.</p>`,
      },
      {
        heading: "Rechten per functie",
        html: `<p>Je kunt een hele functie rechten geven: <span class="ui">Mag ruil- en claimverzoeken goedkeuren</span>, <span class="ui">Mag de klok beheren</span> en <span class="ui">Mag roosteren</span>. Iedereen met die functie krijgt dat recht. Wil je het maar aan één persoon geven, doe het dan bij die medewerker. Zie <a href="/handleiding/rechten-en-rollen">Rechten geven</a>.</p>
<p class="tip">Een afdeling of functie verwijderen wist ook alles wat eraan gekoppeld is. Doe dat alleen als je hem echt niet meer gebruikt.</p>`,
      },
    ],
    related: ["shift-types", "add-employee", "permissions"],
  },
  {
    id: "permissions",
    slug: "rechten-en-rollen",
    category: "staff",
    title: "Rechten geven: roosteraar, goedkeurder, klokbeheer en admin",
    description: "Een vertrouwde medewerker laten roosteren of verzoeken laten goedkeuren zonder volledige beheerderstoegang, of iemand admin maken.",
    path: ["Personeel", "Medewerkers", "(medewerker)", "Individuele rechten"],
    sections: [
      {
        heading: "Drie rechten",
        html: `<ul>
<li><span class="ui">Mag roosteren</span>: de medewerker kan het rooster maken en publiceren, zonder uurlonen te zien of beheerder te worden. Ze vinden het onder <span class="ui">Meer → Roosteren</span>.</li>
<li><span class="ui">Mag ruil- en claimverzoeken goedkeuren</span>: de medewerker krijgt <span class="ui">Meer → Goedkeuringen</span> met ruilverzoeken, claims en urencorrecties van collega's.</li>
<li><span class="ui">Mag de klok beheren</span>: de medewerker kan collega's in- en uitklokken via <span class="ui">Meer → Collega's in-/uitklokken</span>.</li>
</ul>`,
      },
      {
        heading: "Per functie of per persoon",
        html: `<p>Geef je een recht aan een functie (bij <a href="/handleiding/afdelingen-en-functies">Afdelingen beheren</a>), dan krijgt iedereen met die functie het. Wil je het maar aan één persoon geven, open dan de medewerker en vink het aan onder <span class="ui">Individuele rechten</span>.</p>`,
      },
      {
        heading: "Iemand admin maken",
        html: `<p>Open de medewerker en kies <span class="ui">Promoveer tot admin</span>. Die persoon krijgt volledige beheerderstoegang en blijft gewoon inroosterbaar. Dit kan niet worden teruggedraaid. De nieuwe admin moet opnieuw inloggen om de beheeromgeving te zien, en kan rechtsboven wisselen naar de medewerkerskant.</p>`,
      },
    ],
    related: ["departments", "manage-employee", "swaps-claims"],
  },
  {
    id: "locations",
    slug: "locaties",
    category: "staff",
    title: "Werken met meerdere locaties",
    description: "Locaties toevoegen en per locatie plannen, met afdelingen, medewerkers en diensten per vestiging.",
    path: ["Personeel", "Locaties beheren"],
    plan: "pro",
    sections: [
      {
        heading: "Een locatie toevoegen",
        html: `<ol>
<li>Klik in het menu onder <span class="ui">Personeel</span> op <span class="ui">Locaties beheren</span>.</li>
<li>Klik op <span class="ui">Locatie toevoegen</span>, vul de naam en eventueel het adres in.</li>
<li>Koppel daarna bij <a href="/handleiding/afdelingen-en-functies">Afdelingen beheren</a> elke afdeling aan een locatie, en kies bij elke medewerker op welke <span class="ui">Locaties</span> die werkt.</li>
</ol>`,
      },
      {
        heading: "Per locatie werken",
        html: `<p>Bovenaan het scherm kies je een locatie of <span class="ui">Alle locaties</span>. Het rooster, de beschikbaarheid en de overzichten volgen die keuze. Genereer je een rooster terwijl er een locatie gekozen is, dan maakt de roostermotor alleen het rooster van die locatie.</p>
<p>Werkt een medewerker op meer locaties, dan vraagt de klokpaal of de telefoon bij het inklokken <span class="ui">Welke locatie?</span>.</p>`,
      },
      {
        heading: "Een locatie verwijderen",
        html: `<p>Verwijder eerst de afdelingen en diensten van die locatie. Daarna kun je de locatie zelf verwijderen. Dat kan niet ongedaan worden gemaakt.</p>`,
      },
    ],
    related: ["departments", "build-schedule"],
  },
  {
    id: "documents",
    slug: "documenten",
    category: "staff",
    title: "Contracten en documenten van medewerkers bewaren",
    description: "Contracten en certificaten per medewerker uploaden. De medewerker downloadt alleen zijn eigen documenten.",
    path: ["Personeel", "Medewerkers", "(medewerker)", "Documenten"],
    sections: [
      {
        heading: "Een document uploaden",
        html: `<ol>
<li>Open de medewerker via <span class="ui">Personeel → Medewerkers</span>.</li>
<li>Kies bij <span class="ui">Documenten</span> de <span class="ui">Soort document</span> en het bestand: PDF, JPG of PNG, maximaal 8 MB.</li>
<li>Klik op <span class="ui">Uploaden</span>.</li>
</ol>`,
      },
      {
        heading: "Wie ziet wat?",
        html: `<p>De medewerker ziet en downloadt alleen zijn eigen documenten, onder <span class="ui">Meer → Mijn documenten</span>. Medewerkers die mogen roosteren zien de documenten niet. Documenten worden automatisch verwijderd na de wettelijke bewaartermijn.</p>`,
      },
    ],
    related: ["manage-employee"],
  },

  // ─── Rooster ──────────────────────────────────────────────────────────────
  {
    id: "shift-types",
    slug: "diensten-instellen",
    category: "schedule",
    title: "Diensten instellen",
    description: "Je diensten vastleggen met dienstcode, begin- en eindtijd, minimale functie en afwijkende tijden per dag.",
    path: ["Rooster", "Diensten"],
    sections: [
      {
        heading: "Een dienst toevoegen",
        html: `<ol>
<li>Ga naar <span class="ui">Rooster → Diensten</span>. Je hebt eerst minimaal één afdeling nodig.</li>
<li>Klik op <span class="ui">Dienst type toevoegen</span> bij de juiste afdeling.</li>
<li>Vul een <span class="ui">Dienstcode</span> in (bijvoorbeeld A1 of Ochtend), de <span class="ui">Start</span> en het <span class="ui">Einde</span>.</li>
<li>Kies bij <span class="ui">Min functie</span> welke functie minimaal nodig is. Via de invulregels mogen hogere functies de dienst ook draaien.</li>
<li>Gebruik eventueel <span class="ui">Opmerking</span> en <span class="ui">Prioriteit</span>. De roostermotor vult diensten met een hogere prioriteit eerst.</li>
</ol>`,
      },
      {
        heading: "Eén dienst is één plek",
        html: `<p>Elke dienst is één plek voor één persoon. Heb je op vrijdagavond drie mensen achter de bar nodig, maak dan drie diensten, bijvoorbeeld B1, B2 en B3. In <a href="/handleiding/vaste-diensten">Vaste diensten</a> bepaal je daarna op welke dagen elke dienst terugkomt.</p>`,
      },
      {
        heading: "Andere tijden op bepaalde dagen",
        html: `<p>Begint een dienst op vrijdag later? Klik bij de dienst op <span class="ui">Tijd per dag aanpassen</span> en stel voor die dag een andere begin- of eindtijd in. Een dienst die na middernacht eindigt, krijgt het label <span class="ui">Na middernacht</span> en telt goed mee voor de rusttijd.</p>
<p>Met <span class="ui">Omhoog</span> en <span class="ui">Omlaag</span> bepaal je de volgorde waarin diensten in het rooster staan.</p>`,
      },
    ],
    related: ["templates", "departments", "build-schedule"],
  },
  {
    id: "templates",
    slug: "vaste-diensten",
    category: "schedule",
    title: "Je standaardweek vastleggen (vaste diensten)",
    description: "Eén keer instellen welke diensten je op welke dagen nodig hebt, eventueel met vaste medewerkers, zodat je niet elke week opnieuw begint.",
    path: ["Rooster", "Vaste diensten"],
    sections: [
      {
        heading: "De standaardweek invullen",
        html: `<ol>
<li>Ga naar <span class="ui">Rooster → Vaste diensten</span> en kies een afdeling.</li>
<li>Elke rij is een dienst, elke kolom een dag. Zet een vakje aan op de dagen dat die dienst nodig is.</li>
<li>Werkt iemand altijd een bepaalde dienst, kies die persoon dan in het vakje of sleep hem erheen vanuit <span class="ui">Team tonen</span>. Die dienst is dan vast voor hem.</li>
</ol>
<p>Met <span class="ui">Alleen geschikt</span> zie je alleen mensen die de dienst mogen en kunnen draaien. Medewerkers zien hun vaste diensten in de app onder <span class="ui">Mijn vaste diensten</span>.</p>`,
      },
      {
        heading: "De standaardweek gebruiken",
        html: `<p>In het rooster kies je <span class="ui">Hulpmiddelen → Template importeren</span> om een week te vullen met deze diensten. Met <span class="ui">Vaste toewijzingen toepassen</span> worden de vaste mensen meteen ingepland. Zie <a href="/handleiding/rooster-maken">Een weekrooster maken</a>.</p>`,
      },
      {
        heading: "Meerdere sjablonen (zomer, winter)",
        html: `<p>Heb je in de zomer een andere week nodig dan in de winter? Met Business maak je via <span class="ui">Nieuw template</span> meerdere sjablonen aan en wissel je met de tabbladen bovenaan. In het rooster kies je welk sjabloon je importeert.</p>`,
      },
    ],
    related: ["shift-types", "build-schedule", "engine"],
  },
  {
    id: "build-schedule",
    slug: "rooster-maken",
    category: "schedule",
    title: "Een weekrooster maken",
    description: "Een week vullen vanuit je standaardweek of de vorige week, medewerkers inplannen en een briefing of extra dienst toevoegen.",
    path: ["Rooster", "Rooster"],
    sections: [
      {
        heading: "De week vullen",
        html: `<ol>
<li>Ga naar <span class="ui">Rooster → Rooster</span> en kies de week met de pijlen, of klik op de datum.</li>
<li>Open <span class="ui">Hulpmiddelen</span> en kies <span class="ui">Template importeren</span>. De week krijgt dan de diensten uit je <a href="/handleiding/vaste-diensten">standaardweek</a>.</li>
<li>Kies <span class="ui">Vaste toewijzingen toepassen</span> om de vaste mensen in te plannen.</li>
</ol>
<p>Lijkt deze week op vorige week? Kies dan <span class="ui">Kopieer vorige week</span>. Let op: dat overschrijft wat er al staat.</p>`,
      },
      {
        heading: "Medewerkers inplannen",
        html: `<p>Klik op een open dienst. Je ziet een lijst met kandidaten: eerst wie geschikt is, daaronder wie niet geschikt is en waarom (geen beschikbaarheid, verkeerde functie, te weinig rust). Kies een naam.</p>
<p>Je kunt ook <span class="ui">Team tonen</span> openklappen en een medewerker naar een dienst slepen. Sleep je een ingeplande medewerker naar een andere dienst, dan ruilen ze van plek.</p>
<p>Met <span class="ui">Afdelingen</span> filter je het rooster, en met <span class="ui">Medewerkerfilter</span> kies je of je alleen geschikte mensen ziet of iedereen.</p>`,
      },
      {
        heading: "Briefing, vergrendelen en extra diensten",
        html: `<ul>
<li><strong>Briefing</strong>: klik op een dienst en schrijf bij <span class="ui">Briefing voor deze dienst</span> bijvoorbeeld "groep van 20 om 19:00". De medewerker ziet het in zijn rooster.</li>
<li><strong>Vergrendelen</strong>: met <span class="ui">Vergrendelen</span> blijft een toewijzing gegarandeerd staan als je het rooster automatisch laat vullen.</li>
<li><strong>Extra dienst</strong>: <span class="ui">Hulpmiddelen → Extra dienst toevoegen</span> maakt een eenmalige dienst buiten je standaardweek, bijvoorbeeld om iemand in te werken.</li>
</ul>`,
      },
      {
        heading: "Het overzicht bovenaan",
        html: `<p>Onder de knoppen zie je hoeveel diensten zijn ingevuld, hoeveel uur er gepland is en wat de loonkosten zijn. Diensten die nog niet gepubliceerd zijn, tellen als <span class="ui">concept</span>. Wil je opnieuw beginnen, kies dan <span class="ui">Hulpmiddelen → Week wissen</span>.</p>
<p>Is de week klaar? Lees verder bij <a href="/handleiding/rooster-publiceren">Het rooster publiceren</a>.</p>`,
      },
    ],
    related: ["publish", "engine", "templates"],
  },
  {
    id: "publish",
    slug: "rooster-publiceren",
    category: "schedule",
    title: "Het rooster publiceren en delen",
    description: "Een week zichtbaar maken voor je team, wijzigingen na het publiceren doorvoeren en het rooster exporteren als PDF of Excel.",
    path: ["Rooster", "Rooster"],
    sections: [
      {
        heading: "Publiceren",
        html: `<p>Medewerkers zien hun diensten pas na het publiceren. Zo publiceer je een week:</p>
<ul>
<li>Met Pro of Business: open <span class="ui">Genereren & publiceren</span> en kies <span class="ui">Publiceren</span>.</li>
<li>Met Starter: klik op <span class="ui">Publiceren</span>.</li>
</ul>
<p>Iedereen met een dienst krijgt een melding. De week krijgt het label <span class="ui">Gepubliceerd</span>.</p>`,
      },
      {
        heading: "Iets wijzigen na het publiceren",
        html: `<p>Je kunt een gepubliceerde week gewoon aanpassen. Wijzig je wie een dienst draait, dan is dat meteen zichtbaar en krijgen beide medewerkers een melding. Een open dienst in een gepubliceerde week kunnen medewerkers zelf claimen. Zie <a href="/handleiding/open-diensten-vullen">Open diensten gevuld krijgen</a>.</p>`,
      },
      {
        heading: "Gepubliceerde weken terugvinden",
        html: `<p>Onder <span class="ui">Rooster → Gepubliceerd</span> staan alle gepubliceerde weken, met het aantal diensten, medewerkers en open diensten. Open een week om hem te bekijken of te corrigeren.</p>`,
      },
      {
        heading: "Exporteren en printen",
        html: `<p>Kies <span class="ui">Exporteren → Exporteer PDF</span> om het rooster op te hangen, of <span class="ui">Exporteer Excel</span> om het als bestand te delen. Medewerkers kunnen hun diensten ook automatisch in hun eigen agenda zetten. Zie <a href="/handleiding/rooster-bekijken">Je rooster bekijken</a>.</p>`,
      },
    ],
    related: ["build-schedule", "open-shifts", "notifications"],
  },
  {
    id: "engine",
    slug: "roostermotor",
    category: "schedule",
    title: "Automatisch een rooster laten maken (roostermotor)",
    description: "De hele week in één klik laten vullen op basis van beschikbaarheid, functie, contracturen en rusttijd, en zien waarom een dienst open bleef.",
    path: ["Rooster", "Rooster", "Genereren & publiceren"],
    plan: "pro",
    sections: [
      {
        heading: "Een rooster genereren",
        html: `<ol>
<li>Zet de diensten voor de week klaar met <span class="ui">Hulpmiddelen → Template importeren</span>. Plan eventueel al zelf mensen in en vergrendel wat zeker moet blijven.</li>
<li>Open <span class="ui">Genereren & publiceren</span> en kies <span class="ui">Genereren</span>.</li>
<li>Controleer het resultaat, pas aan waar nodig en kies daarna <span class="ui">Publiceren</span>.</li>
</ol>`,
      },
      {
        heading: "Waar de motor rekening mee houdt",
        html: `<p>Beschikbaarheid, goedgekeurde vakantie, functie en invulregels, contracturen, het maximum aantal dagen per week en per afdeling, en de rusttijd tussen diensten (standaard 11 uur, ook over de weekgrens heen). Daarnaast verdeelt hij diensten eerlijk over het team.</p>
<p>De motor vult de open diensten. Diensten die al zijn ingevuld laat hij staan, maar om een open dienst te vullen kan hij een niet-vergrendelde toewijzing verschuiven. Vergrendelde diensten blijven altijd staan.</p>
<p>Onder <span class="ui">Rooster → Roostermotor</span> lees je precies welke regels gelden en wie voorgaat. In <span class="ui">Instellingen → Geavanceerde opties → Roostermotor</span> zet je onderdelen aan of uit en stel je de <span class="ui">Minimale rusttijd tussen diensten</span> in.</p>`,
      },
      {
        heading: "\"Geen match gevonden\"",
        html: `<p>Kon de motor een dienst niet vullen, dan staat daar in rood <span class="ui">Geen match gevonden</span>. Houd je muis erboven om de reden te zien, bijvoorbeeld dat niemand beschikbaar is op die dag. Los dat op en genereer opnieuw, of gebruik <a href="/handleiding/open-diensten-vullen">"Wie kan ik bellen?"</a>.</p>`,
      },
      {
        heading: "Automatisch op een vaste dag",
        html: `<p>Bij <span class="ui">Instellingen → Geavanceerde opties → Automatisch rooster</span> laat je het rooster op een vaste dag maken. Je kiest de <span class="ui">Dag van de week</span>, de <span class="ui">Herhaling</span> en hoeveel <span class="ui">Weken vooruit</span>. Het resultaat controleer en publiceer je zelf.</p>`,
      },
    ],
    related: ["build-schedule", "open-shifts", "availability-admin"],
  },
  {
    id: "open-shifts",
    slug: "open-diensten-vullen",
    category: "schedule",
    title: "Open diensten gevuld krijgen",
    description: "Medewerkers open diensten laten claimen, ze automatisch laten aanbieden, en met \"Wie kan ik bellen?\" zien wie je kunt vragen.",
    sections: [
      {
        heading: "Medewerkers laten claimen",
        html: `<p>Een open dienst in een gepubliceerde week zien medewerkers in de app onder <span class="ui">Meer → Diensten</span>. Ze kunnen hem <span class="ui">Claimen</span>. Afhankelijk van je instellingen keur je de claim zelf goed of gaat hij automatisch door. Zie <a href="/handleiding/ruilverzoeken-en-claims">Claims en ruilverzoeken goedkeuren</a>.</p>`,
      },
      {
        heading: "Automatisch aanbieden",
        html: `<p>Met Pro of Business zet je <span class="ui">Instellingen → Geavanceerde opties → Automatisch aanbieden</span> aan. Elk uur worden open, gepubliceerde diensten aangeboden aan medewerkers die ervoor in aanmerking komen. Bij <span class="ui">Vooruitblik</span> kies je hoeveel uur van tevoren dat gebeurt.</p>
<p>Zet je <span class="ui">Direct toewijzen (geen goedkeuring)</span> aan, dan krijgt de eerste die reageert de dienst meteen.</p>`,
      },
      {
        heading: "\"Wie kan ik bellen?\"",
        html: `<p>Blijven er diensten open, dan zie je onder het rooster <span class="ui">Wie kan ik bellen?</span> (Pro en Business). Klik op <span class="ui">Toon suggesties</span>. Je krijgt per persoon het beste plan: wie je belt, wie er doorschuift en hoeveel open diensten daardoor gevuld worden.</p>
<p>Zegt iemand ja, klik dan op <span class="ui">Zei ja, doorvoeren</span> en alle verschuivingen worden in één keer gedaan. Alle regels blijven gelden, behalve de beschikbaarheid van wie je belt.</p>`,
      },
    ],
    related: ["engine", "swaps-claims", "sick"],
  },

  // ─── Beschikbaarheid ──────────────────────────────────────────────────────
  {
    id: "availability-admin",
    slug: "beschikbaarheid-beheren",
    category: "availability",
    title: "Beschikbaarheid van je team bekijken en instellen",
    description: "Zien wie wanneer kan, de beschikbaarheid van een medewerker aanpassen, invullen per dienst of tijdvak, vergrendelen en herinneringen sturen.",
    path: ["Rooster", "Beschikbaarheid"],
    sections: [
      {
        heading: "Het overzicht",
        html: `<p>Onder <span class="ui">Rooster → Beschikbaarheid</span> zie je per week wie <span class="ui">beschikbaar</span> is, wie <span class="ui">werkt graag</span> (voorkeursdag), wie <span class="ui">niet beschikbaar</span> is en wie <span class="ui">vakantie</span> heeft. Klik op een notitie om hem te lezen. Filter op afdeling of zoek een medewerker.</p>
<p>Klik op een naam om de beschikbaarheid van die medewerker zelf aan te passen. Dat kan altijd, ook als de week vergrendeld is.</p>`,
      },
      {
        heading: "Per dienst of per tijdvak",
        html: `<p>In <span class="ui">Instellingen → Beschikbaarheid invullen</span> kies je de <span class="ui">Manier van invullen</span>:</p>
<ul>
<li><span class="ui">Tijdvak</span>: medewerkers vullen per dag een begin- en eindtijd in.</li>
<li><span class="ui">Per dienst</span>: medewerkers vinken per dag de diensten uit je vaste diensten aan. De roostermotor plant iemand dan alleen in op aangevinkte diensten. Bij <span class="ui">Vaste diensten</span> kies je uit welk sjabloon ze kiezen.</li>
</ul>
<p>Wissel je later, dan blijven beide soorten gegevens bewaard.</p>`,
      },
      {
        heading: "Beschikbaarheid vergrendelen",
        html: `<p>Met <span class="ui">Beschikbaarheid vergrendelen</span> kunnen medewerkers hun beschikbaarheid niet meer wijzigen voor de huidige week plus het aantal weken dat je kiest. Rooster je verder vooruit, vul dan ook een <span class="ui">Vaste datum (optioneel)</span> in. Wat het verst vooruit reikt, telt.</p>`,
      },
      {
        heading: "Herinnering sturen",
        html: `<p>Zet bij <span class="ui">Geavanceerde opties → Beschikbaarheidsherinnering</span> de herinnering aan, en kies het <span class="ui">Moment</span> en hoeveel <span class="ui">Weken vooruit</span>. De herinnering volgt je roosterritme: elke week, elke 4 weken of elke 13 weken.</p>`,
      },
    ],
    related: ["give-availability", "engine", "settings"],
  },

  // ─── Verzoeken ────────────────────────────────────────────────────────────
  {
    id: "swaps-claims",
    slug: "ruilverzoeken-en-claims",
    category: "requests",
    title: "Claims en ruilverzoeken goedkeuren",
    description: "Hoe ruilen, overnemen en claimen werkt, waar je het goedkeurt, en hoe je het automatisch laat gaan of aan een teamleider overlaat.",
    path: ["Verzoeken", "Claims · Ruilverzoeken"],
    sections: [
      {
        heading: "Hoe medewerkers ruilen",
        html: `<p>Een medewerker tikt in de app op een eigen dienst en kiest:</p>
<ul>
<li><span class="ui">Open ruil</span>: iedereen kan reageren met een dienst in ruil.</li>
<li><span class="ui">Open overdracht</span>: iedereen kan de dienst overnemen, zonder ruildienst.</li>
<li><span class="ui">Geef aan collega</span>: direct overdragen aan één persoon.</li>
<li><span class="ui">Ruil met collega</span>: een specifieke dienst van een collega voorstellen.</li>
</ul>
<p>Pas als een collega accepteert, komt het verzoek bij jou.</p>`,
      },
      {
        heading: "Goedkeuren of afwijzen",
        html: `<p>Open <span class="ui">Verzoeken → Ruilverzoeken</span> of <span class="ui">Verzoeken → Claims</span>. Bij elk verzoek zie je wie wat geeft en krijgt. Een <span class="ui">Let op</span> waarschuwt als het niet past, bijvoorbeeld door functie of rusttijd. Schrijf eventueel een <span class="ui">Opmerking voor medewerkers</span> en klik op <span class="ui">Goedkeuren</span> of <span class="ui">Afwijzen</span>. Het rooster wordt bij goedkeuring meteen bijgewerkt.</p>`,
      },
      {
        heading: "Minder zelf goedkeuren",
        html: `<p>In <span class="ui">Instellingen → Verzoeken & goedkeuring</span> kies je per soort <span class="ui">Altijd zelf goedkeuren</span>, <span class="ui">Automatisch bij zelfde functie</span> of <span class="ui">Altijd automatisch</span>. Met <span class="ui">Alleen eigen afdeling/functie mag diensten oppakken</span> voorkom je dat iemand buiten zijn functie claimt of ruilt.</p>
<p>Wil je het aan een teamleider overlaten? Geef die <span class="ui">Mag ruil- en claimverzoeken goedkeuren</span>. Zie <a href="/handleiding/rechten-en-rollen">Rechten geven</a>.</p>`,
      },
    ],
    related: ["open-shifts", "permissions", "swap-shift"],
  },
  {
    id: "leave",
    slug: "vakantieaanvragen",
    category: "requests",
    title: "Vakantieaanvragen beoordelen",
    description: "Vakantie goedkeuren of afwijzen, zien hoeveel dagen iemand nog heeft, en wat er gebeurt met diensten in die periode.",
    path: ["Verzoeken", "Vakantieverzoeken"],
    sections: [
      {
        heading: "Een aanvraag beoordelen",
        html: `<ol>
<li>Open <span class="ui">Verzoeken → Vakantieverzoeken</span>.</li>
<li>Bij elke aanvraag zie je de periode en, als je vakantiedagen bijhoudt, hoeveel dagen de medewerker nog over heeft.</li>
<li>Schrijf eventueel een <span class="ui">Opmerking</span> en klik op <span class="ui">Goedkeuren</span> of <span class="ui">Afwijzen</span>.</li>
</ol>
<p>Afgehandelde aanvragen staan onder <span class="ui">Eerder behandeld</span>.</p>`,
      },
      {
        heading: "Wat er gebeurt bij goedkeuring",
        html: `<p>De medewerker is voor die datums niet beschikbaar, ook voor de roostermotor. Stond hij al ingeroosterd, dan worden die diensten vrijgegeven en krijg je een melding over welke diensten open zijn gekomen.</p>`,
      },
      {
        heading: "Vakantiedagen en instellingen",
        html: `<p>Het saldo komt uit <span class="ui">Vakantiedagen per jaar</span> bij de medewerker. Laat je dat leeg, dan wordt er geen saldo bijgehouden.</p>
<p>Wil je aanvragen automatisch laten goedkeuren, zet dan <span class="ui">Vakantieaanvragen automatisch goedkeuren</span> aan in de instellingen. Gebruik je geen vakantie in de app, zet dan <span class="ui">Vakantie</span> uit bij <span class="ui">Functies</span>.</p>`,
      },
    ],
    related: ["request-leave", "open-shifts", "settings"],
  },
  {
    id: "sick",
    slug: "ziekmeldingen",
    category: "requests",
    title: "Ziekmeldingen afhandelen",
    description: "Wat er gebeurt als een medewerker zich ziek meldt in de app, en hoe je de dienst snel weer gevuld krijgt.",
    sections: [
      {
        heading: "Hoe een ziekmelding werkt",
        html: `<p>Een medewerker tikt in de app op een eigen aankomende dienst en kiest <span class="ui">Ziek melden</span>, eventueel met een notitie voor jou. De dienst wordt meteen vrijgegeven, zodat een collega hem kan overnemen. Jij krijgt een melding.</p>
<p>Op het dashboard zie je de ziekmeldingen van de afgelopen 72 uur. In de rapporten zie je ziekmeldingen per week.</p>`,
      },
      {
        heading: "De dienst weer vullen",
        html: `<ul>
<li>Collega's zien de vrijgekomen dienst bij de open diensten en kunnen hem claimen.</li>
<li>Met automatisch aanbieden (Pro en Business) krijgen geschikte collega's vanzelf een bericht.</li>
<li>Met <span class="ui">Wie kan ik bellen?</span> zie je wie je het beste kunt vragen.</li>
<li>Of plan zelf iemand in via het rooster. Die persoon krijgt dan een melding.</li>
</ul>
<p>Meer in <a href="/handleiding/open-diensten-vullen">Open diensten gevuld krijgen</a>.</p>`,
      },
    ],
    related: ["open-shifts", "report-sick", "swaps-claims"],
  },

  // ─── Uren & klokken ───────────────────────────────────────────────────────
  {
    id: "kiosk",
    slug: "klokpaal-instellen",
    category: "hours",
    title: "De klokpaal (kiosk) instellen",
    description: "Een tablet bij de ingang instellen zodat medewerkers in- en uitklokken door op hun naam te tikken.",
    path: ["Beheer", "Instellingen", "Geavanceerde opties", "Klokpaal (kiosk)"],
    sections: [
      {
        heading: "De klokpaal koppelen",
        html: `<p>Zet eerst <span class="ui">Uren registratie</span> aan bij <span class="ui">Instellingen → Functies</span>.</p>
<ol>
<li>Ga naar <span class="ui">Instellingen → Geavanceerde opties → Klokpaal (kiosk)</span> en klik op <span class="ui">Token genereren</span>.</li>
<li>Klik op <span class="ui">Kopieer</span>.</li>
<li>Open op de tablet <span class="ui">clock.gedekt.com</span>, plak de code en klik op <span class="ui">Klokpaal activeren</span>.</li>
</ol>
<p>Dit hoeft maar één keer: de tablet onthoudt de code.</p>`,
      },
      {
        heading: "Zo klokken medewerkers",
        html: `<p>Een medewerker zoekt zijn naam of tikt erop en kiest <span class="ui">Inklokken</span> of <span class="ui">Uitklokken</span>. Er is geen pincode of nummer nodig. Heb je een <a href="/handleiding/uitklokformulier">uitklok-formulier</a>, dan vult hij dat in bij het uitklokken. Werkt iemand op meer locaties, dan kiest hij de locatie.</p>`,
      },
      {
        heading: "Tablet kwijt of vervangen?",
        html: `<p>Klik op <span class="ui">Token opnieuw genereren</span>. De oude tablet werkt dan niet meer en je koppelt de nieuwe met de nieuwe code.</p>`,
      },
    ],
    related: ["phone-clock", "clock-out-form", "hours"],
  },
  {
    id: "phone-clock",
    slug: "klokken-met-telefoon",
    category: "hours",
    title: "Medewerkers laten klokken met hun telefoon",
    description: "Zelf in- en uitklokken via de app aanzetten voor zaken zonder tablet bij de ingang.",
    path: ["Beheer", "Instellingen", "Functies"],
    sections: [
      {
        heading: "Aanzetten",
        html: `<p>Zet in <span class="ui">Instellingen → Functies</span> eerst <span class="ui">Uren registratie</span> aan, en daarna <span class="ui">Medewerkers mogen zelf klokken via hun telefoon</span>.</p>
<p>Medewerkers krijgen dan <span class="ui">Klokken</span> in het menu onderin, op de plek van Checklist. Checklists staan dan onder <span class="ui">Meer</span>. De klokpaal blijft gewoon werken.</p>`,
      },
      {
        heading: "Wat de medewerker ziet",
        html: `<p>Op <span class="ui">Klokken</span> ziet de medewerker of hij is ingeklokt, zijn dienst van vandaag en de uren die hij deze week heeft gewerkt. Inklokken wordt naar boven afgerond op het kwartier, uitklokken naar beneden.</p>`,
      },
    ],
    related: ["kiosk", "hours", "clock-in-out"],
  },
  {
    id: "hours",
    slug: "uren-controleren",
    category: "hours",
    title: "Gewerkte uren controleren en corrigeren",
    description: "Per dag zien wie te laat was of vergat uit te klokken, registraties toevoegen of aanpassen en urencorrecties goedkeuren.",
    path: ["Overzicht", "Uren"],
    sections: [
      {
        heading: "Het dagoverzicht",
        html: `<p>Onder <span class="ui">Overzicht → Uren</span> zie je per dag elke geplande dienst met de klokstatus: <span class="ui">Op tijd</span>, <span class="ui">Te laat</span>, <span class="ui">Te vroeg</span>, <span class="ui">Vergeten uit te checken</span> of <span class="ui">Niet ingecheckt</span>. Klokte iemand zonder geplande dienst, dan staat dat als <span class="ui">Extra (geen geplande dienst)</span>.</p>`,
      },
      {
        heading: "Uren toevoegen of aanpassen",
        html: `<p>Klik op een regel om de uren te bewerken, of gebruik <span class="ui">Handmatige registratie toevoegen</span>. Vul <span class="ui">Inchecken</span> en <span class="ui">Uitchecken</span> in en eventueel een notitie. Die notitie ziet de medewerker. Ligt de uitkloktijd vóór de inkloktijd, dan telt het als nachtdienst.</p>`,
      },
      {
        heading: "Iemand nu in- of uitklokken",
        html: `<p>Onder <span class="ui">Overzicht → Klok</span> zoek je een medewerker op naam en klok je hem in of uit. Je ziet daar ook wie er nu is ingecheckt. Vergeten uitklokken komen hier ook terecht, zodat je ze kunt afsluiten.</p>`,
      },
      {
        heading: "Urencorrecties goedkeuren",
        html: `<p>Vergat een medewerker te klokken, dan kan hij in de app een correctie aanvragen. Die vind je onder <span class="ui">Verzoeken → Uren correcties</span>. Je ziet de huidige en de aangevraagde tijden. Klik op <span class="ui">Goedkeuren</span>, of op <span class="ui">Afwijzen</span> met een reden.</p>
<p>Wil je dit niet zelf doen, zet dan <span class="ui">Urencorrecties automatisch goedkeuren</span> aan in de instellingen, of geef een teamleider het recht om goed te keuren.</p>`,
      },
    ],
    related: ["reports", "kiosk", "hours-corrections"],
  },
  {
    id: "clock-out-form",
    slug: "uitklokformulier",
    category: "hours",
    title: "Het uitklok-formulier instellen (pauze, maaltijd)",
    description: "Eigen vragen bij het uitklokken, zoals pauzeduur of een personeelsmaaltijd met bedrag.",
    path: ["Beheer", "Instellingen", "Uitklok-formulier"],
    sections: [
      {
        heading: "Een veld toevoegen",
        html: `<ol>
<li>Ga naar <span class="ui">Instellingen → Uitklok-formulier</span>.</li>
<li>Vul bij <span class="ui">Veld toevoegen</span> een <span class="ui">Label</span> in, bijvoorbeeld "Diner".</li>
<li>Kies het <span class="ui">Type</span>: <span class="ui">Ja/Nee (vinkje)</span>, <span class="ui">Pauzetijd (minuten)</span> of <span class="ui">Vergoeding (€)</span> met een bedrag per keer.</li>
<li>Klik op <span class="ui">Toevoegen</span>. Met <span class="ui">Actief</span> en <span class="ui">Inactief</span> zet je een veld tijdelijk aan of uit.</li>
</ol>`,
      },
      {
        heading: "Waar de antwoorden terugkomen",
        html: `<p>Medewerkers beantwoorden de vragen bij het uitklokken, op de klokpaal of op hun telefoon. De pauze gaat van de gewerkte tijd af. Pauze en vergoedingen zie je terug in de <a href="/handleiding/rapporten-en-salarisexport">rapporten en de salarisexport</a>. Ook bij een urencorrectie vult de medewerker ze in.</p>`,
      },
    ],
    related: ["kiosk", "reports", "hours"],
  },
  {
    id: "reports",
    slug: "rapporten-en-salarisexport",
    category: "hours",
    title: "Rapporten en de salarisexport",
    description: "Gewerkte uren, loonkosten, no-shows en contracturen per periode bekijken, en exporteren voor je loonadministratie.",
    path: ["Overzicht", "Rapporten"],
    sections: [
      {
        heading: "Een rapport bekijken",
        html: `<p>Ga naar <span class="ui">Overzicht → Rapporten</span>. Kies een maand met de pijlen, of vul bij <span class="ui">Van</span> en <span class="ui">Tot</span> een eigen periode in en klik op <span class="ui">Toepassen</span>.</p>
<p>Bovenaan zie je de gewerkte uren (netto, na pauze), de loonkosten, no-shows en het aantal actieve medewerkers. De tabel toont per medewerker de uren, pauze, kosten, vergoedingen en hoe dat zich verhoudt tot de contracturen. Onder <span class="ui">Inzichten</span> zie je onder andere ruilverzoeken, ziekmeldingen en geplande loonkosten per week.</p>`,
      },
      {
        heading: "Exporteren",
        html: `<ul>
<li><strong>PDF of Excel</strong>: het rapport als bestand.</li>
<li><span class="ui">Salarisexport (NL)</span>: een Excel-bestand met Nederlandse kolommen (personeelsnummer, brutoloon, maaltijdvergoeding en zo verder) voor je loonadministratie.</li>
</ul>
<p class="tip">Loonkosten kloppen alleen als bij elke medewerker een uurloon is ingevuld.</p>`,
      },
    ],
    related: ["hours", "clock-out-form"],
  },

  // ─── Communicatie ─────────────────────────────────────────────────────────
  {
    id: "announcements",
    slug: "mededelingen",
    category: "communication",
    title: "Een mededeling naar je team sturen",
    description: "Een bericht sturen naar iedereen of naar bepaalde afdelingen, functies of locaties, eventueel met een vergaderdatum.",
    path: ["Communicatie", "Mededelingen"],
    sections: [
      {
        heading: "Een mededeling versturen",
        html: `<ol>
<li>Ga naar <span class="ui">Communicatie → Mededelingen</span>.</li>
<li>Vul een <span class="ui">Titel</span> en <span class="ui">Bericht</span> in.</li>
<li>Kies de <span class="ui">Ontvangers</span>: <span class="ui">Alle medewerkers</span>, of een selectie van afdelingen, functies of locaties.</li>
<li>Gaat het om een vergadering, vul dan een <span class="ui">Vergaderdatum (optioneel)</span> in.</li>
<li>Klik op <span class="ui">Mededeling versturen</span>.</li>
</ol>
<p>Ontvangers krijgen een melding. Eerdere berichten staan onder <span class="ui">Verstuurde mededelingen</span>.</p>`,
      },
    ],
    related: ["chat-logbook", "notifications"],
  },
  {
    id: "chat-logbook",
    slug: "chat-en-logboek",
    category: "communication",
    title: "Teamchat en logboek",
    description: "Chatten met het hele team of één afdeling, en dagelijkse overdrachtsnotities bijhouden met andere beheerders.",
    path: ["Communicatie", "Chat · Logboek"],
    sections: [
      {
        heading: "Chat",
        html: `<p>Onder <span class="ui">Communicatie → Chat</span> stuur je een bericht naar het hele team of naar één afdeling. Medewerkers vinden de chat onder <span class="ui">Meer → Chat</span>. Gebruik je geen chat, zet dan <span class="ui">Teamchat</span> uit bij <span class="ui">Instellingen → Geavanceerde opties</span>.</p>`,
      },
      {
        heading: "Logboek",
        html: `<p>Het <span class="ui">Logboek</span> is voor overdrachtsnotities tussen beheerders, per dag. Bijvoorbeeld: "koeling keuken maakt geluid, monteur komt dinsdag". Kies een dag, schrijf een notitie en klik op <span class="ui">Notitie toevoegen</span>. Met de zoekbalk doorzoek je alle notities. Medewerkers zien het logboek niet.</p>`,
      },
    ],
    related: ["announcements", "checklists"],
  },
  {
    id: "checklists",
    slug: "checklists",
    category: "communication",
    title: "Checklists voor openen en sluiten",
    description: "Vaste checklists maken voor begin of einde van de dienst, eenmalige takenlijsten toewijzen en zien wat er is afgevinkt.",
    path: ["Overzicht", "Checklists"],
    sections: [
      {
        heading: "Een checklist maken",
        html: `<ol>
<li>Ga naar <span class="ui">Overzicht → Checklists</span> en klik op <span class="ui">Checklists beheren</span>.</li>
<li>Klik op <span class="ui">Nieuw</span>, vul een <span class="ui">Naam checklist</span> en eventueel een beschrijving in, en klik op <span class="ui">Checklist aanmaken</span>.</li>
<li>Kies het <span class="ui">Tijdstip</span>: <span class="ui">Begin van dienst</span>, <span class="ui">Tijdens dienst</span>, <span class="ui">Einde van dienst</span> of <span class="ui">Altijd</span>.</li>
<li>Voeg taken toe. Via het pijltje bij een taak geef je medewerkers een instructie mee.</li>
</ol>`,
      },
      {
        heading: "Eenmalige taken",
        html: `<p>Voor klussen die één keer moeten gebeuren, maak je onder <span class="ui">Eenmalige taken</span> een takenlijst. Wijs hem toe aan iemand, of laat hem <span class="ui">Niet toegewezen</span> zodat iedereen hem ziet, en kies eventueel een deadline.</p>`,
      },
      {
        heading: "Zien wat er is gedaan",
        html: `<p>Het overzicht toont per week elke ingeleverde checklist: wie hem invulde en hoeveel taken zijn gedaan. Je kunt er een <span class="ui">Beheerdersnotitie</span> bij zetten. Via <span class="ui">Resultaten per checklist</span> zie je de geschiedenis van één lijst.</p>`,
      },
    ],
    related: ["employee-checklists", "chat-logbook"],
  },

  // ─── Instellingen & abonnement ────────────────────────────────────────────
  {
    id: "notifications",
    slug: "meldingen",
    category: "account",
    title: "Meldingen en herinneringen instellen",
    description: "Pushmeldingen voor jezelf aanzetten, en bepalen welke herinneringen je team krijgt over diensten en beschikbaarheid.",
    path: ["Beheer", "Instellingen", "Meldingen"],
    sections: [
      {
        heading: "Meldingen voor jou",
        html: `<p>Ga op het apparaat waarop je meldingen wilt naar <span class="ui">Instellingen → Meldingen</span> en zet <span class="ui">Pushmeldingen inschakelen</span> aan. Op een iPhone moet je de app eerst op je beginscherm zetten. Met <span class="ui">Dienstclaims & ruilverzoeken</span> hoor je meteen als iemand een dienst claimt of wil ruilen.</p>`,
      },
      {
        heading: "Herinneringen voor je team",
        html: `<ul>
<li><span class="ui">Dienstherinnering</span>: elke dag een herinnering aan de dienst van die dag, op een tijd die jij kiest.</li>
<li><span class="ui">Beschikbaarheidsherinnering</span>: een herinnering om beschikbaarheid in te vullen (onder Geavanceerde opties).</li>
</ul>
<p>Medewerkers krijgen daarnaast een melding bij een nieuw rooster, een gewijzigde dienst, ruilverzoeken en vakantie. Ze kiezen zelf welke meldingen ze willen, onder <span class="ui">Meer → Instellingen</span>.</p>`,
      },
    ],
    related: ["settings", "install-app"],
  },
  {
    id: "billing",
    slug: "abonnement",
    category: "account",
    title: "Je abonnement: betalen en opzeggen",
    description: "Na de gratis maand een plan kiezen, betalen met iDEAL en opzeggen wanneer je wilt.",
    path: ["Beheer", "Abonnement"],
    sections: [
      {
        heading: "Betalen",
        html: `<p>De eerste maand is gratis en er wordt niets automatisch afgeschreven. Wil je doorgaan, ga dan naar <span class="ui">Beheer → Abonnement</span>, kies bij <span class="ui">Kies je plan</span> Starter, Pro of Business en klik op <span class="ui">Betalen</span>.</p>
<p>Je betaalt de eerste maand bijvoorbeeld met iDEAL. Daarna wordt het bedrag elke maand automatisch afgeschreven. Betaal je tijdens de proefperiode, dan begint de betaalde maand pas als de proefperiode voorbij is. De factuur krijg je per e-mail.</p>`,
      },
      {
        heading: "Opzeggen",
        html: `<p>Klik op <span class="ui">Abonnement opzeggen</span>. Je kunt Gedekt blijven gebruiken tot het einde van de betaalde periode. Daarna kun je alles nog bekijken, maar niets meer aanpassen.</p>`,
      },
      {
        heading: "Een ander plan",
        html: `<p>Wil je overstappen naar een ander plan? Neem contact op via <span class="ui">Beheer → Ondersteuning</span>, dan regelen we het. Wat er in elk plan zit, zie je op de <a href="/prijzen">prijzenpagina</a>.</p>`,
      },
    ],
    related: ["support"],
  },
  {
    id: "support",
    slug: "hulp-en-support",
    category: "account",
    title: "Hulp vragen, een fout melden of een idee insturen",
    description: "Waar je terechtkunt als je iets niet kunt vinden, iets niet werkt of je een functie mist.",
    path: ["Beheer", "Ondersteuning"],
    sections: [
      {
        heading: "Eerst zoeken",
        html: `<p>De meeste vragen staan in deze handleiding. Zoek op wat je wilt doen, bijvoorbeeld "ruil goedkeuren" of "klokpaal". Dat kan bovenaan de <a href="/handleiding">handleiding</a>, of in de app bovenaan <span class="ui">Beheer → Ondersteuning</span>.</p>`,
      },
      {
        heading: "Een vraag stellen",
        html: `<p>Niet gevonden? Kies onder <span class="ui">Antwoord niet gevonden?</span> voor <span class="ui">Vraag</span> en schrijf wat je wilt weten. Vond de zoekbalk niets, dan zet <span class="ui">Stel deze vraag</span> je zoekwoorden er meteen in. Je krijgt het antwoord per e-mail.</p>`,
      },
      {
        heading: "Een fout melden of een functie aanvragen",
        html: `<p>Kies op dezelfde plek <span class="ui">Bugmelding</span> of <span class="ui">Functieverzoek</span>. Beschrijf bij een fout wat je deed, wat er gebeurde en wat je verwachtte. Je krijgt een ticketnummer. We lezen elk verzoek zelf, dus zo bepaal je mee wat we hierna bouwen.</p>
<p>Liever mailen of bellen? Kijk op de <a href="/contact">contactpagina</a>.</p>`,
      },
    ],
    related: ["setup", "billing"],
  },

  // ─── Voor medewerkers ─────────────────────────────────────────────────────
  {
    id: "install-app",
    slug: "app-installeren",
    category: "employee",
    title: "De app installeren en meldingen aanzetten",
    description: "Je account activeren, Gedekt op je beginscherm zetten en kiezen welke meldingen je krijgt.",
    sections: [
      {
        heading: "Je account activeren",
        html: `<p>Je krijgt een e-mail van Gedekt. Klik op de link en kies een wachtwoord. Kreeg je een tijdelijk wachtwoord van je leidinggevende, dan kies je bij de eerste keer inloggen een eigen wachtwoord.</p>`,
      },
      {
        heading: "Op je beginscherm zetten",
        html: `<p>Gedekt werkt als app zonder app store:</p>
<ul>
<li><strong>iPhone</strong>: open app.gedekt.com in Safari, tik op het deelicoon en kies <em>Zet op beginscherm</em>.</li>
<li><strong>Android</strong>: open app.gedekt.com in Chrome, tik op het menu (drie puntjes) en kies <em>App installeren</em> of <em>Toevoegen aan startscherm</em>.</li>
</ul>`,
      },
      {
        heading: "Meldingen aanzetten",
        html: `<p>Ga naar <span class="ui">Meer → Instellingen</span> en zet <span class="ui">Pushmeldingen</span> aan. Kies bij <span class="ui">Meldingsvoorkeuren</span> waarover je een bericht wilt: roosterwijzigingen, ruilverzoeken, vakantie, herinneringen en de teamchat.</p>
<p>Krijg je geen meldingen op je iPhone? Zet de app dan eerst op je beginscherm, en controleer of meldingen voor Gedekt aanstaan in de instellingen van je telefoon.</p>
<p>Daar kies je ook de <span class="ui">Taal</span> en de <span class="ui">Donkere modus</span>.</p>`,
      },
    ],
    related: ["give-availability", "view-schedule"],
  },
  {
    id: "give-availability",
    slug: "beschikbaarheid-doorgeven",
    category: "employee",
    title: "Je beschikbaarheid doorgeven",
    description: "Je vaste beschikbaarheid instellen, één week anders invullen, en een voorkeursdag of notitie toevoegen.",
    path: ["Beschikbaar"],
    sections: [
      {
        heading: "Je standaardweek",
        html: `<p>Tik onderin op <span class="ui">Beschikbaar</span>. Op het tabblad <span class="ui">Standaard beschikbaarheid</span> geef je aan wanneer je normaal kunt werken. Afhankelijk van je zaak vul je per dag een begin- en eindtijd in, of vink je de diensten aan die je kunt draaien. Dit geldt elke week, tot je het wijzigt.</p>
<p>Markeer een dag <span class="ui">Als voorkeur</span> als je dan graag werkt, kies eventueel een <span class="ui">Voorkeur dienst</span> en voeg een notitie toe.</p>`,
      },
      {
        heading: "Eén week anders",
        html: `<p>Kun je één week anders, bijvoorbeeld door een afspraak? Ga naar het tabblad <span class="ui">Week overschrijving</span>, kies de week en pas alleen die dagen aan. Je standaardweek blijft gewoon staan.</p>`,
      },
      {
        heading: "\"Deze week is vergrendeld\"",
        html: `<p>Is je leidinggevende al met het rooster bezig, dan kun je die weken niet meer wijzigen. Moet er toch iets veranderen? Neem contact op met je leidinggevende. Hoe eerder je je beschikbaarheid invult, hoe beter het rooster rekening met je kan houden.</p>`,
      },
    ],
    related: ["view-schedule", "request-leave"],
  },
  {
    id: "view-schedule",
    slug: "rooster-bekijken",
    category: "employee",
    title: "Je rooster bekijken en in je agenda zetten",
    description: "Je diensten per week of maand zien, briefings lezen, en je rooster automatisch in Google Agenda of Apple Agenda zetten.",
    path: ["Rooster"],
    sections: [
      {
        heading: "Je rooster",
        html: `<p>Op <span class="ui">Vandaag</span> zie je je aankomende diensten. Onder <span class="ui">Rooster</span> zie je je diensten per week of per maand. Je ziet alleen gepubliceerde diensten. Staat er een briefing bij een dienst, dan kun je die openen.</p>`,
      },
      {
        heading: "In je eigen agenda",
        html: `<p>Ga naar <span class="ui">Meer → Instellingen</span> en kies bij <span class="ui">Abonneren op agenda</span>:</p>
<ul>
<li><strong>iPhone</strong>: tik op <span class="ui">Openen in Agenda</span>.</li>
<li><strong>Android of Google Agenda</strong>: tik op <span class="ui">Agendalink kopiëren</span> en voeg de link toe in Google Agenda (Andere agenda's → Via URL).</li>
</ul>
<p>Je diensten blijven daarna vanzelf bijgewerkt.</p>`,
      },
    ],
    related: ["swap-shift", "give-availability"],
  },
  {
    id: "swap-shift",
    slug: "dienst-ruilen",
    category: "employee",
    title: "Een dienst ruilen of aan een collega geven",
    description: "Een dienst die je niet kunt werken ruilen, overdragen of aanbieden aan het hele team.",
    path: ["Meer", "Diensten"],
    sections: [
      {
        heading: "Een dienst aanbieden",
        html: `<ol>
<li>Ga naar <span class="ui">Meer → Diensten</span> en tik op de dienst.</li>
<li>Kies hoe:
<ul>
<li><span class="ui">Open ruil</span>: iedereen kan reageren met een dienst in ruil.</li>
<li><span class="ui">Open overdracht</span>: iedereen kan de dienst overnemen.</li>
<li><span class="ui">Geef aan collega</span>: direct aan één persoon.</li>
<li><span class="ui">Ruil met collega</span>: kies een collega en een dienst van die collega.</li>
</ul></li>
<li>Voeg eventueel een notitie toe en tik op <span class="ui">Bevestigen</span>.</li>
</ol>`,
      },
      {
        heading: "Wat er daarna gebeurt",
        html: `<p>Accepteert een collega, dan gaat het verzoek naar je leidinggevende, tenzij je zaak dit automatisch goedkeurt. Tot die tijd blijft de dienst van jou. Je krijgt een melding zodra het rond is.</p>
<p>Al je verzoeken staan onder <span class="ui">Meer → Aanvragen</span>. Daar kun je een verzoek <span class="ui">Intrekken</span>, en verzoeken van collega's aan jou <span class="ui">Accepteren</span> of <span class="ui">Afwijzen</span>.</p>`,
      },
    ],
    related: ["claim-shift", "report-sick"],
  },
  {
    id: "claim-shift",
    slug: "open-dienst-claimen",
    category: "employee",
    title: "Een open dienst oppakken",
    description: "Extra werken door een open dienst te claimen of een dienst van een collega over te nemen.",
    path: ["Meer", "Diensten"],
    sections: [
      {
        heading: "Open diensten",
        html: `<p>Onder <span class="ui">Meer → Diensten</span> staan de open diensten. Tik op <span class="ui">Claimen</span>. Krijg je een waarschuwing, bijvoorbeeld omdat je die dag niet beschikbaar was, lees die dan eerst. Je kunt daarna nog kiezen voor <span class="ui">Toch claimen</span>.</p>`,
      },
      {
        heading: "Diensten van collega's",
        html: `<p>Bij <span class="ui">Aangeboden door collega's</span> tik je op <span class="ui">Overnemen</span>. Bij <span class="ui">Open ruilaanbiedingen</span> tik je op <span class="ui">Reageren</span> en kies je een van jouw diensten om te ruilen.</p>
<p>Soms is de dienst meteen van jou, soms keurt je leidinggevende hem eerst goed. Je krijgt in beide gevallen een melding.</p>`,
      },
    ],
    related: ["swap-shift", "view-schedule"],
  },
  {
    id: "report-sick",
    slug: "ziek-melden",
    category: "employee",
    title: "Je ziek melden",
    description: "Je ziek melden voor een dienst, zodat je leidinggevende het meteen weet en een collega de dienst kan overnemen.",
    path: ["Meer", "Diensten"],
    sections: [
      {
        heading: "Zo meld je je ziek",
        html: `<ol>
<li>Ga naar <span class="ui">Meer → Diensten</span> en tik op de dienst.</li>
<li>Kies <span class="ui">Ziek melden</span>.</li>
<li>Schrijf eventueel een notitie voor je leidinggevende en bevestig.</li>
</ol>
<p>Je leidinggevende krijgt meteen een melding en de dienst komt vrij, zodat een collega hem kan overnemen.</p>
<p class="tip">Heeft je zaak afspraken over ziekmelden, zoals ook even bellen? Houd je daar ook aan.</p>`,
      },
    ],
    related: ["swap-shift", "request-leave"],
  },
  {
    id: "request-leave",
    slug: "vakantie-aanvragen",
    category: "employee",
    title: "Vakantie aanvragen",
    description: "Vrij vragen via de app, de status volgen en zien hoeveel vakantiedagen je nog hebt.",
    path: ["Meer", "Vakantie"],
    sections: [
      {
        heading: "Een aanvraag doen",
        html: `<ol>
<li>Ga naar <span class="ui">Meer → Vakantie</span> en tik op <span class="ui">Vakantie aanvragen</span>.</li>
<li>Kies <span class="ui">Van</span> en <span class="ui">Tot</span> en schrijf eventueel een reden.</li>
<li>Verstuur de aanvraag.</li>
</ol>
<p>Je krijgt een melding als je leidinggevende hem heeft goedgekeurd of afgewezen. Een aanvraag die nog in behandeling is, kun je annuleren. Houdt je zaak vakantiedagen bij, dan zie je hoeveel je er nog hebt.</p>`,
      },
    ],
    related: ["give-availability", "report-sick"],
  },
  {
    id: "clock-in-out",
    slug: "in-en-uitklokken",
    category: "employee",
    title: "In- en uitklokken",
    description: "Klokken op de klokpaal of op je telefoon, en wat je doet als je vergat te klokken.",
    sections: [
      {
        heading: "Op de klokpaal",
        html: `<p>Zoek je naam op de tablet of tik erop, en kies <span class="ui">Inklokken</span>. Aan het eind van je dienst doe je hetzelfde en kies je <span class="ui">Uitklokken</span>. Vraagt het scherm iets, zoals je pauze of of je hebt meegegeten, vul dat dan in.</p>`,
      },
      {
        heading: "Op je telefoon",
        html: `<p>Staat dat aan bij je zaak, dan zie je onderin <span class="ui">Klokken</span>. Tik daar op inklokken als je begint en op uitklokken als je klaar bent. Inklokken wordt naar boven afgerond op het kwartier, uitklokken naar beneden.</p>`,
      },
      {
        heading: "Vergeten te klokken?",
        html: `<p>Vraag een correctie aan. Zie <a href="/handleiding/uren-en-correcties">Je uren bekijken en een correctie aanvragen</a>.</p>`,
      },
    ],
    related: ["hours-corrections", "view-schedule"],
  },
  {
    id: "hours-corrections",
    slug: "uren-en-correcties",
    category: "employee",
    title: "Je uren bekijken en een correctie aanvragen",
    description: "Je gewerkte uren per week zien en een correctie aanvragen als je vergat in of uit te klokken.",
    path: ["Meer", "Uren"],
    sections: [
      {
        heading: "Je uren",
        html: `<p>Onder <span class="ui">Meer → Uren</span> zie je per week je diensten met de uren die je hebt <span class="ui">Gewerkt</span>, wat er <span class="ui">Gepland</span> was en het <span class="ui">Verschil</span>.</p>`,
      },
      {
        heading: "Een correctie aanvragen",
        html: `<p>Klopt er iets niet, bijvoorbeeld omdat je vergat uit te klokken? Tik bij die dienst op <span class="ui">Correctie aanvragen</span>, vul de juiste tijden in en beantwoord eventuele vragen over pauze of maaltijd. Je leidinggevende keurt de correctie goed. Je ziet de status bij de dienst.</p>`,
      },
    ],
    related: ["clock-in-out"],
  },
  {
    id: "employee-checklists",
    slug: "checklist-invullen",
    category: "employee",
    title: "Een checklist afvinken",
    description: "Taken voor het openen of sluiten afvinken en de checklist inleveren.",
    path: ["Checklist"],
    sections: [
      {
        heading: "Zo werkt het",
        html: `<p>Tik onderin op <span class="ui">Checklist</span> (of onder <span class="ui">Meer</span>, als je zaak klokken met de telefoon gebruikt). Tik op <span class="ui">Start</span> bij een checklist, vink de taken af terwijl je werkt en voeg eventueel een notitie toe. Tik daarna op <span class="ui">Checklist verzenden</span>. Je leidinggevende ziet wat er is gedaan.</p>
<p>Eenmalige taken die aan jou zijn toegewezen, staan er ook, met een eventuele deadline.</p>`,
      },
    ],
    related: ["clock-in-out"],
  },
];

export const nlManual: ManualArticle[] = articles.map((a) => ({ ...a, lang: "nl" }));

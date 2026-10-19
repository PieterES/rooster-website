import type { Guide } from "../guides";

const updated = "2026-10-17";

export const nlGuides: Guide[] = [
  {
    id: "schedule",
    lang: "nl",
    slug: "horeca-rooster-maken",
    title: "Een horecarooster maken: stappenplan in 7 stappen",
    metaTitle: "Horeca rooster maken: stappenplan + tips",
    description:
      "Zo maak je een eerlijk en kloppend rooster voor je restaurant, café of hotel. Stap voor stap: van bezetting bepalen tot publiceren en ruilen.",
    updated,
    intro:
      "Een goed horecarooster zorgt dat elke dienst gedekt is, dat je niet te veel uren betaalt en dat je team weet waar het aan toe is. Toch kost roosteren in veel zaken elke week uren. Met dit stappenplan maak je een rooster dat klopt — op papier, in Excel of in een rooster app.",
    sections: [
      {
        heading: "1. Bepaal per dag hoeveel mensen je nodig hebt",
        html: `<p>Begin niet bij je medewerkers, maar bij je bezetting. Kijk per dag en per dagdeel naar je omzet of het aantal couverts van dezelfde week vorig jaar, reserveringen, het weer en evenementen in de buurt.</p>
<p>Vertaal dat naar diensten: hoeveel mensen heb je nodig in de bediening, achter de bar en in de keuken, en van hoe laat tot hoe laat? Een dinsdagmiddag vraagt iets anders dan een zaterdagavond met terras.</p>`,
      },
      {
        heading: "2. Leg vaste diensten en functies vast",
        html: `<p>De meeste weken lijken op elkaar. Leg daarom vaste diensten vast — bijvoorbeeld <em>bediening avond 17:00–23:00</em> of <em>keuken lunch 10:30–15:30</em> — en koppel aan elke dienst de functie die nodig is: zelfstandig werkend kok, barhoofd, runner.</p>
<p>Zo voorkom je dat er op zaterdag drie runners en geen leidinggevende staan. In Gedekt doe je dit één keer via <a href="/hoe-het-werkt/afdelingen-en-functies">afdelingen en functies</a> en <a href="/hoe-het-werkt/vaste-diensten">vaste diensten</a>.</p>`,
      },
      {
        heading: "3. Verzamel beschikbaarheid op tijd",
        html: `<p>Vraag je team om hun beschikbaarheid uiterlijk een week voordat je het rooster maakt door te geven. Publiceer je drie weken vooruit (zoals de cao Horeca vraagt), dan verzamel je beschikbaarheid dus ongeveer vier weken vooruit. Spreek een vaste deadline af, bijvoorbeeld elke maandag om 12:00. Wie te laat is, wordt ingeroosterd op basis van zijn standaardbeschikbaarheid.</p>
<p>Werk met twee niveaus: <strong>kan</strong> en <strong>liever</strong>. Dan weet je niet alleen wie beschikbaar is, maar ook wie graag wil werken. Lees meer in <a href="/beschikbaarheid-personeel-bijhouden">beschikbaarheid van personeel bijhouden</a>.</p>`,
      },
      {
        heading: "4. Zet eerst je vaste krachten in",
        html: `<p>Medewerkers met een vast contract en vaste dagen zet je als eerste op het rooster. Daarna vul je de overige diensten met parttimers, oproepkrachten en flexwerkers. Let daarbij op contracturen: wie 24 uur heeft, moet ook ongeveer 24 uur krijgen.</p>`,
      },
      {
        heading: "5. Controleer wet- en regelgeving",
        html: `<p>Een rooster moet voldoen aan de <a href="/arbeidstijdenwet-horeca">Arbeidstijdenwet</a>: maximaal 12 uur per dienst, minimaal 11 uur rust tussen twee diensten en voldoende pauze. Voor jongeren onder de 18 gelden strengere regels — zie <a href="/jongeren-werktijden-horeca">werktijden voor jongeren in de horeca</a>.</p>
<p>Werk je met oproepkrachten? Dan moet je ze in principe minimaal 4 dagen van tevoren oproepen. Meer daarover in <a href="/oproepkrachten-inroosteren">oproepkrachten inroosteren</a>.</p>`,
      },
      {
        heading: "6. Check je loonkosten",
        html: `<p>Tel voor je publiceert de geplande uren op en vermenigvuldig ze met het uurloon (inclusief werkgeverslasten). Vergelijk dat met je verwachte omzet. Zit je ruim boven je doel, kijk dan of je diensten kunt inkorten of later laten beginnen. Zie ook <a href="/loonkosten-horeca-berekenen">loonkosten in de horeca berekenen</a>.</p>`,
      },
      {
        heading: "7. Publiceer op een vast moment — en regel ruilen",
        html: `<p>Publiceer het rooster altijd op hetzelfde moment. Valt je zaak onder de cao Horeca, dan moet je de werkdagen en -tijden <strong>minimaal drie weken van tevoren</strong> bekendmaken; doe je dat later, dan mag de medewerker de uren weigeren. Zorg dat iedereen het op zijn telefoon kan zien, en spreek af hoe ruilen werkt: via een vast kanaal en altijd met jouw akkoord. Lees hoe je dat regelt in <a href="/diensten-ruilen">diensten ruilen zonder chaos</a>.</p>`,
      },
      {
        heading: "Sneller: laat het rooster automatisch maken",
        html: `<p>Stap 3 tot en met 6 zijn precies het werk dat een computer beter kan dan een mens. In Gedekt staan je vaste krachten er al op, en vult de roostermotor de rest in op basis van beschikbaarheid, functie en contracturen. Daarna publiceer je, en krijgt je team direct een melding. <a href="/hoe-het-werkt/rooster-maken">Bekijk in 30 seconden hoe dat werkt</a>.</p>`,
      },
    ],
    faq: [
      {
        q: "Hoe ver vooruit moet een horecarooster bekend zijn?",
        a: "Volgens de cao Horeca moet je de werkdagen en -tijden minimaal drie weken van tevoren bekendmaken; anders mag de medewerker weigeren. De wet zelf noemt voor oproepkrachten een oproeptermijn van minimaal 4 dagen. Controleer welke cao voor jouw zaak geldt.",
      },
      {
        q: "Hoeveel tijd kost het maken van een horecarooster?",
        a: "Met de hand of in Excel kost een weekrooster voor een team van 15 tot 25 mensen vaak 2 tot 4 uur. Met een rooster app die automatisch invult is dat terug te brengen tot enkele minuten controleren.",
      },
      {
        q: "Wat is de beste manier om beschikbaarheid te verzamelen?",
        a: "Laat medewerkers hun beschikbaarheid zelf invullen in een app, met een vaste deadline per week. Dat voorkomt losse appjes en vergeten berichten.",
      },
    ],
    related: ["working-time-act", "availability", "excel", "choosing-software"],
  },

  {
    id: "working-time-act",
    lang: "nl",
    slug: "arbeidstijdenwet-horeca",
    title: "Arbeidstijdenwet in de horeca: pauzes, rusttijden en maximale werktijden",
    metaTitle: "Arbeidstijdenwet horeca: pauze, rusttijden & werktijden",
    description:
      "Hoe lang mag een dienst duren? Hoeveel pauze is verplicht? Alle regels uit de Arbeidstijdenwet voor horecaroosters op een rij, met voorbeelden.",
    updated,
    intro:
      "De Arbeidstijdenwet (ATW) bepaalt hoe lang je medewerkers mogen werken en hoeveel rust ze moeten krijgen. Voor horecaroosters met late avonden, dubbele diensten en drukke weekenden is dat geen detail. Dit zijn de regels voor medewerkers van 18 jaar en ouder.",
    sections: [
      {
        heading: "Maximale werktijd per dienst en per week",
        html: `<ul>
<li><strong>Per dienst:</strong> maximaal 12 uur.</li>
<li><strong>Per week:</strong> maximaal 60 uur.</li>
<li><strong>Gemiddeld over 4 weken:</strong> maximaal 55 uur per week.</li>
<li><strong>Gemiddeld over 16 weken:</strong> maximaal 48 uur per week.</li>
</ul>
<p>Een medewerker mag dus best eens een week van 55 uur draaien in het hoogseizoen, zolang het gemiddelde over 16 weken onder de 48 uur blijft.</p>`,
      },
      {
        heading: "Verplichte pauze",
        html: `<ul>
<li><strong>Meer dan 5,5 uur werken:</strong> minimaal 30 minuten pauze. Die mag je opsplitsen in twee keer 15 minuten.</li>
<li><strong>Meer dan 10 uur werken:</strong> minimaal 45 minuten pauze, op te splitsen in blokken van minimaal 15 minuten.</li>
</ul>
<p>Of de pauze betaald wordt, staat niet in de wet maar in je cao of arbeidscontract. Plan de pauze in het rooster zodat er altijd iemand op de vloer staat — anders schiet hij er op een drukke avond bij in.</p>`,
      },
      {
        heading: "Rusttijd tussen twee diensten",
        html: `<p>Tussen twee diensten zit minimaal <strong>11 uur aaneengesloten rust</strong>. Eén keer per 7 dagen mag dat worden ingekort tot 8 uur, als de aard van het werk dat nodig maakt.</p>
<p><strong>Voorbeeld:</strong> wie sluit om 01:00, mag de volgende dag op zijn vroegst om 12:00 beginnen. De klassieke "sluiten en openen" (tot 01:00 werken en om 09:00 weer beginnen) mag dus hooguit één keer per week.</p>`,
      },
      {
        heading: "Wekelijkse rust",
        html: `<p>Per 7 dagen heeft een medewerker recht op minimaal <strong>36 uur aaneengesloten rust</strong>. Je mag dit ook per 14 dagen regelen: dan is het 72 uur, die je mag opsplitsen in blokken van minimaal 32 uur.</p>`,
      },
      {
        heading: "Nachtdiensten",
        html: `<p>Een dienst is een nachtdienst als er meer dan een uur van tussen 00:00 en 06:00 valt. Voor sluitdiensten in cafés en clubs is dat al snel het geval. Daarvoor gelden extra regels:</p>
<ul>
<li>Een nachtdienst duurt in principe maximaal 10 uur.</li>
<li>Na een nachtdienst die na 02:00 eindigt, volgt minimaal 14 uur rust (één keer per week in te korten tot 8 uur).</li>
<li>Na een reeks van 3 of meer nachtdiensten volgt minimaal 46 uur rust.</li>
<li>Er zijn maxima voor het aantal nachtdiensten per periode van 16 weken.</li>
</ul>`,
      },
      {
        heading: "Werken op zondag",
        html: `<p>In de horeca is werken op zondag normaal, maar het moet wel in het arbeidscontract of de cao zijn afgesproken. Medewerkers die op zondag werken, hebben in principe recht op minimaal 13 vrije zondagen per jaar, tenzij anders is afgesproken.</p>`,
      },
      {
        heading: "Registratie: werkgever moet het kunnen aantonen",
        html: `<p>Als werkgever ben je verplicht de arbeids- en rusttijden van je medewerkers te registreren en die registratie te bewaren. De Nederlandse Arbeidsinspectie kan erom vragen. Een rooster alleen is daarvoor niet genoeg: het gaat om de werkelijk gewerkte tijden. Lees meer in <a href="/urenregistratie-horeca">urenregistratie in de horeca</a>.</p>`,
      },
      {
        heading: "Let op: cao en uitzonderingen",
        html: `<p>Deze gids geeft de hoofdregels uit de wet. Je cao kan aanvullende afspraken bevatten, en voor jongeren gelden strengere regels — zie <a href="/jongeren-werktijden-horeca">werktijden voor jongeren</a>. Controleer de actuele regels altijd op <a href="https://www.rijksoverheid.nl/onderwerpen/werktijden" rel="noopener" target="_blank">rijksoverheid.nl</a> of bij je brancheorganisatie.</p>`,
      },
    ],
    faq: [
      {
        q: "Hoe lang mag een dienst in de horeca maximaal duren?",
        a: "Volgens de Arbeidstijdenwet maximaal 12 uur per dienst voor medewerkers van 18 jaar en ouder. Voor een nachtdienst is dat in principe maximaal 10 uur, en voor 16- en 17-jarigen maximaal 9 uur.",
      },
      {
        q: "Hoeveel pauze heb je recht op bij een dienst van 6 uur?",
        a: "Bij meer dan 5,5 uur werken heb je recht op minimaal 30 minuten pauze. Die mag worden opgesplitst in twee pauzes van 15 minuten.",
      },
      {
        q: "Hoeveel uur rust moet er tussen twee diensten zitten?",
        a: "Minimaal 11 uur aaneengesloten. Eén keer per week mag dat worden ingekort tot 8 uur. Na een nachtdienst die na 02:00 eindigt geldt minimaal 14 uur rust.",
      },
      {
        q: "Mag ik sluiten en de volgende ochtend weer openen?",
        a: "Alleen als er minimaal 11 uur tussen zit, of 8 uur als je de ingekorte rusttijd gebruikt. Die mag maar één keer per 7 dagen.",
      },
    ],
    related: ["young-workers", "on-call", "hours", "schedule"],
  },

  {
    id: "on-call",
    lang: "nl",
    slug: "oproepkrachten-inroosteren",
    title: "Oproepkrachten inroosteren in de horeca: de regels",
    metaTitle: "Oproepkrachten horeca: oproeptermijn, regels & roosteren",
    description:
      "Oproepkracht in de horeca inroosteren? Dit zijn de regels: 4 dagen oproeptermijn, loon bij afzeggen, minimaal 3 uur betalen en een aanbod voor vaste uren na 12 maanden.",
    updated,
    intro:
      "Oproepkrachten zijn onmisbaar in de horeca: ze vangen drukte op en maken het mogelijk om flexibel te roosteren. Maar sinds de Wet arbeidsmarkt in balans (WAB) gelden er duidelijke regels voor hoe en wanneer je ze oproept. Wie die negeert, betaalt uren die niet gewerkt zijn.",
    sections: [
      {
        heading: "Wie telt als oproepkracht?",
        html: `<p>Een oproepkracht is iemand met een nulurencontract, een min-maxcontract of een contract waarin de werktijden niet vastliggen. Ook een parttimer met een vast aantal uren, maar zonder vaste dagen of tijden, valt voor de oproepregels vaak in deze categorie.</p>`,
      },
      {
        heading: "Oproeptermijn: minimaal 4 dagen van tevoren",
        html: `<p>Je moet een oproepkracht minimaal <strong>4 dagen van tevoren</strong> schriftelijk of elektronisch oproepen. Een appje of een gepubliceerd rooster in een app telt. Roep je later op, dan mag de medewerker weigeren, zonder gevolgen.</p>
<p>Een cao mag deze termijn verkorten tot minimaal 24 uur. Kijk dus wat jouw cao zegt.</p>
<p><strong>Praktisch gevolg:</strong> publiceer je rooster ruim op tijd. Wie op vrijdag het rooster voor maandag rondstuurt, zit al binnen de 4 dagen.</p>`,
      },
      {
        heading: "Afzeggen binnen 4 dagen? Dan betaal je toch",
        html: `<p>Zeg je een oproep binnen 4 dagen voor de dienst af, of verander je de tijden, dan heeft de oproepkracht recht op het loon voor de oorspronkelijke dienst. Ook dit kan in de cao korter zijn afgesproken.</p>`,
      },
      {
        heading: "Minimaal 3 uur loon per oproep",
        html: `<p>Heeft de medewerker een contract van minder dan 15 uur per week zonder vaste werktijden, of een nulurencontract? Dan betaal je per oproep minimaal 3 uur loon, ook als de dienst korter duurt. Een dienst van 2 uur om de lunchpiek op te vangen kost dus 3 uur loon.</p>`,
      },
      {
        heading: "Na 12 maanden: aanbod voor vaste uren",
        html: `<p>Werkt een oproepkracht 12 maanden bij je, dan moet je binnen een maand een contract aanbieden met een vast aantal uren. Dat aantal is minimaal het gemiddelde van de afgelopen 12 maanden. De medewerker hoeft het aanbod niet aan te nemen. Doe je geen aanbod, dan heeft de medewerker alsnog recht op loon over dat gemiddelde.</p>
<p>Houd daarom per medewerker bij hoeveel uur er gemiddeld gewerkt is. Een <a href="/urenregistratie-horeca">urenregistratie</a> maakt dat eenvoudig.</p>`,
      },
      {
        heading: "Hogere WW-premie voor flexcontracten",
        html: `<p>Voor medewerkers zonder vast contract met vaste uren betaal je een hogere WW-premie dan voor medewerkers met een vast contract. Vaste uren aanbieden aan je vaste oproepkrachten kan dus ook financieel aantrekkelijk zijn.</p>`,
      },
      {
        heading: "Nieuwe regels in aantocht",
        html: `<p>Er ligt wetgeving klaar om nulurencontracten grotendeels te vervangen door zogenoemde basiscontracten. Houd de actuele stand van zaken in de gaten via <a href="https://www.rijksoverheid.nl" rel="noopener" target="_blank">rijksoverheid.nl</a> of je brancheorganisatie.</p>`,
      },
      {
        heading: "Oproepkrachten slim inroosteren",
        html: `<ul>
<li>Laat oproepkrachten zelf hun beschikbaarheid doorgeven, zodat je alleen mensen oproept die kunnen.</li>
<li>Publiceer ruim vooruit — de cao Horeca vraagt drie weken — zodat je altijd binnen de oproeptermijn zit.</li>
<li>Zet open diensten uit die oproepkrachten zelf kunnen claimen — jij keurt goed.</li>
</ul>
<p>In Gedekt geven medewerkers hun beschikbaarheid door in de app, kunnen ze <a href="/hoe-het-werkt/claims-en-ruilverzoeken">open diensten claimen</a> en zie je per medewerker de gewerkte uren.</p>`,
      },
    ],
    faq: [
      {
        q: "Hoe ver van tevoren moet je een oproepkracht oproepen?",
        a: "Minimaal 4 dagen van tevoren, schriftelijk of elektronisch. Een cao kan dit verkorten tot minimaal 24 uur. Roep je later op, dan mag de oproepkracht weigeren.",
      },
      {
        q: "Moet ik een oproepkracht betalen als ik de dienst afzeg?",
        a: "Ja, als je binnen 4 dagen voor de dienst afzegt of de tijden wijzigt, heeft de oproepkracht recht op loon voor de oorspronkelijke dienst, tenzij je cao een kortere termijn noemt.",
      },
      {
        q: "Hoeveel uur moet ik een oproepkracht minimaal betalen?",
        a: "Bij een contract van minder dan 15 uur per week zonder vaste werktijden, of een nulurencontract, minimaal 3 uur loon per oproep.",
      },
    ],
    related: ["working-time-act", "availability", "seasonal", "hours"],
  },

  {
    id: "young-workers",
    lang: "nl",
    slug: "jongeren-werktijden-horeca",
    title: "Jongeren in de horeca: hoe lang mag een 13- tot 17-jarige werken?",
    metaTitle: "Hoe lang mag een 15, 16 of 17-jarige werken in de horeca?",
    description:
      "Werktijden voor jongeren in de horeca: hoeveel uur per dag en week een 13-, 14-, 15-, 16- of 17-jarige mag werken, tot hoe laat, en hoeveel pauze verplicht is.",
    updated,
    intro:
      "Veel horecazaken draaien mede op scholieren. Voor medewerkers onder de 18 gelden strengere regels dan voor volwassenen: kortere diensten, meer rust en geen nachtwerk. Dit zijn de regels per leeftijd.",
    sections: [
      {
        heading: "16- en 17-jarigen",
        html: `<ul>
<li><strong>Per dienst:</strong> maximaal 9 uur.</li>
<li><strong>Per week:</strong> maximaal 45 uur, en gemiddeld maximaal 40 uur per week over 4 weken.</li>
<li><strong>Niet tussen 23:00 en 06:00</strong> — geen nachtwerk dus.</li>
<li><strong>Rust:</strong> minimaal 12 uur aaneengesloten per 24 uur, inclusief de periode tussen 23:00 en 06:00.</li>
<li><strong>Wekelijkse rust:</strong> minimaal 36 uur aaneengesloten per 7 dagen.</li>
<li><strong>Pauze:</strong> bij meer dan 4,5 uur werken minimaal 30 minuten, op te splitsen in blokken van minimaal 15 minuten.</li>
</ul>
<p><strong>Gevolg voor je rooster:</strong> een 17-jarige kan niet mee sluiten als je tot na 23:00 open bent. Plan hen in de vroege avonddienst en laat een volwassen collega afsluiten.</p>`,
      },
      {
        heading: "15-jarigen",
        html: `<ul>
<li><strong>Op schooldagen:</strong> maximaal 2 uur per dag.</li>
<li><strong>Op niet-schooldagen</strong> (zoals zaterdag): maximaal 8 uur per dag.</li>
<li><strong>In een schoolweek:</strong> maximaal 12 uur.</li>
<li><strong>In de vakantie:</strong> maximaal 8 uur per dag en 40 uur per week.</li>
<li><strong>Niet tussen 19:00 en 07:00.</strong></li>
</ul>
<p>15-jarigen mogen alleen licht, niet-industrieel werk doen. Werk met gevaarlijke keukenapparatuur valt daar niet onder.</p>`,
      },
      {
        heading: "13- en 14-jarigen",
        html: `<p>Voor 13- en 14-jarigen is de ruimte beperkt: alleen licht, niet-industrieel werk, en zeker niet tussen 19:00 en 07:00. Op schooldagen maximaal 2 uur, op niet-schooldagen maximaal 7 uur, in een schoolweek maximaal 12 uur en in de vakantie maximaal 7 uur per dag en 35 uur per week. Denk aan eenvoudige hulptaken, niet aan zelfstandig bedienen of in de keuken staan.</p>`,
      },
      {
        heading: "Alcohol schenken",
        html: `<p>Naast de werktijden gelden er regels uit de Alcoholwet over wie alcohol mag schenken en wie er als leidinggevende aanwezig moet zijn. Controleer die apart als je jongeren achter de bar zet.</p>`,
      },
      {
        heading: "Zo voorkom je fouten in het rooster",
        html: `<ul>
<li>Registreer van elke medewerker de geboortedatum, en let op verjaardagen: wie 18 wordt, mag vanaf dat moment langer werken.</li>
<li>Maak aparte diensten voor jongeren, bijvoorbeeld een avonddienst tot 22:30 in plaats van tot sluit.</li>
<li>Plan jongeren niet op schooldagen voor lange diensten, ook niet als ze dat zelf willen.</li>
</ul>
<p>De regels voor volwassenen staan in <a href="/arbeidstijdenwet-horeca">Arbeidstijdenwet in de horeca</a>. Controleer de actuele regels altijd op <a href="https://www.rijksoverheid.nl/onderwerpen/jongeren-en-werk" rel="noopener" target="_blank">rijksoverheid.nl</a>.</p>`,
      },
    ],
    faq: [
      {
        q: "Tot hoe laat mag een 16-jarige werken in de horeca?",
        a: "Tot 23:00. Jongeren van 16 en 17 jaar mogen niet werken tussen 23:00 en 06:00.",
      },
      {
        q: "Hoeveel uur mag een 15-jarige werken op een zaterdag?",
        a: "Op een niet-schooldag zoals zaterdag maximaal 8 uur, en niet tussen 19:00 en 07:00.",
      },
      {
        q: "Hoeveel pauze krijgt een 17-jarige?",
        a: "Bij meer dan 4,5 uur werken minimaal 30 minuten pauze, op te splitsen in blokken van minimaal 15 minuten.",
      },
    ],
    related: ["working-time-act", "schedule", "cafe-bar"],
  },

  {
    id: "excel",
    lang: "nl",
    slug: "rooster-maken-in-excel",
    title: "Rooster maken in Excel: wanneer het werkt en wanneer niet",
    metaTitle: "Rooster maken in Excel? Tips + het betere alternatief",
    description:
      "Een personeelsrooster in Excel of Google Sheets: zo zet je het op, waar het misgaat, en wanneer een rooster app goedkoper is dan je eigen uren.",
    updated,
    intro:
      "Bijna elke horecazaak begint met een rooster in Excel of Google Sheets. Het is gratis, iedereen kent het, en je kunt alles zelf bepalen. Maar naarmate je team groeit, gaat Excel steeds meer tijd kosten. Hoe haal je er het meeste uit, en wanneer is het tijd om over te stappen?",
    sections: [
      {
        heading: "Zo zet je een goed Excel-rooster op",
        html: `<ol>
<li><strong>Eén tabblad per week</strong>, met de dagen als kolommen en de diensten als rijen (bijvoorbeeld "Bar avond 17–01").</li>
<li><strong>Een apart tabblad met medewerkers</strong>: naam, functie, contracturen, uurloon en geboortedatum.</li>
<li><strong>Keuzelijsten</strong> (gegevensvalidatie) per cel, zodat je alleen bestaande namen kunt invullen.</li>
<li><strong>Een telling per medewerker</strong> met <code>AANTAL.ALS</code> of <code>SOM.ALS</code>, zodat je ziet of iemand aan zijn contracturen komt.</li>
<li><strong>Voorwaardelijke opmaak</strong> om lege diensten rood te kleuren.</li>
</ol>`,
      },
      {
        heading: "Waar Excel tekortschiet",
        html: `<ul>
<li><strong>Beschikbaarheid</strong> komt binnen via losse appjes en moet je overtypen.</li>
<li><strong>Ruilen</strong> gaat buiten het rooster om; het bestand loopt achter op de werkelijkheid.</li>
<li><strong>Versies:</strong> "rooster_week42_DEF_v3.xlsx" — wie heeft de laatste?</li>
<li><strong>Regels</strong> zoals rusttijden en jongerenregels moet je zelf in de gaten houden.</li>
<li><strong>Op de telefoon</strong> is een spreadsheet slecht leesbaar, dus je team maakt een screenshot die direct verouderd is.</li>
<li><strong>Gewerkte uren</strong> en loonkosten staan nergens, dus aan het eind van de maand begint het uitzoeken.</li>
</ul>`,
      },
      {
        heading: "Rekensom: wat kost je Excel-rooster echt?",
        html: `<p>Stel: je bent elke week 3 uur kwijt aan het rooster maken, beschikbaarheid verzamelen en ruilen regelen. Dat is ruim 150 uur per jaar. Zelfs als je je eigen uur maar op €25 waardeert, kost dat ruim €3.900 per jaar.</p>
<p>Een rooster app als Gedekt kost <a href="/prijzen">vanaf €10 per maand</a>, met een vaste prijs in plaats van een prijs per medewerker.</p>`,
      },
      {
        heading: "Wanneer overstappen?",
        html: `<p>Excel is prima als je met 3 tot 5 vaste mensen werkt met steeds dezelfde diensten. Zodra een of meer van deze dingen gelden, verdien je een rooster app snel terug:</p>
<ul>
<li>Je hebt meer dan 8 medewerkers, of oproepkrachten en scholieren.</li>
<li>Je besteedt meer dan een uur per week aan het rooster.</li>
<li>Er wordt regelmatig geruild of er vallen mensen uit.</li>
<li>Je wilt weten wat je personeel per maand kost.</li>
</ul>
<p>Overstappen hoeft geen project te zijn: in Gedekt richt je je zaak in een paar minuten in. <a href="/hoe-het-werkt">Bekijk hoe het werkt</a>.</p>`,
      },
    ],
    faq: [
      {
        q: "Is er een gratis rooster template voor Excel?",
        a: "Excel en Google Sheets hebben eenvoudige planningssjablonen. Voor de horeca werkt een zelfgemaakt rooster met één tabblad per week en een tabblad met medewerkers vaak beter. Zie de stappen in deze gids.",
      },
      {
        q: "Wat is het verschil tussen een Excel-rooster en een rooster app?",
        a: "Een rooster app verzamelt beschikbaarheid, laat medewerkers ruilen, stuurt meldingen en houdt uren bij. In Excel doe je dat allemaal handmatig.",
      },
    ],
    related: ["choosing-software", "vs-shiftbase", "schedule", "availability"],
  },

  {
    id: "restaurant",
    lang: "nl",
    slug: "personeelsplanning-restaurant",
    title: "Personeelsplanning voor restaurants: keuken en bediening in balans",
    metaTitle: "Personeelsplanning restaurant: rooster keuken & bediening",
    description:
      "Zo plan je personeel voor je restaurant: bezetting op basis van couverts, aparte roosters voor keuken en bediening, en loonkosten onder controle.",
    updated,
    intro:
      "In een restaurant moeten keuken en bediening precies op elkaar aansluiten. Te weinig mensen en de bonnen lopen op; te veel en je loonkosten schieten omhoog. Zo maak je een personeelsplanning die klopt.",
    sections: [
      {
        heading: "Plan op couverts, niet op gevoel",
        html: `<p>Een veelgebruikte vuistregel in de bediening is één bediende per 15 tot 25 couverts per shift, afhankelijk van je concept. À la carte met wijnadvies vraagt meer mensen dan een bistro met een korte kaart. Kijk naar je reserveringen en je cijfers van vorig jaar, en bepaal per dagdeel hoeveel mensen je nodig hebt.</p>
<p>In de keuken plan je per post: koude kant, warme kant, pass, afwas. De keuken begint vaak eerder (mise-en-place) en de afwas gaat langer door.</p>`,
      },
      {
        heading: "Aparte afdelingen, één rooster",
        html: `<p>Maak aparte afdelingen voor keuken en bediening, elk met hun eigen functies: chef, sous-chef, zelfstandig werkend kok, leerling-kok, afwasser; gastheer, bediening, runner, barista. Zo kan het rooster nooit een afwasser op de plek van een kok zetten.</p>
<p>In Gedekt maak je <a href="/hoe-het-werkt/afdelingen-en-functies">afdelingen en functies</a> aan in twintig seconden.</p>`,
      },
      {
        heading: "Gespreide begintijden",
        html: `<p>Laat niet iedereen om 17:00 beginnen. Een opbouw met eerst één bediende voor het dekken, dan twee extra om 18:00 voor de eerste golf en de rest om 19:00 scheelt al snel uren per avond. Hetzelfde geldt voor het afbouwen: laat mensen gefaseerd naar huis gaan als het rustiger wordt.</p>`,
      },
      {
        heading: "Ken je loonkosten",
        html: `<p>Voor restaurants ligt de personeelskostenratio vaak rond de 30 tot 35% van de omzet. Houd per week bij wat je geplande uren kosten en vergelijk dat met je verwachte omzet. Meer in <a href="/loonkosten-horeca-berekenen">loonkosten in de horeca berekenen</a>.</p>`,
      },
      {
        heading: "Hoe Gedekt helpt",
        html: `<ul>
<li>Vaste diensten per afdeling, één keer ingesteld en elke week te gebruiken.</li>
<li>Automatisch rooster op basis van beschikbaarheid, functie en contracturen.</li>
<li>Medewerkers ruilen zelf, jij keurt goed met één klik.</li>
<li>Gewerkte uren en loonkosten per medewerker, te exporteren voor je administratie.</li>
</ul>
<p><a href="/product-tour">Bekijk de app in actie</a> of <a href="/prijzen">bekijk de prijzen</a>.</p>`,
      },
    ],
    faq: [
      {
        q: "Hoeveel bedieningspersoneel heb ik nodig per couvert?",
        a: "Een veelgebruikte vuistregel is één bediende per 15 tot 25 couverts per shift, afhankelijk van het concept en de service. Gebruik je eigen cijfers om dit bij te stellen.",
      },
      {
        q: "Wat is een normaal percentage personeelskosten voor een restaurant?",
        a: "Vaak rond de 30 tot 35% van de omzet, afhankelijk van het concept en hoeveel je zelf meewerkt.",
      },
    ],
    related: ["schedule", "labour-cost", "choosing-software", "cafe-bar"],
  },

  {
    id: "cafe-bar",
    lang: "nl",
    slug: "rooster-app-cafe-bar",
    title: "Roosteren voor cafés, bars en koffiezaken",
    metaTitle: "Rooster app voor café, bar & koffiezaak",
    description:
      "Een rooster voor je café, bar of koffiebar: late sluitdiensten, scholieren, wisselende drukte en veel ruilen. Zo houd je het overzichtelijk.",
    updated,
    intro:
      "Een café of bar heeft andere uitdagingen dan een restaurant: lange openingstijden, late sluitdiensten, een team met veel studenten en drukte die per avond verschilt. Een koffiezaak draait juist om de ochtendpiek. Zo krijg je grip op je rooster.",
    sections: [
      {
        heading: "Sluitdiensten en rusttijd",
        html: `<p>Wie om 02:00 sluit, heeft volgens de Arbeidstijdenwet minimaal 14 uur rust nodig voordat de volgende dienst begint (één keer per week in te korten tot 8 uur). Zet dus niet dezelfde persoon op de sluitdienst en de openingsdienst van de volgende dag. Lees alle regels in <a href="/arbeidstijdenwet-horeca">Arbeidstijdenwet in de horeca</a>.</p>
<p>Werken er scholieren van 16 of 17? Die mogen na 23:00 niet meer werken. Zie <a href="/jongeren-werktijden-horeca">jongeren in de horeca</a>.</p>`,
      },
      {
        heading: "Piek en dal opvangen",
        html: `<p>In een koffiezaak zit de piek tussen 07:30 en 10:00, en in een café rond de borrel en na 22:00 in het weekend. Werk met korte overlapdiensten in plaats van iedereen een hele dag in te roosteren. Let op: oproepkrachten met een klein contract krijgen minimaal 3 uur betaald per oproep.</p>`,
      },
      {
        heading: "Een team met veel studenten",
        html: `<p>Studenten hebben wisselende roosters, tentamenweken en vakanties. Laat hen hun beschikbaarheid zelf per week doorgeven, en maak duidelijke afspraken over ruilen. Een vaste wekelijkse deadline (bijvoorbeeld maandag 12:00) voorkomt dat je achter mensen aan moet. Lees <a href="/beschikbaarheid-personeel-bijhouden">beschikbaarheid bijhouden</a> en <a href="/diensten-ruilen">diensten ruilen</a>.</p>`,
      },
      {
        heading: "Klein team, kleine prijs",
        html: `<p>Veel roosterprogramma's rekenen per medewerker per maand. Voor een café met 15 vaste en flexibele krachten loopt dat snel op. Gedekt werkt met een vaste prijs: Starter kost <a href="/prijzen">€10 per maand tot 15 medewerkers</a>, zonder jaarcontract.</p>`,
      },
    ],
    faq: [
      {
        q: "Mag een barmedewerker sluiten en de volgende dag openen?",
        a: "Alleen als er voldoende rust tussen zit. Eindigt de dienst na 02:00, dan geldt minimaal 14 uur rust (één keer per week 8 uur). Anders minimaal 11 uur.",
      },
      {
        q: "Wat kost een rooster app voor een klein café?",
        a: "Dat verschilt sterk. Veel aanbieders rekenen €2,50 tot €4 per medewerker per maand. Gedekt kost vanaf €10 per maand voor tot 15 medewerkers.",
      },
    ],
    related: ["young-workers", "swaps", "availability", "restaurant"],
  },

  {
    id: "seasonal",
    lang: "nl",
    slug: "seizoenspersoneel-roosteren",
    title: "Seizoenspersoneel roosteren: strandtent, terras en festivals",
    metaTitle: "Seizoenspersoneel roosteren: strandtent, terras & zomer",
    description:
      "Tips voor het roosteren van seizoenskrachten: snel inwerken, weersafhankelijke bezetting, oproepregels en een team dat elk voorjaar opnieuw begint.",
    updated,
    intro:
      "Een strandpaviljoen, een zaak met groot terras of een horecabedrijf op een camping: in het seizoen verdubbelt je team, en de drukte hangt af van het weer. Zo houd je grip op een rooster dat elke dag kan veranderen.",
    sections: [
      {
        heading: "Begin vroeg met werven en inrichten",
        html: `<p>Zet je diensten, functies en vaste krachten al in het voorjaar klaar. Nieuwe seizoenskrachten voeg je dan alleen nog toe: naam, contact, functie en uurloon. In Gedekt kost <a href="/hoe-het-werkt/medewerker-toevoegen">een nieuwe medewerker toevoegen</a> een halve minuut, en krijgt die direct een uitnodiging voor de app.</p>`,
      },
      {
        heading: "Een basisrooster plus een flexibele schil",
        html: `<p>Plan een basisbezetting die je bij elk weer nodig hebt, en een flexibele schil van oproepkrachten voor zonnige dagen. Zet extra diensten als open dienst uit, zodat beschikbare mensen ze zelf kunnen claimen.</p>`,
      },
      {
        heading: "Let op de oproeptermijn",
        html: `<p>Het weer laat zich niet 4 dagen vooruit voorspellen, maar de oproeptermijn voor oproepkrachten is wel 4 dagen (tenzij je cao korter toestaat, minimaal 24 uur). Zeg je binnen die termijn af, dan betaal je de dienst toch. Plan je flexibele schil daarom op basis van de weersverwachting voor de hele week, en maak duidelijke afspraken. Meer in <a href="/oproepkrachten-inroosteren">oproepkrachten inroosteren</a>.</p>`,
      },
      {
        heading: "Pieken in het seizoen en de Arbeidstijdenwet",
        html: `<p>In het hoogseizoen werken mensen graag veel uren. Dat mag: maximaal 60 uur in een week, zolang het gemiddelde over 16 weken onder de 48 uur blijft. Houd ook rekening met jongeren: die hebben strengere grenzen. Zie <a href="/arbeidstijdenwet-horeca">Arbeidstijdenwet in de horeca</a>.</p>`,
      },
      {
        heading: "Seizoenskorting",
        html: `<p>Betaal niet het hele jaar voor een rooster app die je vier maanden intensief gebruikt. Gedekt is maandelijks opzegbaar, en voor seizoensbedrijven maken we graag een passende afspraak — <a href="/contact">neem contact op</a>.</p>`,
      },
    ],
    faq: [
      {
        q: "Hoeveel uur mag seizoenspersoneel per week werken?",
        a: "Volwassenen maximaal 60 uur per week en 12 uur per dienst, met gemiddeld maximaal 48 uur per week over 16 weken. Voor jongeren onder de 18 gelden lagere grenzen.",
      },
      {
        q: "Kan ik een dienst afzeggen als het gaat regenen?",
        a: "Bij oproepkrachten betaal je de dienst als je binnen 4 dagen afzegt, tenzij je cao een kortere termijn (minimaal 24 uur) noemt.",
      },
    ],
    related: ["on-call", "working-time-act", "staff-shortage"],
  },

  {
    id: "labour-cost",
    lang: "nl",
    slug: "loonkosten-horeca-berekenen",
    title: "Loonkosten in de horeca berekenen (en verlagen zonder in te leveren)",
    metaTitle: "Loonkosten horeca berekenen: percentage van omzet & tips",
    description:
      "Wat kost een medewerker in de horeca echt? Bereken je loonkosten inclusief werkgeverslasten, vergelijk met je omzet en verlaag ze met slimmer roosteren.",
    updated,
    intro:
      "Personeel is in de horeca vaak de grootste kostenpost. Toch weten veel ondernemers pas achteraf, als de salarisstrook binnen is, wat een maand echt gekost heeft. Zo reken je het vooraf uit en stuur je bij.",
    sections: [
      {
        heading: "Van brutoloon naar echte loonkosten",
        html: `<p>Het uurloon op het contract is niet wat een medewerker je kost. Daar komen bij:</p>
<ul>
<li><strong>Vakantiegeld:</strong> minimaal 8% van het brutoloon.</li>
<li><strong>Vakantie-uren:</strong> wettelijk 4 keer het aantal uren dat iemand per week werkt, per jaar.</li>
<li><strong>Werkgeverspremies:</strong> onder meer WW, WIA en de Zvw-bijdrage.</li>
<li><strong>Pensioen</strong>, als dat via je cao of pensioenfonds verplicht is.</li>
<li><strong>Toeslagen</strong> uit de cao, bijvoorbeeld voor feestdagen.</li>
</ul>
<p>Als vuistregel kost een medewerker je al snel 25 tot 35% meer dan het brutoloon. Je salarisadministrateur kan je het exacte percentage voor jouw zaak geven.</p>`,
      },
      {
        heading: "Personeelskosten als percentage van de omzet",
        html: `<p>De belangrijkste stuurgetal is je <strong>loonkostenpercentage</strong>: personeelskosten gedeeld door omzet (exclusief btw). In de horeca ligt dat vaak tussen de 30 en 40%. Een restaurant met veel bediening zit hoger dan een zaak met afhaal.</p>
<p><strong>Voorbeeld:</strong> verwacht je €12.000 omzet in een week en wil je op 32% uitkomen, dan heb je €3.840 voor personeel. Bij gemiddeld €22 per uur aan loonkosten is dat ongeveer 175 uur.</p>`,
      },
      {
        heading: "Vijf manieren om loonkosten te verlagen",
        html: `<ol>
<li><strong>Gespreide begintijden:</strong> laat mensen beginnen als de drukte begint, niet allemaal tegelijk.</li>
<li><strong>Gefaseerd naar huis:</strong> stuur bij rustige avonden eerder mensen naar huis, in overleg.</li>
<li><strong>Plan op data:</strong> vergelijk met dezelfde week vorig jaar en met reserveringen.</li>
<li><strong>Voorkom overuren</strong> door contracturen in het rooster mee te nemen.</li>
<li><strong>Verminder no-shows</strong> — een leeg gat betekent vaak dure last-minute vervanging. Zie <a href="/no-shows-voorkomen">no-shows voorkomen</a>.</li>
</ol>`,
      },
      {
        heading: "Elke maand weten wat je personeel kost",
        html: `<p>In Gedekt zie je per maand de gewerkte uren, pauzes, loonkosten en no-shows per medewerker in één overzicht, en exporteer je het naar Excel, PDF of je salarisadministratie. <a href="/hoe-het-werkt/uren-en-loonkosten">Bekijk hoe dat eruitziet</a>.</p>`,
      },
    ],
    faq: [
      {
        q: "Wat is een gezond loonkostenpercentage in de horeca?",
        a: "Vaak tussen de 30 en 40% van de omzet exclusief btw. Restaurants met veel bediening zitten aan de hoge kant, zaken met afhaal of zelfbediening lager.",
      },
      {
        q: "Hoeveel kost een medewerker bovenop het brutoloon?",
        a: "Als vuistregel 25 tot 35% extra, voor vakantiegeld, vakantie-uren, werkgeverspremies en eventueel pensioen. Het exacte percentage hangt af van je cao en de contracten.",
      },
    ],
    related: ["hours", "no-shows", "restaurant", "schedule"],
  },

  {
    id: "swaps",
    lang: "nl",
    slug: "diensten-ruilen",
    title: "Diensten ruilen zonder chaos: zo regel je het",
    metaTitle: "Diensten ruilen in de horeca: regels & app",
    description:
      "Ruilverzoeken via de groepsapp? Zo maak je duidelijke afspraken over diensten ruilen en open diensten, en houd je het rooster kloppend.",
    updated,
    intro:
      "\"Wie kan zaterdag mijn dienst overnemen?\" — in elke horeca-groepsapp komt dat wekelijks voorbij. Ruilen is prima, maar zonder afspraken weet niemand meer welk rooster klopt. Zo regel je het goed.",
    sections: [
      {
        heading: "Spreek vaste regels af",
        html: `<ul>
<li><strong>Ruilen mag, maar altijd met akkoord van de leidinggevende.</strong></li>
<li><strong>De medewerker regelt zelf een vervanger</strong> met dezelfde functie of hoger.</li>
<li><strong>Uiterlijk 24 uur van tevoren</strong>, tenzij het een noodgeval is.</li>
<li><strong>Via één kanaal</strong> — niet via de groepsapp, een briefje en een telefoontje tegelijk.</li>
</ul>`,
      },
      {
        heading: "Ruilen versus open diensten",
        html: `<p>Bij een <strong>ruil</strong> wisselen twee collega's een dienst. Bij een <strong>open dienst</strong> zet je een dienst uit waar iedereen met de juiste functie op kan reageren. Open diensten werken goed voor extra drukte en voor gaten na een ziekmelding.</p>`,
      },
      {
        heading: "Waar je op moet letten bij het goedkeuren",
        html: `<ul>
<li>Heeft de vervanger de juiste functie?</li>
<li>Haalt de vervanger hiermee niet de grens van de Arbeidstijdenwet (maximaal 12 uur per dienst, 11 uur rust)?</li>
<li>Is de vervanger 16 of 17 en loopt de dienst na 23:00?</li>
<li>Komt iemand hierdoor flink boven zijn contracturen?</li>
</ul>`,
      },
      {
        heading: "Ruilen in Gedekt",
        html: `<p>Medewerkers stellen in de app in drie tikken een ruil voor, of claimen een open dienst. Jij ziet beide kanten, krijgt een waarschuwing als een functie niet past, en keurt goed met één klik. Het rooster wordt automatisch bijgewerkt en iedereen krijgt een melding. <a href="/hoe-het-werkt/claims-en-ruilverzoeken">Bekijk het in 17 seconden</a>.</p>`,
      },
    ],
    faq: [
      {
        q: "Mag een medewerker zelf een dienst ruilen?",
        a: "Dat hangt af van je afspraken. Gebruikelijk is dat ruilen mag, mits de vervanger dezelfde functie heeft en de leidinggevende akkoord geeft.",
      },
      {
        q: "Wie is verantwoordelijk als een geruilde dienst niet wordt ingevuld?",
        a: "Spreek af dat de oorspronkelijke medewerker verantwoordelijk blijft tot de ruil is goedgekeurd. Zo valt er nooit een gat.",
      },
    ],
    related: ["availability", "no-shows", "schedule"],
  },

  {
    id: "availability",
    lang: "nl",
    slug: "beschikbaarheid-personeel-bijhouden",
    title: "Beschikbaarheid van personeel bijhouden: zo doe je dat",
    metaTitle: "Beschikbaarheid personeel bijhouden & doorgeven",
    description:
      "Beschikbaarheid verzamelen zonder losse appjes: vaste deadlines, kan en liever, standaardbeschikbaarheid en vakanties op één plek.",
    updated,
    intro:
      "Een goed rooster begint bij weten wie wanneer kan. Toch komt beschikbaarheid in veel zaken binnen via WhatsApp, briefjes in de keuken en mondelinge afspraken. Zo zet je dat om in een systeem dat werkt.",
    sections: [
      {
        heading: "Standaardbeschikbaarheid plus uitzonderingen",
        html: `<p>Vraag iedereen één keer om een standaardbeschikbaarheid per weekdag ("maandag en dinsdag niet, de rest wel"). Daarna geven medewerkers alleen nog uitzonderingen door. Dat scheelt iedereen werk en je hebt altijd een uitgangspunt.</p>`,
      },
      {
        heading: "Kan, liever en niet",
        html: `<p>Werk met meer dan ja of nee. Met <strong>kan</strong>, <strong>liever</strong> en <strong>niet</strong> weet je niet alleen wie je kunt inzetten, maar ook wie extra uren wil. Zo verdeel je diensten eerlijker en houd je je team tevreden.</p>`,
      },
      {
        heading: "Een vaste deadline",
        html: `<p>Spreek een vaste deadline af die past bij je publicatiemoment. De cao Horeca vraagt dat het rooster drie weken vooruit bekend is, dus verzamel beschikbaarheid bijvoorbeeld elke maandag voor de week die over vier weken begint. Wie niets doorgeeft, wordt ingeroosterd op basis van zijn standaardbeschikbaarheid. Dat is duidelijk en eerlijk.</p>`,
      },
      {
        heading: "Verlof apart regelen",
        html: `<p>Beschikbaarheid ("ik kan dinsdag niet") is iets anders dan verlof ("ik ben drie weken op vakantie"). Laat verlof aanvragen via een aparte aanvraag die jij goedkeurt. Zie <a href="/verlof-en-vakantie-plannen">verlof en vakantie plannen</a>.</p>`,
      },
      {
        heading: "Beschikbaarheid in Gedekt",
        html: `<p>Medewerkers geven in de app met één tik "kan" en met twee tikken "liever" door. De roostermotor gebruikt dat direct bij het automatisch vullen van het rooster. <a href="/hoe-het-werkt/medewerkers-app">Bekijk de app voor je team</a>.</p>`,
      },
    ],
    faq: [
      {
        q: "Hoe ver van tevoren moeten medewerkers hun beschikbaarheid doorgeven?",
        a: "Dat bepaal je zelf. Een vaste deadline van een week voordat het rooster wordt gemaakt werkt in de praktijk goed.",
      },
      {
        q: "Wat als een medewerker zijn beschikbaarheid niet doorgeeft?",
        a: "Rooster in op basis van de standaardbeschikbaarheid. Spreek dit vooraf af, zodat het voor iedereen duidelijk is.",
      },
    ],
    related: ["schedule", "swaps", "leave", "cafe-bar"],
  },

  {
    id: "choosing-software",
    lang: "nl",
    slug: "rooster-app-kiezen",
    title: "Een rooster app kiezen voor je horecazaak: 10 punten om op te letten",
    metaTitle: "Beste rooster app horeca kiezen: 10 punten",
    description:
      "Welke rooster app past bij jouw restaurant, café of hotel? Tien punten om roosterprogramma's te vergelijken: prijs per medewerker, automatisch plannen, app voor je team en meer.",
    updated,
    intro:
      "Er zijn tientallen roosterprogramma's op de markt, van grote internationale pakketten tot eenvoudige apps. Welke past bij een horecazaak met 5 tot 30 medewerkers? Met deze tien punten vergelijk je ze eerlijk.",
    sections: [
      {
        heading: "1. Prijs: per medewerker of vast?",
        html: `<p>Veel aanbieders rekenen €2,50 tot €4 per medewerker per maand. Met 25 medewerkers betaal je dan €60 tot €100 per maand, en elke nieuwe oproepkracht maakt het duurder. Een vaste prijs is voorspelbaarder. Let ook op jaarcontracten en opstartkosten.</p>`,
      },
      {
        heading: "2. Kan het automatisch roosteren?",
        html: `<p>Een digitaal rooster is fijn, maar het echte tijdwinst zit in automatisch invullen: de software kijkt naar beschikbaarheid, functie en contracturen en maakt een voorstel. Jij controleert alleen nog.</p>`,
      },
      {
        heading: "3. Een app die je team echt gebruikt",
        html: `<p>Je medewerkers moeten hun rooster op hun telefoon zien, beschikbaarheid doorgeven en ruilen. Als dat ingewikkeld is, belanden ze weer in de groepsapp.</p>`,
      },
      {
        heading: "4. Gemaakt voor de horeca",
        html: `<p>Generieke planningstools zijn gemaakt voor kantoren of zorg. Horeca vraagt om functies per dienst, late sluitdiensten, oproepkrachten en wisselende drukte.</p>`,
      },
      {
        heading: "5. In het Nederlands",
        html: `<p>Voor jou en je team. Veel pakketten zijn vertaald, met termen die net niet kloppen.</p>`,
      },
      {
        heading: "6. Ruilen en open diensten",
        html: `<p>Kunnen medewerkers zelf ruilen en open diensten claimen, met jouw goedkeuring?</p>`,
      },
      {
        heading: "7. Urenregistratie en loonkosten",
        html: `<p>In- en uitklokken, gewerkte uren per medewerker en een export naar je salarisadministratie besparen aan het eind van de maand veel werk.</p>`,
      },
      {
        heading: "8. Verlof en beschikbaarheid",
        html: `<p>Verlofaanvragen en beschikbaarheid horen in hetzelfde systeem als het rooster, zodat je niet per ongeluk iemand inroostert die op vakantie is.</p>`,
      },
      {
        heading: "9. Hoe snel ben je up-and-running?",
        html: `<p>Kun je vandaag nog je eerste rooster maken, of heb je een implementatietraject van weken nodig?</p>`,
      },
      {
        heading: "10. Support",
        html: `<p>Krijg je antwoord van iemand die je zaak kent, en hoe snel?</p>`,
      },
      {
        heading: "Prijzen vergeleken: team van 20 medewerkers",
        html: `<div class="table-wrap"><table>
<thead><tr><th>App</th><th>Prijsmodel</th><th>Per maand, 20 medewerkers</th><th>Automatisch roosteren</th></tr></thead>
<tbody>
<tr><td>Gedekt</td><td>Vast per pakket</td><td>€20 (Pro)</td><td>Ja, vanaf Pro</td></tr>
<tr><td><a href="/shiftbase-alternatief">Shiftbase</a></td><td>Pakket + per extra medewerker</td><td>€86 (Basic) · €112 (Premium)</td><td>Premium, in early access</td></tr>
<tr><td><a href="/planday-alternatief">Planday</a></td><td>Per gebruiker</td><td>Starter vanaf £2,99 per gebruiker</td><td>Alleen Pro, prijs op aanvraag</td></tr>
<tr><td><a href="/dyflexis-alternatief">Dyflexis</a></td><td>Per gebruiker</td><td>€90 (Pro) · €130 (Expert)</td><td>Vanaf Expert</td></tr>
<tr><td><a href="/eitje-alternatief">eitje</a></td><td>Per teamlid, per module</td><td>€48 (planning) · €80 (alle modules)</td><td>Niet genoemd op de prijspagina</td></tr>
<tr><td><a href="/l1nda-alternatief">L1NDA</a></td><td>Per ingeroosterde medewerker</td><td>€104</td><td>Niet genoemd op de prijspagina</td></tr>
</tbody></table></div>
<p class="note">Bron: de officiële prijspagina's van de aanbieders op 17 oktober 2026, bij maandelijkse betaling. Prijzen kunnen wijzigen; klik op een naam voor de volledige vergelijking.</p>`,
      },
      {
        heading: "Hoe Gedekt scoort",
        html: `<p>Gedekt is gebouwd voor Nederlandse horecazaken met 5 tot 20 medewerkers: vaste prijs <a href="/prijzen">vanaf €10 per maand</a>, automatisch rooster, een app voor je team, ruilen en open diensten, in- en uitklokken en loonkostenoverzichten. Geen jaarcontract, en van setup tot je eerste rooster in minder dan 30 minuten. <a href="/hoe-het-werkt">Bekijk hoe het werkt</a>, of lees de vergelijkingen met <a href="/shiftbase-alternatief">Shiftbase</a>, <a href="/planday-alternatief">Planday</a>, <a href="/dyflexis-alternatief">Dyflexis</a>, <a href="/eitje-alternatief">eitje</a> en <a href="/l1nda-alternatief">L1NDA</a>.</p>`,
      },
    ],
    faq: [
      {
        q: "Wat kost een rooster app voor de horeca?",
        a: "Veel aanbieders rekenen €2,50 tot €4 per medewerker per maand. Gedekt werkt met een vaste prijs vanaf €10 per maand voor maximaal 15 medewerkers.",
      },
      {
        q: "Wat is de beste rooster app voor een klein horecabedrijf?",
        a: "Kies een app die gemaakt is voor de horeca, een vaste en voorspelbare prijs heeft, automatisch kan roosteren en een eenvoudige app voor je team heeft.",
      },
    ],
    related: ["vs-shiftbase", "vs-planday", "excel", "schedule"],
  },

  {
    id: "no-shows",
    lang: "nl",
    slug: "no-shows-voorkomen",
    title: "Personeel komt niet opdagen: no-shows in de horeca voorkomen",
    metaTitle: "No-shows personeel horeca voorkomen: 7 tips",
    description:
      "Een medewerker die niet komt opdagen kost je omzet en je team energie. Zeven manieren om no-shows en last-minute afmeldingen te voorkomen.",
    updated,
    intro:
      "Zaterdagavond, 17:05, en de bediening is één man kort. No-shows en last-minute afmeldingen zijn in de horeca een van de grootste ergernissen. Helemaal voorkomen kun je ze niet, maar je kunt ze wel flink terugdringen.",
    sections: [
      {
        heading: "1. Maak het rooster onmisbaar duidelijk",
        html: `<p>Veel no-shows zijn geen onwil maar verwarring: een oude screenshot, een ruil die niet doorkwam. Zorg dat er één rooster is dat iedereen altijd actueel op zijn telefoon heeft, met meldingen bij wijzigingen.</p>`,
      },
      {
        heading: "2. Rooster in op beschikbaarheid",
        html: `<p>Wie wordt ingeroosterd op een moment dat hij niet kan, komt vaker niet opdagen. Gebruik de beschikbaarheid die je team doorgeeft, en geef voorrang aan "liever".</p>`,
      },
      {
        heading: "3. Maak ruilen makkelijk",
        html: `<p>Als ruilen gedoe is, is niet komen de makkelijkste uitweg. Een eenvoudige manier om een dienst over te dragen voorkomt gaten. Zie <a href="/diensten-ruilen">diensten ruilen</a>.</p>`,
      },
      {
        heading: "4. Spreek een duidelijk afmeldbeleid af",
        html: `<p>Ziekmelden altijd telefonisch, uiterlijk een vast aantal uur voor de dienst. Leg het vast in je personeelsregels.</p>`,
      },
      {
        heading: "5. Houd no-shows bij",
        html: `<p>Wat je meet, kun je bespreken. Een overzicht per medewerker laat zien of het een incident is of een patroon.</p>`,
      },
      {
        heading: "6. Zorg voor een flexibele schil",
        html: `<p>Een paar oproepkrachten die je via een open dienst kunt bereiken, maken een gat snel weer dicht.</p>`,
      },
      {
        heading: "7. Werk aan een team waar mensen graag komen",
        html: `<p>Een eerlijk verdeeld rooster, op tijd gepubliceerd, met respect voor beschikbaarheid: het klinkt vanzelfsprekend, maar het is de beste remedie tegen no-shows.</p>`,
      },
      {
        heading: "No-shows in Gedekt",
        html: `<p>In het urenoverzicht van Gedekt zie je per medewerker de gewerkte uren én de no-shows. Open diensten zet je met één klik uit naar iedereen met de juiste functie. <a href="/hoe-het-werkt/uren-en-loonkosten">Bekijk het overzicht</a>.</p>`,
      },
    ],
    related: ["swaps", "availability", "staff-shortage"],
  },

  {
    id: "hours",
    lang: "nl",
    slug: "urenregistratie-horeca",
    title: "Urenregistratie in de horeca: verplicht, en zo maak je het makkelijk",
    metaTitle: "Urenregistratie horeca: verplichting & in- en uitklokken",
    description:
      "Moet je gewerkte uren registreren in de horeca? Ja. Wat de wet vraagt, waarom je rooster niet genoeg is en hoe in- en uitklokken met een app werkt.",
    updated,
    intro:
      "Gewerkte uren bijhouden is voor veel horecaondernemers een maandelijkse puzzel: briefjes, een urenlijst in de keuken en het rooster naast elkaar leggen. Toch is een goede registratie verplicht, en levert het je veel op.",
    sections: [
      {
        heading: "Wat zegt de wet?",
        html: `<p>Volgens de Arbeidstijdenwet moet je de arbeids- en rusttijden van je medewerkers registreren en die registratie bewaren. De Nederlandse Arbeidsinspectie kan erom vragen bij een controle. Daarnaast heb je de gewerkte uren nodig voor de loonadministratie, en voor oproepkrachten om na 12 maanden het juiste aanbod voor vaste uren te doen.</p>`,
      },
      {
        heading: "Waarom het rooster niet genoeg is",
        html: `<p>Het rooster is de planning; de registratie is wat er echt gebeurde. Iemand die een uur langer bleef, een ruil die niet in het rooster staat, een dienst die eerder stopte: dat zie je alleen in de werkelijke uren.</p>`,
      },
      {
        heading: "In- en uitklokken op de telefoon",
        html: `<p>De makkelijkste manier is dat medewerkers zelf in- en uitklokken op hun telefoon. Geen prikklok, geen papieren lijst. Jij ziet direct wie er is en controleert aan het eind van de week de afwijkingen.</p>`,
      },
      {
        heading: "Van uren naar loonstrook",
        html: `<p>Met een goede registratie heb je aan het eind van de maand per medewerker de gewerkte uren, pauzes en loonkosten, klaar om te exporteren naar je salarisadministratie. Geen overtypen meer.</p>`,
      },
      {
        heading: "Urenregistratie in Gedekt",
        html: `<p>In- en uitklokken en urenregistratie zitten in elk Gedekt-abonnement, ook in Starter. Je ziet per maand de uren, pauzes, loonkosten en no-shows per medewerker, en exporteert naar Excel, PDF of je salarisadministratie. <a href="/hoe-het-werkt/uren-en-loonkosten">Bekijk hoe het werkt</a>.</p>`,
      },
    ],
    faq: [
      {
        q: "Is urenregistratie verplicht in de horeca?",
        a: "Ja. De Arbeidstijdenwet verplicht werkgevers om de arbeids- en rusttijden van medewerkers te registreren en die registratie te bewaren.",
      },
      {
        q: "Mag ik het rooster gebruiken als urenregistratie?",
        a: "Alleen als het rooster precies overeenkomt met de werkelijk gewerkte tijden. In de horeca is dat zelden zo; in- en uitklokken is betrouwbaarder.",
      },
    ],
    related: ["labour-cost", "working-time-act", "on-call"],
  },

  {
    id: "staff-shortage",
    lang: "nl",
    slug: "personeelstekort-horeca",
    title: "Personeelstekort in de horeca: slimmer roosteren met minder mensen",
    metaTitle: "Personeelstekort horeca: 8 tips om slimmer te roosteren",
    description:
      "Te weinig mensen voor je diensten? Acht manieren om met een krap team toch elke dienst gedekt te krijgen, zonder je vaste krachten op te branden.",
    updated,
    intro:
      "Het personeelstekort in de horeca is al jaren een van de grootste uitdagingen voor ondernemers. Meer mensen vinden is lastig, dus wordt het belangrijker om slim te plannen met het team dat je hebt — en dat team te behouden.",
    sections: [
      {
        heading: "1. Plan op je echte drukte",
        html: `<p>Kijk kritisch naar je bezetting per uur. Vaak staan er aan het begin en eind van een dienst meer mensen dan nodig, terwijl het tijdens de piek krap is. Gespreide begintijden lossen beide op.</p>`,
      },
      {
        heading: "2. Breng je team breder in",
        html: `<p>Medewerkers die meerdere functies kunnen draaien (bar én bediening, koude én warme kant) maken je rooster veel flexibeler. Investeer in cross-training en leg vast wie wat kan.</p>`,
      },
      {
        heading: "3. Respecteer beschikbaarheid",
        html: `<p>Wie steeds wordt ingeroosterd op momenten dat het niet uitkomt, vertrekt. Een rooster dat rekening houdt met voorkeuren is een van de goedkoopste manieren om mensen te behouden.</p>`,
      },
      {
        heading: "4. Publiceer op tijd",
        html: `<p>Een rooster dat ruim vooruit bekend is — de cao Horeca vraagt minimaal drie weken — geeft je team rust en maakt het makkelijker om een bijbaan te combineren met studie of gezin.</p>`,
      },
      {
        heading: "5. Verdeel de vervelende diensten eerlijk",
        html: `<p>Sluitdiensten, zondagen en feestdagen: zorg dat niet steeds dezelfde mensen ze krijgen.</p>`,
      },
      {
        heading: "6. Bewaak de grenzen",
        html: `<p>Met een krap team is de verleiding groot om je beste mensen extra in te zetten. Let op de <a href="/arbeidstijdenwet-horeca">Arbeidstijdenwet</a> en op overbelasting: wie opbrandt, valt helemaal uit.</p>`,
      },
      {
        heading: "7. Maak open diensten zichtbaar",
        html: `<p>Sommige medewerkers willen best extra werken, maar weten niet dat er een gat is. Zet open diensten uit in de app, zodat ze zelf kunnen claimen.</p>`,
      },
      {
        heading: "8. Bespaar je eigen tijd",
        html: `<p>Als ondernemer of manager sta je bij een tekort vaak zelf op de vloer. Elk uur dat je niet aan het rooster besteedt, kun je daar inzetten. Laat het rooster automatisch maken — <a href="/hoe-het-werkt/rooster-maken">zie hoe dat werkt in Gedekt</a>.</p>`,
      },
    ],
    related: ["schedule", "no-shows", "availability", "seasonal"],
  },

  {
    id: "leave",
    lang: "nl",
    slug: "verlof-en-vakantie-plannen",
    title: "Verlof en vakantie plannen in de horeca",
    metaTitle: "Verlof & vakantie plannen horeca: regels en tips",
    description:
      "Vakantiedagen, verlofaanvragen en de zomerdrukte: wat de wet zegt over vakantie, en hoe je verlof plant zonder dat je rooster in de knel komt.",
    updated,
    intro:
      "Iedereen wil in de zomer op vakantie, precies wanneer het terras vol zit. Met duidelijke afspraken en een goed overzicht voorkom je conflicten en gaten in het rooster.",
    sections: [
      {
        heading: "Hoeveel vakantie-uren hebben medewerkers?",
        html: `<p>Wettelijk heeft een medewerker per jaar recht op <strong>4 keer het aantal uren dat hij per week werkt</strong>. Wie 24 uur per week werkt, bouwt dus 96 vakantie-uren op. Oproepkrachten bouwen naar rato op over de gewerkte uren. Je cao kan extra (bovenwettelijke) dagen geven.</p>
<p>Wettelijke vakantie-uren vervallen in principe 6 maanden na het jaar waarin ze zijn opgebouwd; bovenwettelijke uren verjaren na 5 jaar.</p>`,
      },
      {
        heading: "Mag je een vakantieaanvraag weigeren?",
        html: `<p>Alleen als er een gewichtige reden is, bijvoorbeeld omdat de bedrijfsvoering anders echt in gevaar komt. Reageer je niet binnen twee weken schriftelijk op een aanvraag, dan geldt de vakantie als goedgekeurd. Reageer dus altijd op tijd.</p>`,
      },
      {
        heading: "Spreek een vakantieplanning af",
        html: `<ul>
<li>Vraag zomervakanties al in het vroege voorjaar uit.</li>
<li>Spreek af hoeveel mensen per afdeling tegelijk weg mogen.</li>
<li>Werk met een eerlijke verdeling: wie vorig jaar in juli niet weg kon, heeft dit jaar voorrang.</li>
<li>Leg vast in welke periodes verlof lastiger is, zoals feestdagen en evenementen.</li>
</ul>`,
      },
      {
        heading: "Verlof in hetzelfde systeem als het rooster",
        html: `<p>Een verlofaanvraag op een briefje is snel vergeten. In Gedekt vragen medewerkers verlof aan in de app, en zie je bij het roosteren meteen wie er weg is. In Pro zit een volledige verlofgoedkeuringsworkflow. <a href="/prijzen">Bekijk de abonnementen</a>.</p>`,
      },
    ],
    faq: [
      {
        q: "Hoeveel vakantiedagen heeft een horecamedewerker?",
        a: "Wettelijk 4 keer het aantal uren per week, per jaar. Bij een fulltime werkweek van 5 dagen is dat 20 dagen. Je cao kan extra dagen geven.",
      },
      {
        q: "Hoe snel moet ik reageren op een vakantieaanvraag?",
        a: "Binnen twee weken, schriftelijk. Reageer je niet, dan is de vakantie volgens de wet toegekend.",
      },
    ],
    related: ["availability", "schedule", "seasonal"],
  },

  {
    id: "vs-shiftbase",
    lang: "nl",
    slug: "shiftbase-alternatief",
    title: "Gedekt vs Shiftbase: eerlijk vergeleken voor horecazaken",
    metaTitle: "Shiftbase alternatief? Gedekt vs Shiftbase vergeleken",
    description:
      "Op zoek naar een Shiftbase alternatief? Prijzen, automatisch roosteren en functies van Gedekt en Shiftbase naast elkaar, met rekenvoorbeelden voor 10, 20 en 25 medewerkers.",
    updated,
    intro:
      "Shiftbase is een bekende Nederlandse planningstool, gebruikt in onder meer horeca, retail en zorg. Gedekt is gebouwd voor één ding: roosteren in horecazaken met 5 tot 25 medewerkers. Welke past bij jou? Hieronder een eerlijke vergelijking — inclusief waar Shiftbase de betere keuze is.",
    sections: [
      {
        heading: "Het belangrijkste verschil: prijs per medewerker of vast",
        html: `<p>Shiftbase rekent een pakketprijs met een aantal medewerkers inbegrepen, plus een bedrag per extra medewerker. Gedekt rekent een vaste prijs per pakket, zonder kosten per medewerker. Hoe groter je team, hoe groter het verschil.</p>`,
      },
      {
        heading: "Prijzen naast elkaar",
        html: `<div class="table-wrap"><table>
<thead><tr><th></th><th>Gedekt</th><th>Shiftbase</th></tr></thead>
<tbody>
<tr><td>Gratis versie</td><td>Nee</td><td>Ja: Free, tot 15 medewerkers, alleen basisplanning en handmatige urenregistratie</td></tr>
<tr><td>Instappakket</td><td>Starter: €10/maand, tot 15 medewerkers</td><td>Basic: €30/maand voor 6 medewerkers, +€4 per extra medewerker</td></tr>
<tr><td>Middenpakket</td><td>Pro: €20/maand, tot 25 medewerkers</td><td>Premium: €72/maand voor 12 medewerkers, +€5 per extra medewerker</td></tr>
<tr><td>Groot pakket</td><td>Business: €50/maand, 25+ medewerkers</td><td>Enterprise: €336/maand voor 48 medewerkers, +€6 per extra medewerker</td></tr>
<tr><td>Jaarlijks betalen</td><td>2 maanden gratis</td><td>10% korting</td></tr>
<tr><td>Contract</td><td>Maandelijks opzegbaar</td><td>Maandelijks of jaarlijks</td></tr>
</tbody></table></div>`,
      },
      {
        heading: "Rekenvoorbeelden per maand",
        html: `<div class="table-wrap"><table>
<thead><tr><th>Teamgrootte</th><th>Gedekt</th><th>Shiftbase Basic</th><th>Shiftbase Premium</th></tr></thead>
<tbody>
<tr><td>10 medewerkers</td><td>€10 (Starter) · €20 met automatisch roosteren (Pro)</td><td>€46</td><td>€72</td></tr>
<tr><td>20 medewerkers</td><td>€20 (Pro)</td><td>€86</td><td>€112</td></tr>
<tr><td>25 medewerkers</td><td>€20 (Pro)</td><td>€106</td><td>€137</td></tr>
</tbody></table></div>
<p>Over een jaar scheelt dat voor een team van 20 medewerkers ruim €790 ten opzichte van Shiftbase Basic, en ruim €1.100 ten opzichte van Premium — met automatisch roosteren inbegrepen bij Gedekt Pro.</p>`,
      },
      {
        heading: "Functies naast elkaar",
        html: `<div class="table-wrap"><table>
<thead><tr><th></th><th>Gedekt</th><th>Shiftbase</th></tr></thead>
<tbody>
<tr><td>Automatisch rooster maken</td><td>Pro en Business</td><td>Premium en Enterprise, nog in "early access"</td></tr>
<tr><td>Beschikbaarheid, ruilen, open diensten</td><td>Alle pakketten</td><td>Vanaf Basic</td></tr>
<tr><td>In- en uitklokken</td><td>Alle pakketten</td><td>Vanaf Basic (klokken op mobiel, desktop of kiosk)</td></tr>
<tr><td>Verlofaanvragen</td><td>Alle pakketten; goedkeuringsworkflow vanaf Pro</td><td>Vanaf Basic</td></tr>
<tr><td>Inzicht in loonkosten</td><td>Uren- en loonkostenoverzicht met export</td><td>Vanaf Premium</td></tr>
<tr><td>Koppeling met salarissoftware</td><td>Export naar Excel, PDF of je salarisadministratie</td><td>Excel/CSV-export vanaf Basic; directe koppelingen (o.a. AFAS) via App Center+ à €20/maand</td></tr>
<tr><td>App voor medewerkers</td><td>Ja (webapp, werkt op elke telefoon)</td><td>Ja (iOS en Android)</td></tr>
<tr><td>Gemaakt voor</td><td>Horeca</td><td>Meerdere branches</td></tr>
</tbody></table></div>`,
      },
      {
        heading: "Wanneer Shiftbase beter past",
        html: `<ul>
<li>Je hebt alleen een eenvoudig rooster nodig en wilt niets betalen: het gratis pakket van Shiftbase is dan een prima start.</li>
<li>Je bent een grotere organisatie met tientallen medewerkers, meerdere afdelingen en HR-behoeften.</li>
<li>Je wilt veel directe koppelingen, prikklokken (kiosks) of klokken met geofencing.</li>
</ul>`,
      },
      {
        heading: "Wanneer Gedekt beter past",
        html: `<ul>
<li>Je runt een restaurant, café, bar of hotel met 5 tot 25 medewerkers.</li>
<li>Je wilt dat het rooster automatisch wordt gemaakt, zonder daarvoor een duur pakket te nemen.</li>
<li>Je wilt een vaste, voorspelbare prijs die niet stijgt bij elke nieuwe oproepkracht.</li>
<li>Je wilt vandaag nog beginnen: van setup tot je eerste rooster in minder dan 30 minuten.</li>
</ul>
<p><a href="/hoe-het-werkt/rooster-maken">Bekijk in 30 seconden hoe automatisch roosteren werkt</a> of <a href="/prijzen">bekijk de prijzen</a>.</p>`,
      },
      {
        heading: "Over deze vergelijking",
        html: `<p class="note">Prijzen en functies van Shiftbase zijn overgenomen van de officiële prijspagina van Shiftbase op 17 oktober 2026, bij maandelijkse betaling. Prijzen kunnen sindsdien zijn gewijzigd; controleer de actuele informatie op shiftbase.com. Shiftbase is een merk van de betreffende eigenaar; Gedekt is niet aan Shiftbase verbonden. Zie je een fout? <a href="/contact">Laat het ons weten</a>, dan passen we het aan.</p>`,
      },
    ],
    faq: [
      {
        q: "Wat kost Shiftbase per maand?",
        a: "Volgens de prijspagina van Shiftbase (oktober 2026): Free €0 tot 15 medewerkers, Basic €30 voor 6 medewerkers plus €4 per extra medewerker, Premium €72 voor 12 medewerkers plus €5 per extra medewerker. Gedekt kost €10, €20 of €50 per maand, zonder kosten per medewerker.",
      },
      {
        q: "Is Gedekt goedkoper dan Shiftbase?",
        a: "Voor betaalde pakketten meestal wel. Een team van 20 medewerkers betaalt bij Gedekt Pro €20 per maand, inclusief automatisch roosteren, tegenover €86 bij Shiftbase Basic en €112 bij Shiftbase Premium. Shiftbase heeft wel een gratis pakket met basisfuncties.",
      },
      {
        q: "Kan ik overstappen van Shiftbase naar Gedekt?",
        a: "Ja. Je richt je afdelingen, functies en vaste diensten in een paar minuten in en nodigt je medewerkers uit. Neem contact op als je hulp wilt bij het overstappen.",
      },
    ],
    related: ["vs-planday", "vs-dyflexis", "vs-eitje", "choosing-software"],
  },

  {
    id: "vs-planday",
    lang: "nl",
    slug: "planday-alternatief",
    title: "Gedekt vs Planday: welke rooster app past bij jouw horecazaak?",
    metaTitle: "Planday alternatief? Gedekt vs Planday vergeleken",
    description:
      "Planday of Gedekt? Prijsmodel, automatisch roosteren en functies van beide rooster apps vergeleken, voor horecazaken met 5 tot 25 medewerkers.",
    updated,
    intro:
      "Planday is een internationale planningstool die veel in de horeca wordt gebruikt. Gedekt is een Nederlandse rooster app, speciaal voor kleinere horecazaken. Hieronder zetten we de verschillen eerlijk op een rij.",
    sections: [
      {
        heading: "Prijsmodel",
        html: `<p>Planday rekent per gebruiker per maand. Op de Engelse prijspagina staat het Starter-pakket vermeld <strong>vanaf £2,99 per gebruiker per maand, met een minimum van 5 gebruikers</strong>. De prijs van Plus staat er niet bij, en Pro is maatwerk op aanvraag.</p>
<p>Gedekt rekent een vaste prijs: <strong>€10, €20 of €50 per maand</strong>, ongeacht hoeveel medewerkers er binnen je pakket vallen. Met 20 medewerkers betaal je bij een prijs per gebruiker al snel een veelvoud.</p>`,
      },
      {
        heading: "Functies naast elkaar",
        html: `<div class="table-wrap"><table>
<thead><tr><th></th><th>Gedekt</th><th>Planday</th></tr></thead>
<tbody>
<tr><td>Prijs</td><td>Vast: €10 / €20 / €50 per maand</td><td>Per gebruiker per maand; Starter vanaf £2,99, Pro op aanvraag</td></tr>
<tr><td>Automatisch rooster maken</td><td>Pro en Business</td><td>Alleen in Pro (maatwerkprijs)</td></tr>
<tr><td>Verlof en afwezigheid</td><td>Alle pakketten; goedkeuringsworkflow vanaf Pro</td><td>Vanaf Plus</td></tr>
<tr><td>Urenregistratie</td><td>Alle pakketten</td><td>Vanaf Starter</td></tr>
<tr><td>Ruilen en open diensten</td><td>Alle pakketten</td><td>Ja</td></tr>
<tr><td>Proefperiode</td><td>Proefperiode voor Pro en Business; Starter maandelijks opzegbaar</td><td>30 dagen, zonder creditcard</td></tr>
<tr><td>Taal en focus</td><td>Nederlands en Engels, gemaakt voor de Nederlandse horeca</td><td>Internationaal, meerdere branches</td></tr>
</tbody></table></div>`,
      },
      {
        heading: "Wanneer Planday beter past",
        html: `<ul>
<li>Je hebt een grote of internationale organisatie met veel locaties.</li>
<li>Je wilt omzetkoppelingen, een uitgebreide API en een eigen organisatiestructuur.</li>
<li>Je hebt budget voor maatwerk en persoonlijke implementatie.</li>
</ul>`,
      },
      {
        heading: "Wanneer Gedekt beter past",
        html: `<ul>
<li>Je hebt een horecazaak met 5 tot 25 medewerkers.</li>
<li>Je wilt automatisch roosteren zonder maatwerkofferte.</li>
<li>Je wilt een vaste prijs die niet meegroeit met elke nieuwe medewerker.</li>
<li>Je wilt snel beginnen, zonder implementatietraject.</li>
</ul>
<p><a href="/hoe-het-werkt">Bekijk hoe Gedekt werkt</a> of <a href="/prijzen">bekijk de prijzen</a>.</p>`,
      },
      {
        heading: "Over deze vergelijking",
        html: `<p class="note">Informatie over Planday is overgenomen van de officiële prijspagina van Planday op 17 oktober 2026. Planday vermeldt daar niet alle prijzen; controleer de actuele informatie op planday.com. Planday is een merk van de betreffende eigenaar; Gedekt is niet aan Planday verbonden. Zie je een fout? <a href="/contact">Laat het ons weten</a>.</p>`,
      },
    ],
    faq: [
      {
        q: "Wat kost Planday?",
        a: "Planday rekent per gebruiker per maand. Op de Engelse prijspagina staat Starter vanaf £2,99 per gebruiker per maand met minimaal 5 gebruikers; Pro is op aanvraag. Gedekt kost een vaste €10, €20 of €50 per maand.",
      },
      {
        q: "Heeft Planday automatisch roosteren?",
        a: "Volgens de prijspagina van Planday alleen in het Pro-pakket, dat een maatwerkprijs heeft. Bij Gedekt zit automatisch roosteren in Pro (€20 per maand, tot 25 medewerkers) en Business.",
      },
    ],
    related: ["vs-shiftbase", "vs-l1nda", "choosing-software", "schedule"],
  },

  {
    id: "vs-dyflexis",
    lang: "nl",
    slug: "dyflexis-alternatief",
    title: "Gedekt vs Dyflexis: welke past bij jouw horecazaak?",
    metaTitle: "Dyflexis alternatief? Gedekt vs Dyflexis vergeleken",
    description:
      "Dyflexis of Gedekt? Prijzen per medewerker, automatisch roosteren en functies naast elkaar, met rekenvoorbeelden voor 10, 20 en 25 medewerkers.",
    updated,
    intro:
      "Dyflexis is een uitgebreid Nederlands platform voor personeelsplanning, gebruikt in onder meer horeca, retail, zorg en logistiek. Gedekt is een eenvoudige rooster app voor horecazaken met 5 tot 25 medewerkers. Hieronder de verschillen, eerlijk op een rij.",
    sections: [
      {
        heading: "Prijzen naast elkaar",
        html: `<div class="table-wrap"><table>
<thead><tr><th></th><th>Gedekt</th><th>Dyflexis</th></tr></thead>
<tbody>
<tr><td>Prijsmodel</td><td>Vast per maand, geen kosten per medewerker</td><td>Per gebruiker per maand</td></tr>
<tr><td>Pakketten</td><td>Starter €10 (tot 15 medewerkers), Pro €20 (tot 25), Business €50 (25+)</td><td>Pro €4,50, Suite €5,50, Expert €6,50, Talent €7,50 per gebruiker</td></tr>
<tr><td>Automatisch rooster maken</td><td>Pro en Business</td><td>Vanaf Expert (€6,50 per gebruiker)</td></tr>
<tr><td>Koppeling salarisadministratie</td><td>Export naar Excel, PDF of je salarisadministratie</td><td>Vanaf Suite</td></tr>
<tr><td>Loonkostenoverzicht</td><td>Uren- en loonkostenoverzicht</td><td>Productiviteitsdashboard vanaf Suite</td></tr>
<tr><td>Uitproberen</td><td>Proefperiode voor Pro en Business; Starter maandelijks opzegbaar</td><td>Demo aanvragen</td></tr>
</tbody></table></div>`,
      },
      {
        heading: "Rekenvoorbeelden per maand",
        html: `<div class="table-wrap"><table>
<thead><tr><th>Teamgrootte</th><th>Gedekt</th><th>Dyflexis Pro</th><th>Dyflexis Expert (automatisch)</th></tr></thead>
<tbody>
<tr><td>10 medewerkers</td><td>€10 (Starter) · €20 met automatisch roosteren (Pro)</td><td>€45</td><td>€65</td></tr>
<tr><td>20 medewerkers</td><td>€20 (Pro)</td><td>€90</td><td>€130</td></tr>
<tr><td>25 medewerkers</td><td>€20 (Pro)</td><td>€112,50</td><td>€162,50</td></tr>
</tbody></table></div>
<p>Wil je automatisch roosteren met een team van 20, dan scheelt Gedekt Pro ten opzichte van Dyflexis Expert ruim €1.300 per jaar.</p>`,
      },
      {
        heading: "Wanneer Dyflexis beter past",
        html: `<ul>
<li>Je bent een grotere organisatie met meerdere vestigingen, regio's of entiteiten.</li>
<li>Je wilt vraagvoorspelling met AI, koppelingen met je kassa- of hotelsysteem, en BI-integraties.</li>
<li>Je zoekt ook HR-functies zoals performance- en skillsmanagement.</li>
</ul>`,
      },
      {
        heading: "Wanneer Gedekt beter past",
        html: `<ul>
<li>Je runt een restaurant, café, bar of hotel met 5 tot 25 medewerkers.</li>
<li>Je wilt automatisch roosteren zonder het duurste pakket te nemen.</li>
<li>Je wilt vandaag nog beginnen, zonder demo of implementatietraject.</li>
</ul>
<p><a href="/hoe-het-werkt/rooster-maken">Bekijk in 30 seconden hoe automatisch roosteren werkt</a> of <a href="/prijzen">bekijk de prijzen</a>.</p>`,
      },
      {
        heading: "Over deze vergelijking",
        html: `<p class="note">Prijzen en functies van Dyflexis zijn overgenomen van de officiële prijspagina van Dyflexis op 17 oktober 2026. Daar staan geen minimumaantal gebruikers, opstartkosten of proefperiode vermeld; controleer de actuele informatie op dyflexis.com. Dyflexis is een merk van de betreffende eigenaar; Gedekt is niet aan Dyflexis verbonden. Zie je een fout? <a href="/contact">Laat het ons weten</a>.</p>`,
      },
    ],
    faq: [
      {
        q: "Wat kost Dyflexis per maand?",
        a: "Volgens de prijspagina van Dyflexis (oktober 2026) €4,50 tot €7,50 per gebruiker per maand, afhankelijk van het pakket. Automatisch roosteren zit vanaf Expert (€6,50 per gebruiker). Gedekt kost een vaste €10, €20 of €50 per maand.",
      },
      {
        q: "Heeft Dyflexis automatisch roosteren?",
        a: "Ja, vanaf het Expert-pakket. Bij Gedekt zit automatisch roosteren in Pro (€20 per maand, tot 25 medewerkers) en Business.",
      },
    ],
    related: ["vs-shiftbase", "vs-eitje", "choosing-software"],
  },

  {
    id: "vs-eitje",
    lang: "nl",
    slug: "eitje-alternatief",
    title: "Gedekt vs eitje: rooster apps voor de horeca vergeleken",
    metaTitle: "eitje alternatief? Gedekt vs eitje vergeleken",
    description:
      "eitje of Gedekt? Prijs per teamlid of vaste prijs, automatisch roosteren, urenregistratie en klokken naast elkaar, met rekenvoorbeelden.",
    updated,
    intro:
      "eitje is een Nederlandse planningsapp met losse modules voor planning, uren en inklokken. Gedekt is een rooster app voor horecazaken met een vaste prijs per maand. Hoe verhouden ze zich?",
    sections: [
      {
        heading: "Prijzen naast elkaar",
        html: `<div class="table-wrap"><table>
<thead><tr><th></th><th>Gedekt</th><th>eitje</th></tr></thead>
<tbody>
<tr><td>Prijsmodel</td><td>Vast per maand</td><td>Per actief teamlid per maand (excl. btw)</td></tr>
<tr><td>Planning</td><td>Alle pakketten</td><td>€2,40 per teamlid</td></tr>
<tr><td>Urenregistratie en verlof</td><td>Alle pakketten</td><td>+€1,20 per teamlid (module Uren)</td></tr>
<tr><td>Inklokken</td><td>Alle pakketten</td><td>+€0,40 per teamlid (module Inklokken)</td></tr>
<tr><td>Automatisch rooster maken</td><td>Pro en Business</td><td>Niet genoemd op de prijspagina; wel "plannen op basis van beschikbaarheid en contracturen"</td></tr>
<tr><td>Koppelingen</td><td>Export naar Excel, PDF of je salarisadministratie</td><td>Alle koppelingen gratis</td></tr>
<tr><td>Contract</td><td>Maandelijks opzegbaar, geen opstartkosten</td><td>Maandelijks opzegbaar, geen opstartkosten</td></tr>
</tbody></table></div>`,
      },
      {
        heading: "Rekenvoorbeelden per maand",
        html: `<div class="table-wrap"><table>
<thead><tr><th>Teamgrootte</th><th>Gedekt</th><th>eitje Planning</th><th>eitje Planning + Uren + Inklokken</th></tr></thead>
<tbody>
<tr><td>10 medewerkers</td><td>€10 (Starter) · €20 met automatisch roosteren (Pro)</td><td>€24</td><td>€40</td></tr>
<tr><td>20 medewerkers</td><td>€20 (Pro)</td><td>€48</td><td>€80</td></tr>
<tr><td>25 medewerkers</td><td>€20 (Pro)</td><td>€60</td><td>€100</td></tr>
</tbody></table></div>
<p class="note">eitje vermeldt prijzen exclusief btw.</p>`,
      },
      {
        heading: "Wanneer eitje beter past",
        html: `<ul>
<li>Je wilt alle koppelingen gratis, of functies voor teamcommunicatie en trainingen.</li>
<li>Je hebt een heel klein team en alleen planning nodig: dan ligt de prijs dicht bij elkaar.</li>
</ul>`,
      },
      {
        heading: "Wanneer Gedekt beter past",
        html: `<ul>
<li>Je wilt dat het rooster automatisch wordt gevuld op basis van beschikbaarheid, functie en contracturen.</li>
<li>Je wilt planning, uren, verlof en inklokken in één vaste prijs, zonder modules bij te tellen.</li>
<li>Je team groeit of wisselt per seizoen, en je wilt niet dat elke nieuwe kracht de rekening verhoogt.</li>
</ul>
<p><a href="/hoe-het-werkt">Bekijk hoe Gedekt werkt</a> of <a href="/prijzen">bekijk de prijzen</a>.</p>`,
      },
      {
        heading: "Over deze vergelijking",
        html: `<p class="note">Prijzen en functies van eitje zijn overgenomen van de officiële prijspagina van eitje op 17 oktober 2026. Controleer de actuele informatie op eitje.app. eitje is een merk van de betreffende eigenaar; Gedekt is niet aan eitje verbonden. Zie je een fout? <a href="/contact">Laat het ons weten</a>.</p>`,
      },
    ],
    faq: [
      {
        q: "Wat kost eitje per maand?",
        a: "Volgens de prijspagina van eitje (oktober 2026) €2,40 per teamlid voor planning, plus €1,20 voor urenregistratie en €0,40 voor inklokken, exclusief btw. Voor 20 teamleden met alle modules is dat €80 per maand. Gedekt Pro kost €20 per maand voor maximaal 25 medewerkers.",
      },
    ],
    related: ["vs-l1nda", "vs-shiftbase", "choosing-software"],
  },

  {
    id: "vs-l1nda",
    lang: "nl",
    slug: "l1nda-alternatief",
    title: "Gedekt vs L1NDA: personeelsplanning voor de horeca vergeleken",
    metaTitle: "L1NDA alternatief? Gedekt vs L1NDA vergeleken",
    description:
      "L1NDA of Gedekt? Betalen per ingeroosterde medewerker of een vaste prijs: prijzen, functies en rekenvoorbeelden naast elkaar.",
    updated,
    intro:
      "L1NDA is een Nederlandse tool voor personeelsplanning en urenregistratie, met één pakket waarin alle functies zitten. Gedekt is een rooster app voor horecazaken met een vaste prijs per maand. Hieronder de verschillen.",
    sections: [
      {
        heading: "Prijzen naast elkaar",
        html: `<div class="table-wrap"><table>
<thead><tr><th></th><th>Gedekt</th><th>L1NDA</th></tr></thead>
<tbody>
<tr><td>Prijsmodel</td><td>Vast per maand</td><td>€5,20 per ingeroosterde medewerker per maand</td></tr>
<tr><td>Pakketten</td><td>Starter €10, Pro €20, Business €50</td><td>Eén pakket met alle functies</td></tr>
<tr><td>Koppelingen</td><td>Export naar Excel, PDF of je salarisadministratie</td><td>Apart geprijsd, per koppeling per maand</td></tr>
<tr><td>Automatisch rooster maken</td><td>Pro en Business</td><td>Niet genoemd op de prijspagina</td></tr>
<tr><td>Opstartkosten en contract</td><td>Geen; maandelijks opzegbaar</td><td>Geen; maandelijks opzegbaar</td></tr>
<tr><td>Uitproberen</td><td>Proefperiode voor Pro en Business</td><td>Gratis proefperiode, zonder betaalgegevens</td></tr>
</tbody></table></div>`,
      },
      {
        heading: "Rekenvoorbeelden per maand",
        html: `<div class="table-wrap"><table>
<thead><tr><th>Ingeroosterde medewerkers</th><th>Gedekt</th><th>L1NDA</th></tr></thead>
<tbody>
<tr><td>10</td><td>€10 (Starter) · €20 met automatisch roosteren (Pro)</td><td>€52</td></tr>
<tr><td>20</td><td>€20 (Pro)</td><td>€104</td></tr>
<tr><td>25</td><td>€20 (Pro)</td><td>€130</td></tr>
</tbody></table></div>`,
      },
      {
        heading: "Wanneer L1NDA beter past",
        html: `<ul>
<li>Je zaak is een deel van het jaar dicht: in een maand zonder ingeroosterde medewerkers betaal je bij L1NDA niets.</li>
<li>Je wilt één pakket waarin alle functies zitten, met persoonlijke support.</li>
</ul>`,
      },
      {
        heading: "Wanneer Gedekt beter past",
        html: `<ul>
<li>Je bent het grootste deel van het jaar open en hebt een team van 10 tot 25 mensen: dan is een vaste prijs een stuk voordeliger.</li>
<li>Je wilt dat het rooster automatisch wordt gemaakt.</li>
<li>Je wilt geen losse kosten per koppeling.</li>
</ul>
<p>Seizoensbedrijf? Ook bij Gedekt ben je maandelijks opzegbaar, en <a href="/contact">we maken graag een passende afspraak</a>.</p>`,
      },
      {
        heading: "Over deze vergelijking",
        html: `<p class="note">Prijzen en functies van L1NDA zijn overgenomen van de officiële prijspagina van L1NDA op 17 oktober 2026. Controleer de actuele informatie op l1nda.com. L1NDA is een merk van de betreffende eigenaar; Gedekt is niet aan L1NDA verbonden. Zie je een fout? <a href="/contact">Laat het ons weten</a>.</p>`,
      },
    ],
    faq: [
      {
        q: "Wat kost L1NDA per maand?",
        a: "Volgens de prijspagina van L1NDA (oktober 2026) €5,20 per ingeroosterde medewerker per maand, zonder vaste kosten; koppelingen worden apart geprijsd. Met 20 ingeroosterde medewerkers is dat €104 per maand. Gedekt Pro kost €20 per maand voor maximaal 25 medewerkers.",
      },
    ],
    related: ["vs-eitje", "vs-dyflexis", "seasonal"],
  },
];

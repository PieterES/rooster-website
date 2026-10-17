// Structured data (schema.org JSON-LD) shared across pages.
import { SITE } from "./routes";

export const organization = {
  "@type": "Organization",
  "@id": `${SITE}/#organization`,
  name: "Gedekt",
  url: `${SITE}/`,
  logo: `${SITE}/apple-touch-icon.png`,
  areaServed: "NL",
};

export const website = {
  "@type": "WebSite",
  "@id": `${SITE}/#website`,
  name: "Gedekt",
  url: `${SITE}/`,
  inLanguage: ["nl-NL", "en"],
  publisher: { "@id": `${SITE}/#organization` },
};

const plans = [
  { name: "Starter", price: "10" },
  { name: "Pro", price: "20" },
  { name: "Business", price: "50" },
];

/** The app itself, with its plans — used on the home and pricing pages. */
export const softwareApplication = (lang: "nl" | "en") => ({
  "@type": "SoftwareApplication",
  "@id": `${SITE}/#app`,
  name: "Gedekt",
  url: "https://app.gedekt.com",
  applicationCategory: "BusinessApplication",
  applicationSubCategory: lang === "nl" ? "Personeelsplanning" : "Workforce scheduling",
  operatingSystem: "Web, iOS, Android",
  inLanguage: ["nl-NL", "en"],
  description:
    lang === "nl"
      ? "Rooster app en personeelsplanning voor de Nederlandse horeca. Automatisch roosters maken op basis van beschikbaarheid, functie en contracturen. Vaste prijs, geen kosten per medewerker."
      : "Staff scheduling and rota app for Dutch hospitality. Generates schedules from availability, function and contract hours. Flat pricing, no per-employee fees.",
  publisher: { "@id": `${SITE}/#organization` },
  offers: plans.map((p) => ({
    "@type": "Offer",
    name: p.name,
    price: p.price,
    priceCurrency: "EUR",
    url: `${SITE}${lang === "nl" ? "/prijzen/" : "/en/pricing/"}`,
    priceSpecification: {
      "@type": "UnitPriceSpecification",
      price: p.price,
      priceCurrency: "EUR",
      unitCode: "MON",
    },
  })),
});

export const breadcrumbs = (items: { name: string; url: string }[]) => ({
  "@type": "BreadcrumbList",
  itemListElement: items.map((item, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: item.name,
    item: item.url,
  })),
});

export const faqPage = (faq: { q: string; a: string }[]) => ({
  "@type": "FAQPage",
  mainEntity: faq.map(({ q, a }) => ({
    "@type": "Question",
    name: q,
    acceptedAnswer: { "@type": "Answer", text: a },
  })),
});

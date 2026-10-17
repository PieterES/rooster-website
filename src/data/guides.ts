// Guide articles under /gidsen/<slug> (NL) and /en/guides/<slug> (EN).
// Each one targets a specific search query; translations share the same `id`.
// Content lives in src/data/guide-content/; adding an entry there creates the page,
// lists it on the overview, adds it to the sitemap and wires up hreflang.
import { nlGuides } from "./guide-content/nl";
import { enGuides } from "./guide-content/en";

export interface Guide {
  /** Shared between translations of the same guide. */
  id: string;
  lang: "nl" | "en";
  slug: string;
  /** H1 on the page. */
  title: string;
  /** <title> tag, without the " | Gedekt" suffix. Lead with the search phrase. */
  metaTitle: string;
  /** Meta description, ~150 characters. */
  description: string;
  /** ISO date of the last content review. */
  updated: string;
  intro: string;
  /** Section bodies are trusted HTML written by us. */
  sections: { heading: string; html: string }[];
  faq?: { q: string; a: string }[];
  /** ids of related guides, shown at the bottom. */
  related?: string[];
}

export const guides: Guide[] = [...nlGuides, ...enGuides];

export const guideHref = (g: Guide) => (g.lang === "nl" ? `/gidsen/${g.slug}` : `/en/guides/${g.slug}`);

export const guidesFor = (lang: "nl" | "en") => guides.filter((g) => g.lang === lang);

export const guideTranslation = (g: Guide) => guides.find((o) => o.id === g.id && o.lang !== g.lang);

export const relatedGuides = (g: Guide) =>
  (g.related ?? [])
    .map((id) => guides.find((o) => o.id === id && o.lang === g.lang))
    .filter((o): o is Guide => Boolean(o));

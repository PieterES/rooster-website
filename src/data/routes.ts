// NL (root) <-> EN (/en/) page pairs. Used by the language switcher in Nav and
// by the hreflang tags in BaseLayout, so every translated page must be listed here.
import { demos, demoHref } from "./demos";
import { guides, guideHref, guideTranslation } from "./guides";

export const SITE = "https://gedekt.com";

const pairs: [nl: string, en: string][] = [
  ["/", "/en/"],
  ["/prijzen", "/en/pricing"],
  ["/hoe-het-werkt", "/en/how-it-works"],
  ["/product-tour", "/en/product-tour"],
  ["/over-ons", "/en/about"],
  ["/contact", "/en/contact"],
  ["/handleiding", "/en/manual"],
  ["/gidsen", "/en/guides"],
  ["/privacy", "/en/privacy"],
  ...demos.map((d) => [demoHref(d, "nl"), demoHref(d, "en")] as [string, string]),
  ...guides
    .filter((g) => g.lang === "nl" && guideTranslation(g))
    .map((g) => [guideHref(g), guideHref(guideTranslation(g)!)] as [string, string]),
];

const nlToEn = new Map(pairs);
const enToNl = new Map(pairs.map(([nl, en]) => [en, nl]));
enToNl.set("/en", "/");

/** Strip the trailing slash (except for the root) so paths match the table above. */
export const normalisePath = (path: string) => (path === "/" ? "/" : path.replace(/\/$/, ""));

export const isEnglishPath = (path: string) => path === "/en" || path.startsWith("/en/");

/** The same page in the other language, or undefined if it has no translation. */
export function translatedPath(path: string): string | undefined {
  const p = normalisePath(path);
  return isEnglishPath(p) ? enToNl.get(p) : nlToEn.get(p);
}

/** Absolute URL in the form the live site serves it (trailing slash). */
export const absoluteUrl = (path: string) => {
  const p = normalisePath(path);
  return SITE + (p === "/" || p.endsWith("/") ? p : p + "/");
};

// User manual (help docs) at /handleiding/<slug> (NL) and /en/manual/<slug> (EN).
// Each article answers one "how do I ...?" question for admins or employees.
// Content lives in src/data/manual-content/; translations share an `id`. Adding an
// entry creates the page, lists it on the hub, adds it to the search index (Pagefind,
// built after `astro build`), the sitemap and the hreflang pairs.
// Describe the app as it is: check labels and behaviour against the app code
// (HorecaRooster) before writing, and keep UI labels exactly as the app shows them.
import { nlManual } from "./manual-content/nl";
import { enManual } from "./manual-content/en";

export type ManualLang = "nl" | "en";

export type ManualCategory =
  | "start"
  | "staff"
  | "schedule"
  | "availability"
  | "requests"
  | "hours"
  | "communication"
  | "account"
  | "employee";

export interface ManualArticle {
  /** Shared between translations of the same article. */
  id: string;
  lang: ManualLang;
  slug: string;
  category: ManualCategory;
  /** H1 and search result title. Phrase it the way people ask: "Een medewerker toevoegen". */
  title: string;
  /** One sentence: shown on the hub, as meta description and in search results. */
  description: string;
  /** Where to find it in the app, e.g. ["Personeel", "Medewerkers"]. */
  path?: string[];
  /** Only in these plans; leave out when it's in every plan. */
  plan?: "pro" | "business";
  /** Section bodies are trusted HTML written by us. Use <span class="ui"> for app labels. */
  sections: { heading: string; html: string }[];
  /** ids of related articles, shown at the bottom. */
  related?: string[];
}

export const manualUpdated = "2026-10-20";

export const manualArticles: ManualArticle[] = [...nlManual, ...enManual];

/** Hub order and labels. Admin categories first, then the employee section. */
export const manualCategories: { id: ManualCategory; label: Record<ManualLang, string>; audience: "admin" | "employee" }[] = [
  { id: "start", label: { nl: "Aan de slag", en: "Getting started" }, audience: "admin" },
  { id: "staff", label: { nl: "Personeel", en: "Staff" }, audience: "admin" },
  { id: "schedule", label: { nl: "Rooster", en: "Schedule" }, audience: "admin" },
  { id: "availability", label: { nl: "Beschikbaarheid", en: "Availability" }, audience: "admin" },
  { id: "requests", label: { nl: "Verzoeken", en: "Requests" }, audience: "admin" },
  { id: "hours", label: { nl: "Uren & klokken", en: "Hours & clocking" }, audience: "admin" },
  { id: "communication", label: { nl: "Communicatie", en: "Communication" }, audience: "admin" },
  { id: "account", label: { nl: "Instellingen & abonnement", en: "Settings & subscription" }, audience: "admin" },
  { id: "employee", label: { nl: "Voor medewerkers", en: "For employees" }, audience: "employee" },
];

export const manualHubHref = (lang: ManualLang) => (lang === "nl" ? "/handleiding" : "/en/manual");

export const manualHref = (a: ManualArticle) => `${manualHubHref(a.lang)}/${a.slug}`;

export const manualFor = (lang: ManualLang) => manualArticles.filter((a) => a.lang === lang);

export const manualTranslation = (a: ManualArticle) =>
  manualArticles.find((o) => o.id === a.id && o.lang !== a.lang);

export const manualCategory = (id: ManualCategory) => manualCategories.find((c) => c.id === id)!;

export const relatedManual = (a: ManualArticle) =>
  (a.related ?? [])
    .map((id) => manualArticles.find((o) => o.id === id && o.lang === a.lang))
    .filter((o): o is ManualArticle => Boolean(o));

export const planLabel = (plan: "pro" | "business", lang: ManualLang) =>
  plan === "pro"
    ? lang === "nl" ? "Pro en Business" : "Pro and Business"
    : lang === "nl" ? "Alleen Business" : "Business only";

/** Stable anchor for a section heading, so search results can jump to it. */
export const sectionId = (heading: string) =>
  heading
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

/** Old single-page manual anchors (/handleiding#admin-klok) -> article ids, so old links keep working. */
export const legacyAnchors: Record<string, string> = {
  "admin-start": "setup",
  "admin-dashboard": "setup",
  "admin-medewerkers": "add-employee",
  "admin-afdelingen": "departments",
  "admin-uren": "hours",
  "admin-klok": "kiosk",
  "admin-checklists": "checklists",
  "admin-rapporten": "reports",
  "admin-rooster": "build-schedule",
  "admin-templates": "templates",
  "admin-diensten": "shift-types",
  "admin-motor": "engine",
  "admin-communicatie": "announcements",
  "admin-verzoeken": "swaps-claims",
  "admin-instellingen": "settings",
  "admin-support": "support",
  "me-start": "install-app",
  "me-vandaag": "view-schedule",
  "me-rooster": "view-schedule",
  "me-beschikbaar": "give-availability",
  "me-checklist": "employee-checklists",
  "me-meer": "swap-shift",
  "me-klok": "clock-in-out",
};

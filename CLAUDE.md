# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # start dev server at localhost:4321
npm run build    # build to ./dist/
npm run preview  # preview the production build locally
```

No test suite or linter is configured.

## Architecture

**Stack:** Astro 6 + Tailwind CSS v4 (via `@tailwindcss/vite` plugin). No JS framework — all components are `.astro` files with vanilla script blocks where interactivity is needed.

**Bilingual routing (NL / EN):**
- Dutch pages live at the root: `/`, `/functies`, `/prijzen`, `/hoe-het-werkt`, `/product-tour`, `/over-ons`, `/contact`
- English equivalents are under `/en/`: `/en/`, `/en/features`, `/en/pricing`, etc.
- The slug mapping is maintained in [src/components/Nav.astro](src/components/Nav.astro) (`langMap`). When adding a new page, add both the NL and EN route to `langMap` and to the `links` arrays for both languages.

**Page layout:** Every page wraps in `BaseLayout` ([src/layouts/BaseLayout.astro](src/layouts/BaseLayout.astro)), which accepts `title`, `description`, and `lang` props. `lang` defaults to `"en"` — NL pages must pass `lang="nl"` explicitly.

**Design tokens** are defined as CSS custom properties in [src/styles/global.css](src/styles/global.css) using Tailwind v4's `@theme` block:
- Colors: `--color-forest` (#1B4332), `--color-forest-light`, `--color-amber`, `--color-amber-light`, `--color-cream`, `--color-charcoal`, `--color-stone`, `--color-dark`
- Fonts: `--font-display` (Sora), `--font-body` (Inter) — loaded from Google Fonts in `BaseLayout`

Use `var(--color-*)` in Tailwind classes (e.g., `text-[var(--color-forest)]`) rather than hardcoded hex values.

**i18n pattern in components:** Components that appear on both NL and EN pages (Nav, Footer) accept a `lang` prop and define a `t` object with both translations inline — no external i18n library.

**App URL:** The live app is at `https://app.rooster-maker.app`. CTAs and login links point there.

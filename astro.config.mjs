// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// Old URLs that redirect elsewhere; kept out of the sitemap.
const redirects = {
  // The features page was merged into "how it works"; keep old links and search results working.
  '/functies': '/hoe-het-werkt',
  '/en/features': '/en/how-it-works',
};

// https://astro.build/config
export default defineConfig({
  site: 'https://gedekt.com',
  redirects,
  integrations: [
    sitemap({
      filter: (page) => !Object.keys(redirects).some((from) => page === `https://gedekt.com${from}/`),
    }),
  ],
  vite: {
    plugins: [tailwindcss()]
  }
});

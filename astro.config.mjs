// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // The features page was merged into "how it works"; keep old links and search results working.
  redirects: {
    '/functies': '/hoe-het-werkt',
    '/en/features': '/en/how-it-works',
  },
  vite: {
    plugins: [tailwindcss()]
  }
});

// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: 'https://valkyria-technologies.vercel.app',
  integrations: [
    react(),
    tailwind(),
  ],
  vite: {
    ssr: {
      external: ['svgo'],
    },
  },
  build: {
    inlineStylesheets: 'auto',
    assets: '_astro',
  },
  output: 'static',
  trailingSlash: 'never',
});

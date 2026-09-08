import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://altuszka-dev.netlify.app',
  i18n: {
    defaultLocale: 'ua',
    locales: ['ru', 'en', 'ua', 'ry'],
    routing: {
      prefixDefaultLocale: false,
    },
    fallback: {
      en: 'ua',
      ru: 'ua',
      ry: 'ua'
    },
  },
});
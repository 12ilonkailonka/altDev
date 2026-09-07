import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://yoursite.com', // Обязательно для генерации hreflang
  i18n: {
    defaultLocale: 'ru',
    locales: ['ru', 'en', 'es'],
    routing: {
      // false: русский по адресу '/', а не '/ru/'
      // true: русский также получает префикс '/ru/'
      prefixDefaultLocale: false,
    },
    // Что делать, если страница не переведена?
    // 'redirect' — редиректит на версию по умолчанию
    // 'ignore' — показывает 404
    fallback: {
      en: 'ru', // Если английской версии нет — берем русскую
      es: 'ru',
    },
  },
});

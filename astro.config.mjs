// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    i18n: {
        defaultLocale: 'ua',
        locales: ['ua', 'ry', 'en', 'pl', 'ru', 'cz'],
        routing: {
            prefixDefaultLocale: true
        }
    }
});

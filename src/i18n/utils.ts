import { ui, defaultLang, type UiKey } from './ui';

export function useTranslations(locale: string) {
  return function t(key: UiKey): string {
    const lang = locale in ui ? (locale as keyof typeof ui) : defaultLang;
    return ui[lang][key] ?? ui[defaultLang][key];
  };
}
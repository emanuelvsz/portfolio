import { useContextSelector } from 'use-context-selector';
import { i18nCTX } from '.';

export function useLanguages() {
  return useContextSelector(i18nCTX, (ctx) => ctx.languages);
}

export function useSelectedLanguage() {
  return useContextSelector(i18nCTX, (ctx) => ctx.selectedLanguage);
}

export function useChangeLanguage() {
  return useContextSelector(i18nCTX, (ctx) => ctx.changeLanguage);
}

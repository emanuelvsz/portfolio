import { createContext } from 'use-context-selector';

interface Props {
  languages: string[];
  selectedLanguage: string;
  changeLanguage(lang: string): void;
}

export const i18nCTX = createContext({} as Props);
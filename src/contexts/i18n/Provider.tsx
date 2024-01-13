import { PropsWithChildren, useCallback, useEffect, useState } from 'react';
import { i18nCTX } from '.';
import StorageController from '../../core/cache/storage/StorageController';
import { IntlProvider } from 'react-intl';

import englishLang from './language/en-US.json';
import portugueseLang from './language/pt-BR.json';

type LanguageFile = Record<string, string>;

const languageFilesModules: Record<string, LanguageFile> = {
  'en-US': englishLang,
  'pt-BR': portugueseLang,
};

function getDefaultLanguage() {
  const browserLanguage = navigator.language.toLowerCase();

  if (browserLanguage.startsWith('en')) {
    return 'en-US';
  } else {
    return 'pt-BR';
  }
}

function I18nProvider({ children }: PropsWithChildren) {
  const languages = Object.keys(languageFilesModules);
  const storedLanguage = StorageController.get<string>('language');
  const currentLanguage = storedLanguage ?? getDefaultLanguage();
  const [selectedLanguage, setSelectedLanguage] =
    useState<string>(currentLanguage);
  const messages = languageFilesModules[selectedLanguage];

  useEffect(() => {
    if (!storedLanguage) {
      StorageController.set('language', selectedLanguage);
    }
  }, []);

  const changeLanguage = useCallback(
    (language: string) => {
      if (!languages.includes(language)) {
        return;
      }
      StorageController.set('language', language);
      setSelectedLanguage(language);
    },
    [selectedLanguage],
  );

  return (
    <i18nCTX.Provider
      value={{
        languages,
        selectedLanguage,
        changeLanguage,
      }}
    >
      {messages ? (
        <IntlProvider locale={selectedLanguage} messages={messages}>
          {children}
        </IntlProvider>
      ) : (
        <div>Loading...</div>
      )}
    </i18nCTX.Provider>
  );
}

export default I18nProvider;

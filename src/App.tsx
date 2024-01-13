import React from 'react';
import { HomePage } from './pages/home';
import I18nProvider from './contexts/i18n/Provider';

const App: React.FC = () => {
  return (
    <React.StrictMode>
      <I18nProvider>
        <HomePage />
      </I18nProvider>
    </React.StrictMode>
  );
};

export default App;

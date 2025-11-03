import React from 'react';
import { Home } from './pages/home';
import I18nProvider from './contexts/i18n/Provider';
import { ConfigProvider } from 'antd';
import { theme } from '@config/theme';

const App: React.FC = () => {

  return (
    <React.StrictMode>
      <ConfigProvider theme={theme(true)}>
        <I18nProvider>
          <Home />
        </I18nProvider>
      </ConfigProvider>
    </React.StrictMode>
  );
};

export default App;

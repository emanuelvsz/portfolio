import React from 'react';
import { HomePage } from './pages/home';
import I18nProvider from './contexts/i18n/Provider';
import { ConfigProvider } from 'antd';

const App: React.FC = () => {
  return (
    <React.StrictMode>
      <ConfigProvider
        theme={{
          components: {
            Dropdown: { algorithm: true, borderRadius: 0 },
          },
        }}
      >
        <I18nProvider>
          <HomePage />
        </I18nProvider>
      </ConfigProvider>
    </React.StrictMode>
  );
};

export default App;

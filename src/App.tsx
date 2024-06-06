import React from 'react';
import { Home } from './pages/home';
import I18nProvider from './contexts/i18n/Provider';
import { ConfigProvider } from 'antd';
import { About } from './pages/home/components/about';

const App: React.FC = () => {
  const customTheme = {
    components: {
      Dropdown: { algorithm: true, borderRadius: 0 },
    },
  };
  return (
    <React.StrictMode>
      <ConfigProvider theme={customTheme}>
        <I18nProvider>
          <Home />
          <About />
        </I18nProvider>
      </ConfigProvider>
    </React.StrictMode>
  );
};

export default App;

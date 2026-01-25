import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { ConfigProvider } from 'antd';
import { theme } from '@config/theme';

import I18nProvider from './contexts/i18n/Provider';
import { Home } from './pages/home';
import { Projects } from '@pages/projects';

const App: React.FC = () => {
  return (
    <React.StrictMode>
      <ConfigProvider theme={theme(true)}>
        <I18nProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </BrowserRouter>
        </I18nProvider>
      </ConfigProvider>
    </React.StrictMode>
  );
};

export default App;

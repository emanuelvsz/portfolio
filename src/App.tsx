/** @jsxImportSource @emotion/react */
import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { ConfigProvider } from 'antd';
import { theme } from '@config/theme';
import { css, Global } from '@emotion/react';

import { QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

import I18nProvider from './contexts/i18n/Provider';
import { Home } from './pages/home';
import { Projects } from '@pages/projects';
import Footer from '@components/footer';
import { queryClient } from '@lib/query-client';

const APP_BACKGROUND = '#2f2b39'; 

const styles = {
  appWrapper: css`
    background-color: ${APP_BACKGROUND};
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    width: 100%;
  `,
};

const App: React.FC = () => {
  return (
    <React.StrictMode>
      <QueryClientProvider client={queryClient}>
        <ConfigProvider theme={theme(true)}>
          <I18nProvider>
            <Global
              styles={css`
                body, html {
                  margin: 0;
                  padding: 0;
                  background-color: ${APP_BACKGROUND};
                }
              `}
            />

            <div css={styles.appWrapper}>
              <BrowserRouter>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/projects" element={<Projects />} />
                  <Route path="*" element={<Navigate to="/" replace />} />
                </Routes>
              </BrowserRouter>
              <Footer />
            </div>
          </I18nProvider>
        </ConfigProvider>

        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </React.StrictMode>
  );
};

export default App;

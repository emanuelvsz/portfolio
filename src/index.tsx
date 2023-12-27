import ReactDOM from 'react-dom/client';
import React from 'react';

import './index.css';
import { HomePage } from './pages/home';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <HomePage />
  </React.StrictMode>
);

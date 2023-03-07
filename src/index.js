import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './assets/global.css'
import './assets/style/styles.css'
import { ThemeProvoder } from './store/theme/themeContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <ThemeProvoder>
      <App />
    </ThemeProvoder>
);

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

const ensureThemeReady = (): Promise<void> => {
  if (typeof window.initAllThemeAnimations === 'function') {
    return Promise.resolve();
  }

  return new Promise<void>((resolve) => {
    // Check if bundle script already loaded or is in document
    const existing = document.querySelector<HTMLScriptElement>('script[data-theme-bundle="true"]');
    if (existing) {
      if ((existing as any).readyState === 'loaded' || (existing as any).readyState === 'complete') {
        resolve();
      } else {
        existing.addEventListener('load', () => resolve(), { once: true });
        existing.addEventListener('error', () => resolve(), { once: true });
      }
      return;
    }

    const script = document.createElement('script');
    script.setAttribute('data-theme-bundle', 'true');
    script.src = new URL(`${import.meta.env.BASE_URL}vendor/theme-bundle.min.js`, document.baseURI).href;
    script.onload = () => resolve();
    script.onerror = () => resolve();
    document.head.appendChild(script);
  });
};

window.themeScriptsReady = ensureThemeReady();

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

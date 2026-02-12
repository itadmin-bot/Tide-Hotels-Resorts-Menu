
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

/**
 * Service Worker registration for PWA functionality.
 */
const registerServiceWorker = () => {
  if ('serviceWorker' in navigator) {
    const isIframe = window.self !== window.top;
    const isPreview = window.location.hostname.includes('usercontent.goog') || 
                      window.location.hostname.includes('ai.studio');
    
    if (isIframe || isPreview) {
      console.info('Service Worker registration skipped: Environment is a preview or iframe.');
      return;
    }

    window.addEventListener('load', () => {
      navigator.serviceWorker.register('./service-worker.js')
        .then((registration) => {
          console.log('ServiceWorker registration successful with scope: ', registration.scope);
        })
        .catch((err) => {
          if (err.name === 'SecurityError' || (err.message && err.message.includes('origin'))) {
            console.info('Service Worker: Registration restricted by origin/security policy.');
          } else {
            console.warn('ServiceWorker registration failed: ', err);
          }
        });
    });
  }
};

registerServiceWorker();

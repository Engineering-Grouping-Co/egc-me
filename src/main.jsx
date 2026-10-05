import { StrictMode } from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';
import './styles/global.css';
import App from './App.jsx';

const container = document.getElementById('root');
const app = (
  <StrictMode>
    <App />
  </StrictMode>
);

// scripts/prerender.mjs ships every page with real markup already inside #root (tagged with the
// path it was rendered for), so production hydrates it: no repaint, and the drawing animation is
// not restarted. Anything else renders from scratch: `vite dev` serves an empty #root, and an
// unknown URL arrives through public/404.html as the prerendered home page under a different path.
if (container.hasChildNodes() && container.dataset.prerendered === window.location.pathname) {
  hydrateRoot(container, app, {
    onRecoverableError: (err) => console.error('[hydration]', err),
  });
} else {
  if (container.hasChildNodes()) {
    // An unknown URL arrives as the prerendered home page (via public/404.html). Its head tags would
    // otherwise sit next to the not-found page's own, so clear them before rendering.
    document.head
      .querySelectorAll('title, meta[name="description"], meta[name="robots"], meta[property^="og:"], meta[name^="twitter:"], link[rel="canonical"], link[rel="alternate"][hreflang]')
      .forEach((el) => el.remove());
  }
  createRoot(container).render(app);
}

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
  createRoot(container).render(app);
}

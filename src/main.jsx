import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './styles/global.css';
import App from './App.jsx';

const container = document.getElementById('root');
const app = (
  <StrictMode>
    <App />
  </StrictMode>
);

// Deliberately createRoot, not hydrateRoot: FadeIn's scroll-reveal class
// is toggled by an IntersectionObserver whose callback timing relative to
// scripts/prerender.mjs's capture moment isn't deterministic, so the
// prerendered markup and a fresh client render can legitimately disagree
// on which elements already have `.visible` — a real hydration mismatch
// (React error #418), not a bug worth chasing for a low-interactivity
// marketing site. createRoot still gets the full SEO/first-paint value of
// prerendering (crawlers and the initial paint see the real static HTML);
// it just repaints once JS takes over instead of reusing the DOM nodes.
createRoot(container).render(app);

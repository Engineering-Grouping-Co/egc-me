import { useLayoutEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { DEFAULT_LOCALE, LOCALES } from '../content/routes';

function detectLocale() {
  if (typeof navigator === 'undefined') return DEFAULT_LOCALE;
  const langs = navigator.languages && navigator.languages.length
    ? navigator.languages
    : [navigator.language || DEFAULT_LOCALE];
  for (const l of langs) {
    const base = String(l).slice(0, 2).toLowerCase();
    if (LOCALES.includes(base)) return base;
  }
  return DEFAULT_LOCALE;
}

/**
 * Mounted only at "/". The static dist/index.html shipped for this route is
 * hand-written by scripts/prerender.mjs (not a Playwright capture of this
 * component) with a no-JS <meta http-equiv="refresh"> fallback pointed at
 * /en/ plus a visible manual link — this component only handles the
 * JS-capable case, where it silently swaps in the browser-preferred locale
 * before that fallback ever has a chance to fire.
 */
export default function RootRedirect() {
  const navigate = useNavigate();

  useLayoutEffect(() => {
    navigate(`/${detectLocale()}/`, { replace: true });
  }, [navigate]);

  return null;
}

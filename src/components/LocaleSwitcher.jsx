import { useLocation, useNavigate } from 'react-router-dom';
import { useLocale } from '../i18n/LocaleContext';
import { UI } from '../content/ui';

/**
 * Swaps only the locale segment of the current path so toggling language
 * preserves the page you're on (/en/what-we-build <-> /ar/what-we-build)
 * instead of bouncing to home. Slugs are the same in both locales, so this
 * is a plain string replace, not a route lookup table.
 */
export default function LocaleSwitcher({ className = '' }) {
  const locale = useLocale();
  const navigate = useNavigate();
  const location = useLocation();
  const ui = UI[locale];

  const switchTo = () => {
    const next = ui.switchLocaleTo;
    const nextPath = location.pathname.replace(/^\/(en|ar)/, `/${next}`);
    navigate(`${nextPath}${location.search}${location.hash}`);
  };

  return (
    <button type="button" className={`locale-switch ${className}`} onClick={switchTo} lang={ui.switchLocaleTo}>
      {ui.switchLocaleLabel}
    </button>
  );
}

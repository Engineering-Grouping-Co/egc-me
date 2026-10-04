import { Link, useLocation } from 'react-router-dom';
import { Globe } from 'lucide-react';
import { useLocale } from '../i18n/LocaleContext';
import { UI } from '../content/ui';

/**
 * Swaps only the locale prefix of the current path, so toggling language keeps
 * you on the same page. Rendered as a real <a hreflang> so crawlers can follow it.
 */
function otherLocalePath(pathname, locale) {
  const english = pathname.replace(/^\/ar(\/|$)/, '/');
  if (locale === 'ar') return english;
  return english === '/' ? '/ar/' : `/ar${english}`;
}

export default function LocaleSwitcher({ className = '', onNavigate }) {
  const locale = useLocale();
  const { pathname, search, hash } = useLocation();
  const ui = UI[locale];
  const target = locale === 'ar' ? 'en' : 'ar';

  return (
    <Link
      to={`${otherLocalePath(pathname, locale)}${search}${hash}`}
      className={`lang-switch ${className}`}
      hrefLang={target}
      lang={target}
      aria-label={ui.switchAria}
      onClick={onNavigate}
    >
      <Globe size={18} aria-hidden="true" />
      <span>{ui.switchLabel}</span>
    </Link>
  );
}

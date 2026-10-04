import { createContext, useContext } from 'react';
import { DEFAULT_LOCALE, routePath } from '../content/routes';

export const LocaleContext = createContext(DEFAULT_LOCALE);

export function useLocale() {
  return useContext(LocaleContext);
}

/** Returns a function that turns a route segment into a locale-correct path. */
export function useLocalePath() {
  const locale = useLocale();
  return (segment = '') => routePath(locale, segment);
}

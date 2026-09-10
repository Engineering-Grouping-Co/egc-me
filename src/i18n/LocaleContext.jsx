import { createContext, useContext } from 'react';
import { DEFAULT_LOCALE } from '../content/routes';

export const LocaleContext = createContext(DEFAULT_LOCALE);

export function useLocale() {
  return useContext(LocaleContext);
}

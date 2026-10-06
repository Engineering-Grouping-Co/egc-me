import { useContent } from '../content';
import { useLocale } from '../i18n/LocaleContext';
import { byKey } from '../content/catalog';

/** Rows for DisciplineRows from route keys: the four core disciplines and the catalogue pages alike. */
export function useServiceItems(keys) {
  const locale = useLocale();
  const { SERVICES } = useContent();
  return keys
    .map((key) => {
      const core = SERVICES.find((s) => s.id === key);
      if (core) return { id: key, icon: core.icon, label: core.label, summary: core.summary };
      const c = byKey(key);
      return c ? { id: key, icon: c.icon, label: c[locale].name, summary: c[locale].short } : null;
    })
    .filter(Boolean);
}

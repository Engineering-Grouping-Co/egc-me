/* Core company facts. `legalName` is the CR-registered name (see /legal-profile);
 * `name` is the brand name as shown on the logo. `alternateNames` feeds JSON-LD
 * (Organization + WebSite) so Google can connect every name people search for. */
const SHARED = {
  phone: '+966 50 434 1861',
  email: 'info@egc-me.com',
  cr: '7040750007',
  vat: '314367391500003',
  founded: '2006',
  supplierPortal: 'https://erp.egc-me.com',
  appUrl: 'https://app.egc-me.com',
  linkedin: 'https://www.linkedin.com/company/egc-me/',
  nationalAddress: 'JDJA8188',
  district: 'Almanar District',
  alternateNames: [
    'EGC',
    'Engineering Grouping Co.',
    'Engineering Grouping Company',
    'Engineering Group',
    'التجمع الهندسي',
    'شركة التجمع الهندسي',
    'المجموعة الهندسية',
    'شركة المجموعة الهندسية',
  ],
};

export const SITE = {
  en: {
    ...SHARED,
    name: 'Engineering Grouping Co.',
    legalName: 'Engineering Grouping Co.',
    shortName: 'EGC',
    tagline: 'Healthcare contractor for imaging rooms',
    address: 'JDJA8188, Almanar District, Jeddah, Kingdom of Saudi Arabia',
    city: 'Jeddah',
    region: 'Makkah Region',
    country: 'Kingdom of Saudi Arabia',
    hours: 'Sun – Thu, 8:00 AM – 5:00 PM',
  },
  ar: {
    ...SHARED,
    name: 'التجمع الهندسي',
    legalName: 'شركة المجموعة الهندسية',
    shortName: 'EGC',
    tagline: 'مقاول مشاريع صحية لغرف التصوير الطبي',
    address: 'الرمز الوطني JDJA8188، حي المنار، جدة، المملكة العربية السعودية',
    city: 'جدة',
    region: 'منطقة مكة المكرمة',
    country: 'المملكة العربية السعودية',
    hours: 'الأحد – الخميس، 8:00 صباحًا – 5:00 مساءً',
  },
};

export const KSA_CITIES = ['Jeddah', 'Riyadh', 'Dammam', 'Madinah', 'Jubail', 'Abha'];

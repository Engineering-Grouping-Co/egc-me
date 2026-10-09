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
  linkedin: 'https://www.linkedin.com/company/engineering-grouping-company',
  nationalAddress: 'JMDA2171',
  buildingNumber: '2171',
  additionalNumber: '7373',
  postalCode: '22529',
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
    street: 'Al Ahmedeh',
    district: 'Ad Dahiah District',
    address: 'Building 2171, Al Ahmedeh, Ad Dahiah District, Jeddah 22529-7373, Kingdom of Saudi Arabia (short address JMDA2171)',
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
    street: 'الاحامده',
    district: 'حي الضاحية',
    address: 'مبنى 2171، الاحامده، حي الضاحية، جدة 22529-7373، المملكة العربية السعودية (العنوان المختصر JMDA2171)',
    city: 'جدة',
    region: 'منطقة مكة المكرمة',
    country: 'المملكة العربية السعودية',
    hours: 'الأحد – الخميس، 8:00 صباحًا – 5:00 مساءً',
  },
};

export const KSA_CITIES = ['Jeddah', 'Riyadh', 'Dammam', 'Madinah', 'Jubail', 'Abha'];

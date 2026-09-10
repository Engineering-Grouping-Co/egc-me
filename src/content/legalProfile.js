/* /legal-profile content. Document `title`/`titleAr` are kept as a fixed
 * bilingual pair regardless of site locale (official CR-registered naming
 * shown both ways is more correct here than swapping per UI language);
 * everything else is locale-keyed. */

export const CR_DATA = {
  en: { number: '7040750007', entity: 'Engineering Grouping Co.', entityAr: 'شركة المجموعة الهندسية', legalType: 'Limited Liability Company (LLC)', issuingCity: 'Jeddah', region: 'Makkah', status: 'Active' },
  ar: { number: '7040750007', entity: 'Engineering Grouping Co.', entityAr: 'شركة المجموعة الهندسية', legalType: 'شركة ذات مسؤولية محدودة', issuingCity: 'جدة', region: 'مكة المكرمة', status: 'سارية' },
};

export const VAT_NUMBER = '314367391500003';

export const NATIONAL_ADDRESS = {
  en: { code: 'JDJA8188', district: 'Almanar District', city: 'Jeddah', country: 'Kingdom of Saudi Arabia' },
  ar: { code: 'JDJA8188', district: 'حي المنار', city: 'جدة', country: 'المملكة العربية السعودية' },
};

export const CONTACTS = {
  en: [
    { label: 'General Enquiries', value: 'info@egc-me.com', href: 'mailto:info@egc-me.com' },
    { label: 'Phone', value: '+966 50 434 1861', href: 'tel:+966504341861' },
    { label: 'Supplier Portal', value: 'erp.egc-me.com', href: 'https://erp.egc-me.com', external: true },
  ],
  ar: [
    { label: 'استفسارات عامة', value: 'info@egc-me.com', href: 'mailto:info@egc-me.com' },
    { label: 'الهاتف', value: '+966 50 434 1861', href: 'tel:+966504341861' },
    { label: 'بوابة الموردين', value: 'erp.egc-me.com', href: 'https://erp.egc-me.com', external: true },
  ],
};

/* Locale-independent facts per document. */
const DOCS_BASE = {
  cr: { file: '/legal-documents/Commercial Register.pdf', type: 'pdf', status: 'available', category: 'registration' },
  'national-address': { file: '/legal-documents/National Address.jpeg', type: 'image', status: 'available', category: 'registration' },
  zatca: { file: '/legal-documents/ZATCA Certificate.pdf', type: 'pdf', status: 'available', category: 'tax' },
  membership: { file: '/legal-documents/Membership Certifcate.pdf', type: 'pdf', status: 'available', category: 'membership' },
  'iso-9001': { file: null, type: 'pdf', status: 'request', category: 'certification' },
  'iso-45001': { file: null, type: 'pdf', status: 'request', category: 'certification' },
  'iso-14001': { file: null, type: 'pdf', status: 'request', category: 'certification' },
  gosi: { file: null, type: 'pdf', status: 'request', category: 'registration' },
  muqeem: { file: null, type: 'pdf', status: 'request', category: 'compliance' },
  'vat-return': { file: null, type: 'pdf', status: 'request', category: 'tax' },
  'bank-letter': { file: null, type: 'pdf', status: 'request', category: 'financial' },
  'hse-policy': { file: null, type: 'pdf', status: 'request', category: 'compliance' },
};

const DOCS_TEXT = {
  en: {
    cr: { title: 'Commercial Registration', titleAr: 'السجل التجاري', desc: 'Official CR issued by the Ministry of Commerce. CR No. 7040750007.', authority: 'Ministry of Commerce (MC)' },
    'national-address': { title: 'National Address Certificate', titleAr: 'شهادة العنوان الوطني', desc: 'Registered national address JDJA8188, Almanar District, Jeddah.', authority: 'Saudi Post (SPL)' },
    zatca: { title: 'ZATCA VAT Certificate', titleAr: 'شهادة تسجيل ضريبة القيمة المضافة', desc: `VAT registration certificate. VAT No. ${VAT_NUMBER}.`, authority: 'ZATCA' },
    membership: { title: 'Membership Certificate', titleAr: 'شهادة العضوية', desc: "Chamber of Commerce membership certificate confirming EGC's active registration.", authority: 'Chamber of Commerce — Jeddah' },
    'iso-9001': { title: 'ISO 9001 — Quality Management', titleAr: 'شهادة الجودة ISO 9001', desc: 'ISO 9001 quality management system certificate covering all fabrication, site, and software delivery operations.', authority: 'Certification Body' },
    'iso-45001': { title: 'ISO 45001 — Occupational Health & Safety', titleAr: 'شهادة السلامة المهنية ISO 45001', desc: 'Occupational health and safety management system certificate.', authority: 'Certification Body' },
    'iso-14001': { title: 'ISO 14001 — Environmental Management', titleAr: 'شهادة الإدارة البيئية ISO 14001', desc: 'Environmental management system certificate covering waste and site impact procedures.', authority: 'Certification Body' },
    gosi: { title: 'GOSI Certificate', titleAr: 'شهادة التأمينات الاجتماعية (جوسي)', desc: 'General Organisation for Social Insurance registration and compliance certificate.', authority: 'GOSI' },
    muqeem: { title: 'Muqeem / Iqama Compliance', titleAr: 'شهادة الامتثال (مقيم)', desc: 'Compliance confirmation for expatriate employee residency documentation.', authority: 'Ministry of Interior' },
    'vat-return': { title: 'Latest VAT Return Acknowledgement', titleAr: 'إقرار ضريبة القيمة المضافة', desc: 'Most recent ZATCA VAT return filing acknowledgement confirming tax compliance.', authority: 'ZATCA' },
    'bank-letter': { title: 'Bank Comfort / Reference Letter', titleAr: 'خطاب المصرف', desc: "Official bank reference letter confirming EGC's account standing and financial relationship.", authority: 'EGC Banking Partner' },
    'hse-policy': { title: 'HSE Policy Statement', titleAr: 'سياسة الصحة والسلامة والبيئة', desc: 'Health, Safety and Environment policy statement signed by company management.', authority: 'Engineering Grouping Co.' },
  },
  ar: {
    cr: { title: 'السجل التجاري', titleAr: 'Commercial Registration', desc: 'السجل التجاري الرسمي الصادر عن وزارة التجارة. رقم السجل 7040750007.', authority: 'وزارة التجارة' },
    'national-address': { title: 'شهادة العنوان الوطني', titleAr: 'National Address Certificate', desc: 'العنوان الوطني المسجل JDJA8188، حي المنار، جدة.', authority: 'البريد السعودي (سبل)' },
    zatca: { title: 'شهادة تسجيل ضريبة القيمة المضافة', titleAr: 'ZATCA VAT Certificate', desc: `شهادة تسجيل ضريبة القيمة المضافة. الرقم الضريبي ${VAT_NUMBER}.`, authority: 'هيئة الزكاة والضريبة والجمارك' },
    membership: { title: 'شهادة العضوية', titleAr: 'Membership Certificate', desc: 'شهادة عضوية الغرفة التجارية تؤكد التسجيل الفعّال لشركة EGC.', authority: 'الغرفة التجارية — جدة' },
    'iso-9001': { title: 'شهادة الجودة ISO 9001', titleAr: 'ISO 9001 — Quality Management', desc: 'شهادة نظام إدارة الجودة ISO 9001 تغطي جميع عمليات التصنيع والموقع وتسليم البرمجيات.', authority: 'جهة اعتماد' },
    'iso-45001': { title: 'شهادة السلامة المهنية ISO 45001', titleAr: 'ISO 45001 — Occupational Health & Safety', desc: 'شهادة نظام إدارة الصحة والسلامة المهنية.', authority: 'جهة اعتماد' },
    'iso-14001': { title: 'شهادة الإدارة البيئية ISO 14001', titleAr: 'ISO 14001 — Environmental Management', desc: 'شهادة نظام الإدارة البيئية تغطي إجراءات النفايات والأثر البيئي للمواقع.', authority: 'جهة اعتماد' },
    gosi: { title: 'شهادة التأمينات الاجتماعية (جوسي)', titleAr: 'GOSI Certificate', desc: 'شهادة تسجيل والتزام المؤسسة العامة للتأمينات الاجتماعية.', authority: 'التأمينات الاجتماعية' },
    muqeem: { title: 'شهادة الامتثال (مقيم)', titleAr: 'Muqeem / Iqama Compliance', desc: 'تأكيد الامتثال لتوثيق إقامة الموظفين الوافدين.', authority: 'وزارة الداخلية' },
    'vat-return': { title: 'إقرار ضريبة القيمة المضافة', titleAr: 'Latest VAT Return Acknowledgement', desc: 'أحدث إقرار لإيداع ضريبة القيمة المضافة يؤكد الامتثال الضريبي.', authority: 'هيئة الزكاة والضريبة والجمارك' },
    'bank-letter': { title: 'خطاب المصرف', titleAr: 'Bank Comfort / Reference Letter', desc: 'خطاب مرجعي رسمي من المصرف يؤكد وضع حساب EGC وعلاقتها المالية.', authority: 'الشريك المصرفي لـ EGC' },
    'hse-policy': { title: 'سياسة الصحة والسلامة والبيئة', titleAr: 'HSE Policy Statement', desc: 'بيان سياسة الصحة والسلامة والبيئة موقّع من إدارة الشركة.', authority: 'شركة المجموعة الهندسية' },
  },
};

export function getDocuments(locale) {
  return Object.keys(DOCS_BASE).map((id) => ({ id, ...DOCS_BASE[id], ...DOCS_TEXT[locale][id] }));
}

export const CATEGORY_LABELS = {
  en: { registration: 'Registration', tax: 'Tax', membership: 'Membership', certification: 'Certification', compliance: 'Compliance', financial: 'Financial' },
  ar: { registration: 'التسجيل', tax: 'الضرائب', membership: 'العضوية', certification: 'الشهادات', compliance: 'الامتثال', financial: 'مالية' },
};

export const LP_COPY = {
  en: {
    pageOverline: 'Company Disclosures',
    pageTitle: 'Legal & Commercial Profile',
    pageSubtitle: 'Official commercial registration, national address, ZATCA, and certification records for Engineering Grouping Co. — maintained for public transparency and legal compliance within the Kingdom of Saudi Arabia.',
    idCrLabel: 'CR Number',
    idVatLabel: 'VAT Number',
    idAddressLabel: 'National Address',
    idCityLabel: 'Registered City',
    regionSuffix: 'Region',
    docsTitle: 'Official Documents',
    docsBadge: 'Download',
    docsIntro: 'Documents currently on file are available to view and download directly. All other documents can be requested via email for tender submissions, procurement, or legal purposes.',
    docAvailable: 'Available',
    docOnRequest: 'On Request',
    docIssuedBy: 'Issued by:',
    docView: 'View',
    docDownload: 'Download',
    docRequest: 'Request',
    crTitle: 'Commercial Registration',
    crBadge: 'CR',
    crLabel: 'CR Number',
    crRows: ['Registered Entity', 'Arabic Name', 'Legal Structure', 'Issuing Authority', 'Region', 'CR Status'],
    crVerify: 'Verify independently at',
    crVerifySuffix: 'using the CR number above.',
    naTitle: 'National Address',
    naBadge: 'SPL',
    naCodeLabel: 'Short Address',
    naCodeSub: 'Registered with Saudi Post (Wasel)',
    naRows: ['District', 'City', 'Country'],
    naVerify: 'Verify at',
    zatcaTitle: 'Tax Registration — ZATCA',
    zatcaBadge: 'VAT',
    zatcaLabel: 'VAT Registration Number',
    zatcaAuthTitle: 'Zakat, Tax & Customs Authority',
    zatcaAuthSub: 'Kingdom of Saudi Arabia',
    zatcaRows: ['VAT Registration No.', 'Tax Scheme', 'E-Invoice Compliance'],
    zatcaTaxScheme: 'Value Added Tax (VAT) — 15%',
    zatcaEinvoice: 'Fatoorah Phase II — QR code on all invoices',
    zatcaNote: 'VAT registration can be verified at',
    zatcaNoteSuffix: 'All EGC invoices include the VAT number and a ZATCA-compliant QR code as required under the e-invoicing (Fatoorah) mandate.',
    certsTitle: 'Quality & Compliance Certifications',
    contactsTitle: 'Request Documents',
    contactsIntro: 'For documents not available above, or for certified copies required for tender, procurement, or legal submissions:',
    disclaimer1: "The information on this page reflects EGC's publicly registered corporate and legal details.",
    disclaimer2: 'CR No.',
    disclaimer3: 'VAT No.',
    disclaimer4: 'National Address',
    disclaimer5: 'EGC is committed to maintaining accurate public disclosures in compliance with Saudi Arabian commercial law. For queries contact',
    requestMailSubjectPrefix: 'Document Request — ',
    requestMailBody: 'Dear EGC,\n\nPlease provide a copy of the following document:\n\n',
    requestMailBodySuffix: '\n\nThank you.',
  },
  ar: {
    pageOverline: 'إفصاحات الشركة',
    pageTitle: 'الملف القانوني والتجاري',
    pageSubtitle: 'السجل التجاري الرسمي، والعنوان الوطني، وشهادة هيئة الزكاة والضريبة والجمارك، وسجلات الاعتماد لشركة المجموعة الهندسية — محفوظة للشفافية العامة والامتثال القانوني داخل المملكة العربية السعودية.',
    idCrLabel: 'رقم السجل التجاري',
    idVatLabel: 'الرقم الضريبي',
    idAddressLabel: 'العنوان الوطني',
    idCityLabel: 'مدينة التسجيل',
    regionSuffix: 'منطقة',
    docsTitle: 'المستندات الرسمية',
    docsBadge: 'تنزيل',
    docsIntro: 'المستندات المتوفرة حاليًا متاحة للعرض والتنزيل مباشرة. يمكن طلب باقي المستندات عبر البريد الإلكتروني لأغراض المناقصات أو المشتريات أو الأغراض القانونية.',
    docAvailable: 'متاح',
    docOnRequest: 'عند الطلب',
    docIssuedBy: 'الجهة المُصدرة:',
    docView: 'عرض',
    docDownload: 'تنزيل',
    docRequest: 'طلب',
    crTitle: 'السجل التجاري',
    crBadge: 'CR',
    crLabel: 'رقم السجل التجاري',
    crRows: ['الكيان المسجل', 'الاسم بالعربية', 'الشكل القانوني', 'الجهة المُصدرة', 'المنطقة', 'حالة السجل'],
    crVerify: 'تحقق بشكل مستقل عبر',
    crVerifySuffix: 'باستخدام رقم السجل التجاري أعلاه.',
    naTitle: 'العنوان الوطني',
    naBadge: 'سبل',
    naCodeLabel: 'العنوان المختصر',
    naCodeSub: 'مسجل لدى البريد السعودي (واصل)',
    naRows: ['الحي', 'المدينة', 'الدولة'],
    naVerify: 'تحقق عبر',
    zatcaTitle: 'التسجيل الضريبي — هيئة الزكاة والضريبة والجمارك',
    zatcaBadge: 'ضريبة القيمة المضافة',
    zatcaLabel: 'الرقم الضريبي لضريبة القيمة المضافة',
    zatcaAuthTitle: 'هيئة الزكاة والضريبة والجمارك',
    zatcaAuthSub: 'المملكة العربية السعودية',
    zatcaRows: ['الرقم الضريبي', 'نوع الضريبة', 'الامتثال للفوترة الإلكترونية'],
    zatcaTaxScheme: 'ضريبة القيمة المضافة — 15%',
    zatcaEinvoice: 'المرحلة الثانية من فاتورة — رمز QR على جميع الفواتير',
    zatcaNote: 'يمكن التحقق من التسجيل الضريبي عبر',
    zatcaNoteSuffix: 'تتضمن جميع فواتير EGC الرقم الضريبي ورمز QR متوافقًا مع هيئة الزكاة والضريبة والجمارك وفق متطلبات الفوترة الإلكترونية (فاتورة).',
    certsTitle: 'شهادات الجودة والامتثال',
    contactsTitle: 'طلب المستندات',
    contactsIntro: 'للمستندات غير المتوفرة أعلاه، أو للحصول على نسخ معتمدة مطلوبة للمناقصات أو المشتريات أو التقديمات القانونية:',
    disclaimer1: 'تعكس المعلومات في هذه الصفحة التفاصيل المؤسسية والقانونية المسجلة رسميًا لشركة EGC.',
    disclaimer2: 'رقم السجل التجاري',
    disclaimer3: 'الرقم الضريبي',
    disclaimer4: 'العنوان الوطني',
    disclaimer5: 'تلتزم EGC بالحفاظ على إفصاحات عامة دقيقة وفق نظام الشركات السعودي. للاستفسارات تواصل مع',
    requestMailSubjectPrefix: 'طلب مستند — ',
    requestMailBody: 'عزيزي فريق EGC،\n\nيرجى تزويدنا بنسخة من المستند التالي:\n\n',
    requestMailBodySuffix: '\n\nشكرًا لكم.',
  },
};

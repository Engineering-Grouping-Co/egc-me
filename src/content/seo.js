/* Per-route title / description / breadcrumb name. Titles lead with the phrase
 * people actually search ("healthcare contractor Saudi Arabia", "مقاول مشاريع صحية")
 * and keep every brand variant discoverable ("EGC", "Engineering Grouping Co.",
 * "Engineering Group", "التجمع الهندسي"). */

import { CATALOG } from './catalog/index.js';
import { SERVICES_INDEX } from './servicesIndex.js';

export const SEO_CONTENT = {
  home: {
    en: {
      name: 'Home',
      title: 'Healthcare Contractor Saudi Arabia | Engineering Grouping Co. (EGC)',
      description: 'Healthcare contractor in Saudi Arabia, based in Jeddah: imaging rooms, medical gas, HVAC, fire protection, nurse call installation, fit-outs and joinery.',
    },
    ar: {
      name: 'الرئيسية',
      title: 'مقاول مشاريع صحية في السعودية | التجمع الهندسي (EGC)',
      description: 'مقاول مشاريع صحية في السعودية ومقره جدة: غرف التصوير والغازات الطبية والتكييف والحماية من الحريق وتركيب نداء الممرضات وتجهيز المستشفيات والنجارة.',
    },
  },
  about: {
    en: {
      name: 'About',
      title: 'About Engineering Grouping Co. (EGC) | Healthcare Contractor',
      description: 'Founded in 2006 in Jeddah, Engineering Grouping Co. builds imaging rooms for hospitals, with its own Wood & Corian factory and ISO-certified management systems.',
    },
    ar: {
      name: 'من نحن',
      title: 'عن التجمع الهندسي (EGC) | مقاول مشاريع صحية في جدة',
      description: 'تأسست شركة التجمع الهندسي في جدة عام 2006 وتبني غرف التصوير للمستشفيات، ولديها مصنعها الخاص للخشب والكوريان وأنظمة إدارة معتمدة وفق الآيزو.',
    },
  },
  hub: {
    en: {
      name: 'Healthcare Contractor',
      title: 'Hospital & Imaging Room Contractor in Saudi Arabia | EGC',
      description: 'Healthcare contractor for MRI, CT, PET-CT and X-ray rooms in Saudi Arabia: shielding, medical doors, MEP, fit-outs and clinical surfaces.',
    },
    ar: {
      name: 'مقاول مشاريع صحية',
      title: 'مقاول مستشفيات وغرف تصوير طبي في السعودية | EGC',
      description: 'مقاول مشاريع صحية لغرف الرنين المغناطيسي والأشعة المقطعية وPET-CT والأشعة السينية: تدريع وأبواب طبية وأعمال كهروميكانيكية وتجهيز وأسطح سريرية.',
    },
  },
  shielding: {
    en: {
      name: 'Radiation & Magnetic Shielding',
      title: 'MRI & Radiation Shielding Contractor in Saudi Arabia | EGC',
      description: 'Lead-lined CT, PET-CT and X-ray rooms and RF-shielded MRI suites in Saudi Arabia, built to the OEM site-planning guide and the physicist’s shielding report.',
    },
    ar: {
      name: 'التدريع الإشعاعي والمغناطيسي',
      title: 'مقاول تدريع إشعاعي ومغناطيسي لغرف الرنين والأشعة في السعودية | EGC',
      description: 'غرف أشعة مقطعية وPET-CT وأشعة سينية مبطنة بالرصاص وغرف رنين مغناطيسي مدرّعة ضد الترددات الراديوية في السعودية، وفق دليل الشركة المصنِّعة وتقرير الفيزيائي.',
    },
  },
  doors: {
    en: {
      name: 'Medical Doors & Access',
      title: 'Lead-Lined & RF-Shielded Medical Doors in Saudi Arabia | EGC',
      description: 'Fabrication and installation of lead-lined radiation doors, RF-shielded MRI doors and hermetic sliding doors, with interlocks and access control.',
    },
    ar: {
      name: 'الأبواب الطبية',
      title: 'أبواب طبية مبطنة بالرصاص ومدرّعة ضد الترددات الراديوية في السعودية | EGC',
      description: 'تصنيع وتركيب أبواب إشعاعية مبطنة بالرصاص وأبواب رنين مغناطيسي مدرّعة وأبواب انزلاقية محكمة الغلق، مع قفل تبادلي وتحكم بالدخول.',
    },
  },
  mep: {
    en: {
      name: 'Healthcare MEP',
      title: 'Healthcare MEP Contractor in Saudi Arabia | EGC',
      description: 'Healthcare MEP in Saudi Arabia: medical gas, HVAC, fire protection, nurse call installation, earthing and EMI-aware routing, coordinated with the shielding.',
    },
    ar: {
      name: 'الأعمال الكهروميكانيكية الطبية',
      title: 'مقاول أعمال كهروميكانيكية للمنشآت الصحية في السعودية | EGC',
      description: 'أعمال كهروميكانيكية طبية في السعودية: غازات طبية وتكييف وحماية من الحريق وتركيب نداء الممرضات وتأريض، بالتنسيق مع التدريع.',
    },
  },
  surfaces: {
    en: {
      name: 'Infection-Control Surfaces',
      title: 'Corian & Infection-Control Surfaces for Hospitals | EGC',
      description: 'Seamless Corian counters, nurse stations, scrub sinks and medical joinery, fabricated in our own Jeddah factory for clinical cleaning protocols.',
    },
    ar: {
      name: 'الأسطح المقاومة للعدوى',
      title: 'أسطح كوريان ونجارة طبية مقاومة للعدوى للمستشفيات في السعودية | EGC',
      description: 'منضدات كوريان متصلة ومحطات تمريض ومغاسل جراحية ونجارة طبية، تُصنَّع في مصنعنا بجدة وفق بروتوكولات التنظيف السريري.',
    },
  },
  manufacturing: {
    en: {
      name: 'Manufacturing',
      title: 'Wood & Corian Factory in Jeddah: Doors & Joinery | EGC',
      description: 'EGC’s Jeddah Wood & Corian factory fabricates solid-surface counters and architectural joinery for healthcare, airport and military-hospital interiors.',
    },
    ar: {
      name: 'التصنيع',
      title: 'مصنع كوريان ونجارة في جدة، السعودية | تصنيع EGC',
      description: 'يصنّع مصنع الخشب والكوريان التابع لـ EGC في جدة منضدات الأسطح الصلبة والنجارة المعمارية للمنشآت الصحية ومطار جدة والمستشفيات العسكرية.',
    },
  },
  software: {
    en: {
      name: 'Software Engineering',
      title: 'HIS, RIS & ERP Software Development in Saudi Arabia | EGC',
      description: 'Hospital and radiology information systems, patient information management and ERP built for ZATCA e-invoicing, GOSI/WPS and PDPL, plus bilingual websites.',
    },
    ar: {
      name: 'هندسة البرمجيات',
      title: 'تطوير أنظمة المستشفيات والأشعة وتخطيط الموارد في السعودية | EGC',
      description: 'أنظمة معلومات المستشفيات والأشعة وإدارة المرضى وتخطيط الموارد وفق الفوترة الإلكترونية والتأمينات الاجتماعية وحماية الأجور ونظام حماية البيانات، ومواقع ثنائية اللغة.',
    },
  },
  projects: {
    en: {
      name: 'Projects',
      title: 'Healthcare Projects Across Saudi Arabia | EGC Project Map',
      description: 'EGC’s healthcare room-preparation and manufacturing projects across Jeddah, Riyadh, Dammam, Madinah, Jubail and Abha.',
    },
    ar: {
      name: 'المشاريع',
      title: 'مشاريع صحية في أنحاء السعودية | خريطة مشاريع EGC',
      description: 'مشاريع تجهيز الغرف الطبية والتصنيع التي نفذتها EGC في جدة والرياض والدمام والمدينة المنورة والجبيل وأبها.',
    },
  },
  careers: {
    en: {
      name: 'Careers',
      title: 'Careers at EGC | Healthcare Construction & Software Jobs in Jeddah',
      description: 'Open roles across healthcare projects, the Wood & Corian factory, software engineering and corporate functions at EGC in Jeddah.',
    },
    ar: {
      name: 'الوظائف',
      title: 'الوظائف في EGC | وظائف إنشاءات طبية وبرمجيات في جدة',
      description: 'وظائف شاغرة في المشاريع الطبية ومصنع الخشب والكوريان وهندسة البرمجيات والوظائف الإدارية في EGC بجدة.',
    },
  },
  suppliers: {
    en: {
      name: 'Suppliers',
      title: 'Become an Approved Supplier | EGC Vendor Registration',
      description: 'Register as an approved EGC vendor: procurement categories, prequalification steps, document requirements and the supplier portal.',
    },
    ar: {
      name: 'الموردون',
      title: 'سجّل كمورد معتمد | تسجيل الموردين لدى EGC، السعودية',
      description: 'سجّل كمورد معتمد لدى EGC: فئات المشتريات وخطوات التأهيل المسبق والمستندات المطلوبة وبوابة الموردين.',
    },
  },
  contact: {
    en: {
      name: 'Contact',
      title: 'Contact EGC | Healthcare Contractor, Ad Dahiah District, Jeddah',
      description: 'Contact Engineering Grouping Co. about an imaging-room, manufacturing or software project. Head office in Ad Dahiah District, Jeddah. Phone +966 50 434 1861.',
    },
    ar: {
      name: 'تواصل معنا',
      title: 'تواصل مع التجمع الهندسي (EGC) | مقاول مشاريع صحية، حي الضاحية، جدة',
      description: 'تواصل مع شركة التجمع الهندسي بخصوص مشروع غرف تصوير أو تصنيع أو برمجيات. المقر الرئيسي في حي الضاحية بجدة. هاتف ‎+966 50 434 1861‎.',
    },
  },
  legalProfile: {
    en: {
      name: 'Legal Profile',
      title: 'Legal Profile: Commercial Registration & VAT | EGC',
      description: 'EGC’s commercial registration (7040750007), VAT number, national address and certification documents.',
    },
    ar: {
      name: 'الملف القانوني',
      title: 'الملف القانوني: السجل التجاري والرقم الضريبي | EGC',
      description: 'السجل التجاري (7040750007) والرقم الضريبي والعنوان الوطني ومستندات الاعتماد الخاصة بشركة EGC.',
    },
  },
  privacyPolicy: {
    en: { name: 'Privacy Policy', title: 'Privacy Policy | EGC', description: 'How Engineering Grouping Co. collects, uses and protects personal data.' },
    ar: { name: 'سياسة الخصوصية', title: 'سياسة الخصوصية | EGC', description: 'كيفية جمع شركة المجموعة الهندسية للبيانات الشخصية واستخدامها وحمايتها.' },
  },
  terms: {
    en: { name: 'Terms & Conditions', title: 'Terms & Conditions | EGC', description: 'Terms and conditions that apply when you use the Engineering Grouping Co. (EGC) website and its services.' },
    ar: { name: 'الشروط والأحكام', title: 'الشروط والأحكام | EGC', description: 'الشروط والأحكام التي تنطبق عند استخدام موقع شركة التجمع الهندسي (EGC) وخدماتها.' },
  },
  notFound: {
    en: { name: 'Page not found', title: 'Page not found | EGC', description: 'This page does not exist.' },
    ar: { name: 'الصفحة غير موجودة', title: 'الصفحة غير موجودة | EGC', description: 'هذه الصفحة غير موجودة.' },
  },
};

/* The catalogue pages and the services index carry their own SEO copy next to their content. */
SEO_CONTENT.services = {
  en: SERVICES_INDEX.en.seo,
  ar: SERVICES_INDEX.ar.seo,
};
for (const c of CATALOG) {
  SEO_CONTENT[c.key] = {
    en: { name: c.en.name, title: c.en.title, description: c.en.description },
    ar: { name: c.ar.name, title: c.ar.title, description: c.ar.description },
  };
}

/** SEO entry for any route key. */
export function getSeo(routeKey, locale) {
  return SEO_CONTENT[routeKey][locale];
}

/* CAREER_FILTERS ids match each role's `dept` field. Job descriptions now
 * live directly on each role (fixes the old Careers.jsx JOB_DESCS lookup,
 * which was keyed to job titles from an earlier "Steel/Wood/Lead Sheet"
 * era and no longer matched any real listing). Steel Fabricator was
 * dropped from open roles to stay consistent with the Steel Factory's
 * paused-production status (see src/content/manufacturing.js); CNC
 * Machine Operator is reframed under Manufacturing for the active Wood &
 * Corian factory instead. */

export const CAREER_FILTERS = {
  en: [
    { id: 'all', label: 'All' },
    { id: 'healthcare', label: 'Healthcare Projects' },
    { id: 'manufacturing', label: 'Manufacturing' },
    { id: 'software', label: 'Software Engineering' },
    { id: 'corporate', label: 'Corporate & Support' },
  ],
  ar: [
    { id: 'all', label: 'الكل' },
    { id: 'healthcare', label: 'المشاريع الطبية' },
    { id: 'manufacturing', label: 'التصنيع' },
    { id: 'software', label: 'هندسة البرمجيات' },
    { id: 'corporate', label: 'الشؤون الإدارية والدعم' },
  ],
};

export const CULTURE = {
  en: [
    { title: 'In-House Shop Floor', desc: 'Work directly in our Jeddah workshops with master fabricators and carpenters using advanced CNC machinery.', icon: 'wrench' },
    { title: 'Giga-Project Scale', desc: "Contribute to Saudi Arabia's landmark healthcare and Vision 2030 projects — EGC is on the ground preparing the rooms and building the systems behind them.", icon: 'building' },
    { title: 'Career Advancement', desc: 'Clear training paths from apprentice to team leader, and project coordinators to sector heads — across construction, manufacturing, and software.', icon: 'trending-up' },
    { title: 'Safety First Culture', desc: 'Strict HSE standards across all sites and workshops through regular training, clean lines, and quality gear.', icon: 'shield-check' },
  ],
  ar: [
    { title: 'ورش عمل داخلية', desc: 'اعمل مباشرة في ورشنا بجدة إلى جانب حرفيين ونجارين متمرسين يستخدمون آلات CNC المتقدمة.', icon: 'wrench' },
    { title: 'مشاريع بحجم ضخم', desc: 'ساهم في مشاريع الرعاية الصحية البارزة ومشاريع رؤية 2030 في المملكة — EGC حاضرة ميدانيًا في تجهيز الغرف وبناء الأنظمة التي تقف خلفها.', icon: 'building' },
    { title: 'تطور وظيفي واضح', desc: 'مسارات تدريب واضحة من متدرب إلى قائد فريق، ومن منسق مشروع إلى رئيس قطاع — عبر الإنشاءات والتصنيع والبرمجيات.', icon: 'trending-up' },
    { title: 'ثقافة السلامة أولًا', desc: 'معايير صحة وسلامة صارمة في جميع المواقع والورش عبر تدريب دوري وتنظيم وأدوات حماية عالية الجودة.', icon: 'shield-check' },
  ],
};

export const CAREERS = {
  en: [
    { title: 'Healthcare Project Supervisor', dept: 'healthcare', location: 'Jeddah / Site', type: 'Full-time', desc: 'Supervise on-site execution of healthcare room-preparation packages, coordinating shielding, MEP, and joinery crews against the project programme.' },
    { title: 'Radiation Shielding Technician', dept: 'healthcare', location: 'Jeddah / Site', type: 'Full-time', desc: 'Install lead-lined and structural shielding systems for MRI, CT, PET-CT and radiation therapy rooms to specification.' },
    { title: 'Project Engineer — Healthcare', dept: 'healthcare', location: 'Jeddah / Site', type: 'Full-time', desc: 'Manage shop drawings, technical coordination, and design verification for healthcare room-preparation projects.' },
    { title: 'Site Supervisor — Joinery', dept: 'manufacturing', location: 'Jeddah / Site', type: 'Full-time', desc: 'Oversee installation of architectural joinery and casework on commercial and healthcare fit-out sites.' },
    { title: 'Joinery Shop Manager', dept: 'manufacturing', location: 'Jeddah', type: 'Full-time', desc: "Direct operations at EGC's Wood & Corian factory — allocate materials, schedule craftsmen, and maintain finishing quality." },
    { title: 'Corian Surface Fabricator', dept: 'manufacturing', location: 'Jeddah', type: 'Full-time', desc: 'Fabricate seamless solid-surface countertops, vanities, and clinical surfaces to shop drawing tolerances.' },
    { title: 'CNC Machine Operator', dept: 'manufacturing', location: 'Jeddah', type: 'Full-time', desc: 'Operate and program CNC cutting equipment for precision timber and solid-surface components at the Wood & Corian factory.' },
    { title: 'Software Engineer — HIS/RIS Integration', dept: 'software', location: 'Jeddah', type: 'Full-time', desc: 'Build and integrate Hospital and Radiology Information System modules for healthcare clients.' },
    { title: 'ERP Implementation Specialist', dept: 'software', location: 'Jeddah', type: 'Full-time', desc: 'Configure and deploy ERP and managerial software with ZATCA, GOSI/WPS, and PDPL compliance built in.' },
    { title: 'Full-Stack Web Developer', dept: 'software', location: 'Jeddah', type: 'Full-time', desc: 'Design and build bilingual (Arabic/English) client-facing websites and web applications.' },
    { title: 'HSE Officer', dept: 'corporate', location: 'Jeddah / Site', type: 'Full-time', desc: 'Monitor workshop and site compliance, run daily toolbox talks, audit equipment, and report incidents to management.' },
    { title: 'QA/QC Inspector', dept: 'corporate', location: 'Jeddah / Site', type: 'Full-time', desc: 'Perform inspections across shielding, joinery, and MEP works, and document compliance for client handovers.' },
    { title: 'Procurement Specialist', dept: 'corporate', location: 'Jeddah', type: 'Full-time', desc: 'Liaise with approved suppliers, evaluate bids, negotiate terms, and secure delivery to project sites and workshops.' },
    { title: 'Business Development Executive', dept: 'corporate', location: 'Jeddah', type: 'Full-time', desc: 'Identify opportunities across healthcare, manufacturing, and software clients, and coordinate pre-qualification submissions.' },
  ],
  ar: [
    { title: 'مشرف مشاريع طبية', dept: 'healthcare', location: 'جدة / الموقع', type: 'دوام كامل', desc: 'الإشراف على تنفيذ حزم تجهيز الغرف الطبية ميدانيًا، وتنسيق فرق التدريع والأعمال الكهروميكانيكية والنجارة وفق برنامج المشروع.' },
    { title: 'فني تدريع إشعاعي', dept: 'healthcare', location: 'جدة / الموقع', type: 'دوام كامل', desc: 'تركيب أنظمة التدريع الإنشائي والمُبطّن بالرصاص لغرف الرنين المغناطيسي والأشعة المقطعية وPET-CT والعلاج الإشعاعي وفق المواصفات.' },
    { title: 'مهندس مشروع — القطاع الطبي', dept: 'healthcare', location: 'جدة / الموقع', type: 'دوام كامل', desc: 'إدارة مخططات التنفيذ والتنسيق الفني والتحقق من التصميم لمشاريع تجهيز الغرف الطبية.' },
    { title: 'مشرف موقع — النجارة', dept: 'manufacturing', location: 'جدة / الموقع', type: 'دوام كامل', desc: 'الإشراف على تركيب النجارة المعمارية والخزائن في مواقع التجهيز التجارية والطبية.' },
    { title: 'مدير ورشة النجارة', dept: 'manufacturing', location: 'جدة', type: 'دوام كامل', desc: 'إدارة عمليات مصنع الخشب والكوريان التابع لـ EGC — توزيع المواد، وجدولة الحرفيين، والحفاظ على جودة التشطيب.' },
    { title: 'فني تصنيع أسطح كوريان', dept: 'manufacturing', location: 'جدة', type: 'دوام كامل', desc: 'تصنيع أسطح صلبة متصلة الأجزاء لمنضدات العمل والمغاسل والأسطح السريرية وفق تفاوتات مخططات التنفيذ.' },
    { title: 'مشغّل آلات CNC', dept: 'manufacturing', location: 'جدة', type: 'دوام كامل', desc: 'تشغيل وبرمجة معدات القطع بتقنية CNC لمكونات الخشب والأسطح الصلبة الدقيقة في مصنع الخشب والكوريان.' },
    { title: 'مهندس برمجيات — تكامل أنظمة المستشفيات والأشعة', dept: 'software', location: 'جدة', type: 'دوام كامل', desc: 'بناء ودمج وحدات أنظمة معلومات المستشفيات والأشعة لعملاء القطاع الصحي.' },
    { title: 'أخصائي تطبيق أنظمة تخطيط الموارد', dept: 'software', location: 'جدة', type: 'دوام كامل', desc: 'تهيئة ونشر برمجيات تخطيط الموارد والإدارة مع دمج التوافق مع هيئة الزكاة والضريبة والجمارك والتأمينات الاجتماعية ونظام حماية البيانات الشخصية.' },
    { title: 'مطوّر ويب متكامل', dept: 'software', location: 'جدة', type: 'دوام كامل', desc: 'تصميم وبناء مواقع وتطبيقات ويب ثنائية اللغة (عربي/إنجليزي) للعملاء.' },
    { title: 'مسؤول الصحة والسلامة المهنية', dept: 'corporate', location: 'جدة / الموقع', type: 'دوام كامل', desc: 'متابعة الامتثال في الورش والمواقع، وإجراء اجتماعات السلامة اليومية، وتدقيق المعدات، ورفع تقارير الحوادث للإدارة.' },
    { title: 'مفتش ضمان وجودة', dept: 'corporate', location: 'جدة / الموقع', type: 'دوام كامل', desc: 'إجراء عمليات تفتيش على أعمال التدريع والنجارة والأعمال الكهروميكانيكية، وتوثيق الامتثال عند التسليم للعملاء.' },
    { title: 'أخصائي مشتريات', dept: 'corporate', location: 'جدة', type: 'دوام كامل', desc: 'التنسيق مع الموردين المعتمدين، وتقييم العروض، والتفاوض على الشروط، وضمان التوريد للمواقع والورش.' },
    { title: 'تنفيذي تطوير أعمال', dept: 'corporate', location: 'جدة', type: 'دوام كامل', desc: 'تحديد الفرص لدى عملاء القطاعات الطبية والتصنيع والبرمجيات، وتنسيق طلبات التأهيل المسبق.' },
  ],
};

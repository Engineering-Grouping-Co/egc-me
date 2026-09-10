export const SUPPLIER_STEPS = {
  en: [
    { n: '01', title: 'Register', desc: 'Create a vendor account on the EGC ERP Supplier Portal at erp.egc-me.com.' },
    { n: '02', title: 'Submit Documents', desc: 'Upload your Commercial Registration (CR), ZATCA certificate, product catalogue, and relevant quality certifications.' },
    { n: '03', title: 'Prequalification Review', desc: 'Our procurement team verifies your submission and may request additional information or a site/factory visit.' },
    { n: '04', title: 'Approved Vendor', desc: "Once approved, you are listed on EGC's approved vendor register and will receive RFQs from our active project portfolio." },
  ],
  ar: [
    { n: '01', title: 'التسجيل', desc: 'أنشئ حساب مورد على بوابة موردي EGC ERP عبر erp.egc-me.com.' },
    { n: '02', title: 'تقديم المستندات', desc: 'ارفع السجل التجاري، وشهادة الزكاة والضريبة والجمارك، وكتالوج المنتجات، وشهادات الجودة ذات الصلة.' },
    { n: '03', title: 'مراجعة التأهيل المسبق', desc: 'يتحقق فريق المشتريات من طلبك وقد يطلب معلومات إضافية أو زيارة للموقع أو المصنع.' },
    { n: '04', title: 'مورد معتمد', desc: 'بعد الاعتماد، تُدرج في سجل الموردين المعتمدين لدى EGC وتبدأ في استلام طلبات عروض الأسعار من محفظة مشاريعنا النشطة.' },
  ],
};

export const WHAT_WE_SOURCE = {
  en: [
    {
      title: 'Steel & Metal Materials',
      items: ['Structural steel sections (IPE, HEA, SHS, RHS)', 'Steel plate — A36, A572, S275, S355', 'Welding consumables and gases', 'Primers, topcoats, and surface treatment materials', 'Bolts, nuts, and structural fixings'],
    },
    {
      title: 'Timber & Wood Products',
      items: ['Hardwoods — oak, teak, walnut, ash', 'MDF, plywood, and engineered boards', 'Veneers and laminates', 'Timber hardware — hinges, fittings, handles', 'Lacquers, stains, and finishing materials'],
    },
    {
      title: 'Corian, Surfaces & Shielding',
      items: ['Corian and solid surface sheets and fabricated components', 'Lead sheet and radiation shielding materials', 'Corian adhesives and polishing compounds', 'Sink hardware and surface fixtures', 'Radiation-shielded door components and hardware'],
    },
    {
      title: 'IT & Software Licensing',
      items: ['Development and cloud infrastructure services', 'Enterprise software and platform licensing', 'Hardware and networking equipment', 'Data hosting and security services', 'Third-party integrations and APIs'],
    },
  ],
  ar: [
    {
      title: 'مواد الصلب والمعادن',
      items: ['مقاطع صلب إنشائية (IPE, HEA, SHS, RHS)', 'ألواح صلب — A36, A572, S275, S355', 'مستهلكات وغازات اللحام', 'مواد التمهيد والطلاء ومعالجة الأسطح', 'براغي وصواميل ومثبتات إنشائية'],
    },
    {
      title: 'منتجات الخشب',
      items: ['أخشاب صلبة — البلوط، الساج، الجوز، الرماد', 'MDF والخشب الرقائقي والألواح الهندسية', 'القشرة الخشبية والصفائح اللامينيت', 'تجهيزات الخشب — المفصلات والتركيبات والمقابض', 'الورنيش والصبغات ومواد التشطيب'],
    },
    {
      title: 'الكوريان والأسطح والتدريع',
      items: ['ألواح ومكونات مصنّعة من الكوريان والأسطح الصلبة', 'صفائح الرصاص ومواد التدريع الإشعاعي', 'مواد لصق وتلميع الكوريان', 'تجهيزات المغاسل وتركيبات الأسطح', 'مكونات وتجهيزات الأبواب المدرّعة إشعاعيًا'],
    },
    {
      title: 'تقنية المعلومات وتراخيص البرمجيات',
      items: ['خدمات تطوير البنية التحتية السحابية', 'تراخيص البرمجيات والمنصات المؤسسية', 'أجهزة ومعدات الشبكات', 'خدمات استضافة البيانات والأمن', 'تكاملات وواجهات برمجية خارجية'],
    },
  ],
};

export const REQUIREMENTS = {
  en: [
    'Valid Commercial Registration (CR) issued by MISA',
    'ZATCA (VAT) registration certificate',
    'Bank letter or IBAN confirmation',
    'Product catalogue or service description',
    'ISO 9001 or other quality certifications (if applicable)',
    'HSE policy or OSHA compliance statement (for site suppliers)',
  ],
  ar: [
    'سجل تجاري ساري صادر عن وزارة الاستثمار (MISA)',
    'شهادة تسجيل ضريبة القيمة المضافة (ZATCA)',
    'خطاب بنكي أو تأكيد رقم الآيبان',
    'كتالوج المنتجات أو وصف الخدمة',
    'شهادة الآيزو 9001 أو شهادات جودة أخرى (إن وجدت)',
    'سياسة الصحة والسلامة المهنية أو إقرار الامتثال (لموردي المواقع)',
  ],
};

export const FAQS = {
  en: [
    { q: 'Who can register as an EGC supplier?', a: 'Any legally registered company or individual trader operating in Saudi Arabia or internationally that supplies materials, products, or services relevant to healthcare construction, manufacturing, or software engineering.' },
    { q: 'How long does the prequalification process take?', a: 'Standard prequalification takes 5–10 business days from receipt of a complete submission. Complex or high-value vendor categories may take longer if a factory or site visit is required.' },
    { q: 'Do I need ISO certification to register?', a: 'ISO certification is not mandatory for all categories, but it is required for suppliers in quality-critical product categories. The portal will indicate which documents are required for each category.' },
    { q: 'How are RFQs issued once I am approved?', a: 'Approved vendors receive RFQs directly through the EGC ERP Supplier Portal. You will be notified by email when an RFQ is available for your product or service category.' },
    { q: 'Can I update my supplier profile after registration?', a: 'Yes. You can update your profile, upload new certifications, and manage your product catalogue at any time through the Supplier Portal at erp.egc-me.com.' },
  ],
  ar: [
    { q: 'من يمكنه التسجيل كمورد لدى EGC؟', a: 'أي شركة مسجلة نظاميًا أو تاجر فردي يعمل داخل المملكة العربية السعودية أو دوليًا ويوفر مواد أو منتجات أو خدمات ذات صلة بالإنشاءات الطبية أو التصنيع أو هندسة البرمجيات.' },
    { q: 'كم تستغرق عملية التأهيل المسبق؟', a: 'يستغرق التأهيل المسبق القياسي من 5 إلى 10 أيام عمل من استلام طلب مكتمل. قد تستغرق فئات الموردين المعقدة أو عالية القيمة وقتًا أطول إذا استلزم الأمر زيارة للمصنع أو الموقع.' },
    { q: 'هل أحتاج إلى شهادة آيزو للتسجيل؟', a: 'شهادة الآيزو ليست إلزامية لجميع الفئات، لكنها مطلوبة للموردين في فئات المنتجات الحساسة للجودة. ستوضح البوابة المستندات المطلوبة لكل فئة.' },
    { q: 'كيف تُصدر طلبات عروض الأسعار بعد الاعتماد؟', a: 'يستلم الموردون المعتمدون طلبات عروض الأسعار مباشرة عبر بوابة موردي EGC ERP، وستصلك إشعارات بالبريد الإلكتروني عند توفر طلب لفئة منتجك أو خدمتك.' },
    { q: 'هل يمكنني تحديث ملفي كمورد بعد التسجيل؟', a: 'نعم، يمكنك تحديث ملفك ورفع شهادات جديدة وإدارة كتالوج منتجاتك في أي وقت عبر بوابة الموردين على erp.egc-me.com.' },
  ],
};

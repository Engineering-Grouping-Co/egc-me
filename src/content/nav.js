/* Primary navigation. Same shape in both languages. `href` values are route
 * segments (optionally with #hash) — Header converts them to locale paths.
 * `external: true` hrefs are absolute URLs. */
export const NAV = {
  en: [
    {
      id: 'about',
      label: 'About Us',
      menu: {
        intro: { title: 'Engineering Grouping Co.', text: 'A Jeddah healthcare contractor with its own factory and software team.', href: 'about', cta: 'Company overview' },
        groups: [
          {
            title: 'Company',
            links: [
              { label: 'Who we are', desc: 'Our story, businesses and clients', href: 'about' },
              { label: 'Quality and certifications', desc: 'ISO 9001, 45001 and 14001', href: 'about#quality' },
              { label: 'Legal profile', desc: 'Commercial registration, VAT and national address', href: 'legal-profile' },
            ],
          },
        ],
        feature: { image: 'hero-bg', alt: 'EGC crew installing MRI room shielding', title: 'Built by our own crews', href: 'about' },
      },
    },
    {
      id: 'sectors',
      label: 'Sectors',
      menu: {
        intro: { title: 'Healthcare construction', text: 'Imaging rooms built from the OEM siting guide, by one accountable contractor.', href: 'healthcare-contractor', cta: 'Healthcare contractor overview' },
        groups: [
          {
            title: 'Healthcare construction',
            links: [
              { label: 'Radiation and magnetic shielding', desc: 'Lead, RF and magnetic protection', href: 'healthcare-contractor/radiation-shielding' },
              { label: 'Medical doors and access', desc: 'Lead-lined and RF-shielded doors', href: 'healthcare-contractor/medical-doors' },
              { label: 'Healthcare MEP', desc: 'Gases, earthing, controlled HVAC', href: 'healthcare-contractor/healthcare-mep' },
              { label: 'Infection-control surfaces', desc: 'Corian and medical joinery', href: 'healthcare-contractor/infection-control-surfaces' },
            ],
          },
          {
            title: 'More from EGC',
            links: [
              { label: 'Manufacturing', desc: 'Wood and Corian factory in Jeddah', href: 'manufacturing' },
              { label: 'Software engineering', desc: 'HIS, RIS, ERP and websites', href: 'software-engineering' },
              { label: 'Healthcare systems and turnkey', desc: 'Nurse call and OR clocks', href: 'healthcare-systems', soon: true },
            ],
          },
        ],
      },
    },
    { id: 'projects', label: 'Projects', href: 'projects' },
    {
      id: 'work',
      label: 'Work With Us',
      menu: {
        intro: { title: 'Join or supply EGC', text: 'Build your career with us, or become an approved vendor.', href: 'careers', cta: 'Open positions' },
        groups: [
          {
            title: 'Opportunities',
            links: [
              { label: 'Careers', desc: 'Roles across projects, factory and software', href: 'careers' },
              { label: 'Suppliers', desc: 'Prequalification and vendor registration', href: 'suppliers' },
              { label: 'Supplier portal', desc: 'Sign in to the EGC ERP portal', href: 'https://erp.egc-me.com', external: true },
            ],
          },
        ],
      },
    },
  ],
  ar: [
    {
      id: 'about',
      label: 'من نحن',
      menu: {
        intro: { title: 'التجمع الهندسي', text: 'مقاول مشاريع صحية في جدة، لديه مصنعه الخاص وفريق برمجيات.', href: 'about', cta: 'نظرة عامة على الشركة' },
        groups: [
          {
            title: 'الشركة',
            links: [
              { label: 'من نحن', desc: 'قصتنا وأعمالنا وعملاؤنا', href: 'about' },
              { label: 'الجودة والاعتمادات', desc: 'ISO 9001 و45001 و14001', href: 'about#quality' },
              { label: 'الملف القانوني', desc: 'السجل التجاري والرقم الضريبي والعنوان الوطني', href: 'legal-profile' },
            ],
          },
        ],
        feature: { image: 'hero-bg', alt: 'فريق EGC أثناء تركيب تدريع غرفة رنين مغناطيسي', title: 'تنفذها كوادرنا بنفسها', href: 'about' },
      },
    },
    {
      id: 'sectors',
      label: 'القطاعات',
      menu: {
        intro: { title: 'الإنشاءات الطبية', text: 'غرف تصوير تُبنى وفق دليل الشركة المصنِّعة، بمقاول واحد مسؤول.', href: 'healthcare-contractor', cta: 'نظرة عامة على مقاول المشاريع الصحية' },
        groups: [
          {
            title: 'الإنشاءات الطبية',
            links: [
              { label: 'التدريع الإشعاعي والمغناطيسي', desc: 'حماية بالرصاص والترددات الراديوية والمجال المغناطيسي', href: 'healthcare-contractor/radiation-shielding' },
              { label: 'الأبواب الطبية والتحكم بالدخول', desc: 'أبواب مبطنة بالرصاص ومدرّعة', href: 'healthcare-contractor/medical-doors' },
              { label: 'الأعمال الكهروميكانيكية الطبية', desc: 'غازات وتأريض وتكييف متحكَّم به', href: 'healthcare-contractor/healthcare-mep' },
              { label: 'الأسطح المقاومة للعدوى', desc: 'كوريان ونجارة طبية', href: 'healthcare-contractor/infection-control-surfaces' },
            ],
          },
          {
            title: 'المزيد من EGC',
            links: [
              { label: 'التصنيع', desc: 'مصنع الخشب والكوريان في جدة', href: 'manufacturing' },
              { label: 'هندسة البرمجيات', desc: 'أنظمة المستشفيات والأشعة وتخطيط الموارد والمواقع', href: 'software-engineering' },
              { label: 'الأنظمة الطبية والتسليم الشامل', desc: 'نداء الممرضات وساعات غرف العمليات', href: 'healthcare-systems', soon: true },
            ],
          },
        ],
      },
    },
    { id: 'projects', label: 'المشاريع', href: 'projects' },
    {
      id: 'work',
      label: 'اعمل معنا',
      menu: {
        intro: { title: 'انضم إلينا أو ورّد لنا', text: 'ابنِ مسيرتك المهنية معنا، أو كن موردًا معتمدًا.', href: 'careers', cta: 'الوظائف الشاغرة' },
        groups: [
          {
            title: 'الفرص',
            links: [
              { label: 'الوظائف', desc: 'وظائف في المشاريع والمصنع والبرمجيات', href: 'careers' },
              { label: 'الموردون', desc: 'التأهيل المسبق وتسجيل الموردين', href: 'suppliers' },
              { label: 'بوابة الموردين', desc: 'سجّل الدخول إلى بوابة EGC ERP', href: 'https://erp.egc-me.com', external: true },
            ],
          },
        ],
      },
    },
  ],
};

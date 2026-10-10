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
        feature: { image: 'ceiling-panel-fitting', title: 'Built by our own crews', href: 'about' },
      },
    },
    {
      id: 'services',
      label: 'Services',
      menu: {
        intro: { title: 'Everything under one roof', text: 'Specialist imaging rooms, building services, fit-out, joinery and software from one healthcare contractor with its own factory.', href: 'services', cta: 'All services' },
        groups: [
          {
            title: 'Specialist works',
            links: [
              { label: 'Radiation and magnetic shielding', desc: 'Lead, RF and magnetic protection', href: 'healthcare-contractor/radiation-shielding' },
              { label: 'Medical doors and access', desc: 'Lead-lined and RF-shielded doors', href: 'healthcare-contractor/medical-doors' },
              { label: 'Healthcare MEP', desc: 'Services for clinical rooms', href: 'healthcare-contractor/healthcare-mep' },
              { label: 'Infection-control surfaces', desc: 'Corian and medical joinery', href: 'healthcare-contractor/infection-control-surfaces' },
              { label: 'MRI, CT, PET-CT and X-ray rooms', desc: 'Imaging rooms to the OEM guide', href: 'healthcare-contractor/mri-room-construction' },
            ],
          },
          {
            title: 'Building services',
            links: [
              { label: 'Medical gas', desc: 'Oxygen, medical air and vacuum', href: 'healthcare-contractor/medical-gas-systems' },
              { label: 'HVAC', desc: 'Clinical air, pressure and filtration', href: 'healthcare-contractor/healthcare-hvac' },
              { label: 'Fire protection', desc: 'Detection, sprinklers, fire-stopping', href: 'healthcare-contractor/fire-protection' },
              { label: 'Nurse call installation', desc: 'Cabling, call points, indicators', href: 'healthcare-contractor/nurse-call-installation' },
            ],
          },
          {
            title: 'Interiors and fit-out',
            links: [
              { label: 'Hospital fit-out', desc: 'Departments, clinics, medical centres', href: 'healthcare-contractor/hospital-fit-out' },
              { label: 'Operating-room ceilings', desc: 'Sealed, cleanable ceilings', href: 'healthcare-contractor/operating-room-ceilings' },
              { label: 'Walls and wall panels', desc: 'Hygienic panels and partitions', href: 'healthcare-contractor/hygienic-wall-panels' },
              { label: 'Hermetic doors', desc: 'Sealed automatic sliding doors', href: 'healthcare-contractor/hermetic-doors' },
            ],
          },
          {
            title: 'Wood & Corian factory',
            links: [
              { label: 'Wooden doors', desc: 'Custom doors and frames', href: 'manufacturing/wooden-doors' },
              { label: 'Corian and solid surface', desc: 'Seamless counters and nurse stations', href: 'manufacturing/corian-solid-surface' },
              { label: 'Architectural joinery', desc: 'Panelling, casework, built-in furniture', href: 'manufacturing/architectural-joinery' },
              { label: 'Factory overview', desc: 'Our Jeddah workshop', href: 'manufacturing' },
            ],
          },
          {
            title: 'Software engineering',
            links: [
              { label: 'HIS and RIS', desc: 'Hospital and radiology systems', href: 'software-engineering/hospital-information-systems' },
              { label: 'ERP software', desc: 'ZATCA, GOSI and WPS built in', href: 'software-engineering/erp-software' },
              { label: 'Website development', desc: 'Arabic and English websites', href: 'software-engineering/website-development' },
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
        feature: { image: 'ceiling-panel-fitting', title: 'تنفذها كوادرنا بنفسها', href: 'about' },
      },
    },
    {
      id: 'services',
      label: 'الخدمات',
      menu: {
        intro: { title: 'كل شيء تحت سقف واحد', text: 'غرف تصوير متخصصة وخدمات المبنى والتجهيز والنجارة والبرمجيات من مقاول صحي واحد لديه مصنعه الخاص.', href: 'services', cta: 'جميع الخدمات' },
        groups: [
          {
            title: 'الأعمال المتخصصة',
            links: [
              { label: 'التدريع الإشعاعي والمغناطيسي', desc: 'حماية بالرصاص والترددات الراديوية والمجال المغناطيسي', href: 'healthcare-contractor/radiation-shielding' },
              { label: 'الأبواب الطبية والتحكم بالدخول', desc: 'أبواب مبطنة بالرصاص ومدرّعة', href: 'healthcare-contractor/medical-doors' },
              { label: 'الأعمال الكهروميكانيكية الطبية', desc: 'خدمات الغرف السريرية', href: 'healthcare-contractor/healthcare-mep' },
              { label: 'الأسطح المقاومة للعدوى', desc: 'كوريان ونجارة طبية', href: 'healthcare-contractor/infection-control-surfaces' },
              { label: 'غرف الرنين والأشعة المقطعية وPET-CT والأشعة السينية', desc: 'غرف تصوير وفق دليل الشركة المصنِّعة', href: 'healthcare-contractor/mri-room-construction' },
            ],
          },
          {
            title: 'خدمات المبنى',
            links: [
              { label: 'الغازات الطبية', desc: 'الأكسجين والهواء الطبي والتفريغ', href: 'healthcare-contractor/medical-gas-systems' },
              { label: 'التكييف والتهوية', desc: 'هواء وضغط وترشيح للمساحات السريرية', href: 'healthcare-contractor/healthcare-hvac' },
              { label: 'الحماية من الحريق', desc: 'كشف ورشاشات وسدّ منافذ', href: 'healthcare-contractor/fire-protection' },
              { label: 'تركيب نداء الممرضات', desc: 'تمديدات ونقاط نداء ومؤشرات', href: 'healthcare-contractor/nurse-call-installation' },
            ],
          },
          {
            title: 'التجهيز والتشطيبات',
            links: [
              { label: 'تجهيز المستشفيات', desc: 'الأقسام والعيادات والمراكز الطبية', href: 'healthcare-contractor/hospital-fit-out' },
              { label: 'أسقف غرف العمليات', desc: 'أسقف محكمة وسهلة التنظيف', href: 'healthcare-contractor/operating-room-ceilings' },
              { label: 'الجدران والألواح الجدارية', desc: 'ألواح وقواطع صحية', href: 'healthcare-contractor/hygienic-wall-panels' },
              { label: 'الأبواب الهيرمتية', desc: 'أبواب انزلاقية آلية محكمة', href: 'healthcare-contractor/hermetic-doors' },
            ],
          },
          {
            title: 'مصنع الخشب والكوريان',
            links: [
              { label: 'الأبواب الخشبية', desc: 'أبواب وإطارات حسب الطلب', href: 'manufacturing/wooden-doors' },
              { label: 'الكوريان والأسطح الصلبة', desc: 'منضدات ومحطات تمريض بلا فواصل', href: 'manufacturing/corian-solid-surface' },
              { label: 'النجارة المعمارية', desc: 'ألواح جدارية وخزائن وأثاث مدمج', href: 'manufacturing/architectural-joinery' },
              { label: 'نظرة عامة على المصنع', desc: 'ورشتنا في جدة', href: 'manufacturing' },
            ],
          },
          {
            title: 'هندسة البرمجيات',
            links: [
              { label: 'HIS وRIS', desc: 'أنظمة المستشفيات والأشعة', href: 'software-engineering/hospital-information-systems' },
              { label: 'برمجيات ERP', desc: 'الفوترة الإلكترونية والتأمينات وحماية الأجور مدمجة', href: 'software-engineering/erp-software' },
              { label: 'تطوير المواقع', desc: 'مواقع بالعربية والإنجليزية', href: 'software-engineering/website-development' },
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

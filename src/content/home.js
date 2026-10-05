/* Home + About page copy, shared process steps, and the plan-drawing labels. */

export const PROCESS = {
  en: [
    { t: 'Read the specification', d: 'We start from the OEM site-planning guide for the exact model and the physicist’s shielding report.' },
    { t: 'Coordinate and detail', d: 'Structure, shielding, doors and services are drawn together, with every penetration located before work starts.' },
    { t: 'Build', d: 'Our own crews and factory deliver the shielding, doors, services and clinical surfaces.' },
    { t: 'Test and hand over', d: 'We support RF and radiation testing, then hand the room to the OEM installation team, ready for the equipment.' },
  ],
  ar: [
    { t: 'قراءة المواصفات', d: 'نبدأ من دليل تخطيط الموقع الصادر عن الشركة المصنِّعة للطراز المحدد وتقرير التدريع من الفيزيائي.' },
    { t: 'التنسيق والتفصيل', d: 'يُرسم الهيكل والتدريع والأبواب والخدمات معًا، وتُحدَّد كل نقطة اختراق قبل بدء العمل.' },
    { t: 'التنفيذ', d: 'تنفذ كوادرنا ومصنعنا الخاص التدريع والأبواب والخدمات والأسطح السريرية.' },
    { t: 'الاختبار والتسليم', d: 'ندعم اختبارات الترددات الراديوية والإشعاع، ثم نسلّم الغرفة لفريق تركيب الشركة المصنِّعة جاهزة لاستقبال الجهاز.' },
  ],
};

export const HOME = {
  en: {
    hero: {
      h1: 'EGC: specialist healthcare contractor for MRI, CT and PET-CT rooms',
      lead: 'Engineering Grouping Co. (EGC) prepares the rooms that medical imaging equipment moves into: MRI, CT, PET-CT and X-ray. Shielding, doors, MEP and clinical surfaces, delivered by our own crews and our own factory in Jeddah.',
      primary: 'Explore healthcare construction',
      secondary: 'Request a proposal',
      partners: 'Working alongside the installation teams of',
      carousel: { label: 'What EGC does', pause: 'Pause slideshow', play: 'Play slideshow' },
    },
    slides: [
      { id: 'shielding', title: 'Radiation & magnetic shielding', short: 'Shielding', text: 'Lead-lined CT and PET-CT rooms and RF-shielded MRI suites.', image: 'hero-bg', position: 'center 45%', positionMobile: '70% 45%', alt: 'EGC crew installing shielding panels around an MRI suite' },
      { id: 'doors', title: 'Medical doors & access', short: 'Doors', text: 'Lead-lined and RF-shielded doors with interlocks and signage.', image: 'healthcare-xray', position: 'center 30%', alt: 'X-ray room with a lead-lined door and warning light' },
      { id: 'surfaces', title: 'Infection-control surfaces', short: 'Surfaces', text: 'Seamless Corian counters and nurse stations made for clinical cleaning.', image: 'corian-surfaces', position: 'center 62%', alt: 'Seamless Corian nurse station with integrated sink' },
      { id: 'factory', title: 'Wood & Corian factory', short: 'Factory', text: 'Joinery, doors and solid surfaces made in our own Jeddah workshop.', image: 'joinery-doors', position: 'center 55%', alt: 'Walnut doors and joinery in a hospital corridor' },
    ],
    drawing: {
      title: 'A shielded MRI suite, in plan',
      hint: 'Point at a discipline, or select a marker, to see which part of the room it builds.',
      rooms: { magnet: 'Scan room', control: 'Control room', tech: 'Equipment room', corridor: 'Corridor' },
      dimension: 'Room size per OEM siting guide',
      markers: {
        shielding: 'Shielded walls',
        doors: 'Shielded door',
        mep: 'Penetration panel',
        surfaces: 'Clinical counter',
      },
    },
    disciplines: {
      title: 'Four disciplines, one accountable contractor',
      lead: 'Imaging rooms are won or lost at the interfaces between trades. EGC delivers shielding, doors, MEP and clinical surfaces under one contract and one programme, so the details that usually fall between packages are drawn once.',
      cta: 'Healthcare construction overview',
      roomsLabel: 'Typical rooms',
    },
    sectors: {
      title: 'More than the room',
      lead: 'Engineering Grouping Co. (EGC), also known as Engineering Group and in Arabic التجمع الهندسي, runs three businesses to one standard: healthcare construction, a Wood & Corian factory and software engineering.',
      items: {
        manufacturing: {
          title: 'Wood & Corian factory',
          text: 'Our own Jeddah factory makes the solid-surface counters, joinery and doors that go into our rooms, and works directly for commercial and institutional clients, including interiors at Jeddah’s international airport and military hospitals.',
          cta: 'Visit the factory',
        },
        software: {
          title: 'Software engineering',
          text: 'Hospital and radiology information systems, patient information management and ERP built around Saudi requirements — ZATCA e-invoicing, GOSI and WPS, PDPL — plus bilingual websites.',
          cta: 'See what we build',
        },
        systems: {
          title: 'Healthcare systems and turnkey',
          text: 'Nurse call systems, operating-room clocks and turnkey installation are coming next, delivered by the same crews that prepare the rooms.',
          cta: 'Learn more',
          badge: 'Launching soon',
        },
      },
    },
    process: {
      title: 'From siting guide to handover',
      lead: 'Every project follows the same four steps, whatever the equipment.',
    },
    reach: {
      title: 'Delivering across the Kingdom',
      lead: 'Headquartered in Almanar District, Jeddah, with projects in the Western, Central, Eastern and Southern regions.',
      cta: 'View the project map',
    },
    cta: {
      title: 'Planning an MRI, CT or PET-CT room?',
      text: 'Send us the equipment model and the site, and we will tell you what the room needs and how we would deliver it.',
      primary: 'Request a proposal',
    },
  },
  ar: {
    hero: {
      h1: 'التجمع الهندسي: مقاول مشاريع صحية متخصص لغرف الرنين والأشعة المقطعية وPET-CT',
      lead: 'شركة التجمع الهندسي (EGC) تُجهّز الغرف التي تنتقل إليها أجهزة التصوير الطبي: الرنين المغناطيسي والأشعة المقطعية وPET-CT والأشعة السينية. تدريع وأبواب وأعمال كهروميكانيكية وأسطح سريرية، تنفذها كوادرنا ومصنعنا الخاص في جدة.',
      primary: 'استعرض الإنشاءات الطبية',
      secondary: 'اطلب عرضًا',
      partners: 'نعمل بجانب فرق التركيب التابعة لـ',
      carousel: { label: 'ما تقوم به EGC', pause: 'إيقاف العرض', play: 'تشغيل العرض' },
    },
    slides: [
      { id: 'shielding', title: 'التدريع الإشعاعي والمغناطيسي', short: 'التدريع', text: 'غرف أشعة مقطعية وPET-CT مبطنة بالرصاص وغرف رنين مدرّعة ضد الترددات الراديوية.', image: 'hero-bg', position: 'center 45%', positionMobile: '70% 45%', alt: 'فريق EGC أثناء تركيب ألواح التدريع حول غرفة رنين مغناطيسي' },
      { id: 'doors', title: 'الأبواب الطبية والتحكم بالدخول', short: 'الأبواب', text: 'أبواب مبطنة بالرصاص ومدرّعة ضد الترددات الراديوية مع قفل تبادلي ولوحات تحذير.', image: 'healthcare-xray', position: 'center 30%', alt: 'غرفة أشعة سينية بباب مبطن بالرصاص وإشارة تحذير' },
      { id: 'surfaces', title: 'الأسطح المقاومة للعدوى', short: 'الأسطح', text: 'منضدات كوريان متصلة ومحطات تمريض مصممة للتنظيف السريري.', image: 'corian-surfaces', position: 'center 62%', alt: 'محطة تمريض من الكوريان المتصل مع حوض مدمج' },
      { id: 'factory', title: 'مصنع الخشب والكوريان', short: 'المصنع', text: 'نجارة وأبواب وأسطح صلبة تُصنَّع في ورشتنا الخاصة بجدة.', image: 'joinery-doors', position: 'center 55%', alt: 'أبواب من خشب الجوز ونجارة في ممر مستشفى' },
    ],
    drawing: {
      title: 'مسقط أفقي لغرفة رنين مغناطيسي مدرّعة',
      hint: 'مرّر المؤشر على أحد التخصصات أو اختر علامة لترى أي جزء من الغرفة ينفذه.',
      rooms: { magnet: 'غرفة الفحص', control: 'غرفة التحكم', tech: 'غرفة المعدات', corridor: 'الممر' },
      dimension: 'مقاس الغرفة وفق دليل تخطيط الموقع',
      markers: {
        shielding: 'جدران مدرّعة',
        doors: 'باب مدرّع',
        mep: 'لوحة الاختراقات',
        surfaces: 'منضدة سريرية',
      },
    },
    disciplines: {
      title: 'أربعة تخصصات، ومقاول واحد مسؤول',
      lead: 'تُكسب غرف التصوير أو تُخسر عند التقاطعات بين الأعمال. تنفذ EGC التدريع والأبواب والأعمال الكهروميكانيكية والأسطح السريرية بعقد واحد وبرنامج زمني واحد، فتُرسم مرة واحدة التفاصيل التي تقع عادةً بين الحزم.',
      cta: 'نظرة عامة على الإنشاءات الطبية',
      roomsLabel: 'غرف نموذجية',
    },
    sectors: {
      title: 'أكثر من غرفة',
      lead: 'شركة التجمع الهندسي (EGC)، المعروفة أيضًا باسم Engineering Grouping Co. وEngineering Group، تدير ثلاثة أعمال بمعيار واحد: الإنشاءات الطبية، ومصنع للخشب والكوريان، وهندسة البرمجيات.',
      items: {
        manufacturing: {
          title: 'مصنع الخشب والكوريان',
          text: 'يصنع مصنعنا في جدة المنضدات الصلبة والنجارة والأبواب التي تدخل في غرفنا، ويعمل مباشرة لعملاء تجاريين ومؤسسيين، ومن أعماله التصميمات الداخلية لمطار جدة الدولي والمستشفيات العسكرية.',
          cta: 'زر المصنع',
        },
        software: {
          title: 'هندسة البرمجيات',
          text: 'أنظمة معلومات المستشفيات والأشعة وإدارة معلومات المرضى وتخطيط الموارد مبنية وفق المتطلبات السعودية — الفوترة الإلكترونية لهيئة الزكاة والضريبة والجمارك، والتأمينات الاجتماعية وحماية الأجور، ونظام حماية البيانات الشخصية — إضافة إلى مواقع إلكترونية ثنائية اللغة.',
          cta: 'اطلع على ما نبنيه',
        },
        systems: {
          title: 'الأنظمة الطبية والتسليم الشامل',
          text: 'أنظمة نداء الممرضات وساعات غرف العمليات والتركيب الشامل هي خطوتنا التالية، تنفذها الكوادر نفسها التي تجهّز الغرف.',
          cta: 'اعرف المزيد',
          badge: 'قريبًا',
        },
      },
    },
    process: {
      title: 'من دليل تخطيط الموقع إلى التسليم',
      lead: 'يتبع كل مشروع الخطوات الأربع نفسها، أيًّا كان الجهاز.',
    },
    reach: {
      title: 'نعمل في أنحاء المملكة',
      lead: 'مقرنا الرئيسي في حي المنار بجدة، ولدينا مشاريع في المنطقة الغربية والوسطى والشرقية والجنوبية.',
      cta: 'اعرض خريطة المشاريع',
    },
    cta: {
      title: 'تخطط لغرفة رنين أو أشعة مقطعية أو PET-CT؟',
      text: 'أرسل لنا طراز الجهاز والموقع، وسنوضح ما تحتاجه الغرفة وكيف سننفذها.',
      primary: 'اطلب عرضًا',
    },
  },
};

export const ABOUT = {
  en: {
    h1: 'About Engineering Grouping Co.',
    lead: 'A Jeddah-based healthcare contractor with its own factory and software team, preparing the rooms where medical imaging equipment goes.',
    story: {
      title: 'Built by our own hands',
      p: [
        'Engineering Grouping Co. (EGC), also known as Engineering Group and, in Arabic, التجمع الهندسي, was founded in Jeddah in 2006 on a simple conviction: the best way to deliver a specialist interior is to control it end to end. From the first shop drawing to the final surface polish, our own people do the work.',
        'Over time, healthcare became our core. MRI, CT, PET-CT and X-ray rooms demand shielding measured in millimetres, doors that seal against radiation and RF, services that respect the shield, and surfaces that meet clinical hygiene standards. We built the expertise, workshops and processes to deliver all of it as one scope.',
        'Our [Wood & Corian factory](manufacturing) and, more recently, our [software engineering](software-engineering) team extend the same approach: make what matters ourselves, to a standard we are willing to put our name on.',
      ],
    },
    group: {
      title: 'Three businesses, one standard',
      items: [
        { id: 'hub', t: 'Healthcare construction', d: 'Shielding, medical doors, specialised MEP and infection-control surfaces for imaging and clinical rooms.' },
        { id: 'manufacturing', t: 'Manufacturing', d: 'A Wood & Corian factory in Jeddah, and a steel facility that is currently paused.' },
        { id: 'software', t: 'Software engineering', d: 'Hospital and radiology information systems, ERP and websites built for Saudi compliance.' },
      ],
    },
    values: { title: 'How we work', lead: 'The same four principles apply to a shielded MRI room, a Corian counter and a line of code.' },
    quality: {
      title: 'Quality, health, safety and environment',
      lead: 'EGC operates internationally recognised management systems across its sites and workshops.',
    },
    clients: {
      title: 'Who we work with',
      cards: [
        {
          t: 'Healthcare and government',
          d: 'Hospitals, medical cities, diagnostic centres and the health authorities that commission them, and the equipment manufacturers whose installations we prepare rooms for.',
          ul: ['Government hospitals and medical cities', 'Private hospital groups and diagnostic networks', 'Oncology, radiology and imaging departments', 'Nuclear medicine and radiation therapy facilities', 'Equipment manufacturers: Siemens Healthineers, Philips Healthcare, GE HealthCare'],
        },
        {
          t: 'Commercial and hospitality',
          d: 'Developers, EPC contractors, hospitality operators and commercial tenants who need a specialist partner with in-house capacity.',
          ul: ['Commercial offices and towers', 'Hotels, resorts and hospitality fit-outs', 'Café and F&B interior packages', 'Retail and mixed-use developments', 'Businesses needing ERP, HIS/RIS or web software'],
        },
      ],
    },
    leadership: { title: 'Leadership', text: 'Leadership profiles are coming soon.' },
    cta: { title: 'Work with EGC', text: 'Tell us about your scope, timeline and requirements.', primary: 'Contact us', secondary: 'Healthcare construction' },
  },
  ar: {
    h1: 'عن شركة التجمع الهندسي',
    lead: 'مقاول مشاريع صحية مقره جدة، لديه مصنعه الخاص وفريق برمجيات، يجهّز الغرف التي تُركَّب فيها أجهزة التصوير الطبي.',
    story: {
      title: 'نبنيها بأيدينا',
      p: [
        'تأسست شركة التجمع الهندسي (EGC)، المعروفة أيضًا باسم Engineering Grouping Co. وEngineering Group، في جدة عام 2006 على قناعة بسيطة: أفضل طريقة لتنفيذ تجهيز داخلي متخصص هي التحكم فيه من أوله إلى آخره. من أول مخطط تنفيذي إلى التلميع النهائي للسطح، فريقنا هو من ينفذ العمل.',
        'ومع الوقت صار القطاع الصحي جوهر عملنا. فغرف الرنين المغناطيسي والأشعة المقطعية وPET-CT والأشعة السينية تتطلب تدريعًا يُقاس بالمليمتر، وأبوابًا تحكم الغلق ضد الإشعاع والترددات الراديوية، وخدمات تحترم الدرع، وأسطحًا تلبي معايير النظافة السريرية. وبنينا الخبرة والورش والعمليات لتنفيذ ذلك كله في نطاق واحد.',
        'ويمتد النهج نفسه إلى [مصنع الخشب والكوريان](manufacturing)، وأخيرًا إلى فريق [هندسة البرمجيات](software-engineering): نصنع بأنفسنا ما يهم، بمعيار نرضى أن نضع اسمنا عليه.',
      ],
    },
    group: {
      title: 'ثلاثة أعمال، ومعيار واحد',
      items: [
        { id: 'hub', t: 'الإنشاءات الطبية', d: 'تدريع وأبواب طبية وأعمال كهروميكانيكية متخصصة وأسطح مقاومة للعدوى لغرف التصوير والغرف السريرية.' },
        { id: 'manufacturing', t: 'التصنيع', d: 'مصنع للخشب والكوريان في جدة، ومنشأة للصلب متوقف إنتاجها حاليًا.' },
        { id: 'software', t: 'هندسة البرمجيات', d: 'أنظمة معلومات المستشفيات والأشعة وتخطيط الموارد والمواقع الإلكترونية المبنية وفق الامتثال السعودي.' },
      ],
    },
    values: { title: 'كيف نعمل', lead: 'المبادئ الأربعة نفسها تنطبق على غرفة رنين مدرّعة ومنضدة كوريان وسطر برمجي.' },
    quality: {
      title: 'الجودة والصحة والسلامة والبيئة',
      lead: 'تعمل EGC وفق أنظمة إدارة معتمدة دوليًا في مواقعها وورشها.',
    },
    clients: {
      title: 'مع من نعمل',
      cards: [
        {
          t: 'القطاع الصحي والجهات الحكومية',
          d: 'المستشفيات والمدن الطبية ومراكز التشخيص والجهات الصحية التي تكلّفها، والشركات المصنِّعة للمعدات التي نجهّز الغرف لتركيباتها.',
          ul: ['المستشفيات الحكومية والمدن الطبية', 'مجموعات المستشفيات الخاصة وشبكات التشخيص', 'أقسام الأورام والأشعة والتصوير', 'منشآت الطب النووي والعلاج الإشعاعي', 'الشركات المصنِّعة: سيمنز هيلثينيرز وفيليبس هيلث كير وجي إي هيلث كير'],
        },
        {
          t: 'القطاع التجاري والضيافة',
          d: 'المطورون ومقاولو EPC ومشغلو الضيافة والمستأجرون التجاريون الذين يحتاجون شريكًا متخصصًا بقدرة تنفيذ داخلية.',
          ul: ['المباني والأبراج التجارية', 'الفنادق والمنتجعات ومشاريع الضيافة', 'حزم تجهيز المقاهي والمطاعم', 'مشاريع التجزئة والاستخدام المختلط', 'الشركات التي تحتاج أنظمة تخطيط موارد أو مستشفيات أو برمجيات ويب'],
        },
      ],
    },
    leadership: { title: 'القيادة', text: 'الملفات التعريفية للقيادة ستُضاف قريبًا.' },
    cta: { title: 'اعمل مع EGC', text: 'أخبرنا بنطاق عملك وجدولك الزمني ومتطلباتك.', primary: 'تواصل معنا', secondary: 'الإنشاءات الطبية' },
  },
};

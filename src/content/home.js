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
      h1: 'Healthcare contractor in Saudi Arabia',
      lead: 'Engineering Grouping Co. (EGC) prepares the rooms that medical imaging equipment moves into, and carries out the wider healthcare contracting around them: shielding and medical doors, medical gas, HVAC, fire protection, nurse call installation, hospital fit-outs, joinery and clinical surfaces, delivered by our own crews and our own factory in Jeddah.',
      primary: 'Explore healthcare construction',
      secondary: 'Request a proposal',
      partners: 'Working alongside the installation teams of',
      carousel: { label: 'What EGC does', pause: 'Pause slideshow', play: 'Play slideshow' },
    },
    slides: [
      { id: 'imaging', route: 'hub', tab: 'Imaging rooms', short: 'Imaging', title: 'Rooms ready for the scanner', text: 'MRI, CT, PET-CT and X-ray rooms, built to the manufacturer’s siting guide.', cta: 'Imaging room construction', image: 'ct-suite-desert-gantry', position: 'center 50%', positionMobile: '62% 50%' },
      { id: 'shielding', route: 'shielding', tab: 'Shielding & doors', short: 'Shielding', title: 'Shielded rooms, sealed doors', text: 'Lead-lined and RF-shielded rooms, with the medical doors that keep them sealed.', cta: 'Radiation shielding', image: 'lead-lined-room-studs', position: 'center 50%', positionMobile: '55% 50%' },
      { id: 'fitout', route: 'hospitalFitOut', tab: 'Hospital fit-out', short: 'Fit-out', title: 'Hospital departments, fully fitted out', text: 'Nurse stations, reception counters, ceilings and wall panels, finished for clinical cleaning.', cta: 'Hospital fit-out', image: 'nurse-station-curved', position: 'center 62%', positionMobile: '40% 50%' },
      { id: 'factory', route: 'manufacturing', tab: 'Wood & Corian factory', short: 'Factory', title: 'Doors, joinery and Corian, made in Jeddah', text: 'Our own factory makes the wooden doors, solid-surface counters and joinery that go into our rooms.', cta: 'Visit the factory', image: 'kitchen-walnut-island', position: 'center 55%', positionMobile: '35% 50%' },
      { id: 'services', route: 'mep', tab: 'Building services', short: 'Services', title: 'Medical gas, HVAC and fire protection', text: 'Building services carried out by the same crews that prepare the rooms, with nurse call installation.', cta: 'Building services', image: 'ceiling-services-sprinklers', position: 'center 40%', positionMobile: '45% 50%' },
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
      title: 'Specialist disciplines, one accountable contractor',
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
        fitout: {
          title: 'Hospital fit-out and building services',
          text: 'Medical gas, HVAC, fire protection, nurse call installation, operating-room ceilings, wall panels and hermetic doors, carried out by the same crews that prepare the rooms.',
          cta: 'See fit-out and services',
        },
      },
    },
    process: {
      title: 'From siting guide to handover',
      lead: 'Every project follows the same four steps, whatever the equipment.',
    },
    reach: {
      title: 'Delivering across the Kingdom',
      lead: 'Headquartered in Ad Dahiah District, Jeddah, with projects in the Western, Central, Eastern and Southern regions.',
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
      h1: 'مقاول مشاريع صحية في السعودية',
      lead: 'شركة التجمع الهندسي (EGC) تُجهّز الغرف التي تنتقل إليها أجهزة التصوير الطبي، وتنفذ أعمال المقاولات الصحية الأوسع حولها: التدريع والأبواب الطبية والغازات الطبية والتكييف والحماية من الحريق وتركيب أنظمة نداء الممرضات وتجهيز المستشفيات والنجارة والأسطح السريرية، تنفذها كوادرنا ومصنعنا الخاص في جدة.',
      primary: 'استعرض الإنشاءات الطبية',
      secondary: 'اطلب عرضًا',
      partners: 'نعمل بجانب فرق التركيب التابعة لـ',
      carousel: { label: 'ما تقوم به EGC', pause: 'إيقاف العرض', play: 'تشغيل العرض' },
    },
    slides: [
      { id: 'imaging', route: 'hub', tab: 'غرف التصوير', short: 'التصوير', title: 'غرف جاهزة لاستقبال الجهاز', text: 'غرف رنين وأشعة مقطعية وPET-CT وأشعة سينية، منفذة وفق دليل تخطيط الموقع للشركة المصنِّعة.', cta: 'إنشاء غرف التصوير الطبي', image: 'ct-suite-desert-gantry', position: 'center 50%', positionMobile: '62% 50%' },
      { id: 'shielding', route: 'shielding', tab: 'التدريع والأبواب', short: 'التدريع', title: 'غرف مدرّعة وأبواب محكمة الإغلاق', text: 'غرف مبطنة بالرصاص ومدرّعة ضد الترددات الراديوية، مع الأبواب الطبية التي تحافظ على إحكامها.', cta: 'التدريع الإشعاعي', image: 'lead-lined-room-studs', position: 'center 50%', positionMobile: '55% 50%' },
      { id: 'fitout', route: 'hospitalFitOut', tab: 'تجهيز المستشفيات', short: 'التجهيز', title: 'أقسام مستشفيات مجهّزة بالكامل', text: 'محطات تمريض ومنضدات استقبال وأسقف وألواح جدارية بتشطيب يناسب التنظيف السريري.', cta: 'تجهيز المستشفيات', image: 'nurse-station-curved', position: 'center 62%', positionMobile: '40% 50%' },
      { id: 'factory', route: 'manufacturing', tab: 'مصنع الخشب والكوريان', short: 'المصنع', title: 'أبواب ونجارة وكوريان، صُنعت في جدة', text: 'مصنعنا الخاص يصنع الأبواب الخشبية ومنضدات الأسطح الصلبة والنجارة التي تدخل في غرفنا.', cta: 'زيارة المصنع', image: 'kitchen-walnut-island', position: 'center 55%', positionMobile: '35% 50%' },
      { id: 'services', route: 'mep', tab: 'خدمات المباني', short: 'الخدمات', title: 'الغازات الطبية والتكييف والحماية من الحريق', text: 'أعمال خدمات المباني تنفذها الكوادر نفسها التي تجهّز الغرف، مع تركيب أنظمة نداء الممرضات.', cta: 'خدمات المباني', image: 'ceiling-services-sprinklers', position: 'center 40%', positionMobile: '45% 50%' },
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
      title: 'تخصصات متخصصة، ومقاول واحد مسؤول',
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
        fitout: {
          title: 'تجهيز المستشفيات وخدمات المبنى',
          text: 'الغازات الطبية والتكييف والحماية من الحريق وتركيب أنظمة نداء الممرضات وأسقف غرف العمليات والألواح الجدارية والأبواب الهيرمتية، تنفذها الكوادر نفسها التي تجهّز الغرف.',
          cta: 'اطلع على التجهيز والخدمات',
        },
      },
    },
    process: {
      title: 'من دليل تخطيط الموقع إلى التسليم',
      lead: 'يتبع كل مشروع الخطوات الأربع نفسها، أيًّا كان الجهاز.',
    },
    reach: {
      title: 'نعمل في أنحاء المملكة',
      lead: 'مقرنا الرئيسي في حي الضاحية بجدة، ولدينا مشاريع في المنطقة الغربية والوسطى والشرقية والجنوبية.',
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
        { id: 'hub', t: 'Healthcare construction', d: 'Imaging rooms and the wider healthcare contracting around them: shielding, medical doors, MEP including medical gas, HVAC and fire protection, nurse call installation, hospital fit-outs and infection-control surfaces.' },
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
        { id: 'hub', t: 'الإنشاءات الطبية', d: 'غرف التصوير وأعمال المقاولات الصحية الأوسع حولها: التدريع والأبواب الطبية والأعمال الكهروميكانيكية بما فيها الغازات الطبية والتكييف والحماية من الحريق، وتركيب أنظمة نداء الممرضات وتجهيز المستشفيات والأسطح المقاومة للعدوى.' },
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

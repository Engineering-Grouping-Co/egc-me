/* Knowledge Center guides. Written as plain, quotable explanations (they are
 * also what search and AI assistants will cite), so each section opens with the
 * direct answer. Technical statements are deliberately general: specific values
 * always come from the OEM site-planning guide or the physicist's report. */
const PUBLISHED = '2026-10-04';

export const ARTICLES = {
  'what-is-a-healthcare-contractor': {
    published: PUBLISHED,
    minutes: 5,
    related: ['hub', 'shielding', 'surfaces'],
    en: {
      title: 'What does a healthcare contractor do? A guide for hospital owners',
      summary: 'A healthcare contractor builds and fits out clinical spaces where infection control, shielding and equipment rules shape the work. Here is what to expect, and how to choose one.',
      intro: 'A healthcare contractor builds, renovates and fits out the spaces where patients are treated. The work looks like ordinary construction until you meet the rules that make clinical space different: infection control, radiation and magnetic protection, medical gases, pressure regimes, and the installation requirements of imaging and surgical equipment.',
      sections: [
        {
          h: 'How a healthcare contractor differs from a general contractor',
          p: ['A general contractor manages the whole building. A healthcare contractor, or healthcare specialty contractor, brings clinical knowledge to specific rooms. On a hospital project the two normally work together: the main contractor delivers the structure and shell, and specialty contractors deliver the rooms that need specialist skills.'],
          ul: [
            'Infection control: cleanable, seamless finishes, and dust and pressure control while works run beside live clinical areas.',
            'Radiation and magnetic protection: lead lining for X-ray, CT and PET-CT rooms; RF and magnetic shielding for MRI.',
            'Equipment interfaces: rooms built to the manufacturer’s site-planning requirements so the OEM can install and commission on schedule.',
            'Medical services: medical gases, specialised earthing and tightly controlled HVAC.',
          ],
        },
        {
          h: 'What room preparation includes',
          p: ['Room preparation is the work that happens before the equipment arrives. For an MRI, CT or PET-CT suite it typically covers shielding, shielded doors, services and clinical surfaces, coordinated with the OEM’s installation team so the room is ready on the day the equipment is delivered.'],
        },
        {
          h: 'How to choose a healthcare contractor',
          p: ['Ask for evidence rather than adjectives. The questions below separate contractors who have done this work from those who have only priced it.'],
          ul: [
            'Have they prepared rooms for your equipment manufacturer — Siemens Healthineers, Philips, GE HealthCare or others — and do they work from the OEM’s site-planning guide?',
            'Do their own crews and workshop deliver the critical packages, or is the scope passed down a chain of subcontractors?',
            'Is quality, safety and environmental management documented and certified (ISO 9001, 45001, 14001)?',
            'Is there a defined test and handover process — shielding verified by the physicist, RF testing for MRI, OEM sign-off?',
            'Can they work inside a live hospital with infection-control and phasing plans?',
          ],
        },
        {
          h: 'Where EGC fits',
          p: ['Engineering Grouping Co. (EGC) is a specialty healthcare contractor based in Jeddah. We prepare MRI, CT, PET-CT and X-ray rooms across Saudi Arabia, and make the doors, joinery and Corian surfaces in our own factory.'],
        },
      ],
      takeaways: [
        'A healthcare contractor is defined by clinical rules, not by building type.',
        'Specialty contractors usually work alongside the main contractor on imaging and clinical rooms.',
        'Choose on OEM experience, in-house capability, certified management systems and a clear test-and-handover process.',
      ],
      faqs: [
        { q: 'Is a healthcare contractor the same as a hospital builder?', a: 'Not exactly. A hospital builder or main contractor delivers the whole facility. A healthcare contractor, especially a specialty one, delivers the rooms and systems where clinical requirements drive the construction, often inside a project run by a main contractor.' },
        { q: 'Do I need a specialty contractor if I already have a main contractor?', a: 'For imaging rooms, usually yes. Shielding, shielded doors and OEM interfaces call for specialist knowledge and testing that general building teams rarely hold in-house.' },
        { q: 'Can a healthcare contractor work inside an operating hospital?', a: 'Yes, with a phasing plan and infection-control measures such as dust containment, negative pressure where needed and agreed working hours.' },
      ],
    },
    ar: {
      title: 'ماذا يفعل مقاول المشاريع الصحية؟ دليل لملّاك المستشفيات',
      summary: 'مقاول المشاريع الصحية يبني ويجهّز المساحات السريرية التي تحكم أعمالها قواعد مكافحة العدوى والتدريع ومتطلبات المعدات. إليك ما تتوقعه وكيف تختار المقاول المناسب.',
      intro: 'مقاول المشاريع الصحية هو من يبني ويجدد ويجهّز المساحات التي يُعالَج فيها المرضى. يبدو العمل كالبناء العادي إلى أن تواجه القواعد التي تميّز المساحة السريرية: مكافحة العدوى، والحماية من الإشعاع والمجال المغناطيسي، والغازات الطبية، وأنظمة الضغط، ومتطلبات تركيب أجهزة التصوير والجراحة.',
      sections: [
        {
          h: 'الفرق بين مقاول المشاريع الصحية والمقاول العام',
          p: ['يدير المقاول العام المبنى كاملًا. أما مقاول المشاريع الصحية، أو المقاول المتخصص في هذا القطاع، فيقدّم معرفة سريرية لغرف محددة. وفي مشروع المستشفى يعمل الاثنان معًا عادةً: يسلّم المقاول الرئيسي الهيكل والقشرة، ويسلّم المقاولون المتخصصون الغرف التي تحتاج مهارات خاصة.'],
          ul: [
            'مكافحة العدوى: تشطيبات متصلة سهلة التنظيف، وضبط للغبار والضغط أثناء الأعمال بجوار المناطق السريرية العاملة.',
            'الحماية من الإشعاع والمجال المغناطيسي: تبطين بالرصاص لغرف الأشعة السينية والمقطعية وPET-CT، وتدريع ضد الترددات الراديوية والمجال المغناطيسي لغرف الرنين.',
            'التنسيق مع الشركات المصنِّعة: غرف تُبنى وفق متطلبات تخطيط الموقع ليتمكن فريق الشركة من التركيب والتشغيل في موعده.',
            'الخدمات الطبية: غازات طبية، وتأريض متخصص، وتكييف شديد الضبط.',
          ],
        },
        {
          h: 'ماذا يشمل تجهيز الغرف',
          p: ['تجهيز الغرف هو العمل الذي يسبق وصول الجهاز. وفي غرفة رنين مغناطيسي أو أشعة مقطعية أو PET-CT يشمل عادةً التدريع والأبواب المدرّعة والخدمات والأسطح السريرية، بالتنسيق مع فريق التركيب التابع للشركة المصنِّعة لتكون الغرفة جاهزة يوم توريد الجهاز.'],
        },
        {
          h: 'كيف تختار مقاول مشاريع صحية',
          p: ['اطلب الأدلة لا الأوصاف. الأسئلة التالية تميّز من نفّذ هذا العمل فعلًا عمّن اكتفى بتسعيره.'],
          ul: [
            'هل جهّز غرفًا لمعدات الشركة المصنِّعة التي تستخدمها — سيمنز هيلثينيرز أو فيليبس أو جي إي هيلث كير أو غيرها — وهل يعمل وفق دليل تخطيط الموقع الخاص بها؟',
            'هل تنفذ فرقه وورشه الحزم الحرجة بنفسها أم يمرَّر النطاق عبر سلسلة مقاولين من الباطن؟',
            'هل إدارة الجودة والسلامة والبيئة موثّقة ومعتمدة (ISO 9001 و45001 و14001)؟',
            'هل توجد عملية اختبار وتسليم واضحة — تحقق الفيزيائي من التدريع، واختبار الترددات الراديوية للرنين، واعتماد الشركة المصنِّعة؟',
            'هل يستطيع العمل داخل مستشفى عامل بخطط مرحلية ومكافحة للعدوى؟',
          ],
        },
        {
          h: 'أين تقع EGC',
          p: ['شركة التجمع الهندسي (EGC) مقاول متخصص في المشاريع الصحية مقره جدة. نجهّز غرف الرنين المغناطيسي والأشعة المقطعية وPET-CT والأشعة السينية في أنحاء المملكة، ونصنع الأبواب والنجارة وأسطح الكوريان في مصنعنا.'],
        },
      ],
      takeaways: [
        'يتحدد مقاول المشاريع الصحية بالقواعد السريرية لا بنوع المبنى.',
        'يعمل المقاولون المتخصصون عادةً بجانب المقاول الرئيسي في غرف التصوير والغرف السريرية.',
        'اختر بناءً على الخبرة مع الشركات المصنِّعة والقدرات الداخلية وأنظمة الإدارة المعتمدة وعملية اختبار وتسليم واضحة.',
      ],
      faqs: [
        { q: 'هل مقاول المشاريع الصحية هو نفسه بنّاء المستشفيات؟', a: 'ليس تمامًا. بنّاء المستشفى أو المقاول الرئيسي يسلّم المنشأة كاملة. أما مقاول المشاريع الصحية، خصوصًا المتخصص، فيسلّم الغرف والأنظمة التي تقود المتطلبات السريرية إنشاءها، وغالبًا ضمن مشروع يديره مقاول رئيسي.' },
        { q: 'هل أحتاج مقاولًا متخصصًا إذا كان لدي مقاول رئيسي؟', a: 'في غرف التصوير نعم غالبًا. فالتدريع والأبواب المدرّعة والتنسيق مع الشركات المصنِّعة تحتاج معرفة واختبارات متخصصة نادرًا ما تتوفر لدى فرق البناء العامة.' },
        { q: 'هل يستطيع مقاول المشاريع الصحية العمل داخل مستشفى عامل؟', a: 'نعم، بخطة مراحل وإجراءات مكافحة عدوى مثل عزل الغبار والضغط السالب عند الحاجة وساعات عمل متفق عليها.' },
      ],
    },
  },

  'mri-room-shielding': {
    published: PUBLISHED,
    minutes: 6,
    related: ['shielding', 'doors', 'mep'],
    en: {
      title: 'How MRI room shielding works: RF, magnetic and quench systems',
      summary: 'An MRI suite is protected by three systems: an RF Faraday cage, magnetic shielding where needed, and a quench vent. What each one does, and where projects go wrong.',
      intro: 'An MRI suite is more than a room with a magnet in it. It relies on three overlapping protection systems — radio-frequency (RF) shielding, magnetic shielding where required, and a quench vent — each solving a different problem. Understanding them explains why the room is built the way it is.',
      sections: [
        {
          h: 'RF shielding: the Faraday cage',
          p: [
            'An MRI scanner picks up extremely weak radio signals from the patient’s body. Any stray radio-frequency energy from outside — broadcast signals, mobile devices, lifts, nearby equipment — appears in the image as artefacts.',
            'To prevent this, the scan room is enclosed in a continuous conductive envelope across walls, floor and ceiling, usually copper, aluminium or galvanised steel, bonded at every seam. The same envelope keeps the scanner’s own RF out of the rest of the building.',
          ],
          ul: [
            'RF-shielded door with continuous contact around the leaf.',
            'RF window with conductive mesh, so staff can see the patient from the control room.',
            'Waveguides where pipes and ducts cross the shield, and filters for power and signal lines.',
          ],
        },
        {
          h: 'Magnetic shielding: containing the fringe field',
          p: [
            'The magnet’s field extends beyond the scanner. The OEM’s site-planning guide shows how far, including the 0.5 mT (5 gauss) line commonly used to define controlled-access areas.',
            'Where the field would reach occupied rooms or sensitive equipment, steel plate can be added to the room envelope or around the magnet. How much, if any, depends on the magnet model and its surroundings, and is specified by the OEM. Many modern magnets are actively shielded, which reduces the field extent but does not remove the need to check it.',
          ],
        },
        {
          h: 'The quench pipe',
          p: ['Superconducting magnets are cooled with liquid helium. In an emergency or a deliberate quench, that helium boils off rapidly. A quench pipe vents the gas safely to the outside. Its route, size and termination are specified by the OEM and must be built and kept clear.'],
        },
        {
          h: 'Where MRI projects go wrong',
          ul: [
            'Penetrations added late — a pipe, duct or conduit crossing the shield without a waveguide or filter.',
            'Door frames set out before the shielding details are agreed, so the RF contact never closes properly.',
            'Ferromagnetic fittings inside the scan room, or lighting and HVAC components that were not specified for an MRI environment.',
            'Testing left too late, so a failed RF attenuation test delays the OEM’s installation crew.',
          ],
          p: ['Most of these are interface problems between trades. They are cheapest to prevent when one contractor coordinates shielding, doors and services from the first drawing.'],
        },
      ],
      takeaways: [
        'MRI rooms need RF shielding; magnetic shielding is added only where the OEM specifies it; the quench pipe is a safety system.',
        'Every penetration of the RF shield needs a waveguide or filter.',
        'Coordinate shielding, doors and MEP early to avoid late fixes.',
      ],
      faqs: [
        { q: 'Does an MRI room need lead shielding?', a: 'Not for the MRI itself, because MRI uses no ionising radiation. It needs RF shielding, and sometimes magnetic shielding. Lead may be specified where the room is next to an X-ray or CT room.' },
        { q: 'What is a Faraday cage in an MRI room?', a: 'A continuous conductive enclosure around the scan room that blocks outside radio-frequency interference from reaching the scanner, and keeps the scanner’s RF from leaking out.' },
        { q: 'Who specifies the shielding for an MRI suite?', a: 'The scanner manufacturer’s site-planning guide defines the requirements for the exact model. The contractor builds and tests the room to that specification.' },
      ],
    },
    ar: {
      title: 'كيف يعمل تدريع غرفة الرنين المغناطيسي: الترددات الراديوية والمجال المغناطيسي وأنبوب الإخماد',
      summary: 'تحمي غرفة الرنين المغناطيسي ثلاثة أنظمة: قفص فاراداي ضد الترددات الراديوية، وتدريع مغناطيسي عند الحاجة، وأنبوب إخماد. وظيفة كل منها وأين تتعثر المشاريع.',
      intro: 'غرفة الرنين المغناطيسي ليست مجرد غرفة يوجد فيها مغناطيس. فهي تعتمد على ثلاثة أنظمة حماية متداخلة — تدريع ضد الترددات الراديوية، وتدريع مغناطيسي عند الحاجة، وأنبوب إخماد — يعالج كل منها مشكلة مختلفة. وفهمها يفسّر لماذا تُبنى الغرفة بهذه الطريقة.',
      sections: [
        {
          h: 'التدريع ضد الترددات الراديوية: قفص فاراداي',
          p: [
            'يلتقط جهاز الرنين المغناطيسي إشارات راديوية ضعيفة جدًا من جسم المريض. وأي طاقة راديوية شاردة من الخارج — إشارات البث والأجهزة المحمولة والمصاعد والمعدات المجاورة — تظهر في الصورة على شكل تشوهات.',
            'لمنع ذلك تُحاط غرفة الفحص بغلاف موصل متصل يشمل الجدران والأرضية والسقف، وغالبًا من النحاس أو الألمنيوم أو الفولاذ المجلفن، مع وصل كل الوصلات. ويمنع الغلاف نفسه ترددات الجهاز من التسرب إلى بقية المبنى.',
          ],
          ul: [
            'باب مدرّع ضد الترددات الراديوية بتلامس متصل حول الضلفة.',
            'نافذة مدرّعة بشبك موصل ليرى الفنيون المريض من غرفة التحكم.',
            'موجّهات موجية عند عبور الأنابيب والمجاري للدرع، ومرشّحات لخطوط الطاقة والإشارات.',
          ],
        },
        {
          h: 'التدريع المغناطيسي: احتواء المجال المتسرب',
          p: [
            'يمتد مجال المغناطيس إلى ما بعد الجهاز. ويوضح دليل تخطيط الموقع من الشركة المصنِّعة مدى هذا الامتداد، بما في ذلك خط 0.5 ملي تسلا (5 غاوس) الذي يُستخدم عادةً لتحديد مناطق الدخول المقيّد.',
            'وحيث يصل المجال إلى غرف مأهولة أو معدات حساسة يمكن إضافة صفائح فولاذية إلى غلاف الغرفة أو حول المغناطيس. وتتوقف الكمية، إن لزمت، على طراز المغناطيس ومحيطه وتحددها الشركة المصنِّعة. كثير من المغانط الحديثة مدرّعة فعليًا، مما يقلل امتداد المجال دون أن يلغي الحاجة إلى التحقق منه.',
          ],
        },
        {
          h: 'أنبوب الإخماد (Quench pipe)',
          p: ['تُبرَّد المغانط فائقة التوصيل بالهيليوم السائل. وفي حالات الطوارئ أو الإخماد المتعمد يتبخر هذا الهيليوم بسرعة. ويصرف أنبوب الإخماد الغاز إلى الخارج بأمان. وتحدد الشركة المصنِّعة مساره وقطره ونقطة تصريفه، ويجب بناؤه وإبقاؤه خاليًا من العوائق.'],
        },
        {
          h: 'أين تتعثر مشاريع الرنين المغناطيسي',
          ul: [
            'إضافة نقاط اختراق متأخرة — أنبوب أو مجرى أو مواسير تعبر الدرع دون موجّه موجي أو مرشّح.',
            'ضبط أطر الأبواب قبل الاتفاق على تفاصيل التدريع، فلا يكتمل تلامس الترددات الراديوية.',
            'تجهيزات مغناطيسية حديدية داخل غرفة الفحص، أو مكونات إضاءة وتكييف لم تُحدَّد لبيئة الرنين.',
            'تأخير الاختبار، فيؤدي فشل اختبار التوهين إلى تأخير فريق تركيب الشركة المصنِّعة.',
          ],
          p: ['معظم هذه المشكلات هي مشكلات تقاطع بين الأعمال. وأقل تكلفة لمنعها أن يُنسِّق مقاول واحد التدريع والأبواب والخدمات منذ المخطط الأول.'],
        },
      ],
      takeaways: [
        'تحتاج غرف الرنين إلى تدريع ضد الترددات الراديوية، ويُضاف التدريع المغناطيسي فقط حيث تحدده الشركة المصنِّعة، وأنبوب الإخماد نظام سلامة.',
        'كل نقطة اختراق لدرع الترددات الراديوية تحتاج موجّهًا موجيًا أو مرشّحًا.',
        'نسّق التدريع والأبواب والأعمال الكهروميكانيكية مبكرًا لتفادي المعالجات المتأخرة.',
      ],
      faqs: [
        { q: 'هل تحتاج غرفة الرنين المغناطيسي إلى تدريع بالرصاص؟', a: 'ليس للرنين نفسه لأنه لا يستخدم إشعاعًا مؤيِّنًا. تحتاج إلى تدريع ضد الترددات الراديوية، وأحيانًا تدريع مغناطيسي. وقد يُحدَّد الرصاص إذا جاورت الغرفة غرفة أشعة سينية أو مقطعية.' },
        { q: 'ما هو قفص فاراداي في غرفة الرنين؟', a: 'غلاف موصل متصل حول غرفة الفحص يمنع التداخل الراديوي الخارجي من الوصول إلى الجهاز، ويمنع ترددات الجهاز من التسرب إلى الخارج.' },
        { q: 'من يحدد مواصفات تدريع غرفة الرنين؟', a: 'يحدد دليل تخطيط الموقع من الشركة المصنِّعة للجهاز المتطلبات للطراز المحدد. ويبني المقاول الغرفة ويختبرها وفق هذه المواصفات.' },
      ],
    },
  },

  'ct-pet-ct-radiation-shielding': {
    published: PUBLISHED,
    minutes: 6,
    related: ['shielding', 'doors'],
    en: {
      title: 'Radiation shielding for CT, PET-CT and X-ray rooms',
      summary: 'Who decides how much lead a CT, PET-CT or X-ray room needs, how it is built, and what changes for PET-CT. A plain explanation for owners and project teams.',
      intro: 'CT, X-ray and fluoroscopy rooms produce ionising radiation while the beam is on. PET-CT adds a second source: the radioactive tracer inside the patient. Shielding protects staff, patients in neighbouring rooms and the public, and it is designed per room, not from a rule of thumb.',
      sections: [
        {
          h: 'Who decides how much lead is needed',
          p: [
            'A qualified radiation protection physicist calculates the shielding for each wall, floor, ceiling, door and window. Inputs include the equipment’s workload, how often each direction is used, how long adjacent spaces are occupied and their distance from the source.',
            'The result is a shielding report that gives lead thickness in millimetres, or an equivalent material, for every surface. The contractor builds exactly to this report and does not set the thickness. Physicists generally work from the national regulator’s requirements and recognised guidance such as NCRP Report 147 for diagnostic X-ray facilities and AAPM Task Group 108 for PET/CT.',
          ],
        },
        {
          h: 'How a lead-lined room is built',
          ul: [
            'Lead sheet is bonded to board or fixed to studwork, with overlapping seams so there is no straight-through gap.',
            'Doors and frames are lead-lined, and viewing windows use lead glass.',
            'Sockets, switches and wall penetrations get lead-backed boxes or sleeves.',
            'Lining is kept continuous at corners, door frames and, where required, above ceilings and below floors.',
          ],
        },
        {
          h: 'What changes for PET-CT',
          p: ['PET uses positron-emitting tracers whose annihilation photons (511 keV) are far more penetrating than diagnostic X-rays. PET-CT departments therefore often include an uptake room where injected patients rest, a hot lab for handling tracer, dedicated toilets, and thicker lining in places. The layout is planned with the physicist and the equipment manufacturer.'],
        },
        {
          h: 'Checks before the room is used',
          p: ['The installation is inspected for continuity of the lining. The physicist then carries out a radiation survey, and the room is cleared for use through the regulator’s process. Records of the as-built shielding are kept for future changes.'],
        },
      ],
      takeaways: [
        'The physicist sets the shielding; the contractor builds to the report.',
        'Continuity at junctions, boxes and penetrations matters as much as thickness.',
        'PET-CT adds rooms and thicker shielding because its photons penetrate further.',
      ],
      faqs: [
        { q: 'Is lead the only option for radiation shielding?', a: 'No. Depending on the specification, lead-lined board, barium plaster, concrete or other composite materials may be used. The physicist’s report decides what is acceptable.' },
        { q: 'Does an X-ray room need a shielded door?', a: 'Usually, because the door is part of the barrier. The shielding report states whether the door and viewing window need lead protection and at what equivalent thickness.' },
        { q: 'Can an existing room be upgraded for a new scanner?', a: 'Often yes. The physicist reviews the new equipment, and retrofit shielding is added where the existing walls do not meet the new requirement, subject to structural limits.' },
      ],
    },
    ar: {
      title: 'التدريع الإشعاعي لغرف الأشعة المقطعية وPET-CT والأشعة السينية',
      summary: 'من يحدد كمية الرصاص التي تحتاجها غرفة الأشعة المقطعية أو PET-CT أو الأشعة السينية، وكيف تُبنى، وما الذي يتغير في PET-CT. شرح مبسّط للملّاك وفرق المشاريع.',
      intro: 'تُنتج غرف الأشعة المقطعية والسينية والتنظير الفلوري إشعاعًا مؤيِّنًا أثناء تشغيل الشعاع. ويضيف PET-CT مصدرًا ثانيًا هو المادة المشعة داخل جسم المريض. ويحمي التدريع العاملين والمرضى في الغرف المجاورة والجمهور، ويُصمَّم لكل غرفة على حدة لا بقاعدة تقريبية.',
      sections: [
        {
          h: 'من يحدد كمية الرصاص المطلوبة',
          p: [
            'يحسب فيزيائي مختص بالوقاية الإشعاعية التدريع لكل جدار وأرضية وسقف وباب ونافذة. وتشمل المدخلات حجم عمل الجهاز، وعدد مرات استخدام كل اتجاه، ومدة إشغال الأماكن المجاورة، وبعدها عن المصدر.',
            'والناتج تقرير تدريع يحدد سماكة الرصاص بالمليمتر، أو ما يعادله من مواد، لكل سطح. وينفّذ المقاول وفق هذا التقرير تمامًا ولا يحدد السماكة بنفسه. ويعتمد الفيزيائيون عمومًا على متطلبات الجهة التنظيمية الوطنية وإرشادات معتمدة مثل تقرير NCRP رقم 147 لمنشآت الأشعة السينية التشخيصية ومجموعة العمل رقم 108 التابعة لـ AAPM لأجهزة PET/CT.',
          ],
        },
        {
          h: 'كيف تُبنى الغرفة المبطنة بالرصاص',
          ul: [
            'تُلصق صفائح الرصاص على الألواح أو تُثبَّت على الهيكل مع تداخل الوصلات حتى لا توجد فجوة مستقيمة.',
            'تُبطَّن الأبواب والأطر بالرصاص، وتُستخدم الزجاج الرصاصي لنوافذ المراقبة.',
            'تُزوَّد المقابس والمفاتيح ونقاط الاختراق بصناديق أو أكمام مبطنة بالرصاص.',
            'يُحافَظ على اتصال التبطين عند الزوايا وأطر الأبواب، وفوق الأسقف وتحت الأرضيات عند الحاجة.',
          ],
        },
        {
          h: 'ما الذي يتغير في PET-CT',
          p: ['يستخدم PET مواد مشعة تصدر بوزيترونات، وفوتونات الإفناء الناتجة عنها (511 كيلو إلكترون فولت) أكثر نفاذية بكثير من الأشعة السينية التشخيصية. لذلك تضم أقسام PET-CT غالبًا غرفة امتصاص يرتاح فيها المرضى بعد الحقن، ومعمل ساخنًا للتعامل مع المادة المشعة، ودورات مياه مخصصة، وتبطينًا أسمك في بعض المواضع. ويُخطَّط التوزيع مع الفيزيائي والشركة المصنِّعة للجهاز.'],
        },
        {
          h: 'الفحوص قبل استخدام الغرفة',
          p: ['يُفحص التركيب للتأكد من اتصال التبطين. ثم يجري الفيزيائي مسحًا إشعاعيًا، وتُعتمد الغرفة للاستخدام وفق إجراءات الجهة التنظيمية. وتُحفظ سجلات التدريع كما نُفِّذ لأي تغييرات مستقبلية.'],
        },
      ],
      takeaways: [
        'الفيزيائي يحدد التدريع، والمقاول ينفّذ وفق التقرير.',
        'اتصال التبطين عند الوصلات والصناديق ونقاط الاختراق لا يقل أهمية عن السماكة.',
        'يضيف PET-CT غرفًا وتدريعًا أسمك لأن فوتوناته أشد نفاذية.',
      ],
      faqs: [
        { q: 'هل الرصاص هو الخيار الوحيد للتدريع الإشعاعي؟', a: 'لا. بحسب المواصفات قد تُستخدم ألواح مبطنة بالرصاص أو بلاستر الباريوم أو الخرسانة أو مواد مركبة أخرى. ويحدد تقرير الفيزيائي ما هو مقبول.' },
        { q: 'هل تحتاج غرفة الأشعة السينية إلى باب مدرّع؟', a: 'عادةً نعم، لأن الباب جزء من الحاجز. ويوضح تقرير التدريع ما إذا كان الباب ونافذة المراقبة يحتاجان حماية بالرصاص وبأي سماكة مكافئة.' },
        { q: 'هل يمكن ترقية غرفة قائمة لجهاز جديد؟', a: 'غالبًا نعم. يراجع الفيزيائي المعدات الجديدة، ويُضاف تدريع تحديثي حيث لا تفي الجدران القائمة بالمتطلب الجديد، ضمن حدود الهيكل الإنشائي.' },
      ],
    },
  },

  'imaging-room-readiness-checklist': {
    published: PUBLISHED,
    minutes: 5,
    related: ['hub', 'shielding', 'mep'],
    en: {
      title: 'Imaging room readiness checklist for MRI and PET-CT installations',
      summary: 'Installations slip when the room is not ready on the day the OEM crew arrives. A checklist of what should be true before delivery, grouped by trade.',
      intro: 'Installations slip when the room is not ready on the day the OEM crew arrives. This checklist groups what usually has to be true before delivery. Your equipment manufacturer’s site-planning guide for the exact model always takes precedence.',
      sections: [
        {
          h: 'Documents',
          ul: [
            'The OEM site-planning guide for the exact scanner model.',
            'The radiation protection physicist’s shielding report (CT, PET-CT, X-ray).',
            'Approved shop drawings that match both documents.',
          ],
        },
        {
          h: 'Structure and access',
          ul: [
            'Floor loading and flatness confirmed for the scanner.',
            'A clear delivery route, with door openings and any temporary openings large enough for the magnet or gantry.',
            'Vibration limits met where the manufacturer specifies them.',
          ],
        },
        {
          h: 'Shielding and envelope',
          ul: [
            'MRI: RF shielding complete and attenuation-tested.',
            'CT and PET-CT: lead lining continuous and inspected.',
            'Shielded door fitted, aligned and closing true.',
            'Penetrations sealed with waveguides, filters or lead-backed sleeves.',
          ],
        },
        {
          h: 'Services',
          ul: [
            'Dedicated power and earthing as specified.',
            'Cooling and chilled water to the manufacturer’s requirements.',
            'HVAC holding the specified temperature and humidity.',
            'MRI: quench pipe route installed and clear.',
            'Medical gases and data network in place.',
          ],
        },
        {
          h: 'Finishes and fit-out',
          ul: [
            'Floors, walls and ceilings finished to the OEM’s requirements, with non-magnetic fittings in the MRI room.',
            'Clinical counters, sinks and joinery installed.',
            'Signage and access control working.',
          ],
        },
        {
          h: 'Handover',
          ul: [
            'RF attenuation test records or radiation survey completed.',
            'As-built drawings issued.',
            'OEM confirmation that the room is ready to receive the equipment.',
          ],
        },
      ],
      takeaways: [
        'Readiness is a set of documents and tests, not just a finished room.',
        'Agree one owner for shielding, doors and services interfaces.',
        'Book the RF test or radiation survey into the programme early.',
      ],
      faqs: [
        { q: 'Who is responsible for room readiness?', a: 'The project owner is responsible through the design team and contractors. The equipment manufacturer defines the requirements and confirms readiness before installing.' },
        { q: 'What most often delays an MRI or PET-CT installation?', a: 'Late changes at the interfaces between trades — penetrations through the shield, door frames, services routes — and testing that was not planned into the programme.' },
      ],
    },
    ar: {
      title: 'قائمة جاهزية غرف التصوير لتركيب أجهزة الرنين المغناطيسي وPET-CT',
      summary: 'تتأخر التركيبات عندما لا تكون الغرفة جاهزة يوم وصول فريق الشركة المصنِّعة. قائمة بما يجب تحققه قبل التوريد، مرتبة حسب الأعمال.',
      intro: 'تتأخر التركيبات عندما لا تكون الغرفة جاهزة يوم وصول فريق الشركة المصنِّعة. تجمع هذه القائمة ما يلزم تحققه عادةً قبل التوريد. ويظل دليل تخطيط الموقع من الشركة المصنِّعة للطراز المحدد هو المرجع الأول دائمًا.',
      sections: [
        {
          h: 'المستندات',
          ul: [
            'دليل تخطيط الموقع من الشركة المصنِّعة لطراز الجهاز المحدد.',
            'تقرير التدريع من الفيزيائي المختص بالوقاية الإشعاعية (الأشعة المقطعية وPET-CT والأشعة السينية).',
            'مخططات تنفيذ معتمدة تطابق المستندين.',
          ],
        },
        {
          h: 'الهيكل الإنشائي والوصول',
          ul: [
            'تأكيد تحمّل الأرضية واستوائها لوزن الجهاز.',
            'مسار توريد واضح، وفتحات أبواب وأي فتحات مؤقتة تتسع للمغناطيس أو الحامل.',
            'استيفاء حدود الاهتزاز حيث تحددها الشركة المصنِّعة.',
          ],
        },
        {
          h: 'التدريع والغلاف',
          ul: [
            'الرنين: اكتمال التدريع ضد الترددات الراديوية واختبار توهينه.',
            'الأشعة المقطعية وPET-CT: تبطين رصاصي متصل ومفحوص.',
            'تركيب الباب المدرّع وضبطه وإغلاقه باستقامة.',
            'إحكام نقاط الاختراق بموجّهات موجية أو مرشّحات أو أكمام مبطنة بالرصاص.',
          ],
        },
        {
          h: 'الخدمات',
          ul: [
            'طاقة وتأريض مخصصان وفق المواصفات.',
            'التبريد والمياه المبردة وفق متطلبات الشركة المصنِّعة.',
            'تكييف يحافظ على الحرارة والرطوبة المحددتين.',
            'الرنين: مسار أنبوب الإخماد مركّب وخالٍ من العوائق.',
            'الغازات الطبية وشبكة البيانات جاهزة.',
          ],
        },
        {
          h: 'التشطيبات والتجهيز',
          ul: [
            'تشطيب الأرضيات والجدران والأسقف وفق متطلبات الشركة المصنِّعة، مع تجهيزات غير مغناطيسية في غرفة الرنين.',
            'تركيب المنضدات السريرية والمغاسل والنجارة.',
            'عمل اللوحات الإرشادية والتحكم بالدخول.',
          ],
        },
        {
          h: 'التسليم',
          ul: [
            'اكتمال سجلات اختبار توهين الترددات الراديوية أو المسح الإشعاعي.',
            'إصدار مخططات ما بعد التنفيذ.',
            'تأكيد الشركة المصنِّعة أن الغرفة جاهزة لاستقبال الجهاز.',
          ],
        },
      ],
      takeaways: [
        'الجاهزية مجموعة مستندات واختبارات، لا غرفة منتهية الشكل فحسب.',
        'حدد جهة واحدة مسؤولة عن تقاطعات التدريع والأبواب والخدمات.',
        'أدرج اختبار الترددات الراديوية أو المسح الإشعاعي مبكرًا في البرنامج الزمني.',
      ],
      faqs: [
        { q: 'من المسؤول عن جاهزية الغرفة؟', a: 'مالك المشروع مسؤول عبر فريق التصميم والمقاولين. وتحدد الشركة المصنِّعة المتطلبات وتؤكد الجاهزية قبل التركيب.' },
        { q: 'ما أكثر ما يؤخر تركيب الرنين المغناطيسي أو PET-CT؟', a: 'التغييرات المتأخرة عند تقاطعات الأعمال — نقاط الاختراق في الدرع وأطر الأبواب ومسارات الخدمات — والاختبارات التي لم تُدرج في البرنامج الزمني.' },
      ],
    },
  },

  'infection-control-surfaces': {
    published: PUBLISHED,
    minutes: 5,
    related: ['surfaces', 'hub'],
    en: {
      title: 'Infection-control surfaces: solid surface (Corian) vs laminate in clinical areas',
      summary: 'Why seamless, non-porous surfaces matter in hospitals, how solid surface compares with laminate, and where each belongs.',
      intro: 'Surfaces in clinical spaces are touched constantly and cleaned with disinfectants every day. Joints, cracks and porous materials give contamination somewhere to hide, which is why seamless, non-porous surfaces are specified for nurse stations, sinks and laboratories.',
      sections: [
        {
          h: 'What solid surface is',
          p: ['Solid surface, such as Corian, is a mineral-filled acrylic made in sheets. It is non-porous throughout its thickness. Pieces are joined with colour-matched adhesive and sanded flush, so a long counter reads as one piece, and sinks and coved upstands can be formed into the same material.'],
        },
        {
          h: 'Solid surface vs laminate',
          table: {
            head: ['', 'Solid surface', 'High-pressure laminate'],
            rows: [
              ['Seams', 'Bonded and sanded flush; effectively invisible', 'Visible joints and edge strips'],
              ['Porosity', 'Non-porous through the thickness', 'Non-porous face, but cut edges and substrate can absorb moisture'],
              ['Repair on site', 'Light damage can be sanded and polished', 'Damaged areas usually need replacing'],
              ['Integrated sinks and coves', 'Formed from the same material', 'Separate sink and sealant lines'],
              ['Design freedom', 'Can be thermoformed into curves', 'Flat sheets with post-formed edges'],
            ],
          },
          p: ['Laminate remains a sensible choice for low-risk areas and tight budgets. In nurse stations, scrub sinks and laboratories, the absence of joints is usually worth the extra cost.'],
        },
        {
          h: 'Where seamless surfaces earn their place',
          ul: [
            'Nurse stations and reception counters.',
            'Scrub and hand-wash sinks.',
            'Laboratory and pharmacy benches.',
            'Wall cladding in wet or high-contact areas.',
          ],
        },
        {
          h: 'Limits worth knowing',
          p: ['A seamless surface improves cleanability; it does not replace the hospital’s disinfection protocol. Confirm that your disinfectants are compatible with the material using the manufacturer’s guidance, and protect the surface from extreme heat.'],
        },
        {
          h: 'How EGC makes them',
          p: ['Our Jeddah factory templates each piece from the finished room, cuts it on CNC equipment, thermoforms and bonds it, and installs and polishes it on site with the same team.'],
        },
      ],
      takeaways: [
        'Fewer joints means fewer places for contamination to lodge.',
        'Solid surface can be repaired on site and formed around sinks.',
        'It supports, but does not replace, a hospital’s cleaning protocol.',
      ],
      faqs: [
        { q: 'Is Corian antibacterial?', a: 'Corian is non-porous, so there is nowhere for contamination to soak in, but any surface still needs regular cleaning and disinfection. We do not describe the material itself as antibacterial.' },
        { q: 'Can sinks be integrated into a solid-surface counter?', a: 'Yes. Sinks can be moulded from the same material and bonded so there is no seam between bowl and counter.' },
        { q: 'Is Corian the only solid-surface brand?', a: 'No. Corian is the best-known brand, but other manufacturers make comparable solid-surface materials.' },
      ],
    },
    ar: {
      title: 'أسطح مقاومة للعدوى: الأسطح الصلبة (الكوريان) مقابل اللامينيت في المناطق السريرية',
      summary: 'لماذا تهم الأسطح المتصلة غير المسامية في المستشفيات، وكيف يقارن السطح الصلب باللامينيت، وأين يناسب كل منهما.',
      intro: 'تُلمس الأسطح في المساحات السريرية باستمرار وتُنظَّف بالمطهرات يوميًا. والفواصل والشقوق والمواد المسامية تمنح التلوث مكانًا يختبئ فيه، ولذلك تُحدَّد الأسطح المتصلة غير المسامية لمحطات التمريض والمغاسل والمختبرات.',
      sections: [
        {
          h: 'ما هو السطح الصلب',
          p: ['السطح الصلب، مثل الكوريان، أكريليك مدعّم بمعادن يُصنَّع في ألواح. وهو غير مسامي في كامل سماكته. تُوصَل القطع بلاصق مطابق للون وتُصنفر حتى تتسوى، فيبدو المنضدة الطويلة قطعة واحدة، ويمكن تشكيل المغاسل والحواف المقوّسة من المادة نفسها.'],
        },
        {
          h: 'السطح الصلب مقابل اللامينيت',
          table: {
            head: ['', 'السطح الصلب', 'اللامينيت عالي الضغط'],
            rows: [
              ['الوصلات', 'ملصقة ومصنفرة حتى التسوية؛ غير مرئية فعليًا', 'وصلات وشرائط حواف ظاهرة'],
              ['المسامية', 'غير مسامي في كامل السماكة', 'الوجه غير مسامي، لكن الحواف المقطوعة والقاعدة قد تمتص الرطوبة'],
              ['الإصلاح في الموقع', 'يمكن تنعيم التلف الخفيف وتلميعه', 'تحتاج المناطق التالفة غالبًا إلى استبدال'],
              ['المغاسل والحواف المقوّسة المدمجة', 'تُشكَّل من المادة نفسها', 'مغسلة منفصلة وخطوط سيليكون'],
              ['حرية التصميم', 'يمكن تشكيله حراريًا بمنحنيات', 'ألواح مسطحة بحواف مشكَّلة لاحقًا'],
            ],
          },
          p: ['يظل اللامينيت خيارًا معقولًا للمناطق منخفضة المخاطر والميزانيات المحدودة. أما في محطات التمريض والمغاسل الجراحية والمختبرات فعادةً ما تستحق خاصية انعدام الوصلات الفرق في التكلفة.'],
        },
        {
          h: 'أين تثبت الأسطح المتصلة قيمتها',
          ul: [
            'محطات التمريض ومكاتب الاستقبال.',
            'المغاسل الجراحية ومغاسل اليدين.',
            'طاولات المختبرات والصيدليات.',
            'كسوة الجدران في المناطق الرطبة أو كثيرة اللمس.',
          ],
        },
        {
          h: 'حدود يجدر معرفتها',
          p: ['السطح المتصل يحسّن قابلية التنظيف لكنه لا يحل محل بروتوكول التعقيم في المستشفى. تحقق من توافق المطهرات مع المادة بحسب إرشادات الشركة المصنِّعة، واحمِ السطح من الحرارة الشديدة.'],
        },
        {
          h: 'كيف تصنعها EGC',
          p: ['في مصنعنا بجدة تؤخذ مقاسات كل قطعة من الغرفة بعد اكتمالها، وتُقطع بمعدات CNC، وتُشكَّل حراريًا وتُلصق، ثم تُركَّب وتُلمَّع في الموقع بالفريق نفسه.'],
        },
      ],
      takeaways: [
        'قلة الوصلات تعني قلة الأماكن التي يعلق فيها التلوث.',
        'يمكن إصلاح السطح الصلب في الموقع وتشكيله حول المغاسل.',
        'يدعم بروتوكول التنظيف في المستشفى ولا يحل محله.',
      ],
      faqs: [
        { q: 'هل الكوريان مضاد للبكتيريا؟', a: 'الكوريان غير مسامي فلا مكان للتلوث ليتغلغل فيه، لكن أي سطح يحتاج إلى تنظيف وتعقيم منتظمين. ولا نصف المادة نفسها بأنها مضادة للبكتيريا.' },
        { q: 'هل يمكن دمج المغاسل في منضدة السطح الصلب؟', a: 'نعم. يمكن صب المغاسل من المادة نفسها ولصقها بحيث لا توجد وصلة بين الحوض والمنضدة.' },
        { q: 'هل الكوريان العلامة الوحيدة للأسطح الصلبة؟', a: 'لا. الكوريان هو الأشهر، لكن تصنّع شركات أخرى مواد أسطح صلبة مماثلة.' },
      ],
    },
  },
};

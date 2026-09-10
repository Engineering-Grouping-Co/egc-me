/* Placeholder project case studies — kept verbatim (same clients/names/
 * years) per client instruction; only translated and re-tagged against the
 * new 4-pillar taxonomy + Manufacturing. Real project data to follow. */

/* SVG path data for the Saudi Arabia map outline — not localized. */
export const KSA_PATH = 'M 276.9 511.8 L 273.4 499.3 L 265.4 490.5 L 263.4 478.8 L 249.6 468.4 L 235.4 443.9 L 227.9 420.1 L 209.5 400.0 L 197.6 395.2 L 180.0 367.4 L 176.9 347.1 L 178.0 329.8 L 162.8 297.4 L 150.3 286.0 L 135.9 280.0 L 127.2 263.2 L 128.6 256.6 L 121.2 241.5 L 113.4 235.0 L 103.0 213.3 L 86.8 189.7 L 73.3 169.7 L 60.0 169.8 L 64.1 153.8 L 65.3 143.5 L 68.6 131.9 L 98.2 136.5 L 109.8 127.5 L 116.1 117.0 L 136.4 113.0 L 140.8 103.2 L 149.6 98.3 L 123.1 69.1 L 176.4 54.4 L 181.5 50.0 L 213.6 57.9 L 253.2 78.4 L 328.3 137.1 L 377.8 139.4 L 401.5 142.2 L 408.1 156.1 L 427.0 155.4 L 437.4 180.6 L 450.5 187.2 L 455.0 197.5 L 473.2 209.8 L 474.8 221.8 L 472.2 231.5 L 475.5 241.4 L 483.2 249.5 L 486.7 259.1 L 490.7 266.3 L 498.8 272.1 L 506.1 270.0 L 511.2 281.1 L 512.2 287.9 L 522.4 317.5 L 602.4 332.2 L 607.8 326.0 L 620.0 346.7 L 602.3 405.1 L 522.4 434.3 L 445.6 445.5 L 420.8 458.6 L 401.7 489.3 L 389.3 494.2 L 382.6 484.4 L 372.4 485.9 L 346.7 483.0 L 341.8 480.1 L 311.1 480.7 L 303.8 483.4 L 292.9 475.8 L 285.9 490.1 L 288.6 502.4 L 276.9 511.8 Z';

export const PROJECT_FILTERS = {
  en: [
    { id: 'all', label: 'All Projects' },
    { id: 'shielding', label: 'Shielding' },
    { id: 'doors', label: 'Doors' },
    { id: 'mep', label: 'MEP' },
    { id: 'surfaces', label: 'Surfaces & Joinery' },
    { id: 'manufacturing', label: 'Manufacturing' },
  ],
  ar: [
    { id: 'all', label: 'جميع المشاريع' },
    { id: 'shielding', label: 'التدريع' },
    { id: 'doors', label: 'الأبواب' },
    { id: 'mep', label: 'الكهروميكانيكية' },
    { id: 'surfaces', label: 'الأسطح والنجارة' },
    { id: 'manufacturing', label: 'التصنيع' },
  ],
};

/* Locale-independent status key per project id, for CSS class lookup —
 * `status` on each PROJECTS entry is the localized display text. */
export const STATUS_KEYS = { 1: 'completed', 2: 'completed', 3: 'completed', 4: 'completed', 5: 'ongoing', 6: 'completed', 7: 'completed', 8: 'completed', 9: 'ongoing' };

export const PROJECTS = {
  en: [
    { id: 1, city: 'Jeddah', code: 'JED', x: 181.4, y: 361.7, name: 'King Faisal Specialist Hospital — Radiology Fit-Out', client: 'Government Health Authority', sector: 'Healthcare', status: 'Completed', year: '2023', service: 'shielding', blurb: 'Complete fit-out of the radiology department including six x-ray rooms, two MRI suites with full RF and radiation shielding, and all associated medical joinery.' },
    { id: 2, city: 'Jeddah', code: 'JED', x: 181.4, y: 361.7, name: 'Private Medical Centre — Reception & Interior Joinery', client: 'Private Healthcare Group', sector: 'Healthcare', status: 'Completed', year: '2023', service: 'surfaces', blurb: 'Custom reception counters, clinic doors, and interior woodwork for a multi-floor private medical centre in North Jeddah.' },
    { id: 3, city: 'Riyadh', code: 'RUH', x: 380.6, y: 267.5, name: 'National Guard Hospital — Imaging Department', client: 'Government Health Authority', sector: 'Healthcare', status: 'Completed', year: '2022', service: 'doors', blurb: 'CT and x-ray room construction package including lead-lined shielding, radiation doors, and Corian nursing station countertops.' },
    { id: 4, city: 'Riyadh', code: 'RUH', x: 380.6, y: 267.5, name: 'Commercial Tower — Lobby & Reception Fit-Out', client: 'Private Developer', sector: 'Commercial', status: 'Completed', year: '2022', service: 'surfaces', blurb: 'Feature reception counter, lobby panelling, and architectural woodwork package for a Grade-A commercial tower.' },
    { id: 5, city: 'Dammam', code: 'DMM', x: 471.9, y: 217.6, name: 'Dammam Medical Complex — Oncology Wing', client: 'Government Health Authority', sector: 'Healthcare', status: 'Ongoing', year: '2025', service: 'shielding', blurb: 'Radiation therapy room construction, lead shielding, and specialist door installation for a new oncology department.' },
    { id: 6, city: 'Madinah', code: 'MED', x: 191.4, y: 273.0, name: 'Hospitality Resort — Interior Joinery Package', client: 'Private Developer', sector: 'Hospitality', status: 'Completed', year: '2023', service: 'surfaces', blurb: 'Doors, panelling, and millwork for guest rooms and public areas of a hospitality resort development.' },
    { id: 7, city: 'Jubail', code: 'JUB', x: 459.1, y: 200.6, name: 'Industrial Facility — Electrical Panel Enclosures', client: 'Private Operator', sector: 'Industrial', status: 'Completed', year: '2024', service: 'manufacturing', blurb: 'Custom fabricated electrical distribution panel enclosures for an industrial city facility expansion.' },
    { id: 8, city: 'Jeddah', code: 'JED', x: 181.4, y: 361.7, name: 'Café & Dining Chain — Multi-Site Fit-Out', client: 'Private F&B Group', sector: 'Hospitality', status: 'Completed', year: '2024', service: 'surfaces', blurb: 'Complete interior joinery and Corian surface works across multiple café and dining outlets in Jeddah.' },
    { id: 9, city: 'Abha', code: 'AHA', x: 269.6, y: 457.2, name: 'Mountain Clinic — Full Interior Fit-Out', client: 'Private Healthcare', sector: 'Healthcare', status: 'Ongoing', year: '2025', service: 'surfaces', blurb: 'Reception counters, Corian vanity units, and interior joinery for a private clinic in the Aseer region.' },
  ],
  ar: [
    { id: 1, city: 'جدة', code: 'JED', x: 181.4, y: 361.7, name: 'مستشفى الملك فيصل التخصصي — تجهيز قسم الأشعة', client: 'جهة صحية حكومية', sector: 'الرعاية الصحية', status: 'مكتمل', year: '2023', service: 'shielding', blurb: 'تجهيز كامل لقسم الأشعة يشمل ست غرف أشعة سينية، وغرفتي رنين مغناطيسي بتدريع ترددي وإشعاعي كامل، وكل أعمال النجارة الطبية المرتبطة بها.' },
    { id: 2, city: 'جدة', code: 'JED', x: 181.4, y: 361.7, name: 'مركز طبي خاص — مكتب استقبال ونجارة داخلية', client: 'مجموعة رعاية صحية خاصة', sector: 'الرعاية الصحية', status: 'مكتمل', year: '2023', service: 'surfaces', blurb: 'مكاتب استقبال مخصصة، وأبواب عيادات، وأعمال خشبية داخلية لمركز طبي خاص متعدد الطوابق في شمال جدة.' },
    { id: 3, city: 'الرياض', code: 'RUH', x: 380.6, y: 267.5, name: 'مستشفى الحرس الوطني — قسم التصوير', client: 'جهة صحية حكومية', sector: 'الرعاية الصحية', status: 'مكتمل', year: '2022', service: 'doors', blurb: 'حزمة إنشاء غرف الأشعة المقطعية والسينية شملت تدريعًا مُبطّنًا بالرصاص، وأبوابًا إشعاعية، وأسطح كوريان لمحطة التمريض.' },
    { id: 4, city: 'الرياض', code: 'RUH', x: 380.6, y: 267.5, name: 'برج تجاري — تجهيز اللوبي ومكتب الاستقبال', client: 'مطوّر عقاري خاص', sector: 'تجاري', status: 'مكتمل', year: '2022', service: 'surfaces', blurb: 'مكتب استقبال مميز، وأعمال ألواح اللوبي، وحزمة أعمال خشبية معمارية لبرج تجاري من الفئة الأولى.' },
    { id: 5, city: 'الدمام', code: 'DMM', x: 471.9, y: 217.6, name: 'مجمع الدمام الطبي — جناح الأورام', client: 'جهة صحية حكومية', sector: 'الرعاية الصحية', status: 'قيد التنفيذ', year: '2025', service: 'shielding', blurb: 'إنشاء غرفة العلاج الإشعاعي، وتدريع بالرصاص، وتركيب أبواب متخصصة لقسم أورام جديد.' },
    { id: 6, city: 'المدينة المنورة', code: 'MED', x: 191.4, y: 273.0, name: 'منتجع فندقي — حزمة النجارة الداخلية', client: 'مطوّر عقاري خاص', sector: 'الضيافة', status: 'مكتمل', year: '2023', service: 'surfaces', blurb: 'أبواب وألواح وأعمال خشبية لغرف الضيوف والمناطق العامة في مشروع منتجع فندقي.' },
    { id: 7, city: 'الجبيل', code: 'JUB', x: 459.1, y: 200.6, name: 'منشأة صناعية — صناديق اللوحات الكهربائية', client: 'مشغّل خاص', sector: 'صناعي', status: 'مكتمل', year: '2024', service: 'manufacturing', blurb: 'تصنيع صناديق لوحات التوزيع الكهربائية المخصصة لتوسعة منشأة في مدينة صناعية.' },
    { id: 8, city: 'جدة', code: 'JED', x: 181.4, y: 361.7, name: 'سلسلة مقاهي ومطاعم — تجهيز متعدد المواقع', client: 'مجموعة أغذية ومشروبات خاصة', sector: 'الضيافة', status: 'مكتمل', year: '2024', service: 'surfaces', blurb: 'أعمال نجارة داخلية وأسطح كوريان كاملة عبر عدة فروع مقاهي ومطاعم في جدة.' },
    { id: 9, city: 'أبها', code: 'AHA', x: 269.6, y: 457.2, name: 'عيادة جبلية — تجهيز داخلي كامل', client: 'قطاع رعاية صحية خاص', sector: 'الرعاية الصحية', status: 'قيد التنفيذ', year: '2025', service: 'surfaces', blurb: 'مكاتب استقبال، ووحدات مغاسل كوريان، وأعمال نجارة داخلية لعيادة خاصة في منطقة عسير.' },
  ],
};

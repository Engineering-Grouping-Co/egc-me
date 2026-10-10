/* Site photographs (public/images/photos/<key>-<width>.webp, sizes in photoMeta.json).
 * `cat` groups them in the gallery; `pos` is the object-position used when a photo is cropped
 * to a frame; `en` / `ar` are the alt text and caption. Describe only what is visible:
 * no client, project or product claims belong in these strings. */

export const PHOTO_CATEGORIES = {
  en: {
    imaging: 'Imaging rooms',
    shielding: 'Shielding and medical doors',
    reception: 'Reception and nurse stations',
    surfaces: 'Corian and washbasins',
    joinery: 'Joinery and wooden doors',
    interiors: 'Interiors and dining',
    building: 'Building services',
  },
  ar: {
    imaging: 'غرف التصوير الطبي',
    shielding: 'التدريع والأبواب الطبية',
    reception: 'الاستقبال ومحطات التمريض',
    surfaces: 'الكوريان والأحواض',
    joinery: 'النجارة والأبواب الخشبية',
    interiors: 'التجهيزات الداخلية ومناطق الطعام',
    building: 'الخدمات الميكانيكية والكهربائية',
  },
};

const p = (cat, en, ar, pos) => ({ cat, en, ar, pos });

export const PHOTOS = {
  // ── imaging rooms ──
  'ct-suite-desert-ceiling': p('imaging', 'CT room with a backlit palm-tree ceiling panel, a desert-scene wall and wood-faced cabinets', 'غرفة أشعة مقطعية بلوحة سقف مضيئة بصورة نخيل وجدار بمشهد صحراوي وخزائن مكسوة بالخشب', 'center 40%'),
  'ct-suite-desert-gantry': p('imaging', 'CT room with the gantry and patient table beside a desert-scene wall and a palm-tree ceiling panel', 'غرفة أشعة مقطعية يظهر فيها الجهاز وطاولة الفحص بجانب جدار بمشهد صحراوي ولوحة سقف بصورة نخيل'),
  'ct-suite-desert-wide': p('imaging', 'CT room with the scanner, a ceiling-mounted rail and a printed ceiling panel above', 'غرفة أشعة مقطعية يظهر فيها الجهاز ومسار معلق بالسقف ولوحة سقف مطبوعة'),
  'imaging-room-sliding-door': p('imaging', 'Imaging room with a wood-faced sliding door next to the scanner and cove lighting', 'غرفة تصوير بباب منزلق مكسو بالخشب بجانب الجهاز وإضاءة مخفية'),
  'scanner-room-wood-doors': p('imaging', 'Bright scanner room with wood-faced doors and a printed ceiling panel', 'غرفة جهاز تصوير مضيئة بأبواب مكسوة بالخشب ولوحة سقف مطبوعة'),
  'scanner-room-palm-ceiling': p('imaging', 'Scanner room with a palm-tree ceiling panel and an illuminated desert wall', 'غرفة جهاز تصوير بلوحة سقف بصورة نخيل وجدار مضيء بمشهد صحراوي'),
  'scanner-room-gantry': p('imaging', 'Imaging room with a large gantry, a ceiling-mounted pendant and an illuminated desert wall', 'غرفة تصوير فيها جهاز ضخم وذراع معلقة بالسقف وجدار مضيء بمشهد صحراوي'),
  'scanner-room-printed-ceiling': p('imaging', 'Scanner room with an oval printed ceiling, wood-faced cabinets and a patient table', 'غرفة جهاز تصوير بسقف مطبوع بيضاوي وخزائن مكسوة بالخشب وطاولة فحص'),
  'ct-sky-ceiling': p('imaging', 'CT scanner under an illuminated ceiling panel printed with a cloud pattern', 'جهاز أشعة مقطعية تحت لوحة سقف مضيئة بنقش سحب', 'center 30%'),
  'xray-room-ceiling-unit': p('imaging', 'X-ray room with a ceiling-mounted unit in protective wrap and a table covered in blue sheet', 'غرفة أشعة سينية بوحدة معلقة بالسقف مغطاة بغلاف واقٍ وطاولة مغطاة بغطاء أزرق', 'center 60%'),
  'xray-room-wide': p('imaging', 'X-ray room with a wall stand, split air-conditioners and equipment still in protective wrap', 'غرفة أشعة سينية بحامل جداري ومكيفات منفصلة ومعدات ما زالت بغلافها الواقي'),
  'xray-ceiling-fitting': p('imaging', 'Ceiling-mounted X-ray equipment being fitted in a new imaging room', 'تركيب معدات أشعة سينية معلقة بالسقف في غرفة تصوير جديدة'),
  'interventional-xray-room': p('imaging', 'Interventional X-ray room with a C-arm and ceiling-mounted monitors', 'غرفة أشعة تداخلية فيها جهاز بذراع على شكل C وشاشات معلقة بالسقف', 'center 45%'),
  'xray-room-equipment-wrap': p('imaging', 'X-ray room with a ceiling tube stand, a patient table in pink protective wrap and a light-oak cabinet', 'غرفة أشعة سينية بحامل أنبوب سقفي وطاولة فحص بغلاف واقٍ وردي وخزانة من خشب البلوط الفاتح'),
  'xray-room-warm': p('imaging', 'X-ray room with a ceiling-suspended tube and monitor, lit by warm cove lighting', 'غرفة أشعة سينية بأنبوب وشاشة معلقين بالسقف وإضاءة دافئة مخفية', 'center 40%'),
  'ceiling-panel-fitting': p('imaging', 'Technicians fitting a printed backlit ceiling panel above an imaging room', 'فنيون يركبون لوحة سقف مطبوعة مضيئة في غرفة تصوير'),
  'scanner-gantry-wrapped': p('imaging', 'Scanner gantry on a trolley, wrapped in protective film, in a room with a printed ceiling', 'جهاز تصوير على عربة بغلاف واقٍ داخل غرفة بسقف مطبوع'),

  // ── shielding and medical doors ──
  'lead-lined-room': p('shielding', 'Radiation-shielded room with lead sheet fixed to the walls, before finishes', 'غرفة مدرّعة ضد الإشعاع بألواح رصاص مثبتة على الجدران قبل التشطيبات'),
  'lead-lined-room-studs': p('shielding', 'Lead-lined room under construction, with metal studs and a ladder', 'غرفة مبطنة بالرصاص قيد التنفيذ بهياكل معدنية وسلم'),
  'lead-lined-frame': p('shielding', 'Lead-lined wall with a steel frame and a service opening', 'جدار مبطن بالرصاص بإطار فولاذي وفتحة للخدمات'),
  'radiation-door-corridor': p('shielding', 'Automatic sliding door with a wood-effect face and a radiation warning sign at a hospital corridor', 'باب منزلق آلي بوجه بنقش الخشب ولوحة تحذير من الإشعاع في ممر مستشفى'),
  'sliding-door-hall': p('shielding', 'Wood-faced sliding door at the end of a hospital corridor', 'باب منزلق مكسو بالخشب في نهاية ممر مستشفى', 'center 55%'),
  'radiation-sign-door': p('shielding', 'Sliding door with radiation warning signs and a card reader beside it', 'باب منزلق بلوحات تحذير من الإشعاع وقارئ بطاقات بجانبه', 'center 55%'),
  'flush-sliding-door-banded': p('shielding', 'Large flush sliding door leaf with blue and green bands and a printed panel, before finishes', 'ضلفة باب منزلق كبيرة مسطحة بشريطين أزرق وأخضر ولوحة مطبوعة قبل التشطيبات'),
  'door-kickplate': p('shielding', 'Wood-faced hospital door with a stainless-steel kick plate', 'باب مستشفى مكسو بالخشب بلوح حماية سفلي من الفولاذ المقاوم للصدأ', 'center 60%'),

  // ── reception and nurse stations ──
  'nurse-station-curved': p('reception', 'Curved nurse station in veined solid surface with timber-grain panels', 'محطة تمريض منحنية من الأسطح الصلبة المعرّقة بألواح بنقش الخشب'),
  'reception-counter-veined': p('reception', 'Reception counter in veined white solid surface and timber-grain panels', 'منضدة استقبال من سطح صلب أبيض معرّق وألواح بنقش الخشب'),
  'reception-counter-angled': p('reception', 'L-shaped reception counter with a timber-grain top and a white solid-surface front', 'منضدة استقبال بشكل L بسطح بنقش الخشب وواجهة بيضاء من السطح الصلب'),
  'reception-lobby-windows': p('reception', 'Long reception counter in a lobby with floor-to-ceiling windows', 'منضدة استقبال طويلة في ردهة بنوافذ من الأرض إلى السقف'),
  'registration-desk-long': p('reception', 'Long solid-surface registration desk with a row of chairs', 'مكتب تسجيل طويل من السطح الصلب مع صف من الكراسي'),
  'nurse-station-wing': p('reception', 'Nurse station with a continuous curved solid-surface worktop', 'محطة تمريض بسطح عمل منحنٍ متصل من السطح الصلب'),
  'registration-desks-panel': p('reception', 'Registration desks with white solid-surface tops against timber-grain wall panels', 'مكاتب تسجيل بأسطح بيضاء صلبة أمام ألواح جدارية بنقش الخشب'),
  'registration-desk-lattice': p('reception', 'Registration desk beside a timber lattice screen', 'مكتب تسجيل بجانب حاجز خشبي شبكي'),
  'reception-curved-corner': p('reception', 'Curved reception counter with a timber-grain base and a veined top', 'منضدة استقبال منحنية بقاعدة بنقش الخشب وسطح معرّق'),
  'reception-timber-slat': p('reception', 'Reception counter faced in timber slats with white panels', 'منضدة استقبال مكسوة بشرائح خشبية مع ألواح بيضاء'),
  'imc-nurse-station': p('reception', 'Nurse station near completion, with a curved cream solid-surface top and the IMC logo on the wall behind', 'محطة تمريض قريبة من الإنجاز بسطح كريمي منحنٍ من السطح الصلب وشعار المركز الطبي الدولي (IMC) على الجدار خلفها'),
  'imc-nurse-station-wide': p('reception', 'Wide view of the same nurse station and department corridor, before furniture is brought in', 'منظر واسع للمحطة نفسها وممر القسم قبل إدخال الأثاث'),
  'radiology-reception': p('reception', 'Radiology department reception with a nurse counter, a sliding door and warning signage', 'استقبال قسم الأشعة بمنضدة تمريض وباب منزلق ولوحات تحذير', 'center 55%'),
  'nurse-station-corridor': p('reception', 'Nurse station at a ward corridor, with curved solid-surface wings and timber-clad walls', 'محطة تمريض عند ممر جناح بأجنحة منحنية من السطح الصلب وجدران مكسوة بالخشب'),

  // ── Corian and washbasins ──
  'vanity-dark-trough': p('surfaces', 'Dark solid-surface vanity with three integrated basins under a backlit mirror', 'منضدة غسيل داكنة من السطح الصلب بثلاثة أحواض مدمجة تحت مرآة مضيئة'),
  'basin-white-double': p('surfaces', 'Wall-hung double basin in white veined solid surface', 'حوض مزدوج معلق بالجدار من سطح صلب أبيض معرّق'),
  'vanity-stone-led-mirror': p('surfaces', 'Stone-effect vanity with three basins and a mirror lit from behind', 'منضدة غسيل بنقش الحجر بثلاثة أحواض ومرآة بإضاءة خلفية'),
  'lab-bench-sinks': p('surfaces', 'Laboratory bench with double-bowl sinks and a white solid-surface top', 'طاولة مختبر بحوضين وسطح أبيض من السطح الصلب'),
  'blue-top-cabinet': p('surfaces', 'Cabinet unit with a blue solid-surface top and sink in a clinical room', 'وحدة خزائن بسطح أزرق من السطح الصلب وحوض في غرفة سريرية'),
  'basin-white-large': p('surfaces', 'Large double basin in white veined solid surface on a floating base', 'حوض مزدوج كبير من سطح صلب أبيض معرّق على قاعدة معلقة'),

  // ── joinery and wooden doors ──
  'carved-door-entrance': p('joinery', 'Carved double entrance door in timber with glazed side panels', 'باب مدخل مزدوج منحوت من الخشب مع ألواح جانبية زجاجية', 'center 35%'),
  'carved-door-stone': p('joinery', 'Carved timber double door set into a stone entrance', 'باب خشبي مزدوج منحوت داخل مدخل حجري', 'center 45%'),
  'diamond-carved-doors': p('joinery', 'Double timber door with a diamond pattern carved into the leaves', 'باب خشبي مزدوج بنقش معيّنات منحوت على الضلفتين', 'center 40%'),
  'timber-pivot-door': p('joinery', 'Full-height timber pivot door with a lit recessed surround', 'باب خشبي دوّار بكامل الارتفاع بإطار غائر مضاء', 'center 50%'),
  'glazed-timber-sliding-doors': p('joinery', 'Timber-framed glazed sliding doors with an arched head', 'أبواب منزلقة زجاجية بإطار خشبي وقوس علوي'),
  'lift-lobby-cladding': p('joinery', 'Timber wall cladding around the lift doors in a hospital lobby', 'تكسية جدارية خشبية حول أبواب المصاعد في ردهة مستشفى'),
  'kitchen-walnut-island': p('joinery', 'Kitchen with walnut-finish wall cabinets, strip lighting and a white solid-surface island', 'مطبخ بخزائن علوية بتشطيب الجوز وإضاءة شريطية وجزيرة بيضاء من السطح الصلب'),
  'kitchen-light-mosaic': p('joinery', 'Kitchen with light-grey cabinets and a mosaic splashback', 'مطبخ بخزائن رمادية فاتحة وخلفية من الفسيفساء'),
  'kitchen-dark-wood': p('joinery', 'Kitchen with white upper cabinets, dark wood-grain base units and under-cabinet lighting', 'مطبخ بخزائن علوية بيضاء ووحدات سفلية بنقش خشب داكن وإضاءة أسفل الخزائن'),
  'pantry-wall-unit': p('joinery', 'Pantry wall unit with glazed upper cabinets and white base cabinets', 'وحدة جدارية للمخزن بخزائن علوية زجاجية وخزائن سفلية بيضاء'),
  'dressing-room-glass': p('joinery', 'Dressing room with glass-fronted wardrobes lit in warm light', 'غرفة ملابس بخزائن بواجهات زجاجية وإضاءة دافئة'),
  'wall-panel-curved': p('joinery', 'Curved wood-grain wall panelling in a new hospital area', 'تكسية جدارية منحنية بنقش الخشب في منطقة جديدة بالمستشفى'),
  'mod-emblem-wall': p('joinery', 'Timber feature wall carrying the Ministry of Defense emblem, in a hospital corridor', 'جدار خشبي مميز يحمل شعار وزارة الدفاع في ممر مستشفى', 'center 45%'),
  'timber-wall-cladding': p('joinery', 'Timber slat wall cladding in a room, before finishing', 'تكسية جدارية بشرائح خشبية في غرفة قبل التشطيب'),

  // ── interiors and dining ──
  'jed2fly-kiosk': p('interiors', 'Take-away food kiosk with an illuminated JED2FLY sign and a timber-clad counter', 'كشك وجبات سريعة بلافتة JED2FLY مضاءة ومنضدة مكسوة بالخشب'),
  'cafe-kiosk-seating': p('interiors', 'Café kiosk with a lit sign, a glass display counter and table seating', 'كشك مقهى بلافتة مضاءة ومنضدة عرض زجاجية ومقاعد طعام'),
  'timber-slat-corridor': p('interiors', 'Hospital corridor lined with timber slats and wall panels', 'ممر مستشفى مكسو بشرائح خشبية وألواح جدارية'),
  'dining-nook-bench': p('interiors', 'Dining nook with built-in bench seating and panelled walls', 'ركن طعام بمقاعد مدمجة وجدران مكسوة بالألواح'),
  'staff-pantry-counter': p('interiors', 'Staff pantry with a long white counter and timber-faced base', 'مطبخ للموظفين بمنضدة بيضاء طويلة وقاعدة مكسوة بالخشب'),
  'staff-kitchenette-units': p('interiors', 'Staff kitchenette with timber-faced columns and light-oak cabinets', 'ركن تحضير للموظفين بأعمدة مكسوة بالخشب وخزائن من البلوط الفاتح'),
  'staff-dining-hall': p('interiors', 'Staff dining hall with timber-clad columns and café tables', 'قاعة طعام للموظفين بأعمدة مكسوة بالخشب وطاولات مقهى'),
  'dining-slat-screens': p('interiors', 'Dining area separated by timber slat screens', 'منطقة طعام تفصلها حواجز من الشرائح الخشبية'),
  'cafe-service-counter': p('interiors', 'Café service counter with a veined top and an illuminated base', 'منضدة خدمة مقهى بسطح معرّق وقاعدة مضاءة'),
  'dining-hall-pillars': p('interiors', 'Dining hall with timber-clad pillars, a white counter and lounge chairs', 'قاعة طعام بأعمدة مكسوة بالخشب ومنضدة بيضاء ومقاعد استراحة'),
  'clinical-desk': p('interiors', 'Workstation desk with a dark solid-surface top and light-wood drawer units', 'مكتب عمل بسطح داكن من السطح الصلب ووحدات أدراج من الخشب الفاتح'),

  // ── building services ──
  'ceiling-services-sprinklers': p('building', 'Overhead services in a new building, with red sprinkler pipework above the ceiling line', 'شبكات الخدمات العلوية في مبنى جديد مع مواسير رش حريق حمراء فوق مستوى السقف'),
  'ceiling-services-trays': p('building', 'Overhead services routed through a new building: pipework, cable tray and conduit', 'مسارات الخدمات العلوية في مبنى جديد: مواسير ومجاري كابلات وأنابيب'),
  'steel-hangers': p('building', 'Painted steel hangers supporting services below the slab', 'حوامل فولاذية مدهونة تدعم الخدمات أسفل البلاطة'),
  'rooftop-ducts': p('building', 'Rooftop ductwork and exhaust fans during installation', 'مجاري هواء ومراوح شفط على السطح أثناء التركيب'),
  'panel-wiring': p('building', 'Electrical distribution panel with labelled, colour-coded wiring', 'لوحة توزيع كهربائية بأسلاك مرمّزة بالألوان وعلامات تعريف', 'center 45%'),
  'panel-orange': p('building', 'Electrical control panel with breakers and terminals on an orange back plate', 'لوحة تحكم كهربائية بقواطع ومشابك على لوح خلفي برتقالي', 'center 40%'),
  'panel-terminals': p('building', 'Control panel with rows of terminal blocks and wiring', 'لوحة تحكم بصفوف من كتل التوصيل والأسلاك', 'center 45%'),
  'services-installation-room': p('building', 'Technicians installing services and a distribution board in a new room', 'فنيون يركبون الخدمات ولوحة توزيع في غرفة جديدة'),
};

/* The order the gallery shows its photographs in: the strongest first. */
export const GALLERY_ORDER = [
  'ct-suite-desert-ceiling', 'ct-suite-desert-gantry', 'nurse-station-curved', 'lead-lined-room', 'radiation-door-corridor', 'kitchen-walnut-island', 'vanity-dark-trough',
  'ceiling-services-sprinklers', 'staff-dining-hall', 'imc-nurse-station', 'ct-suite-desert-wide', 'mod-emblem-wall', 'reception-counter-veined', 'jed2fly-kiosk', 'lead-lined-room-studs', 'sliding-door-hall',
  'carved-door-entrance', 'basin-white-double', 'rooftop-ducts', 'timber-slat-corridor', 'scanner-room-palm-ceiling', 'nurse-station-corridor',
  'flush-sliding-door-banded', 'diamond-carved-doors', 'vanity-stone-led-mirror', 'panel-wiring', 'dining-hall-pillars', 'xray-room-warm',
  'scanner-room-gantry', 'reception-lobby-windows', 'lead-lined-frame', 'radiation-sign-door', 'timber-pivot-door', 'lab-bench-sinks',
  'ceiling-services-trays', 'staff-pantry-counter', 'imaging-room-sliding-door', 'registration-desks-panel', 'imc-nurse-station-wide', 'cafe-kiosk-seating', 'radiology-reception', 'door-kickplate', 'glazed-timber-sliding-doors',
  'blue-top-cabinet', 'steel-hangers', 'kitchen-light-mosaic', 'dining-nook-bench', 'scanner-room-wood-doors', 'registration-desk-lattice',
  'xray-room-wide', 'interventional-xray-room', 'ct-sky-ceiling', 'nurse-station-wing', 'carved-door-stone', 'kitchen-dark-wood',
  'wall-panel-curved', 'lift-lobby-cladding', 'pantry-wall-unit', 'cafe-service-counter', 'dressing-room-glass', 'reception-curved-corner',
  'xray-room-ceiling-unit', 'xray-ceiling-fitting', 'ceiling-panel-fitting', 'scanner-room-printed-ceiling', 'xray-room-equipment-wrap', 'scanner-gantry-wrapped',
  'registration-desk-long', 'reception-counter-angled', 'reception-timber-slat', 'timber-wall-cladding', 'dining-slat-screens', 'staff-kitchenette-units',
  'clinical-desk', 'basin-white-large', 'panel-orange', 'panel-terminals', 'services-installation-room',
];

/* Lead photograph and "on site" strip for each page, by route key. A page without an entry (medical gas,
 * nurse call, the software pages) shows no photographs rather than a stand-in. */
export const PAGE_PHOTOS = {
  hub: { lead: 'ct-suite-desert-ceiling', strip: ['lead-lined-room', 'radiation-door-corridor', 'nurse-station-curved'] },
  mriRoom: { lead: 'scanner-room-printed-ceiling', strip: ['scanner-room-wood-doors', 'imaging-room-sliding-door', 'ceiling-panel-fitting'] },
  ctRoom: { lead: 'ct-suite-desert-wide', strip: ['ct-suite-desert-ceiling', 'lead-lined-room', 'radiation-door-corridor'] },
  petCtRoom: { lead: 'scanner-room-gantry', strip: ['scanner-room-palm-ceiling', 'lead-lined-room-studs', 'radiation-sign-door'] },
  xrayRoom: { lead: 'xray-room-wide', strip: ['xray-room-warm', 'interventional-xray-room', 'xray-ceiling-fitting'] },
  shielding: { lead: 'lead-lined-room', strip: ['lead-lined-room-studs', 'lead-lined-frame', 'radiation-sign-door'] },
  doors: { lead: 'radiation-door-corridor', strip: ['sliding-door-hall', 'radiation-sign-door', 'door-kickplate'] },
  mep: { lead: 'ceiling-services-trays', strip: ['ceiling-services-sprinklers', 'steel-hangers', 'panel-wiring'] },
  surfaces: { lead: 'nurse-station-curved', strip: ['nurse-station-wing', 'reception-counter-veined', 'vanity-dark-trough'] },
  hvac: { lead: 'rooftop-ducts', strip: ['ceiling-services-trays', 'services-installation-room'] },
  fireProtection: { lead: 'ceiling-services-sprinklers', strip: ['steel-hangers', 'ceiling-services-trays'] },
  hospitalFitOut: { lead: 'nurse-station-corridor', strip: ['timber-slat-corridor', 'reception-lobby-windows', 'staff-dining-hall'] },
  orCeilings: { lead: 'ceiling-panel-fitting', strip: ['ct-suite-desert-ceiling', 'ct-sky-ceiling', 'scanner-room-palm-ceiling'] },
  wallPanels: { lead: 'wall-panel-curved', strip: ['lift-lobby-cladding', 'timber-wall-cladding', 'reception-timber-slat'] },
  hermeticDoors: { lead: 'flush-sliding-door-banded', strip: ['radiation-door-corridor', 'sliding-door-hall', 'radiation-sign-door'] },
  manufacturing: { lead: 'reception-curved-corner', lead2: 'kitchen-walnut-island', work: ['jed2fly-kiosk', 'cafe-kiosk-seating', 'mod-emblem-wall'], strip: ['carved-door-entrance', 'vanity-dark-trough', 'kitchen-light-mosaic'] },
  woodenDoors: { lead: 'carved-door-entrance', strip: ['diamond-carved-doors', 'timber-pivot-door', 'glazed-timber-sliding-doors'] },
  corianSurfaces: { lead: 'vanity-dark-trough', strip: ['basin-white-double', 'vanity-stone-led-mirror', 'lab-bench-sinks'] },
  joinery: { lead: 'kitchen-walnut-island', strip: ['pantry-wall-unit', 'dressing-room-glass', 'wall-panel-curved'] },
};

/* One lookup for every FAQ on the site. The FAQ accordion on a page and the
 * FAQPage structured data both read from here, so what search engines and AI
 * assistants see is always exactly what visitors see. */
import { HUB, MANUFACTURING, SOFTWARE, SYSTEMS } from './sectors.js';
import { SERVICES } from './services.js';
import { ARTICLES } from './knowledge.js';

const HOME_FAQS = {
  en: [
    { q: 'Who is Engineering Grouping Co. (EGC)?', a: 'Engineering Grouping Co. (EGC), also known as Engineering Group and, in Arabic, التجمع الهندسي, is a healthcare contractor based in Jeddah, Saudi Arabia, founded in 2006. It prepares MRI, CT, PET-CT and X-ray rooms and runs its own Wood & Corian factory and software engineering team. Commercial registration no. 7040750007.' },
    { q: 'What does a healthcare contractor do?', a: 'A healthcare contractor builds and fits out clinical spaces where infection control, radiation protection and equipment requirements shape the work. EGC specialises in imaging rooms: shielding, medical doors, specialised MEP and infection-control surfaces.' },
    { q: 'Which equipment manufacturers does EGC work with?', a: 'EGC prepares rooms for equipment from manufacturers such as Siemens Healthineers, Philips Healthcare and GE HealthCare, building from each manufacturer’s site-planning guide and coordinating with its installation team.' },
    { q: 'Where in Saudi Arabia does EGC work?', a: 'EGC is headquartered in Almanar District, Jeddah, and delivers projects across the Western, Central, Eastern and Southern regions of the Kingdom, including Riyadh, Dammam, Madinah, Jubail and Abha.' },
    { q: 'Will EGC supply nurse call systems and turnkey installations?', a: 'Nurse call systems, operating-room clocks and turnkey installation are planned as the next part of EGC’s range. If you have a current requirement, contact us and we will confirm what we can deliver.' },
    { q: 'How do I request a proposal?', a: 'Send us the equipment model, the site and your programme through the contact page, by email at info@egc-me.com or by phone on +966 50 434 1861.' },
  ],
  ar: [
    { q: 'من هي شركة التجمع الهندسي (EGC)؟', a: 'شركة التجمع الهندسي (EGC)، المعروفة أيضًا باسم Engineering Grouping Co. أو Engineering Group وباسمها النظامي شركة المجموعة الهندسية، مقاول مشاريع صحية مقره جدة في المملكة العربية السعودية، تأسس عام 2006. يجهّز غرف الرنين المغناطيسي والأشعة المقطعية وPET-CT والأشعة السينية، ويدير مصنعه الخاص للخشب والكوريان وفريقًا لهندسة البرمجيات. السجل التجاري 7040750007.' },
    { q: 'ماذا يفعل مقاول المشاريع الصحية؟', a: 'يبني مقاول المشاريع الصحية ويجهّز المساحات السريرية التي تحكم أعمالها قواعد مكافحة العدوى والحماية الإشعاعية ومتطلبات المعدات. وتتخصص EGC في غرف التصوير: التدريع والأبواب الطبية والأعمال الكهروميكانيكية المتخصصة والأسطح المقاومة للعدوى.' },
    { q: 'هل تعمل EGC كمقاول مستشفيات؟', a: 'نعم، كمقاول متخصص داخل المستشفيات. نعمل عادةً بجانب المقاول الرئيسي ونتولى الغرف التي تحتاج مهارات خاصة مثل غرف التصوير الطبي، ونسلّمها جاهزة لتركيب الشركة المصنِّعة للمعدات.' },
    { q: 'مع أي شركات مصنِّعة للمعدات تعمل EGC؟', a: 'تجهّز EGC الغرف لمعدات شركات مثل سيمنز هيلثينيرز وفيليبس هيلث كير وجي إي هيلث كير، وتبني وفق دليل تخطيط الموقع الصادر عن كل شركة وتنسّق مع فريق التركيب لديها.' },
    { q: 'أين تعمل EGC في المملكة؟', a: 'مقر EGC الرئيسي في حي المنار بجدة، وتنفذ مشاريع في المناطق الغربية والوسطى والشرقية والجنوبية، ومنها الرياض والدمام والمدينة المنورة والجبيل وأبها.' },
    { q: 'هل ستورّد EGC أنظمة نداء الممرضات والتركيب الشامل؟', a: 'أنظمة نداء الممرضات وساعات غرف العمليات والتركيب الشامل مخطط لها كمرحلة تالية من أعمال EGC. إن كان لديك احتياج قائم فتواصل معنا وسنؤكد ما يمكننا تنفيذه.' },
    { q: 'كيف أطلب عرضًا؟', a: 'أرسل لنا طراز الجهاز والموقع وجدولك الزمني عبر صفحة التواصل، أو بالبريد info@egc-me.com، أو بالهاتف +966 50 434 1861.' },
  ],
};

export function getFaqs(routeKey, locale) {
  if (routeKey === 'home') return HOME_FAQS[locale];
  if (routeKey === 'hub') return HUB[locale].faqs;
  if (routeKey === 'manufacturing') return MANUFACTURING[locale].faqs;
  if (routeKey === 'software') return SOFTWARE[locale].faqs;
  if (routeKey === 'systems') return SYSTEMS[locale].faqs;
  const svc = SERVICES[locale].find((s) => s.id === routeKey);
  if (svc) return svc.faqs;
  if (routeKey.startsWith('article:')) {
    const a = ARTICLES[routeKey.slice('article:'.length)];
    return a ? a[locale].faqs : [];
  }
  return [];
}

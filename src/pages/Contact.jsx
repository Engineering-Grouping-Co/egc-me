import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Clock, Mail, MapPin, Phone } from 'lucide-react';
import { useContent } from '../content';
import { PageHero } from '../components/Parts';
import './pages.css';

const TOPICS = { software: 2, systems: 3, manufacturing: 1, healthcare: 0 };
const EMPTY = { name: '', company: '', email: '', phone: '', sector: null, service: null, message: '' };

export default function Contact() {
  const { SITE, UI, COPY } = useContent();
  const t = COPY.contact;
  const [params] = useSearchParams();
  const topicIdx = TOPICS[params.get('topic')];
  const [form, setForm] = useState(EMPTY);
  const [sent, setSent] = useState(false);
  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const sector = form.sector ?? t.sectors[0];
  const service = form.service ?? t.services[topicIdx ?? t.services.length - 1];

  const submit = (e) => {
    e.preventDefault();
    const body = [
      `${t.name}: ${form.name}`,
      `${t.company}: ${form.company}`,
      `${t.email}: ${form.email}`,
      `${t.phone}: ${form.phone}`,
      `${t.sector}: ${sector}`,
      `${t.service}: ${service}`,
      '',
      form.message,
    ].join('\n');
    window.location.href = `mailto:${SITE.email}?subject=${encodeURIComponent(t.subjectPrefix + (form.company || form.name))}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };

  return (
    <>
      <PageHero routeKey="contact" title={t.h1} lead={t.lead} />

      <section className="sec">
        <div className="wrap split split--7-5 split--top">
          <div>
            {sent ? (
              <div className="sent" role="status">
                <h2>{t.sentTitle}</h2>
                <p>{t.sentText}</p>
                <button type="button" className="btn btn--ghost" onClick={() => setSent(false)}>{t.sentAgain}</button>
              </div>
            ) : (
              <form className="cform" onSubmit={submit}>
                <h2>{t.formTitle}</h2>
                <p className="small">{t.formNote}</p>
                <div className="cform__row">
                  <div className="field">
                    <label htmlFor="c-name">{t.name} ({t.required})</label>
                    <input id="c-name" required autoComplete="name" value={form.name} onChange={set('name')} />
                  </div>
                  <div className="field">
                    <label htmlFor="c-company">{t.company}</label>
                    <input id="c-company" autoComplete="organization" value={form.company} onChange={set('company')} />
                  </div>
                </div>
                <div className="cform__row">
                  <div className="field">
                    <label htmlFor="c-email">{t.email} ({t.required})</label>
                    <input id="c-email" type="email" required autoComplete="email" dir="ltr" value={form.email} onChange={set('email')} />
                  </div>
                  <div className="field">
                    <label htmlFor="c-phone">{t.phone}</label>
                    <input id="c-phone" type="tel" autoComplete="tel" dir="ltr" value={form.phone} onChange={set('phone')} />
                  </div>
                </div>
                <div className="cform__row">
                  <div className="field">
                    <label htmlFor="c-sector">{t.sector}</label>
                    <select id="c-sector" value={sector} onChange={set('sector')}>
                      {t.sectors.map((s) => <option key={s}>{s}</option>)}
                    </select>
                  </div>
                  <div className="field">
                    <label htmlFor="c-service">{t.service}</label>
                    <select id="c-service" value={service} onChange={set('service')}>
                      {t.services.map((s) => <option key={s}>{s}</option>)}
                    </select>
                  </div>
                </div>
                <div className="field">
                  <label htmlFor="c-msg">{t.message} ({t.required})</label>
                  <textarea id="c-msg" required rows={6} placeholder={t.messagePlaceholder} value={form.message} onChange={set('message')} />
                </div>
                <button type="submit" className="btn btn--primary btn--lg">{t.submit}</button>
              </form>
            )}
          </div>

          <aside className="office">
            <h2>{t.officeTitle}</h2>
            <ul>
              <li><MapPin size={20} aria-hidden="true" /><span>{SITE.address}</span></li>
              <li><Phone size={20} aria-hidden="true" /><a href={`tel:${SITE.phone.replace(/\s/g, '')}`} dir="ltr">{SITE.phone}</a></li>
              <li><Mail size={20} aria-hidden="true" /><a href={`mailto:${SITE.email}`}>{SITE.email}</a></li>
              <li><Clock size={20} aria-hidden="true" /><span>{SITE.hours}</span></li>
            </ul>
            <div className="office__links">
              <a className="tlink" href={SITE.supplierPortal} target="_blank" rel="noreferrer">{UI.footerSupplierPortal}</a>
              <a className="tlink" href={SITE.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}

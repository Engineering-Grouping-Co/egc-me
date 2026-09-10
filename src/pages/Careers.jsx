import { useState } from 'react';
import { MapPin, Wrench, Building2, TrendingUp, ShieldCheck, Briefcase, Mail } from 'lucide-react';
import FadeIn from '../components/FadeIn';
import PageHeader from '../components/PageHeader';
import { useContent } from '../content';

const CULTURE_ICONS = { wrench: Wrench, building: Building2, 'trending-up': TrendingUp, 'shield-check': ShieldCheck };
const CULTURE_COLORS = {
  wrench: { color: '#2563EB', bg: '#EFF6FF' },
  building: { color: '#D97706', bg: '#FFFBEB' },
  'trending-up': { color: '#10B981', bg: '#ECFDF5' },
  'shield-check': { color: '#475569', bg: '#F1F5F9' },
};

const DEPT_COLORS = {
  healthcare: { border: '#2563EB', light: '#EFF6FF', text: '#1E40AF', badge: '#DBEAFE' },
  manufacturing: { border: '#D97706', light: '#FFFBEB', text: '#92400E', badge: '#FDE68A' },
  software: { border: '#0D9488', light: '#F0FDFA', text: '#115E59', badge: '#99F6E4' },
  corporate: { border: '#475569', light: '#F1F5F9', text: '#1E293B', badge: '#CBD5E1' },
};

export default function Careers() {
  const { SITE, CAREERS, CAREER_FILTERS, CULTURE, COPY } = useContent();
  const t = COPY.careers;
  const [filter, setFilter] = useState('all');

  const filtered = filter === 'all' ? CAREERS : CAREERS.filter((c) => c.dept === filter);
  const deptLabel = (id) => CAREER_FILTERS.find((f) => f.id === id)?.label ?? id;

  const applyHref = (title) =>
    `mailto:${SITE.email}?subject=${encodeURIComponent(t.applyMailSubjectPrefix + title)}&body=${encodeURIComponent(t.applyMailBody + title)}`;
  const openAppHref = `mailto:${SITE.email}?subject=${encodeURIComponent(t.mailSubject)}&body=${encodeURIComponent(t.mailBody)}`;

  return (
    <>
      <PageHeader
        breadcrumb={[{ label: t.pageTitle }]}
        overline={t.pageOverline}
        title={t.pageTitle}
        subtitle={t.pageSubtitle}
        decorNum="02"
      />

      {/* CULTURE */}
      <section className="section">
        <div className="container">
          <FadeIn className="section-header">
            <p className="overline">{t.cultureOverline}</p>
            <h2 className="headline-lg">{t.cultureHeadline}</h2>
          </FadeIn>
          <div className="grid-4">
            {CULTURE.map((c, i) => {
              const Icon = CULTURE_ICONS[c.icon];
              const colors = CULTURE_COLORS[c.icon];
              return (
                <FadeIn delay={i + 1} key={c.title}>
                  <div className="card cu-card">
                    <div className="cu-icon" style={{ background: colors.bg, color: colors.color }}>
                      <Icon size={22} />
                    </div>
                    <h3 className="headline-sm" style={{ margin: '14px 0 8px' }}>{c.title}</h3>
                    <p className="body-sm" style={{ margin: 0 }}>{c.desc}</p>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      {/* POSITIONS */}
      <section className="section section-gray">
        <div className="container">
          <FadeIn className="section-header">
            <p className="overline">{t.positionsOverline}</p>
            <h2 className="headline-lg">{t.positionsHeadline}</h2>
          </FadeIn>

          <FadeIn className="chip-row" style={{ marginBottom: 32 }}>
            {CAREER_FILTERS.map((f) => (
              <button key={f.id} className={`chip${filter === f.id ? ' active' : ''}`} onClick={() => setFilter(f.id)}>
                {f.label}
              </button>
            ))}
          </FadeIn>

          <div className="grid-3">
            {filtered.map((c, i) => {
              const d = DEPT_COLORS[c.dept] ?? DEPT_COLORS.corporate;
              return (
                <FadeIn delay={(i % 3) + 1} key={c.title}>
                  <div className="card job-card" style={{ borderTopColor: d.border }}>
                    <span className="job-dept" style={{ background: d.light, color: d.text }}>{deptLabel(c.dept)}</span>
                    <h3 className="headline-sm" style={{ margin: '12px 0 8px' }}>{c.title}</h3>
                    <p className="body-sm" style={{ marginBottom: 14 }}>{c.desc}</p>
                    <div className="job-meta">
                      <span><MapPin size={12} /> {c.location}</span>
                      <span><Briefcase size={12} /> {c.type}</span>
                    </div>
                    <a href={applyHref(c.title)} className="btn btn-secondary btn-sm" style={{ marginTop: 16 }}>
                      {t.applyLabel}
                    </a>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      {/* OPEN APPLICATION */}
      <section className="section">
        <div className="container">
          <FadeIn className="cta-banner">
            <h2 className="headline-lg" style={{ marginBottom: 12 }}>{t.openAppTitle}</h2>
            <p className="section-sub" style={{ margin: '0 auto 28px' }}>{t.openAppSub}</p>
            <a href={openAppHref} className="btn btn-primary btn-lg">
              <Mail size={16} /> {t.openAppButton}
            </a>
          </FadeIn>
        </div>
      </section>

      <style>{`
        .cu-card { text-align: center; padding: 32px 24px; }
        .cu-icon { width: 50px; height: 50px; margin: 0 auto; border-radius: 12px; display: flex; align-items: center; justify-content: center; }

        .job-card { border-top: 3px solid var(--border); display: flex; flex-direction: column; }
        .job-dept { display: inline-block; font-size: 0.62rem; font-weight: 700; letter-spacing: 0.06em; text-transform: uppercase; padding: 3px 9px; border-radius: 999px; align-self: flex-start; }
        .job-meta { display: flex; gap: 14px; flex-wrap: wrap; font-size: 0.78rem; color: var(--muted); margin-top: auto; }
        .job-meta span { display: flex; align-items: center; gap: 5px; }
      `}</style>
    </>
  );
}

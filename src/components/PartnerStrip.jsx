import { useState } from 'react';
import { useLocale } from '../i18n/LocaleContext';
import { PARTNERS, PARTNER_STRIP_COPY } from '../content/partners';

function PartnerLogo({ partner }) {
  const [failed, setFailed] = useState(false);
  if (failed) {
    return <span className="partner-badge">{partner.name}</span>;
  }
  return (
    <img
      src={partner.logo}
      alt={partner.name}
      className="partner-logo"
      loading="lazy"
      onError={() => setFailed(true)}
    />
  );
}

export default function PartnerStrip() {
  const locale = useLocale();
  const copy = PARTNER_STRIP_COPY[locale];

  return (
    <div className="partner-strip">
      <div className="container">
        <div className="partner-strip-inner">
          <span className="partner-strip-label">{copy.label}</span>
          <div className="partner-logos">
            {PARTNERS.map((p) => (
              <PartnerLogo key={p.id} partner={p} />
            ))}
          </div>
        </div>
        <p className="partner-strip-note">{copy.note}</p>
      </div>

      <style>{`
        .partner-strip { background: #fff; border-bottom: 1px solid var(--border); padding: 28px 0; }
        .partner-strip-inner { display: flex; align-items: center; gap: 28px; flex-wrap: wrap; }
        .partner-strip-label {
          font-size: 0.68rem; font-weight: 700; letter-spacing: 0.1em;
          text-transform: uppercase; color: var(--muted); white-space: nowrap; flex-shrink: 0;
        }
        .partner-logos { display: flex; align-items: center; gap: 32px; flex-wrap: wrap; }
        .partner-logo { height: 26px; width: auto; object-fit: contain; opacity: 0.75; filter: grayscale(100%); transition: opacity 0.2s, filter 0.2s; }
        .partner-logo:hover { opacity: 1; filter: grayscale(0%); }
        .partner-badge {
          font-family: var(--font-display); font-size: 0.82rem; font-weight: 700;
          color: var(--muted); border: 1.5px solid var(--border); border-radius: 6px;
          padding: 5px 12px;
        }
        .partner-strip-note { font-size: 0.78rem; color: var(--muted); margin-top: 12px; line-height: 1.5; }
        @media (max-width: 700px) {
          .partner-strip-inner { flex-direction: column; align-items: flex-start; gap: 12px; }
        }
      `}</style>
    </div>
  );
}

import { Link } from 'react-router-dom';

/**
 * PageHeader — consistent inner-page header used across all non-home pages.
 *
 * Props:
 *   breadcrumb   [{label, to?}]   — breadcrumb items after "Home"
 *   overline     string           — small label above the title
 *   title        string | node    — main page heading (rendered as h1)
 *   subtitle     string           — supporting paragraph
 *   decorNum     string           — large decorative numeral, e.g. "01"
 *   accentColor  string           — top border color (default: var(--blue))
 */
export default function PageHeader({
  breadcrumb = [],
  overline,
  title,
  subtitle,
  decorNum,
  accentColor,
}) {
  const borderColor = accentColor || 'var(--blue)';
  return (
    <div className="pg-hdr" style={{ '--accent': borderColor }}>
      <div className="container">
        {/* Breadcrumb */}
        <nav className="pg-hdr-crumb" aria-label="breadcrumb">
          <Link to="/">Home</Link>
          {breadcrumb.map((b, i) => (
            <span key={i} className="pg-hdr-crumb-item">
              <span className="pg-hdr-crumb-sep" aria-hidden="true">/</span>
              {b.to
                ? <Link to={b.to}>{b.label}</Link>
                : <span>{b.label}</span>}
            </span>
          ))}
        </nav>

        {/* Body */}
        <div className="pg-hdr-body">
          <div className="pg-hdr-left">
            {overline && <p className="pg-hdr-overline">{overline}</p>}
            <h1 className="pg-hdr-title">{title}</h1>
            {subtitle && <p className="pg-hdr-sub">{subtitle}</p>}
          </div>
          {decorNum && (
            <div className="pg-hdr-decor" aria-hidden="true">{decorNum}</div>
          )}
        </div>
      </div>

      <style>{`
        .pg-hdr {
          background: #FAFAFA;
          border-top: 3px solid var(--accent, var(--blue));
          border-bottom: 1px solid var(--border);
          padding: 40px 0 38px;
        }
        .pg-hdr-crumb {
          display: flex; align-items: center; gap: 5px;
          font-size: 0.75rem; color: var(--muted);
          margin-bottom: 22px; flex-wrap: wrap;
        }
        .pg-hdr-crumb a { color: var(--blue); font-weight: 500; }
        .pg-hdr-crumb a:hover { text-decoration: underline; }
        .pg-hdr-crumb-item { display: flex; align-items: center; gap: 5px; }
        .pg-hdr-crumb-sep { opacity: 0.35; }
        .pg-hdr-body {
          display: flex; justify-content: space-between; align-items: flex-end;
          gap: 24px;
        }
        .pg-hdr-left { flex: 1; min-width: 0; }
        .pg-hdr-overline {
          font-size: 0.68rem; font-weight: 700; letter-spacing: 0.14em;
          text-transform: uppercase; color: var(--accent, var(--blue));
          margin: 0 0 10px;
        }
        .pg-hdr-title {
          font-family: var(--font-display);
          font-size: clamp(1.9rem, 4vw, 2.8rem);
          font-weight: 800; line-height: 1.07;
          color: var(--dark); letter-spacing: -0.025em;
          margin: 0 0 14px;
        }
        .pg-hdr-sub {
          font-size: 1rem; color: var(--muted);
          line-height: 1.68; max-width: 580px; margin: 0;
        }
        .pg-hdr-decor {
          font-family: var(--font-display);
          font-size: clamp(5rem, 10vw, 8rem);
          font-weight: 900; line-height: 1;
          color: var(--border);
          letter-spacing: -0.06em;
          flex-shrink: 0;
          user-select: none;
          padding-left: 20px;
          /* Shift down to align baseline with title */
          transform: translateY(8px);
        }
        @media (max-width: 768px) {
          .pg-hdr { padding: 30px 0 28px; }
          .pg-hdr-decor { display: none; }
          .pg-hdr-title { margin-bottom: 10px; }
        }
      `}</style>
    </div>
  );
}

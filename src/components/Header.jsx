import { useState, useEffect, useRef } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { useLocale } from '../i18n/LocaleContext';
import { useContent } from '../content';
import { NAV_STRUCTURE } from '../content/nav';
import LocaleSwitcher from './LocaleSwitcher';

export default function Header() {
  const locale = useLocale();
  const { SITE, UI } = useContent();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [sectorsOpen, setSectorsOpen] = useState(false);
  const sectorsRef = useRef(null);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);

  useEffect(() => {
    const onClick = (e) => {
      if (sectorsRef.current && !sectorsRef.current.contains(e.target)) setSectorsOpen(false);
    };
    document.addEventListener('mousedown', onClick);
    return () => document.removeEventListener('mousedown', onClick);
  }, []);

  const to = (segment) => `/${locale}/${segment || ''}`;

  return (
    <header className={`site-header${scrolled ? ' scrolled' : ''}`}>
      <nav className="main-nav">
        <div className="nav-inner">
          <Link to={to('')} className="nav-logo">
            <img
              src="/logo.png"
              alt={SITE.name}
              className="logo-img"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'flex';
              }}
            />
            <div className="logo-text-fallback" style={{ display: 'none', flexDirection: 'column', gap: '2px' }}>
              <span className="logo-egc">{SITE.shortName}</span>
              <span className="logo-tagline">{SITE.name}</span>
            </div>
          </Link>

          <ul className="nav-links">
            {NAV_STRUCTURE.map((item) => {
              if (item.children) {
                return (
                  <li key={item.key} className="nav-item-dropdown" ref={sectorsRef}>
                    <button
                      type="button"
                      className={`nav-link nav-dropdown-trigger${sectorsOpen ? ' active' : ''}`}
                      onClick={() => setSectorsOpen((v) => !v)}
                      aria-expanded={sectorsOpen}
                    >
                      {UI.sectors} <ChevronDown size={13} className={`nav-chevron${sectorsOpen ? ' open' : ''}`} />
                    </button>
                    {sectorsOpen && (
                      <div className="nav-dropdown-panel">
                        {item.children.map((c) => (
                          <NavLink
                            key={c.key}
                            to={to(c.segment)}
                            className="nav-dropdown-item"
                            onClick={() => setSectorsOpen(false)}
                          >
                            <span className="nav-dropdown-item-label">{UI[c.labelKey]}</span>
                            <span className="nav-dropdown-item-tag">{UI[c.tagKey]}</span>
                          </NavLink>
                        ))}
                      </div>
                    )}
                  </li>
                );
              }
              return (
                <li key={item.key}>
                  <NavLink
                    to={to(item.segment)}
                    end={item.segment === ''}
                    className={({ isActive }) => (item.cta ? 'nav-cta' : isActive ? 'nav-link active' : 'nav-link')}
                  >
                    {item.key === 'about' && UI.footerAbout}
                    {item.key === 'projects' && UI.footerProjects}
                    {item.key === 'careers' && UI.footerCareers}
                    {item.key === 'suppliers' && UI.footerSuppliers}
                    {item.key === 'contact' && UI.contactUs}
                  </NavLink>
                </li>
              );
            })}
          </ul>

          <div className="nav-right">
            <LocaleSwitcher className="nav-locale" />
            <button
              className="nav-toggle"
              aria-label={mobileOpen ? UI.menuClose : UI.menuOpen}
              onClick={() => setMobileOpen((v) => !v)}
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </nav>

      {mobileOpen && (
        <div className="nav-mobile">
          <NavLink to={to('about')} end className="nav-mobile-link" onClick={() => setMobileOpen(false)}>
            {UI.footerAbout}
          </NavLink>

          <div className="nav-mobile-group-label">{UI.sectors}</div>
          {NAV_STRUCTURE.find((i) => i.key === 'sectors').children.map((c) => (
            <NavLink
              key={c.key}
              to={to(c.segment)}
              className="nav-mobile-link nav-mobile-sub"
              onClick={() => setMobileOpen(false)}
            >
              {UI[c.labelKey]}
            </NavLink>
          ))}

          <NavLink to={to('projects')} className="nav-mobile-link" onClick={() => setMobileOpen(false)}>
            {UI.footerProjects}
          </NavLink>
          <NavLink to={to('careers')} className="nav-mobile-link" onClick={() => setMobileOpen(false)}>
            {UI.footerCareers}
          </NavLink>
          <NavLink to={to('suppliers')} className="nav-mobile-link" onClick={() => setMobileOpen(false)}>
            {UI.footerSuppliers}
          </NavLink>
          <NavLink to={to('contact')} className="nav-mobile-link nav-mobile-cta" onClick={() => setMobileOpen(false)}>
            {UI.contactUs}
          </NavLink>
        </div>
      )}

      <style>{`
        .site-header {
          position: sticky; top: 0; z-index: 100;
          background: #ffffff;
          transition: box-shadow 0.25s;
        }
        .site-header.scrolled {
          box-shadow: 0 2px 20px rgba(0,0,0,0.08);
        }
        .main-nav {
          border-bottom: 1px solid var(--border);
          background: #ffffff;
        }
        .nav-inner {
          max-width: var(--container);
          margin: 0 auto; padding: 0 28px;
          height: 52px;
          display: flex; align-items: center;
          justify-content: space-between; gap: 24px;
        }
        .nav-logo {
          display: flex; flex-direction: column; gap: 2px;
          text-decoration: none; flex-shrink: 0;
        }
        .logo-img {
          height: 28px; width: auto; object-fit: contain;
        }
        .logo-egc {
          font-family: var(--font-display);
          font-size: 1.35rem; font-weight: 800;
          color: var(--blue); letter-spacing: 0.04em; line-height: 1;
        }
        .logo-tagline {
          font-family: var(--font-body);
          font-size: 0.38rem; font-weight: 700;
          letter-spacing: 0.15em; color: var(--muted);
          text-transform: uppercase; line-height: 1;
        }
        .nav-links {
          display: flex; align-items: center; gap: 4px;
          list-style: none; margin: 0; padding: 0;
        }
        .nav-link {
          display: flex; align-items: center; gap: 4px; padding: 6px 12px;
          font-size: 0.9rem; font-weight: 500;
          color: var(--body); transition: color 0.15s;
          position: relative; text-decoration: none;
          border-radius: 6px; background: none; border: none; cursor: pointer;
          font-family: inherit;
        }
        .nav-link::after {
          content: ''; position: absolute;
          bottom: -1px; left: 12px; right: 12px;
          height: 2px; background: var(--blue);
          border-radius: 2px;
          transform: scaleX(0); transition: transform 0.2s;
        }
        .nav-link:hover { color: var(--blue); background: var(--blue-light); }
        .nav-link.active { color: var(--blue); }
        .nav-link.active::after { transform: scaleX(1); }
        .nav-chevron { transition: transform 0.18s ease; }
        .nav-chevron.open { transform: rotate(180deg); }

        .nav-item-dropdown { position: relative; }
        .nav-dropdown-panel {
          position: absolute; top: calc(100% + 10px); left: 0;
          background: #fff; border: 1.5px solid var(--border);
          border-radius: var(--radius-lg); box-shadow: 0 16px 40px rgba(0,0,0,0.1);
          padding: 8px; display: flex; flex-direction: column; gap: 2px;
          min-width: 280px; z-index: 50;
        }
        .nav-dropdown-item {
          display: flex; flex-direction: column; gap: 2px;
          padding: 10px 14px; border-radius: 8px; text-decoration: none;
          transition: background 0.15s;
        }
        .nav-dropdown-item:hover { background: var(--blue-light); }
        .nav-dropdown-item-label { font-size: 0.9rem; font-weight: 600; color: var(--dark); }
        .nav-dropdown-item-tag { font-size: 0.74rem; color: var(--muted); }

        .nav-cta {
          background: var(--blue); color: #fff;
          padding: 7px 16px; border-radius: 6px; font-size: 0.88rem;
          font-weight: 600; transition: background 0.2s, transform 0.15s;
          text-decoration: none;
        }
        .nav-cta:hover { background: var(--blue-dark); transform: translateY(-1px); color: #fff; }

        .nav-right { display: flex; align-items: center; gap: 10px; }
        .locale-switch {
          font-size: 0.8rem; font-weight: 700; color: var(--body);
          border: 1.5px solid var(--border); border-radius: 6px;
          padding: 6px 12px; background: #fff; transition: all 0.15s;
        }
        .locale-switch:hover { border-color: var(--blue); color: var(--blue); background: var(--blue-light); }

        .nav-toggle {
          display: none; color: var(--dark);
          padding: 7px; border-radius: 6px;
        }
        .nav-toggle:hover { background: var(--gray-bg); }
        .nav-mobile {
          display: flex; flex-direction: column;
          border-bottom: 1px solid var(--border);
          background: #ffffff;
          padding: 6px 20px 16px;
        }
        .nav-mobile-link {
          padding: 13px 4px; font-weight: 500; font-size: 0.95rem;
          border-bottom: 1px solid var(--border); color: var(--dark);
          display: flex; align-items: center;
          text-decoration: none; transition: color 0.15s;
        }
        .nav-mobile-link:last-child { border-bottom: none; }
        .nav-mobile-link.active, .nav-mobile-link:hover { color: var(--blue); }
        .nav-mobile-cta { color: var(--blue); font-weight: 700; }
        .nav-mobile-group-label {
          padding: 13px 4px 2px; font-size: 0.68rem; font-weight: 700;
          letter-spacing: 0.08em; text-transform: uppercase; color: var(--muted);
        }
        .nav-mobile-sub { padding-inline-start: 16px; font-size: 0.9rem; }
        @media (max-width: 900px) {
          .nav-links { display: none; }
          .nav-toggle { display: flex; }
        }

        [dir="rtl"] .nav-dropdown-panel { left: auto; right: 0; }
        [dir="rtl"] .nav-link::after { left: 12px; right: 12px; }
      `}</style>
    </header>
  );
}

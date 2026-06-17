import { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X, Phone, Mail, ArrowUpRight } from 'lucide-react';
import { NAV_LINKS, SITE } from '../data';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);

  // Close mobile menu on route change
  useEffect(() => { setMobileOpen(false); }, []);

  return (
    <header className={`site-header${scrolled ? ' scrolled' : ''}`}>
      {/* Top utility bar */}
      <div className="top-bar">
        <div className="top-bar-inner">
          <div className="top-bar-left">
            <a href={`tel:${SITE.phone.replace(/\s/g, '')}`} className="top-bar-link">
              <Phone size={12} strokeWidth={2.5} /> {SITE.phone}
            </a>
            <a href={`mailto:${SITE.email}`} className="top-bar-link">
              <Mail size={12} strokeWidth={2.5} /> {SITE.email}
            </a>
          </div>
          <div className="top-bar-right">
            <a
              href={SITE.supplierPortal}
              target="_blank"
              rel="noreferrer"
              className="top-bar-portal"
            >
              Supplier Portal <ArrowUpRight size={11} />
            </a>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <nav className="main-nav">
        <div className="nav-inner">
          <Link to="/" className="nav-logo">
            <span className="logo-egc">EGC</span>
            <span className="logo-tagline">ENGINEERING GROUPING CO.</span>
          </Link>

          <ul className="nav-links">
            {NAV_LINKS.map((l) => (
              <li key={l.href}>
                <NavLink
                  to={l.href}
                  end={l.href === '/'}
                  className={({ isActive }) =>
                    l.cta
                      ? 'nav-cta'
                      : isActive
                      ? 'nav-link active'
                      : 'nav-link'
                  }
                >
                  {l.label}
                </NavLink>
              </li>
            ))}
          </ul>

          <button
            className="nav-toggle"
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            onClick={() => setMobileOpen((v) => !v)}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile panel */}
      {mobileOpen && (
        <div className="nav-mobile">
          {NAV_LINKS.map((l) => (
            <NavLink
              key={l.href}
              to={l.href}
              end={l.href === '/'}
              className={({ isActive }) =>
                `nav-mobile-link${l.cta ? ' nav-mobile-cta' : ''}${isActive ? ' active' : ''}`
              }
              onClick={() => setMobileOpen(false)}
            >
              {l.label}
            </NavLink>
          ))}
          <a
            href={SITE.supplierPortal}
            target="_blank"
            rel="noreferrer"
            className="nav-mobile-link nav-mobile-portal"
            onClick={() => setMobileOpen(false)}
          >
            Supplier Portal <ArrowUpRight size={13} />
          </a>
        </div>
      )}

      <style>{`
        .site-header {
          position: sticky; top: 0; z-index: 100;
          background: var(--white);
          transition: box-shadow 0.25s;
        }
        .site-header.scrolled { box-shadow: 0 2px 20px rgba(0,0,0,0.09); }

        /* Top bar */
        .top-bar {
          background: var(--blue-light);
          border-bottom: 1px solid var(--blue-mid);
          padding: 7px 0;
          font-size: 0.77rem;
        }
        .top-bar-inner {
          max-width: var(--container);
          margin: 0 auto; padding: 0 24px;
          display: flex; justify-content: space-between; align-items: center; gap: 16px;
        }
        .top-bar-left { display: flex; align-items: center; gap: 20px; }
        .top-bar-right { display: flex; align-items: center; gap: 16px; }
        .top-bar-link {
          display: inline-flex; align-items: center; gap: 5px;
          color: #1E3A8A; font-weight: 500; transition: color 0.15s;
        }
        .top-bar-link:hover { color: var(--blue); }
        .top-bar-portal {
          display: inline-flex; align-items: center; gap: 4px;
          font-size: 0.74rem; font-weight: 700; letter-spacing: 0.06em;
          color: var(--blue); text-transform: uppercase;
          padding: 3px 10px; border: 1px solid var(--blue-mid);
          border-radius: 999px; transition: background 0.15s;
        }
        .top-bar-portal:hover { background: var(--blue-light); }

        /* Main nav */
        .main-nav {
          border-bottom: 1px solid var(--border);
          background: var(--white);
        }
        .nav-inner {
          max-width: var(--container);
          margin: 0 auto; padding: 16px 24px;
          display: flex; align-items: center;
          justify-content: space-between; gap: 24px;
        }
        .nav-logo { display: flex; flex-direction: column; gap: 1px; text-decoration: none; }
        .logo-egc {
          font-family: var(--font-display);
          font-size: 1.7rem; font-weight: 800;
          color: var(--blue); letter-spacing: 0.04em;
          line-height: 1;
        }
        .logo-tagline {
          font-family: var(--font-body);
          font-size: 0.48rem; font-weight: 700;
          letter-spacing: 0.14em; color: var(--muted);
          text-transform: uppercase; line-height: 1;
        }

        /* Nav links */
        .nav-links {
          display: flex; align-items: center; gap: 30px;
          list-style: none; margin: 0; padding: 0;
        }
        .nav-link {
          font-size: 0.9rem; font-weight: 500;
          color: var(--body); transition: color 0.15s;
          position: relative; padding-bottom: 2px;
          text-decoration: none;
        }
        .nav-link::after {
          content: ''; position: absolute; bottom: -2px; left: 0;
          width: 0; height: 2px; background: var(--blue);
          border-radius: 2px; transition: width 0.2s;
        }
        .nav-link:hover, .nav-link.active { color: var(--blue); }
        .nav-link.active::after, .nav-link:hover::after { width: 100%; }
        .nav-cta {
          background: var(--blue); color: var(--white) !important;
          padding: 9px 18px; border-radius: 6px; font-size: 0.88rem;
          font-weight: 600; transition: background 0.2s, transform 0.15s;
          text-decoration: none;
        }
        .nav-cta:hover { background: var(--blue-dark); transform: translateY(-1px); }

        /* Toggle */
        .nav-toggle {
          display: none; color: var(--dark);
          padding: 6px; border-radius: 6px;
        }
        .nav-toggle:hover { background: var(--gray-bg); }

        /* Mobile nav */
        .nav-mobile {
          display: flex; flex-direction: column;
          border-bottom: 1px solid var(--border);
          background: var(--white);
          padding: 8px 24px 20px;
        }
        .nav-mobile-link {
          padding: 13px 0; font-weight: 500; font-size: 0.95rem;
          border-bottom: 1px solid var(--border); color: var(--dark);
          display: flex; align-items: center; gap: 6px;
          text-decoration: none; transition: color 0.15s;
        }
        .nav-mobile-link:last-child { border-bottom: none; }
        .nav-mobile-link.active { color: var(--blue); font-weight: 600; }
        .nav-mobile-cta { color: var(--blue); font-weight: 700; }
        .nav-mobile-portal { color: var(--blue); font-weight: 700; }

        @media (max-width: 900px) {
          .nav-links { display: none; }
          .nav-toggle { display: flex; }
        }
        @media (max-width: 560px) {
          .top-bar-left { display: none; }
        }
      `}</style>
    </header>
  );
}

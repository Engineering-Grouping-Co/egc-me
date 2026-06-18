import { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { NAV_LINKS } from '../data';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);

  return (
    <header className={`site-header${scrolled ? ' scrolled' : ''}`}>
      <nav className="main-nav">
        <div className="nav-inner">
          <Link to="/" className="nav-logo">
            <img 
              src="/logo.png" 
              alt="EGC Logo" 
              className="logo-img" 
              onError={(e) => { 
                e.target.style.display = 'none'; 
                e.target.nextSibling.style.display = 'flex'; 
              }} 
            />
            <div className="logo-text-fallback" style={{ display: 'none', flexDirection: 'column', gap: '2px' }}>
              <span className="logo-egc">EGC</span>
              <span className="logo-tagline">ENGINEERING GROUPING CO.</span>
            </div>
          </Link>

          <ul className="nav-links">
            {NAV_LINKS.map((l) => (
              <li key={l.href}>
                <NavLink
                  to={l.href}
                  end={l.href === '/'}
                  className={({ isActive }) =>
                    l.cta ? 'nav-cta' : isActive ? 'nav-link active' : 'nav-link'
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
          height: 68px;
          display: flex; align-items: center;
          justify-content: space-between; gap: 24px;
        }
        .nav-logo {
          display: flex; flex-direction: column; gap: 2px;
          text-decoration: none; flex-shrink: 0;
        }
        .logo-img {
          height: 38px; width: auto; object-fit: contain;
        }
        .logo-egc {
          font-family: var(--font-display);
          font-size: 1.65rem; font-weight: 800;
          color: var(--blue); letter-spacing: 0.04em; line-height: 1;
        }
        .logo-tagline {
          font-family: var(--font-body);
          font-size: 0.46rem; font-weight: 700;
          letter-spacing: 0.15em; color: var(--muted);
          text-transform: uppercase; line-height: 1;
        }
        .nav-links {
          display: flex; align-items: center; gap: 4px;
          list-style: none; margin: 0; padding: 0;
        }
        .nav-link {
          display: block; padding: 6px 12px;
          font-size: 0.9rem; font-weight: 500;
          color: var(--body); transition: color 0.15s;
          position: relative; text-decoration: none;
          border-radius: 6px;
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
        .nav-cta {
          background: var(--blue); color: #fff;
          padding: 9px 20px; border-radius: 6px; font-size: 0.88rem;
          font-weight: 600; transition: background 0.2s, transform 0.15s;
          text-decoration: none;
        }
        .nav-cta:hover { background: var(--blue-dark); transform: translateY(-1px); color: #fff; }
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
        @media (max-width: 900px) {
          .nav-links { display: none; }
          .nav-toggle { display: flex; }
        }
      `}</style>
    </header>
  );
}

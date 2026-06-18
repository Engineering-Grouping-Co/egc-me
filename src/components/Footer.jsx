import { Link } from 'react-router-dom';
import { SITE } from '../data';

const SUPPLIER_PORTAL_URL = SITE.supplierPortal;

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">

          {/* Brand */}
          <div className="footer-brand">
            <Link to="/" className="footer-logo">
              <img 
                src="/logo.png" 
                alt="EGC Logo" 
                className="footer-logo-img" 
                onError={(e) => { 
                  e.target.style.display = 'none'; 
                  e.target.nextSibling.style.display = 'flex'; 
                }} 
              />
              <div className="footer-logo-fallback" style={{ display: 'none', flexDirection: 'column', gap: '3px' }}>
                <span className="footer-logo-egc">EGC</span>
                <span className="footer-logo-sub">ENGINEERING GROUPING CO.</span>
              </div>
            </Link>
            <p className="footer-tagline">
              [Street], [District]<br />
              Riyadh, Kingdom of Saudi Arabia
            </p>
          </div>

          {/* Company */}
          <div className="footer-col">
            <h5>Company</h5>
            <Link to="/about">About Us</Link>
            <Link to="/divisions">Divisions</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/about">Team</Link>
          </div>

          {/* Work With Us */}
          <div className="footer-col">
            <h5>Work With Us</h5>
            <Link to="/careers">Careers</Link>
            <Link to="/suppliers">Suppliers</Link>
            <Link to="/contact">Contact Us</Link>
          </div>

          {/* Contact */}
          <div className="footer-col">
            <h5>Contact</h5>
            <a href="tel:+966110000000">{SITE.phone}</a>
            <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
            <a href={SUPPLIER_PORTAL_URL} target="_blank" rel="noreferrer" className="footer-linkedin-link">
              Supplier Portal Login
            </a>
            <a
              href={SITE.linkedin}
              target="_blank"
              rel="noreferrer"
              className="footer-linkedin"
              aria-label="EGC on LinkedIn"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.91 1.64-1.86 3.37-1.86 3.61 0 4.28 2.38 4.28 5.47v6.28ZM5.32 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.1 20.45H3.54V9H7.1v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0Z" />
              </svg>
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            © {year} Engineering Grouping Co. (EGC). All rights reserved.
            &nbsp;·&nbsp;
            <Link to="/privacy-policy">Privacy Policy</Link>
            &nbsp;·&nbsp;
            <Link to="/terms">Terms &amp; Conditions</Link>
          </p>
          <p>CR No. {SITE.cr}</p>
        </div>
      </div>

      <style>{`
        .footer {
          background: #0F172A;
          color: rgba(255,255,255,0.55);
          padding-top: 72px;
          font-family: 'Inter', sans-serif;
        }
        .footer-container {
          max-width: 1160px;
          margin: 0 auto;
          padding: 0 28px;
        }
        .footer-grid {
          display: grid;
          grid-template-columns: 1.4fr 0.8fr 0.8fr 0.8fr;
          gap: 48px;
          padding-bottom: 56px;
        }
        .footer-brand {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
        .footer-logo {
          display: flex;
          flex-direction: column;
          gap: 3px;
          width: fit-content;
          text-decoration: none;
        }
        .footer-logo-img {
          height: 48px; width: auto; object-fit: contain;
        }
        .footer-logo-egc {
          font-family: 'DM Sans', sans-serif;
          font-size: 2rem;
          font-weight: 800;
          color: #ffffff;
          letter-spacing: 0.04em;
          line-height: 1;
        }
        .footer-logo-sub {
          font-size: 0.46rem;
          font-weight: 700;
          letter-spacing: 0.14em;
          color: rgba(255,255,255,0.35);
          text-transform: uppercase;
          line-height: 1;
        }
        .footer-tagline {
          font-size: 0.86rem;
          color: rgba(255,255,255,0.4);
          line-height: 1.6;
          margin: 0;
        }
        .footer-col {
          display: flex;
          flex-direction: column;
          gap: 10px;
          padding-top: 4px;
        }
        .footer-col h5 {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.72rem;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.9);
          margin-bottom: 4px;
        }
        .footer-col a {
          font-size: 0.88rem;
          color: rgba(255,255,255,0.5);
          transition: color 0.15s;
          text-decoration: none;
        }
        .footer-col a:hover { color: rgba(255,255,255,0.9); }
        .footer-linkedin {
          display: inline-flex;
          width: 34px;
          height: 34px;
          align-items: center;
          justify-content: center;
          background: rgba(255,255,255,0.07);
          border: 1px solid rgba(255,255,255,0.15);
          border-radius: 8px;
          color: rgba(255,255,255,0.55);
          transition: background 0.2s, border-color 0.2s, color 0.2s;
          margin-top: 4px;
        }
        .footer-linkedin svg { width: 15px; height: 15px; }
        .footer-linkedin:hover {
          background: #2563EB;
          border-color: #2563EB;
          color: #ffffff;
        }
        .footer-bottom {
          border-top: 1px solid rgba(255,255,255,0.08);
          padding: 22px 0 32px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 16px;
          flex-wrap: wrap;
          font-size: 0.78rem;
          color: rgba(255,255,255,0.28);
        }
        .footer-bottom p { margin: 0; }
        .footer-bottom a {
          color: rgba(255,255,255,0.45);
          text-decoration: underline;
          transition: color 0.15s;
        }
        .footer-bottom a:hover { color: rgba(255,255,255,0.85); }

        @media (max-width: 860px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr;
            gap: 36px;
            padding-bottom: 44px;
          }
          .footer-brand { grid-column: span 2; }
        }
        @media (max-width: 520px) {
          .footer-grid { grid-template-columns: 1fr; }
          .footer-brand { grid-column: span 1; }
          .footer-bottom { flex-direction: column; align-items: flex-start; gap: 10px; }
        }
      `}</style>
    </footer>
  );
}

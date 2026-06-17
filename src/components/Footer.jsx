import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin } from 'lucide-react';
import { SITE } from '../data';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          {/* Brand */}
          <div className="footer-brand">
            <Link to="/" className="footer-logo">
              <span className="footer-logo-egc">EGC</span>
              <span className="footer-logo-sub">ENGINEERING GROUPING CO.</span>
            </Link>
            <p className="footer-tagline">
              Specialty contracting &amp; manufacturing<br />
              Riyadh, Kingdom of Saudi Arabia
            </p>
          </div>

          {/* Company */}
          <div className="footer-col">
            <h5>Company</h5>
            <Link to="/about">About Us</Link>
            <Link to="/divisions">Divisions</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/about#team">Team</Link>
          </div>

          {/* Work With Us */}
          <div className="footer-col">
            <h5>Work With Us</h5>
            <Link to="/careers">Careers</Link>
            <Link to="/suppliers">Supplier Registration</Link>
            <Link to="/contact">Contact Us</Link>
          </div>

          {/* Contact */}
          <div className="footer-col">
            <h5>Contact</h5>
            <a href={`tel:${SITE.phone.replace(/\s/g, '')}`}
              className="footer-contact-link">
              <Phone size={13} /> {SITE.phone}
            </a>
            <a href={`mailto:${SITE.email}`} className="footer-contact-link">
              <Mail size={13} /> {SITE.email}
            </a>
            <span className="footer-contact-link">
              <MapPin size={13} /> {SITE.address}
            </span>
            <div style={{ marginTop: '12px' }}>
              <a
                href={SITE.linkedin}
                target="_blank"
                rel="noreferrer"
                className="footer-linkedin"
                aria-label="LinkedIn"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.91 1.64-1.86 3.37-1.86 3.61 0 4.28 2.38 4.28 5.47v6.28ZM5.32 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.1 20.45H3.54V9H7.1v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0Z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="footer-bottom">
          <p>
            &copy; {year} Engineering Grouping Co. (EGC). All rights reserved.
            &nbsp;&middot;&nbsp;
            <Link to="/privacy-policy">Privacy Policy</Link>
            &nbsp;&middot;&nbsp;
            <Link to="/terms">Terms &amp; Conditions</Link>
          </p>
          <p className="footer-cr">CR No. {SITE.cr}</p>
        </div>
      </div>

      <style>{`
        .footer {
          background: #0F172A;
          color: rgba(255,255,255,0.55);
          padding-top: 72px;
          font-family: var(--font-body);
        }
        .footer-grid {
          display: grid;
          grid-template-columns: 1.5fr repeat(3, 0.75fr);
          gap: 48px;
          padding-bottom: 56px;
        }
        .footer-brand { display: flex; flex-direction: column; gap: 14px; }
        .footer-logo { display: flex; flex-direction: column; gap: 2px; text-decoration: none; }
        .footer-logo-egc {
          font-family: var(--font-display);
          font-size: 1.6rem; font-weight: 800;
          color: var(--white); letter-spacing: 0.04em; line-height: 1;
        }
        .footer-logo-sub {
          font-family: var(--font-body);
          font-size: 0.46rem; font-weight: 700;
          letter-spacing: 0.14em; color: rgba(255,255,255,0.4);
          text-transform: uppercase;
        }
        .footer-tagline {
          font-size: 0.84rem; color: rgba(255,255,255,0.4);
          line-height: 1.6; margin: 0;
        }

        .footer-col { display: flex; flex-direction: column; gap: 10px; }
        .footer-col h5 {
          font-family: var(--font-display);
          font-size: 0.72rem; font-weight: 700;
          letter-spacing: 0.1em; text-transform: uppercase;
          color: var(--white); margin-bottom: 4px;
        }
        .footer-col a {
          font-size: 0.87rem; color: rgba(255,255,255,0.55);
          transition: color 0.15s; text-decoration: none;
        }
        .footer-col a:hover { color: var(--white); }
        .footer-contact-link {
          display: flex; align-items: flex-start; gap: 8px;
          font-size: 0.84rem; color: rgba(255,255,255,0.5);
          line-height: 1.5;
        }
        .footer-contact-link svg { flex-shrink: 0; margin-top: 2px; color: rgba(255,255,255,0.35); }

        .footer-linkedin {
          display: inline-flex; width: 36px; height: 36px;
          align-items: center; justify-content: center;
          background: rgba(255,255,255,0.07);
          border: 1px solid rgba(255,255,255,0.15);
          border-radius: 8px; color: rgba(255,255,255,0.6);
          transition: background 0.2s, color 0.2s;
        }
        .footer-linkedin svg { width: 16px; height: 16px; }
        .footer-linkedin:hover { background: var(--blue); color: var(--white); border-color: var(--blue); }

        .footer-bottom {
          border-top: 1px solid rgba(255,255,255,0.08);
          padding: 22px 0 32px;
          display: flex; justify-content: space-between; align-items: center;
          gap: 16px; flex-wrap: wrap;
          font-size: 0.78rem; color: rgba(255,255,255,0.3);
        }
        .footer-bottom a {
          color: rgba(255,255,255,0.45); text-decoration: underline;
          transition: color 0.15s;
        }
        .footer-bottom a:hover { color: var(--white); }
        .footer-cr { font-size: 0.75rem; }

        @media (max-width: 860px) {
          .footer-grid { grid-template-columns: 1fr 1fr; gap: 36px; }
          .footer-brand { grid-column: span 2; }
        }
        @media (max-width: 500px) {
          .footer-grid { grid-template-columns: 1fr; }
          .footer-brand { grid-column: span 1; }
          .footer-bottom { flex-direction: column; text-align: center; }
        }
      `}</style>
    </footer>
  );
}

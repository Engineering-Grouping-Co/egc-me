import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin } from 'lucide-react';
import { SITE, NAV_LINKS } from '../data';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer style={{ background: '#0F172A', color: 'rgba(255,255,255,0.55)', fontFamily: 'Inter, sans-serif' }}>
      <div style={{ maxWidth: '1160px', margin: '0 auto', padding: '0 28px' }}>

        {/* Main grid */}
        <div className="ft-grid">
          {/* Brand column */}
          <div className="ft-brand">
            <Link to="/" className="ft-logo-wrap">
              <span className="ft-logo-name">EGC</span>
              <span className="ft-logo-sub">ENGINEERING GROUPING CO.</span>
            </Link>
            <p className="ft-tagline">
              Specialty contracting &amp; in-house manufacturing.<br />
              Riyadh, Kingdom of Saudi Arabia.
            </p>
            <div className="ft-contact-list">
              <a href={`tel:${SITE.phone.replace(/\s/g,'')}`} className="ft-contact-row">
                <Phone size={13} /> <span>{SITE.phone}</span>
              </a>
              <a href={`mailto:${SITE.email}`} className="ft-contact-row">
                <Mail size={13} /> <span>{SITE.email}</span>
              </a>
              <span className="ft-contact-row">
                <MapPin size={13} /> <span>{SITE.address}</span>
              </span>
            </div>
            {/* LinkedIn */}
            <a href={SITE.linkedin} target="_blank" rel="noreferrer" aria-label="EGC on LinkedIn" className="ft-li">
              <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.91 1.64-1.86 3.37-1.86 3.61 0 4.28 2.38 4.28 5.47v6.28ZM5.32 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.1 20.45H3.54V9H7.1v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0Z" />
              </svg>
            </a>
          </div>

          {/* Company links */}
          <div className="ft-col">
            <h5 className="ft-col-title">Company</h5>
            <Link to="/about"     className="ft-link">About Us</Link>
            <Link to="/divisions" className="ft-link">Our Divisions</Link>
            <Link to="/projects"  className="ft-link">Projects</Link>
            <Link to="/about"     className="ft-link">The Team</Link>
          </div>

          {/* Work with us */}
          <div className="ft-col">
            <h5 className="ft-col-title">Work With Us</h5>
            <Link to="/careers"   className="ft-link">Careers</Link>
            <Link to="/suppliers" className="ft-link">Supplier Registration</Link>
            <a href={SITE.supplierPortal} target="_blank" rel="noreferrer" className="ft-link">Supplier Portal ↗</a>
            <Link to="/contact"   className="ft-link">Contact Us</Link>
          </div>

          {/* Divisions */}
          <div className="ft-col">
            <h5 className="ft-col-title">Divisions</h5>
            <Link to="/divisions#steel"      className="ft-link">Steel</Link>
            <Link to="/divisions#wood"       className="ft-link">Wood</Link>
            <Link to="/divisions#leadsheet"  className="ft-link">Lead Sheet</Link>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="ft-bottom">
          <p style={{ margin: 0 }}>
            &copy; {year} Engineering Grouping Co. (EGC). All rights reserved.
            &nbsp;&middot;&nbsp;
            <Link to="/privacy-policy" className="ft-legal-link">Privacy Policy</Link>
            &nbsp;&middot;&nbsp;
            <Link to="/terms" className="ft-legal-link">Terms &amp; Conditions</Link>
          </p>
          <p style={{ margin: 0, fontSize: '0.73rem', color: 'rgba(255,255,255,0.25)' }}>
            CR No. {SITE.cr} &nbsp;&middot;&nbsp; Riyadh, KSA
          </p>
        </div>
      </div>

      <style>{`
        .ft-grid {
          display: grid;
          grid-template-columns: 1.6fr 0.85fr 0.85fr 0.7fr;
          gap: 48px;
          padding: 64px 0 56px;
        }
        .ft-brand { display: flex; flex-direction: column; gap: 18px; }
        .ft-logo-wrap { display: flex; flex-direction: column; gap: 3px; width: fit-content; }
        .ft-logo-name {
          font-family: 'DM Sans', sans-serif;
          font-size: 2rem; font-weight: 800;
          color: #ffffff; letter-spacing: 0.04em; line-height: 1;
        }
        .ft-logo-sub {
          font-size: 0.44rem; font-weight: 700;
          letter-spacing: 0.16em; color: rgba(255,255,255,0.35);
          text-transform: uppercase;
        }
        .ft-tagline {
          font-size: 0.85rem; color: rgba(255,255,255,0.38);
          line-height: 1.65; margin: 0;
        }
        .ft-contact-list { display: flex; flex-direction: column; gap: 9px; }
        .ft-contact-row {
          display: flex; align-items: flex-start; gap: 9px;
          font-size: 0.83rem; color: rgba(255,255,255,0.45);
          line-height: 1.5; text-decoration: none;
        }
        .ft-contact-row svg { flex-shrink: 0; margin-top: 2px; color: rgba(255,255,255,0.3); }
        a.ft-contact-row:hover { color: rgba(255,255,255,0.8); }
        .ft-li {
          display: inline-flex; width: 34px; height: 34px;
          align-items: center; justify-content: center;
          background: rgba(255,255,255,0.06);
          border: 1px solid rgba(255,255,255,0.12);
          border-radius: 8px; color: rgba(255,255,255,0.55);
          transition: background 0.2s, border-color 0.2s, color 0.2s;
        }
        .ft-li svg { width: 15px; height: 15px; }
        .ft-li:hover { background: #2563EB; border-color: #2563EB; color: #fff; }
        .ft-col { display: flex; flex-direction: column; gap: 10px; padding-top: 4px; }
        .ft-col-title {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.7rem; font-weight: 700;
          letter-spacing: 0.12em; text-transform: uppercase;
          color: rgba(255,255,255,0.9); margin-bottom: 4px;
        }
        .ft-link {
          font-size: 0.86rem; color: rgba(255,255,255,0.48);
          transition: color 0.15s; text-decoration: none;
        }
        .ft-link:hover { color: rgba(255,255,255,0.9); }
        .ft-bottom {
          border-top: 1px solid rgba(255,255,255,0.08);
          padding: 22px 0 36px;
          display: flex; justify-content: space-between; align-items: center;
          gap: 16px; flex-wrap: wrap;
          font-size: 0.77rem; color: rgba(255,255,255,0.28);
        }
        .ft-legal-link {
          color: rgba(255,255,255,0.42); text-decoration: underline;
          transition: color 0.15s;
        }
        .ft-legal-link:hover { color: rgba(255,255,255,0.85); }
        @media (max-width: 900px) {
          .ft-grid { grid-template-columns: 1fr 1fr; gap: 36px; padding: 48px 0 44px; }
          .ft-brand { grid-column: span 2; }
        }
        @media (max-width: 520px) {
          .ft-grid { grid-template-columns: 1fr; }
          .ft-brand { grid-column: span 1; }
          .ft-bottom { flex-direction: column; align-items: flex-start; gap: 10px; }
        }
      `}</style>
    </footer>
  );
}

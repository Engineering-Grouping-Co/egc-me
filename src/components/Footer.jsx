import { Link } from 'react-router-dom';

const SUPPLIER_PORTAL_URL = "https://erp.egc-me.com";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link to="/" className="footer-logo">
              <span className="logo-egc">EGC</span>
              <span className="logo-sub logo-sub-light">ENGINEERING GROUPING CO.</span>
            </Link>
            <p className="footer-tagline">[Street], [District]<br />Riyadh, Kingdom of Saudi Arabia</p>
          </div>
          <div className="footer-col">
            <h5>Company</h5>
            <Link to="/about">About Us</Link>
            <Link to="/divisions">Divisions</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/about">Team</Link>
          </div>
          <div className="footer-col">
            <h5>Work With Us</h5>
            <Link to="/careers">Careers</Link>
            <Link to="/suppliers">Suppliers</Link>
            <Link to="/contact">Contact Us</Link>
          </div>
          <div className="footer-col">
            <h5>Contact</h5>
            <a href="tel:+966110000000">+966 11 000 0000</a>
            <a href="mailto:info@egc-me.com">info@egc-me.com</a>
            <a href={SUPPLIER_PORTAL_URL} target="_blank" rel="noreferrer" className="footer-linkedin-link">
              Supplier Portal Login
            </a>
            <a
              href="https://www.linkedin.com/company/egc-me/"
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
        <div className="footer-bottom">
          <p>
            © 2026 Engineering Grouping Co. (EGC). All rights reserved.
            &nbsp;|&nbsp;
            <Link to="/privacy-policy">Privacy Policy</Link>
            &nbsp;|&nbsp;
            <Link to="/terms">Terms &amp; Conditions</Link>
          </p>
          <p>CR No. [XXXXXXXXXX]</p>
        </div>
      </div>

      <style>{`
        .footer { background: var(--dark); color: rgba(255,255,255,0.65); padding-top: 72px; }
        .footer-grid { display: grid; grid-template-columns: 1.4fr repeat(3, 0.8fr); gap: 48px; padding-bottom: 56px; }
        .footer-brand { display: flex; flex-direction: column; gap: 12px; }
        .footer-logo { display: flex; align-items: center; gap: 10px; text-decoration: none; }
        .footer-logo .logo-egc { color: var(--white); font-family: var(--font-display); font-size: 1.6rem; font-weight: 800; letter-spacing: 0.04em; line-height: 1; }
        .footer-logo .logo-sub { font-family: var(--font-body); font-size: 0.52rem; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; line-height: 1; }
        .footer-logo .logo-sub-light { color: rgba(255,255,255,0.6); }
        .footer-tagline { font-size: 0.84rem; color: rgba(255,255,255,0.45); line-height: 1.6; }
        .footer-col { display: flex; flex-direction: column; gap: 10px; }
        .footer-col h5 { font-family: var(--font-display); font-size: 0.78rem; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase; color: var(--white); margin-bottom: 6px; }
        .footer-col a { font-size: 0.88rem; transition: color 0.15s; text-decoration: none; color: rgba(255,255,255,0.65); }
        .footer-col a:hover { color: var(--white); }
        .footer-linkedin {
          display: inline-flex; width: 36px; height: 36px; align-items: center; justify-content: center;
          background: rgba(255,255,255,0.08); border: 1px solid rgba(255,255,255,0.15); border-radius: 8px;
          color: rgba(255,255,255,0.65); transition: background 0.2s, color 0.2s;
          margin-top: 4px;
        }
        .footer-linkedin svg { width: 16px; height: 16px; }
        .footer-linkedin:hover { background: var(--blue); color: var(--white); border-color: var(--blue); }
        .footer-linkedin-link { font-size: 0.88rem; text-decoration: none; color: rgba(255,255,255,0.65); }
        
        .footer-bottom {
          border-top: 1px solid rgba(255,255,255,0.1);
          padding: 22px 0 32px;
          display: flex; justify-content: space-between; align-items: center; gap: 16px;
          flex-wrap: wrap; font-size: 0.78rem; color: rgba(255,255,255,0.38);
        }
        .footer-bottom a { color: rgba(255,255,255,0.5); text-decoration: underline; transition: color 0.15s; }
        .footer-bottom a:hover { color: var(--white); }
        
        @media (max-width: 860px) {
          .footer-grid { grid-template-columns: 1fr 1fr; gap: 36px; padding-bottom: 44px; }
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

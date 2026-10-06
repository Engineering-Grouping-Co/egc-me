import { Link } from 'react-router-dom';
import { useContent } from '../content';
import { useLocale, useLocalePath } from '../i18n/LocaleContext';
import { findRoute } from '../content/routes';
import { getSeo } from '../content/seo';
import './Footer.css';

// the products people look for by name; the full list is on /services/
const FOOTER_SERVICES = ['hub', 'mriRoom', 'hospitalFitOut', 'medicalGas', 'hvac', 'fireProtection', 'nurseCall', 'woodenDoors', 'corianSurfaces', 'software'];

export default function Footer() {
  const locale = useLocale();
  const lp = useLocalePath();
  const { SITE, UI } = useContent();

  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link to={lp('')} className="footer-logo" aria-label={SITE.name}>
              <img src="/logo-light-md.webp" width="480" height="114" alt={SITE.name} />
            </Link>
            <p className="footer-tagline">{UI.footerTagline}</p>
            <p className="footer-address">{SITE.address}</p>
          </div>

          <div className="footer-col">
            <p className="footer-heading">{UI.footerServices}</p>
            {FOOTER_SERVICES.map((key) => (
              <Link key={key} to={lp(findRoute(key).segment)}>{getSeo(key, locale).name}</Link>
            ))}
            <Link to={lp('services')} className="footer-all">{UI.footerAllServices}</Link>
          </div>

          <div className="footer-col">
            <p className="footer-heading">{UI.footerCompany}</p>
            <Link to={lp('about')}>{UI.footerAbout}</Link>
            <Link to={lp('projects')}>{UI.footerProjects}</Link>
            <Link to={lp('careers')}>{UI.footerCareers}</Link>
            <Link to={lp('suppliers')}>{UI.footerSuppliers}</Link>
            <Link to={lp('contact')}>{UI.footerContact}</Link>
            <Link to="/install/" className="footer-install-link">{UI.footerInstall}</Link>
          </div>

          <div className="footer-col">
            <p className="footer-heading">{UI.footerContactHeading}</p>
            <a href={`tel:${SITE.phone.replace(/\s/g, '')}`} dir="ltr" className="footer-ltr">{SITE.phone}</a>
            <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
            <a href={SITE.supplierPortal} target="_blank" rel="noreferrer">{UI.footerSupplierPortal}</a>
            <a href={SITE.linkedin} target="_blank" rel="noreferrer" className="footer-linkedin" aria-label="LinkedIn">
              <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.91 1.64-1.86 3.37-1.86 3.61 0 4.28 2.38 4.28 5.47v6.28ZM5.32 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.1 20.45H3.54V9H7.1v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0Z" />
              </svg>
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            © 2026 {SITE.legalName}{SITE.legalName.endsWith('.') ? '' : '.'} {UI.footerRights}
            <span className="footer-sep" aria-hidden="true"> | </span>
            <Link to={lp('privacy-policy')}>{UI.footerPrivacy}</Link>
            <span className="footer-sep" aria-hidden="true"> | </span>
            <Link to={lp('terms')}>{UI.footerTerms}</Link>
          </p>
          <p>
            {UI.footerCr} <Link to={lp('legal-profile')} className="footer-cr-link">{SITE.cr}</Link>
          </p>
        </div>
      </div>
    </footer>
  );
}

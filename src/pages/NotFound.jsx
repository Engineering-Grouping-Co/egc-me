import { Link } from 'react-router-dom';
import { useContent } from '../content';
import { useLocalePath } from '../i18n/LocaleContext';
import Seo from '../components/Seo';
import './pages.css';

export default function NotFound() {
  const lp = useLocalePath();
  const { UI } = useContent();
  const links = [
    ['healthcare-contractor', UI.footerHub],
    ['manufacturing', UI.footerManufacturing],
    ['software-engineering', UI.footerSoftware],
    ['knowledge', UI.footerKnowledge],
    ['contact', UI.contactUs],
  ];
  return (
    <>
      <Seo routeKey="notFound" noindex />
      <section className="sec nf">
        <div className="wrap">
          <h1>{UI.notFoundTitle}</h1>
          <p className="lead">{UI.notFoundText}</p>
          <div className="row" style={{ marginBlockStart: 28 }}>
            <Link className="btn btn--primary btn--lg" to={lp('')}>{UI.notFoundHome}</Link>
          </div>
          <ul className="nf__links">
            {links.map(([seg, label]) => (
              <li key={seg}><Link className="tlink" to={lp(seg)}>{label}</Link></li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}

import { useContent } from '../content';
import { useLocalePath } from '../i18n/LocaleContext';
import { ARTICLE_SLUGS } from '../content/routes';
import { ArticleCard, CtaBand, PageHero } from '../components/Parts';
import './pages.css';

export default function Knowledge() {
  const lp = useLocalePath();
  const { COPY, HOME, SITE } = useContent();
  const [first, ...rest] = ARTICLE_SLUGS;

  return (
    <>
      <PageHero routeKey="knowledge" title={COPY.knowledge.h1} lead={COPY.knowledge.lead} />

      <section className="sec">
        <div className="wrap">
          <div className="kfeature">
            <ArticleCard slug={first} featured />
          </div>
          <div className="grid-2 kgrid">
            {rest.map((slug) => <ArticleCard key={slug} slug={slug} />)}
          </div>
          <p className="small kgrid__note">{COPY.knowledge.reviewed}</p>
        </div>
      </section>

      <CtaBand
        title={HOME.cta.title}
        text={HOME.cta.text}
        primary={{ label: HOME.cta.primary, to: lp('contact') }}
        secondary={{ label: SITE.phone, href: `tel:${SITE.phone.replace(/\s/g, '')}` }}
      />
    </>
  );
}

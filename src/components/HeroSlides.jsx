import { useState, useSyncExternalStore } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Pause, Play } from 'lucide-react';
import Img from './Img';
import './HeroSlides.css';

const REDUCED = '(prefers-reduced-motion: reduce)';
const subscribeMotion = (notify) => {
  const mq = window.matchMedia(REDUCED);
  mq.addEventListener('change', notify);
  return () => mq.removeEventListener('change', notify);
};
// scripts/prerender.mjs snapshots the still state (same as the server snapshot below), so hydration matches
const prefersReducedMotion = () => Boolean(window.__PRERENDER__) || window.matchMedia(REDUCED).matches;

/**
 * Home hero: a slideshow of what EGC does. The page's h1 is one steady line naming the business;
 * every slide brings its own headline, one sentence and a link to the page it describes.
 * The progress rule of the current tab is a CSS animation; when it ends the next slide shows,
 * so pausing the animation pauses the show. Nothing advances for visitors who prefer reduced
 * motion, and the show pauses while the pointer or keyboard focus is inside.
 * All slides stay in the document (hidden slides are inert) so their text is readable by search engines.
 *
 * slides: [{ id, tab, short, title, text, cta, to, image, position, positionMobile }]
 */
export default function HeroSlides({ slides, title, primary, ui }) {
  const [index, setIndex] = useState(0);
  const [userPaused, setUserPaused] = useState(false);
  const [held, setHeld] = useState(false);
  // server snapshot = reduced: the prerendered page shows a still first slide
  const reduced = useSyncExternalStore(subscribeMotion, prefersReducedMotion, () => true);
  const running = !reduced && !userPaused && !held;
  const advance = (e) => {
    if (e.animationName === 'hs-fill') setIndex((i) => (i + 1) % slides.length);
  };

  return (
    <section
      className="hs"
      data-running={running}
      data-motion={reduced ? 'off' : 'on'}
      aria-roledescription="carousel"
      aria-label={ui.label}
      onPointerEnter={(e) => e.pointerType === 'mouse' && setHeld(true)}
      onPointerLeave={() => setHeld(false)}
      onFocus={() => setHeld(true)}
      onBlur={() => setHeld(false)}
    >
      <div className="hs__slides">
        {slides.map((s, i) => (
          <figure
            key={s.id}
            className="hs__slide"
            data-active={i === index}
            aria-hidden={i !== index}
            aria-roledescription="slide"
            style={{ '--pos': s.position, '--pos-m': s.positionMobile }}
          >
            <Img name={s.image} eager={i === 0} low={i > 0} sizes="100vw" className="hs__img" />
          </figure>
        ))}
        <div className="hs__shade" />
      </div>

      <div className="hs__body wrap">
        <div className="hs__text">
          <h1 className="hs__id">{title}</h1>
          <div className="hs__copies">
            {slides.map((s, i) => (
              <div key={s.id} className="hs__copy" data-active={i === index} aria-hidden={i !== index} inert={i !== index}>
                <h2 className="hs__head">{s.title}</h2>
                <p className="hs__sub">{s.text}</p>
                <div className="row hs__actions">
                  <Link className="btn btn--light btn--lg" to={primary.to}>{primary.label}</Link>
                  <Link className="hs__link" to={s.to}>
                    {s.cta}
                    <ArrowUpRight size={18} className="i-dir" aria-hidden="true" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="hs__nav wrap">
        <ol className="hs__tabs">
          {slides.map((s, i) => (
            <li key={s.id}>
              <button
                type="button"
                className="hs__tab"
                aria-current={i === index}
                onClick={() => setIndex(i)}
              >
                <span className="hs__track" aria-hidden="true">
                  <span className="hs__fill" onAnimationEnd={i === index ? advance : undefined} />
                </span>
                <span className="hs__tab-title">
                  <span className="hs__long">{s.tab}</span>
                  <span className="hs__short">{s.short}</span>
                </span>
              </button>
            </li>
          ))}
        </ol>
        {!reduced && (
          <button
            type="button"
            className="hs__pause"
            onClick={() => setUserPaused((p) => !p)}
            aria-label={userPaused ? ui.play : ui.pause}
          >
            {userPaused ? <Play size={16} aria-hidden="true" /> : <Pause size={16} aria-hidden="true" />}
          </button>
        )}
      </div>
    </section>
  );
}

import { useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { useContent } from '../content';
import { useLocale } from '../i18n/LocaleContext';
import { GALLERY_ORDER, PHOTOS, PHOTO_CATEGORIES } from '../content/photos';
import Img from './Img';
import './Photos.css';

/** A row of captioned photographs from site, for the foot of a service page. */
export function PhotoStrip({ keys }) {
  const locale = useLocale();
  return (
    <ul className="pstrip">
      {keys.map((k) => (
        <li key={k}>
          <figure>
            <div className="pstrip__frame">
              <Img name={k} sizes="(min-width: 900px) 33vw, 100vw" />
            </div>
            <figcaption>{PHOTOS[k][locale]}</figcaption>
          </figure>
        </li>
      ))}
    </ul>
  );
}

/** The home page mosaic: one large photograph and four smaller ones. */
export function PhotoMosaic({ keys }) {
  return (
    <div className="pmosaic">
      {keys.map((k, i) => (
        <div key={k} className="pmosaic__tile">
          <Img name={k} sizes={i === 0 ? '(min-width: 900px) 50vw, 100vw' : '(min-width: 900px) 25vw, 50vw'} />
        </div>
      ))}
    </div>
  );
}

function Lightbox({ list, index, onClose, onStep }) {
  const ref = useRef(null);
  const { UI } = useContent();
  const locale = useLocale();
  const key = list[index];

  useEffect(() => {
    const d = ref.current;
    if (d && !d.open) d.showModal();
  }, []);

  const onKey = (e) => {
    if (e.key === 'ArrowLeft') onStep(locale === 'ar' ? 1 : -1);
    if (e.key === 'ArrowRight') onStep(locale === 'ar' ? -1 : 1);
  };

  return (
    <dialog
      ref={ref}
      className="lb"
      aria-label={PHOTOS[key][locale]}
      onClose={onClose}
      onClick={(e) => e.target === ref.current && ref.current.close()}
      onKeyDown={onKey}
    >
      <button type="button" className="lb__btn lb__close" onClick={() => ref.current.close()} aria-label={UI.galleryClose}>
        <X size={22} aria-hidden="true" />
      </button>
      <figure className="lb__fig">
        <Img name={key} eager sizes="100vw" className="lb__img" position="center" />
        <figcaption>
          <span>{PHOTOS[key][locale]}</span>
          <span className="lb__count">{index + 1} / {list.length}</span>
        </figcaption>
      </figure>
      <button type="button" className="lb__btn lb__prev" onClick={() => onStep(-1)} aria-label={UI.galleryPrev}>
        <ChevronLeft size={26} className="i-dir" aria-hidden="true" />
      </button>
      <button type="button" className="lb__btn lb__next" onClick={() => onStep(1)} aria-label={UI.galleryNext}>
        <ChevronRight size={26} className="i-dir" aria-hidden="true" />
      </button>
    </dialog>
  );
}

/** All the site photographs, filterable by kind of work, each opening in a lightbox. */
export function Gallery() {
  const locale = useLocale();
  const { UI } = useContent();
  const [cat, setCat] = useState('all');
  const [open, setOpen] = useState(null);
  const cats = PHOTO_CATEGORIES[locale];
  const list = GALLERY_ORDER.filter((k) => cat === 'all' || PHOTOS[k].cat === cat);
  const count = (c) => GALLERY_ORDER.filter((k) => PHOTOS[k].cat === c).length;

  return (
    <>
      <div className="chip-row gal__chips" role="group">
        <button type="button" className="chip" aria-pressed={cat === 'all'} onClick={() => setCat('all')}>
          {UI.galleryAll} ({GALLERY_ORDER.length})
        </button>
        {Object.keys(cats).map((c) => (
          <button key={c} type="button" className="chip" aria-pressed={cat === c} onClick={() => setCat(c)}>
            {cats[c]} ({count(c)})
          </button>
        ))}
      </div>
      <ul className="gal">
        {list.map((k, i) => (
          <li key={k}>
            <button type="button" className="gal__tile" onClick={() => setOpen(i)} aria-haspopup="dialog" title={UI.galleryOpen}>
              <Img name={k} sizes="(min-width: 1100px) 25vw, (min-width: 640px) 33vw, 50vw" />
            </button>
          </li>
        ))}
      </ul>
      {open !== null && (
        <Lightbox
          list={list}
          index={open}
          onClose={() => setOpen(null)}
          onStep={(d) => setOpen((o) => (o + d + list.length) % list.length)}
        />
      )}
    </>
  );
}

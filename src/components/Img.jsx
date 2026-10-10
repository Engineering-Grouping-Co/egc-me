import { useLocale } from '../i18n/LocaleContext';
import { PHOTOS } from '../content/photos';
import META from '../content/photoMeta.json';

/* Responsive WebP photograph. Each photo is stored at several widths
 * (public/images/photos/<name>-<width>.webp, widths in photoMeta.json); explicit
 * width/height prevent layout shift. Alt text and crop position default to the
 * entries in content/photos.js. */
export default function Img({ name, alt, sizes = '(min-width: 1024px) 50vw, 100vw', eager = false, low = false, className = '', style, position }) {
  const locale = useLocale();
  const { w, h, v } = META[name];
  const base = `/images/photos/${name}`;
  const mid = v.reduce((a, b) => (Math.abs(b - 900) < Math.abs(a - 900) ? b : a));
  const pos = position ?? PHOTOS[name]?.pos;
  return (
    <img
      src={`${base}-${mid}.webp`}
      srcSet={v.map((x) => `${base}-${x}.webp ${x}w`).join(', ')}
      sizes={sizes}
      width={w}
      height={h}
      alt={alt ?? PHOTOS[name]?.[locale] ?? ''}
      loading={eager ? 'eager' : 'lazy'}
      decoding="async"
      fetchPriority={eager ? 'high' : low ? 'low' : undefined}
      className={className}
      style={pos ? { objectPosition: pos, ...style } : style}
    />
  );
}

/* Responsive WebP image. Variants are generated at 480 / 900 / native width
 * (see public/images/*-480.webp etc.). Explicit width/height prevent layout shift. */
const DIMS = {
  'hero-bg': [1376, 768],
  'healthcare-xray': [1200, 896],
  'joinery-doors': [1200, 896],
  'corian-surfaces': [1200, 896],
};

export default function Img({ name, alt, sizes = '(min-width: 1024px) 50vw, 100vw', eager = false, className = '', style, position }) {
  const [w, h] = DIMS[name];
  const base = `/images/${name}`;
  return (
    <img
      src={`${base}-900.webp`}
      srcSet={`${base}-480.webp 480w, ${base}-900.webp 900w, ${base}-full.webp ${w}w`}
      sizes={sizes}
      width={w}
      height={h}
      alt={alt}
      loading={eager ? 'eager' : 'lazy'}
      decoding="async"
      fetchPriority={eager ? 'high' : undefined}
      className={className}
      style={position ? { objectPosition: position, ...style } : style}
    />
  );
}

import './KsaMap.css';

/** Saudi Arabia outline with project-city pins. Static when `onSelect` is omitted. */
// Dammam and Jubail sit ~18 units apart, so their labels fan out instead of colliding.
const LABEL = { Dammam: { x: 20, y: 30, anchor: 'start' }, Jubail: { x: -20, y: -14, anchor: 'end' } };

export default function KsaMap({ path, pins, activeCity, onSelect, label }) {
  const interactive = typeof onSelect === 'function';
  return (
    <svg className="ksa" viewBox="0 0 680 562" role="img" aria-label={label}>
      <path d={path} className="ksa__land" />
      {pins.map((p) => {
        const r = 14 + Math.min(p.count - 1, 3) * 4;
        const lab = LABEL[p.city] || { x: 0, y: -(r + 10), anchor: 'middle' };
        const on = activeCity === p.city;
        const props = interactive
          ? {
              role: 'button',
              tabIndex: 0,
              'aria-pressed': on,
              'aria-label': `${p.city}: ${p.count}`,
              onClick: () => onSelect(on ? null : p.city),
              onKeyDown: (e) => (e.key === 'Enter' || e.key === ' ') && (e.preventDefault(), onSelect(on ? null : p.city)),
            }
          : {};
        return (
          <g key={p.city} transform={`translate(${p.x},${p.y})`} className={`ksa__pin${on ? ' on' : ''}`} {...props}>
            {on && <circle r={r + 9} className="ksa__halo" />}
            <circle r={r} className="ksa__dot" />
            <text y="5" className="ksa__n">{p.count}</text>
            <text x={lab.x} y={lab.y} textAnchor={lab.anchor} className="ksa__city">{p.city}</text>
          </g>
        );
      })}
    </svg>
  );
}

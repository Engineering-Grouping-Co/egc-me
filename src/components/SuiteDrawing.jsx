import './Drawing.css';

/**
 * A shielded MRI suite in plan. Each coloured region belongs to one of EGC's four
 * disciplines; numbered markers select them. The geometry is deliberately not
 * mirrored in Arabic — engineering drawings keep their orientation.
 *
 * Props
 *  labels      translated strings (see HOME.drawing)
 *  active      currently highlighted discipline id
 *  onSelect    (id) => void — omit for a static, non-interactive drawing
 */
const ORDER = ['shielding', 'doors', 'mep', 'surfaces'];
const MARKERS = {
  shielding: { x: 690, y: 235, leader: 'M677 235H671' },
  doors: { x: 594, y: 322, leader: 'M581 322H553' },
  mep: { x: 376, y: 110, leader: 'M363 110H345' },
  surfaces: { x: 149, y: 266, leader: 'M149 279V290' },
};

export default function SuiteDrawing({ labels, active, onSelect, title }) {
  const hatch = 'suite-hatch';
  const interactive = typeof onSelect === 'function';

  return (
    <svg
      className="suite"
      viewBox="0 -10 740 540"
      role="img"
      aria-labelledby="suite-title"
      data-active={active}
      dir="ltr"
    >
      <title id="suite-title">{title}</title>
      <defs>
        <pattern id={hatch} width="7" height="7" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
          <line x1="0" y1="0" x2="0" y2="7" stroke="currentColor" strokeWidth="1.5" />
        </pattern>
      </defs>

      {/* corridor + context */}
      <g className="neutral">
        <rect x="70" y="360" width="600" height="100" className="corridor" />
        <text x="190" y="418" className="room-label">{labels.rooms.corridor}</text>
      </g>

      {/* plain (non-shielded) rooms: equipment + control */}
      <g className="neutral plain">
        <path className="ln draw" pathLength="1" d="M330 60H70V360H230M290 360H330M70 170H330" />
        <path className="ln thin swing-plain" d="M230 300A60 60 0 0 1 290 360" />
        <path className="ln door-leaf" d="M230 360V300" />
        <text x="200" y="154" className="room-label">{labels.rooms.tech}</text>
        <text x="200" y="212" className="room-label">{labels.rooms.control}</text>
        <rect x="96" y="84" width="56" height="52" className="eq" />
        <rect x="250" y="88" width="44" height="50" className="eq" />
      </g>

      {/* the magnet */}
      <g className="neutral">
        <rect x="425" y="125" width="150" height="130" rx="14" className="eq strong" />
        <circle cx="500" cy="190" r="36" className="bore" />
        <circle cx="500" cy="190" r="25" className="ln thin" />
        <rect x="488" y="190" width="24" height="84" rx="4" className="couch" />
        <path className="ln dotted" d="M560 125V34" />
        <path className="arrow-tip" d="M555 40L560 30L565 40Z" />
        <text x="500" y="100" className="room-label">{labels.rooms.magnet}</text>
      </g>

      {/* 1 · shielding: the wall build-up, hatched like a section cut */}
      <g className="reg reg--shielding">
        <path className="band" fill={`url(#${hatch})`} fillRule="evenodd" d="M330 60H670V360H330ZM344 74V346H656V74Z" />
        <path className="ln outline draw" pathLength="1" d="M330 60H670V360H330ZM344 74V346H656V74Z" />
        <path className="rf-layer" d="M344 74V346H656V74Z" />
      </g>

      {/* openings cut through the shield */}
      <g className="gaps">
        <rect x="470" y="345" width="80" height="16" />
        <rect x="329" y="190" width="16" height="84" />
        <rect x="329" y="88" width="16" height="46" />
      </g>
      <g className="neutral">
        <path className="ln thin" d="M334 190V274M340 190V274M329 190H345M329 274H345" />
      </g>

      {/* 2 · doors */}
      <g className="reg reg--doors">
        <path className="leaf" d="M550 360V280" />
        <path className="swing" d="M470 360A80 80 0 0 1 550 280" />
        <path className="jamb" d="M470 342V362M550 342V362" />
      </g>

      {/* 3 · MEP: penetration panel + services */}
      <g className="reg reg--mep">
        <rect x="331" y="90" width="12" height="42" className="panel" />
        <path className="ln thin" d="M331 104H343M331 118H343" />
        <path className="svc dashed" d="M294 100H331" />
        <path className="svc dotted" d="M294 118H331" />
        <path className="svc dashed" d="M343 100H358M343 118H358" />
      </g>

      {/* 4 · surfaces: clinical counter */}
      <g className="reg reg--surfaces">
        <rect x="84" y="296" width="132" height="38" className="counter" />
        <rect x="102" y="286" width="22" height="10" className="screen" />
        <rect x="140" y="286" width="22" height="10" className="screen" />
      </g>

      {/* dimension line */}
      <g className="dim">
        <path d="M330 366V506M670 366V506" className="ext" />
        <path d="M330 498H670M330 490V506M670 490V506" className="ln thin" />
        <path d="M330 498l9-4v8zM670 498l-9-4v8z" className="arrow-tip" />
        <text x="500" y="486" className="dim-label">{labels.dimension}</text>
      </g>

      {/* markers */}
      {ORDER.map((id, i) => {
        const m = MARKERS[id];
        const props = interactive
          ? {
              role: 'button',
              tabIndex: 0,
              'aria-pressed': active === id,
              'aria-label': labels.markers[id],
              onClick: () => onSelect(id),
              onPointerEnter: (e) => e.pointerType === 'mouse' && onSelect(id),
              onFocus: () => onSelect(id),
              onKeyDown: (e) => (e.key === 'Enter' || e.key === ' ') && (e.preventDefault(), onSelect(id)),
            }
          : { 'aria-hidden': true };
        return (
          <g key={id} className={`mk${active === id ? ' on' : ''}`} {...props}>
            <path className="leader" d={m.leader} />
            <circle className="hit" cx={m.x} cy={m.y} r="24" />
            <circle className="dot" cx={m.x} cy={m.y} r="13" />
            <text x={m.x} y={m.y + 4.5} className="num">{i + 1}</text>
          </g>
        );
      })}
    </svg>
  );
}

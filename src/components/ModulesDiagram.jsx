import './Drawing.css';

/** Software modules resting on one compliance layer — drawn in the same language as the suite plan. */
const NODES = [
  { x: 20, y: 24 },
  { x: 380, y: 24 },
  { x: 20, y: 300 },
  { x: 380, y: 300 },
  { x: 200, y: 336 },
];

export default function ModulesDiagram({ nodes, chips, core, label }) {
  return (
    <svg className="suite modules" viewBox="0 0 560 400" role="img" aria-labelledby="modules-title" dir="ltr">
      <title id="modules-title">{label}</title>
      {NODES.slice(0, nodes.length).map((n, i) => {
        const cx = n.x + 80;
        const cy = n.y + 24;
        return <path key={`l${i}`} className="ln thin" d={`M${cx} ${cy}L280 200`} />;
      })}
      <rect x="170" y="150" width="220" height="100" rx="6" className="core" />
      <text x="280" y="186" className="core-label">{core}</text>
      {chips.map((c, i) => (
        <g key={c} transform={`translate(${200 + i * 62},208)`}>
          <rect width="56" height="24" rx="12" className="chip-bg" />
          <text x="28" y="16" className="chip-label">{c}</text>
        </g>
      ))}
      {nodes.map((t, i) => (
        <g key={t} transform={`translate(${NODES[i].x},${NODES[i].y})`}>
          <rect width="160" height="48" rx="4" className="node" />
          <text x="80" y="29" className="node-label">{t}</text>
        </g>
      ))}
    </svg>
  );
}

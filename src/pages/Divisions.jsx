import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import FadeIn from '../components/FadeIn';
import { DIVISIONS } from '../data';

/* ── Division accent colours ── */
const DIV_COLORS = {
  steel:     { accent: '#2563EB', light: '#EFF6FF', mid: '#BFDBFE', dark: '#1D4ED8', text: '#1E40AF' },
  wood:      { accent: '#D97706', light: '#FFFBEB', mid: '#FDE68A', dark: '#B45309', text: '#92400E' },
  leadsheet: { accent: '#475569', light: '#F1F5F9', mid: '#CBD5E1', dark: '#334155', text: '#1E293B' },
};

/* ── Division labels ── */
const DIV_LABELS = { steel: 'Steel', wood: 'Wood', leadsheet: 'Lead Sheet' };

/* ══════════════════════════════════════════════════════
   OVERVIEW CARD ILLUSTRATIONS  (portrait, 280 × 200)
══════════════════════════════════════════════════════ */
function SteelCardIllustration() {
  return (
    <svg viewBox="0 0 280 200" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" style={{width:'100%',height:'100%'}}>
      <rect width="280" height="200" fill="#EFF6FF" rx="8"/>
      {/* subtle grid */}
      <line x1="0" y1="40" x2="280" y2="40" stroke="#DBEAFE" strokeWidth="0.5"/>
      <line x1="0" y1="80" x2="280" y2="80" stroke="#DBEAFE" strokeWidth="0.5"/>
      <line x1="0" y1="120" x2="280" y2="120" stroke="#DBEAFE" strokeWidth="0.5"/>
      <line x1="0" y1="160" x2="280" y2="160" stroke="#DBEAFE" strokeWidth="0.5"/>
      <line x1="56" y1="0" x2="56" y2="200" stroke="#DBEAFE" strokeWidth="0.5"/>
      <line x1="112" y1="0" x2="112" y2="200" stroke="#DBEAFE" strokeWidth="0.5"/>
      <line x1="168" y1="0" x2="168" y2="200" stroke="#DBEAFE" strokeWidth="0.5"/>
      <line x1="224" y1="0" x2="224" y2="200" stroke="#DBEAFE" strokeWidth="0.5"/>

      {/* I-beam — top flange */}
      <rect x="70" y="38" width="140" height="26" rx="2" fill="#BFDBFE" stroke="#2563EB" strokeWidth="2"/>
      {/* I-beam — web */}
      <rect x="116" y="64" width="48" height="72" fill="#DBEAFE" stroke="#2563EB" strokeWidth="2"/>
      {/* I-beam — bottom flange */}
      <rect x="70" y="136" width="140" height="26" rx="2" fill="#BFDBFE" stroke="#2563EB" strokeWidth="2"/>

      {/* weld callouts */}
      <path d="M116 64 L104 72 L116 68" stroke="#1D4ED8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M164 64 L176 72 L164 68" stroke="#1D4ED8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M116 136 L104 128 L116 132" stroke="#1D4ED8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M164 136 L176 128 L164 132" stroke="#1D4ED8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>

      {/* dimension line — height */}
      <line x1="36" y1="38" x2="36" y2="162" stroke="#93C5FD" strokeWidth="1" strokeDasharray="3 2"/>
      <line x1="30" y1="38" x2="42" y2="38" stroke="#93C5FD" strokeWidth="1"/>
      <line x1="30" y1="162" x2="42" y2="162" stroke="#93C5FD" strokeWidth="1"/>
      {/* dimension line — flange width */}
      <line x1="70" y1="22" x2="210" y2="22" stroke="#93C5FD" strokeWidth="1" strokeDasharray="3 2"/>
      <line x1="70" y1="16" x2="70" y2="28" stroke="#93C5FD" strokeWidth="1"/>
      <line x1="210" y1="16" x2="210" y2="28" stroke="#93C5FD" strokeWidth="1"/>

      {/* grade label */}
      <text x="181" y="102" fill="#1D4ED8" fontSize="9.5" fontFamily="Inter,sans-serif" fontWeight="700" letterSpacing="0.06em">A572</text>
      <text x="182" y="115" fill="#3B82F6" fontSize="8" fontFamily="Inter,sans-serif" fontWeight="600" opacity="0.8">GR.50</text>
    </svg>
  );
}

function WoodCardIllustration() {
  return (
    <svg viewBox="0 0 280 200" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" style={{width:'100%',height:'100%'}}>
      <rect width="280" height="200" fill="#FFFBEB" rx="8"/>

      {/* plank — front face */}
      <rect x="20" y="55" width="196" height="96" rx="3" fill="#FEF3C7" stroke="#D97706" strokeWidth="2"/>
      {/* grain rings (end grain) */}
      <ellipse cx="98" cy="103" rx="70" ry="38" stroke="#F59E0B" strokeWidth="1.2" fill="none" opacity="0.65"/>
      <ellipse cx="98" cy="103" rx="53" ry="28" stroke="#F59E0B" strokeWidth="1.2" fill="none" opacity="0.55"/>
      <ellipse cx="98" cy="103" rx="36" ry="18" stroke="#F59E0B" strokeWidth="1.2" fill="none" opacity="0.45"/>
      <ellipse cx="98" cy="103" rx="20" ry="10" stroke="#F59E0B" strokeWidth="1.2" fill="none" opacity="0.35"/>
      <ellipse cx="98" cy="103" rx="7" ry="4" fill="#D97706" opacity="0.45"/>
      {/* grain lines on face */}
      <line x1="20" y1="70" x2="216" y2="70" stroke="#F59E0B" strokeWidth="0.7" strokeDasharray="2 5" opacity="0.5"/>
      <line x1="20" y1="136" x2="216" y2="136" stroke="#F59E0B" strokeWidth="0.7" strokeDasharray="2 5" opacity="0.5"/>

      {/* top face */}
      <path d="M20 55 L52 33 L248 33 L216 55 Z" fill="#FFFDE7" stroke="#D97706" strokeWidth="2"/>
      {/* side face */}
      <path d="M216 55 L248 33 L248 129 L216 151 Z" fill="#FDE68A" stroke="#D97706" strokeWidth="2"/>
      {/* side grain lines */}
      <line x1="216" y1="75" x2="248" y2="55" stroke="#F59E0B" strokeWidth="0.8" opacity="0.5"/>
      <line x1="216" y1="95" x2="248" y2="75" stroke="#F59E0B" strokeWidth="0.8" opacity="0.5"/>
      <line x1="216" y1="115" x2="248" y2="95" stroke="#F59E0B" strokeWidth="0.8" opacity="0.5"/>
      <line x1="216" y1="135" x2="248" y2="115" stroke="#F59E0B" strokeWidth="0.8" opacity="0.5"/>

      {/* CNC cut mark lines on top face */}
      <line x1="68" y1="33" x2="68" y2="55" stroke="#D97706" strokeWidth="0.6" strokeDasharray="2 3" opacity="0.5"/>
      <line x1="134" y1="33" x2="134" y2="55" stroke="#D97706" strokeWidth="0.6" strokeDasharray="2 3" opacity="0.5"/>
      <line x1="180" y1="33" x2="180" y2="55" stroke="#D97706" strokeWidth="0.6" strokeDasharray="2 3" opacity="0.5"/>

      {/* species label on side */}
      <text x="232" y="97" fill="#92400E" fontSize="7.5" fontFamily="Inter,sans-serif" fontWeight="700" letterSpacing="0.08em"
        transform="rotate(-90,232,97)" textAnchor="middle" opacity="0.75">OAK</text>

      {/* small calipers / measurement indicator */}
      <line x1="20" y1="168" x2="216" y2="168" stroke="#D97706" strokeWidth="1" strokeDasharray="3 2"/>
      <line x1="20" y1="163" x2="20" y2="173" stroke="#D97706" strokeWidth="1.2"/>
      <line x1="216" y1="163" x2="216" y2="173" stroke="#D97706" strokeWidth="1.2"/>
      <text x="118" y="183" fill="#92400E" fontSize="8" fontFamily="Inter,sans-serif" fontWeight="600" textAnchor="middle">2,400 mm</text>
    </svg>
  );
}

function LeadSheetCardIllustration() {
  return (
    <svg viewBox="0 0 280 200" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" style={{width:'100%',height:'100%'}}>
      <rect width="280" height="200" fill="#F8FAFC" rx="8"/>

      {/* rain drops */}
      {[60,100,140,180,220].map((x, i) => (
        <g key={i}>
          <ellipse cx={x} cy={18 + (i % 2) * 6} rx="3.5" ry="5.5" fill="#BFDBFE" opacity="0.8"/>
          <line x1={x} y1={24 + (i % 2) * 6} x2={x - 1} y2={34 + (i % 2) * 6} stroke="#93C5FD" strokeWidth="1" strokeLinecap="round"/>
        </g>
      ))}

      {/* Lead sheet — top layer */}
      <rect x="28" y="52" width="224" height="22" rx="2" fill="#475569" stroke="#334155" strokeWidth="2"/>
      {/* folded edge detail */}
      <path d="M252 52 Q265 52 267 63 Q265 74 252 72 L252 52" fill="#334155" stroke="#1E293B" strokeWidth="1.5"/>
      <text x="140" y="66" fill="#F1F5F9" fontSize="7.5" fontFamily="Inter,sans-serif" fontWeight="700" textAnchor="middle" letterSpacing="0.07em">LEAD SHEET — BS EN 12588</text>

      {/* Insulation */}
      <rect x="28" y="78" width="224" height="20" rx="2" fill="#94A3B8" stroke="#64748B" strokeWidth="1.5"/>
      <text x="140" y="91" fill="#F8FAFC" fontSize="7.5" fontFamily="Inter,sans-serif" fontWeight="600" textAnchor="middle">INSULATION LAYER</text>

      {/* Vapour control */}
      <rect x="28" y="102" width="224" height="16" rx="2" fill="#CBD5E1" stroke="#94A3B8" strokeWidth="1.5"/>
      <text x="140" y="113" fill="#334155" fontSize="7" fontFamily="Inter,sans-serif" fontWeight="600" textAnchor="middle">VAPOUR CONTROL LAYER</text>

      {/* Structural deck */}
      <rect x="28" y="122" width="224" height="20" rx="2" fill="#94A3B8" stroke="#64748B" strokeWidth="1.5"/>
      <text x="140" y="135" fill="#F8FAFC" fontSize="7.5" fontFamily="Inter,sans-serif" fontWeight="600" textAnchor="middle">STRUCTURAL DECK</text>

      {/* Concrete */}
      <rect x="28" y="146" width="224" height="20" rx="2" fill="#CBD5E1" stroke="#94A3B8" strokeWidth="1.5"/>
      {/* concrete hatch */}
      {[42,58,74,90,106,122,138,154,170,186,202,218,234].map((x, i) => (
        <line key={i} x1={x} y1="146" x2={x - 8} y2="166" stroke="#94A3B8" strokeWidth="0.8" opacity="0.6"/>
      ))}
      <text x="140" y="159" fill="#334155" fontSize="7" fontFamily="Inter,sans-serif" fontWeight="600" textAnchor="middle">CONCRETE SLAB</text>

      {/* waterflow arrow */}
      <path d="M40 52 Q30 52 28 63" stroke="#3B82F6" strokeWidth="1.5" strokeDasharray="3 2" fill="none"/>
      <text x="14" y="68" fill="#3B82F6" fontSize="7" fontFamily="Inter,sans-serif" fontWeight="600">100%</text>
      <text x="8" y="77" fill="#3B82F6" fontSize="7" fontFamily="Inter,sans-serif">waterproof</text>
    </svg>
  );
}

const OVERVIEW_SVG = { steel: <SteelCardIllustration/>, wood: <WoodCardIllustration/>, leadsheet: <LeadSheetCardIllustration/> };

/* ══════════════════════════════════════════════════════
   DEEP-DIVE SCENE ILLUSTRATIONS  (landscape, 560 × 380)
══════════════════════════════════════════════════════ */
function SteelSceneIllustration() {
  return (
    <svg viewBox="0 0 560 380" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" style={{width:'100%',height:'100%'}}>
      <rect width="560" height="380" fill="#EFF6FF" rx="12"/>
      {/* grid */}
      {[40,80,120,160,200,240,280,320,360].map(y => <line key={y} x1="0" y1={y} x2="560" y2={y} stroke="#DBEAFE" strokeWidth="0.6"/>)}
      {[56,112,168,224,280,336,392,448,504].map(x => <line key={x} x1={x} y1="0" x2={x} y2="380" stroke="#DBEAFE" strokeWidth="0.6"/>)}

      {/* Main portal frame */}
      {/* Left column */}
      <rect x="80" y="80" width="32" height="240" fill="#BFDBFE" stroke="#2563EB" strokeWidth="2"/>
      {/* Right column */}
      <rect x="448" y="80" width="32" height="240" fill="#BFDBFE" stroke="#2563EB" strokeWidth="2"/>
      {/* Rafter left */}
      <rect x="80" y="72" width="192" height="22" rx="1" fill="#DBEAFE" stroke="#2563EB" strokeWidth="2"/>
      {/* Rafter right */}
      <rect x="288" y="72" width="192" height="22" rx="1" fill="#DBEAFE" stroke="#2563EB" strokeWidth="2"/>
      {/* Ridge */}
      <rect x="272" y="56" width="16" height="36" fill="#BFDBFE" stroke="#2563EB" strokeWidth="2"/>

      {/* Purlins */}
      {[130, 190, 250].map(y => (
        <g key={y}>
          <rect x="112" y={y} width="336" height="12" rx="1" fill="#EFF6FF" stroke="#93C5FD" strokeWidth="1.5"/>
        </g>
      ))}

      {/* Base plates + bolts */}
      {[80, 448].map(x => (
        <g key={x}>
          <rect x={x - 12} y="320" width="56" height="10" rx="1" fill="#93C5FD" stroke="#2563EB" strokeWidth="1.5"/>
          <rect x={x + 2} y="330" width="6" height="18" fill="#2563EB"/>
          <rect x={x + 24} y="330" width="6" height="18" fill="#2563EB"/>
        </g>
      ))}

      {/* Connection detail — left haunch */}
      <rect x="104" y="67" width="32" height="32" rx="1" fill="#BFDBFE" stroke="#1D4ED8" strokeWidth="1.5"/>
      {/* bolt holes */}
      {[0,1].map(r => [0,1].map(c => (
        <circle key={`${r}${c}`} cx={112 + c*16} cy={75 + r*16} r="3" fill="#EFF6FF" stroke="#1D4ED8" strokeWidth="1"/>
      )))}
      {/* Right haunch */}
      <rect x="424" y="67" width="32" height="32" rx="1" fill="#BFDBFE" stroke="#1D4ED8" strokeWidth="1.5"/>
      {[0,1].map(r => [0,1].map(c => (
        <circle key={`${r}${c}`} cx={432 + c*16} cy={75 + r*16} r="3" fill="#EFF6FF" stroke="#1D4ED8" strokeWidth="1"/>
      )))}

      {/* Weld symbols on haunch */}
      <text x="142" y="92" fill="#1D4ED8" fontSize="11" fontFamily="monospace">⌒</text>
      <text x="418" y="92" fill="#1D4ED8" fontSize="11" fontFamily="monospace">⌒</text>

      {/* Dimension annotations */}
      <line x1="80" y1="355" x2="480" y2="355" stroke="#93C5FD" strokeWidth="1" strokeDasharray="4 2"/>
      <line x1="80" y1="349" x2="80" y2="361" stroke="#93C5FD" strokeWidth="1.2"/>
      <line x1="480" y1="349" x2="480" y2="361" stroke="#93C5FD" strokeWidth="1.2"/>
      <text x="280" y="372" fill="#1D4ED8" fontSize="10" fontFamily="Inter,sans-serif" fontWeight="600" textAnchor="middle">24,000 mm SPAN</text>

      {/* Height dim */}
      <line x1="52" y1="80" x2="52" y2="320" stroke="#93C5FD" strokeWidth="1" strokeDasharray="4 2"/>
      <line x1="46" y1="80" x2="58" y2="80" stroke="#93C5FD" strokeWidth="1.2"/>
      <line x1="46" y1="320" x2="58" y2="320" stroke="#93C5FD" strokeWidth="1.2"/>
      <text x="38" y="204" fill="#1D4ED8" fontSize="10" fontFamily="Inter,sans-serif" fontWeight="600" textAnchor="middle" transform="rotate(-90,38,204)">8,000 mm</text>

      {/* Material label */}
      <rect x="348" y="92" width="116" height="44" rx="4" fill="rgba(255,255,255,0.85)" stroke="#BFDBFE" strokeWidth="1"/>
      <text x="406" y="108" fill="#1E40AF" fontSize="9" fontFamily="Inter,sans-serif" fontWeight="800" textAnchor="middle" letterSpacing="0.06em">A572 GR.50</text>
      <text x="406" y="121" fill="#2563EB" fontSize="8" fontFamily="Inter,sans-serif" fontWeight="600" textAnchor="middle">HOT-ROLLED SECTION</text>
      <text x="406" y="132" fill="#3B82F6" fontSize="8" fontFamily="Inter,sans-serif" textAnchor="middle">AWS D1.1 WELDED</text>
    </svg>
  );
}

function WoodSceneIllustration() {
  return (
    <svg viewBox="0 0 560 380" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" style={{width:'100%',height:'100%'}}>
      <rect width="560" height="380" fill="#FFFBEB" rx="12"/>

      {/* Main timber beam — horizontal */}
      <rect x="40" y="120" width="340" height="80" rx="4" fill="#FEF3C7" stroke="#D97706" strokeWidth="2.5"/>
      {/* grain lines on face */}
      {[140,160,180,200,220,240,260,280,300,320,340].map(x => (
        <line key={x} x1={x} y1="120" x2={x - 4} y2="200" stroke="#F59E0B" strokeWidth="0.8" opacity="0.35"/>
      ))}

      {/* Beam — top face (3D) */}
      <path d="M40 120 L80 88 L420 88 L380 120 Z" fill="#FFFDE7" stroke="#D97706" strokeWidth="2.5"/>
      {/* grain on top */}
      {[100,140,180,220,260,300,340,380].map(x => (
        <line key={x} x1={x} y1="88" x2={x - 4} y2="120" stroke="#F59E0B" strokeWidth="0.8" opacity="0.25"/>
      ))}

      {/* Beam — right face (3D) */}
      <path d="M380 120 L420 88 L420 168 L380 200 Z" fill="#FDE68A" stroke="#D97706" strokeWidth="2.5"/>
      {/* grain on side */}
      {[100,120,140,160,180].map((y, i) => (
        <line key={y} x1="380" y1={y} x2="420" y2={y - 32} stroke="#F59E0B" strokeWidth="0.8" opacity="0.3"/>
      ))}

      {/* Vertical timber post */}
      <rect x="430" y="60" width="80" height="300" rx="4" fill="#FEF3C7" stroke="#D97706" strokeWidth="2.5"/>
      {/* post face grain */}
      {[80,110,140,170,200,230,260,290,320].map(y => (
        <line key={y} x1="430" y1={y} x2="510" y2={y + 3} stroke="#F59E0B" strokeWidth="0.8" opacity="0.3"/>
      ))}
      {/* post top */}
      <path d="M430 60 L462 40 L542 40 L510 60 Z" fill="#FFFDE7" stroke="#D97706" strokeWidth="2.5"/>

      {/* Mortise pocket in post */}
      <rect x="430" y="118" width="32" height="84" rx="2" fill="#FDE68A" stroke="#B45309" strokeWidth="1.5"/>

      {/* Tenon on beam end */}
      <rect x="348" y="133" width="84" height="54" rx="2" fill="#FDE68A" stroke="#B45309" strokeWidth="1.5"/>

      {/* Assembly arrow */}
      <path d="M360 160 L342 160" stroke="#92400E" strokeWidth="2" strokeDasharray="5 3" markerEnd="url(#arrow)"/>
      <defs>
        <marker id="arrow" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
          <polygon points="0 0, 8 3, 0 6" fill="#92400E"/>
        </marker>
      </defs>

      {/* Dowel holes */}
      <circle cx="458" cy="145" r="5" fill="#FFFBEB" stroke="#B45309" strokeWidth="1.5"/>
      <circle cx="458" cy="175" r="5" fill="#FFFBEB" stroke="#B45309" strokeWidth="1.5"/>
      <circle cx="380" cy="145" r="5" fill="#FFFBEB" stroke="#B45309" strokeWidth="1.5"/>
      <circle cx="380" cy="175" r="5" fill="#FFFBEB" stroke="#B45309" strokeWidth="1.5"/>

      {/* Callout labels */}
      <line x1="430" y1="160" x2="400" y2="250" stroke="#D97706" strokeWidth="1" strokeDasharray="3 2"/>
      <rect x="280" y="248" width="130" height="36" rx="4" fill="rgba(255,255,255,0.9)" stroke="#FDE68A" strokeWidth="1"/>
      <text x="345" y="264" fill="#92400E" fontSize="9" fontFamily="Inter,sans-serif" fontWeight="700" textAnchor="middle">MORTISE &amp; TENON</text>
      <text x="345" y="277" fill="#D97706" fontSize="8" fontFamily="Inter,sans-serif" textAnchor="middle">Precision CNC-machined</text>

      <line x1="470" y1="40" x2="520" y2="20" stroke="#D97706" strokeWidth="1" strokeDasharray="3 2"/>
      <rect x="432" y="4" width="128" height="18" rx="3" fill="rgba(255,255,255,0.9)" stroke="#FDE68A" strokeWidth="1"/>
      <text x="496" y="15.5" fill="#92400E" fontSize="8.5" fontFamily="Inter,sans-serif" fontWeight="700" textAnchor="middle">AWI QUALITY GRADE SPEC</text>

      {/* Grain end on beam left */}
      <ellipse cx="58" cy="160" rx="18" ry="38" fill="#FFFDE7" stroke="#D97706" strokeWidth="2"/>
      <ellipse cx="58" cy="160" rx="13" ry="28" stroke="#F59E0B" strokeWidth="1" fill="none" opacity="0.7"/>
      <ellipse cx="58" cy="160" rx="8" ry="17" stroke="#F59E0B" strokeWidth="1" fill="none" opacity="0.55"/>
      <ellipse cx="58" cy="160" rx="4" ry="8" stroke="#F59E0B" strokeWidth="1" fill="none" opacity="0.4"/>
      <ellipse cx="58" cy="160" rx="1.5" ry="3" fill="#D97706" opacity="0.5"/>

      {/* dimension note */}
      <line x1="40" y1="330" x2="380" y2="330" stroke="#D97706" strokeWidth="1" strokeDasharray="3 2"/>
      <line x1="40" y1="324" x2="40" y2="336" stroke="#D97706" strokeWidth="1.2"/>
      <line x1="380" y1="324" x2="380" y2="336" stroke="#D97706" strokeWidth="1.2"/>
      <text x="210" y="346" fill="#92400E" fontSize="10" fontFamily="Inter,sans-serif" fontWeight="600" textAnchor="middle">3,400 mm BEAM</text>
    </svg>
  );
}

function LeadSceneIllustration() {
  return (
    <svg viewBox="0 0 560 380" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" style={{width:'100%',height:'100%'}}>
      <rect width="560" height="380" fill="#F8FAFC" rx="12"/>

      {/* rain */}
      {[60,110,160,210,260,310,360,410,460,510].map((x, i) => (
        <g key={x}>
          <ellipse cx={x} cy={16 + (i % 3) * 5} rx="3" ry="5" fill="#BFDBFE" opacity="0.75"/>
          <line x1={x - 1} y1={22 + (i % 3) * 5} x2={x - 2.5} y2={31 + (i % 3) * 5} stroke="#93C5FD" strokeWidth="1" strokeLinecap="round"/>
        </g>
      ))}

      {/* parapet wall (right side) */}
      <rect x="420" y="60" width="60" height="200" rx="2" fill="#E2E8F0" stroke="#94A3B8" strokeWidth="2"/>
      {/* brick hatch on parapet */}
      {[80,100,120,140,160,180,200,220,240].map(y => (
        <line key={y} x1="420" y1={y} x2="480" y2={y} stroke="#CBD5E1" strokeWidth="0.8"/>
      ))}
      {[440,460].map(x => [70,90,110,130,150,170,190,210,230,250].map(y => (
        <line key={`${x}${y}`} x1={x} y1={y} x2={x} y2={y + 10} stroke="#CBD5E1" strokeWidth="0.8"/>
      )))}

      {/* LEAD SHEET flashing up parapet */}
      <path d="M60 90 L420 90 L420 60 L406 60 L406 78 L60 78 Z" fill="#475569" stroke="#334155" strokeWidth="2"/>
      {/* fold detail at parapet */}
      <path d="M406 60 Q414 60 416 70 Q414 78 406 78" fill="#334155" stroke="#1E293B" strokeWidth="1.5"/>

      {/* Insulation layer */}
      <rect x="60" y="102" width="360" height="28" rx="1" fill="#94A3B8" stroke="#64748B" strokeWidth="1.5"/>
      {/* insulation hatch */}
      {[70,85,100,115,130,145,160,175,190,205,220,235,250,265,280,295,310,325,340,355,370,385,400].map((x, i) => (
        <path key={x} d={`M${x} 102 Q${x+7} 116 ${x+14} 102`} stroke="#CBD5E1" strokeWidth="1" fill="none" opacity="0.7"/>
      ))}

      {/* Vapour control */}
      <rect x="60" y="134" width="360" height="14" rx="1" fill="#CBD5E1" stroke="#94A3B8" strokeWidth="1.5"/>

      {/* Structural deck (ribbed) */}
      <rect x="60" y="152" width="360" height="30" rx="1" fill="#94A3B8" stroke="#64748B" strokeWidth="1.5"/>
      {[80,110,140,170,200,230,260,290,320,350,380].map(x => (
        <path key={x} d={`M${x} 152 L${x} 182`} stroke="#64748B" strokeWidth="1"/>
      ))}
      {[80,110,140,170,200,230,260,290,320,350,380].map(x => (
        <path key={x} d={`M${x} 152 L${x+15} 152 L${x+30} 152`} stroke="#64748B" strokeWidth="0.5" opacity="0.5"/>
      ))}

      {/* Concrete slab */}
      <rect x="60" y="186" width="360" height="36" rx="1" fill="#CBD5E1" stroke="#94A3B8" strokeWidth="1.5"/>
      {[75,95,115,135,155,175,195,215,235,255,275,295,315,335,355,375,395].map(x => (
        <line key={x} x1={x} y1="186" x2={x - 10} y2="222" stroke="#94A3B8" strokeWidth="0.8" opacity="0.5"/>
      ))}

      {/* Layer labels — callout lines */}
      {[
        { y: 84, label: 'LEAD SHEET CODE 5', sub: 'BS EN 12588 — Fully bonded', color: '#F8FAFC', textColor: '#1E293B', bg: '#475569' },
        { y: 116, label: 'THERMAL INSULATION', sub: '100mm PIR board', color: '#F8FAFC', textColor: '#F8FAFC', bg: '#64748B' },
        { y: 141, label: 'VAPOUR CONTROL LAYER', sub: null, color: '#F8FAFC', textColor: '#334155', bg: '#CBD5E1' },
        { y: 167, label: 'STRUCTURAL DECK', sub: '0.7mm steel profile', color: '#F8FAFC', textColor: '#F8FAFC', bg: '#64748B' },
        { y: 204, label: 'REINFORCED CONCRETE SLAB', sub: null, color: '#F8FAFC', textColor: '#475569', bg: '#CBD5E1' },
      ].map(({ y, label, sub, textColor, bg }) => (
        <g key={y}>
          <line x1="60" y1={y} x2="30" y2={y} stroke="#94A3B8" strokeWidth="1"/>
          <text x="28" y={y + 3.5} fill={textColor === '#F8FAFC' ? '#334155' : textColor} fontSize="7.5" fontFamily="Inter,sans-serif" fontWeight="700" textAnchor="end">{label}</text>
          {sub && <text x="28" y={y + 13} fill="#64748B" fontSize="6.5" fontFamily="Inter,sans-serif" textAnchor="end">{sub}</text>}
        </g>
      ))}

      {/* Water runoff arrow on lead sheet */}
      <path d="M200 78 Q230 76 260 78 Q280 80 300 78" stroke="#3B82F6" strokeWidth="1.5" fill="none"/>
      <path d="M300 78 L308 72" stroke="#3B82F6" strokeWidth="1.5" strokeLinecap="round"/>
      <text x="240" y="70" fill="#2563EB" fontSize="8" fontFamily="Inter,sans-serif" fontWeight="600" textAnchor="middle">water runoff →</text>

      {/* Step flashing detail at parapet */}
      <path d="M406 78 Q406 68 416 65 L430 65" stroke="#334155" strokeWidth="1.5" strokeDasharray="3 2" fill="none"/>
      <rect x="430" y="58" width="110" height="30" rx="3" fill="rgba(255,255,255,0.92)" stroke="#CBD5E1" strokeWidth="1"/>
      <text x="485" y="72" fill="#1E293B" fontSize="8" fontFamily="Inter,sans-serif" fontWeight="700" textAnchor="middle">UPSTAND &amp; FLASHING</text>
      <text x="485" y="83" fill="#475569" fontSize="7" fontFamily="Inter,sans-serif" textAnchor="middle">Copper-clipped, code lead</text>

      {/* span label */}
      <line x1="60" y1="250" x2="420" y2="250" stroke="#94A3B8" strokeWidth="1" strokeDasharray="3 2"/>
      <line x1="60" y1="244" x2="60" y2="256" stroke="#94A3B8" strokeWidth="1.2"/>
      <line x1="420" y1="244" x2="420" y2="256" stroke="#94A3B8" strokeWidth="1.2"/>
      <text x="240" y="267" fill="#475569" fontSize="10" fontFamily="Inter,sans-serif" fontWeight="600" textAnchor="middle">ROOFING SYSTEM CROSS-SECTION</text>
    </svg>
  );
}

const SCENE_SVG = {
  steel:     <SteelSceneIllustration/>,
  wood:      <WoodSceneIllustration/>,
  leadsheet: <LeadSceneIllustration/>,
};

/* ══════════════════════════════════════════════════════
   PAGE COMPONENT
══════════════════════════════════════════════════════ */
export default function Divisions() {
  return (
    <>
      {/* ── PAGE HERO ── */}
      <section className="page-hero">
        <div className="container">
          <nav className="breadcrumb"><a href="/">Home</a><span>/</span><span>Divisions</span></nav>
          <FadeIn>
            <p className="overline">Our Expertise</p>
            <h1 className="headline-lg" style={{ marginBottom: 14 }}>Three Divisions. One Standard.</h1>
            <p className="section-sub">
              EGC runs its own fabrication shops for structural steel, architectural timber, and lead sheet works.
              Every project moves from design to site under one roof, one schedule, and one quality standard.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ── DIVISION OVERVIEW CARDS ── */}
      <section className="section">
        <div className="container">
          <FadeIn className="div-overview-header">
            <p className="overline">What We Build</p>
            <h2 className="headline-md" style={{ marginBottom: 0 }}>Choose a division to explore.</h2>
          </FadeIn>
          <div className="div-overview-grid">
            {DIVISIONS.map((d, i) => {
              const c = DIV_COLORS[d.id];
              return (
                <FadeIn delay={i + 1} key={d.id}>
                  <a href={`#${d.id}`} className="div-card" style={{ '--div-accent': c.accent, '--div-light': c.light, '--div-mid': c.mid }}>
                    <div className="div-card-illustration">
                      {OVERVIEW_SVG[d.id]}
                    </div>
                    <div className="div-card-body">
                      <div className="div-card-top">
                        <span className="div-card-num" style={{ color: c.text, background: c.light, border: `1px solid ${c.mid}` }}>Division {d.num}</span>
                        {d.badge && <span className="div-card-badge" style={{ background: c.accent }}>NEW</span>}
                      </div>
                      <h3 className="div-card-name">{d.label}</h3>
                      <p className="div-card-tag" style={{ color: c.text }}>{d.tag}</p>
                      <p className="div-card-summary">{d.summary}</p>
                      <span className="div-card-cta" style={{ color: c.accent }}>
                        Explore {d.label} <span className="div-card-arrow">→</span>
                      </span>
                    </div>
                  </a>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── DEEP DIVE SECTIONS ── */}
      {DIVISIONS.map((div, idx) => {
        const c = DIV_COLORS[div.id];
        const reversed = idx % 2 !== 0;
        const sectionClass = `section${reversed ? ' section-gray' : ''}`;
        return (
          <section key={div.id} id={div.id} className={sectionClass}>
            <div className="container">
              <div className={`div-deepdive-grid${reversed ? ' div-deepdive-reverse' : ''}`}>

                {/* Text side */}
                <FadeIn className="div-deepdive-text">
                  <div className="div-deepdive-header">
                    <span className="div-deepdive-overline" style={{ color: c.text, background: c.light, border: `1px solid ${c.mid}` }}>
                      Division {div.num}
                    </span>
                    {div.badge && <span className="div-card-badge" style={{ background: c.accent }}>NEW</span>}
                  </div>
                  <h2 className="headline-lg" style={{ margin: '8px 0 4px' }}>{div.label}</h2>
                  <p className="tag-mono" style={{ color: c.accent, marginBottom: 16 }}>{div.tag}</p>
                  <p className="body-text" style={{ marginBottom: 20 }}>{div.desc}</p>

                  {/* Capabilities */}
                  <h3 className="div-section-subhead">Capabilities</h3>
                  <div className="cap-grid">
                    {div.capabilities.map(cap => (
                      <div key={cap.title} className="cap-card" style={{ '--cap-accent': c.accent, '--cap-light': c.light, '--cap-mid': c.mid }}>
                        <strong>{cap.title}</strong>
                        <p>{cap.desc}</p>
                      </div>
                    ))}
                  </div>

                  {/* Specs */}
                  <h3 className="div-section-subhead" style={{ marginTop: 28 }}>Technical Specifications</h3>
                  <div className="spec-table-wrap">
                    <table className="spec-table">
                      <tbody>
                        {div.specs.map(s => (
                          <tr key={s.k}>
                            <td className="spec-k">{s.k}</td>
                            <td className="spec-v">{s.v}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  {/* Sector tags */}
                  <div className="div-sectors">
                    {div.sectors.map(s => (
                      <span key={s} className="div-sector-tag" style={{ color: c.text, background: c.light, border: `1px solid ${c.mid}` }}>{s}</span>
                    ))}
                  </div>

                  <a href="/contact" className="btn btn-primary" style={{ marginTop: 28, background: c.accent, borderColor: c.accent }}>
                    Start a {div.label} project <ArrowRight size={15} />
                  </a>
                </FadeIn>

                {/* Visual side */}
                <FadeIn delay={2} className="div-deepdive-visual">
                  <div className="div-scene-wrap">
                    {SCENE_SVG[div.id]}
                  </div>
                </FadeIn>

              </div>
            </div>
          </section>
        );
      })}

      {/* ── BOTTOM CTA ── */}
      <section className="section section-gray">
        <div className="container">
          <FadeIn className="cta-banner" style={{ textAlign: 'center' }}>
            <p className="overline">Get In Touch</p>
            <h2 className="headline-lg" style={{ marginBottom: 12 }}>Discuss your requirements.</h2>
            <p className="section-sub" style={{ margin: '0 auto 28px' }}>
              Whether you have a full specification or just a concept, our team is happy
              to discuss scope, programme, and budget.
            </p>
            <div className="btn-group" style={{ justifyContent: 'center' }}>
              <a href="/contact" className="btn btn-primary btn-lg">Contact Us <ArrowRight size={16}/></a>
              <a href="/projects" className="btn btn-secondary btn-lg">View Projects</a>
            </div>
          </FadeIn>
        </div>
      </section>

      <style>{`
        /* ── Overview header ── */
        .div-overview-header { margin-bottom: 36px; }

        /* ── Overview card grid ── */
        .div-overview-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }
        .div-card {
          display: flex; flex-direction: column;
          border: 1.5px solid var(--border);
          border-top: 3px solid var(--div-accent);
          border-radius: var(--radius-lg);
          overflow: hidden; text-decoration: none; color: inherit;
          transition: transform 0.22s ease, box-shadow 0.22s ease, border-color 0.22s ease;
          background: #fff;
        }
        .div-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 12px 40px rgba(0,0,0,0.08);
        }
        .div-card-illustration {
          height: 200px; overflow: hidden;
          border-bottom: 1px solid var(--div-mid);
        }
        .div-card-body { padding: 24px 22px 28px; display: flex; flex-direction: column; gap: 6px; flex: 1; }
        .div-card-top { display: flex; align-items: center; gap: 8px; margin-bottom: 6px; }
        .div-card-num { font-size: 0.65rem; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; padding: 3px 10px; border-radius: 999px; }
        .div-card-badge { font-size: 0.58rem; font-weight: 800; color: #fff; padding: 3px 8px; border-radius: 4px; letter-spacing: 0.07em; text-transform: uppercase; }
        .div-card-name { font-family: var(--font-display); font-size: 1.65rem; font-weight: 800; color: var(--dark); line-height: 1.1; margin: 0; }
        .div-card-tag { font-size: 0.68rem; font-weight: 700; letter-spacing: 0.07em; text-transform: uppercase; margin: 0; line-height: 1.5; }
        .div-card-summary { font-size: 0.9rem; color: var(--muted); line-height: 1.65; margin: 6px 0 0; flex: 1; }
        .div-card-cta { font-size: 0.88rem; font-weight: 700; margin-top: 18px; display: inline-flex; align-items: center; gap: 4px; }
        .div-card-arrow { transition: transform 0.2s; }
        .div-card:hover .div-card-arrow { transform: translateX(4px); }

        /* ── Deep-dive grid ── */
        .div-deepdive-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 72px;
          align-items: start;
        }
        .div-deepdive-reverse { direction: rtl; }
        .div-deepdive-reverse > * { direction: ltr; }

        .div-deepdive-header { display: flex; align-items: center; gap: 10px; margin-bottom: 4px; }
        .div-deepdive-overline { font-size: 0.65rem; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; padding: 4px 12px; border-radius: 999px; }
        .div-section-subhead { font-family: var(--font-display); font-size: 0.8rem; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; color: var(--muted); margin: 0 0 14px; }

        /* ── Capabilities grid ── */
        .cap-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 10px; }
        .cap-card {
          padding: 14px 16px; border-radius: 8px;
          border: 1px solid var(--cap-mid);
          background: var(--cap-light);
          transition: box-shadow 0.18s;
        }
        .cap-card:hover { box-shadow: 0 4px 12px rgba(0,0,0,0.06); }
        .cap-card strong { display: block; font-size: 0.88rem; font-weight: 700; color: var(--dark); margin-bottom: 4px; }
        .cap-card p { font-size: 0.8rem; color: var(--muted); margin: 0; line-height: 1.55; }

        /* ── Specs table ── */
        .spec-table-wrap { border: 1.5px solid var(--border); border-radius: 8px; overflow: hidden; background: #fff; }
        .spec-table { width: 100%; border-collapse: collapse; }
        .spec-table tr { border-bottom: 1px solid var(--border); }
        .spec-table tr:last-child { border-bottom: none; }
        .spec-k { font-size: 0.82rem; font-weight: 600; color: var(--dark); padding: 11px 16px; width: 42%; vertical-align: top; }
        .spec-v { font-size: 0.82rem; color: var(--muted); padding: 11px 16px; vertical-align: top; }

        /* ── Sector tags ── */
        .div-sectors { display: flex; flex-wrap: wrap; gap: 8px; margin-top: 20px; }
        .div-sector-tag { font-size: 0.72rem; font-weight: 600; padding: 4px 12px; border-radius: 999px; }

        /* ── Scene illustration ── */
        .div-deepdive-visual { display: flex; flex-direction: column; gap: 16px; position: sticky; top: 80px; }
        .div-scene-wrap {
          width: 100%; border-radius: var(--radius-lg);
          overflow: hidden;
          border: 1.5px solid var(--border);
          aspect-ratio: 560/380;
        }

        /* ── Responsive ── */
        @media (max-width: 1024px) {
          .div-deepdive-grid { gap: 48px; }
        }
        @media (max-width: 860px) {
          .div-overview-grid { grid-template-columns: 1fr; }
          .div-card-illustration { height: 160px; }
          .div-deepdive-grid { grid-template-columns: 1fr; gap: 36px; }
          .div-deepdive-reverse { direction: ltr; }
          .div-deepdive-visual { position: static; }
          .cap-grid { grid-template-columns: 1fr; }
        }
        @media (max-width: 600px) {
          .div-card-illustration { height: 140px; }
        }
      `}</style>
    </>
  );
}

import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Grid, List, ChevronRight, Images } from 'lucide-react';
import FadeIn from '../components/FadeIn';

/* ──────────────────────────────────────────────
   Work categories — translated from the folder
   listing in the shared drive. Photo counts are
   approximate and will be updated as media is
   uploaded. Placeholders shown until photos are
   linked.
────────────────────────────────────────────── */
const CATEGORIES = [
  {
    id: 'xray-rooms',
    num: '01',
    ar: 'غرف الاشعة',
    en: 'X-Ray Rooms',
    count: 74,
    division: 'wood',
    accent: '#D97706',
    light: '#FFFBEB',
    desc: 'Radiation-shielded room construction and custom joinery for medical imaging facilities.',
  },
  {
    id: 'reception-counters',
    num: '02',
    ar: 'كاونترات الاستقبال',
    en: 'Reception Counters',
    count: 70,
    division: 'wood',
    accent: '#D97706',
    light: '#FFFBEB',
    desc: 'Custom-built reception desks, counters, and front-of-house millwork for hospitality and commercial clients.',
  },
  {
    id: 'electrical-panels',
    num: '03',
    ar: 'لوحات الكهرباء',
    en: 'Electrical Panel Enclosures',
    count: 29,
    division: 'steel',
    accent: '#2563EB',
    light: '#EFF6FF',
    desc: 'Fabricated steel enclosures and housings for electrical distribution boards and control panels.',
  },
  {
    id: 'cafes-dining',
    num: '04',
    ar: 'المقاهي وجلسات الطعام',
    en: 'Cafés & Dining',
    count: 25,
    division: 'wood',
    accent: '#D97706',
    light: '#FFFBEB',
    desc: 'Full F&B interior fit-out, custom furniture, and architectural joinery for café and dining spaces.',
  },
  {
    id: 'radiation-doors',
    num: '05',
    ar: 'ابواب خشبية و عوازل اشعة',
    en: 'Wooden Doors & Radiation Shields',
    count: 116,
    division: 'wood',
    accent: '#D97706',
    light: '#FFFBEB',
    desc: 'Bespoke timber doors with integrated lead-lined radiation shielding for hospitals and diagnostic centres.',
  },
  {
    id: 'corian-sinks',
    num: '06',
    ar: 'الكوريان و المغاسل',
    en: 'Corian & Sinks',
    count: 25,
    division: 'wood',
    accent: '#D97706',
    light: '#FFFBEB',
    desc: 'Solid surface Corian fabrication, vanity units, and custom sink installations for hospitality and healthcare.',
  },
  {
    id: 'woodwork',
    num: '07',
    ar: 'الاعمال الخشبية',
    en: 'Wood Works',
    count: 107,
    division: 'wood',
    accent: '#D97706',
    light: '#FFFBEB',
    desc: 'Architectural woodwork, panelling, cladding, built-ins, and general carpentry across all project types.',
  },
  {
    id: 'mechanical',
    num: '08',
    ar: 'الانظمة الميكانيكية',
    en: 'Mechanical Systems',
    count: 11,
    division: 'steel',
    accent: '#2563EB',
    light: '#EFF6FF',
    desc: 'Structural steel supports, equipment plinths, and fabricated components for mechanical and HVAC installations.',
  },
  {
    id: 'unclassified',
    num: '09',
    ar: 'غير مصنف',
    en: 'General Works',
    count: 117,
    division: 'other',
    accent: '#475569',
    light: '#F1F5F9',
    desc: 'Miscellaneous site work and specialty items spanning multiple material disciplines.',
  },
];

const TOTAL_PHOTOS = CATEGORIES.reduce((s, c) => s + c.count, 0);

// Generate placeholder grid for a category — N placeholder tiles
function PhotoGrid({ category, count = 12 }) {
  const tiles = Array.from({ length: Math.min(count, category.count) });
  return (
    <div className="ow-photo-grid">
      {tiles.map((_, i) => (
        <div
          key={i}
          className="ow-photo-tile"
          style={{ background: category.light, borderColor: category.accent + '33' }}
        >
          <span className="ow-photo-tile-icon" style={{ color: category.accent + '66' }}>
            <Images size={20} />
          </span>
          <span className="ow-photo-tile-label" style={{ color: category.accent }}>
            {category.en}
          </span>
        </div>
      ))}
      {category.count > count && (
        <div className="ow-photo-tile ow-photo-tile-more" style={{ background: category.accent, borderColor: category.accent }}>
          <span className="ow-photo-more-n">+{category.count - count}</span>
          <span className="ow-photo-more-lbl">more photos</span>
        </div>
      )}
    </div>
  );
}

export default function OurWork() {
  const [activeCategory, setActiveCategory] = useState(null);
  const [view, setView] = useState('grid'); // 'grid' | 'list'

  const activeCat = activeCategory ? CATEGORIES.find(c => c.id === activeCategory) : null;

  return (
    <>
      {/* ── PAGE HERO ── */}
      <section className="page-hero">
        <div className="container">
          <nav className="breadcrumb">
            <Link to="/">Home</Link><span>/</span><span>Our Work</span>
          </nav>
          <FadeIn>
            <p className="overline">Photo Gallery</p>
            <h1 className="headline-lg" style={{ marginBottom: 14 }}>Our Work</h1>
            <p className="section-sub">
              A visual record of EGC's fabrication and installation work across our divisions — from
              structural steel and architectural joinery to lead sheet and specialty fit-outs.
              Browse by category below.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ── STATS ── */}
      <div className="ow-stats-bar">
        <div className="container">
          <div className="ow-stats-inner">
            <div className="ow-stat">
              <span className="ow-stat-n">{TOTAL_PHOTOS}+</span>
              <span className="ow-stat-l">Photos in Library</span>
            </div>
            <div className="ow-stat-div" />
            <div className="ow-stat">
              <span className="ow-stat-n">{CATEGORIES.length}</span>
              <span className="ow-stat-l">Work Categories</span>
            </div>
            <div className="ow-stat-div" />
            <div className="ow-stat">
              <span className="ow-stat-n">3</span>
              <span className="ow-stat-l">Divisions</span>
            </div>
            <div className="ow-stat-div" />
            <div className="ow-stat">
              <span className="ow-stat-n">KSA</span>
              <span className="ow-stat-l">Project Locations</span>
            </div>
          </div>
        </div>
      </div>

      {/* ── NOTICE BANNER ── */}
      <div className="ow-notice">
        <div className="container">
          <div className="ow-notice-inner">
            <span className="ow-notice-icon">📷</span>
            <p>
              Photos are currently being organised by project and category. Placeholders are shown below — full
              photo content will be published shortly. For specific project images, please contact us directly.
            </p>
          </div>
        </div>
      </div>

      {/* ── CATEGORY OVERVIEW ── */}
      <section className="section">
        <div className="container">

          <FadeIn className="ow-toolbar">
            <div>
              <p className="overline">Browse by Category</p>
              <h2 className="headline-md" style={{ marginBottom: 0 }}>
                {activeCat ? activeCat.en : 'All Categories'}
              </h2>
            </div>
            <div className="ow-view-toggle">
              <button
                className={`ow-view-btn${view === 'grid' ? ' active' : ''}`}
                onClick={() => setView('grid')}
                aria-label="Grid view"
              >
                <Grid size={15} />
              </button>
              <button
                className={`ow-view-btn${view === 'list' ? ' active' : ''}`}
                onClick={() => setView('list')}
                aria-label="List view"
              >
                <List size={15} />
              </button>
            </div>
          </FadeIn>

          {/* Category chips */}
          <FadeIn className="chip-row" style={{ marginBottom: 40 }}>
            <button
              className={`chip${!activeCategory ? ' active' : ''}`}
              onClick={() => setActiveCategory(null)}
            >
              All
            </button>
            {CATEGORIES.map(c => (
              <button
                key={c.id}
                className={`chip${activeCategory === c.id ? ' active' : ''}`}
                onClick={() => setActiveCategory(activeCategory === c.id ? null : c.id)}
                style={activeCategory === c.id ? { background: c.accent, borderColor: c.accent } : {}}
              >
                {c.num} · {c.en}
              </button>
            ))}
          </FadeIn>

          {/* ── GRID VIEW ── */}
          {view === 'grid' && (
            <div className="ow-cat-grid">
              {(activeCat ? [activeCat] : CATEGORIES).map((cat, i) => (
                <FadeIn delay={(i % 3) + 1} key={cat.id}>
                  <div
                    className="ow-cat-card"
                    style={{ '--cat-accent': cat.accent, '--cat-light': cat.light }}
                  >
                    {/* Card header */}
                    <div className="ow-cat-card-head">
                      <div className="ow-cat-num-badge">{cat.num}</div>
                      <div className="ow-cat-name-block">
                        <span className="ow-cat-ar">{cat.ar}</span>
                        <h3 className="ow-cat-en">{cat.en}</h3>
                      </div>
                      <div className="ow-cat-count">
                        <span className="ow-cat-count-n">{cat.count}</span>
                        <span className="ow-cat-count-l">photos</span>
                      </div>
                    </div>

                    <p className="ow-cat-desc">{cat.desc}</p>

                    {/* Photo placeholders — show 6 per card in overview */}
                    <div className="ow-mini-grid">
                      {Array.from({ length: Math.min(6, cat.count) }).map((_, j) => (
                        <div
                          key={j}
                          className="ow-mini-tile"
                          style={{ background: cat.light, borderColor: cat.accent + '2A' }}
                        >
                          <Images size={14} style={{ color: cat.accent + '88' }} />
                        </div>
                      ))}
                    </div>

                    <div className="ow-cat-footer">
                      <button
                        className="ow-cat-browse-btn"
                        onClick={() => setActiveCategory(cat.id === activeCategory ? null : cat.id)}
                        style={{ color: cat.accent }}
                      >
                        Browse {cat.count} photos <ChevronRight size={13} />
                      </button>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          )}

          {/* ── LIST VIEW ── */}
          {view === 'list' && (
            <div className="ow-cat-list">
              {(activeCat ? [activeCat] : CATEGORIES).map((cat, i) => (
                <FadeIn delay={i + 1} key={cat.id}>
                  <div
                    className="ow-list-row"
                    style={{ '--cat-accent': cat.accent }}
                  >
                    <div className="ow-list-bar" />
                    <div className="ow-list-num">{cat.num}</div>
                    <div className="ow-list-names">
                      <span className="ow-list-ar">{cat.ar}</span>
                      <span className="ow-list-en">{cat.en}</span>
                    </div>
                    <p className="ow-list-desc">{cat.desc}</p>
                    <div className="ow-list-count">
                      <span className="ow-list-count-n">{cat.count}</span>
                      <span className="ow-list-count-l">photos</span>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          )}

          {/* ── EXPANDED PHOTO VIEW (when a category is selected) ── */}
          {activeCat && (
            <FadeIn>
              <div className="ow-expanded-section">
                <div className="ow-expanded-head">
                  <div>
                    <p className="overline" style={{ color: activeCat.accent }}>{activeCat.num} · {activeCat.ar}</p>
                    <h2 className="headline-md" style={{ marginBottom: 6 }}>{activeCat.en}</h2>
                    <p className="body-sm">{activeCat.count} photos · {activeCat.desc}</p>
                  </div>
                </div>
                <PhotoGrid category={activeCat} count={18} />
              </div>
            </FadeIn>
          )}

        </div>
      </section>

      {/* ── CTA ── */}
      <section className="section section-gray">
        <div className="container">
          <FadeIn className="cta-banner">
            <p className="overline">See More</p>
            <h2 className="headline-lg" style={{ marginBottom: 12 }}>Interested in our project portfolio?</h2>
            <p className="section-sub" style={{ margin: '0 auto 28px' }}>
              Our Projects page lists individual delivered projects by city and division. For a specific
              site visit or detailed scope discussion, reach out to our team.
            </p>
            <div className="btn-group" style={{ justifyContent: 'center' }}>
              <Link to="/projects" className="btn btn-primary btn-lg">View Projects</Link>
              <Link to="/contact" className="btn btn-secondary btn-lg">Contact Us</Link>
            </div>
          </FadeIn>
        </div>
      </section>

      <style>{`
        /* ── Stats bar ── */
        .ow-stats-bar { background: var(--dark); }
        .ow-stats-inner { display: flex; align-items: stretch; flex-wrap: wrap; }
        .ow-stat { flex: 1; min-width: 120px; display: flex; flex-direction: column; align-items: center; justify-content: center; padding: 28px 16px; text-align: center; }
        .ow-stat-div { width: 1px; background: rgba(255,255,255,0.1); margin: 14px 0; flex-shrink: 0; }
        .ow-stat-n { font-family: var(--font-display); font-size: 2rem; font-weight: 800; color: #fff; line-height: 1; margin-bottom: 5px; display: block; }
        .ow-stat-l { font-size: 0.68rem; font-weight: 500; color: rgba(255,255,255,0.45); letter-spacing: 0.07em; text-transform: uppercase; }

        /* ── Notice ── */
        .ow-notice { background: #F0F9FF; border-bottom: 1px solid #BAE6FD; }
        .ow-notice-inner { display: flex; align-items: flex-start; gap: 10px; padding: 12px 0; }
        .ow-notice-icon { font-size: 1rem; flex-shrink: 0; margin-top: 1px; }
        .ow-notice p { font-size: 0.82rem; color: #0C4A6E; line-height: 1.55; margin: 0; }

        /* ── Toolbar ── */
        .ow-toolbar { display: flex; justify-content: space-between; align-items: flex-end; margin-bottom: 20px; gap: 16px; flex-wrap: wrap; }
        .ow-view-toggle { display: flex; gap: 4px; }
        .ow-view-btn {
          width: 36px; height: 36px; border-radius: 8px;
          display: flex; align-items: center; justify-content: center;
          border: 1.5px solid var(--border); background: #fff;
          color: var(--muted); cursor: pointer;
          transition: all 0.15s ease;
        }
        .ow-view-btn:hover { border-color: var(--blue); color: var(--blue); }
        .ow-view-btn.active { background: var(--dark); border-color: var(--dark); color: #fff; }

        /* ── Category card grid ── */
        .ow-cat-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; }
        .ow-cat-card {
          background: #fff; border: 1.5px solid var(--border);
          border-radius: var(--radius-lg); overflow: hidden;
          display: flex; flex-direction: column;
          transition: transform 0.22s ease, box-shadow 0.22s ease, border-color 0.22s ease;
        }
        .ow-cat-card:hover { transform: translateY(-3px); box-shadow: 0 10px 32px rgba(0,0,0,0.07); border-color: var(--cat-accent); }
        .ow-cat-card-head {
          display: flex; align-items: center; gap: 12px;
          padding: 18px 18px 14px;
          border-bottom: 1px solid var(--border);
        }
        .ow-cat-num-badge {
          font-family: 'Courier New', monospace; font-size: 0.72rem; font-weight: 800;
          color: var(--cat-accent); background: var(--cat-light);
          border: 1px solid; border-color: var(--cat-accent);
          width: 32px; height: 32px; border-radius: 6px;
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0;
        }
        .ow-cat-name-block { flex: 1; min-width: 0; }
        .ow-cat-ar { display: block; font-size: 0.75rem; color: var(--muted); direction: rtl; text-align: left; margin-bottom: 2px; }
        .ow-cat-en { font-family: var(--font-display); font-size: 0.95rem; font-weight: 700; color: var(--dark); margin: 0; line-height: 1.2; }
        .ow-cat-count { display: flex; flex-direction: column; align-items: center; flex-shrink: 0; }
        .ow-cat-count-n { font-family: var(--font-display); font-size: 1.3rem; font-weight: 800; color: var(--cat-accent); line-height: 1; }
        .ow-cat-count-l { font-size: 0.58rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.06em; color: var(--muted); }
        .ow-cat-desc { font-size: 0.82rem; color: var(--muted); line-height: 1.6; margin: 0; padding: 14px 18px; flex: 1; }

        /* Mini photo placeholders on card */
        .ow-mini-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 4px; padding: 0 12px 14px; }
        .ow-mini-tile {
          aspect-ratio: 4/3; border-radius: 6px; border: 1px solid;
          display: flex; align-items: center; justify-content: center;
        }
        .ow-cat-footer { padding: 12px 18px 16px; border-top: 1px solid var(--border); }
        .ow-cat-browse-btn {
          display: flex; align-items: center; gap: 4px;
          font-size: 0.82rem; font-weight: 700; cursor: pointer;
          background: none; border: none; padding: 0;
          transition: gap 0.15s;
        }
        .ow-cat-browse-btn:hover { gap: 8px; }

        /* ── List view ── */
        .ow-cat-list { display: flex; flex-direction: column; gap: 0; border: 1.5px solid var(--border); border-radius: var(--radius-lg); overflow: hidden; }
        .ow-list-row {
          display: flex; align-items: center; gap: 16px;
          padding: 16px 20px;
          border-bottom: 1px solid var(--border);
          position: relative; overflow: hidden;
          transition: background 0.15s;
        }
        .ow-list-row:last-child { border-bottom: none; }
        .ow-list-row:hover { background: var(--gray-bg); }
        .ow-list-bar { position: absolute; left: 0; top: 0; bottom: 0; width: 3px; background: var(--cat-accent); }
        .ow-list-num { font-family: 'Courier New', monospace; font-size: 0.7rem; font-weight: 800; color: var(--muted); flex-shrink: 0; width: 20px; padding-left: 8px; }
        .ow-list-names { display: flex; flex-direction: column; gap: 2px; flex-shrink: 0; width: 200px; }
        .ow-list-ar { font-size: 0.75rem; color: var(--muted); direction: rtl; text-align: left; }
        .ow-list-en { font-family: var(--font-display); font-size: 0.92rem; font-weight: 700; color: var(--dark); }
        .ow-list-desc { flex: 1; font-size: 0.82rem; color: var(--muted); line-height: 1.55; margin: 0; min-width: 0; }
        .ow-list-count { display: flex; flex-direction: column; align-items: center; flex-shrink: 0; text-align: center; }
        .ow-list-count-n { font-family: var(--font-display); font-size: 1.2rem; font-weight: 800; color: var(--cat-accent); line-height: 1; }
        .ow-list-count-l { font-size: 0.58rem; color: var(--muted); font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em; }

        /* ── Expanded photo view ── */
        .ow-expanded-section {
          margin-top: 40px;
          border: 1.5px solid var(--border);
          border-radius: var(--radius-lg);
          overflow: hidden;
        }
        .ow-expanded-head {
          padding: 24px 28px;
          background: var(--gray-bg);
          border-bottom: 1.5px solid var(--border);
        }

        /* Photo placeholder grid */
        .ow-photo-grid {
          display: grid;
          grid-template-columns: repeat(6, 1fr);
          gap: 0;
        }
        .ow-photo-tile {
          aspect-ratio: 4/3;
          display: flex; flex-direction: column;
          align-items: center; justify-content: center;
          gap: 5px; border: 0.5px solid;
          cursor: pointer;
          transition: opacity 0.15s;
        }
        .ow-photo-tile:hover { opacity: 0.8; }
        .ow-photo-tile-icon { flex-shrink: 0; }
        .ow-photo-tile-label { font-size: 0.55rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.06em; text-align: center; padding: 0 4px; opacity: 0.7; }
        .ow-photo-tile-more {
          display: flex; flex-direction: column; align-items: center; justify-content: center;
          gap: 3px;
        }
        .ow-photo-more-n { font-family: var(--font-display); font-size: 1.3rem; font-weight: 800; color: #fff; line-height: 1; }
        .ow-photo-more-lbl { font-size: 0.6rem; color: rgba(255,255,255,0.75); font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em; }

        /* ── Responsive ── */
        @media (max-width: 1024px) { .ow-cat-grid { grid-template-columns: repeat(2, 1fr); } }
        @media (max-width: 860px) {
          .ow-photo-grid { grid-template-columns: repeat(4, 1fr); }
          .ow-list-desc { display: none; }
          .ow-list-names { width: 160px; }
        }
        @media (max-width: 600px) {
          .ow-cat-grid { grid-template-columns: 1fr; }
          .ow-photo-grid { grid-template-columns: repeat(3, 1fr); }
          .ow-stat-div { display: none; }
          .ow-stat { flex: 0 0 50%; }
        }
      `}</style>
    </>
  );
}

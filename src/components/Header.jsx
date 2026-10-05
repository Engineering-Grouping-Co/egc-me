import { useCallback, useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowUpRight, ChevronDown, Menu, X } from 'lucide-react';
import { useContent } from '../content';
import { useLocalePath } from '../i18n/LocaleContext';
import LocaleSwitcher from './LocaleSwitcher';
import Img from './Img';
import './Header.css';

/** `segment#hash` → locale path; absolute URLs pass through. */
function useResolve() {
  const lp = useLocalePath();
  return (href) => {
    const [segment, hash] = href.split('#');
    return `${lp(segment)}${hash ? `#${hash}` : ''}`;
  };
}

function MenuLink({ link, resolve, ui, onNavigate }) {
  const inner = (
    <>
      <span className="mega__link-title">
        {link.label}
        {link.soon && <span className="tag tag--soon">{ui.soon}</span>}
        {link.external && <ArrowUpRight size={14} aria-hidden="true" className="i-dir" />}
      </span>
      {link.desc && <span className="mega__link-desc">{link.desc}</span>}
    </>
  );
  return link.external ? (
    <a className="mega__link" href={link.href} target="_blank" rel="noreferrer">{inner}</a>
  ) : (
    <Link className="mega__link" to={resolve(link.href)} onClick={onNavigate}>{inner}</Link>
  );
}

export default function Header() {
  const lp = useLocalePath();
  const resolve = useResolve();
  const { pathname } = useLocation();
  const { NAV, UI, SITE } = useContent();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(null); // desktop mega menu id
  const [drawer, setDrawer] = useState(false);
  const [acc, setAcc] = useState(null); // mobile accordion id
  const closeTimer = useRef(null);
  const rootRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const onDown = (e) => {
      if (rootRef.current && !rootRef.current.contains(e.target)) setOpen(null);
    };
    const onKey = (e) => {
      if (e.key === 'Escape') {
        setOpen(null);
        setDrawer(false);
      }
    };
    document.addEventListener('pointerdown', onDown);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('pointerdown', onDown);
      document.removeEventListener('keydown', onKey);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = drawer ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [drawer]);

  const hoverOpen = useCallback((id, e) => {
    if (e.pointerType !== 'mouse') return;
    clearTimeout(closeTimer.current);
    setOpen(id);
  }, []);
  const hoverClose = useCallback((e) => {
    if (e.pointerType !== 'mouse') return;
    clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setOpen(null), 160);
  }, []);

  const bare = pathname.replace(/^\/ar(?=\/|$)/, '') || '/';
  const isActive = (item) => {
    const hrefs = item.href ? [item.href] : item.menu.groups.flatMap((g) => g.links.filter((l) => !l.external).map((l) => l.href));
    return hrefs.some((h) => {
      const seg = h.split('#')[0];
      return seg && bare.startsWith(`/${seg}`) && (seg !== 'about' || bare.startsWith('/about'));
    });
  };

  return (
    <header className="hdr" data-scrolled={scrolled} ref={rootRef}>
      <div className="hdr__bar wrap">
        <Link to={lp('')} className="hdr__logo" aria-label={`${SITE.name} — ${UI.home}`}>
          <img src="/logo-md.webp" width="440" height="104" alt={SITE.name} />
        </Link>

        <nav className="hdr__nav" aria-label={UI.primaryNav}>
          <ul>
            {NAV.map((item) => (
              <li
                key={item.id}
                className="hdr__item"
                onPointerEnter={item.menu ? (e) => hoverOpen(item.id, e) : undefined}
                onPointerLeave={item.menu ? hoverClose : undefined}
              >
                {item.menu ? (
                  <>
                    <button
                      type="button"
                      className="hdr__link"
                      aria-expanded={open === item.id}
                      aria-controls={`mega-${item.id}`}
                      data-active={isActive(item)}
                      onClick={() => setOpen(open === item.id ? null : item.id)}
                    >
                      {item.label}
                      <ChevronDown size={16} aria-hidden="true" className="hdr__chev" />
                    </button>
                    <div className="mega" id={`mega-${item.id}`} hidden={open !== item.id}>
                      <div className="mega__inner wrap">
                        <div className="mega__intro">
                          <p className="mega__intro-title">{item.menu.intro.title}</p>
                          <p>{item.menu.intro.text}</p>
                          <Link className="tlink" to={resolve(item.menu.intro.href)} onClick={() => setOpen(null)}>
                            {item.menu.intro.cta}
                          </Link>
                        </div>
                        <div className="mega__groups">
                          {item.menu.groups.map((g) => (
                            <div className="mega__group" key={g.title}>
                              <p className="mega__group-title">{g.title}</p>
                              <ul>
                                {g.links.map((l) => (
                                  <li key={l.href + l.label}>
                                    <MenuLink link={l} resolve={resolve} ui={UI} onNavigate={() => setOpen(null)} />
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                        {item.menu.feature && (
                          <Link className="mega__feature frame" to={resolve(item.menu.feature.href)} onClick={() => setOpen(null)}>
                            <Img name={item.menu.feature.image} alt={item.menu.feature.alt} sizes="280px" />
                            <span>{item.menu.feature.title}</span>
                          </Link>
                        )}
                      </div>
                    </div>
                  </>
                ) : (
                  <Link className="hdr__link" to={resolve(item.href)} data-active={isActive(item)}>
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>

        <div className="hdr__tools">
          <LocaleSwitcher />
          <Link to={lp('contact')} className="btn btn--primary btn--sm hdr__cta">{UI.contactUs}</Link>
          <button
            type="button"
            className="hdr__burger"
            aria-label={drawer ? UI.menuClose : UI.menuOpen}
            aria-expanded={drawer}
            aria-controls="drawer"
            onClick={() => setDrawer((v) => !v)}
          >
            {drawer ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <div className="drawer" id="drawer" hidden={!drawer}>
        <div className="drawer__inner">
          {NAV.map((item) =>
            item.menu ? (
              <div className="drawer__acc" key={item.id}>
                <button type="button" className="drawer__head" aria-expanded={acc === item.id} onClick={() => setAcc(acc === item.id ? null : item.id)}>
                  {item.label}
                  <ChevronDown size={18} aria-hidden="true" className="hdr__chev" />
                </button>
                <div className="drawer__panel" hidden={acc !== item.id}>
                  {item.menu.groups.map((g) => (
                    <div key={g.title}>
                      <p className="mega__group-title">{g.title}</p>
                      <ul>
                        {g.links.map((l) => (
                          <li key={l.href + l.label}>
                            <MenuLink link={l} resolve={resolve} ui={UI} onNavigate={() => setDrawer(false)} />
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <Link key={item.id} className="drawer__head drawer__head--link" to={resolve(item.href)} onClick={() => setDrawer(false)}>
                {item.label}
              </Link>
            ),
          )}
          <div className="drawer__foot">
            <Link to={lp('contact')} className="btn btn--primary btn--block" onClick={() => setDrawer(false)}>{UI.contactUs}</Link>
          </div>
        </div>
      </div>
    </header>
  );
}

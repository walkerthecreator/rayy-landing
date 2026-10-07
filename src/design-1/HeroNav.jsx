import { useEffect, useState } from 'react';
import Icon from '../components/Icon';
import { LANDING_ICONS } from './icons';
import { GET_RAYY_URL, HOME_URL, MAIN_NAV } from './content';
import logo from '../assets/landing/logo-white.png';

// Top bar shared by both hero variants. Desktop: centred links. Mobile: menu button + drop-down sheet.
export default function HeroNav() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return undefined;
    const onKey = (e) => { if (e.key === 'Escape') setOpen(false); };
    const onTapOutside = (e) => { if (!e.target.closest('.l-topbar')) setOpen(false); };
    document.addEventListener('keydown', onKey);
    document.addEventListener('pointerdown', onTapOutside);
    return () => {
      document.removeEventListener('keydown', onKey);
      document.removeEventListener('pointerdown', onTapOutside);
    };
  }, [open]);

  return (
    <header className={`l-topbar${open ? ' is-open' : ''}`}>
      <div className="l-wrap l-topbar-inner">
        <a href={HOME_URL} aria-label="Rayy home" className="l-topbar-logo">
          <img src={logo} alt="Rayy" />
        </a>
        <nav aria-label="Main" className="l-topbar-nav">
          {MAIN_NAV.map((link) => (
            <a key={link.href} href={link.href}>{link.label}</a>
          ))}
        </nav>
        <a href={GET_RAYY_URL} className="l-btn l-btn-white l-btn-sm l-topbar-cta">
          Get Rayy <Icon className="l-icon" paths={LANDING_ICONS.arrowUpRight} />
        </a>
        <button
          type="button"
          className="l-menu-btn"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((v) => !v)}
        >
          <Icon className="l-icon l-icon-22" paths={open ? LANDING_ICONS.close : LANDING_ICONS.menu} />
        </button>
      </div>
      <nav id="mobile-menu" aria-label="Main" className="l-mobile-menu" hidden={!open}>
        {MAIN_NAV.map((link) => (
          <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
            {link.label}
            <Icon className="l-icon" paths={LANDING_ICONS.arrowRight} />
          </a>
        ))}
        <a href={GET_RAYY_URL} className="l-btn l-btn-deep l-btn-lg l-mobile-menu-cta">
          Get the Rayy app <Icon className="l-icon" paths={LANDING_ICONS.arrowUpRight} />
        </a>
      </nav>
    </header>
  );
}

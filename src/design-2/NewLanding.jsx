import { useEffect, useState } from 'react';
import Icon from '../components/Icon';
import VariantSelector from '../components/VariantSelector';
import {
  EXPERIENCES, FOOTER_LINKS, GET_RAYY_URL, GROOMING_URL, HOME_URL, ICONS, MAIN_NAV, OCCASIONS,
  PROFESSIONALS_URL, QUICK_ACTIONS, SEARCH_URL, SERVICES,
} from './content';
import hero from '../assets/new/hero.webp';
import grooming from '../assets/new/grooming.webp';
import logoWhite from '../assets/landing/logo-white.png';
import './new.css';

// Pill button from the asset pack: label + arrow disc. `as` is "a" (link) or "button".
function Btn({ variant = 'burgundy', size, href, children, className = '', arrow = 'arrowRight', ...rest }) {
  const cls = `n-btn n-btn-${variant}${size ? ` n-btn-${size}` : ''} ${className}`;
  const body = (
    <>
      <span className="n-btn-label">{children}</span>
      <span className="n-btn-disc"><Icon className="n-icon" paths={ICONS[arrow]} /></span>
    </>
  );
  return href
    ? <a href={href} className={cls} {...rest}>{body}</a>
    : <button type="button" className={cls} {...rest}>{body}</button>;
}

function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return undefined;
    const onKey = (e) => { if (e.key === 'Escape') setOpen(false); };
    const onTapOutside = (e) => { if (!e.target.closest('.n-topbar')) setOpen(false); };
    document.addEventListener('keydown', onKey);
    document.addEventListener('pointerdown', onTapOutside);
    return () => {
      document.removeEventListener('keydown', onKey);
      document.removeEventListener('pointerdown', onTapOutside);
    };
  }, [open]);

  return (
    <header className={`n-topbar${open ? ' is-open' : ''}`}>
      <div className="n-wrap n-topbar-inner">
        <a href={HOME_URL} aria-label="Rayy home" className="n-topbar-logo">
          <img src={logoWhite} alt="Rayy" />
        </a>
        <nav aria-label="Main" className="n-topbar-nav">
          {MAIN_NAV.map((link) => <a key={link.href} href={link.href}>{link.label}</a>)}
        </nav>
        <VariantSelector variant={2} />
        <a href={GET_RAYY_URL} className="n-chip n-topbar-cta">
          Get Rayy <Icon className="n-icon" paths={ICONS.arrowUpRight} />
        </a>
        <button
          type="button"
          className="n-menu-btn"
          aria-expanded={open}
          aria-controls="n-mobile-menu"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((v) => !v)}
        >
          <Icon className="n-icon n-icon-22" paths={open ? ICONS.close : ICONS.menu} />
        </button>
      </div>
      <nav id="n-mobile-menu" aria-label="Main" className="n-mobile-menu" hidden={!open}>
        {MAIN_NAV.map((link) => (
          <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
            {link.label}
            <Icon className="n-icon" paths={ICONS.arrowRight} />
          </a>
        ))}
        <Btn variant="emerald" href={GET_RAYY_URL} arrow="arrowUpRight" className="n-mobile-menu-cta">
          Get the Rayy app
        </Btn>
      </nav>
    </header>
  );
}

// Desktop: full 3:2 frame anchored right, copy over the empty left 35%.
// Mobile: uncropped 3:2 image, copy below on ivory.
function Hero() {
  return (
    <section aria-labelledby="n-hero-title" className="n-hero">
      <Header />
      <div className="n-hero-stage">
        <div className="n-hero-media">
          <img src={hero} alt="A man in an emerald shirt and a woman in a cobalt blazer, styled for an evening out" />
        </div>
        <div className="n-wrap n-hero-copy-wrap">
          <div className="n-hero-copy">
            <span className="n-eyebrow">Beauty · Grooming · Style</span>
            <h1 id="n-hero-title">Your next look, <em>sorted.</em></h1>
            <p>Beauty, grooming and a little guidance. Real experts, live, made for you.</p>
            <div className="n-hero-ctas">
              {/* Same action as "Help me choose" on the live page; the planner isn't built in this preview. */}
              <Btn variant="burgundy" size="lg">Get Started</Btn>
              <a href={SEARCH_URL} className="n-hero-link">
                Browse all services <Icon className="n-icon" paths={ICONS.arrowRight} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function QuickActions() {
  return (
    <nav aria-label="Start with what you need" className="n-wrap n-quick">
      {QUICK_ACTIONS.map((a) => (
        <Btn key={a.label} variant={a.variant} href={a.href} className="n-quick-btn">{a.label}</Btn>
      ))}
    </nav>
  );
}

function ReturnBanner() {
  return (
    <section aria-label="Continue with Rayy" className="n-wrap n-return">
      <div className="n-return-card">
        <span className="n-return-icon"><Icon className="n-icon n-icon-20" paths={ICONS.heart} /></span>
        <div className="n-return-text">
          <span className="n-kicker">Welcome back</span>
          <span className="n-return-line">
            Your picks are waiting. <span>Continue your choices from this device.</span>
          </span>
        </div>
        <Btn variant="emerald" size="md">Continue</Btn>
      </div>
    </section>
  );
}

function SectionHead({ id, kicker, title, link }) {
  return (
    <div className="n-section-head">
      <div className="n-section-title">
        <span className="n-kicker">{kicker}</span>
        <h2 id={id} className="n-h2">{title}</h2>
      </div>
      {link && (
        <a href={link.href} className="n-text-link">
          {link.label} <Icon className="n-icon" paths={ICONS.arrowRight} />
        </a>
      )}
    </div>
  );
}

function ServiceSearch() {
  return (
    <section aria-labelledby="n-search-title" className="n-wrap n-section">
      <div className="n-search">
        <div className="n-search-head">
          <h2 id="n-search-title" className="n-h2">Know what you need?</h2>
          <p>Search for a service near you.</p>
        </div>
        <form action={SEARCH_URL} method="get" className="n-search-form">
          <label className="n-field n-field-service">
            <Icon className="n-icon n-icon-20" paths={ICONS.search} />
            <span className="n-field-body">
              <span className="n-field-label">Service</span>
              <input name="query" type="search" maxLength={100} placeholder="Haircut, draping, mehendi…" />
            </span>
          </label>
          <span className="n-field-sep" aria-hidden="true" />
          <label className="n-field n-field-area">
            <Icon className="n-icon n-icon-20" paths={ICONS.mapPin} />
            <span className="n-field-body">
              <span className="n-field-label">Area · optional</span>
              <input name="area" maxLength={80} placeholder="e.g. Indiranagar" />
            </span>
          </label>
          <span className="n-field-sep" aria-hidden="true" />
          <label className="n-field n-field-city">
            <span className="n-field-body">
              <span className="n-field-label">City</span>
              <input name="city" maxLength={60} placeholder="Bengaluru" />
            </span>
          </label>
          <button type="submit" className="n-btn n-btn-burgundy n-search-submit">
            <span className="n-btn-label">Search</span>
            <span className="n-btn-disc"><Icon className="n-icon" paths={ICONS.arrowRight} /></span>
          </button>
        </form>
        <div aria-label="Browse services" className="n-category-grid">
          {SERVICES.map((s) => (
            <a key={s.query} href={`${SEARCH_URL}?query=${s.query}`} className={`n-category n-tone-${s.tone}`}>
              <span className="n-category-icon"><Icon className="n-icon n-icon-24" paths={s.icon} /></span>
              <span className="n-category-label">{s.label}</span>
            </a>
          ))}
        </div>
      </div>

      {/* Grooming feature, below the category grid. */}
      <div className="n-feature">
        <div className="n-feature-media">
          <img src={grooming} alt="Man in an emerald shirt against a cobalt backdrop" />
        </div>
        <div className="n-feature-copy">
          <span className="n-kicker">Grooming</span>
          <h3 className="n-h3">Groom smarter.</h3>
          <p>Beard, brows, skin and hair, from professionals who get it.</p>
          <Btn variant="cobalt" href={GROOMING_URL}>Explore Grooming</Btn>
        </div>
      </div>
    </section>
  );
}

function Occasions() {
  return (
    <section aria-labelledby="n-occasions-title" className="n-wrap n-section">
      <SectionHead
        id="n-occasions-title"
        kicker="Occasions"
        title="Every day. Big days."
        link={{ href: SEARCH_URL, label: 'Browse all services' }}
      />
      <div className="n-occasion-grid">
        {OCCASIONS.map((o) => (
          <article key={o.title} className="n-occasion">
            <img src={o.img} alt={o.alt} />
            <div className="n-occasion-body">
              <h3>{o.title}</h3>
              <p>{o.sub}</p>
              <Btn variant={o.variant} size="md" href={o.href}>{o.cta}</Btn>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function Experiences() {
  return (
    <section aria-labelledby="n-experiences-title" className="n-wrap n-section">
      <SectionHead id="n-experiences-title" kicker="Curated experiences" title="A little know-how. Good company." />
      <div className="n-experience-grid">
        {EXPERIENCES.map((x) => (
          <article key={x.title} className="n-experience">
            <img src={x.img} alt={x.alt} />
            <div className="n-experience-body">
              <h3>{x.title}</h3>
              <p>{x.sub}</p>
              <Btn variant={x.variant} size="md" href={x.href}>{x.cta}</Btn>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function Professionals() {
  return (
    <section className="n-wrap n-section">
      <div className="n-pros">
        <div className="n-pros-copy">
          <span className="n-kicker n-kicker-ivory">For professionals</span>
          <h2 className="n-h2 n-h2-lg">Your expertise. <em>More possibilities.</em></h2>
          <p>For salons, makeup artists, stylists and grooming professionals. Students and alumni are welcome to enquire.</p>
        </div>
        <Btn variant="ivory" size="lg" href={PROFESSIONALS_URL}>Explore For Professionals</Btn>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="n-footer">
      <div className="n-wrap n-footer-inner">
        <div className="n-footer-top">
          <div className="n-footer-brand">
            <a href={HOME_URL} aria-label="Rayy home"><img src={logoWhite} alt="Rayy" /></a>
            <p>Have it your Rayy.</p>
          </div>
          <nav aria-label="Footer" className="n-footer-nav">
            {FOOTER_LINKS.map((link, i) => (link
              ? <a key={link.href} href={link.href}>{link.label}</a>
              : <span key={`gap-${i}`} />))}
          </nav>
        </div>
        <div className="n-footer-bottom">
          <span>© 2026 Rayy.</span>
          <button type="button">Reduce motion</button>
          <button type="button" aria-haspopup="dialog">Manage my saved picks</button>
        </div>
      </div>
    </footer>
  );
}

// Mobile-only bar pinned to the bottom once the hero has scrolled away.
function MobileActionBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = document.querySelector('.n-hero');
    if (!el) return undefined;
    const observer = new IntersectionObserver(([entry]) => setVisible(!entry.isIntersecting), { threshold: 0.05 });
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div className={`n-actionbar${visible ? ' is-visible' : ''}`} inert={!visible}>
      <a href={SEARCH_URL} className="n-chip n-chip-ivory n-actionbar-btn">
        <Icon className="n-icon n-icon-18" paths={ICONS.search} /> Browse services
      </a>
      <a href={GET_RAYY_URL} className="n-chip n-chip-burgundy n-actionbar-btn">
        Get Rayy <Icon className="n-icon" paths={ICONS.arrowUpRight} />
      </a>
    </div>
  );
}

// /new: the asset-pack variant of the landing page. Same sections, links and actions as /landing-split.
export default function Design2() {
  useEffect(() => {
    document.title = 'design-2 | Rayy';
    const meta = document.createElement('meta');
    meta.name = 'theme-color';
    meta.content = '#08211A';
    document.head.appendChild(meta);
    return () => meta.remove();
  }, []);

  return (
    <div className="rn">
      <Hero />
      <main id="main">
        <QuickActions />
        <ReturnBanner />
        <Occasions />
        <ServiceSearch />
        <Experiences />
        <Professionals />
      </main>
      <Footer />
      <MobileActionBar />
    </div>
  );
}

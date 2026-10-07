import Icon from '../components/Icon';
import { LANDING_ICONS } from './icons';
import {
  FOOTER_LINKS, HOME_URL, OCCASIONS, PROFESSIONALS_URL, QUICK_START, SEARCH_URL, SERVICES, WORKSHOPS_URL,
} from './content';
import logo from '../assets/landing/logo.png';
import workshops from '../assets/landing/workshops.jpg';

const Arrow = ({ size }) => (
  <Icon className={`l-icon${size ? ` l-icon-${size}` : ''}`} paths={LANDING_ICONS.arrowRight} />
);

// Four cards that overlap the bottom of the hero.
export function QuickStart() {
  return (
    <nav aria-label="Start with what you need" className="l-wrap l-quick">
      {QUICK_START.map((card) => (
        <a key={card.title} href={card.href} className="l-quick-card">
          <span className="l-quick-img" style={{ background: card.tint }}>
            <img src={card.img} alt="" />
          </span>
          <span className="l-quick-text">
            <strong>{card.title}</strong>
            <small>{card.sub}</small>
          </span>
          <span className="l-quick-arrow"><Arrow /></span>
        </a>
      ))}
    </nav>
  );
}

export function ReturnBanner() {
  return (
    <section aria-label="Continue with Rayy" className="l-wrap l-return">
      <div className="l-return-card">
        <span className="l-return-icon"><Icon className="l-icon l-icon-20" paths={LANDING_ICONS.heart} /></span>
        <div className="l-return-text">
          <span className="l-kicker">Welcome back</span>
          <span className="l-return-line">
            Your picks are waiting. <span>Continue your choices from this device.</span>
          </span>
        </div>
        <button type="button" className="l-btn l-btn-deep l-btn-md">
          Continue <Arrow />
        </button>
      </div>
    </section>
  );
}

export function Occasions() {
  return (
    <section aria-labelledby="occasions-title" className="l-wrap l-section l-occasions">
      <div className="l-section-head">
        <div className="l-section-title">
          <span className="l-kicker">Occasions</span>
          <h2 id="occasions-title" className="l-h2">Every day. Big days.</h2>
        </div>
        <a href={SEARCH_URL} className="l-text-link">Browse all services <Arrow /></a>
      </div>
      <div className="l-occasion-grid">
        {OCCASIONS.map((o) => (
          <a
            key={o.title}
            href={o.href}
            className="l-occasion"
            style={{ background: `linear-gradient(160deg, ${o.from} 0%, ${o.to} 100%)` }}
          >
            <img src={o.img} alt="" />
            <span className="l-occasion-row">
              <span className="l-occasion-text">
                <strong>{o.title}</strong>
                <small>{o.sub}</small>
              </span>
              <span className="l-round-arrow"><Arrow /></span>
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}

export function ServiceSearch() {
  return (
    <section aria-labelledby="search-title" className="l-wrap l-section">
      <div className="l-search">
        <div className="l-search-head">
          <h2 id="search-title" className="l-h2">Know what you need?</h2>
          <p>Search for a service near you.</p>
        </div>
        <form action={SEARCH_URL} method="get" className="l-search-form">
          <label className="l-field l-field-service">
            <Icon className="l-icon l-icon-20" paths={LANDING_ICONS.search} />
            <span className="l-field-body">
              <span className="l-field-label">Service</span>
              <input name="query" type="search" maxLength={100} placeholder="Haircut, draping, mehendi…" />
            </span>
          </label>
          <span className="l-field-sep" aria-hidden="true" />
          <label className="l-field l-field-area">
            <Icon className="l-icon l-icon-20" paths={LANDING_ICONS.mapPin} />
            <span className="l-field-body">
              <span className="l-field-label">Area · optional</span>
              <input name="area" maxLength={80} placeholder="e.g. Indiranagar" />
            </span>
          </label>
          <span className="l-field-sep" aria-hidden="true" />
          <label className="l-field l-field-city">
            <span className="l-field-body">
              <span className="l-field-label">City</span>
              <input name="city" maxLength={60} placeholder="Bengaluru" />
            </span>
          </label>
          <button type="submit" className="l-btn l-btn-deep l-search-submit">
            Search <Arrow size={18} />
          </button>
        </form>
        <div aria-label="Browse services" className="l-service-grid">
          {SERVICES.map((s) => (
            <a
              key={s.query}
              href={`${SEARCH_URL}?query=${s.query}`}
              className="l-service"
              style={{ background: s.bg }}
            >
              <span className="l-service-icon" style={{ color: s.fg }}>
                <Icon className="l-icon l-icon-22" paths={s.icon} />
              </span>
              <span className="l-service-label">{s.label}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Workshops() {
  return (
    <section className="l-wrap l-section">
      <div className="l-workshops">
        <img src={workshops} alt="" />
        <div className="l-workshops-copy">
          <span className="l-kicker">Workshops &amp; community</span>
          <h2 className="l-h2 l-h2-sm">A little know-how. Good company.</h2>
          <p>Expert-led workshops and community experiences.</p>
          <a href={WORKSHOPS_URL} className="l-btn l-btn-deep l-btn-md">
            Explore workshops <Icon className="l-icon" paths={LANDING_ICONS.arrowUpRight} />
          </a>
        </div>
      </div>
    </section>
  );
}

export function Professionals() {
  return (
    <section id="professionals" className="l-wrap l-pros-section">
      <div className="l-pros">
        <div className="l-pros-copy">
          <span className="l-kicker l-kicker-mint">For professionals</span>
          <h2 className="l-h2 l-h2-lg">Your expertise. <em>More possibilities.</em></h2>
          <p>For salons, makeup artists, stylists and grooming professionals. Students and alumni are welcome to enquire.</p>
        </div>
        <a href={PROFESSIONALS_URL} className="l-btn l-btn-white l-btn-xl">
          Explore For Professionals <Arrow size={18} />
        </a>
      </div>
    </section>
  );
}

export function LandingFooter() {
  return (
    <footer className="l-footer">
      <div className="l-wrap l-footer-inner">
        <div className="l-footer-top">
          <div className="l-footer-brand">
            <a href={HOME_URL} aria-label="Rayy home"><img src={logo} alt="Rayy" /></a>
            <p>Have it your Rayy.</p>
          </div>
          <nav aria-label="Footer" className="l-footer-nav">
            {FOOTER_LINKS.map((link, i) => (link
              ? <a key={link.href} href={link.href}>{link.label}</a>
              : <span key={`gap-${i}`} />))}
          </nav>
        </div>
        <div className="l-footer-bottom">
          <span>© 2026 Rayy.</span>
          <button type="button">Reduce motion</button>
          <button type="button" aria-haspopup="dialog">Manage my saved picks</button>
        </div>
      </div>
    </footer>
  );
}

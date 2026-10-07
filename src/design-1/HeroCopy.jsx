import Icon from '../components/Icon';
import { LANDING_ICONS } from './icons';
import { SEARCH_URL } from './content';

// The two hero CTAs. Rendered inside HeroCopy, or on their own when a hero needs to place them separately.
export function HeroCtas() {
  return (
    <div className="l-hero-ctas">
      {/* Opens the "Help me choose" planner, which isn't built in this preview yet. */}
      <button type="button" className="l-btn l-btn-white l-btn-lg">
        Help me choose <Icon className="l-icon l-icon-18" paths={LANDING_ICONS.arrowRight} />
      </button>
      <a href={SEARCH_URL} className="l-btn l-btn-outline l-btn-lg">Browse all services</a>
    </div>
  );
}

// Eyebrow, headline, subtitle and (unless `ctas` is false) the two CTAs.
// `align` is "center" (D header) or "start" (split header).
export default function HeroCopy({ align = 'center', ctas = true }) {
  return (
    <div className={`l-hero-copy l-hero-copy-${align}`}>
      <span className="l-hero-eyebrow">Beauty · Grooming · Style</span>
      <h1 id="hero-title">
        Have it your <em>Rayy.</em>
      </h1>
      <p>Beauty, grooming and a little guidance. Real experts, live, made for you.</p>
      {ctas && <HeroCtas />}
    </div>
  );
}

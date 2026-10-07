import Icon from '../components/Icon';
import { LANDING_ICONS } from './icons';
import { SEARCH_URL } from './content';
import { STUDIOS } from './studioData';
import StudioLogo from './StudioLogo';

// Studio cards: logo panel, name and area.
export default function Studios() {
  return (
    <section aria-labelledby="studios-title" className="l-wrap l-section l-studios">
      <div className="l-section-head">
        <div className="l-section-title">
          <span className="l-kicker">Studios on Rayy</span>
          <h2 id="studios-title" className="l-h2">Loved studios, close to you.</h2>
        </div>
        <a href={SEARCH_URL} className="l-text-link">
          See all studios <Icon className="l-icon" paths={LANDING_ICONS.arrowRight} />
        </a>
      </div>

      <div className="l-studio-grid">
        {STUDIOS.map((studio) => (
          <a key={studio.name} href={SEARCH_URL} className="l-studio">
            <span className="l-studio-banner" style={{ background: studio.tint }}>
              <StudioLogo studio={studio} className="l-logo-lg" />
            </span>
            <span className="l-studio-body">
              <span className="l-studio-head">
                <strong>{studio.name}</strong>
                <span className="l-studio-area">
                  <Icon className="l-icon l-icon-14" paths={LANDING_ICONS.mapPin} /> {studio.area}
                </span>
              </span>
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}

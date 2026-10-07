import { useEffect, useState } from 'react';
import Icon from '../components/Icon';
import { LANDING_ICONS } from './icons';
import { GET_RAYY_URL, SEARCH_URL } from './content';

// Mobile-only bar pinned to the bottom once the hero has scrolled away, like an app's action bar.
export default function MobileActionBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const hero = document.querySelector('.l-hero');
    if (!hero) return undefined;
    const observer = new IntersectionObserver(([entry]) => setVisible(!entry.isIntersecting), { threshold: 0.05 });
    observer.observe(hero);
    return () => observer.disconnect();
  }, []);

  return (
    <div className={`l-actionbar${visible ? ' is-visible' : ''}`} inert={!visible}>
      <a href={SEARCH_URL} className="l-btn l-btn-ghost-deep l-actionbar-btn">
        <Icon className="l-icon l-icon-18" paths={LANDING_ICONS.search} /> Browse services
      </a>
      <a href={GET_RAYY_URL} className="l-btn l-btn-deep l-actionbar-btn">
        Get Rayy <Icon className="l-icon" paths={LANDING_ICONS.arrowUpRight} />
      </a>
    </div>
  );
}

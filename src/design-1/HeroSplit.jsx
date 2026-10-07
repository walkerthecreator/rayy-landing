import HeroNav from './HeroNav';
import HeroCopy, { HeroCtas } from './HeroCopy';
import products from '../assets/landing/hero-products.png';

// Split header: copy top-left, products on a blush arch at the bottom right.
// The CTAs sit under the copy on desktop and move below the products once the hero stacks.
export default function HeroSplit() {
  return (
    <section aria-labelledby="hero-title" className="l-hero l-hero-split">
      <HeroNav />
      <div className="l-wrap l-hero-split-body">
        <HeroCopy align="start" ctas={false} />
        <div className="l-hero-art">
          <span className="l-hero-stage" aria-hidden="true" />
          <span className="l-hero-floor" aria-hidden="true" />
          <img
            src={products}
            alt="Rayy cleanser tube, lipstick, moisture cream, comb and powder brush with a note reading Your beauty routine made simple"
          />
        </div>
        <HeroCtas />
      </div>
    </section>
  );
}

// /new page copy + destinations. Every link comes from the live landing page (../landing/content),
// so the flows stay identical; only the copy, imagery and button colours follow the new asset pack.
import { LANDING_ICONS as I } from '../design-1/icons';
import {
  OCCASIONS as LIVE_OCCASIONS, QUICK_START, SEARCH_URL, SERVICES as LIVE_SERVICES, WORKSHOPS_URL,
} from '../design-1/content';
import weddings from '../assets/new/occasion-weddings.webp';
import dateReady from '../assets/new/occasion-date-ready.webp';
import everyday from '../assets/new/occasion-everyday.webp';
import festive from '../assets/new/occasion-festive.webp';
import rayyReady from '../assets/new/experience-rayy-ready.webp';
import workshops from '../assets/new/experience-workshops.webp';
import shop from '../assets/new/experience-shop.webp';

export {
  FOOTER_LINKS, GET_RAYY_URL, HOME_URL, MAIN_NAV, PROFESSIONALS_URL, SEARCH_URL, WORKSHOPS_URL,
} from '../design-1/content';

const hrefOf = (title) => QUICK_START.find((q) => q.title === title).href;
const SHOP_URL = hrefOf('Shop products');
const EXPERT_URL = hrefOf('Ask an expert');

// Quick actions: one button each, variant per Rayy_Button-Placement-and-States.csv.
export const QUICK_ACTIONS = [
  { label: 'Book Services', href: hrefOf('Book services'), variant: 'emerald' },
  { label: 'Shop Products', href: SHOP_URL, variant: 'burgundy' },
  { label: 'Ask an Expert', href: EXPERT_URL, variant: 'emerald' },
  { label: 'Explore Tips', href: hrefOf('Explore tips'), variant: 'outline' },
];

const OCCASION_ART = {
  Weddings: { img: weddings, cta: 'Explore Weddings', variant: 'burgundy', alt: 'Bride in an ivory saree and gold jewellery' },
  'Date Ready': { img: dateReady, cta: 'Explore Date Ready', variant: 'burgundy', alt: 'A couple dressed up for a rooftop evening' },
  Everyday: { img: everyday, cta: 'Explore Everyday', variant: 'emerald', alt: 'Woman in an ivory blazer in soft daylight' },
  'Festive Ready': { img: festive, cta: 'Explore Festive', variant: 'cobalt', alt: 'Woman in a cobalt silk saree with gold earrings' },
};
export const OCCASIONS = LIVE_OCCASIONS.map((o) => ({ ...o, ...OCCASION_ART[o.title] }));

export const EXPERIENCES = [
  {
    title: 'Rayy Ready 1:1',
    sub: 'Personal advice from a beauty professional, live.',
    href: EXPERT_URL,
    cta: 'Book a Session',
    variant: 'emerald',
    img: rayyReady,
    alt: 'Woman in an ivory blazer against a deep green wall',
  },
  {
    title: 'Rayy Workshops',
    sub: 'Expert-led workshops and community experiences.',
    href: WORKSHOPS_URL,
    cta: 'Explore Workshops',
    variant: 'burgundy',
    img: workshops,
    alt: 'Makeup brushes and burgundy pigment on an ivory surface',
  },
  {
    title: 'Shop curated products',
    sub: 'The products behind the looks, picked by experts.',
    href: SHOP_URL,
    cta: 'Shop Products',
    variant: 'burgundy',
    img: shop,
    alt: 'A serum, dropper bottle and lipstick on a cobalt plinth',
  },
];

// Same ten categories and queries as the live grid; the icon colour alternates through the palette.
const TONES = ['emerald', 'burgundy', 'cobalt'];
export const SERVICES = LIVE_SERVICES.map((s, i) => ({ ...s, tone: TONES[i % TONES.length] }));

export const GROOMING_URL = `${SEARCH_URL}?query=Grooming`;
export const ICONS = I;

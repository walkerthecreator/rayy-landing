// Landing page copy + destinations. Links are production URLs: keep them character for character.
import { LANDING_ICONS as I } from './icons';
import brush from '../assets/landing/prop-brush.png';
import lipstick from '../assets/landing/prop-lipstick.png';
import compact from '../assets/landing/prop-compact.png';
import serum from '../assets/landing/prop-serum.png';
import weddings from '../assets/landing/occasion-weddings.png';
import dateReady from '../assets/landing/occasion-dateready.png';
import everyday from '../assets/landing/occasion-everyday.png';
import festive from '../assets/landing/occasion-festive.png';

export const HOME_URL = 'https://rayy.online/';
export const GET_RAYY_URL = 'https://download.rayy.online/';
export const SEARCH_URL = 'https://app.rayy.online/search';
export const WORKSHOPS_URL = 'https://www.app.rayy.online/app/home';
export const PROFESSIONALS_URL = 'https://rayy.online/professionals/';

export const MAIN_NAV = [
  { label: 'Date Ready', href: 'https://rayy.online/dateready/' },
  { label: 'Workshops', href: WORKSHOPS_URL },
  { label: 'For brands', href: 'https://rayy.online/brand-partnerships' },
  { label: 'For Professionals', href: PROFESSIONALS_URL },
];

export const QUICK_START = [
  { title: 'Book services', sub: 'Look and feel your best', href: SEARCH_URL, img: brush, tint: '#FBE7E3' },
  { title: 'Shop products', sub: 'Curated for you', href: 'https://rayy.online/beauty/#shop-products', img: lipstick, tint: '#FDF0D9' },
  { title: 'Ask an expert', sub: 'Real advice, real care', href: 'https://app.rayy.online/app/rayy-ready', img: compact, tint: '#F7E6F0' },
  { title: 'Explore tips', sub: 'Ideas for every you', href: 'https://rayy.online/beauty/#tips', img: serum, tint: '#E7F5EE' },
];

export const OCCASIONS = [
  { title: 'Weddings', sub: 'The whole wedding crew', href: 'https://app.rayy.online/search?query=bridal', img: weddings, from: '#F9E4E1', to: '#F3D1CC' },
  { title: 'Date Ready', sub: 'Your kind of ready', href: 'https://rayy.online/dateready/?start=1', img: dateReady, from: '#E3F0F7', to: '#CDE3EF' },
  { title: 'Everyday', sub: 'Your everyday reset', href: SEARCH_URL, img: everyday, from: '#E4F4EC', to: '#CBE9DA' },
  { title: 'Festive Ready', sub: 'Every celebration', href: 'https://app.rayy.online/search?query=Party%20Makeup', img: festive, from: '#FBEFD6', to: '#F4DDB0' },
];

export const SERVICES = [
  { label: 'Haircut', query: 'Haircut', icon: I.scissors, bg: '#F7E3E7', fg: '#B4475D' },
  { label: 'Hair', query: 'Hair', icon: I.wind, bg: '#FBEBD3', fg: '#A8641A' },
  { label: 'Makeup', query: 'Makeup', icon: I.brush, bg: '#FCE4DC', fg: '#C2502E' },
  { label: 'Draping', query: 'Draping', icon: I.shirt, bg: '#ECE6F7', fg: '#6A4FA8' },
  { label: 'Mehendi', query: 'Mehendi', icon: I.hand, bg: '#E8F0DA', fg: '#557A2A' },
  { label: 'Grooming', query: 'Grooming', icon: I.user, bg: '#E1EDF4', fg: '#365F79' },
  { label: 'Skin & facials', query: 'Facial', icon: I.droplet, bg: '#DCF0EE', fg: '#2C7A72' },
  { label: 'Nails', query: 'Manicure', icon: I.gem, bg: '#F7E1EE', fg: '#A23E7A' },
  { label: 'Spa & wellness', query: 'Spa', icon: I.leaf, bg: '#DDEDE3', fg: '#507D67' },
  { label: 'At home', query: 'at%20home', icon: I.house, bg: '#E3E6F7', fg: '#4A55A2' },
];

// Footer: three columns, read row by row (an empty slot keeps Instagram under For Professionals).
export const FOOTER_LINKS = [
  { label: 'Tips + Shop', href: 'https://rayy.online/beauty/' },
  { label: 'For brands', href: 'https://rayy.online/brand-partnerships' },
  { label: 'Contact Rayy', href: 'mailto:hello@rayy.online' },
  { label: 'Date Ready', href: 'https://rayy.online/dateready/' },
  { label: 'For Professionals', href: PROFESSIONALS_URL },
  { label: 'Privacy & terms', href: 'https://rayy.online/privacy-policy' },
  null,
  { label: 'Instagram', href: 'https://www.instagram.com/curatedbyrayy/' },
];

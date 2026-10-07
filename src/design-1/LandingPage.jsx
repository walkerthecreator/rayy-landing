import { useEffect } from 'react';
import HeroSplit from './HeroSplit';
import {
  LandingFooter, Occasions, Professionals, QuickStart, ReturnBanner, ServiceSearch, Workshops,
} from './Sections';
import Studios from './Studios';
import MobileActionBar from './MobileActionBar';
import './landing.css';

export default function Design1() {
  useEffect(() => {
    document.title = 'design-1 | Rayy';
    const meta = document.createElement('meta');
    meta.name = 'theme-color';
    meta.content = '#1F4D63';
    document.head.appendChild(meta);
    return () => meta.remove();
  }, []);

  return (
    <div className="landing">
      <HeroSplit />
      <main id="main">
        <QuickStart />
        <ReturnBanner />
        <Occasions />
        <ServiceSearch />
        <Studios />
        <Workshops />
        <Professionals />
      </main>
      <LandingFooter />
      <MobileActionBar />
    </div>
  );
}

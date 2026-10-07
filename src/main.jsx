import { StrictMode, Suspense, lazy } from 'react';
import { createRoot } from 'react-dom/client';

const Design1 = lazy(() => import('./design-1/LandingPage'));
const Design2 = lazy(() => import('./design-2/NewLanding'));

const path = window.location.pathname.replace(/\/+$/, '') || '/';
const Page = ['/new', '/design-2'].includes(path) ? Design2 : Design1;

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Suspense fallback={null}>
      <Page />
    </Suspense>
  </StrictMode>,
);

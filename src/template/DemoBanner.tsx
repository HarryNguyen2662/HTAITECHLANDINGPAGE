import Link from 'next/link';

import { StickyBanner } from '@/features/landing/StickyBanner';

export const DemoBanner = () => (
  <StickyBanner>
    Explore our provided services
    {' '}
    <Link href="/services">Explore our provided services</Link>
  </StickyBanner>
);

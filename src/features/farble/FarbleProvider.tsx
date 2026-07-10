'use client';

import { LinkProvider } from '@astryxdesign/core/Link';
import { Theme } from '@astryxdesign/core/theme';
import NextLink from 'next/link';

import { farbleTheme } from '@/styles/farble-theme/farble';

/**
 * Wraps the Farble 5 Max page in its own dark-locked theme, overriding the
 * global H&T (htaitech) theme for this route only. Nested Theme is supported
 * by Astryx, so H&T pages are unaffected.
 */
export function FarbleProvider({ children }: { children: React.ReactNode }) {
  return (
    <LinkProvider component={NextLink}>
      <Theme theme={farbleTheme} mode="dark">
        {children}
      </Theme>
    </LinkProvider>
  );
}

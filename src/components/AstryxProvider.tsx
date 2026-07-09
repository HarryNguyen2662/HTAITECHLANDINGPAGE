'use client';

import { LinkProvider } from '@astryxdesign/core/Link';
import { Theme } from '@astryxdesign/core/theme';
import NextLink from 'next/link';

import { htaitechTheme } from '@/styles/astryx-theme/htaitech';

export function AstryxProvider({ children }: { children: React.ReactNode }) {
  return (
    <LinkProvider component={NextLink}>
      <Theme theme={htaitechTheme} mode="light">
        {children}
      </Theme>
    </LinkProvider>
  );
}

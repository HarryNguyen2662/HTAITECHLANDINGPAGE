'use client';

import { ThemeProvider } from 'next-themes';

import { AstryxProviders } from '@/components/AstryxProviders';

export function AppProviders({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="light"
      enableSystem={false}
      disableTransitionOnChange
    >
      <AstryxProviders>{children}</AstryxProviders>
    </ThemeProvider>
  );
}

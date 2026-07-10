'use client';

import { Button } from '@astryxdesign/core/Button';
import { Link } from '@astryxdesign/core/Link';
import { Text } from '@astryxdesign/core/Text';

import { nav } from './farbleData';

export function FarbleNav() {
  return (
    <header className="bg-[color:var(--color-background-body)]/80 sticky top-0 z-50 border-b border-[color:var(--color-border)] backdrop-blur-md">
      <nav className="mx-auto flex h-16 max-w-[1200px] items-center justify-between px-4 sm:px-6" aria-label="Primary">
        <div className="flex items-center gap-8">
          <Link href="#top" color="inherit" isStandalone className="flex items-center gap-2">
            <span className="rounded-inner flex size-7 items-center justify-center bg-[color:var(--color-accent)] font-[family-name:var(--font-geist)] text-sm font-bold text-[color:var(--color-on-accent)]">
              F
            </span>
            <Text type="body" color="inherit" className="font-semibold tracking-tight text-[color:var(--color-text-primary)]">
              {nav.brand}
            </Text>
          </Link>

          <div className="hidden items-center gap-6 md:flex">
            {nav.links.map(item => (
              <Link
                key={item.label}
                href={item.href}
                color="inherit"
                isStandalone
                className="text-sm text-[color:var(--color-text-secondary)] transition-colors hover:text-[color:var(--color-text-primary)]"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <Button label={nav.cta} variant="primary" size="sm" className="rounded-element" />
      </nav>
    </header>
  );
}

'use client';

import { Button } from '@astryxdesign/core/Button';
import { HStack } from '@astryxdesign/core/HStack';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { useState } from 'react';

import { Logo } from './Logo';

const navItems = [
  { href: '/services', key: 'Services' as const },
  { href: '/#products', label: 'Products' },
  { href: '/howwework', key: 'How_We_Work' as const },
  { href: '/project', key: 'Our_Projects' as const },
  { href: '/aboutus', key: 'About_Us' as const },
  { href: '/contacts', key: 'Contact' as const },
];

export const Navbar = () => {
  const t = useTranslations('Navbar');
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-[var(--ht-bg)]/95 sticky top-0 z-50 border-b border-[var(--ht-line)] backdrop-blur-md">
      <div className="ht-container flex items-center justify-between gap-4 py-4">
        <Logo />

        <nav className="hidden items-center gap-7 lg:flex">
          {navItems.map(item => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-[var(--ht-muted)] no-underline transition-colors hover:text-[var(--ht-ink)]"
            >
              {'label' in item ? item.label : t(item.key)}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button label={t('cta')} variant="primary" size="md" href="/contacts" />
        </div>

        <button
          type="button"
          className="inline-flex size-10 items-center justify-center rounded-md border border-[var(--ht-line)] text-[var(--ht-ink)] lg:hidden"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen(v => !v)}
        >
          <span className="sr-only">Menu</span>
          <div className="flex flex-col gap-1.5">
            <span className={`block h-0.5 w-5 bg-current transition ${open ? 'translate-y-2 rotate-45' : ''}`} />
            <span className={`block h-0.5 w-5 bg-current transition ${open ? 'opacity-0' : ''}`} />
            <span className={`block h-0.5 w-5 bg-current transition ${open ? '-translate-y-2 -rotate-45' : ''}`} />
          </div>
        </button>
      </div>

      {open && (
        <div className="border-t border-[var(--ht-line)] bg-[var(--ht-bg-elevated)] px-4 py-5 lg:hidden">
          <div className="flex flex-col gap-4">
            {navItems.map(item => (
              <Link
                key={item.href}
                href={item.href}
                className="text-base font-medium text-[var(--ht-ink)] no-underline"
                onClick={() => setOpen(false)}
              >
                {'label' in item ? item.label : t(item.key)}
              </Link>
            ))}
            <HStack gap={2}>
              <Button label={t('cta')} variant="primary" size="md" href="/contacts" />
            </HStack>
          </div>
        </div>
      )}
    </header>
  );
};

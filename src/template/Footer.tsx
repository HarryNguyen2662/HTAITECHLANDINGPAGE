'use client';

import { Button } from '@astryxdesign/core/Button';
import Link from 'next/link';

import { Logo } from './Logo';

const serviceLinks = [
  { href: '/services', label: 'Hire AI Engineers' },
  { href: '/services', label: 'AI Product Development' },
  { href: '/services', label: 'Agentic Development' },
  { href: '/services', label: 'Cloud Transformation' },
  { href: '/services', label: 'AI Data Platforms' },
  { href: '/services', label: 'Computer Vision' },
];

const companyLinks = [
  { href: '/howwework', label: 'How it works' },
  { href: '/project', label: 'Work' },
  { href: '/aboutus', label: 'About' },
  { href: '/contacts', label: 'Contact' },
];

export const Footer = () => {
  return (
    <footer className="border-t border-[var(--ht-line)] bg-[var(--ht-bg)]">
      <div className="ht-container py-16">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_1fr_1fr]">
          <div className="space-y-5">
            <Logo />
            <p className="max-w-sm text-[var(--ht-muted)]">
              AI-native engineering studio. Production AI for products, operations,
              and smart-city systems — shipped into your repo.
            </p>
            <a
              href="mailto:tainguyenhuu@htaitech.net"
              className="block text-[var(--ht-ink)] no-underline hover:text-[var(--ht-accent)]"
            >
              tainguyenhuu@htaitech.net
            </a>
            <p className="text-sm text-[var(--ht-faint)]">
              Da Nang · Vietnam
              <br />
              123 Ly Dao Thanh, An Hai Bac, Son Tra
            </p>
            <Button label="Book a call" variant="secondary" href="/contacts" />
          </div>

          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.16em] text-[var(--ht-faint)]">
              Services
            </p>
            <ul className="space-y-3">
              {serviceLinks.map(link => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-[var(--ht-muted)] no-underline transition-colors hover:text-[var(--ht-ink)]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.16em] text-[var(--ht-faint)]">
              Company
            </p>
            <ul className="space-y-3">
              {companyLinks.map(link => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-[var(--ht-muted)] no-underline transition-colors hover:text-[var(--ht-ink)]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <p className="mt-8 text-xs uppercase tracking-[0.14em] text-[var(--ht-accent)]">
              SYS.STATUS · OPERATIONAL
            </p>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-[var(--ht-line)] pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-[var(--ht-faint)]">
            ©
            {' '}
            {new Date().getFullYear()}
            {' '}
            H&T AI TECH. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/privacy-policy" className="text-sm text-[var(--ht-faint)] no-underline hover:text-[var(--ht-ink)]">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="text-sm text-[var(--ht-faint)] no-underline hover:text-[var(--ht-ink)]">
              Terms of Use
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

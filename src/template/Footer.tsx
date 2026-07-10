'use client';

import { Button } from '@astryxdesign/core/Button';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

import { Logo } from './Logo';

export const Footer = () => {
  const t = useTranslations('Footer');
  const year = new Date().getFullYear();

  const serviceLinks = [
    { href: '/services', label: t('s1') },
    { href: '/services', label: t('s2') },
    { href: '/services', label: t('s3') },
    { href: '/services', label: t('s4') },
    { href: '/services', label: t('s5') },
    { href: '/services', label: t('s6') },
  ];

  const productLinks = [
    { href: '/project', label: t('p1') },
    { href: '/project', label: t('p2') },
    { href: '/project', label: t('p3') },
    { href: '/project', label: t('p4') },
    { href: '/#building-now', label: t('p5') },
  ];

  const companyLinks = [
    { href: '/howwework', label: t('c1') },
    { href: '/project', label: t('c2') },
    { href: '/aboutus', label: t('c3') },
    { href: '/contacts', label: t('c4') },
  ];

  return (
    <footer className="border-t border-[var(--ht-line)] bg-[var(--ht-bg)]">
      <div className="ht-container py-16">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div className="space-y-5">
            <Logo />
            <p className="max-w-sm text-[var(--ht-muted)]">{t('blurb')}</p>
            <a
              href="mailto:tainguyenhuu@htaitech.net"
              className="block text-[var(--ht-ink)] no-underline hover:text-[var(--ht-accent)]"
            >
              tainguyenhuu@htaitech.net
            </a>
            <p className="text-sm text-[var(--ht-faint)]">
              Đà Nẵng · Việt Nam
              <br />
              123 Lý Đạo Thành, An Hải Bắc, Sơn Trà
            </p>
            <Button label={t('cta')} variant="secondary" href="/contacts" />
          </div>

          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.16em] text-[var(--ht-faint)]">
              {t('services')}
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
              {t('products')}
            </p>
            <ul className="space-y-3">
              {productLinks.map(link => (
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
              {t('company')}
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
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-[var(--ht-line)] pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-[var(--ht-faint)]">{t('rights', { year })}</p>
          <div className="flex gap-6">
            <Link href="/privacy-policy" className="text-sm text-[var(--ht-faint)] no-underline hover:text-[var(--ht-ink)]">
              {t('privacy_policy')}
            </Link>
            <Link href="/terms-of-service" className="text-sm text-[var(--ht-faint)] no-underline hover:text-[var(--ht-ink)]">
              {t('terms_of_service')}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

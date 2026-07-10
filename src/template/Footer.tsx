'use client';

import { Button } from '@astryxdesign/core/Button';
import { Divider } from '@astryxdesign/core/Divider';
import { Text } from '@astryxdesign/core/Text';
import Link from 'next/link';

import { Logo } from './Logo';

const serviceGroups = [
  {
    title: 'Software Development',
    items: [
      'MVP Product Development',
      'iOS App Development',
      'Android App Development',
      'Front-end Development',
    ],
  },
  {
    title: 'Design & Quality',
    items: ['UX/UI Design', 'QA Testing & Automation'],
  },
  {
    title: 'AI & Analytics',
    items: [
      'AI & Machine Learning',
      'Data Science',
      'Business Intelligence',
      'Data Engineering',
    ],
  },
  {
    title: 'Infrastructure',
    items: ['DevOps Services', 'Machine Learning Services'],
  },
];

export const Footer = () => {
  return (
    <footer className="border-t border-[var(--ht-line)] bg-[var(--ht-ink)] text-white">
      <div className="ht-container py-16">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_2fr]">
          <div className="space-y-6">
            <Logo inverted />
            <Text type="body" color="inherit" as="p">
              Senior engineers and AI specialists who ship into your roadmap —
              from staff augmentation to full product delivery.
            </Text>
            <div className="space-y-2">
              <a
                href="mailto:tainguyenhuu@htaitech.net"
                className="block text-sm text-white/80 no-underline hover:text-white"
              >
                tainguyenhuu@htaitech.net
              </a>
              <p className="text-sm text-white/60">
                123 Ly Dao Thanh, An Hai Bac, Son Tra
                <br />
                Da Nang, Vietnam 550000
              </p>
            </div>
            <Button
              label="Contact us"
              variant="secondary"
              size="md"
              href="/contacts"
            />
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {serviceGroups.map(group => (
              <div key={group.title}>
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.14em] text-white/50">
                  {group.title}
                </p>
                <ul className="space-y-2">
                  {group.items.map(item => (
                    <li key={item}>
                      <Link
                        href="/services"
                        className="text-sm text-white/75 no-underline transition-colors hover:text-white"
                      >
                        {item}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12">
          <Divider />
        </div>

        <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-white/50">
            ©
            {' '}
            {new Date().getFullYear()}
            {' '}
            H&T AI TECH. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/privacy-policy" className="text-sm text-white/60 no-underline hover:text-white">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="text-sm text-white/60 no-underline hover:text-white">
              Terms of Service
            </Link>
            <Link href="/services" className="text-sm text-white/60 no-underline hover:text-white">
              Explore services
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

'use client';

import { AppShell } from '@astryxdesign/core/AppShell';
import { Link } from '@astryxdesign/core/Link';
import { TopNav, TopNavHeading, TopNavItem } from '@astryxdesign/core/TopNav';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import type { ReactNode } from 'react';

import { LocaleSwitcher } from '@/components/LocaleSwitcher';
import { usePathname } from '@/libs/i18nNavigation';

import logoSrc from '../../public/assets/images/handtailogo.png';

const links = [
  { href: '/howwework', key: 'How_We_Work' },
  { href: '/services', key: 'Services' },
  { href: '/project', key: 'Our_Projects' },
  { href: '/aboutus', key: 'About_Us' },
] as const;

export const Navbar = ({ children }: { children: ReactNode }) => {
  const t = useTranslations('Navbar');
  const pathname = usePathname();

  return (
    <AppShell
      height="auto"
      contentPadding={0}
      variant="section"
      topNav={(
        <TopNav
          label={t('main_navigation')}
          heading={(
            <TopNavHeading
              heading="H&T AI TECH"
              headingHref="/"
              logo={(
                <Image
                  src={logoSrc}
                  alt=""
                  width={32}
                  height={32}
                  className="size-8 object-contain"
                />
              )}
            />
          )}
          startContent={links.map(link => (
            <TopNavItem
              key={link.href}
              label={t(link.key)}
              href={link.href}
              isSelected={pathname === link.href}
            />
          ))}
          endContent={(
            <>
              <Link
                href="/contacts"
                isStandalone
                color="inherit"
                className="border border-primary px-3 py-1.5 text-sm font-medium text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
              >
                {t('Contact')}
              </Link>
              <LocaleSwitcher />
            </>
          )}
        />
      )}
    >
      {children}
    </AppShell>
  );
};

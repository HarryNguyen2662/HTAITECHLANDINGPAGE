'use client';

import { useLocale } from 'next-intl';

import { usePathname, useRouter } from '@/libs/i18nNavigation';
import { AppConfig } from '@/utils/AppConfig';

export const LocaleSwitcher = () => {
  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale();

  const handleChange = (value: string) => {
    router.push(pathname, { locale: value });
    router.refresh();
  };

  return (
    <label className="relative inline-flex items-center">
      <span className="sr-only">Language</span>
      <select
        value={locale}
        onChange={e => handleChange(e.target.value)}
        className="h-9 appearance-none rounded-md border border-[var(--ht-line)] bg-[var(--ht-bg-elevated)] px-3 pr-8 text-sm font-medium text-[var(--ht-ink)] outline-none transition-colors hover:border-[var(--ht-accent)]"
        aria-label="Language switcher"
      >
        {AppConfig.locales.map(elt => (
          <option key={elt.id} value={elt.id}>
            {elt.id.toUpperCase()}
          </option>
        ))}
      </select>
      <span className="pointer-events-none absolute right-2 text-[var(--ht-faint)]">▾</span>
    </label>
  );
};

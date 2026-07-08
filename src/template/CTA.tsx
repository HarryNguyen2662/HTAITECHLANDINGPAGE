import Link from 'next/link';
import { useTranslations } from 'next-intl';

import { buttonVariants } from '@/components/ui/buttonVariants';
import { CTABanner } from '@/features/landing/CTABanner';
import { Section } from '@/features/landing/Section';
import { cn } from '@/utils/Helpers';

export const CTA = () => {
  const t = useTranslations('CTA');

  return (
    <div className="bg-ink py-24">
      <Section>
        <CTABanner
          title={t('title')}
          description={t('description')}
          buttons={(
            <Link
              className={cn(buttonVariants({ size: 'lg' }), 'rounded px-8')}
              href="/contacts"
            >
              {t('button_text')}
            </Link>
          )}
        />
      </Section>
    </div>
  );
};

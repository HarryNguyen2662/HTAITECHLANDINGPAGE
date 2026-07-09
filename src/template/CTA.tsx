import { Link } from '@astryxdesign/core/Link';
import { useTranslations } from 'next-intl';

import { buttonVariants } from '@/components/ui/buttonVariants';
import { CTABanner } from '@/features/landing/CTABanner';
import { cn } from '@/utils/Helpers';

/* The classes our deployed models actually detect, shown as a slow ticker
   strip along the top of the band. Two copies make the CSS loop seamless. */
const modelClasses = [
  'HELMET',
  'NO-HELMET',
  'RED-LIGHT',
  'WRONG-WAY',
  'LANE-VIOLATION',
  'ILLEGAL-PARKING',
  'SPEEDING',
  'CONTAINER-DENT',
  'DANGEROUS-OVERTAKE',
];

const TickerRow = () => (
  <div className="flex shrink-0 items-center">
    {modelClasses.map(name => (
      <span key={name} className="flex items-center font-mono text-[11px] uppercase tracking-[0.2em] text-paper/30">
        <span className="px-6">{name}</span>
        <span className="text-primary/50">/</span>
      </span>
    ))}
  </div>
);

export const CTA = () => {
  const t = useTranslations('CTA');

  return (
    <div className="bg-ink pb-24">
      <div className="overflow-hidden border-b border-paper/10 py-3" aria-hidden="true">
        <div className="animate-ticker flex w-max">
          <TickerRow />
          <TickerRow />
        </div>
      </div>

      <div className="mx-auto mt-16 max-w-screen-lg px-3">
        <CTABanner
          title={t('title')}
          description={t('description')}
          buttons={(
            <Link
              color="inherit"
              className={cn(buttonVariants({ size: 'lg' }), 'rounded px-8')}
              href="/contacts"
            >
              {t('button_text')}
            </Link>
          )}
        />
      </div>
    </div>
  );
};

'use client';

import { Text } from '@astryxdesign/core/Text';
import { useTranslations } from 'next-intl';

export const ProofStrip = () => {
  const t = useTranslations('Proof');
  const items = [t('item1'), t('item2'), t('item3'), t('item4')];

  return (
    <section
      className="border-y border-[var(--ht-line)]"
      style={{ backgroundColor: 'rgba(239, 234, 227, 0.6)' }}
    >
      <div className="ht-container py-10">
        <p className="ht-eyebrow mb-6">{t('eyebrow')}</p>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map(item => (
            <div
              key={item}
              className="border-l pl-4"
              style={{ borderColor: 'rgba(47, 93, 80, 0.4)' }}
            >
              <Text type="body" weight="medium" as="p">
                {item}
              </Text>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

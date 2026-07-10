'use client';

import { Button } from '@astryxdesign/core/Button';
import { HStack } from '@astryxdesign/core/HStack';
import { Text } from '@astryxdesign/core/Text';
import { useTranslations } from 'next-intl';

export const Hero = () => {
  const t = useTranslations('Hero');

  return (
    <section className="relative overflow-hidden">
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            'linear-gradient(180deg, rgba(247,244,239,0.2) 0%, rgba(247,244,239,0.85) 55%, #f7f4ef 100%), url(/assets/images/CTABG.jpg) center/cover',
        }}
      />
      <div className="ht-container flex min-h-[78vh] flex-col justify-center py-20 sm:py-28">
        <div className="ht-fade-up max-w-3xl">
          <p className="ht-eyebrow mb-5">{t('brand')}</p>
          <h1 className="ht-display mb-6">{t('title')}</h1>
          <Text type="large" color="secondary" as="p">
            {t('description')}
          </Text>
          <HStack gap={3} className="mt-8" wrap="wrap">
            <Button
              label={t('primary_button')}
              variant="primary"
              size="lg"
              href="/services"
            />
            <Button
              label={t('secondary_button')}
              variant="secondary"
              size="lg"
              href="/contacts"
            />
          </HStack>
        </div>
      </div>
    </section>
  );
};

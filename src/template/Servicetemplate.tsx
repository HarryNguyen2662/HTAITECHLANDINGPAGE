'use client';

import { Text } from '@astryxdesign/core/Text';
import { useTranslations } from 'next-intl';

type ServiceItem = {
  titleKey: string;
  descriptionKey: string;
};

type ServiceGroup = {
  groupKey: string;
  items: ServiceItem[];
};

const groups: ServiceGroup[] = [
  {
    groupKey: 'group_software',
    items: [
      { titleKey: 'mvp_title', descriptionKey: 'mvp_description' },
      { titleKey: 'ios_title', descriptionKey: 'ios_description' },
      { titleKey: 'android_title', descriptionKey: 'android_description' },
      { titleKey: 'fe_title', descriptionKey: 'fe_description' },
    ],
  },
  {
    groupKey: 'group_design',
    items: [{ titleKey: 'ux_title', descriptionKey: 'ux_description' }],
  },
  {
    groupKey: 'group_qa',
    items: [{ titleKey: 'qa_title', descriptionKey: 'qa_description' }],
  },
  {
    groupKey: 'group_ai',
    items: [
      { titleKey: 'ai_title', descriptionKey: 'ai_description' },
      { titleKey: 'ds_title', descriptionKey: 'ds_description' },
      { titleKey: 'bi_title', descriptionKey: 'bi_description' },
      { titleKey: 'de_title', descriptionKey: 'de_description' },
      { titleKey: 'ml_title', descriptionKey: 'ml_description' },
    ],
  },
  {
    groupKey: 'group_infra',
    items: [{ titleKey: 'devops_title', descriptionKey: 'devops_description' }],
  },
];

export const Servicestemplate = () => {
  const t = useTranslations('Servicesforpage');

  return (
    <section className="ht-section">
      <div className="ht-container space-y-16">
        {groups.map(group => (
          <div key={group.groupKey}>
            <p className="ht-eyebrow mb-6">{t(group.groupKey)}</p>
            <div className="grid gap-8 md:grid-cols-2">
              {group.items.map(item => (
                <article
                  key={item.titleKey}
                  className="border-t border-[var(--ht-line)] pt-5"
                >
                  <h3
                    className="mb-3 text-xl font-semibold text-[var(--ht-ink)]"
                    style={{ fontFamily: 'Georgia, \'Times New Roman\', serif' }}
                  >
                    {t(item.titleKey)}
                  </h3>
                  <Text type="body" color="secondary" as="p">
                    {t(item.descriptionKey)}
                  </Text>
                </article>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

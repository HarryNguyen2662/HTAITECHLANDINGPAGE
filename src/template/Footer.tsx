'use client';

import { HStack } from '@astryxdesign/core/HStack';
import { Icon } from '@astryxdesign/core/Icon';
import { Link } from '@astryxdesign/core/Link';
import { Text } from '@astryxdesign/core/Text';
import { VStack } from '@astryxdesign/core/VStack';
import Image from 'next/image';
import { FaFacebook, FaLinkedin } from 'react-icons/fa';

import { AppConfig } from '@/utils/AppConfig';

import logoSrc from '../../public/assets/images/handtailogo.png';

const socialLinks = [
  { href: 'https://www.facebook.com', icon: FaFacebook, label: 'Facebook' },
  { href: 'https://www.linkedin.com', icon: FaLinkedin, label: 'LinkedIn' },
];

const services = [
  { title: 'Software Development Services:', items: ['MVP Product Development Services', 'iOS App Development Services', 'Android App Development', 'Front-end Development Services'] },
  { title: 'Design Services:', items: ['UX/UI Design Services'] },
  { title: 'Quality Assurance & Testing:', items: ['QA Testing & Automation Solutions'] },
  { title: 'AI & Advanced Analytics:', items: ['AI & Machine Learning Solutions', 'Data Science Solutions', 'Business Intelligence Services', 'Data Engineering Solutions', 'Machine Learning Services'] },
  { title: 'Infrastructure & Operations:', items: ['DevOps Services'] },
];

const addresses = [
  {
    location: 'Da Nang, VietNam',
    address: ['123 Ly Dao Thanh, An Hai Bac, Son Tra', 'Da Nang, VietNam 550000'],
  },
];

const legalLinks = [
  { href: '/privacy-policy', label: 'Privacy Policy' },
  { href: '/terms-of-service', label: 'Terms of Service' },
];

const groupLabelClass = 'font-mono text-xs font-medium uppercase tracking-[0.15em]';

export const Footer = () => {
  return (
    <footer className="border-t-2 border-ink bg-ink text-paper">
      <div className="mx-auto w-full max-w-7xl px-4">
        <div className="grid grid-cols-1 gap-12 py-12 lg:grid-cols-3">
          {/* Logo & Contact Section */}
          <VStack gap={6}>
            <HStack gap={3} align="center">
              <Image src={logoSrc} alt="H&T AI Tech" className="size-10 object-contain" />
              <Text type="large" weight="semibold" color="inherit" className="font-display text-paper">
                H&T AI TECH
              </Text>
            </HStack>

            <Text type="supporting" color="inherit" className="max-w-xs font-mono text-xs uppercase tracking-[0.15em] text-paper/50">
              Đà Nẵng, Việt Nam — applied AI &amp; software studio
            </Text>

            <VStack gap={4}>
              <Link
                href="mailto:tainguyenhuu@htaitech.net"
                color="inherit"
                isStandalone
                className="group inline-flex items-center gap-2 text-lg text-paper/70 transition-colors hover:text-paper"
              >
                tainguyenhuu@htaitech.net
              </Link>

              <HStack gap={3}>
                {socialLinks.map(social => (
                  <Link
                    key={social.href}
                    href={social.href}
                    isExternalLink
                    label={social.label}
                    color="inherit"
                    className="border border-paper/20 p-2 text-paper/70 transition-colors hover:border-paper/40 hover:text-paper"
                  >
                    <Icon icon={social.icon} color="inherit" size="sm" />
                  </Link>
                ))}
              </HStack>
            </VStack>
          </VStack>

          {/* Services Grid */}
          <div className="lg:col-span-2">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              <div className="md:col-span-2">
                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
                  {services.map(service => (
                    <VStack key={service.title} gap={3}>
                      <Text type="label" color="inherit" className={`${groupLabelClass} text-primary`}>
                        {service.title}
                      </Text>
                      <VStack gap={2} as="ul">
                        {service.items.map(item => (
                          <li key={item}>
                            <Text type="body" size="sm" color="inherit" className="text-paper/70">
                              {item}
                            </Text>
                          </li>
                        ))}
                      </VStack>
                    </VStack>
                  ))}
                </div>
              </div>

              {/* Career & Address Section */}
              <VStack gap={8}>
                <VStack gap={3}>
                  <Text type="label" color="inherit" className={`${groupLabelClass} text-primary`}>
                    Career
                  </Text>
                  <Link href="/contacts" color="inherit" className="text-sm text-paper/70 transition-colors hover:text-paper">
                    Apply for Jobs
                  </Link>
                </VStack>

                <VStack gap={3}>
                  <Text type="label" color="inherit" className={`${groupLabelClass} text-primary`}>
                    Our Offices
                  </Text>
                  <VStack gap={4} as="ul">
                    {addresses.map(address => (
                      <li key={address.location}>
                        <Text type="body" size="sm" weight="medium" color="inherit" className="text-paper/90">
                          {address.location}
                        </Text>
                        {address.address.map(line => (
                          <Text key={line} type="body" size="sm" color="inherit" className="block text-paper/50">
                            {line}
                          </Text>
                        ))}
                      </li>
                    ))}
                  </VStack>
                </VStack>
              </VStack>
            </div>
          </div>
        </div>

        {/* Bottom Legal Section */}
        <HStack
          gap={4}
          justify="between"
          wrap="wrap"
          className="border-t border-paper/15 py-8"
        >
          <Text type="supporting" color="inherit" className="font-mono text-xs text-paper/50">
            ©
            {' '}
            {new Date().getFullYear()}
            {' '}
            {AppConfig.name}
            . All rights reserved.
          </Text>

          <HStack gap={6}>
            {legalLinks.map(link => (
              <Link key={link.href} href={link.href} color="inherit" className="text-sm text-paper/70 transition-colors hover:text-paper">
                {link.label}
              </Link>
            ))}
          </HStack>
        </HStack>
      </div>
    </footer>
  );
};

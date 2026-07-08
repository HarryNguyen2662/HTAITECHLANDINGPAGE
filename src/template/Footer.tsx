import Link from 'next/link';

import { CenteredFooter } from '@/features/landing/CenteredFooter';
import { Section } from '@/features/landing/Section';
import { AppConfig } from '@/utils/AppConfig';

export const Footer = () => {
  // const t = useTranslations('Footer');

  const socialLinks = [
    {
      href: 'https://www.facebook.com',
      icon: (
        <svg className="size-6 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M23.998 12c0-6.628-5.372-12-11.999-12C5.372 0 0 5.372 0 12c0 5.988 4.388 10.952 10.124 11.852v-8.384H7.078v-3.469h3.046V9.356c0-3.008 1.792-4.669 4.532-4.669 1.313 0 2.686.234 2.686.234v2.953H15.83c-1.49 0-1.955.925-1.955 1.874V12h3.328l-.532 3.469h-2.796v8.384c5.736-.9 10.124-5.864 10.124-11.853z" />
        </svg>
      ),
    },
    {
      href: 'https://www.linkedin.com',
      icon: (
        <svg className="size-6 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ),
    },
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

  return (
    <Section className="border-ink bg-ink text-paper border-t-2">
      <CenteredFooter
        logo={null}
        name="H&T AI TECH"
        iconList={<></>}
        legalLinks={<></>}
      >
        <div className="mx-auto w-full max-w-7xl px-4">
          <div className="grid grid-cols-1 gap-12 py-12 lg:grid-cols-3">
            {/* Logo & Contact Section */}
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <img
                  src="/assets/images/handtailogo.png"
                  alt="H&T AI Tech"
                  className="size-10 object-contain"
                />
                <span className="text-paper font-display text-xl font-semibold">
                  H&T AI TECH
                </span>
              </div>

              <p className="text-paper/50 max-w-xs font-mono text-xs uppercase tracking-[0.15em]">
                Đà Nẵng, Việt Nam — applied AI &amp; software studio
              </p>

              <div className="space-y-4">
                <Link
                  href="mailto:tainguyenhuu@htaitech.net"
                  className="text-paper/70 hover:text-paper group inline-flex items-center gap-2 transition-colors"
                >
                  <span className="text-lg">tainguyenhuu@htaitech.net</span>
                  <span className="opacity-0 transition-opacity group-hover:opacity-100">→</span>
                </Link>

                <div className="flex gap-3">
                  {socialLinks.map((link, index) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="border-paper/20 text-paper/70 hover:border-paper/40 hover:text-paper rounded border p-2 transition-colors"
                      aria-label={`Social media link ${index + 1}`}
                    >
                      {link.icon}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Services Grid */}
            <div className="lg:col-span-2">
              <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                <div className="md:col-span-2">
                  <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
                    {services.map(service => (
                      <div key={service.title} className="space-y-3">
                        <h3 className="font-mono text-xs font-medium uppercase tracking-[0.15em] text-primary">
                          {service.title}
                        </h3>
                        <ul className="space-y-2">
                          {service.items.map(item => (
                            <li key={item}>
                              <Link
                                href="#"
                                className="text-paper/70 hover:text-paper text-sm transition-colors"
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

                {/* Career & Address Section */}
                <div className="space-y-8">
                  <div className="space-y-3">
                    <h3 className="font-mono text-xs font-medium uppercase tracking-[0.15em] text-verify">
                      Career
                    </h3>
                    <Link
                      href="#"
                      className="text-paper/70 hover:text-paper text-sm transition-colors"
                    >
                      Apply for Jobs
                    </Link>
                  </div>

                  <div className="space-y-3">
                    <h3 className="font-mono text-xs font-medium uppercase tracking-[0.15em] text-primary">
                      Our Offices
                    </h3>
                    <ul className="space-y-4">
                      {addresses.map(address => (
                        <li key={address.location} className="text-sm">
                          <p className="text-paper/90 font-medium">{address.location}</p>
                          {address.address.map(line => (
                            <p key={line} className="text-paper/50">{line}</p>
                          ))}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Legal Section */}
          <div className="border-paper/15 mt-8 flex flex-col items-center justify-between gap-4 border-t pt-8 md:flex-row">
            <p className="text-paper/50 font-mono text-xs">
              ©
              {' '}
              {new Date().getFullYear()}
              {' '}
              {AppConfig.name}
              . All rights reserved.
            </p>

            <div className="flex gap-6">
              {legalLinks.map(link => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-paper/70 hover:text-paper text-sm transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </CenteredFooter>
    </Section>
  );
};

import Link from 'next/link';
import Image from 'next/image';

// import { useTranslations } from 'next-intl';
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
    <Section className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      <div className="absolute inset-0 bg-[url('/assets/svg/grid.svg')] bg-center opacity-5" />
      <CenteredFooter
        logo={(
          <Image
            src="/assets/images/.png"
            alt="CP Logo"
            width={0} // Adjust width as needed
            height={0} // Adjust height as needed
            className="object-contain"
          />
        )}
        name="H&T AI TECH"
        iconList={(
          <div className="flex gap-4">
            {socialLinks.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className="rounded-full bg-gray-700 p-2 transition-colors hover:bg-gray-600"
                aria-label={`Social media link ${index + 1}`}
              >
                {link.icon}
              </Link>
            ))}
          </div>
        )}
        legalLinks={(
          <div className="flex gap-6">
            {legalLinks.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className="text-sm text-gray-300 transition-colors hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      >
        <div className="mx-auto w-full max-w-7xl px-4">
          <div className="grid grid-cols-1 gap-12 py-12 lg:grid-cols-3">
            {/* Logo & Contact Section */}
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <img
                  src="/assets/images/handtailogo.png"
                  alt="CP Logo"
                  className="size-16 object-contain"
                />
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-2xl font-bold text-transparent">
                  H&T AI TECH
                </span>
              </div>

              <div className="space-y-4">
                <Link
                  href="mailto:tainguyenhuu@htaitech.net"
                  className="group inline-flex items-center gap-2 text-gray-300 transition-colors hover:text-white"
                >
                  <span className="text-lg">tainguyenhuu@htaitech.net</span>
                  <span className="opacity-0 transition-opacity group-hover:opacity-100">→</span>
                </Link>

                <div className="flex gap-4">
                  {socialLinks.map((link, index) => (
                    <Link
                      // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
                      key={index}
                      href={link.href}
                      className="rounded-full bg-gray-700 p-2 transition-colors hover:bg-gray-600"
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
                    {services.map((service, index) => (
                      <div key={index} className="space-y-3">
                        <h3 className="text-sm font-semibold uppercase tracking-wider text-blue-400">
                          {service.title}
                        </h3>
                        <ul className="space-y-2">
                          {service.items.map((item, idx) => (
                            <li key={idx}>
                              <Link
                                href="#"
                                className="text-sm text-gray-300 transition-colors hover:text-white"
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
                    <h3 className="text-sm font-semibold uppercase tracking-wider text-purple-400">
                      Career
                    </h3>
                    <Link
                      href="#"
                      className="text-sm text-gray-300 transition-colors hover:text-white"
                    >
                      Apply for Jobs
                    </Link>
                  </div>

                  <div className="space-y-3">
                    <h3 className="text-sm font-semibold uppercase tracking-wider text-green-400">
                      Our Offices
                    </h3>
                    <ul className="space-y-4">
                      {addresses.map((address, index) => (
                        <li key={index} className="text-sm">
                          <p className="font-medium text-gray-200">{address.location}</p>
                          {address.address.map((line, idx) => (
                            <p key={idx} className="text-gray-400">{line}</p>
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
          <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-gray-700 pt-8 md:flex-row">
            <p className="text-sm text-gray-400">
              ©
              {' '}
              {new Date().getFullYear()}
              {' '}
              {AppConfig.name}
              . All rights reserved.
            </p>

            <div className="flex gap-6">
              {legalLinks.map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  className="text-sm text-gray-300 transition-colors hover:text-white"
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

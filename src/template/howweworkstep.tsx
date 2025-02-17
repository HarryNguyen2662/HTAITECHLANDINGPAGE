'use client';

import {
  ArrowRight,
  Building,
  Check,
  ChevronRight,
  Code,
  Gift,
  Terminal,
  Users,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

interface ServiceCardProps {
  number: number;
  title: string;
  description: string;
  isEven?: boolean;
  icon: React.ElementType;
  image: string;
  benefits: string[];
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  number,
  title,
  description,
  isEven = false,
  icon,
  image,
  benefits,
}) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsVisible(true);
    }, number * 300);

    return () => clearTimeout(timeout);
  }, [number]);

  return (
    <div
      className={`my-16 flex flex-col gap-8 transition-all duration-700 lg:flex-row ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
    >
      {!isEven && (
        <div className="group relative w-full lg:w-1/2">
          <div className="relative h-full overflow-hidden rounded-lg bg-gray-100 p-8 shadow-lg">
            <div className="absolute -left-10 -top-10 size-32 rounded-full bg-green-500 opacity-20 transition-all duration-500 group-hover:scale-150"></div>
            <div className="mb-4 flex gap-4">
              {React.createElement(icon, {
                className: 'text-green-600',
                size: 24,
              })}
              <div className="flex size-10 items-center justify-center rounded-full bg-green-500 font-bold text-white">
                {number}
              </div>
              <Image
                src={image}
                alt="Team illustration"
                width={500}
                height={300}
                className="h-auto w-full rounded shadow-md transition-all duration-500 group-hover:scale-105"
              />
            </div>

            <div className="mt-6 flex justify-between">
              <div className="flex items-center gap-2">
                <Terminal size={16} className="text-green-600" />
                <span className="text-sm text-gray-600">Quality Assured</span>
              </div>
              <div className="flex items-center gap-2">
                <Check size={16} className="text-green-600" />
                <span className="text-sm text-gray-600">Best Practices</span>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="flex w-full flex-col justify-center lg:w-1/2">
        <div className="mb-4">
          <h2 className="mb-4 text-3xl font-bold text-gray-800">{title}</h2>
          <p className="mb-6 leading-relaxed text-gray-600">{description}</p>

          <div className="mb-6 translate-x-0 opacity-100 transition-all duration-500 hover:translate-x-2">
            <h3 className="mb-3 text-lg font-semibold text-gray-700">
              Key Benefits:
            </h3>
            <ul className="space-y-2">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-center gap-2">
                  <ChevronRight size={16} className="text-green-500" />
                  <span className="text-gray-600">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          <Link href="/contacts">
            <button className="flex w-max items-center gap-2 rounded-md bg-green-500 px-6 py-3 text-white transition-all duration-300 hover:translate-x-2 hover:bg-green-600">
              CONTACT US
              {' '}
              <ArrowRight size={16} />
            </button>
          </Link>
        </div>
      </div>

      {isEven && (
        <div className="group relative w-full lg:w-1/2">
          <div className="relative h-full overflow-hidden rounded-lg bg-gray-100 p-8 shadow-lg">
            <div className="absolute -right-10 -top-10 size-32 rounded-full bg-green-500 opacity-20 transition-all duration-500 group-hover:scale-150"></div>
            <div className="mb-4 flex justify-end gap-4">
              <div className="flex size-10 items-center justify-center rounded-full bg-green-500 font-bold text-white">
                {number}
              </div>
              {React.createElement(icon, {
                className: 'text-green-600',
                size: 24,
              })}
            </div>
            <Image
              src={image}
              alt="Team illustration"
              width={500}
              height={300}
              className="h-auto w-full rounded shadow-md transition-all duration-500 group-hover:scale-105"
            />

            <div className="mt-4 flex justify-end space-x-2">
              <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-800">
                Expert Team
              </span>
              <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-800">
                Reliable
              </span>
              <span className="rounded-full bg-purple-100 px-3 py-1 text-xs font-medium text-purple-800">
                Scalable
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const Howweworkstep = () => {
  return (
			<div className="container mx-auto max-w-6xl px-4 py-16">
				<ServiceCard
					number={1}
					title="Effortless Team Expansion"
					icon={Building}
					image="/assets/images/howweworkteam1.png"
					benefits={[
						"Access to specialized talent pool",
						"Quick onboarding process",
						"Flexible engagement models",
						"Reduced hiring overhead",
					]}
					description="Need specialized talent to strengthen your team? Our staff augmentation services provide the right professionals—developers, designers, and QA specialists—to boost your capabilities, meet deadlines, and accelerate your projects without the commitment of permanent hires."
				/>

				<ServiceCard
					number={2}
					title="Full-Service Development Teams"
					icon={Users}
					image="/assets/images/howweworkteam2.jpg"
					benefits={[
						"End-to-end project ownership",
						"Dedicated project management",
						"Cross-functional expertise",
						"Agile development process",
					]}
					description="For customers seeking a more hands-on approach, our team delivers a fully integrated solution tailored to your specific requirements. We assemble a specialized team with the right expertise and background to handle your project from start to finish. With dedicated resources focused exclusively on your initiative, you can rest assured that your goals will be met with precision and effectiveness."
					isEven={true}
				/>

				<ServiceCard
					number={3}
					title="Custom Software Solutions"
					icon={Code}
					image="/assets/images/howweworkteam3.jpg"
					benefits={[
						"Tailored solutions architecture",
						"Scalable technology stack",
						"Continuous integration/delivery",
						"Post-launch support",
					]}
					description="Partnering with CoderPush for your software development needs lets you concentrate on your core business while we manage the entire process from start to finish. Our expert team of developers, designers, and project managers will work closely with you to deliver high-quality solutions that meet your requirements and exceed your expectations. With dedicated resources focused exclusively on your project, you can trust that your goals will be achieved accurately and efficiently."
				/>

				<ServiceCard
					number={4}
					title="AI Innovation & Solutions"
					icon={Gift}
					image="/assets/images/howweworkteam5.jpg"
					benefits={[
						"Cutting-edge AI integration",
						"Low-code implementation",
						"Process automation",
						"Predictive analytics",
					]}
					description="Experience the transformative impact of low-code solutions customized for your business needs. Enjoy the simplicity and efficiency of code-free development, particularly within Salesforce. Step into the future of programming with our skilled team as we help you speed up your business operations and overcome challenges today and tomorrow. With dedicated resources focused exclusively on your project, you can trust that your goals will be achieved accurately and efficiently."
					isEven={true}
				/>
			</div>
		);
};

export default Howweworkstep;
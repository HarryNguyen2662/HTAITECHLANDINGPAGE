import { Card } from '@astryxdesign/core/Card';
import { Heading } from '@astryxdesign/core/Heading';
import { IconButton } from '@astryxdesign/core/IconButton';
import { Text } from '@astryxdesign/core/Text';
import Image from 'next/image';
import { useRef } from 'react';
import { FaCheck, FaChevronLeft, FaChevronRight, FaClock, FaCrosshairs, FaExclamationTriangle, FaMagic, FaRobot, FaRuler, FaSyncAlt, FaTimes, FaTrophy } from 'react-icons/fa';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

const PLACEHOLDER_BLUR_DATA_URL = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjJmMmYyIi8+PC9zdmc+';

export const ContainerEvaluation = () => {
  const containerSwiperRef = useRef(null);
  const navClasses = {
    helmetNav: {
      prev: 'helmet-swiper-prev',
      next: 'helmet-swiper-next',
    },
    containerNav: {
      prev: 'container-swiper-prev',
      next: 'container-swiper-next',
    },
    trafficNav: {
      prev: 'container-swiper-prev',
      next: 'container-swiper-next',
    },
  };
  const containerImages = [
    {
      type: 'image',
      src: '/assets/images/container1.png',
      aspectRatio: '16/9',
      unoptimized: true,
    },
    {
      type: 'image',
      src: '/assets/images/container2.png',
      aspectRatio: '16/9',
      unoptimized: true,
    },
    {
      type: 'image',
      src: '/assets/images/container3.png',
    },
    {
      type: 'image',
      src: '/assets/images/container4.png',
      aspectRatio: '16/9',
    },
  ];
  const handleSlideChange = (swiperRef: React.RefObject<any>, direction: 'prev' | 'next') => {
    if (!swiperRef || !swiperRef.current) {
      return;
    }

    const swiper = swiperRef.current.swiper;
    if (!swiper) {
      return;
    }

    if (direction === 'prev') {
      swiper.slidePrev();
    } else {
      swiper.slideNext();
    }
  };
  return (
    <div className="border border-line bg-background">
      <div className="grid grid-cols-1 gap-8 p-10">
        {/* Title Section */}
        <div className="space-y-2">
          <div className="flex items-center gap-3">
            <FaRobot className="text-2xl text-primary" />
            <Heading level={2} className="font-display text-3xl font-semibold">
              AI Container Damage Detection
            </Heading>
          </div>
          <Text type="body" size="sm" color="secondary" className="block font-mono">
            Overcoming inspection challenges with computer vision &amp; 3D AI
          </Text>
        </div>

        {/* Enhanced Gallery Section - Original Structure Maintained */}
        <div className="group/gallery relative">
          {/* Navigation Arrows */}
          <div className="absolute inset-y-0 z-20 flex w-full items-center justify-between px-4">
            <IconButton
              label="Previous container image"
              icon={<FaChevronLeft className="size-5" />}
              onClick={() => handleSlideChange(containerSwiperRef, 'prev')}
              className={`${navClasses.containerNav.prev} rounded-none border border-line bg-background/90 hover:bg-background`}
            />
            <IconButton
              label="Next container image"
              icon={<FaChevronRight className="size-5" />}
              onClick={() => handleSlideChange(containerSwiperRef, 'next')}
              className={`${navClasses.containerNav.next} rounded-none border border-line bg-background/90 hover:bg-background`}
            />
          </div>

          {/* Swiper Container */}
          <div className="relative isolate overflow-hidden bg-secondary py-8">
            <Swiper
              ref={containerSwiperRef}
              modules={[Navigation, Autoplay, Pagination]}
              slidesPerView={1}
              centeredSlides
              loop
              speed={800}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              pagination={{
                clickable: true,
                dynamicBullets: true,
              }}
              navigation={{
                prevEl: `.${navClasses.containerNav.prev}`,
                nextEl: `.${navClasses.containerNav.next}`,
              }}
              breakpoints={{
                640: { slidesPerView: 1.1, spaceBetween: 20 },
                1024: { slidesPerView: 1.3, spaceBetween: 30 },
                1280: { slidesPerView: 1.4, spaceBetween: 40 },
              }}
              className="!overflow-visible"
            >
              {containerImages.map((imgPath, idx) => (
                <SwiperSlide key={idx}>
                  <div
                    className="relative mx-auto overflow-hidden border border-line"
                    style={{
                      aspectRatio: '16/9',
                      maxWidth: '800px',
                      maxHeight: '450px',
                    }}
                  >
                    <div className="relative size-full">
                      <Image
                        src={imgPath.src!}
                        alt={`Container inspection example ${idx + 1}`}
                        fill
                        className="object-contain"
                        sizes="(max-width: 800px) 100vw, 800px"
                        placeholder="blur"
                        blurDataURL={PLACEHOLDER_BLUR_DATA_URL}
                        unoptimized
                        style={{
                          padding: '1rem',
                          objectPosition: 'center center',
                        }}
                      />
                    </div>
                    <span className="absolute bottom-3 right-3 z-10 bg-ink px-2.5 py-1 font-mono text-xs text-paper">
                      Scan
                      {' '}
                      {idx + 1}
                    </span>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>

        {/* Challenge/Solution Section */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          <div className="border-t-2 border-destructive pt-5">
            <Heading level={3} className="flex items-center gap-2 font-display text-xl font-semibold">
              <FaExclamationTriangle className="text-destructive" />
              Inspection challenges
            </Heading>
            <ul className="mt-4 space-y-3">
              {[
                '15-20 day container wait times',
                'Subjective manual inspections',
                'High storage costs ($1/day)',
                'Safety risks at height',
              ].map(item => (
                <li key={item} className="flex items-center gap-3">
                  <FaTimes className="shrink-0 text-destructive" />
                  <Text type="body" color="secondary">{item}</Text>
                </li>
              ))}
            </ul>
          </div>

          <div className="border-t-2 border-verify pt-5">
            <Heading level={3} className="flex items-center gap-2 font-display text-xl font-semibold">
              <FaMagic className="text-verify" />
              AI solutions
            </Heading>
            <ul className="mt-4 space-y-3">
              {[
                '2mm precision 3D scanning',
                'Automated damage classification',
                'Real-time EIR generation',
                'Mobile field deployment',
              ].map(item => (
                <li key={item} className="flex items-center gap-3">
                  <FaCheck className="shrink-0 text-verify" />
                  <Text type="body" color="secondary">{item}</Text>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Performance Metrics */}
        <div className="border-t border-line pt-6">
          <Heading level={3} className="flex items-center gap-2 font-display text-xl font-semibold">
            <FaTrophy className="text-primary" />
            Performance leadership
          </Heading>
          <div className="mt-4 grid grid-cols-2 gap-4">
            {[
              { value: '-70%', label: 'Inspection time', icon: FaClock },
              { value: '24/7', label: 'Operation', icon: FaSyncAlt },
              { value: '99.8%', label: 'Accuracy', icon: FaCrosshairs },
              { value: '2mm', label: 'Detection precision', icon: FaRuler },
            ].map(stat => (
              <Card key={stat.label} padding={5} className="rounded-none border-line">
                <stat.icon className="mb-2 text-lg text-primary" />
                <Text type="body" color="inherit" className="block font-mono text-2xl font-medium tabular-nums">
                  {stat.value}
                </Text>
                <Text type="body" size="sm" color="secondary" className="mt-1 block">{stat.label}</Text>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

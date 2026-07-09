import { Card } from '@astryxdesign/core/Card';
import { Heading } from '@astryxdesign/core/Heading';
import { IconButton } from '@astryxdesign/core/IconButton';
import { Text } from '@astryxdesign/core/Text';
import Image from 'next/image';
import { useRef } from 'react';
import { FaAngleRight, FaBalanceScale, FaCar, FaChartLine, FaChevronLeft, FaChevronRight, FaExclamationCircle, FaExclamationTriangle, FaMicrochip } from 'react-icons/fa';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import { VideoPlayer } from './Videoplayer';

const PLACEHOLDER_BLUR_DATA_URL = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjJmMmYyIi8+PC9zdmc+';

export const TrafficMonitoring = () => {
  const trafficSwiperRef = useRef(null);

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

  const trafficImages = [
    {
      type: 'image',
      src: '/assets/images/vehical1.png',
      aspectRatio: '16/9',
      unoptimized: true,
    },
    {
      type: 'image',
      src: '/assets/images/vehical2.png',
      aspectRatio: '16/9',
      unoptimized: true,
    },
    {
      type: 'image',
      src: '/assets/images/vehical3.png',
      aspectRatio: '16/9',
      unoptimized: true,
    },
    {
      type: 'video',
      url: 'https://www.youtube.com/watch?v=Z79WH3ehkZA',
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
            <FaCar className="text-2xl text-primary" />
            <Heading level={2} className="font-display text-3xl font-semibold">
              AI Traffic Violation Detection
            </Heading>
          </div>
          <Text type="body" size="sm" color="secondary" className="block font-mono">
            Real-time enforcement, trained on Vietnamese traffic data
          </Text>
        </div>

        {/* Enhanced Gallery Section */}
        <div className="group/gallery relative">
          {/* Navigation Arrows */}
          <div className="absolute inset-y-0 z-20 flex w-full items-center justify-between px-4">
            <IconButton
              label="Previous traffic image"
              icon={<FaChevronLeft className="size-5" />}
              onClick={() => handleSlideChange(trafficSwiperRef, 'prev')}
              className={`${navClasses.trafficNav.prev} rounded-none border border-line bg-background/90 hover:bg-background`}
            />
            <IconButton
              label="Next traffic image"
              icon={<FaChevronRight className="size-5" />}
              onClick={() => handleSlideChange(trafficSwiperRef, 'next')}
              className={`${navClasses.trafficNav.next} rounded-none border border-line bg-background/90 hover:bg-background`}
            />
          </div>

          {/* Swiper Container */}
          <div className="relative isolate overflow-hidden bg-secondary py-8">
            <Swiper
              ref={trafficSwiperRef}
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
                prevEl: `.${navClasses.trafficNav.prev}`,
                nextEl: `.${navClasses.trafficNav.next}`,
              }}
              breakpoints={{
                640: { slidesPerView: 1.1, spaceBetween: 20 },
                1024: { slidesPerView: 1.3, spaceBetween: 30 },
                1280: { slidesPerView: 1.4, spaceBetween: 40 },
              }}
              className="!overflow-visible"
            >
              {trafficImages.map((item, idx) => (
                <SwiperSlide key={idx}>
                  <div
                    className="relative mx-auto overflow-hidden border border-line"
                    style={{
                      aspectRatio: '16/9',
                      maxWidth: '800px',
                      maxHeight: '450px',
                    }}
                  >
                    {item.type === 'video'
                      ? (
                          <VideoPlayer url={item.url!} />
                        )
                      : (
                          <div className="relative size-full">
                            <Image
                              src={item.src!}
                              alt={`Traffic violation example ${idx + 1}`}
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
                        )}
                    <span className="absolute bottom-3 right-3 z-10 bg-ink px-2.5 py-1 font-mono text-xs text-paper">
                      {item.type === 'video' ? 'Video Demo' : `Violation ${idx + 1}`}
                    </span>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>

        {/* Project Details */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {/* Tech Specs */}
          <div className="space-y-4">
            <Heading level={3} className="flex items-center gap-2 font-display text-xl font-semibold">
              <FaMicrochip className="text-primary" />
              Core technology
            </Heading>
            <ul className="space-y-3">
              {[
                'Vietnam-trained YOLOv8 models',
                'Advanced vehicle tracking algorithms',
                'Multi-camera fusion system',
                'Violation decision-making engine',
                'Edge-cloud hybrid architecture',
              ].map(item => (
                <li key={item} className="border-t border-line pt-3">
                  <Text type="body" color="secondary">{item}</Text>
                </li>
              ))}
            </ul>
          </div>

          {/* Performance Metrics */}
          <div className="space-y-4">
            <Heading level={3} className="flex items-center gap-2 font-display text-xl font-semibold">
              <FaChartLine className="text-primary" />
              System performance
            </Heading>
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: '96.7%', label: 'Violation detection' },
                { value: '0.15s', label: 'Response time' },
                { value: '2', label: 'Violation classes' },
                { value: '40%', label: 'Efficiency gain' },
              ].map(stat => (
                <Card key={stat.label} padding={5} className="rounded-none border-line">
                  <Text type="body" color="inherit" className="block font-mono text-2xl font-medium tabular-nums">
                    {stat.value}
                  </Text>
                  <Text type="body" size="sm" color="secondary" className="mt-1 block">{stat.label}</Text>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Violation Classification */}
        <div className="border-t border-line pt-6">
          <Heading level={3} className="flex items-center gap-2 font-display text-xl font-semibold">
            <FaBalanceScale className="text-primary" />
            Violation categories
          </Heading>
          <div className="mt-4 grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="border-t-2 border-destructive pt-4">
              <Heading level={4} color="inherit" className="flex items-center gap-2 font-medium text-destructive">
                <FaExclamationTriangle />
                Red violations
              </Heading>
              <ul className="mt-3 space-y-2">
                {['Red light running', 'Wrong way driving', 'Dangerous overtaking'].map(item => (
                  <li key={item} className="flex items-center gap-2">
                    <FaAngleRight className="shrink-0 text-destructive" />
                    <Text type="body" color="secondary">{item}</Text>
                  </li>
                ))}
              </ul>
            </div>
            <div className="border-t-2 border-amber-600 pt-4">
              <Heading level={4} color="inherit" className="flex items-center gap-2 font-medium text-amber-600">
                <FaExclamationCircle />
                Yellow violations
              </Heading>
              <ul className="mt-3 space-y-2">
                {['Lane violations', 'Illegal parking', 'Speeding'].map(item => (
                  <li key={item} className="flex items-center gap-2">
                    <FaAngleRight className="shrink-0 text-amber-600" />
                    <Text type="body" color="secondary">{item}</Text>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

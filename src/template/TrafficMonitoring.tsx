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
            <h2 className="font-display text-3xl font-semibold text-foreground">
              AI Traffic Violation Detection
            </h2>
          </div>
          <p className="font-mono text-sm text-muted-foreground">
            Real-time enforcement, trained on Vietnamese traffic data
          </p>
        </div>

        {/* Enhanced Gallery Section */}
        <div className="group/gallery relative">
          {/* Navigation Arrows */}
          <div className="absolute inset-y-0 z-20 flex w-full items-center justify-between px-4">
            <button
              type="button"
              onClick={() => handleSlideChange(trafficSwiperRef, 'prev')}
              className={`${navClasses.trafficNav.prev} border border-line bg-background/90 p-3 transition-colors hover:bg-background`}
              aria-label="Previous traffic image"
            >
              <FaChevronLeft className="size-5 text-foreground" />
            </button>
            <button
              type="button"
              onClick={() => handleSlideChange(trafficSwiperRef, 'next')}
              className={`${navClasses.trafficNav.next} border border-line bg-background/90 p-3 transition-colors hover:bg-background`}
              aria-label="Next traffic image"
            >
              <FaChevronRight className="size-5 text-foreground" />
            </button>
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
                    <span className="bg-ink text-paper absolute bottom-3 right-3 z-10 px-2.5 py-1 font-mono text-xs">
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
            <h3 className="flex items-center gap-2 font-display text-xl font-semibold text-foreground">
              <FaMicrochip className="text-primary" />
              Core technology
            </h3>
            <ul className="space-y-3">
              {[
                'Vietnam-trained YOLOv8 models',
                'Advanced vehicle tracking algorithms',
                'Multi-camera fusion system',
                'Violation decision-making engine',
                'Edge-cloud hybrid architecture',
              ].map(item => (
                <li key={item} className="border-t border-line pt-3 text-muted-foreground">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Performance Metrics */}
          <div className="space-y-4">
            <h3 className="flex items-center gap-2 font-display text-xl font-semibold text-foreground">
              <FaChartLine className="text-primary" />
              System performance
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: '96.7%', label: 'Violation detection' },
                { value: '0.15s', label: 'Response time' },
                { value: '2', label: 'Violation classes' },
                { value: '40%', label: 'Efficiency gain' },
              ].map(stat => (
                <div key={stat.label} className="border border-line p-5">
                  <div className="font-mono text-2xl font-medium tabular-nums text-foreground">
                    {stat.value}
                  </div>
                  <div className="mt-1 text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Violation Classification */}
        <div className="border-t border-line pt-6">
          <h3 className="flex items-center gap-2 font-display text-xl font-semibold text-foreground">
            <FaBalanceScale className="text-primary" />
            Violation categories
          </h3>
          <div className="mt-4 grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="border-t-2 border-destructive pt-4">
              <h4 className="flex items-center gap-2 font-medium text-destructive">
                <FaExclamationTriangle />
                Red violations
              </h4>
              <ul className="mt-3 space-y-2 text-muted-foreground">
                {['Red light running', 'Wrong way driving', 'Dangerous overtaking'].map(item => (
                  <li key={item} className="flex items-center gap-2">
                    <FaAngleRight className="shrink-0 text-destructive" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="border-t-2 border-amber-600 pt-4">
              <h4 className="flex items-center gap-2 font-medium text-amber-600">
                <FaExclamationCircle />
                Yellow violations
              </h4>
              <ul className="mt-3 space-y-2 text-muted-foreground">
                {['Lane violations', 'Illegal parking', 'Speeding'].map(item => (
                  <li key={item} className="flex items-center gap-2">
                    <FaAngleRight className="shrink-0 text-amber-600" />
                    {item}
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

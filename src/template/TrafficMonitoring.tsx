import { motion } from 'framer-motion';
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
    <div className="overflow-hidden rounded-[2rem] border-2 border-white/20 bg-white shadow-2xl backdrop-blur-xl">
      <div className="grid grid-cols-1 gap-8 p-10">
        {/* Title Section */}
        <div className="space-y-4">
          <div className="inline-flex items-center rounded-2xl bg-gradient-to-r from-red-600 to-yellow-500 px-6 py-4 backdrop-blur-sm">
            <FaCar className="mr-3 text-4xl text-white" />
            <h2 className="text-4xl font-bold text-white">
              AI Traffic Violation Detection
            </h2>
          </div>
          <p className="text-2xl text-gray-600">
            Real-time traffic law enforcement system with Vietnamese data-trained models
          </p>
        </div>

        {/* Enhanced Gallery Section */}
        <div className="group/gallery relative">
          {/* Navigation Arrows */}
          <div className="absolute inset-y-0 z-20 flex w-full items-center justify-between px-4">
            <button
              onClick={() => handleSlideChange(trafficSwiperRef, 'prev')}
              className={`${navClasses.trafficNav.prev} rounded-full bg-black/30 p-3 backdrop-blur-lg transition duration-200 hover:scale-110 hover:bg-black/50`}
              aria-label="Previous traffic image"
            >
              <FaChevronLeft className="size-6 text-white" />
            </button>
            <button
              onClick={() => handleSlideChange(trafficSwiperRef, 'next')}
              className={`${navClasses.trafficNav.next} rounded-full bg-black/30 p-3 backdrop-blur-lg transition duration-200 hover:scale-110 hover:bg-black/50`}
              aria-label="Next traffic image"
            >
              <FaChevronRight className="size-6 text-white" />
            </button>
          </div>

          {/* Swiper Container */}
          <div className="relative isolate overflow-hidden bg-gray-100 py-8">
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
                    className="relative mx-auto overflow-hidden rounded-xl shadow-2xl"
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
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/20 to-transparent" />
                    <span className="absolute bottom-4 right-4 z-10 rounded-full bg-black/30 px-3 py-1.5 text-sm font-medium text-white backdrop-blur-sm">
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
          <div className="space-y-6">
            <h3 className="flex items-center text-2xl font-bold text-red-600">
              <FaMicrochip className="mr-2" />
              Core Technology
            </h3>
            <ul className="space-y-4 text-lg">
              {[
                'Vietnam-trained YOLOv8 models',
                'Advanced vehicle tracking algorithms',
                'Multi-camera fusion system',
                'Violation decision-making engine',
                'Edge-cloud hybrid architecture',
              ].map((item, idx) => (
                <motion.li
                  key={idx}
                  className="flex items-center rounded-lg bg-red-50/50 p-4 backdrop-blur-sm"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="mr-3 size-2 rounded-full bg-red-600" />
                  {item}
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Performance Metrics */}
          <div className="space-y-6">
            <h3 className="flex items-center text-2xl font-bold text-yellow-600">
              <FaChartLine className="mr-2" />
              System Performance
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: '96.7%', label: 'Violation Detection' },
                { value: '0.15s', label: 'Response Time' },
                {
                  value: 'Red/Yellow',
                  label: 'Violation Classification',
                  badge: (
                    <div className="mt-2 flex gap-2">
                      <span className="rounded-full bg-red-100 px-2 py-1 text-xs text-red-800">Red Violations</span>
                      <span className="rounded-full bg-yellow-100 px-2 py-1 text-xs text-yellow-800">Yellow Violations</span>
                    </div>
                  ),
                },
                { value: '40%', label: 'Efficiency Improvement' },
              ].map((stat, idx) => (
                <motion.div
                  key={idx}
                  className="rounded-xl bg-yellow-50/50 p-6 backdrop-blur-sm"
                  whileHover={{ y: -5 }}
                >
                  <div className="text-3xl font-bold text-yellow-600">
                    {stat.value}
                  </div>
                  <div className="text-gray-600">{stat.label}</div>
                  {stat.badge && stat.badge}
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Violation Classification */}
        <div className="space-y-6">
          <h3 className="flex items-center text-2xl font-bold text-gray-800">
            <FaBalanceScale className="mr-2" />
            Violation Categories
          </h3>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div className="rounded-xl bg-red-50/80 p-6 backdrop-blur-sm">
              <h4 className="mb-3 flex items-center text-lg font-bold text-red-600">
                <FaExclamationTriangle className="mr-2" />
                Red Violations
              </h4>
              <ul className="space-y-2 text-gray-700">
                {['Red light running', 'Wrong way driving', 'Dangerous overtaking'].map((item, idx) => (
                  <li key={idx} className="flex items-center">
                    <FaAngleRight className="mr-2 text-red-500" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-xl bg-yellow-50/80 p-6 backdrop-blur-sm">
              <h4 className="mb-3 flex items-center text-lg font-bold text-yellow-600">
                <FaExclamationCircle className="mr-2" />
                Yellow Violations
              </h4>
              <ul className="space-y-2 text-gray-700">
                {['Lane violations', 'Illegal parking', 'Speeding'].map((item, idx) => (
                  <li key={idx} className="flex items-center">
                    <FaAngleRight className="mr-2 text-yellow-500" />
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

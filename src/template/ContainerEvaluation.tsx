import { motion } from 'framer-motion';
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
      url: '/assets/images/container4.png',
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
    <div className="overflow-hidden rounded-[2rem] border-2 border-white/20 bg-gradient-to-br from-gray-50 to-blue-50 shadow-2xl backdrop-blur-xl">
      <div className="grid grid-cols-1 gap-8 p-10">
        {/* Title Section */}
        <div className="space-y-4">
          <div className="inline-flex items-center rounded-2xl bg-gradient-to-r from-blue-600 to-green-600 px-8 py-5 shadow-lg">
            <FaRobot className="mr-4 text-5xl text-white" />
            <div>
              <h2 className="text-4xl font-bold text-white">
                AI Container Damage Detection
              </h2>
              <p className="mt-2 text-xl text-white/90">
                Overcoming Inspection Challenges with Computer Vision & 3D AI
              </p>
            </div>
          </div>
        </div>

        {/* Enhanced Gallery Section - Original Structure Maintained */}
        <div className="group/gallery relative">
          {/* Navigation Arrows */}
          <div className="absolute inset-y-0 z-20 flex w-full items-center justify-between px-4">
            <button
              onClick={() => handleSlideChange(containerSwiperRef, 'prev')}
              className={`${navClasses.containerNav.prev} rounded-full bg-black/30 p-3 backdrop-blur-lg transition duration-200 hover:scale-110 hover:bg-black/50`}
              aria-label="Previous container image"
            >
              <FaChevronLeft className="size-6 text-white" />
            </button>
            <button
              onClick={() => handleSlideChange(containerSwiperRef, 'next')}
              className={`${navClasses.containerNav.next} rounded-full bg-black/30 p-3 backdrop-blur-lg transition duration-200 hover:scale-110 hover:bg-black/50`}
              aria-label="Next container image"
            >
              <FaChevronRight className="size-6 text-white" />
            </button>
          </div>

          {/* Swiper Container */}
          <div className="relative isolate overflow-hidden bg-gray-100 py-8">
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
                    className="relative mx-auto overflow-hidden rounded-xl shadow-2xl"
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
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/20 to-transparent" />
                    <span className="absolute bottom-4 right-4 z-10 rounded-full bg-black/30 px-3 py-1.5 text-sm font-medium text-white backdrop-blur-sm">
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

        {/* New Challenge/Solution Section */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          <div className="rounded-xl bg-red-50/80 p-8 backdrop-blur-sm">
            <h3 className="mb-6 flex items-center text-2xl font-bold text-red-600">
              <FaExclamationTriangle className="mr-2" />
              Inspection Challenges
            </h3>
            <ul className="space-y-4">
              {[
                '15-20 day container wait times',
                'Subjective manual inspections',
                'High storage costs ($1/day)',
                'Safety risks at height',
              ].map((item, idx) => (
                <motion.li
                  key={idx}
                  className="flex items-center rounded-lg bg-white p-4 shadow-sm"
                  whileHover={{ x: 10 }}
                >
                  <FaTimes className="mr-3 text-red-500" />
                  {item}
                </motion.li>
              ))}
            </ul>
          </div>

          <div className="rounded-xl bg-green-50/80 p-8 backdrop-blur-sm">
            <h3 className="mb-6 flex items-center text-2xl font-bold text-green-600">
              <FaMagic className="mr-2" />
              AI Solutions
            </h3>
            <ul className="space-y-4">
              {[
                '2mm precision 3D scanning',
                'Automated damage classification',
                'Real-time EIR generation',
                'Mobile field deployment',
              ].map((item, idx) => (
                <motion.li
                  key={idx}
                  className="flex items-center rounded-lg bg-white p-4 shadow-sm"
                  whileHover={{ x: 10 }}
                >
                  <FaCheck className="mr-3 text-green-500" />
                  {item}
                </motion.li>
              ))}
            </ul>
          </div>
        </div>

        {/* Performance Metrics */}
        <div className="space-y-6">
          <h3 className="flex items-center text-2xl font-bold text-purple-600">
            <FaTrophy className="mr-2" />
            Performance Leadership
          </h3>
          <div className="grid grid-cols-2 gap-4">
            {[
              { value: '-70%', label: 'Inspection Time', icon: FaClock },
              { value: '24/7', label: 'Operation', icon: FaSyncAlt },
              { value: '99.8%', label: 'Accuracy', icon: FaCrosshairs },
              { value: '2mm', label: 'Detection Precision', icon: FaRuler },
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                className="rounded-xl bg-purple-50/80 p-6 backdrop-blur-sm"
                whileHover={{ y: -5 }}
              >
                <stat.icon className="mb-3 text-3xl text-purple-600" />
                <div className="text-3xl font-bold text-purple-600">
                  {stat.value}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

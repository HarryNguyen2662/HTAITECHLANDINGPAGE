import { motion } from 'framer-motion';
import Image from 'next/image';
import { useRef } from 'react';
import { FaChartLine, FaChevronLeft, FaChevronRight, FaExternalLinkAlt, FaMicrochip, FaTrophy } from 'react-icons/fa';
import { FaHelmetSafety } from 'react-icons/fa6';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import { VideoPlayer } from './Videoplayer';

export const HelmetDetection = () => {
  const helmetSwiperRef = useRef(null);
  const media = [
    {
      type: 'image',
      src: '/assets/images/helmet1.png',
      aspectRatio: '16/9',
      unoptimized: true,
    },
    {
      type: 'image',
      src: '/assets/images/helmet2.png',
      aspectRatio: '16/9',
      unoptimized: true,
    },
    {
      type: 'image',
      src: '/assets/images/helmet3.png',
      aspectRatio: '16/9',
      unoptimized: true,
    },
    {
      type: 'video',
      url: 'https://youtu.be/CG7nGs6s_Cs',
      aspectRatio: '16/9',
    },
  ];
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
          <div className="inline-flex items-center rounded-2xl bg-orange-100/80 px-6 py-4 backdrop-blur-sm">
            <FaHelmetSafety className="mr-3 text-4xl text-orange-600" />
            <h2 className="text-4xl font-bold text-gray-900">
              AI Helmet Detection System
            </h2>
          </div>
          <p className="text-2xl text-gray-600">
            Advanced safety monitoring using YOLOv8 with 92% accuracy
          </p>
        </div>

        {/* Enhanced Image Gallery with direct navigation buttons */}
        <div className="group/gallery relative">
          {/* Custom Navigation Arrows */}
          <div className="absolute inset-y-0 z-20 flex w-full items-center justify-between px-4">
            <button
              onClick={() => handleSlideChange(helmetSwiperRef, 'prev')}
              className={`${navClasses.helmetNav.prev} rounded-full bg-black/30 p-3 backdrop-blur-lg transition duration-200 hover:scale-110 hover:bg-black/50`}
              aria-label="Previous image"
            >
              <FaChevronLeft className="size-6 text-white" />
            </button>
            <button
              onClick={() => handleSlideChange(helmetSwiperRef, 'next')}
              className={`${navClasses.helmetNav.next} rounded-full bg-black/30 p-3 backdrop-blur-lg transition duration-200 hover:scale-110 hover:bg-black/50`}
              aria-label="Next image"
            >
              <FaChevronRight className="size-6 text-white" />
            </button>
          </div>

          {/* Gallery Content */}
          <div className="relative isolate overflow-hidden bg-gray-100 py-8">
            <Swiper
              ref={helmetSwiperRef}
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
                prevEl: `.${navClasses.helmetNav.prev}`,
                nextEl: `.${navClasses.helmetNav.next}`,
              }}
              breakpoints={{
                640: { slidesPerView: 1.1, spaceBetween: 20 },
                1024: { slidesPerView: 1.3, spaceBetween: 30 },
                1280: { slidesPerView: 1.4, spaceBetween: 40 },
              }}
              className="!overflow-visible"
            >
              {media.map((item, idx) => (
                <SwiperSlide key={idx}>
                  <div
                    className="relative mx-auto overflow-hidden rounded-xl shadow-2xl"
                    style={{
                      aspectRatio: item.aspectRatio,
                      maxWidth: '700px',
                      margin: '0 auto',
                    }}
                  >
                    {item.type === 'video'
                      ? (
                          <VideoPlayer url={item.url!} />
                        )
                      : (
                          <div key={idx} className="relative size-full">
                            <Image
                              src={item.src!}
                              alt={`Helmet detection sample ${idx + 1}`}
                              fill
                              className="object-contain"
                              sizes="(max-width: 800px) 100vw, (max-width: 1200px) 80vw, 800px"
                              unoptimized={item.unoptimized || false}
                            />
                          </div>
                        )}

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/20 to-transparent" />

                    {/* Media Label */}
                    <span className="absolute bottom-4 right-4 z-10 rounded-full bg-black/30 px-3 py-1.5 text-sm font-medium text-white backdrop-blur-sm">
                      {item.type === 'video' ? 'Video Demo' : `Image ${idx + 1}`}
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
            <h3 className="flex items-center text-2xl font-bold text-orange-600">
              <FaMicrochip className="mr-2" />
              Model Training Details
            </h3>
            <ul className="space-y-4 text-lg">
              {[
                'Trained on 525 images (10% of Hard Hat Workers Dataset)',
                'Re-labeled training set: 314 Head, 1124 Helmet labels',
                'Test set: 1766 images with 1803 Head, 4863 Helmet labels',
                'YOLOv8 medium model, 100 epochs training',
                'Data augmentation: 10x increase in training samples',
              ].map((item, idx) => (
                <motion.li
                  key={idx}
                  className="flex items-center rounded-lg bg-orange-50/50 p-4 backdrop-blur-sm"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="mr-3 size-2 rounded-full bg-orange-600" />
                  {item}
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Performance Metrics */}
          <div className="space-y-6">
            <h3 className="flex items-center text-2xl font-bold text-orange-600">
              <FaTrophy className="mr-2" />
              Model Performance
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: '92%', label: 'Head Detection Accuracy' },
                { value: '87%', label: 'Helmet Detection Accuracy' },
                { value: '30 FPS', label: 'Processing Speed' },
                { value: '98.7%', label: 'mAP Score' },
              ].map((stat, idx) => (
                <motion.div
                  key={idx}
                  className="rounded-xl bg-orange-50/50 p-6 backdrop-blur-sm"
                  whileHover={{ y: -5 }}
                >
                  <div className="text-3xl font-bold text-orange-600">
                    {stat.value}
                  </div>
                  <div className="text-gray-600">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Additional Information Section */}
        <div className="space-y-6">
          <h3 className="flex items-center text-2xl font-bold text-orange-600">
            <FaChartLine className="mr-2" />
            Future Improvements
          </h3>
          <div className="rounded-xl bg-orange-50/50 p-6 backdrop-blur-sm">
            <p className="text-lg text-gray-700">
              With expanded training data (100% of Hard Hat Workers Dataset) and additional sources,
              model accuracy is expected to improve significantly. Current results are impressive
              considering the limited training data (only 10% of available dataset).
            </p>
            <div className="mt-4 flex items-center space-x-2 text-sm text-orange-600">
              <FaExternalLinkAlt />
              <a href="#" className="hover:underline">
                View detailed evaluation results
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

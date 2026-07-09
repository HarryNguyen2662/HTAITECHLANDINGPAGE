import { Card } from '@astryxdesign/core/Card';
import { Heading } from '@astryxdesign/core/Heading';
import { IconButton } from '@astryxdesign/core/IconButton';
import { Text } from '@astryxdesign/core/Text';
import Image from 'next/image';
import { useRef } from 'react';
import { FaChartLine, FaChevronLeft, FaChevronRight, FaMicrochip, FaTrophy } from 'react-icons/fa';
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
    <div className="border border-line bg-background">
      <div className="grid grid-cols-1 gap-8 p-10">
        {/* Title Section */}
        <div className="space-y-2">
          <div className="flex items-center gap-3">
            <FaHelmetSafety className="text-2xl text-primary" />
            <Heading level={2} className="font-display text-3xl font-semibold">
              AI Helmet Detection System
            </Heading>
          </div>
          <Text type="body" size="sm" color="secondary" className="block font-mono">
            YOLOv8 · 92% head detection at 30 FPS
          </Text>
        </div>

        {/* Enhanced Image Gallery with direct navigation buttons */}
        <div className="group/gallery relative">
          {/* Custom Navigation Arrows */}
          <div className="absolute inset-y-0 z-20 flex w-full items-center justify-between px-4">
            <IconButton
              label="Previous image"
              icon={<FaChevronLeft className="size-5" />}
              onClick={() => handleSlideChange(helmetSwiperRef, 'prev')}
              className={`${navClasses.helmetNav.prev} rounded-none border border-line bg-background/90 hover:bg-background`}
            />
            <IconButton
              label="Next image"
              icon={<FaChevronRight className="size-5" />}
              onClick={() => handleSlideChange(helmetSwiperRef, 'next')}
              className={`${navClasses.helmetNav.next} rounded-none border border-line bg-background/90 hover:bg-background`}
            />
          </div>

          {/* Gallery Content */}
          <div className="relative isolate overflow-hidden bg-secondary py-8">
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
                    className="relative mx-auto overflow-hidden border border-line"
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
              Model training
            </Heading>
            <ul className="mt-4 space-y-3 border-t border-line pt-4">
              {[
                'Trained on 525 images (10% of Hard Hat Workers Dataset)',
                'Re-labeled training set: 314 Head, 1124 Helmet labels',
                'Test set: 1766 images with 1803 Head, 4863 Helmet labels',
                'YOLOv8 medium model, 100 epochs training',
                'Data augmentation: 10x increase in training samples',
              ].map(item => (
                <li key={item}>
                  <Text type="body" color="secondary">{item}</Text>
                </li>
              ))}
            </ul>
          </div>

          {/* Performance Metrics */}
          <div className="space-y-4">
            <Heading level={3} className="flex items-center gap-2 font-display text-xl font-semibold">
              <FaTrophy className="text-primary" />
              Model performance
            </Heading>
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: '92%', label: 'Head detection accuracy' },
                { value: '87%', label: 'Helmet detection accuracy' },
                { value: '30 FPS', label: 'Processing speed' },
                { value: '98.7%', label: 'mAP score' },
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

        {/* Additional Information Section */}
        <div className="border-t border-line pt-6">
          <Heading level={3} className="flex items-center gap-2 font-display text-xl font-semibold">
            <FaChartLine className="text-primary" />
            Future improvements
          </Heading>
          <Text type="body" color="secondary" className="mt-3 block">
            With expanded training data (100% of Hard Hat Workers Dataset) and additional sources,
            model accuracy is expected to improve significantly. Current results are strong
            considering the limited training data (only 10% of available dataset).
          </Text>
        </div>
      </div>
    </div>
  );
};

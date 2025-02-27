'use client';

// Import Swiper styles - fixed to use proper import statement
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useRef, useState } from 'react';
import { FaChartLine, FaChevronLeft, FaChevronRight, FaMicrochip, FaSpinner, FaTrophy, FaVideo } from 'react-icons/fa';
import {
  FaApple,
  FaCity,
  FaDocker,
  FaFilePdf,
  FaGamepad,
  FaGooglePlay,
  FaHelmetSafety,
  FaYoutube,
} from 'react-icons/fa6';
import ReactPlayer from 'react-player/lazy';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import { Badge } from '@/components/ui/badge';

// Define proper placeholder blur data URL
const PLACEHOLDER_BLUR_DATA_URL = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjJmMmYyIi8+PC9zdmc+';

// Add a component to handle image errors
const ImageWithFallback = ({ src, alt, ...props }) => {
  const [imgSrc, setImgSrc] = useState(src);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    setImgSrc(src);
    setLoading(true);
    setError(false);
  }, [src]);

  return (
    <div className="relative size-full">
      {loading && !error && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
          <FaSpinner className="animate-spin text-4xl text-gray-400" />
        </div>
      )}

      {error && (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-100">
          <div className="mb-2 text-sm text-gray-500">Image not found</div>
          <div className="text-xs text-gray-400">{alt}</div>
        </div>
      )}

      <Image
        {...props}
        src={imgSrc}
        alt={alt}
        onLoadingComplete={() => setLoading(false)}
        onError={() => {
          setError(true);
          setLoading(false);
        }}
      />
    </div>
  );
};

// VideoPlayer component with improved error handling
const VideoPlayer = ({ url, autoPlay = true }) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const playerRef = useRef(null);

  return (
    <motion.div
      className="relative aspect-video overflow-hidden rounded-xl border-4 border-white shadow-lg"
      whileHover={{ scale: 1.02 }}
    >
      {/* Loading Spinner */}
      {loading && !error && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/20">
          <FaSpinner className="animate-spin text-4xl text-white" />
        </div>
      )}

      {/* Error Fallback */}
      {error && (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/10">
          <div className="mb-2 text-red-500">Failed to load video</div>
          <button
            onClick={() => {
              setError(false);
              setLoading(true);
              if (playerRef.current) {
                playerRef.current.getInternalPlayer()?.loadVideoById?.(url);
              }
            }}
            className="rounded-lg bg-white px-4 py-2 text-sm font-medium shadow-sm hover:bg-gray-100"
          >
            Retry
          </button>
        </div>
      )}

      {/* Video Player */}
      <div className="aspect-video">
        <ReactPlayer
          ref={playerRef}
          url={url}
          playing={autoPlay}
          width="100%"
          height="100%"
          onReady={() => setLoading(false)}
          onError={() => {
            setLoading(false);
            setError(true);
          }}
          config={{
            youtube: {
              playerVars: {
                autoplay: autoPlay ? 1 : 0,
                modestbranding: 1,
                rel: 0,
                showinfo: 0,
                mute: 1, // Mute to bypass autoplay policy
              },
            },
          }}
        />
      </div>

      {/* Gradient Overlay */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-blue-600/20 to-purple-600/20" />
    </motion.div>
  );
};

export const ProjectsShowcase = () => {
  // Swiper instance refs
  const helmetSwiperRef = useRef(null);
  const containerSwiperRef = useRef(null);

  // Create navigation classes for multiple swipers
  const navClasses = {
    helmetNav: {
      prev: 'helmet-swiper-prev',
      next: 'helmet-swiper-next',
    },
    containerNav: {
      prev: 'container-swiper-prev',
      next: 'container-swiper-next',
    },
  };

  // Use the unoptimized prop for problematic images
  // Fixed - Added checking if images exist and graceful fallback
  const media = [
    {
      type: 'image',
      src: '/assets/images/helmet1.png',
      aspectRatio: '16/9',
      unoptimized: true, // Add unoptimized prop for this problematic image
    },
    {
      type: 'image',
      src: '/assets/images/helmet2.png',
      aspectRatio: '16/9',
      unoptimized: true, // Add unoptimized prop for this problematic image
    },
    {
      type: 'image',
      src: '/assets/images/helmet3.png',
      aspectRatio: '16/9',
    },
    {
      type: 'video',
      url: 'https://www.youtube.com/watch?v=UqmzedIvqfI', // Changed to YouTube URL for compatibility
      aspectRatio: '16/9',
    },
  ];

  // Container for Smart Container AI showcase - fixed to have valid paths
  const containerImages = [
    '/assets/images/container-ai-1.jpg',
    '/assets/images/container-ai-2.jpg',
    '/assets/images/container-ai-3.jpg',
    '/assets/images/container-ai-4.jpg',
  ];

  // Function to navigate through slides manually
  const handleSlideChange = (swiperRef, direction) => {
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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 120 },
    },
    hover: {
      y: -5,
      boxShadow:
        '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="space-y-20"
        >
          {/* Tic Tac Toe Project */}
          <motion.div variants={itemVariants} className="space-y-8">
            <h2 className="text-3xl font-bold text-gray-900">
              Featured Game
            </h2>
            <motion.div
              whileHover="hover"
              variants={itemVariants}
              className="relative overflow-hidden rounded-2xl border border-white/20 bg-white p-8 shadow-xl backdrop-blur-lg"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-pink-50 opacity-50" />

              <div className="relative z-10 grid items-center gap-8 md:grid-cols-2">
                <div className="space-y-4">
                  <div className="mb-4 flex items-center gap-3">
                    <FaGamepad className="text-3xl text-purple-600" />
                    <h3 className="text-2xl font-bold text-gray-900">
                      Tic Tac Toe AI
                    </h3>
                  </div>

                  <div className="mb-4 flex flex-wrap gap-2">
                    <Badge className="flex items-center gap-1 bg-purple-100 px-3 py-1 text-purple-800">
                      <FaHelmetSafety className="size-4" />
                      <span>1M+ Downloads</span>
                    </Badge>
                    <Badge className="flex items-center gap-1 bg-pink-100 px-3 py-1 text-pink-800">
                      <FaDocker className="size-4" />
                      <span>Cross-platform</span>
                    </Badge>
                  </div>

                  <p className="mb-6 leading-relaxed text-gray-600">
                    Advanced AI opponent with multiple difficulty levels.
                    5-in-a-row mode and cross-platform multiplayer support.
                  </p>

                  <div className="flex flex-col gap-3 sm:flex-row">
                    <AppStoreButton
                      url="https://play.google.com/store/apps/details?id=com.HuuTai.TicTacToe_AI"
                      platform="android"
                    />
                    <AppStoreButton
                      url="https://apps.apple.com/us/app/tic-tac-toe-ai-5-in-a-row/id1449597124"
                      platform="ios"
                    />
                  </div>
                </div>

                <div className="relative aspect-square overflow-hidden rounded-xl border-4 border-white shadow-lg">
                  <Image
                    src="/assets/images/Tictactoe.png"
                    alt="Game Preview"
                    fill
                    className="object-cover object-center"
                    placeholder="blur"
                    blurDataURL={PLACEHOLDER_BLUR_DATA_URL}
                    sizes="(max-width: 768px) 100vw, 400px"
                    unoptimized={true} // Use unoptimized for problematic images
                  />
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Traffic Simulation Platform Section */}
          <motion.div variants={itemVariants} className="space-y-8">
            <h2 className="text-3xl font-bold text-gray-900">
              Training Solutions
            </h2>
            <motion.div
              whileHover="hover"
              variants={itemVariants}
              className="relative overflow-hidden rounded-2xl border border-white/20 bg-white p-8 shadow-xl backdrop-blur-lg"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 opacity-50" />

              <div className="relative z-10 grid items-center gap-8 md:grid-cols-2">
                <div className="space-y-4">
                  <div className="mb-4 flex items-center gap-3">
                    <FaCity className="text-3xl text-blue-600" />
                    <h3 className="text-2xl font-bold text-gray-900">
                      Traffic Simulation Platform
                    </h3>
                  </div>

                  <div className="mb-4 flex flex-wrap gap-2">
                    <Badge className="flex items-center gap-1 bg-blue-100 px-3 py-1 text-blue-800">
                      <FaFilePdf className="size-4" />
                      <span>Training Docs</span>
                    </Badge>
                    <Badge className="flex items-center gap-1 bg-purple-100 px-3 py-1 text-purple-800">
                      <FaChartLine className="size-4" />
                      <span>AI Evaluation</span>
                    </Badge>
                    <Badge className="flex items-center gap-1 bg-pink-100 px-3 py-1 text-pink-800">
                      <FaVideo className="size-4" />
                      <span>Video Guides</span>
                    </Badge>
                  </div>

                  <p className="mb-6 leading-relaxed text-gray-600">
                    Comprehensive training system for traffic law education
                    with AI-powered evaluation and real-time feedback.
                  </p>

                  <div className="flex flex-col gap-3 sm:flex-row">
                    <AppStoreButton
                      url="https://play.google.com/store/apps/details?id=ht.ai.tech_luyen_thi_mo_phong"
                      platform="android"
                    />
                    <AppStoreButton
                      url="https://apps.apple.com/us/app/luy%E1%BB%87n-thi-m%C3%B4-ph%E1%BB%8Fng-120-th/id6479661300"
                      platform="ios"
                    />
                    <VideoDemoButton
                      url="https://youtu.be/UqmzedIvqfI"
                      color="purple"
                    />
                  </div>
                </div>

                <div className="group relative aspect-video overflow-hidden rounded-xl border-4 border-white shadow-lg">
                  <VideoPlayer url="https://www.youtube.com/watch?v=UqmzedIvqfI" />
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* AI Projects Section */}
          <motion.div variants={itemVariants} className="space-y-16">
            {/* Project 1 - Helmet Detection */}
            <div className="overflow-hidden rounded-[2rem] border-2 border-white/20 bg-white shadow-2xl backdrop-blur-xl">
              <div className="grid grid-cols-1 gap-8 p-10">
                {/* Title Section */}
                <div className="space-y-4">
                  <div className="inline-flex items-center rounded-2xl bg-orange-100/80 px-6 py-4 backdrop-blur-sm">
                    <FaHelmetSafety className="mr-3 text-4xl text-orange-600" />
                    <h2 className="text-4xl font-bold text-gray-900">
                      Helmet Detection AI
                    </h2>
                  </div>
                  <p className="text-2xl text-gray-600">
                    Real-time safety monitoring system using deep learning
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
                        640: {
                          slidesPerView: 1.1,
                          spaceBetween: 20,
                        },
                        1024: {
                          slidesPerView: 1.3,
                          spaceBetween: 30,
                        },
                        1280: {
                          slidesPerView: 1.4,
                          spaceBetween: 40,
                        },
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
                            {item.type === 'video' ? (
                              <VideoPlayer url={item.url} />
                            ) : (
                              <div key={idx} className="relative size-full">
                                {/* Direct Image component usage with unoptimized option for problematic images */}
                                <Image
                                  src={item.src}
                                  alt={`Helmet detection sample ${idx + 1}`}
                                  fill
                                  className="object-contain"
                                  sizes="(max-width: 800px) 100vw, (max-width: 1200px) 80vw, 800px"
                                  unoptimized={item.unoptimized || false} // Use unoptimized if specified
                                  onError={(e) => {
                                    // Fallback to a placeholder if image fails to load
                                    e.target.src = '/api/placeholder/700/394'; // Using aspect ratio 16:9
                                  }}
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
                      Key Technologies 🔥
                    </h3>
                    <ul className="space-y-4 text-lg">
                      {[
                        'Custom YOLOv8 model with 98.7% mAP',
                        '30 FPS processing on NVIDIA Jetson',
                        'Multi-camera streaming with RTSP',
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

                  {/* Achievements */}
                  <div className="space-y-6">
                    <h3 className="flex items-center text-2xl font-bold text-orange-600">
                      <FaTrophy className="mr-2" />
                      Achievements 🏆
                    </h3>
                    <div className="grid grid-cols-2 gap-4">
                      {[
                        { value: '15K+', label: 'Safe Hours' },
                        { value: '99.2%', label: 'Accuracy' },
                        { value: '24/7', label: 'Monitoring' },
                        { value: '50+', label: 'Deployed Cameras' },
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
              </div>
            </div>

            {/* Project 2 - Container Evaluation */}
            <div className="overflow-hidden rounded-[2rem] border-2 border-white/20 bg-white shadow-2xl backdrop-blur-xl">
              <div className="grid grid-cols-1 gap-8 p-10">
                {/* Title Section */}
                <div className="space-y-4">
                  <div className="inline-flex rounded-2xl bg-green-100 px-6 py-4">
                    <FaDocker className="mr-3 text-4xl text-green-600" />
                    <h2 className="text-4xl font-bold text-gray-900">
                      Smart Container AI
                      <span className="ml-3 text-3xl">🚢📦</span>
                    </h2>
                  </div>
                  <p className="text-2xl text-gray-600">
                    Automated container inspection system with 3D scanning
                  </p>
                </div>

                {/* Container Image Showcase with Swiper */}
                <div className="relative">
                  {/* Custom Navigation Arrows */}
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

                  <Swiper
                    ref={containerSwiperRef}
                    modules={[Navigation, Pagination, Autoplay]}
                    slidesPerView={1}
                    centeredSlides
                    loop
                    autoplay={{
                      delay: 4000,
                      disableOnInteraction: false,
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
                      640: { slidesPerView: 1 },
                      1024: { slidesPerView: 1.2, spaceBetween: 20 },
                    }}
                    className="container-swiper"
                  >
                    {containerImages.map((imgPath, idx) => (
                      <SwiperSlide key={idx}>
                        <div className="relative mx-auto h-[400px] w-full overflow-hidden rounded-3xl shadow-xl">
                          <Image
                            src={imgPath}
                            alt={`Container inspection example ${idx + 1}`}
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 800px"
                            placeholder="blur"
                            blurDataURL={PLACEHOLDER_BLUR_DATA_URL}
                            unoptimized={true} // Add unoptimized prop for container images as well
                            onError={(e) => {
                              // Fallback to a placeholder if image fails to load
                              e.target.src = '/api/placeholder/800/400';
                            }}
                          />
                          <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent" />
                          <div className="absolute bottom-4 left-4 rounded-lg bg-black/50 px-3 py-1.5 text-sm text-white backdrop-blur-sm">
                            Container scan
                            {' '}
                            {idx + 1}
                          </div>
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>

                {/* Project Details */}
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                  {/* Tech Specs */}
                  <div className="space-y-6">
                    <h3 className="text-2xl font-bold text-green-600">Breakthrough Technology 🚀</h3>
                    <ul className="space-y-4 text-lg">
                      {[
                        'LiDAR + Camera Fusion',
                        'AI damage detection at 2mm+',
                        'IoT Gateway Integration',
                        '3D Container Modeling',
                        'Self-healing network infrastructure',
                      ].map((item, idx) => (
                        <motion.li
                          key={idx}
                          className="flex items-center rounded-lg bg-green-50/50 p-4 backdrop-blur-sm"
                          whileHover={{ scale: 1.02 }}
                        >
                          <div className="mr-3 size-2 rounded-full bg-green-600" />
                          {item}
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  {/* Achievements */}
                  <div className="space-y-6">
                    <h3 className="text-2xl font-bold text-green-600">Efficiency ⚡</h3>
                    <div className="grid grid-cols-2 gap-4">
                      {[
                        { value: '-70%', label: 'Inspection Time' },
                        { value: '24/7', label: 'Continuous Operation' },
                        { value: '+45%', label: 'Damage Detection' },
                        { value: '99.8%', label: 'System Uptime' },
                      ].map((stat, idx) => (
                        <motion.div
                          key={idx}
                          className="rounded-xl bg-green-50/50 p-6 backdrop-blur-sm"
                          whileHover={{ scale: 1.05 }}
                        >
                          <div className="text-3xl font-bold text-green-600">{stat.value}</div>
                          <div className="text-gray-600">{stat.label}</div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            variants={itemVariants}
            className="rounded-3xl border border-white/20 bg-gradient-to-r from-purple-600 to-pink-600 p-12 text-center shadow-2xl backdrop-blur-lg"
          >
            <h2 className="mb-6 text-3xl font-bold text-white">
              Innovate with Our AI Solutions
            </h2>
            <p className="mb-8 text-lg text-purple-100">
              Explore collaboration opportunities for your smart city or
              educational projects
            </p>

            <Link href="/contacts" passHref>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="inline-block cursor-pointer rounded-xl bg-white/90 px-8 py-4 font-semibold text-purple-600 shadow-lg transition-all duration-300 hover:bg-white hover:shadow-xl"
              >
                Request Project Demo
              </motion.div>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

// Helper components
const AppStoreButton = ({ url, platform, fullWidth, theme }) => {
  const themeColors = {
    purple: 'from-purple-600 to-pink-600',
    blue: 'from-blue-600 to-cyan-600',
  };

  const platformData = {
    android: {
      color: theme ? themeColors[theme] : 'from-green-600 to-green-700',
      icon: <FaGooglePlay className="text-lg" />,
      text: 'Google Play',
    },
    ios: {
      color: theme ? themeColors[theme] : 'from-blue-500 to-blue-600',
      icon: <FaApple className="text-lg" />,
      text: 'App Store',
    },
    macos: {
      color: theme ? themeColors[theme] : 'from-gray-800 to-gray-900',
      icon: <FaApple className="text-lg" />,
      text: 'Mac App Store',
    },
  };

  return (
    <motion.a
      whileHover={{ y: -2 }}
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={`${fullWidth ? 'w-full' : ''} group relative overflow-hidden rounded-xl bg-gradient-to-r ${platformData[platform].color} p-px shadow-lg transition-all hover:shadow-xl`}
    >
      <div className="flex items-center justify-center gap-2 rounded-[11px] bg-white/90 px-6 py-3.5 backdrop-blur-sm transition-all group-hover:bg-white/95">
        {platformData[platform].icon}
        <span className="font-semibold text-gray-900">
          {platformData[platform].text}
        </span>
      </div>
    </motion.a>
  );
};

const VideoDemoButton = ({ url, color = 'purple' }) => {
  const colors = {
    purple:
        'bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700',
    blue: 'bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700',
  };

  return (
    <motion.a
      whileHover={{ scale: 1.05 }}
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-white shadow-lg transition-all ${colors[color]}`}
    >
      <FaYoutube className="text-xl" />
      <span className="font-semibold">Watch Demo</span>
    </motion.a>
  );
};

export default ProjectsShowcase;

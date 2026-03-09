// src/components/home/HeroSection.jsx
import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isHovering, setIsHovering] = useState(false)
  const videoRef = useRef(null)

  // Slide data with solid background colors and text colors
  const slides = [
    {
      id: 1,
      type: 'video',
      bgColor: '#000000',
      title: 'Transform Your Space with Premium Paints',
      description: 'Discover our wide range of high-quality paints for every project. From interior to exterior, we have the perfect color for you.',
      ctaText: 'Shop Now',
      ctaLink: '/products',
      secondaryCtaText: 'Learn More',
      secondaryCtaLink: '/about',
      icons: [
        { icon: '/images/icon1.svg', title: 'Premium Quality' },
        { icon: '/images/icon2.svg', title: 'Eco-Friendly' },
        { icon: '/images/icon3.svg', title: 'Long Lasting' },
        { icon: '/images/icon4.svg', title: '1000+ Colors' }
      ]
    },
    {
      id: 2,
      type: 'color',
      bgColor: '#4c271c', // Mid-tone brown
      textColor: '#9C7355', // First slide text color
      title: 'EMBER TONES',
      mainImage: '/images/black_orange.webp',
      topImage: '/images/black-orange1.png',
      bottomImage: '/images/black-orange2.webp',
      ctaLink: '/products/earth-collection'
    },
    {
      id: 3,
      type: 'color',
      bgColor: '#22363A', // Deep teal/green
      textColor: '#6c7171ff', // Second slide text color
      title: 'VERDANT HUES',
      mainImage: '/images/storms.webp',
      topImage: '/images/storms1.webp',
      bottomImage: '/images/storms2.webp',
      ctaLink: '/products/verdant-collection'
    },
    {
      id: 4,
      type: 'color',
      bgColor: '#23221f', // Dark charcoal
      textColor: '#607474', // Third slide text color
      title: 'EVENING GALORE',
      mainImage: '/images/evening.webp',
      topImage: '/images/evening1.webp',
      bottomImage: '/images/evening2.webp',
      ctaLink: '/products/ember-collection'
    }
  ]

  // Auto-advance slides
  useEffect(() => {
    if (!isHovering) {
      const timer = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length)
      }, 5000)
      return () => clearInterval(timer)
    }
  }, [isHovering, slides.length])

  // Handle video play/pause
  useEffect(() => {
    if (videoRef.current) {
      if (slides[currentSlide].type === 'video') {
        videoRef.current.play()
      } else {
        videoRef.current.pause()
      }
    }
  }, [currentSlide, slides])

  const handlePrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  // Animation variants for staggered reveals
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { type: 'spring', stiffness: 100 }
    }
  }

  return (
    <section 
      className="relative h-screen overflow-hidden" 
      onMouseEnter={() => setIsHovering(true)} 
      onMouseLeave={() => setIsHovering(false)}
    >
      {/* Background Video (only for video slide) */}
      <AnimatePresence mode="wait">
        {slides[currentSlide].type === 'video' && (
          <motion.div
            key="video"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0 w-full h-full"
          >
            <video
              ref={videoRef}
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
            >
              <source src="/videos/hero-video.webm" type="video/mp4" />
            </video>
            {/* Dark overlay for text readability */}
            <div className="absolute inset-0 bg-black/40"></div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Solid Color Background Slides */}
      <AnimatePresence mode="wait">
        {slides[currentSlide].type === 'color' && (
          <motion.div
            key={`color-${currentSlide}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="absolute inset-0"
            style={{ backgroundColor: slides[currentSlide].bgColor }}
          />
        )}
      </AnimatePresence>

      {/* Content Container */}
      <div className="relative z-10 container mx-auto px-4 h-full flex items-center">
        <AnimatePresence mode="wait">
          {slides[currentSlide].type === 'video' ? (
            /* Video Slide - With Content Card */
            <motion.div
              key="video-content"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50 }}
              transition={{ duration: 0.5 }}
              className="max-w-2xl mx-auto lg:ml-auto lg:mr-0"
            >
              {/* Premium Content Card */}
              <div className="bg-white/50 backdrop-blur-xl rounded-3xl p-8 lg:p-12 border border-white/20 shadow-2xl">
                {/* Title */}
                <motion.h1 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="text-xl lg:text-4xl font-bold text-black mb-6 leading-tight"
                >
                  {slides[currentSlide].title}
                </motion.h1>

                {/* Icons Grid with Titles */}
                <motion.div 
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                  className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8"
                >
                  {slides[currentSlide].icons.map((item, index) => (
                    <motion.div
                      key={index}
                      variants={itemVariants}
                      className="text-center group"
                    >
                      <div className="relative inline-block">
                        {/* Amber hover circle */}
                        <motion.div
                          whileHover={{ scale: 1.1 }}
                          className="absolute inset-0 rounded-full bg-amber-600/0 group-hover:bg-amber-600/20 transition-all duration-300 -m-2"
                        />
                        <img 
                          src={item.icon}
                          alt={item.title}
                          className="w-12 h-12 lg:w-16 lg:h-16 relative z-10"
                        />
                      </div>
                      <p className="text-sm lg:text-base text-black mt-2 font-medium">
                        {item.title}
                      </p>
                    </motion.div>
                  ))}
                </motion.div>

                {/* CTA Buttons */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="flex flex-wrap gap-4"
                >
                  <Link
                    to={slides[currentSlide].ctaLink}
                    className="bg-white text-gray-900 px-8 py-4 rounded-md font-semibold hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                  >
                    {slides[currentSlide].ctaText}
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          ) : (
            /* Color Slides - With Large Two-Word Title Behind Images (Stacked) */
            <div className="w-full h-full relative flex items-center justify-center">
              {/* Large Two-Word Title Behind Images - Stacked vertically */}
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 0.15, scale: 1 }}
                transition={{ duration: 1, delay: 0.2 }}
                className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[80%] text-center font-black pointer-events-none select-none z-5"
                style={{ 
                  color: slides[currentSlide].textColor,
                  fontFamily: '"Orbitron", "Impact", "Arial Black", sans-serif',
                  textShadow: '4px 4px 8px rgba(0,0,0,0.2)',
                }}
              >
                {/* Split the two words and stack them */}
                <div className="flex flex-col items-center justify-center space-y-4 lg:space-y-8">
                  {slides[currentSlide].title.split(' ').map((word, index) => (
                    <motion.span 
                      key={index}
                      className="block font-black leading-none"
                      style={{
                        fontSize: 'clamp(4rem, 18vw, 14rem)',
                        lineHeight: '0.8',
                        letterSpacing: '0.02em',
                        textTransform: 'uppercase',
                      }}
                    >
                      {word}
                    </motion.span>
                  ))}
                </div>
              </motion.div>

              {/* Images Container */}
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="relative w-full h-[500px] lg:h-[600px] flex items-center justify-center"
              >
                {/* Top Right Image - Increased Size */}
                <motion.div
                  variants={imageVariants}
                  whileHover={{ scale: 1.3 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                  className="absolute top-0 right-[15%] lg:right-[20%] z-20 cursor-pointer"
                >
                  <img 
                    src={slides[currentSlide].topImage}
                    alt="Decorative"
                    className="w-32 h-32 lg:w-40 lg:h-40 object-contain drop-shadow-2xl"
                  />
                </motion.div>

                {/* Center Main Image - Increased Size */}
                <motion.div
                  variants={imageVariants}
                 
                  transition={{ type: 'spring', stiffness: 300 }}
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-30 cursor-pointer"
                >
                  <img 
                    src={slides[currentSlide].mainImage}
                    alt="Paint product"
                    className="w-90 h-90 lg:w-200 lg:h-200 object-contain drop-shadow-2xl"
                  />
                </motion.div>

                {/* Bottom Left Image - Increased Size */}
                <motion.div
                  variants={imageVariants}
                  whileHover={{ scale: 1.3 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                  className="absolute bottom-0 left-[15%] lg:left-[20%] z-20 cursor-pointer"
                >
                  <img 
                    src={slides[currentSlide].bottomImage}
                    alt="Decorative"
                    className="w-36 h-36 lg:w-44 lg:h-44 object-contain drop-shadow-2xl"
                  />
                </motion.div>

                {/* Circular CTA Button */}
                <motion.div
                  variants={itemVariants}
                  className="absolute bottom-4 right-4 z-40"
                >
                  <Link
                    to={slides[currentSlide].ctaLink}
                    className="flex flex-col items-center group"
                  >
                    {/* Circular Button */}
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-24 h-24 lg:w-32 lg:h-32 rounded-full flex items-center justify-center mb-3 shadow-xl cursor-pointer border-2 border-white/30"
                      style={{ backgroundColor: slides[currentSlide].textColor }}
                    >
                      <span className="text-white text-xs lg:text-sm font-bold tracking-wider text-center px-2">
                        SHOP THIS COLOR
                      </span>
                    </motion.div>
                    {/* Optional small indicator */}
                    <motion.div
                      animate={{ y: [0, 5, 0] }}
                      transition={{ repeat: Infinity, duration: 1.5 }}
                      className="w-1 h-4 bg-white/50 rounded-full"
                    />
                  </Link>
                </motion.div>

                {/* Background decorative elements */}
                <div className="absolute inset-0 pointer-events-none">
                  <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
                  <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>

      {/* Premium Navigation Toggles */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex items-center space-x-4">
        {/* Previous Button */}
        <motion.button
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          onClick={handlePrevious}
          className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center hover:bg-white/30 transition-all group"
        >
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </motion.button>

        {/* Slide Indicators */}
        <div className="flex items-center space-x-2">
          {slides.map((_, index) => (
            <motion.button
              key={index}
              whileHover={{ scale: 1.5 }}
              onClick={() => setCurrentSlide(index)}
              className={`transition-all duration-300 ${
                currentSlide === index 
                  ? 'w-12 h-3 bg-white rounded-full' 
                  : 'w-3 h-3 bg-white/50 rounded-full hover:bg-white/80'
              }`}
            />
          ))}
        </div>

        {/* Next Button */}
        <motion.button
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          onClick={handleNext}
          className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center hover:bg-white/30 transition-all group"
        >
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </motion.button>
      </div>
    </section>
  )
}

export default HeroSection
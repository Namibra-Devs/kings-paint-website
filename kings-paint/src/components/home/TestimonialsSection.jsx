// src/components/home/InspireSection.jsx
import { useState, useEffect, useRef } from 'react'
import { motion, useScroll, useTransform, useMotionValueEvent } from 'framer-motion'
import { Play, ChevronLeft, ChevronRight } from 'lucide-react'

const InspireSection = () => {
  const [playingVideo, setPlayingVideo] = useState(null)
  const [currentIndex, setCurrentIndex] = useState(0)
  const videoRefs = useRef([])
  const sectionRef = useRef(null)

  const videoWidth = 360
  const videoHeight = 440
  const gap = 24
  const visibleVideos = 4
  const step = videoWidth + gap

  const inspireVideos = [
    { id: 1, title: "Modern Living Room Transformation", video: "/videos/inspire2.mp4", poster: "/images/inspire/living-room-poster.webp" },
    { id: 2, title: "Exterior Makeover: Before & After", video: "/videos/inspire1.mp4", poster: "/images/inspire/exterior-poster.webp" },
    { id: 3, title: "Color Mixing Techniques", video: "/videos/inspire3.mp4", poster: "/images/inspire/color-poster.webp" },
    { id: 4, title: "Kitchen Cabinet Refresh", video: "/videos/inspire4.mp4", poster: "/images/inspire/kitchen-poster.webp" },
    { id: 5, title: "Modern Home Office Ideas", video: "/videos/inspire6.mp4", poster: "/images/inspire/office-poster.webp" },
    { id: 6, title: "Textured Wall Techniques", video: "/videos/inspire5.mp4", poster: "/images/inspire/texture-poster.webp" },
    { id: 7, title: "Bathroom Renovation Ideas", video: "/videos/inspire7.mp4", poster: "/images/inspire/bathroom-poster.webp" },
    { id: 8, title: "Outdoor Furniture Painting", video: "/videos/inspire8.mp4", poster: "/images/inspire/furniture-poster.webp" },
    { id: 9, title: "Color Psychology in Design", video: "/videos/inspire9.mp4", poster: "/images/inspire/psychology-poster.webp" }
  ]

  const allVideos = [...inspireVideos, ...inspireVideos]
  const maxIndex = inspireVideos.length - visibleVideos // 5 stops

  // ─── Scroll-driven x ───────────────────────────────────────────────────────
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end']
  })

  const maxScroll = maxIndex * step
  const slideX = useTransform(scrollYProgress, [0, 1], [0, -maxScroll])

  // Keep currentIndex in sync with scroll so dots + disabled states are accurate
  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    const index = Math.min(maxIndex, Math.round(latest * maxIndex))
    setCurrentIndex(index)
  })

  // ─── Button / dot navigation → scroll page to matching position ───────────
  const scrollToIndex = (index) => {
    if (!sectionRef.current) return
    const clamped = Math.max(0, Math.min(maxIndex, index))
    const sectionTop = sectionRef.current.getBoundingClientRect().top + window.scrollY
    const sectionHeight = sectionRef.current.offsetHeight
    const scrollableDistance = sectionHeight - window.innerHeight
    const targetProgress = clamped / maxIndex
    const targetY = sectionTop + targetProgress * scrollableDistance
    window.scrollTo({ top: targetY, behavior: 'smooth' })
  }

  const handlePrev = () => scrollToIndex(currentIndex - 1)
  const handleNext = () => scrollToIndex(currentIndex + 1)

  // ─── Video hover ───────────────────────────────────────────────────────────
  const handleVideoHover = (index) => {
    if (videoRefs.current[index]) {
      videoRefs.current[index].play().catch(() => {})
      setPlayingVideo(index)
    }
  }

  const handleVideoLeave = (index) => {
    if (videoRefs.current[index]) {
      videoRefs.current[index].pause()
      videoRefs.current[index].currentTime = 0
      setPlayingVideo(null)
    }
  }

  useEffect(() => {
    return () => {
      videoRefs.current.forEach((video) => {
        if (video) { video.pause(); video.currentTime = 0 }
      })
    }
  }, [])

  // Section height = 100vh (sticky panel) + maxScroll (scroll distance needed)
  const sectionStyle = { minHeight: `calc(100vh + ${maxScroll}px)` }

  return (
    <section
      ref={sectionRef}
      style={sectionStyle}
      className="relative bg-gradient-to-b from-[#0a120a] to-[#1a2a1a] py-20"
    >
      {/* Background decorative gradients */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-5 bg-[radial-gradient(ellipse_at_top_right,_#8B6B4D_0%,_transparent_50%)]" />
        <div className="absolute bottom-0 right-0 w-full h-full opacity-5 bg-[radial-gradient(ellipse_at_bottom_left,_#5D8A7A_0%,_transparent_50%)]" />
      </div>

      {/* Sticky viewport panel */}
      <div className="sticky top-0 h-screen flex items-center overflow-hidden py-24">
        <div className="container mx-auto px-4 relative z-10 w-full">

          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-['Saira_Extra_Condensed'] text-5xl lg:text-7xl font-black text-white uppercase tracking-[-0.02em] mb-4">
              Inspiring Ideas <span className="text-white">For You</span>
            </h2>
            
            <p className="text-amber-800 text-lg mt-6 max-w-2xl mx-auto">
              Discover creative projects and expert techniques
            </p>
          </motion.div>

          {/* Carousel */}
          <div className="relative">
            {/* Fade edges */}
            <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-[#0a120a] to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-[#0a120a] to-transparent z-10 pointer-events-none" />

            {/* Prev */}
            <button
              onClick={handlePrev}
              disabled={currentIndex === 0}
              aria-label="Previous"
              className="absolute -left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-[#C4A962]/20 backdrop-blur-sm border border-[#C4A962]/30 flex items-center justify-center hover:bg-[#C4A962]/40 transition-all disabled:opacity-30 disabled:cursor-not-allowed"
            >
              <ChevronLeft className="w-6 h-6 text-white" />
            </button>

            {/* Next */}
            <button
              onClick={handleNext}
              disabled={currentIndex >= maxIndex}
              aria-label="Next"
              className="absolute -right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-[#C4A962]/20 backdrop-blur-sm border border-[#C4A962]/30 flex items-center justify-center hover:bg-[#C4A962]/40 transition-all disabled:opacity-30 disabled:cursor-not-allowed"
            >
              <ChevronRight className="w-6 h-6 text-white" />
            </button>

            {/* Track */}
            <div className="overflow-hidden">
              <motion.div className="flex gap-6" style={{ x: slideX }}>
                {allVideos.map((video, index) => {
                  const isPlaying = playingVideo === index
                  return (
                    <motion.div
                      key={`${video.id}-${index}`}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: (index % 9) * 0.06 }}
                      viewport={{ once: true }}
                      className="relative group flex-shrink-0"
                      style={{ width: videoWidth }}
                    >
                      <div className="relative rounded-xl overflow-hidden bg-[#1a2a1a] shadow-2xl border border-[#C4A962]/20">
                        <div
                          className="relative overflow-hidden cursor-pointer"
                          style={{ height: videoHeight }}
                          onMouseEnter={() => handleVideoHover(index)}
                          onMouseLeave={() => handleVideoLeave(index)}
                        >
                          <video
                            ref={el => videoRefs.current[index] = el}
                            src={video.video}
                            poster={video.poster}
                            muted
                            playsInline
                            preload="none"
                            className="w-full h-full object-cover"
                          />
                          {!isPlaying && (
                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                          )}
                          {!isPlaying && (
                            <div className="absolute inset-0 flex items-center justify-center">
                              <div className="w-16 h-16 rounded-full bg-[#C4A962] flex items-center justify-center shadow-xl transform group-hover:scale-110 transition-transform">
                                <Play className="w-7 h-7 text-[#1a2a1a] ml-1" />
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  )
                })}
              </motion.div>
            </div>
          </div>

          {/* Dot indicators */}
          <div className="flex justify-center gap-2 mt-10">
            {Array.from({ length: maxIndex + 1 }).map((_, i) => (
              <button
                key={i}
                onClick={() => scrollToIndex(i)}
                aria-label={`Go to slide ${i + 1}`}
                className={`rounded-full transition-all duration-300 ${
                  currentIndex === i
                    ? 'w-6 h-2 bg-[#C4A962]'
                    : 'w-2 h-2 bg-[#C4A962]/30 hover:bg-[#C4A962]/60'
                }`}
              />
            ))}
          </div>

          {/* Scroll hint */}
          <motion.div
            className="flex justify-center items-center gap-4 mt-8"
            style={{ opacity: useTransform(scrollYProgress, [0, 0.15], [1, 0]) }}
          >
            <div className="flex items-center gap-3 text-[#C4A962]/60">
              <span className="text-sm uppercase tracking-wider">Scroll to explore</span>
              <motion.div
                animate={{ x: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
                className="w-8 h-5 border-2 border-[#C4A962]/40 rounded-full flex items-center justify-center"
              >
                <motion.div
                  animate={{ x: [0, 6, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5 }}
                  className="w-2 h-2 bg-[#C4A962] rounded-full"
                />
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}

export default InspireSection
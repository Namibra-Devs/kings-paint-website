// src/components/home/DiscoverSection.jsx
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

const DiscoverSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null)
  const [bgColor, setBgColor] = useState('#171b17ff') // Deep olive black default
  const [enlargedImage, setEnlargedImage] = useState(null)

  // Complete statement with proper line breaks
  const statement = [
    { word: 'DISCOVER', image: '/images/storms1.webp' },
    { word: 'A', image: '/images/discover/a-color.webp' },
    { word: 'COLOR', image: '/images/discover/color.webp' },
    { word: 'THAT', image: '/images/discover/that.webp' },
    { word: 'TRANSFORMS', image: '/images/discover/transforms.webp' },
    { word: 'YOUR', image: '/images/discover/your.webp' },
    { word: 'SPACE', image: '/images/discover/space.webp' },
    { word: 'WITH', image: '/images/discover/with.webp' },
    { word: 'TIMELESS', image: '/images/discover/timeless.webp' },
    { word: 'ELEGANCE', image: '/images/discover/elegance.webp' }
  ]

  // Separator images between words - each with its own color
  const separatorImages = [
    { src: '/images/discover1.webp', color: '#150b01ff' }, // Warm Bronze
    { src: '/images/discover2.webp', color: '#1f2623ff' }, // Sage
    { src: '/images/discover3.webp', color: 'rgba(23, 28, 37, 1)' }, // Forest
    { src: '/images/discover4.webp', color: '#544f35ff' }, // Deep Teal
    { src: '/images/discover5.webp', color: '#9B7E5E' }, // Caramel
    { src: '/images/discover5.webp', color: '#c08a6cff' }, // Taupe
    { src: '/images/black-orange2.webp', color: '#5D8A7A' }, // Seafoam
    { src: '/images/urban1.webp', color: '#3f4a36ff' }, // Olive
    { src: '/images/black-orange2.webp', color: '#62401dff' }  // Greige
  ]

  const handleSeparatorHover = (index, color, imageSrc) => {
    setHoveredIndex(index)
    setBgColor(color) // Changes to separator's color
    setEnlargedImage({ src: imageSrc, index })
  }

  const handleSeparatorLeave = () => {
    setHoveredIndex(null)
    setBgColor('#171b17ff') // Returns to default deep olive black
    setEnlargedImage(null)
  }

  // Group words into lines for proper breaking
  const line1 = statement.slice(0, 5)  // DISCOVER A COLOR THAT TRANSFORMS
  const line2 = statement.slice(5, 7)  // YOUR SPACE
  const line3 = statement.slice(7, 10) // WITH TIMELESS ELEGANCE

  return (
    <section 
      className="relative min-h-screen flex items-center justify-center overflow-hidden transition-colors duration-500"
      style={{ backgroundColor: bgColor }}
    >
      {/* Premium Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_rgba(255,255,255,0.08)_0%,_transparent_50%)]"></div>
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_bottom_left,_rgba(255,255,255,0.08)_0%,_transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[linear-gradient(45deg,_rgba(255,255,255,0.02)_1px,_transparent_1px)] bg-[length:40px_40px]"></div>
      </div>

      {/* Enlarged Image Inside Section - Only for Separators */}
      <AnimatePresence>
        {enlargedImage && (
          <motion.div
            key={enlargedImage.index}
            initial={{ opacity: 0, scale: 0.5, x: '-50%', y: '-50%' }}
            animate={{ 
              opacity: 1, 
              scale: 2.8,
              x: '-50%',
              y: '-50%',
              transition: { 
                type: 'spring',
                stiffness: 250,
                damping: 25
              }
            }}
            exit={{ opacity: 0, scale: 0.5 }}
            className="absolute top-1/2 left-1/2 z-50 pointer-events-none"
            style={{
              width: '180px',
              height: '180px',
              marginLeft: '0',
              marginTop: '0'
            }}
          >
            <div className="relative w-full h-full">
              <img 
                src={enlargedImage.src}
                alt=""
                className="w-full h-full object-cover rounded-3xl shadow-2xl"
                style={{
                  boxShadow: '0 40px 70px rgba(0,0,0,0.6), 0 0 0 2px rgba(255,255,255,0.15)'
                }}
              />
              {/* Premium glow effect */}
              <div className="absolute inset-0 rounded-3xl bg-white/30 blur-3xl -z-10"></div>
              {/* Inner shimmer */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-white/10 to-transparent"></div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="container mx-auto px-4 relative z-10 py-20">
        {/* Premium Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="relative inline-block">
            <h2 className="font-['Saira_Extra_Condensed'] text-white/10 text-8xl lg:text-9xl font-black uppercase tracking-[-0.02em] leading-none select-none">
              DISCOVER
            </h2>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-32 h-[1px] bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
            </div>
          </div>
          <p className="font-['Saira_Extra_Condensed'] text-white/40 text-xl tracking-[0.3em] mt-4">
            SIGNATURE COLLECTIONS
          </p>
        </motion.div>

        {/* Main Statement - Premium Layout */}
        <div className="max-w-7xl mx-auto">
          {/* Line 1: DISCOVER A COLOR THAT TRANSFORMS */}
          <motion.div 
            className="flex flex-wrap items-center justify-center gap-x-4 gap-y-4 mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {line1.map((item, idx) => (
              <motion.span
                key={`line1-${idx}`}
                className="relative inline-flex items-center"
              >
                <Link to={`/discover/${item.word.toLowerCase().replace(/\s+/g, '-')}`}>
                  <span 
                    className={`
                      font-['Saira_Extra_Condensed'] font-black uppercase
                      text-5xl sm:text-6xl md:text-7xl lg:text-9xl
                      leading-none tracking-[-0.02em] transition-all duration-300
                      hover:text-white
                      ${hoveredIndex === `sep-${idx}` ? 'text-white' : 'text-white/80'}
                    `}
                  >
                    {item.word}
                  </span>
                </Link>

                {/* Separator - Only these trigger hover effects */}
                {idx < line1.length - 1 && (
                  <motion.span 
                    className="relative inline-block mx-3 lg:mx-4"
                    onHoverStart={() => handleSeparatorHover(
                      `sep-${idx}`, 
                      separatorImages[idx % separatorImages.length].color,
                      separatorImages[idx % separatorImages.length].src
                    )}
                    onHoverEnd={handleSeparatorLeave}
                  >
                    <Link to="/discover/collection">
                      <motion.div
                        whileHover={{ scale: 1.3, rotate: 90 }}
                        transition={{ type: 'spring', stiffness: 400 }}
                        className="relative cursor-pointer"
                      >
                        <img 
                          src={separatorImages[idx % separatorImages.length].src}
                          alt=""
                          className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 object-cover rounded-md"
                          style={{
                            boxShadow: hoveredIndex === `sep-${idx}`
                              ? '0 0 40px rgba(255,255,255,0.6)'
                              : '0 15px 25px -8px rgba(0,0,0,0.4)',
                            border: hoveredIndex === `sep-${idx}`
                              ? '2px solid rgba(255,255,255,0.6)'
                              : '1px solid rgba(255,255,255,0.1)',
                            transition: 'all 0.3s ease'
                          }}
                        />
                        
                        {/* Pulsing ring on hover */}
                        {hoveredIndex === `sep-${idx}` && (
                          <motion.div
                            className="absolute inset-0 rounded-full"
                            animate={{
                              scale: [1, 1.4, 1],
                              opacity: [0.5, 0, 0.5]
                            }}
                            transition={{
                              repeat: Infinity,
                              duration: 2
                            }}
                            style={{
                              border: '2px solid rgba(255,255,255,0.4)'
                            }}
                          />
                        )}
                      </motion.div>
                    </Link>
                  </motion.span>
                )}
              </motion.span>
            ))}
          </motion.div>

          {/* Line 2: YOUR SPACE */}
          <motion.div 
            className="flex flex-wrap items-center justify-center gap-x-4 gap-y-4 mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {line2.map((item, idx) => (
              <motion.span
                key={`line2-${idx}`}
                className="relative inline-flex items-center"
              >
                <Link to={`/discover/${item.word.toLowerCase()}`}>
                  <span 
                    className={`
                      font-['Saira_Extra_Condensed'] font-black uppercase
                      text-5xl sm:text-6xl md:text-7xl lg:text-8xl
                      leading-none tracking-[-0.02em] transition-all duration-300
                      hover:text-white
                      ${hoveredIndex === `sep-${5 + idx}` ? 'text-white' : 'text-white/80'}
                    `}
                  >
                    {item.word}
                  </span>
                </Link>

                {/* Separator */}
                {idx < line2.length - 1 && (
                  <motion.span 
                    className="relative inline-block mx-3 lg:mx-4"
                    onHoverStart={() => handleSeparatorHover(
                      `sep-${5 + idx}`, 
                      separatorImages[(5 + idx) % separatorImages.length].color,
                      separatorImages[(5 + idx) % separatorImages.length].src
                    )}
                    onHoverEnd={handleSeparatorLeave}
                  >
                    <Link to="/discover/collection">
                      <motion.div
                        whileHover={{ scale: 1.3, rotate: 90 }}
                        transition={{ type: 'spring', stiffness: 400 }}
                        className="relative cursor-pointer"
                      >
                        <img 
                          src={separatorImages[(5 + idx) % separatorImages.length].src}
                          alt=""
                          className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 object-cover rounded-md"
                          style={{
                            boxShadow: hoveredIndex === `sep-${5 + idx}`
                              ? '0 0 40px rgba(255,255,255,0.6)'
                              : '0 15px 25px -8px rgba(0,0,0,0.4)',
                            border: hoveredIndex === `sep-${5 + idx}`
                              ? '2px solid rgba(255,255,255,0.6)'
                              : '1px solid rgba(255,255,255,0.1)'
                          }}
                        />
                        
                        {hoveredIndex === `sep-${5 + idx}` && (
                          <motion.div
                            className="absolute inset-0 rounded-full"
                            animate={{
                              scale: [1, 1.4, 1],
                              opacity: [0.5, 0, 0.5]
                            }}
                            transition={{
                              repeat: Infinity,
                              duration: 2
                            }}
                            style={{
                              border: '2px solid rgba(255,255,255,0.4)'
                            }}
                          />
                        )}
                      </motion.div>
                    </Link>
                  </motion.span>
                )}
              </motion.span>
            ))}
          </motion.div>

          {/* Line 3: WITH TIMELESS ELEGANCE */}
          <motion.div 
            className="flex flex-wrap items-center justify-center gap-x-4 gap-y-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            {line3.map((item, idx) => (
              <motion.span
                key={`line3-${idx}`}
                className="relative inline-flex items-center"
              >
                <Link to={`/discover/${item.word.toLowerCase()}`}>
                  <span 
                    className={`
                      font-['Saira_Extra_Condensed'] font-black uppercase
                      text-5xl sm:text-6xl md:text-7xl lg:text-9xl
                      leading-none tracking-[-0.02em] transition-all duration-300
                      hover:text-white
                      ${hoveredIndex === `sep-${7 + idx}` ? 'text-white' : 'text-white/80'}
                    `}
                  >
                    {item.word}
                  </span>
                </Link>

                {/* Separator (except after last word) */}
                {idx < line3.length - 1 && (
                  <motion.span 
                    className="relative inline-block mx-3 lg:mx-4"
                    onHoverStart={() => handleSeparatorHover(
                      `sep-${7 + idx}`, 
                      separatorImages[(7 + idx) % separatorImages.length].color,
                      separatorImages[(7 + idx) % separatorImages.length].src
                    )}
                    onHoverEnd={handleSeparatorLeave}
                  >
                    <Link to="/discover/collection">
                      <motion.div
                        whileHover={{ scale: 1.3, rotate: 90 }}
                        transition={{ type: 'spring', stiffness: 400 }}
                        className="relative cursor-pointer"
                      >
                        <img 
                          src={separatorImages[(7 + idx) % separatorImages.length].src}
                          alt=""
                          className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 object-cover rounded-md"
                          style={{
                            boxShadow: hoveredIndex === `sep-${7 + idx}`
                              ? '0 0 40px rgba(255,255,255,0.6)'
                              : '0 15px 25px -8px rgba(0,0,0,0.4)',
                            border: hoveredIndex === `sep-${7 + idx}`
                              ? '2px solid rgba(255,255,255,0.6)'
                              : '1px solid rgba(255,255,255,0.1)'
                          }}
                        />
                        
                        {hoveredIndex === `sep-${7 + idx}` && (
                          <motion.div
                            className="absolute inset-0 rounded-full"
                            animate={{
                              scale: [1, 1.4, 1],
                              opacity: [0.5, 0, 0.5]
                            }}
                            transition={{
                              repeat: Infinity,
                              duration: 2
                            }}
                            style={{
                              border: '2px solid rgba(255,255,255,0.4)'
                            }}
                          />
                        )}
                      </motion.div>
                    </Link>
                  </motion.span>
                )}
              </motion.span>
            ))}
          </motion.div>
        </div>

        {/* Premium Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          {/* Decorative Line */}
          <div className="relative w-48 h-[1px] mx-auto mb-8">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
            <motion.div
              animate={{
                x: ['-100%', '200%']
              }}
              transition={{
                repeat: Infinity,
                duration: 3,
                ease: "linear"
              }}
              className="absolute top-1/2 -translate-y-1/2 w-8 h-8"
            >
              <div className="w-full h-full border border-white/30 rotate-45"></div>
            </motion.div>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-8 lg:gap-16 text-white/30 text-sm lg:text-base">
            <div>
              <span className="font-['Saira_Extra_Condensed'] text-white/60 text-2xl block">06</span>
              <span className="font-['Saira_Extra_Condensed'] tracking-[0.2em]">COLLECTIONS</span>
            </div>
            <div>
              <span className="font-['Saira_Extra_Condensed'] text-white/60 text-2xl block">24</span>
              <span className="font-['Saira_Extra_Condensed'] tracking-[0.2em]">STORIES</span>
            </div>
            <div>
              <span className="font-['Saira_Extra_Condensed'] text-white/60 text-2xl block">∞</span>
              <span className="font-['Saira_Extra_Condensed'] tracking-[0.2em]">POSSIBILITIES</span>
            </div>
          </div>

        </motion.div>
      </div>

      {/* Font Import */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Saira+Extra+Condensed:wght@400;500;600;700;800;900&display=swap');
      `}</style>
    </section>
  )
}

export default DiscoverSection
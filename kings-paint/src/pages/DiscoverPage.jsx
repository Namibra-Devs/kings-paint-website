// src/pages/DiscoverPage.jsx
import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import { 
  ChevronRight,
  Eye,
  Sparkles,
  Palette,
  Droplets,
  Flame,
  Leaf,
  Mountain,
  Sunset,
  Waves,
  Compass
} from 'lucide-react'
import PartnersMarquee from '@components/home/PartnersMarquee'

const DiscoverPage = () => {
  const [activeColor, setActiveColor] = useState('ember')
  const [hoveredImage, setHoveredImage] = useState(null)

  // Color bars data for the carousel - only colors, no names
  const colorBars = [
    '#8B6B4D', '#C4A962', '#5D8A7A', '#4A6B5C', '#9B7E5E', 
    '#7B6B5A', '#607474', '#9C7355', '#467E8E', '#4c271c', 
    '#22363A', '#23221f', '#8B6B4D', '#C4A962', '#5D8A7A', 
    '#4A6B5C', '#9B7E5E', '#7B6B5A', '#607474', '#9C7355', 
    '#467E8E', '#4c271c', '#22363A', '#23221f'
  ]

  // Color navigation data - with increased width
  const colorNavs = [
    { 
      id: 'ember', 
      name: 'EMBER TONES', 
      color: '#8B6B4D',
      image: '/images/black-orange2.webp',
      description: 'Warm, passionate hues that ignite creativity'
    },
    { 
      id: 'verdant', 
      name: 'VERDANT HUES', 
      color: '#5D8A7A',
      image: '/images/storms1.webp',
      description: 'Deep, calming greens with subtle oceanic depths'
    },
    { 
      id: 'earthy', 
      name: 'EARTHY BROWN', 
      color: '#4c271c',
      image: '/images/lost-souls1.webp',
      description: 'Natural tones inspired by soil and clay'
    },
    { 
      id: 'ocean', 
      name: 'OCEAN TEAL', 
      color: '#467E8E',
      image: '/images/storms2.webp',
      description: 'Refreshing blues with deep sea undertones'
    },
    { 
      id: 'charcoal', 
      name: 'CHARCOAL', 
      color: '#23221f',
      image: '/images/evening2.webp',
      description: 'Sophisticated dark tones for modern spaces'
    }
  ]

  // Large image cards data
  const largeCards = [
    {
      id: 1,
      title: 'MODERN LIVING',
      image: '/images/discover2.webp',
      category: 'Interior',
      link: '/products/category/interior'
    },
    {
      id: 2,
      title: 'EXTERIOR ELEGANCE',
      image: '/images/ex1.webp',
      category: 'Exterior',
      link: '/products/category/exterior'
    },
    {
      id: 3,
      title: 'SPECIALTY FINISHES',
      image: '/images/tools.png',
      category: 'Specialty',
      link: '/products/category/specialty'
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - White Background with Stylish Text */}
      <section className="relative py-10 overflow-hidden bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-5xl mx-auto"
          >
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-12 h-12 bg-[#C4A962] rounded-lg flex items-center justify-center">
                <Compass className="w-6 h-6 text-black" />
              </div>
              <span className="text-[#8B6B4D] text-sm font-medium tracking-[0.3em]">
                DISCOVER YOUR STYLE
              </span>
            </div>
            
            <h1 className="font-['Saira_Extra_Condensed'] text-8xl md:text-9xl lg:text-[10rem] font-black text-gray-900 leading-none mb-8">
              <span className="block">COLORS THAT</span>
              <span className="block text-[#C4A962]">TRANSFORM</span>
              <span className="block">YOUR SPACE</span>
            </h1>
            
            
          </motion.div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-20 left-10 w-64 h-64 bg-[#C4A962]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-[#8B6B4D]/5 rounded-full blur-3xl"></div>
      </section>

      {/* Infinite Color Bars Carousel - Connected, No Spaces, Increased Height */}
      <section className=" bg-white">
        <div className="relative overflow-hidden">
    

          {/* Animated Color Bars - Connected with no gaps */}
          <motion.div
            className="flex"
            animate={{
              x: [0, -2000]
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 40,
                ease: "linear"
              }
            }}
          >
            {[...colorBars, ...colorBars, ...colorBars].map((color, index) => (
              <div
                key={index}
                className="flex-shrink-0"
                style={{ width: '80px' }}
              >
                <div 
                  className="w-full h-52"
                  style={{ backgroundColor: color }}
                ></div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Three Large Image Cards - Black Background */}
      <section className="py-24 bg-gradient-to-b from-[#0a120a] to-[#1a2a1a]">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-['Saira_Extra_Condensed'] text-uppercase text-4xl lg:text-6xl font-black text-white mb-4">
           explore one of our curated styles
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              find your style. find your colors.

            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {largeCards.map((card, index) => (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="group relative h-[500px] rounded-2xl overflow-hidden cursor-pointer"
              >
                <Link to={card.link}>
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
                  
                  <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                    <span className="text-sm text-[#C4A962] font-medium tracking-wider mb-2 block">
                      {card.category}
                    </span>
                    <h3 className="text-3xl font-bold mb-3">{card.title}</h3>
                    <div className="flex items-center gap-2 text-[#C4A962] group-hover:gap-4 transition-all">
                      <span>Discover More</span>
                      <ChevronRight className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Hover Overlay Effect */}
                  <div className="absolute inset-0 bg-[#C4A962]/20 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Color Navigation Section - Increased Width */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-[#8B6B4D] text-sm font-medium tracking-[0.3em] mb-3 block">
              COLOR EXPLORER
            </span>
            <h2 className="font-['Saira_Extra_Condensed'] text-5xl lg:text-6xl font-black text-gray-900 mb-4">
              FIND YOUR <span className="text-[#C4A962]">PERFECT SHADE</span>
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Side - Color Navigation Bars - Increased Width */}
            <div className="space-y-3">
              {colorNavs.map((color) => (
                <motion.div
                  key={color.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 }}
                  viewport={{ once: true }}
                  onMouseEnter={() => setActiveColor(color.id)}
                  className={`cursor-pointer transition-all duration-300 ${
                    activeColor === color.id ? 'scale-105' : ''
                  }`}
                >
                  <div 
                    className={`flex items-center justify-between p-3 rounded-xl border-2 transition-all ${
                      activeColor === color.id 
                        ? 'border-[#C4A962] bg-[#C4A962]/5 shadow-lg' 
                        : 'border-gray-200 hover:border-gray-300 hover:shadow-md'
                    }`}
                    onClick={() => setActiveColor(color.id)}
                  >
                    <div className="flex items-center gap-6">
                      <div 
                        className="w-16 h-16 rounded-xl shadow-md"
                        style={{ backgroundColor: color.color }}
                      ></div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">{color.name}</h3>
                        <p className="text-base text-gray-600">{color.description}</p>
                      </div>
                    </div>
                    {activeColor === color.id && (
                      <Eye className="w-6 h-6 text-[#C4A962]" />
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Right Side - Image Display */}
            <motion.div
              key={activeColor}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="relative h-[600px] rounded-md overflow-hidden shadow-sm"
            >
              <img
                src={colorNavs.find(c => c.id === activeColor)?.image}
                alt={colorNavs.find(c => c.id === activeColor)?.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
              
              {/* Color Info Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                <div className="flex items-center gap-4 mb-3">
                  <div 
                    className="w-8 h-8 rounded-full border-2 border-white shadow-lg"
                    style={{ backgroundColor: colorNavs.find(c => c.id === activeColor)?.color }}
                  ></div>
                  <span className="text-lg font-bold text-[#C4A962] tracking-wider">
                    {colorNavs.find(c => c.id === activeColor)?.name}
                  </span>
                </div>
                <p className="text-xl text-white/90 mb-4 leading-relaxed">
                  {colorNavs.find(c => c.id === activeColor)?.description}
                </p>
                <Link
                  to={`/products/category/${activeColor}`}
                  className="inline-flex items-center gap-3 px-6 py-3 bg-[#C4A962] text-black rounded-xl font-semibold hover:bg-[#8B6B4D] hover:text-white transition-all shadow-lg"
                >
                  View Collection
                  <ChevronRight className="w-5 h-5" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

   

      {/* Partners Marquee */}
      <PartnersMarquee />

      

      {/* Font Import */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Saira+Extra+Condensed:wght@400;500;600;700;800;900&display=swap');
      `}</style>
    </div>
  )
}

export default DiscoverPage
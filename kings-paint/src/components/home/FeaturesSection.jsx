// src/components/home/FeaturesSection.jsx
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const FeaturesSection = () => {
  const [hoveredCard, setHoveredCard] = useState(null)

  const paintCollections = [
    {
      id: 1,
      title: 'lost souls',
      colorName: 'dark saturated burgundy',
      capImage: '/images/lost-souls.webp',
      roomImage: '/images/lost-souls1.webp',
      slug: 'lost-souls',
      textColor: '#4a0404', // Dark burgundy
      borderColor: '#2a1a1a'
    },
    {
      id: 2,
      title: 'high at the gala',
      colorName: 'black violet',
      capImage: '/images/gala.webp',
      roomImage: '/images/gala1.webp',
      slug: 'high-at-the-gala',
      textColor: '#1a1423', // Black violet
      borderColor: '#2d1f3a'
    },
    {
      id: 3,
      title: 'midwest cowboy',
      colorName: 'black caramel',
      capImage: '/images/cowboy.webp',
      roomImage: '/images/cowboy1.webp',
      slug: 'midwest-cowboy',
      textColor: '#3c2a1f', // Black caramel
      borderColor: '#2c1e14'
    },
    {
      id: 4,
      title: 'inkjet japan ++',
      colorName: 'black with blue violet tones',
      capImage: '/images/inkjet.webp',
      roomImage: '/images/inkjet1.webp',
      slug: 'inkjet-japan',
      textColor: '#1a1f2a', // Black with blue violet
      borderColor: '#1f2a3a'
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-light text-gray-900 mb-3 tracking-tight">
            inspired by <span className="font-bold italic">dark romance</span>
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            crafted by <span className="font-semibold text-gray-800">paint masters</span> for the discerning eye
          </p>
          
          {/* Decorative divider */}
          <div className="flex items-center justify-center gap-3 mt-6">
            <div className="w-12 h-px bg-gray-300"></div>
            <span className="text-gray-400 text-sm tracking-[0.3em]">✦</span>
            <div className="w-12 h-px bg-gray-300"></div>
          </div>
        </motion.div>

        {/* Cards Grid - 4 on desktop, 2 on mobile */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-gray-300 border border-gray-300">
          {paintCollections.map((collection, index) => (
            <motion.div
              key={collection.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              onHoverStart={() => setHoveredCard(collection.id)}
              onHoverEnd={() => setHoveredCard(null)}
              className="relative bg-white group"
            >
              <Link 
                to={`/products/${collection.slug}`}
                className="block h-full"
              >
                {/* Card Content */}
                <div className="p-4 lg:p-6 flex flex-col h-full">
                  {/* Image Container */}
                  <div className="relative aspect-[4/5] mb-6 overflow-hidden">

                    {/* Cap Image (default) */}
                    <motion.img 
                      src={collection.capImage}
                      alt={collection.title}
                      className={`w-full h-full object-cover transition-all duration-500 ${
                        hoveredCard === collection.id ? 'opacity-0 scale-110' : 'opacity-100 scale-100'
                      }`}
                    />
                    
                    {/* Room Image (shown on hover) */}
                    <motion.img 
                      src={collection.roomImage}
                      alt={`${collection.title} room`}
                      className={`absolute inset-0 w-full h-full object-cover transition-all duration-500 ${
                        hoveredCard === collection.id ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
                      }`}
                    />
                    
                    {/* Color name on cap/image overlay */}
                    <motion.div 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                      className="absolute bottom-2 left-2 right-2 hidden lg:block"
                    >
                      <div 
                        className="bg-black/60 backdrop-blur-sm px-3 py-2 rounded-lg"
                        style={{ 
                          borderLeft: `4px solid ${collection.textColor}`,
                        }}
                      >
                        <p className="text-white text-xs lg:text-sm font-light tracking-wide">
                          {collection.colorName}
                        </p>
                      </div>
                    </motion.div>
                  </div>

                  {/* Title at bottom of card */}
                  <div className="mt-auto pt-2">
                    <h3 
                      className="text-sm lg:text-base font-medium uppercase tracking-wider"
                      style={{ color: collection.textColor }}
                    >
                      {collection.title}
                    </h3>
                    
                    {/* Decorative element */}
                    <div className="flex items-center gap-2 mt-2">
                      <div className="w-8 h-px bg-gray-300"></div>
                      <span className="text-[8px] text-gray-400">●</span>
                      <div className="w-8 h-px bg-gray-300"></div>
                    </div>
                  </div>
                </div>

                {/* Hover effect overlay */}
                <motion.div 
                  className="absolute inset-0 pointer-events-none"
                  animate={{
                    boxShadow: hoveredCard === collection.id 
                      ? 'inset 0 0 0 2px rgba(255,255,255,0.8), inset 0 0 0 4px rgba(0,0,0,0.1)' 
                      : 'inset 0 0 0 0px rgba(255,255,255,0)'
                  }}
                  transition={{ duration: 0.3 }}
                />
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Optional: View All Collections Link */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link 
            to="/collections"
            className="inline-flex items-center gap-2 px-6 py-3 bg-amber-800 text-white text-sm uppercase tracking-wider hover:bg-amber-900 transition-colors"
          >
            <span>Explore All Collections</span>
            <span className="text-lg">→</span>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

export default FeaturesSection
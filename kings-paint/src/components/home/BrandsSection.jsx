// src/components/home/BrandsSection.jsx
import { motion } from 'framer-motion'
import { useRef, useState } from 'react'
import { Star, Award, Shield, Zap } from 'lucide-react'

const BrandsSection = () => {
  const sectionRef = useRef(null)
  const [imageErrors, setImageErrors] = useState({})

  const brands = [
    { 
      name: "Benjamin Moore®", 
      logo: "/images/benjamin.webp",
      specialty: "Premium Paints",
      founded: "1883",
      icon: Star
    },
    { 
      name: "SHERWIN WILLIAMS", 
      logo: "/images/sherwin.webp",
      specialty: "Professional Coatings",
      founded: "1866",
      icon: Award
    },
    { 
      name: "Qualivynil", 
      logo: "/images/qual.webp",
      specialty: "Interior Solutions",
      founded: "1931",
      icon: Shield
    },
    { 
      name: "Remmers", 
      logo: "/images/remmers.webp",
      specialty: "Industrial Coatings",
      founded: "1883",
      icon: Zap
    },
    { 
      name: "BEHR", 
      logo: "/images/behr.webp",
      specialty: "DIY Expert",
      founded: "1947",
      icon: Star
    },
    { 
      name: "Acrylic Graffiato", 
      logo: "/images/acrylic.webp",
      specialty: "Color Innovation",
      founded: "1806",
      icon: Award
    }
  ]

  const handleImageError = (brandName) => {
    setImageErrors(prev => ({ ...prev, [brandName]: true }))
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  }

  return (
    <section 
      ref={sectionRef}
      className="relative py-24 bg-gradient-to-b from-[#171b17ff] to-[#1a2a1a] overflow-hidden"
    >
      {/* Premium Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_left,_#8B6B4D_0%,_transparent_50%)]"></div>
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_bottom_right,_#5D8A7A_0%,_transparent_50%)]"></div>
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 30 L30 30' stroke='%238B6B4D' stroke-width='0.5' opacity='0.1'/%3E%3C/svg%3E")`,
          backgroundSize: '30px 30px'
        }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-amber-800 text-sm font-medium uppercase tracking-[0.3em] mb-3 block">
            Trusted Partners
          </span>
          <h2 className="font-['Saira_Extra_Condensed'] text-5xl lg:text-6xl font-black text-white mb-4">
            Brands We <span className="text-amber-800">Proudly</span> Represent
          </h2>
         
          <p className="text-gray-400 text-sm mt-6 max-w-2xl mx-auto">
            Partnering with the world's most trusted paint manufacturers to bring you exceptional quality
          </p>
        </motion.div>

        {/* Brands Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {brands.map((brand, index) => {
            const Icon = brand.icon
            const hasError = imageErrors[brand.name]
            
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="group relative bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-[#C4A962]/10 hover:border-amber-800/30 transition-all duration-500"
              >
                {/* Hover Background Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#8B6B4D]/0 via-amber-800/5 to-amber-900/0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Brand Icon */}
                <div className="absolute -top-3 -right-3 w-10 h-10 rounded-full bg-amber-800/10 flex items-center justify-center border border-amber-800/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <Icon className="w-4 h-4 text-amber-800" />
                </div>

                {/* Brand Content */}
                <div className="relative z-10">
                  {/* Actual Brand Logo */}
                  <div className="w-24 h-24 mx-auto mb-4 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    {!hasError ? (
                      <img 
                        src={brand.logo}
                        alt={brand.name}
                        className="w-full h-full object-contain filter  invert  group-hover:opacity-100 group-hover:filter-none transition-all duration-300"
                        onError={() => handleImageError(brand.name)}
                        loading="lazy"
                      />
                    ) : (
                      <div className="w-full h-full rounded-xl bg-gradient-to-br from-[#8B6B4D]/20 to-[#5D8A7A]/20 flex items-center justify-center">
                        <span className="text-[#C4A962] text-xs font-bold text-center px-2">
                          {brand.name.split(' ')[0]}
                        </span>
                      </div>
                    )}
                  </div>
                  
                  {/* Brand Name */}
                  <h3 className="text-white font-bold text-center mb-2 group-hover:text-amber-800 transition-colors">
                    {brand.name}
                  </h3>
                  
                  {/* Brand Details */}
                  <div className="space-y-1 text-center">
                    <p className="text-gray-400 text-xs">
                      {brand.specialty}
                    </p>
                    <p className="text-amber-800/60 text-xs">
                      Est. {brand.founded}
                    </p>
                  </div>

                  {/* Decorative Line */}
                  <div className="w-12 h-px bg-gradient-to-r from-transparent via-[#C4A962]/50 to-transparent mx-auto mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>

                {/* Bottom Glow Effect */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-[#8B6B4D] via-[#C4A962] to-amber-800 group-hover:w-3/4 transition-all duration-500"></div>
              </motion.div>
            )
          })}
        </motion.div>

     
      </div>
    </section>
  )
}

export default BrandsSection
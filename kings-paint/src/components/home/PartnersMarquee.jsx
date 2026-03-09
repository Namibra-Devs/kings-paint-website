// src/components/home/PartnersMarquee.jsx
import { motion } from 'framer-motion'
import { useRef } from 'react'

const PartnersMarquee = () => {
  const partners = [
    { id: 1, name: "BENJAMIN MOORE" },
    { id: 2, name: "SHERWIN WILLIAMS" },
    { id: 3, name: "DULUX" },
    { id: 4, name: "PPG" },
    { id: 5, name: "BEHR" },
    { id: 6, name: "VALSPAR" },
    { id: 7, name: "JOTUN" },
    { id: 8, name: "SIKKENS" },
    { id: 9, name: "CAPAROL" },
    { id: 10, name: "TEKNOS" }
  ]

  // Duplicate partners for seamless infinite scroll
  const marqueePartners = [...partners, ...partners, ...partners]

  return (
    <section className="relative h-[70vh] w-full overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src="/images/footer.webp" 
          alt="Partners background"
          className="w-full h-full object-cover"
          loading="lazy"
        />
        {/* Black Overlay - 70% opacity for dramatic effect */}
        <div className="absolute inset-0 bg-black/10"></div>
      </div>

      {/* Content Container */}
      <div className="relative h-full w-full flex flex-col justify-center">
        {/* Top Interconnecting Black Bar */}
        

        {/* Main Marquee Content */}
        <div className="relative z-10 overflow-hidden">
          {/* Gradient Fades on Edges */}
          <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-black to-transparent z-20"></div>
          <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-black to-transparent z-20"></div>

          {/* Infinite Scrolling Text */}
          <motion.div
            className="flex whitespace-nowrap"
            animate={{
              x: [0, -2000]
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 30,
                ease: "linear"
              }
            }}
          >
            {marqueePartners.map((partner, index) => (
              <div
                key={`${partner.id}-${index}`}
                className="inline-flex items-center mx-8"
              >
                {/* Partner Name - Stylish Font */}
                <span 
                  className="font-['Saira_Extra_Condensed'] text-6xl md:text-7xl lg:text-8xl font-black text-white uppercase tracking-tight whitespace-nowrap"
                  style={{
                    textShadow: '2px 2px 4px rgba(0,0,0,0.3)'
                  }}
                >
                  {partner.name}
                </span>
                {/* Decorative Separator */}
                <span className="text-[#C4A962] text-4xl mx-8 font-light">✦</span>
              </div>
            ))}
          </motion.div>

          {/* Second Marquee (opposite direction for visual interest) */}
          <motion.div
            className="flex whitespace-nowrap mt-4 opacity-60"
            animate={{
              x: [-2000, 0]
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
            {marqueePartners.map((partner, index) => (
              <div
                key={`second-${partner.id}-${index}`}
                className="inline-flex items-center mx-8"
              >
                <span 
                  className="font-['Saira_Extra_Condensed'] text-4xl md:text-5xl lg:text-6xl font-black text-white/50 uppercase tracking-tight whitespace-nowrap"
                >
                  {partner.name}
                </span>
                <span className="text-[#C4A962]/30 text-3xl mx-8 font-light">✦</span>
              </div>
            ))}
          </motion.div>
        </div>

       
      </div>

      {/* Custom CSS for font */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Saira+Extra+Condensed:wght@400;500;600;700;800;900&display=swap');
      `}</style>
    </section>
  )
}

export default PartnersMarquee
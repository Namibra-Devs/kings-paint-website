// src/pages/CustomColorsPage.jsx
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Palette, ArrowLeft } from 'lucide-react'

const CustomColorsPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1a2a1a] to-[#2a3a2a] py-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-2xl mx-auto bg-[#F5F0E6] rounded-2xl p-8 shadow-2xl"
        >
          <Link to="/" className="inline-flex items-center text-[#8B6B4D] hover:text-[#5D8A7A] mb-6">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
          
          <div className="text-center mb-8">
            <div className="w-20 h-20 bg-gradient-to-r from-[#9B7E5E] to-[#C4A962] rounded-full flex items-center justify-center mx-auto mb-4">
              <Palette className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-3xl font-bold text-[#1a2a1a] mb-2">Custom Color Service</h1>
            <p className="text-[#5D8A7A]">Create your perfect shade</p>
          </div>

          {/* Add your custom color service form here */}
          <p className="text-center text-[#4A6B5C] py-8">Custom color service coming soon...</p>
        </motion.div>
      </div>
    </div>
  )
}

export default CustomColorsPage
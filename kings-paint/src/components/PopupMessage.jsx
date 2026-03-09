// src/components/PopupMessage.jsx
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { XMarkIcon } from '@heroicons/react/24/outline'

const PopupMessage = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [currentPopup, setCurrentPopup] = useState(null)

  // Mock popup data - this would come from your backend/state management
  const popups = [
    {
      id: 1,
      title: "🎨 Spring Sale!",
      message: "Get 30% off on all interior paints. Limited time offer!",
      buttonText: "Shop Now",
      buttonLink: "/products?category=interior",
      backgroundColor: "bg-gradient-to-r from-primary-500 to-primary-600",
      textColor: "text-white",
    },
    {
      id: 2,
      title: "✨ Loyalty Points Bonus",
      message: "Double points on all purchases this weekend!",
      buttonText: "Learn More",
      buttonLink: "/loyalty",
      backgroundColor: "bg-gradient-to-r from-secondary-500 to-secondary-600",
      textColor: "text-white",
    },
  ]

  useEffect(() => {
    // Check if popup should be shown (based on time, user session, etc.)
    const hasSeenPopup = localStorage.getItem('lastPopupSeen')
    const lastShown = localStorage.getItem('popupLastShown')
    const now = Date.now()

    // Show popup if not seen in last 24 hours
    if (!lastShown || now - parseInt(lastShown) > 24 * 60 * 60 * 1000) {
      const randomPopup = popups[Math.floor(Math.random() * popups.length)]
      setCurrentPopup(randomPopup)
      
      // Show popup after 3 seconds
      const timer = setTimeout(() => {
        setIsVisible(true)
      }, 3000)

      return () => clearTimeout(timer)
    }
  }, [])

  const handleClose = () => {
    setIsVisible(false)
    localStorage.setItem('popupLastShown', Date.now().toString())
  }

  return (
    <AnimatePresence>
      {isVisible && currentPopup && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          className="fixed bottom-4 left-4 right-4 md:left-auto md:right-4 md:bottom-4 md:w-96 z-50"
        >
          <div className={`${currentPopup.backgroundColor} ${currentPopup.textColor} rounded-lg shadow-xl p-4`}>
            <button
              onClick={handleClose}
              className="absolute top-2 right-2 text-white hover:text-gray-200"
            >
              <XMarkIcon className="h-5 w-5" />
            </button>
            
            <div className="pr-6">
              <h3 className="font-bold text-lg mb-1">{currentPopup.title}</h3>
              <p className="text-sm opacity-90 mb-3">{currentPopup.message}</p>
              <a
                href={currentPopup.buttonLink}
                className="inline-block bg-white text-primary-600 px-4 py-2 rounded-lg text-sm font-semibold hover:bg-gray-100 transition-colors"
              >
                {currentPopup.buttonText}
              </a>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default PopupMessage
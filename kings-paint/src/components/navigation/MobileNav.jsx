// src/components/navigation/MobileNav.jsx
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Menu,
  X,
  ShoppingCart,
  User,
  Heart,
  Home,
  Info,
  Package,
  Star,
  Brush,
  Wrench,
  Sparkles,
  Phone,
  Mail,
  MapPin,
  Instagram,
  Facebook,
  Twitter,
  Tag,
  Compass,
  Palette
} from 'lucide-react'
import useCartStore from '@store/cartStore'

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false)
  const { items } = useCartStore()

  const menuItems = [
    { name: 'Home', path: '/', icon: Home },
    { name: 'Products', path: '/products', icon: Package },
    { name: 'Discover', path: '/discover', icon: Compass },
    { name: 'About', path: '/about', icon: Info },
    { name: 'Loyalty Points', path: '/loyalty', icon: Star },
    { name: 'Wishlist', path: '/wishlist', icon: Heart },
    { name: 'Account', path: '/register', icon: User },
  ]

  const categories = [
    { name: 'Interior Paints', icon: Brush, path: '/products/category/interior' },
    { name: 'Exterior Paints', icon: Palette, path: '/products/category/exterior' },
    { name: 'Specialty Finishes', icon: Sparkles, path: '/products/category/specialty' },
    { name: 'Primers', icon: Brush, path: '/products/category/primers' },
    { name: 'Tools & Supplies', icon: Wrench, path: '/products/category/tools' },
  ]

  const contactInfo = [
    { icon: Phone, text: '+233 594 42 9752', link: 'tel:+233594429752' },
    { icon: Mail, text: 'Kingspaintdepotgh@gmail.com', link: 'mailto:Kingspaintdepotgh@gmail.com' },
    { icon: MapPin, text: 'Weija SCC, Accra', link: 'https://maps.google.com/?q=Weija+SCC+Accra+Ghana' },
  ]

  const socialLinks = [
    { icon: Instagram, link: 'https://instagram.com/kings_paintdepotgh', label: 'Instagram' },
    { icon: Facebook, link: 'https://facebook.com/kingspaintdepot', label: 'Facebook' },
    { icon: Twitter, link: 'https://twitter.com/kingspaintdepot', label: 'Twitter' },
  ]

  return (
    <nav className="lg:hidden bg-black sticky top-0 z-50 border-b border-amber-800/20">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo with Actual Image */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 overflow-hidden shadow-lg group-hover:shadow-xl transition-all">
              <img 
                src="/KingsLogo.png" 
                alt="Kings Paint Depot"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div>
              <span className="text-lg font-bold bg-gradient-to-r from-[#C4A962] to-[#8B6B4D] bg-clip-text text-transparent">
                Kings Paint
              </span>
              <p className="text-[10px] text-gray-400">Premium Quality</p>
            </div>
          </Link>

          {/* Right Icons */}
          <div className="flex items-center space-x-3">
            <Link to="/cart" className="relative p-2">
              <ShoppingCart className="w-5 h-5 text-[#C4A962]" />
              {items.length > 0 && (
                <span className="absolute -top-1 -right-1 bg-[#C4A962] text-black text-xs rounded-full h-4 w-4 flex items-center justify-center font-bold">
                  {items.length}
                </span>
              )}
            </Link>
            
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 hover:bg-[#1a2a1a] rounded-lg transition-colors border border-[#C4A962]/20"
            >
              {isOpen ? (
                <X className="w-5 h-5 text-[#C4A962]" />
              ) : (
                <Menu className="w-5 h-5 text-[#C4A962]" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay - Full Viewport */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
            />
            
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-full bg-black z-50 overflow-y-auto border-l border-[#C4A962]/20"
            >
              <div className="min-h-screen flex flex-col">
                {/* Header */}
                <div className="sticky top-0 bg-black/95 backdrop-blur-sm border-b border-[#C4A962]/20 p-4">
                  <div className="flex justify-between items-center">
                    <Link to="/" className="flex items-center space-x-3" onClick={() => setIsOpen(false)}>
                      <div className="w-10 h-10 overflow-hidden">
                        <img 
                          src="/KingsLogo.png" 
                          alt="Kings Paint Depot"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      
                    </Link>
                    <button
                      onClick={() => setIsOpen(false)}
                      className="w-10 h-10 rounded-full bg-[#1a2a1a] flex items-center justify-center hover:bg-[#8B6B4D] transition-colors"
                    >
                      <X className="w-5 h-5 text-[#C4A962]" />
                    </button>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 p-6">
                  {/* User Greeting */}
                  <div className="bg-gradient-to-r from-[#8B6B4D]/20 to-[#5D8A7A]/20 rounded-xl p-5 mb-6 border border-[#C4A962]/20">
                    <p className="text-sm text-gray-300 mb-1">Welcome to</p>
                    <p className="text-xl font-bold text-[#C4A962]">Kings Paint Depot</p>
                    <p className="text-xs text-gray-400 mt-2">Premium quality paints since 1995</p>
                  </div>

                  {/* Navigation Links */}
                  <div className="space-y-1 mb-8">
                    {menuItems.map((item) => {
                      const Icon = item.icon
                      return (
                        <Link
                          key={item.path}
                          to={item.path}
                          onClick={() => setIsOpen(false)}
                          className="flex items-center space-x-4 p-4 rounded-xl hover:bg-[#1a2a1a] transition-colors group"
                        >
                          <div className="w-10 h-10 rounded-full bg-[#1a2a1a] flex items-center justify-center group-hover:bg-[#8B6B4D] transition-colors">
                            <Icon className="w-5 h-5 text-[#C4A962] group-hover:text-white" />
                          </div>
                          <span className="text-white text-lg font-medium">{item.name}</span>
                        </Link>
                      )
                    })}
                  </div>

                  {/* Categories Section */}
                  <div className="mb-8">
                    <h3 className="text-sm font-semibold text-[#C4A962] uppercase tracking-wider mb-3 px-2">
                      Shop by Category
                    </h3>
                    <div className="space-y-1">
                      {categories.map((category) => {
                        const Icon = category.icon
                        return (
                          <Link
                            key={category.name}
                            to={category.path}
                            onClick={() => setIsOpen(false)}
                            className="flex items-center space-x-3 p-3 rounded-lg hover:bg-[#1a2a1a] transition-colors group"
                          >
                            <Icon className="w-4 h-4 text-gray-400 group-hover:text-[#C4A962]" />
                            <span className="text-gray-300 text-sm">{category.name}</span>
                          </Link>
                        )
                      })}
                    </div>
                  </div>

                  {/* Contact Info */}
                  <div className="mb-8">
                    <h3 className="text-sm font-semibold text-[#C4A962] uppercase tracking-wider mb-3 px-2">
                      Contact Us
                    </h3>
                    <div className="space-y-3">
                      {contactInfo.map((item, index) => {
                        const Icon = item.icon
                        return (
                          <a
                            key={index}
                            href={item.link}
                            target={item.link.startsWith('http') ? '_blank' : '_self'}
                            rel="noopener noreferrer"
                            className="flex items-center space-x-3 p-3 rounded-lg hover:bg-[#1a2a1a] transition-colors group"
                          >
                            <Icon className="w-4 h-4 text-[#C4A962]" />
                            <span className="text-gray-300 text-sm">{item.text}</span>
                          </a>
                        )
                      })}
                    </div>
                  </div>

                  {/* Social Links */}
                  <div className="flex items-center space-x-4 mb-8">
                    {socialLinks.map((social) => {
                      const Icon = social.icon
                      return (
                        <a
                          key={social.label}
                          href={social.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-10 h-10 rounded-full bg-[#1a2a1a] flex items-center justify-center hover:bg-[#8B6B4D] transition-colors group"
                        >
                          <Icon className="w-5 h-5 text-[#C4A962] group-hover:text-white" />
                        </a>
                      )
                    })}
                  </div>
                </div>

                {/* Promo Banner */}
                <div className="p-4 border-t border-[#C4A962]/20">
                  <div className=" rounded-xl p-4 text-white">
                   
              
                    <Link
                      to="/products/sale"
                      onClick={() => setIsOpen(false)}
                      className="inline-block text-[#C4A962] text-xs px-4 py-2 bg-[#1a2a1a] rounded-md font-medium hover:bg-[#1a2a1a] transition-colors"
                    >
                      Shop Now
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  )
}

export default MobileNav
// src/components/navigation/MobileNav.jsx
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Bars3Icon, 
  XMarkIcon,
  ShoppingCartIcon,
  UserIcon,
  HeartIcon,
  HomeIcon,
  InformationCircleIcon,
  ShoppingBagIcon,
  StarIcon
} from '@heroicons/react/24/outline'
import useCartStore from '@store/cartStore'

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false)
  const { items } = useCartStore()

  const menuItems = [
    { name: 'Home', path: '/', icon: HomeIcon },
    { name: 'Products', path: '/products', icon: ShoppingBagIcon },
    { name: 'About', path: '/about', icon: InformationCircleIcon },
    { name: 'Loyalty Points', path: '/loyalty', icon: StarIcon },
    { name: 'Wishlist', path: '/wishlist', icon: HeartIcon },
    { name: 'Account', path: '/register', icon: UserIcon },
  ]

  const categories = [
    'Interior Paints',
    'Exterior Paints',
    'Specialty Finishes',
    'Primers',
    'Tools & Supplies',
  ]

  return (
    <nav className="lg:hidden bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">P</span>
            </div>
            <span className="text-xl font-bold text-gray-800">PaintPro</span>
          </Link>

          {/* Right Icons */}
          <div className="flex items-center space-x-4">
            <Link to="/cart" className="relative">
              <ShoppingCartIcon className="h-6 w-6 text-gray-600" />
              {items.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-primary-600 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                  {items.length}
                </span>
              )}
            </Link>
            
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              {isOpen ? (
                <XMarkIcon className="h-6 w-6 text-gray-600" />
              ) : (
                <Bars3Icon className="h-6 w-6 text-gray-600" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black bg-opacity-50"
            />
            
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween' }}
              className="fixed top-0 right-0 bottom-0 w-4/5 max-w-sm bg-white shadow-xl z-50 overflow-y-auto"
            >
              <div className="p-6">
                <div className="flex justify-between items-center mb-6">
                  <span className="text-xl font-bold text-gray-800">Menu</span>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="p-2 hover:bg-gray-100 rounded-lg"
                  >
                    <XMarkIcon className="h-5 w-5 text-gray-600" />
                  </button>
                </div>

                {/* User Info */}
                <div className="bg-primary-50 rounded-lg p-4 mb-6">
                  <p className="text-sm text-gray-600">Welcome to</p>
                  <p className="font-bold text-primary-600">PaintPro</p>
                </div>

                {/* Navigation Links */}
                <div className="space-y-2 mb-6">
                  {menuItems.map((item) => {
                    const Icon = item.icon
                    return (
                      <Link
                        key={item.path}
                        to={item.path}
                        onClick={() => setIsOpen(false)}
                        className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors"
                      >
                        <Icon className="h-5 w-5 text-gray-500" />
                        <span className="text-gray-700">{item.name}</span>
                      </Link>
                    )
                  })}
                </div>

                {/* Categories */}
                <div className="border-t border-gray-200 pt-6">
                  <h3 className="font-semibold text-gray-800 mb-3">Categories</h3>
                  <div className="space-y-2">
                    {categories.map((category) => (
                      <Link
                        key={category}
                        to={`/products/category/${category.toLowerCase().replace(' ', '-')}`}
                        onClick={() => setIsOpen(false)}
                        className="block p-2 text-sm text-gray-600 hover:text-primary-600"
                      >
                        {category}
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Promo Banner */}
                <div className="mt-6 bg-gradient-to-r from-primary-500 to-primary-600 rounded-lg p-4 text-white">
                  <p className="text-sm font-medium">🎨 Spring Sale!</p>
                  <p className="text-xs mt-1">Up to 30% off on all interior paints</p>
                  <button className="mt-2 bg-white text-primary-600 text-xs px-3 py-1 rounded-full font-medium">
                    Shop Now
                  </button>
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
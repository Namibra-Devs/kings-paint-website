// src/components/Footer.jsx
import { Link } from 'react-router-dom'
import {
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  Mail,
  Phone,
  MapPin,
  Clock,
  Shield,
  Truck,
  RefreshCw,
  Award,
  Leaf,
  ChevronRight,
  Heart,
  CreditCard,
  Smartphone,
  Bitcoin
} from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const paymentMethods = [
    { icon: CreditCard, name: 'Visa/Mastercard', color: 'text-blue-400' },
    { icon: Smartphone, name: 'Mobile Money', color: 'text-green-400' },
    { icon: Bitcoin, name: 'Cryptocurrency', color: 'text-orange-400' }
  ]

  const quickLinks = [
    { name: 'About Us', path: '/about' },
    { name: 'Products', path: '/products' },
    { name: 'Contact Us', path: '/contact' },
    { name: 'FAQ', path: '/faq' },
    { name: 'Shipping Info', path: '/shipping' },
    { name: 'Returns Policy', path: '/returns' }
  ]

  const categories = [
    { name: 'Interior Paints', path: '/products/category/interior' },
    { name: 'Exterior Paints', path: '/products/category/exterior' },
    { name: 'Specialty Finishes', path: '/products/category/specialty' },
    { name: 'Primers', path: '/products/category/primers' },
    { name: 'Tools & Supplies', path: '/products/category/tools' },
    { name: 'Clearance', path: '/products/category/clearance' }
  ]

  const mobileMoneyProviders = [
    { name: 'MTN MoMo', icon: Smartphone },
    { name: 'Airtel Money', icon: Smartphone },
    { name: 'Vodafone Cash', icon: Smartphone }
  ]

  return (
    <footer className="bg-black text-white relative overflow-hidden">
    
      
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, #C4A962 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <Link to="/" className="flex items-center space-x-3 mb-4 group">
              {/* Actual Logo Image */}
              <div className="w-12 h-12  overflow-hidden shadow-lg group-hover:shadow-xl transition-all">
                <img 
                  src="/KingsLogo2.png" 
                  alt="Kings Paint Depot"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div>
                <span className="text-xl font-bold bg-gradient-to-r from-[#C4A962] to-amber-800 bg-clip-text text-transparent">
                  Kings Paint Depot
                </span>
                <p className="text-xs text-gray-400">Premium Quality Paints</p>
              </div>
            </Link>
            
            <p className="text-gray-400 text-sm mb-4 leading-relaxed">
              Your trusted partner for premium paints and coatings in Ghana. 
              Transforming spaces with quality and innovation since 1995.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-3">
              <a 
                href="https://facebook.com/kingspaintdepot" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 bg-[#1a2a1a] rounded-full flex items-center justify-center hover:bg-amber-800 transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={14} className="text-gray-400 hover:text-white" />
              </a>
              <a 
                href="https://twitter.com/kingspaintdepot" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 bg-[#1a2a1a] rounded-full flex items-center justify-center hover:bg-amber-800 transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={14} className="text-gray-400 hover:text-white" />
              </a>
              <a 
                href="https://instagram.com/kings_paintdepotgh" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 bg-[#1a2a1a] rounded-full flex items-center justify-center hover:bg-amber-800 transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={14} className="text-gray-400 hover:text-white" />
              </a>
              <a 
                href="https://youtube.com/@kingspaintdepot" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 bg-[#1a2a1a] rounded-full flex items-center justify-center hover:bg-amber-800 transition-colors"
                aria-label="YouTube"
              >
                <Youtube size={14} className="text-gray-400 hover:text-white" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-amber-900">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link 
                    to={link.path} 
                    className="text-gray-400 hover:text-amber-800 text-sm transition-colors flex items-center group"
                  >
                    <ChevronRight size={14} className="mr-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-amber-900">Shop by Category</h3>
            <ul className="space-y-2">
              {categories.map((category) => (
                <li key={category.path}>
                  <Link 
                    to={category.path} 
                    className="text-gray-400 hover:text-amber-800 text-sm transition-colors flex items-center group"
                  >
                    <ChevronRight size={14} className="mr-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {category.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Payment */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-amber-900">Contact Us</h3>
            
            {/* Contact Info - UPDATED WITH CORRECT DETAILS */}
            <ul className="space-y-3 text-sm text-gray-400 mb-6">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-amber-800 flex-shrink-0 mt-0.5" />
                <span>Weija SCC, Accra - Ghana</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone size={16} className="text-amber-800 flex-shrink-0" />
                <a href="tel:+233594429752" className="hover:text-amber-800 transition-colors">
                  +233 594 42 9752
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={16} className="text-amber-800 flex-shrink-0" />
                <a href="mailto:Kingspaintdepotgh@gmail.com" className="hover:text-amber-800 transition-colors break-all">
                  Kingspaintdepotgh@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock size={16} className="text-amber-800 flex-shrink-0" />
                <span>Mon-Sat: 8am - 6pm, Sun: Closed</span>
              </li>
            </ul>
            
            {/* Payment Methods */}
            <h3 className="text-lg font-semibold text-amber-900">We Accept</h3>
            
      

            {/* Mobile Money Providers */}
            <div className="mt-3">
              <p className="text-xs text-gray-500 mb-2">Mobile Money:</p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-[#1a2a1a] text-gray-300 text-xs px-3 py-1 rounded-full border border-[#C4A962]/20">
                  MTN
                </span>
                <span className="bg-[#1a2a1a] text-gray-300 text-xs px-3 py-1 rounded-full border border-[#C4A962]/20">
                  AirtelTigo
                </span>
                <span className="bg-[#1a2a1a] text-gray-300 text-xs px-3 py-1 rounded-full border border-[#C4A962]/20">
                  Vodafone
                </span>
              </div>
            </div>
            
            {/* Security Badge */}
            <div className="flex items-center gap-2 mt-4 text-xs text-gray-500">
              <Shield size={14} className="text-amber-800" />
              <span>Secure payments • SSL encrypted</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[#1a2a1a]">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
            <p>
              © {currentYear} Kings Paint Depot. All rights reserved.
            </p>
            <div className="flex flex-wrap gap-4 mt-2 md:mt-0">
              <Link to="/privacy" className="hover:text-[#C4A962] transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="hover:text-[#C4A962] transition-colors">
                Terms of Service
              </Link>
              <Link to="/returns" className="hover:text-[#C4A962] transition-colors">
                Returns Policy
              </Link>
              <Link to="/sitemap" className="hover:text-[#C4A962] transition-colors">
                Sitemap
              </Link>
            </div>
          </div>
         
        </div>
      </div>

      {/* Font Import */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Saira+Extra+Condensed:wght@400;500;600;700;800;900&display=swap');
      `}</style>
    </footer>
  )
}

export default Footer
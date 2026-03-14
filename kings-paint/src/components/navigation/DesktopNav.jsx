// src/components/navigation/DesktopNav.jsx
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ShoppingCartIcon,
  UserIcon,
  MagnifyingGlassIcon,
  HeartIcon,
  StarIcon,
  ChevronDownIcon,
} from "@heroicons/react/24/outline";
import useCartStore from "@store/cartStore";
import useAuthStore from "@store/authStore";
import useWishlistStore from '@store/wishlistStore'

const DesktopNav = () => {
 const wishlistCount = useWishlistStore((state) => state.items.length)

  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPlaceholder, setCurrentPlaceholder] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const { items } = useCartStore();
  const { user, isAuthenticated } = useAuthStore();


  // Rotating search placeholders
  const searchPlaceholders = [
    "Search for premium interior paints...",
    "Find the perfect exterior finish...",
    "Discover specialty coatings...",
    "Browse professional tools...",
    "Explore our color collection...",
  ];

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Rotate placeholders every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPlaceholder((prev) => (prev + 1) % searchPlaceholders.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/products?search=${searchQuery}`);
    }
  };

  return (
    <>
      {/* Top Bar - disappears on scroll with smooth animation */}
      <AnimatePresence>
        {!isScrolled && (
          <motion.div
            initial={{ height: 40, opacity: 1 }}
            animate={{ height: 40, opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="hidden lg:block bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden"
          >
            <div className="container mx-auto px-4 h-full flex items-center justify-between">
              {/* Left side - Animated text */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="flex items-center space-x-4 text-sm"
              >
                <motion.span
                  animate={{
                    scale: [1, 1.02, 1],
                  }}
                  transition={{ repeat: Infinity, duration: 2 }}
                  className="flex items-center"
                >
                  <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
                  Free delivery on orders over ₵ 2000
                </motion.span>
                <span className="text-gray-500">|</span>
                <Link
                  to="/loyalty"
                  className="flex items-center hover:text-primary-300 transition-colors group"
                >
                  <StarIcon className="h-4 w-4 mr-1 group-hover:rotate-180 transition-transform duration-500" />
                  <span>Double points this weekend</span>
                </Link>
              </motion.div>

              {/* Right side - Auth */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="flex items-center space-x-4 text-sm"
              >
                {isAuthenticated ? (
                  <>
                    <motion.span
                      initial={{ scale: 0.9 }}
                      animate={{ scale: 1 }}
                      className="flex items-center"
                    >
                      <span className="w-2 h-2 bg-white rounded-full mr-2"></span>
                      Welcome back,{" "}
                      <span className="font-semibold ml-1">{user?.name}</span>
                    </motion.span>
                    <Link
                      to="/account"
                      className="hover:text-primary-300 transition-colors"
                    >
                      Account
                    </Link>
                    <button className="hover:text-primary-300 transition-colors">
                      Logout
                    </button>
                  </>
                ) : (
                  <>
                    <Link
                      to="/register"
                      className="hover:text-primary-300 transition-colors"
                    >
                      Register
                    </Link>
                    <Link
                      to="/login"
                      className="hover:text-primary-300 transition-colors"
                    >
                      Sign In
                    </Link>
                  </>
                )}
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Navigation - becomes sticky with subtle shadow change */}
      <motion.nav
        className={`hidden lg:block bg-white/95 backdrop-blur-md sticky top-0 z-50 transition-shadow duration-300 ${
          isScrolled ? "shadow-md" : "shadow-none"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Premium Logo with Animated Gradient Line */}
            <Link to="/" className="flex items-center space-x-3 group relative">
              {/* Logo Image from public/images */}
              <motion.div
                whileHover={{ rotate: 5, scale: 1.05 }}
                className="w-20 h-20  overflow-hidden  transition-all relative z-10"
              >
                <img
                  src="KingsLogo.png"
                  alt="PaintPro Logo"
                  className="w-full h-full object-contain"
                />
              </motion.div>

             

            
            </Link>

            {/* Premium Search Bar */}
            <form onSubmit={handleSearch} className="flex-1 max-w-xl mx-8">
              <motion.div
                className={`relative transition-all duration-300 ${
                  isSearchFocused ? "scale-101" : "scale-none"
                }`}
               
              >
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onFocus={() => setIsSearchFocused(true)}
                  onBlur={() => setIsSearchFocused(false)}
                  className="w-full px-5 py-3 pl-12 pr-24 border border-gray-200 rounded-xl focus:outline-none focus:border-primary-300 bg-white/80 backdrop-blur-sm transition-all"
                  placeholder={searchPlaceholders[currentPlaceholder]}
                />
                <MagnifyingGlassIcon className="absolute left-4 top-3.5 h-5 w-5 text-gray-400" />

                {/* Animated placeholder indicator */}
                <motion.div
                  key={currentPlaceholder}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="absolute left-12 top-3 pointer-events-none text-gray-400 text-sm hidden"
                >
                  {searchPlaceholders[currentPlaceholder]}
                </motion.div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="absolute right-2 top-2 bg-white text-black px-4 py-1.5 rounded-md text-sm font-medium transition-all shadow-sm cursor-pointer hover:bg-amber-50 hover:text-amber-600"
                >
                  Search
                </motion.button>
              </motion.div>
            </form>

            {/* Premium Icons */}
            <div className="flex items-center space-x-6">
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
  <Link to="/wishlist" className="relative group hover:bg-amber-100">
    <HeartIcon className="h-6 w-6 text-gray-600 group-hover:text-amber-600 transition-colors" />
    {wishlistCount > 0 && (
      <motion.span
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        className="absolute -top-2 -right-2 bg-gradient-to-r from-red-500 to-red-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center shadow-lg"
      >
        {wishlistCount}
      </motion.span>
    )}
  </Link>
</motion.div>

              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link to="/cart" className="relative group">
                  <ShoppingCartIcon className="h-6 w-6 text-gray-600 group-hover:text-amber-600 transition-colors" />
                  {items.length > 0 && (
                    <motion.span
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="absolute -top-2 -right-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center shadow-lg"
                    >
                      {items.length}
                    </motion.span>
                  )}
                </Link>
              </motion.div>

              <div className="h-6 w-px bg-gradient-to-b from-transparent via-gray-300 to-transparent"></div>

              {/* Premium Navigation Links */}
              <div className="flex items-center space-x-1">
                {[
                  { to: "/products", label: "Products" },
                  { to: "/about", label: "About" },
                  { to: "/contact", label: "Contact" },
                ].map((link) => (
                  <motion.div
                    key={link.to}
                    whileHover={{ y: -2 }}
                    whileTap={{ y: 0 }}
                  >
                    <Link
                      to={link.to}
                      className="relative px-4 py-2 text-gray-700 hover:text-amber-600 font-medium group"
                    >
                      {link.label}
                      <motion.span
                        className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-600 group-hover:w-full transition-all duration-300"
                        initial={{ width: 0 }}
                        whileHover={{ width: "100%" }}
                      />
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Premium Category Menu with glass morphism */}
        <motion.div
          className={`border-t border-gray-100 transition-all duration-300 ${
            isScrolled ? "bg-white/90 backdrop-blur-md" : "bg-white"
          }`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between py-3">
              <div className="flex items-center space-x-1">
                {[
                  {
                    to: "/products/category/interior",
                    label: "Interior Paints",
                  },
                  {
                    to: "/products/category/exterior",
                    label: "Exterior Paints",
                  },
                  {
                    to: "/products/category/specialty",
                    label: "Specialty Finishes",
                  },
                  { to: "/products/category/primers", label: "Primers" },
                  { to: "/products/category/tools", label: "Tools & Supplies" },
                ].map((category) => (
                  <motion.div
                    key={category.to}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link
                      to={category.to}
                      className="text-sm text-gray-600 hover:text-amber-600 px-4 py-2 rounded-lg hover:bg-amber-50 transition-all"
                    >
                      {category.label}
                    </Link>
                  </motion.div>
                ))}
              </div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to="/products/sale"
                  className="text-sm bg-gradient-to-r from-red-500 to-red-600 text-white px-4 py-2 rounded-sm font-semibold hover:from-red-600 hover:to-red-700 transition-all shadow-md flex items-center"
                >
                  <span className="mr-1">🔥</span>
                  Sale % Off
                </Link>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </motion.nav>
    </>
  );
};

export default DesktopNav;

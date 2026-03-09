// src/components/home/FeaturedProducts.jsx
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Sparkles,
  Flame,
  Phone,
  Mail,
  MapPin,
  Instagram,
  Star,
  ShoppingCart,
} from "lucide-react";

const FeaturedProducts = () => {
  const [loadingStates, setLoadingStates] = useState({});

  // Add this function to handle add to cart
  const handleAddToCart = (productId, productName) => {
    // Set loading state for this specific product
    setLoadingStates((prev) => ({ ...prev, [productId]: true }));

    // Simulate API call
    setTimeout(() => {
      // Clear loading state
      setLoadingStates((prev) => ({ ...prev, [productId]: false }));

      // Show success toast
      toast.success(`${productName} added to cart!`, {
        duration: 3000,
        position: "top-center",
        style: {
          background: "#1a2a1a",
          color: "#C4A962",
          border: "1px solid #C4A962",
          padding: "16px",
          borderRadius: "8px",
          fontWeight: "500",
        },
        icon: "🛒",
      });
    }, 1500); // Simulate 1.5 second loading
  };

  // Real products from the price catalog
  const featuredProducts = [
    {
      id: 1,
      name: "Floor & Wall Primer",
      description: "Premium primer for interior and exterior surfaces",
      price: 1500.0,
      image: "/images/paint8.png",
      rating: 4.8,
      reviews: 45,
      category: "Primer",
      size: "20 Liters Bucket",
      points: 150,
      badge: "Bestseller",
    },
    {
      id: 2,
      name: "Gallon Paint Emulsion",
      description: "High-quality emulsion paint for smooth finishes",
      price: 250.0,
      image: "/images/paint5.png",
      rating: 4.6,
      reviews: 128,
      category: "Emulsion",
      size: "3.5 Liters Gallon",
      points: 25,
      badge: "Popular",
    },
    {
      id: 3,
      name: "Quality Wooden Door Paint",
      description: "Specialized paint for wooden doors and trim",
      price: 350.0,
      image: "/images/paint11.jpg",
      rating: 4.7,
      reviews: 67,
      category: "Wood Paint",
      size: "4 Liters Gallon",
      points: 35,
      badge: "Premium",
    },
    {
      id: 4,
      name: "Wooden Door Paint Bucket",
      description: "Professional grade wooden door paint",
      price: 1400.0,
      image: "/images/paint10.png",
      rating: 4.9,
      reviews: 32,
      category: "Wood Paint",
      size: "20 Liters Bucket",
      points: 140,
      badge: "Professional",
    },
    {
      id: 5,
      name: "Test-Coat Paint",
      description: "Sample coat for color testing",
      price: 950.0,
      image: "/images/paint4.jpg",
      rating: 4.5,
      reviews: 89,
      category: "Specialty",
      size: "Test Coat",
      points: 95,
      badge: "Sample",
    },
    {
      id: 6,
      name: "Oil Paint",
      description: "Durable oil-based paint for various surfaces",
      price: 300.0,
      image: "/images/paint3.png",
      rating: 4.4,
      reviews: 156,
      category: "Oil Paint",
      size: "4.5 Liters Gallon",
      points: 30,
      badge: "Classic",
    },
    {
      id: 7,
      name: "Oil Paint Bucket",
      description: "Bulk oil paint for large projects",
      price: 1600.0,
      image: "/images/paint13.jpg",
      rating: 4.8,
      reviews: 43,
      category: "Oil Paint",
      size: "20 Liters Bucket",
      points: 160,
      badge: "Value",
    },
    {
      id: 8,
      name: "Custom Colour Emulsion",
      description: "Custom mixed emulsion to your specification",
      price: 1000.0,
      image: "/images/paint12.jpg",
      rating: 5.0,
      reviews: 27,
      category: "Custom",
      size: "20 Liters Bucket",
      points: 100,
      badge: "Custom",
    },
  ];

  // Premium color palette inspired by the brand
  const brandColors = {
    primary: "#1a2a1a", // Deep olive black
    secondary: "#2a3a2a", // Rich forest
    accent: "#8B6B4D", // Warm bronze
    sage: "#5D8A7A", // Seafoam sage
    caramel: "#9B7E5E", // Warm caramel
    teal: "#4A6B5C", // Deep teal
    taupe: "#7B6B5A", // Earthy taupe
    cream: "#F5F0E6", // Soft cream
    gold: "#C4A962", // Muted gold
  };

  return (
    <section className="py-8 bg-gradient-to-b from-[#1a2a1a] to-[#171b17ff] relative overflow-hidden">
      {/* Premium Background Pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_#8B6B4D_0%,_transparent_50%)]"></div>
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_bottom_left,_#5D8A7A_0%,_transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[linear-gradient(45deg,_#8B6B4D_1px,_transparent_1px)] bg-[length:40px_40px]"></div>
      </div>

      {/* Brand Header - Redesigned with Lucide Icons */}
      <div className="relative z-10 border-b border-[#8B6B4D]/20">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
            {/* Logo and Brand Info */}
            <div className="text-center lg:text-left">
              <h1 className="font-['Saira_Extra_Condensed'] text-5xl lg:text-6xl font-black text-[#F5F0E6] tracking-tight">
                KINGS PAINT DEPOT
              </h1>
              <p className="text-[#C4A962] text-lg mt-2 font-light tracking-wide">
                Your quality acrylic paint store and custom colors
              </p>
            </div>
          </div>

          {/* Brand Logos */}
          <div className="flex flex-wrap justify-center lg:justify-start items-center gap-8 mt-8 pt-6 border-t border-[#8B6B4D]/20">
            <span className="text-[#C4A962] text-sm uppercase tracking-wider font-medium">
              Our paint brands include:
            </span>
            <div className="flex items-center gap-6">
              <span className="text-[#F5F0E6] text-xl font-bold">
                Benjamin Moore®
              </span>
              <span className="text-[#F5F0E6] text-2xl font-black tracking-tight">
                SHERWIN WILLIAMS
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10 py-16">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative inline-block"
          >
            {/* Decorative elements */}
            <div className="absolute -inset-4 border border-[#8B6B4D]/30 rotate-3"></div>
            <div className="absolute -inset-4 border border-[#5D8A7A]/30 -rotate-3"></div>

            <h2 className="font-['Saira_Extra_Condensed'] text-7xl lg:text-8xl font-black uppercase tracking-[-0.02em] bg-gradient-to-r from-[#C4A962] via-[#8B6B4D] to-[#5D8A7A] bg-clip-text text-transparent px-8 py-2">
              Price Catalog
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="text-[#C4A962] text-lg mt-6 max-w-2xl mx-auto font-light tracking-wide"
          >
            Premium quality paints at factory-direct prices
          </motion.p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {featuredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="group relative bg-[#F5F0E6] rounded-md shadow-md hover:shadow-2xl transition-all duration-500 overflow-hidden"
            >
              {/* Premium Badge */}
              {product.badge && (
                <div className="absolute top-4 left-4 z-20">
                  <span
                    className="px-3 py-1 text-xs font-medium uppercase tracking-wider text-[#F5F0E6] rounded-full"
                    style={{
                      background: `linear-gradient(135deg, ${brandColors.accent}, ${brandColors.caramel})`,
                      boxShadow: "0 4px 10px rgba(139,107,77,0.3)",
                    }}
                  >
                    {product.badge}
                  </span>
                </div>
              )}

              {/* Size Badge */}
              <div className="absolute top-4 right-4 z-20">
                <div className="bg-[#1a2a1a]/80 backdrop-blur-sm px-3 py-1 rounded-full border border-[#C4A962]/30">
                  <span className="text-[#C4A962] text-xs font-medium">
                    {product.size}
                  </span>
                </div>
              </div>

              {/* Sale Badge with Flame icon */}
              {product.onSale && (
                <div className="absolute top-16 right-4 z-20">
                  <div className="relative">
                    <Flame className="w-8 h-8 text-[#9B7E5E] drop-shadow-lg" />
                    <span className="absolute inset-0 flex items-center justify-center text-white text-xs font-bold">
                      SALE
                    </span>
                  </div>
                </div>
              )}

              {/* Image Container with Blur-Up Loading Effect */}
              <Link
                to={`/products/${product.id}`}
                className="block relative overflow-hidden bg-gradient-to-br from-[#1a2a1a] to-[#2a3a2a] aspect-square"
              >
                {/* Low-quality placeholder (shows while loading) */}
                <div className="absolute inset-0 bg-[#1a2a1a] animate-pulse">
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-[#8B6B4D]/30"></div>
                  </div>
                </div>

                {/* ACTUAL PRODUCT IMAGE WITH LAZY LOADING */}
                <img
                  src={product.image}
                  alt={product.name}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 relative z-10"
                  onLoad={(e) => {
                    // Hide placeholder when image loads
                    e.target.previousElementSibling.style.opacity = "0";
                    setTimeout(() => {
                      e.target.previousElementSibling.style.display = "none";
                    }, 300);
                  }}
                  onError={(e) => {
                    // If image fails to load, show fallback
                    e.target.style.display = "none";
                    e.target.nextElementSibling.style.display = "flex";
                  }}
                />

                {/* Fallback placeholder (KP logo) - only shows if image fails */}
                <div className="absolute inset-0 hidden items-center justify-center bg-gradient-to-br from-[#1a2a1a] to-[#2a3a2a] z-20">
                  <div className="w-32 h-32 rounded-full bg-[#8B6B4D]/20 flex items-center justify-center">
                    <span className="text-[#C4A962] text-4xl font-bold">
                      KP
                    </span>
                  </div>
                </div>

                {/* Quick View Indicator */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 translate-y-10 group-hover:translate-y-0 transition-transform duration-500 z-30">
                  <span className="bg-[#C4A962] text-[#1a2a1a] px-4 py-2 rounded-full text-xs font-medium uppercase tracking-wider shadow-lg flex items-center gap-1">
                    <ShoppingCart className="w-3 h-3" />
                    View Details
                  </span>
                </div>
              </Link>
              {/* Product Info */}
              <div className="p-5">
                {/* Category & Description */}
                <div className="mb-3">
                  <span className="text-xs font-medium text-[#8B6B4D] uppercase tracking-wider">
                    {product.category}
                  </span>
                  <p className="text-xs text-[#5D8A7A] mt-1 line-clamp-2">
                    {product.description}
                  </p>
                </div>

                {/* Product Name */}
                <h3 className="font-semibold text-[#1a2a1a] mb-3 line-clamp-2 h-12">
                  <Link
                    to={`/products/${product.id}`}
                    className="hover:text-[#8B6B4D] transition-colors"
                  >
                    {product.name}
                  </Link>
                </h3>

                {/* Rating with Star icons */}
                <div className="flex items-center gap-2 mb-3">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < Math.floor(product.rating)
                            ? "text-[#C4A962] fill-[#C4A962]"
                            : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-xs text-[#5D8A7A]">
                    ({product.reviews})
                  </span>
                </div>

                {/* Price and Points */}
                <div className="flex items-end justify-between">
                  <div>
                    <span className="text-2xl font-bold text-[#1a2a1a]">
                      GH₵{product.price.toFixed(2)}
                    </span>
                    <span className="text-xs text-[#5D8A7A] block">
                      per {product.size}
                    </span>
                  </div>

                  {/* Points Badge with Sparkles icon */}
                  <div className="flex items-center gap-1 bg-[#C4A962]/10 px-2 py-1 rounded-full">
                    <Sparkles className="w-3 h-3 text-[#C4A962]" />
                    <span className="text-xs font-medium text-[#C4A962]">
                      +{product.points} pts
                    </span>
                  </div>
                </div>

                {/* Add to Cart Button */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => handleAddToCart(product.id, product.name)}
                  disabled={loadingStates[product.id]}
                  className="w-full mt-4 py-3 rounded-xl bg-[#1a2a1a] text-[#C4A962] font-medium text-sm uppercase tracking-wider hover:bg-[#2a3a2a] transition-all duration-300 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 border border-[#C4A962]/20 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loadingStates[product.id] ? (
                    <>
                      {/* Loading Spinner */}
                      <svg
                        className="animate-spin h-4 w-4 text-[#C4A962]"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      <span>Adding...</span>
                    </>
                  ) : (
                    <>
                      <ShoppingCart className="w-4 h-4" />
                      <span>Add to Cart</span>
                    </>
                  )}
                </motion.button>
              </div>

              {/* Premium Border Accent */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#8B6B4D] via-[#C4A962] to-[#5D8A7A] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
            </motion.div>
          ))}
        </div>

        {/* Service Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16 p-8 bg-[#1a2a1a]/50 backdrop-blur-sm rounded-2xl border border-[#C4A962]/20"
        >
          <p className="text-[#C4A962] text-lg font-light">
            <span className="font-semibold">
              Custom colors, supply and services available.
            </span>{" "}
            <span className="text-[#F5F0E6]">
              Application services included at GH₵350*00
            </span>
          </p>
          <div className="flex justify-center gap-4 mt-4">
            <span className="text-[#5D8A7A] text-sm flex items-center gap-1">
              <MapPin className="w-3 h-3" /> Professional Application
            </span>
            <span className="text-[#5D8A7A] text-sm flex items-center gap-1">
              <MapPin className="w-3 h-3" /> Custom Color Mixing
            </span>
            <span className="text-[#5D8A7A] text-sm flex items-center gap-1">
              <MapPin className="w-3 h-3" /> Bulk Supply
            </span>
          </div>
        </motion.div>

        {/* View All Link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link
            to="/products"
            className="inline-flex items-center gap-3 px-8 py-4 bg-amber-800 text-[#F5F0E6] rounded-md font-medium uppercase tracking-wider hover:bg-amber-900 transition-all duration-300 group shadow-xl hover:shadow-2xl"
          >
            <span>View Full Catalog</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
          </Link>
        </motion.div>
      </div>

      {/* Font Import */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Saira+Extra+Condensed:wght@400;500;600;700;800;900&display=swap');
      `}</style>
    </section>
  );
};

export default FeaturedProducts;

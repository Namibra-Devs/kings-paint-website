// src/pages/CategoryPage.jsx
import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft, Package, Home, Sun, Sparkles, Brush, Wrench } from 'lucide-react'
import ProductCard from '@components/ProductCard'

// Import all products from your database (you can move this to a shared file later)
const allProducts = [
  // Interior Products (ID: 1, 6, etc.)
  {
    id: 1,
    name: "Premium Interior Paint - Matte Finish",
    brand: "Benjamin Moore®",
    price: 450.99,
    oldPrice: 540.99,
    image: "/images/interior.png",
    rating: 4.5,
    reviews: 128,
    category: "Interior",
    inStock: true,
    description: "Premium interior paint with matte finish"
  },
  {
    id: 6,
    name: "Ceiling Paint - Bright White",
    brand: "Benjamin Moore®",
    price: 380.99,
    image: "/images/ceiling.png",
    rating: 4.4,
    reviews: 88,
    category: "Interior",
    inStock: true,
    description: "Specialized ceiling paint for interiors"
  },
  {
    id: 9,
    name: "Kitchen & Bathroom Satin Finish",
    brand: "DuraCoat",
    price: 420.99,
    image: "/images/kitchen.avif",
    rating: 4.5,
    reviews: 92,
    category: "Interior",
    inStock: true,
    description: "Durable finish for kitchens and bathrooms"
  },
  {
    id: 11,
    name: "Living Room Premium Paint",
    brand: "Benjamin Moore®",
    price: 480.99,
    image: "/images/egg.jpeg",
    rating: 4.7,
    reviews: 156,
    category: "Interior",
    inStock: true,
    description: "Premium paint for living spaces"
  },
  {
    id: 12,
    name: "Bedroom Soft Matt Paint",
    brand: "Dulux",
    price: 420.99,
    image: "/images/lost-souls.webp",
    rating: 4.6,
    reviews: 134,
    category: "Interior",
    inStock: true,
    description: "Soft matt finish for bedrooms"
  },

  // Exterior Products (ID: 2, etc.)
  {
    id: 2,
    name: "WeatherShield Exterior Paint - Satin",
    brand: "SHERWIN WILLIAMS",
    price: 520.99,
    image: "/images/exterior.png",
    rating: 4.8,
    reviews: 95,
    category: "Exterior",
    inStock: true,
    description: "Weather-resistant exterior paint"
  },
  {
    id: 13,
    name: "Exterior Wood Paint",
    brand: "WoodCraft",
    price: 550.99,
    image: "/images/acrylic.webp",
    rating: 4.5,
    reviews: 67,
    category: "Exterior",
    inStock: true,
    description: "Protective paint for exterior wood"
  },
  {
    id: 14,
    name: "Facade Paint - Long Lasting",
    brand: "PPG",
    price: 590.99,
    image: "/images/22.jpeg",
    rating: 4.7,
    reviews: 89,
    category: "Exterior",
    inStock: true,
    description: "Long-lasting facade protection"
  },

  // Specialty Products (ID: 3, 8, etc.)
  {
    id: 3,
    name: "Metallic Finish - Gold Series",
    brand: "LuxePaint",
    price: 890.99,
    oldPrice: 1090.99,
    image: "/images/metal.jpeg",
    rating: 4.6,
    reviews: 67,
    category: "Specialty",
    inStock: true,
    description: "Luxurious metallic finish"
  },
  {
    id: 8,
    name: "Anti-Mold Bathroom Paint",
    brand: "DuraCoat",
    price: 480.99,
    oldPrice: 540.99,
    image: "/images/sand1.jpg",
    rating: 4.9,
    reviews: 76,
    category: "Specialty",
    inStock: true,
    description: "Mold-resistant bathroom paint"
  },
  {
    id: 15,
    name: "Chalkboard Paint - Black",
    brand: "LuxePaint",
    price: 320.99,
    image: "/images/flat.jpeg",
    rating: 4.5,
    reviews: 45,
    category: "Specialty",
    inStock: true,
    description: "Create writable surfaces"
  },
  {
    id: 16,
    name: "Magnetic Paint",
    brand: "LuxePaint",
    price: 420.99,
    image: "/images/mag.jpeg",
    rating: 4.3,
    reviews: 34,
    category: "Specialty",
    inStock: true,
    description: "Create magnetic walls"
  },

  // Primers (ID: 4, etc.)
  {
    id: 4,
    name: "Eco-Friendly Primer - Zero VOC",
    brand: "GreenCoat",
    price: 320.99,
    image: "/images/eco.png",
    rating: 4.3,
    reviews: 156,
    category: "Primers",
    inStock: true,
    description: "Zero VOC eco-friendly primer"
  },
  {
    id: 17,
    name: "All-Purpose Primer",
    brand: "Benjamin Moore®",
    price: 280.99,
    image: "/images/primer3.jpeg",
    rating: 4.4,
    reviews: 203,
    category: "Primers",
    inStock: true,
    description: "Versatile all-purpose primer"
  },
  {
    id: 18,
    name: "Stain Blocking Primer",
    brand: "SHERWIN WILLIAMS",
    price: 350.99,
    image: "/images/primer4.jpeg",
    rating: 4.6,
    reviews: 178,
    category: "Primers",
    inStock: true,
    description: "Blocks tough stains"
  },

  // Tools (ID: 5, etc.)
  {
    id: 5,
    name: "Professional Paint Roller Set",
    brand: "ProTools",
    price: 240.99,
    oldPrice: 290.99,
    image: "/images/set3.jpeg",
    rating: 4.7,
    reviews: 203,
    category: "Tools",
    inStock: true,
    description: "Complete roller set"
  },
  {
    id: 19,
    name: "Premium Brush Set",
    brand: "ProTools",
    price: 180.99,
    image: "/images/brush2.jpeg",
    rating: 4.8,
    reviews: 312,
    category: "Tools",
    inStock: true,
    description: "Set of 5 premium brushes"
  },
  {
    id: 20,
    name: "Painter's Tape - 6 Pack",
    brand: "ProTools",
    price: 89.99,
    image: "/images/tape5.jpeg",
    rating: 4.5,
    reviews: 567,
    category: "Tools",
    inStock: true,
    description: "Professional painter's tape"
  },
  {
    id: 21,
    name: "Paint Tray & Liner Set",
    brand: "ProTools",
    price: 120.99,
    image: "/images/set1.jpeg",
    rating: 4.4,
    reviews: 234,
    category: "Tools",
    inStock: true,
    description: "Durable paint tray with liners"
  },
  {
    id: 22,
    name: "Extension Pole",
    brand: "ProTools",
    price: 160.99,
    image: "/images/pole1.jpeg",
    rating: 4.6,
    reviews: 145,
    category: "Tools",
    inStock: true,
    description: "8-12 ft adjustable pole"
  },
  {
    id: 23,
    name: "Drop Cloth - 9x12",
    brand: "ProTools",
    price: 95.99,
    image: "/images/cloth2.jpeg",
    rating: 4.5,
    reviews: 267,
    category: "Tools",
    inStock: true,
    description: "Heavy-duty canvas drop cloth"
  },
  {
    id: 24,
    name: "Paint Mixer Attachment",
    brand: "ProTools",
    price: 65.99,
    image: "/images/mix-set1.jpeg",
    rating: 4.7,
    reviews: 189,
    category: "Tools",
    inStock: true,
    description: "Drill attachment for mixing"
  }
]

// Category icons mapping
const categoryIcons = {
  interior: Home,
  exterior: Sun,
  specialty: Sparkles,
  primers: Brush,
  tools: Wrench
}

const CategoryPage = () => {
  const { category } = useParams()
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)

  // Category mapping with images
  const categoryInfo = {
    interior: {
      name: 'Interior Paints',
      description: 'Transform your living spaces with our premium interior paints. From living rooms to bedrooms, find the perfect finish.',
      image: '/images/hero.png',
      icon: Home,
      count: allProducts.filter(p => p.category === 'Interior').length
    },
    exterior: {
      name: 'Exterior Paints',
      description: 'Weather-resistant paints designed to protect and beautify your home\'s exterior for years to come.',
      image: '/images/categories/exterior-category.jpg',
      icon: Sun,
      count: allProducts.filter(p => p.category === 'Exterior').length
    },
    specialty: {
      name: 'Specialty Finishes',
      description: 'Unique textures and effects for those who want something extraordinary. Metallic, chalk, and specialty finishes.',
      image: '/images/categories/specialty-category.jpg',
      icon: Sparkles,
      count: allProducts.filter(p => p.category === 'Specialty').length
    },
    primers: {
      name: 'Primers',
      description: 'Professional-grade primers for the perfect base. Ensure better adhesion and longer-lasting results.',
      image: '/images/categories/primers-category.jpg',
      icon: Brush,
      count: allProducts.filter(p => p.category === 'Primers').length
    },
    tools: {
      name: 'Tools & Supplies',
      description: 'Everything you need for your painting project. Brushes, rollers, tape, and more.',
      image: '/images/categories/tools-category.jpg',
      icon: Wrench,
      count: allProducts.filter(p => p.category === 'Tools').length
    }
  }

  useEffect(() => {
    if (!category) return

    const normalizedCategory = category.toLowerCase()
    const currentCategory = categoryInfo[normalizedCategory]
    
    if (!currentCategory) return

    setLoading(true)
    
    // Filter products by category (case-insensitive comparison)
    setTimeout(() => {
      const categoryProducts = allProducts.filter(
        product => product.category.toLowerCase() === normalizedCategory
      )
      setProducts(categoryProducts)
      setLoading(false)
    }, 500) // Simulate loading
  }, [category])

  const currentCategory = categoryInfo[category?.toLowerCase()]
  const CategoryIcon = currentCategory?.icon || Package

  if (!currentCategory) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <div className="text-center max-w-md">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Category Not Found</h2>
          <p className="text-gray-600 mb-6">
            The category "{category}" doesn't exist. Please check the URL or browse our available categories.
          </p>
          <Link 
            to="/products" 
            className="inline-block bg-[#8B6B4D] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#9B7E5E] transition-colors"
          >
            View All Products
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Category Hero with Image */}
      <div className="relative h-[300px] overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src={currentCategory.image}
            alt={currentCategory.name}
            className="w-full h-full object-cover"
            onError={(e) => {
              e.target.src = '/images/hero.png'
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent"></div>
        </div>
        
        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 h-full flex items-center">
          <div className="text-white">
            <Link 
              to="/products" 
              className="inline-flex items-center text-[#C4A962] hover:text-white mb-4 transition-colors group"
            >
              <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
              Back to Products
            </Link>
            
            <div className="flex items-center gap-3 mb-4">
              <CategoryIcon className="w-8 h-8 text-[#C4A962]" />
              <h1 className="text-4xl lg:text-5xl font-bold">{currentCategory.name}</h1>
            </div>
            
            <p className="text-gray-300 max-w-2xl text-lg mb-4">
              {currentCategory.description}
            </p>
            
            <div className="flex items-center gap-4">
              <span className="bg-[#C4A962]/20 text-[#C4A962] px-4 py-2 rounded-full text-sm font-medium">
                {products.length} Products Available
              </span>
              {products.length === 0 && (
                <span className="bg-amber-500/20 text-amber-400 px-4 py-2 rounded-full text-sm font-medium">
                  New arrivals coming soon
                </span>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="container mx-auto px-4 py-12">
        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="bg-white rounded-lg shadow-md p-4 animate-pulse">
                <div className="bg-gray-200 h-48 rounded-lg mb-4"></div>
                <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
                <div className="h-4 bg-gray-200 rounded w-1/2 mb-4"></div>
                <div className="h-8 bg-gray-200 rounded"></div>
              </div>
            ))}
          </div>
        ) : products.length > 0 ? (
          <>
            {/* Results count */}
            <div className="flex justify-between items-center mb-6">
              <p className="text-gray-600">
                Showing <span className="font-semibold text-[#8B6B4D]">{products.length}</span> products
              </p>
              <select className="px-3 py-2 bg-white border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#8B6B4D]">
                <option>Sort by: Featured</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Top Rated</option>
              </select>
            </div>

            {/* Products */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {products.map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <ProductCard product={product} />
                </motion.div>
              ))}
            </motion.div>
          </>
        ) : (
          // Empty state
          <div className="text-center py-16">
            <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Package className="w-12 h-12 text-gray-400" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">No Products Found</h3>
            <p className="text-gray-500 mb-6">
              We couldn't find any products in this category at the moment.
            </p>
            <Link
              to="/products"
              className="inline-block bg-[#8B6B4D] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#9B7E5E] transition-colors"
            >
              Browse All Products
            </Link>
          </div>
        )}
      </div>
    </div>
  )
}

export default CategoryPage
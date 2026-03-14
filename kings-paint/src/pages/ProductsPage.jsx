// src/pages/ProductsPage.jsx
import { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  SlidersHorizontal,
  X,
  ChevronDown,
  Search
} from 'lucide-react' // 👈 Changed to Lucide React
import ProductCard from '@components/ProductCard'
import ProductFilters from '@components/products/ProductFilters'

const ProductsPage = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const [showFilters, setShowFilters] = useState(false)
  const [products, setProducts] = useState([])
  const [filteredProducts, setFilteredProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [sortBy, setSortBy] = useState('featured')

  // Diverse mock product images - ✅ These are correct
  const productImages = [
    "/images/interior.png",
    "/images/exterior.png",
    "/images/metal.jpeg",
    "/images/eco.png",
    "/images/tools.png",
    "/images/ceiling.png",
    "/images/benjamin.webp",
    "/images/chalk3.jpeg",
    "/images/kitchen.avif",
    "/images/paint8.png",
    "/images/chalk.png",
    "/images/mag.jpeg",
    "/images/chalk.jpeg",
    "/images/sand.jpg",
    "/images/paint-service.avif",
    "/images/con1.jpeg",
    "/images/paint10.png",
    "/images/gloss2.jpg",
    "/images/egg.jpeg",
    "/images/flat.jpeg",
    "/images/door.jpeg",
    "/images/door4.jpeg",
    "/images/chalk2.jpeg",
    "/images/spray.jpeg",
  ]

  // Product names for variety
  const productNames = [
    "Premium Interior Paint - Matte Finish",
    "WeatherShield Exterior Paint - Satin",
    "Metallic Finish - Gold Series",
    "Eco-Friendly Primer - Zero VOC",
    "Professional Paint Roller Set",
    "Ceiling Paint - Bright White",
    "Wood Stain - Natural Oak",
    "Anti-Mold Bathroom Paint",
    "Kitchen & Bathroom Satin Finish",
    "Floor & Patio Epoxy Coating",
    "Chalk Paint - Vintage Collection",
    "Magnetic Paint - Interactive Wall",
    "Chalkboard Paint - Black",
    "Textured Wall Finish - Sandstone",
    "Metal Protection - Rust Proof",
    "Concrete Sealer - Industrial Grade",
    "Wallpaper Primer - Smooth Base",
    "High Gloss Enamel - Premium",
    "Eggshell Finish - Soft Sheen",
    "Flat Finish - No Shine",
    "Semi-Gloss Trim Paint",
    "Door & Window Paint - Durable",
    "Furniture Refresh - Chalk Style",
    "Spray Paint - Quick Dry"
  ]

  // Brands for variety
  const brands = [
    "Benjamin Moore®",
    "SHERWIN WILLIAMS", 
    "Dulux",
    "PPG",
    "BEHR",
    "Valspar",
    "ColorMaster",
    "DuraCoat",
    "LuxePaint",
    "GreenCoat",
    "ProTools",
    "WoodCraft"
  ]

  // Categories for variety
  const categories = [
    'Interior', 
    'Exterior', 
    'Specialty', 
    'Primers', 
    'Tools',
    'Wood',
    'Metal',
    'Concrete',
    'Floor',
    'Ceiling'
  ]

  // Finishes for variety
  const finishes = [
    'Matte', 
    'Satin', 
    'Gloss', 
    'Eggshell', 
    'Flat', 
    'Semi-Gloss', 
    'High-Gloss', 
    'Textured', 
    'Chalk'
  ]

  // Colors for variety
  const colors = [
    'White', 
    'Blue', 
    'Green', 
    'Beige', 
    'Gray', 
    'Black', 
    'Red', 
    'Yellow', 
    'Brown', 
    'Purple',
    'Orange',
    'Pink',
    'Gold',
    'Silver',
    'Bronze'
  ]

  // Mock products data with diverse images
  useEffect(() => {
    const mockProducts = Array.from({ length: 24 }, (_, i) => ({
      id: i + 1,
      name: productNames[i % productNames.length],
      brand: brands[Math.floor(Math.random() * brands.length)],
      price: Math.floor(Math.random() * 500) + 50,
      oldPrice: Math.random() > 0.7 ? Math.floor(Math.random() * 600) + 100 : null,
      image: productImages[i % productImages.length], // ✅ Your images are used here
      rating: (Math.random() * 1.5) + 3.5,
      reviews: Math.floor(Math.random() * 200) + 20,
      category: categories[Math.floor(Math.random() * categories.length)],
      finish: finishes[Math.floor(Math.random() * finishes.length)],
      color: colors[Math.floor(Math.random() * colors.length)],
      inStock: Math.random() > 0.2,
      onSale: Math.random() > 0.7,
      points: Math.floor(Math.random() * 100) + 20,
      description: `Premium quality ${categories[Math.floor(Math.random() * categories.length)].toLowerCase()} paint with ${finishes[Math.floor(Math.random() * finishes.length)].toLowerCase()} finish.`,
      volume: ['1L', '2.5L', '3.5L', '5L', '10L', '20L'][Math.floor(Math.random() * 6)]
    }))

    setProducts(mockProducts)
    setFilteredProducts(mockProducts)
    setLoading(false)
  }, [])

  // Handle sorting
  const handleSort = (value) => {
    setSortBy(value)
    let sorted = [...filteredProducts]
    
    switch(value) {
      case 'price-low':
        sorted.sort((a, b) => a.price - b.price)
        break
      case 'price-high':
        sorted.sort((a, b) => b.price - a.price)
        break
      case 'rating':
        sorted.sort((a, b) => b.rating - a.rating)
        break
      case 'newest':
        sorted.sort((a, b) => b.id - a.id)
        break
      default:
        sorted = [...products]
    }
    
    setFilteredProducts(sorted)
  }

  // Handle filter changes
  const handleFilterChange = (filters) => {
    let filtered = products.filter(product => {
      if (filters.categories.length > 0 && !filters.categories.includes(product.category)) return false
      if (product.price < filters.priceRange[0] || product.price > filters.priceRange[1]) return false
      if (filters.brands.length > 0 && !filters.brands.includes(product.brand)) return false
      if (filters.finishes.length > 0 && !filters.finishes.includes(product.finish)) return false
      if (filters.colors.length > 0 && !filters.colors.includes(product.color)) return false
      if (filters.inStock && !product.inStock) return false
      if (filters.onSale && !product.onSale) return false
      return true
    })
    
    setFilteredProducts(filtered)
    handleSort(sortBy)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-white border-b">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-2">All Products</h1>
          <p className="text-gray-600">
            Discover our complete range of premium paints and supplies
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          {/* Toolbar */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="lg:hidden flex items-center gap-2 px-4 py-2 bg-white rounded-lg shadow-sm hover:bg-gray-50"
            >
              <SlidersHorizontal className="h-5 w-5 text-[#8B6B4D]" />
              <span>Filters</span>
              <ChevronDown className={`h-4 w-4 transition-transform ${showFilters ? 'rotate-180' : ''}`} />
            </button>
            
            <div className="flex items-center gap-4">
              <span className="text-sm text-gray-500">
                {filteredProducts.length} products
              </span>
              
              <select
                value={sortBy}
                onChange={(e) => handleSort(e.target.value)}
                className="px-3 py-2 bg-white border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#8B6B4D] focus:border-transparent"
              >
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Top Rated</option>
                <option value="newest">Newest</option>
              </select>
            </div>
          </div>

          <div className="flex gap-8">
            {/* Filters Sidebar */}
            <AnimatePresence>
              {(showFilters || window.innerWidth >= 1024) && (
                <motion.aside
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className={`lg:block lg:w-64 flex-shrink-0 ${
                    showFilters ? 'block fixed inset-0 z-50 bg-white p-4 overflow-y-auto' : 'hidden'
                  }`}
                >
                  {showFilters && (
                    <button
                      onClick={() => setShowFilters(false)}
                      className="lg:hidden absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full transition-colors"
                    >
                      <X className="h-6 w-6 text-gray-600" />
                    </button>
                  )}
                  
                  <ProductFilters onFilterChange={handleFilterChange} />
                </motion.aside>
              )}
            </AnimatePresence>

            {/* Products Grid */}
            <div className="flex-1">
              {loading ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[...Array(6)].map((_, i) => (
                    <div key={i} className="bg-white rounded-lg shadow-md p-4 animate-pulse">
                      <div className="bg-gray-200 h-48 rounded-lg mb-4"></div>
                      <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
                      <div className="h-4 bg-gray-200 rounded w-1/2 mb-4"></div>
                      <div className="h-8 bg-gray-200 rounded"></div>
                    </div>
                  ))}
                </div>
              ) : (
                <>
                  {filteredProducts.length === 0 ? (
                    <div className="text-center py-12">
                      <p className="text-gray-500 mb-4">No products found matching your criteria</p>
                      <button
                        onClick={() => {
                          setFilteredProducts(products)
                          handleSort('featured')
                        }}
                        className="text-[#8B6B4D] hover:text-[#C4A962] font-semibold transition-colors"
                      >
                        Clear all filters
                      </button>
                    </div>
                  ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                      {filteredProducts.map((product, index) => (
                        <ProductCard key={product.id} product={product} index={index} />
                      ))}
                    </div>
                  )}
                </>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ProductsPage
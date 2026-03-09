// src/pages/ProductsPage.jsx
import { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  FunnelIcon, 
  XMarkIcon,
  ChevronDownIcon,
  MagnifyingGlassIcon 
} from '@heroicons/react/24/outline'
import ProductCard from '@components/ProductCard'
import ProductFilters from '@components/products/ProductFilters'

const ProductsPage = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const [showFilters, setShowFilters] = useState(false)
  const [products, setProducts] = useState([])
  const [filteredProducts, setFilteredProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [sortBy, setSortBy] = useState('featured')

  // Mock products data
  useEffect(() => {
    const mockProducts = Array.from({ length: 24 }, (_, i) => ({
      id: i + 1,
      name: `Premium Paint ${i + 1}`,
      brand: ['ColorMaster', 'DuraCoat', 'LuxePaint', 'GreenCoat'][Math.floor(Math.random() * 4)],
      price: Math.floor(Math.random() * 100) + 20,
      oldPrice: Math.random() > 0.7 ? Math.floor(Math.random() * 120) + 30 : null,
      image: "/api/placeholder/300/300",
      rating: (Math.random() * 2) + 3,
      reviews: Math.floor(Math.random() * 200) + 20,
      category: ['Interior', 'Exterior', 'Specialty', 'Primers', 'Tools'][Math.floor(Math.random() * 5)],
      finish: ['Matte', 'Satin', 'Gloss', 'Eggshell'][Math.floor(Math.random() * 4)],
      color: ['White', 'Blue', 'Green', 'Beige', 'Gray'][Math.floor(Math.random() * 5)],
      inStock: Math.random() > 0.2,
      onSale: Math.random() > 0.7,
      points: Math.floor(Math.random() * 100) + 20
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
        // featured - keep original order
        sorted = [...products]
    }
    
    setFilteredProducts(sorted)
  }

  // Handle filter changes
  const handleFilterChange = (filters) => {
    let filtered = products.filter(product => {
      // Category filter
      if (filters.categories.length > 0 && !filters.categories.includes(product.category)) {
        return false
      }
      
      // Price range filter
      if (product.price < filters.priceRange[0] || product.price > filters.priceRange[1]) {
        return false
      }
      
      // Brand filter
      if (filters.brands.length > 0 && !filters.brands.includes(product.brand)) {
        return false
      }
      
      // Finish filter
      if (filters.finishes.length > 0 && !filters.finishes.includes(product.finish)) {
        return false
      }
      
      // Color filter
      if (filters.colors.length > 0 && !filters.colors.includes(product.color)) {
        return false
      }
      
      // In stock filter
      if (filters.inStock && !product.inStock) {
        return false
      }
      
      // On sale filter
      if (filters.onSale && !product.onSale) {
        return false
      }
      
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
              <FunnelIcon className="h-5 w-5" />
              Filters
              <ChevronDownIcon className={`h-4 w-4 transition-transform ${showFilters ? 'rotate-180' : ''}`} />
            </button>
            
            <div className="flex items-center gap-4">
              <span className="text-sm text-gray-500">
                {filteredProducts.length} products
              </span>
              
              <select
                value={sortBy}
                onChange={(e) => handleSort(e.target.value)}
                className="px-3 py-2 bg-white border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary-500"
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
                      className="lg:hidden absolute top-4 right-4 p-2"
                    >
                      <XMarkIcon className="h-6 w-6" />
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
                        className="text-primary-600 hover:text-primary-700 font-semibold"
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
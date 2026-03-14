// src/components/products/ProductFilters.jsx
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  ChevronDown,
  X,
  SlidersHorizontal,
  Star
} from 'lucide-react'

const ProductFilters = ({ onFilterChange }) => {
  const [filters, setFilters] = useState({
    categories: [],
    priceRange: [0, 2000], // Updated to GH₵ range
    brands: [],
    finishes: [],
    colors: [],
    inStock: false,
    onSale: false,
    rating: 0
  })

  const [expandedSections, setExpandedSections] = useState({
    categories: true,
    price: true,
    brands: true,
    finishes: true,
    colors: true,
    other: true
  })

  // Categories data - Updated to match your actual categories
  const categories = [
    { id: 'interior', name: 'Interior Paints', count: 45 },
    { id: 'exterior', name: 'Exterior Paints', count: 32 },
    { id: 'specialty', name: 'Specialty Finishes', count: 28 },
    { id: 'primers', name: 'Primers', count: 15 },
    { id: 'tools', name: 'Tools & Supplies', count: 38 }
  ]

  // Brands data - Updated with real brand names
  const brands = [
    { id: 'benjamin moore®', name: 'Benjamin Moore®', count: 28 },
    { id: 'sherwin williams', name: 'SHERWIN WILLIAMS', count: 32 },
    { id: 'dulux', name: 'Dulux', count: 24 },
    { id: 'ppg', name: 'PPG', count: 18 },
    { id: 'behr', name: 'BEHR', count: 22 },
    { id: 'valspar', name: 'Valspar', count: 16 }
  ]

  // Finishes data
  const finishes = [
    { id: 'matte', name: 'Matte', count: 35 },
    { id: 'eggshell', name: 'Eggshell', count: 28 },
    { id: 'satin', name: 'Satin', count: 32 },
    { id: 'gloss', name: 'Gloss', count: 25 },
    { id: 'semi-gloss', name: 'Semi-Gloss', count: 20 },
    { id: 'flat', name: 'Flat', count: 18 }
  ]

  // Colors data - with KINGS PAINT brand colors
  const colors = [
    { id: 'white', name: 'White', code: '#FFFFFF', count: 40 },
    { id: 'off-white', name: 'Off White', code: '#F5F5F5', count: 35 },
    { id: 'beige', name: 'Beige', code: '#F5F5DC', count: 28 },
    { id: 'gray', name: 'Gray', code: '#808080', count: 32 },
    { id: 'blue', name: 'Blue', code: '#0000FF', count: 25 },
    { id: 'green', name: 'Green', code: '#008000', count: 22 },
    { id: 'brown', name: 'Brown', code: '#8B4513', count: 18 },
    { id: 'black', name: 'Black', code: '#000000', count: 15 },
    { id: 'gold', name: 'Gold', code: '#C4A962', count: 12 }, // KINGS PAINT gold
    { id: 'bronze', name: 'Bronze', code: '#8B6B4D', count: 10 } // KINGS PAINT bronze
  ]

  const toggleSection = (section) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }))
  }

  const handleCategoryChange = (categoryId) => {
    const newCategories = filters.categories.includes(categoryId)
      ? filters.categories.filter(id => id !== categoryId)
      : [...filters.categories, categoryId]
    
    const updatedFilters = { ...filters, categories: newCategories }
    setFilters(updatedFilters)
    onFilterChange(updatedFilters)
  }

  const handleBrandChange = (brandId) => {
    const newBrands = filters.brands.includes(brandId)
      ? filters.brands.filter(id => id !== brandId)
      : [...filters.brands, brandId]
    
    const updatedFilters = { ...filters, brands: newBrands }
    setFilters(updatedFilters)
    onFilterChange(updatedFilters)
  }

  const handleFinishChange = (finishId) => {
    const newFinishes = filters.finishes.includes(finishId)
      ? filters.finishes.filter(id => id !== finishId)
      : [...filters.finishes, finishId]
    
    const updatedFilters = { ...filters, finishes: newFinishes }
    setFilters(updatedFilters)
    onFilterChange(updatedFilters)
  }

  const handleColorChange = (colorId) => {
    const newColors = filters.colors.includes(colorId)
      ? filters.colors.filter(id => id !== colorId)
      : [...filters.colors, colorId]
    
    const updatedFilters = { ...filters, colors: newColors }
    setFilters(updatedFilters)
    onFilterChange(updatedFilters)
  }

  const handlePriceChange = (e) => {
    const value = parseInt(e.target.value)
    setFilters(prev => {
      const newFilters = { ...prev, priceRange: [prev.priceRange[0], value] }
      onFilterChange(newFilters)
      return newFilters
    })
  }

  const handleMinPriceChange = (e) => {
    const value = parseInt(e.target.value)
    setFilters(prev => {
      const newFilters = { ...prev, priceRange: [value, prev.priceRange[1]] }
      onFilterChange(newFilters)
      return newFilters
    })
  }

  const handleMaxPriceChange = (e) => {
    const value = parseInt(e.target.value)
    setFilters(prev => {
      const newFilters = { ...prev, priceRange: [prev.priceRange[0], value] }
      onFilterChange(newFilters)
      return newFilters
    })
  }

  const handleStockChange = (e) => {
    const updatedFilters = { ...filters, inStock: e.target.checked }
    setFilters(updatedFilters)
    onFilterChange(updatedFilters)
  }

  const handleSaleChange = (e) => {
    const updatedFilters = { ...filters, onSale: e.target.checked }
    setFilters(updatedFilters)
    onFilterChange(updatedFilters)
  }

  const handleRatingChange = (rating) => {
    const updatedFilters = { ...filters, rating }
    setFilters(updatedFilters)
    onFilterChange(updatedFilters)
  }

  const clearAllFilters = () => {
    const clearedFilters = {
      categories: [],
      priceRange: [0, 2000],
      brands: [],
      finishes: [],
      colors: [],
      inStock: false,
      onSale: false,
      rating: 0
    }
    setFilters(clearedFilters)
    onFilterChange(clearedFilters)
  }

  const activeFilterCount = 
    filters.categories.length +
    filters.brands.length +
    filters.finishes.length +
    filters.colors.length +
    (filters.inStock ? 1 : 0) +
    (filters.onSale ? 1 : 0) +
    (filters.rating > 0 ? 1 : 0)

  return (
    <div className="w-full">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold flex items-center text-gray-900">
          <SlidersHorizontal className="h-5 w-5 mr-2 text-[#8B6B4D]" />
          Filters
        </h2>
        {activeFilterCount > 0 && (
          <button
            onClick={clearAllFilters}
            className="text-sm text-[#8B6B4D] hover:text-[#C4A962] font-medium transition-colors"
          >
            Clear All ({activeFilterCount})
          </button>
        )}
      </div>

      {/* Active Filters */}
      {activeFilterCount > 0 && (
        <div className="flex flex-wrap gap-2 mb-4">
          {filters.categories.map(catId => {
            const category = categories.find(c => c.id === catId)
            return category && (
              <span key={catId} className="inline-flex items-center bg-[#8B6B4D]/10 text-[#8B6B4D] text-xs px-2 py-1 rounded-full border border-[#C4A962]/20">
                {category.name}
                <button
                  onClick={() => handleCategoryChange(catId)}
                  className="ml-1 hover:text-[#C4A962]"
                >
                  <X className="h-3 w-3" />
                </button>
              </span>
            )
          })}
          
          {filters.brands.map(brandId => {
            const brand = brands.find(b => b.id === brandId)
            return brand && (
              <span key={brandId} className="inline-flex items-center bg-[#8B6B4D]/10 text-[#8B6B4D] text-xs px-2 py-1 rounded-full border border-[#C4A962]/20">
                {brand.name}
                <button
                  onClick={() => handleBrandChange(brandId)}
                  className="ml-1 hover:text-[#C4A962]"
                >
                  <X className="h-3 w-3" />
                </button>
              </span>
            )
          })}
          
          {filters.finishes.map(finishId => {
            const finish = finishes.find(f => f.id === finishId)
            return finish && (
              <span key={finishId} className="inline-flex items-center bg-[#8B6B4D]/10 text-[#8B6B4D] text-xs px-2 py-1 rounded-full border border-[#C4A962]/20">
                {finish.name}
                <button
                  onClick={() => handleFinishChange(finishId)}
                  className="ml-1 hover:text-[#C4A962]"
                >
                  <X className="h-3 w-3" />
                </button>
              </span>
            )
          })}
          
          {filters.colors.map(colorId => {
            const color = colors.find(c => c.id === colorId)
            return color && (
              <span key={colorId} className="inline-flex items-center bg-[#8B6B4D]/10 text-[#8B6B4D] text-xs px-2 py-1 rounded-full border border-[#C4A962]/20">
                <span
                  className="w-3 h-3 rounded-full mr-1"
                  style={{ backgroundColor: color.code }}
                ></span>
                {color.name}
                <button
                  onClick={() => handleColorChange(colorId)}
                  className="ml-1 hover:text-[#C4A962]"
                >
                  <X className="h-3 w-3" />
                </button>
              </span>
            )
          })}
          
          {filters.inStock && (
            <span className="inline-flex items-center bg-[#8B6B4D]/10 text-[#8B6B4D] text-xs px-2 py-1 rounded-full border border-[#C4A962]/20">
              In Stock
              <button
                onClick={() => handleStockChange({ target: { checked: false } })}
                className="ml-1 hover:text-[#C4A962]"
              >
                <X className="h-3 w-3" />
              </button>
            </span>
          )}
          
          {filters.onSale && (
            <span className="inline-flex items-center bg-[#8B6B4D]/10 text-[#8B6B4D] text-xs px-2 py-1 rounded-full border border-[#C4A962]/20">
              On Sale
              <button
                onClick={() => handleSaleChange({ target: { checked: false } })}
                className="ml-1 hover:text-[#C4A962]"
              >
                <X className="h-3 w-3" />
              </button>
            </span>
          )}
          
          {filters.rating > 0 && (
            <span className="inline-flex items-center bg-[#8B6B4D]/10 text-[#8B6B4D] text-xs px-2 py-1 rounded-full border border-[#C4A962]/20">
              {filters.rating}+ Stars
              <button
                onClick={() => handleRatingChange(0)}
                className="ml-1 hover:text-[#C4A962]"
              >
                <X className="h-3 w-3" />
              </button>
            </span>
          )}
        </div>
      )}

      {/* Categories Section */}
      <div className="border-b border-gray-200 py-4">
        <button
          onClick={() => toggleSection('categories')}
          className="flex items-center justify-between w-full text-left font-medium text-gray-700 hover:text-[#8B6B4D] transition-colors"
        >
          <span>Categories</span>
          <ChevronDown
            className={`h-5 w-5 transition-transform duration-300 ${
              expandedSections.categories ? 'rotate-180' : ''
            }`}
          />
        </button>
        
        <AnimatePresence>
          {expandedSections.categories && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="overflow-hidden"
            >
              <div className="pt-3 space-y-2">
                {categories.map(category => (
                  <label key={category.id} className="flex items-center justify-between cursor-pointer group">
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        checked={filters.categories.includes(category.id)}
                        onChange={() => handleCategoryChange(category.id)}
                        className="rounded border-gray-300 text-[#8B6B4D] focus:ring-[#C4A962] focus:ring-2"
                      />
                      <span className="ml-2 text-sm text-gray-600 group-hover:text-[#8B6B4D] transition-colors">
                        {category.name}
                      </span>
                    </div>
                    <span className="text-xs text-gray-400">({category.count})</span>
                  </label>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Price Range Section */}
      <div className="border-b border-gray-200 py-4">
        <button
          onClick={() => toggleSection('price')}
          className="flex items-center justify-between w-full text-left font-medium text-gray-700 hover:text-[#8B6B4D] transition-colors"
        >
          <span>Price Range (GH₵)</span>
          <ChevronDown
            className={`h-5 w-5 transition-transform duration-300 ${
              expandedSections.price ? 'rotate-180' : ''
            }`}
          />
        </button>
        
        <AnimatePresence>
          {expandedSections.price && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="overflow-hidden"
            >
              <div className="pt-4 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-[#8B6B4D]">
                    GH₵{filters.priceRange[0]} - GH₵{filters.priceRange[1]}
                  </span>
                </div>
                
                <div className="space-y-2">
                  <input
                    type="range"
                    min="0"
                    max="2000"
                    value={filters.priceRange[1]}
                    onChange={handlePriceChange}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#8B6B4D]"
                  />
                  
                  <div className="flex gap-2">
                    <div className="flex-1">
                      <label className="block text-xs text-gray-500 mb-1">Min (GH₵)</label>
                      <input
                        type="number"
                        min="0"
                        max={filters.priceRange[1]}
                        value={filters.priceRange[0]}
                        onChange={handleMinPriceChange}
                        className="w-full px-2 py-1 text-sm border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-[#8B6B4D] focus:border-[#8B6B4D]"
                      />
                    </div>
                    <div className="flex-1">
                      <label className="block text-xs text-gray-500 mb-1">Max (GH₵)</label>
                      <input
                        type="number"
                        min={filters.priceRange[0]}
                        max="2000"
                        value={filters.priceRange[1]}
                        onChange={handleMaxPriceChange}
                        className="w-full px-2 py-1 text-sm border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-[#8B6B4D] focus:border-[#8B6B4D]"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Brands Section */}
      <div className="border-b border-gray-200 py-4">
        <button
          onClick={() => toggleSection('brands')}
          className="flex items-center justify-between w-full text-left font-medium text-gray-700 hover:text-[#8B6B4D] transition-colors"
        >
          <span>Brands</span>
          <ChevronDown
            className={`h-5 w-5 transition-transform duration-300 ${
              expandedSections.brands ? 'rotate-180' : ''
            }`}
          />
        </button>
        
        <AnimatePresence>
          {expandedSections.brands && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="overflow-hidden"
            >
              <div className="pt-3 space-y-2">
                {brands.map(brand => (
                  <label key={brand.id} className="flex items-center justify-between cursor-pointer group">
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        checked={filters.brands.includes(brand.id)}
                        onChange={() => handleBrandChange(brand.id)}
                        className="rounded border-gray-300 text-[#8B6B4D] focus:ring-[#C4A962] focus:ring-2"
                      />
                      <span className="ml-2 text-sm text-gray-600 group-hover:text-[#8B6B4D] transition-colors">
                        {brand.name}
                      </span>
                    </div>
                    <span className="text-xs text-gray-400">({brand.count})</span>
                  </label>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Finishes Section */}
      <div className="border-b border-gray-200 py-4">
        <button
          onClick={() => toggleSection('finishes')}
          className="flex items-center justify-between w-full text-left font-medium text-gray-700 hover:text-[#8B6B4D] transition-colors"
        >
          <span>Finish</span>
          <ChevronDown
            className={`h-5 w-5 transition-transform duration-300 ${
              expandedSections.finishes ? 'rotate-180' : ''
            }`}
          />
        </button>
        
        <AnimatePresence>
          {expandedSections.finishes && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="overflow-hidden"
            >
              <div className="pt-3 space-y-2">
                {finishes.map(finish => (
                  <label key={finish.id} className="flex items-center justify-between cursor-pointer group">
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        checked={filters.finishes.includes(finish.id)}
                        onChange={() => handleFinishChange(finish.id)}
                        className="rounded border-gray-300 text-[#8B6B4D] focus:ring-[#C4A962] focus:ring-2"
                      />
                      <span className="ml-2 text-sm text-gray-600 group-hover:text-[#8B6B4D] transition-colors">
                        {finish.name}
                      </span>
                    </div>
                    <span className="text-xs text-gray-400">({finish.count})</span>
                  </label>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Colors Section */}
      <div className="border-b border-gray-200 py-4">
        <button
          onClick={() => toggleSection('colors')}
          className="flex items-center justify-between w-full text-left font-medium text-gray-700 hover:text-[#8B6B4D] transition-colors"
        >
          <span>Colors</span>
          <ChevronDown
            className={`h-5 w-5 transition-transform duration-300 ${
              expandedSections.colors ? 'rotate-180' : ''
            }`}
          />
        </button>
        
        <AnimatePresence>
          {expandedSections.colors && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="overflow-hidden"
            >
              <div className="pt-3 space-y-2">
                {colors.map(color => (
                  <label key={color.id} className="flex items-center justify-between cursor-pointer group">
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        checked={filters.colors.includes(color.id)}
                        onChange={() => handleColorChange(color.id)}
                        className="rounded border-gray-300 text-[#8B6B4D] focus:ring-[#C4A962] focus:ring-2"
                      />
                      <span
                        className="w-4 h-4 rounded-full ml-2 border border-gray-200"
                        style={{ backgroundColor: color.code }}
                      ></span>
                      <span className="ml-2 text-sm text-gray-600 group-hover:text-[#8B6B4D] transition-colors">
                        {color.name}
                      </span>
                    </div>
                    <span className="text-xs text-gray-400">({color.count})</span>
                  </label>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Other Filters Section */}
      <div className="border-b border-gray-200 py-4">
        <button
          onClick={() => toggleSection('other')}
          className="flex items-center justify-between w-full text-left font-medium text-gray-700 hover:text-[#8B6B4D] transition-colors"
        >
          <span>Other Filters</span>
          <ChevronDown
            className={`h-5 w-5 transition-transform duration-300 ${
              expandedSections.other ? 'rotate-180' : ''
            }`}
          />
        </button>
        
        <AnimatePresence>
          {expandedSections.other && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="overflow-hidden"
            >
              <div className="pt-3 space-y-3">
                <label className="flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={filters.inStock}
                    onChange={handleStockChange}
                    className="rounded border-gray-300 text-[#8B6B4D] focus:ring-[#C4A962] focus:ring-2"
                  />
                  <span className="ml-2 text-sm text-gray-700">In Stock Only</span>
                </label>
                
                <label className="flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={filters.onSale}
                    onChange={handleSaleChange}
                    className="rounded border-gray-300 text-[#8B6B4D] focus:ring-[#C4A962] focus:ring-2"
                  />
                  <span className="ml-2 text-sm text-gray-700">On Sale</span>
                </label>
                
                <div>
                  <label className="block text-sm text-gray-700 mb-2">Minimum Rating</label>
                  <div className="flex gap-2">
                    {[4, 3, 2, 1].map(rating => (
                      <button
                        key={rating}
                        onClick={() => handleRatingChange(rating)}
                        className={`px-3 py-1 text-sm border rounded transition-colors flex items-center gap-1 ${
                          filters.rating === rating
                            ? 'bg-[#8B6B4D] text-white border-[#8B6B4D]'
                            : 'border-gray-300 text-gray-600 hover:border-[#8B6B4D] hover:text-[#8B6B4D]'
                        }`}
                      >
                        {rating} <Star className="w-3 h-3 fill-current" />
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Apply Filters Button (Mobile) */}
      <div className="mt-6 lg:hidden">
        <button className="w-full bg-[#8B6B4D] text-white py-2 rounded-lg font-medium hover:bg-[#9B7E5E] transition-colors">
          Apply Filters
        </button>
      </div>
    </div>
  )
}

export default ProductFilters
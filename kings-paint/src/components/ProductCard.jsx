// src/components/ProductCard.jsx - Add viewMode prop
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ShoppingCart, Heart, Star, Sparkles } from 'lucide-react'
import { useState } from 'react'
import useCartStore from '@store/cartStore'
import toast from 'react-hot-toast'

const ProductCard = ({ product, viewMode = 'grid' }) => {
  const [isWishlisted, setIsWishlisted] = useState(false)
  const addToCart = useCartStore((state) => state.addItem)

  const handleAddToCart = (e) => {
    e.preventDefault()
    addToCart(product)
    toast.success('Added to cart!')
  }

  const handleWishlist = (e) => {
    e.preventDefault()
    setIsWishlisted(!isWishlisted)
    toast.success(isWishlisted ? 'Removed from wishlist' : 'Added to wishlist')
  }

  if (viewMode === 'list') {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all overflow-hidden"
      >
        <Link to={`/products/${product.id}`} className="block">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-48 h-48 bg-gray-100">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1 p-6">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <p className="text-sm text-gray-500 mb-1">{product.brand}</p>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{product.name}</h3>
                </div>
                <button onClick={handleWishlist}>
                  <Heart className={`w-5 h-5 ${isWishlisted ? 'fill-red-500 text-red-500' : 'text-gray-400'}`} />
                </button>
              </div>
              <p className="text-gray-600 mb-4 line-clamp-2">{product.description}</p>
              <div className="flex items-center gap-2 mb-4">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < Math.floor(product.rating)
                          ? 'text-[#C4A962] fill-[#C4A962]'
                          : 'text-gray-300'
                      }`}
                    />
                  ))}
                </div>
                <span className="text-sm text-gray-500">({product.reviews})</span>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-2xl font-bold text-[#8B6B4D]">
                    GH₵{product.price.toFixed(2)}
                  </span>
                  {product.oldPrice && (
                    <span className="ml-2 text-sm text-gray-400 line-through">
                      GH₵{product.oldPrice.toFixed(2)}
                    </span>
                  )}
                </div>
                <button
                  onClick={handleAddToCart}
                  className="flex items-center gap-2 bg-[#8B6B4D] text-white px-4 py-2 rounded-lg hover:bg-[#9B7E5E] transition-colors cursor-pointer"
                >
                  <ShoppingCart className="w-4 h-4" />
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </Link>
      </motion.div>
    )
  }

  // Original grid view
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      whileHover={{ y: -5 }}
      className="group bg-white rounded-lg shadow-md hover:shadow-xl transition-all overflow-hidden"
    >
      <Link to={`/products/${product.id}`} className="block">
        <div className="relative overflow-hidden aspect-square">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
          />
          {product.onSale && (
            <span className="absolute top-2 right-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
              Sale
            </span>
          )}
          <button
            onClick={handleWishlist}
            className="absolute top-2 left-2 p-2 bg-white rounded-full shadow-md hover:bg-gray-100 transition-colors"
          >
            <Heart className={`w-4 h-4 ${isWishlisted ? 'fill-red-500 text-red-500' : 'text-gray-600'}`} />
          </button>
        </div>
        <div className="p-4">
          <p className="text-sm text-gray-500 mb-1">{product.brand}</p>
          <h3 className="font-semibold text-gray-800 mb-2 line-clamp-2">{product.name}</h3>
          <div className="flex items-center mb-2">
            <div className="flex text-[#C4A962]">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-4 h-4 ${
                    i < Math.floor(product.rating) ? 'fill-current' : 'text-gray-300'
                  }`}
                />
              ))}
            </div>
            <span className="text-xs text-gray-500 ml-1">({product.reviews})</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-lg font-bold text-[#8B6B4D]">GH₵{product.price.toFixed(2)}</span>
            <button
              onClick={handleAddToCart}
              className="p-2 bg-[#8B6B4D] text-white rounded-lg hover:bg-[#9B7E5E] transition-colors"
            >
              <ShoppingCart className="w-4 h-4" />
            </button>
          </div>
        </div>
      </Link>
    </motion.div>
  )
}

export default ProductCard
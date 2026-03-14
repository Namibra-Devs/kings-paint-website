// src/pages/WishlistPage.jsx
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { 
  Heart, 
  ShoppingCart, 
  Trash2, 
  ArrowLeft,
  Sparkles,
  Clock
} from 'lucide-react'
import useWishlistStore from '@store/wishlistStore'
import useCartStore from '@store/cartStore'
import toast from 'react-hot-toast'

const WishlistPage = () => {
  const { items, removeItem, clearWishlist } = useWishlistStore()
  const addToCart = useCartStore((state) => state.addItem)
  const [loading, setLoading] = useState({})

  const handleAddToCart = (item) => {
    setLoading(prev => ({ ...prev, [item.id]: true }))
    
    // Simulate API call
    setTimeout(() => {
      addToCart(item)
      setLoading(prev => ({ ...prev, [item.id]: false }))
      toast.success(`${item.name} added to cart!`)
    }, 500)
  }

  const handleRemoveFromWishlist = (id, name) => {
    removeItem(id)
    toast.success(`${name} removed from wishlist`)
  }

  const handleAddAllToCart = () => {
    const inStockItems = items.filter(item => item.inStock !== false)
    
    inStockItems.forEach(item => {
      addToCart(item)
    })
    
    toast.success(`${inStockItems.length} items added to cart!`)
  }

  // Format date for display
  const formatDate = (dateString) => {
    if (!dateString) return ''
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', { 
      month: 'short', 
      day: 'numeric',
      year: 'numeric'
    })
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <div>
            <Link 
              to="/products" 
              className="inline-flex items-center text-[#8B6B4D] hover:text-[#C4A962] mb-2 transition-colors group"
            >
              <ArrowLeft className="w-4 h-4 mr-1 group-hover:-translate-x-1 transition-transform" />
              Continue Shopping
            </Link>
            <h1 className="text-3xl lg:text-4xl font-bold text-gray-800 flex items-center gap-3">
              My Wishlist
              <Heart className="w-8 h-8 text-red-500 fill-red-500" />
            </h1>
            <p className="text-gray-500 mt-2">
              You have {items.length} {items.length === 1 ? 'item' : 'items'} saved
            </p>
          </div>

          {items.length > 0 && (
            <div className="flex gap-3">
              <button
                onClick={handleAddAllToCart}
                className="flex items-center gap-2 px-4 py-2 bg-[#8B6B4D] text-white rounded-lg hover:bg-[#9B7E5E] transition-colors"
              >
                <ShoppingCart className="w-4 h-4" />
                Add All to Cart
              </button>
              <button
                onClick={() => {
                  clearWishlist()
                  toast.success('Wishlist cleared')
                }}
                className="flex items-center gap-2 px-4 py-2 border border-gray-300 text-gray-600 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <Trash2 className="w-4 h-4" />
                Clear All
              </button>
            </div>
          )}
        </div>

        {items.length === 0 ? (
          // Empty wishlist state
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-16 bg-white rounded-2xl shadow-sm"
          >
            <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Heart className="w-12 h-12 text-gray-400" />
            </div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-3">Your wishlist is empty</h2>
            <p className="text-gray-500 mb-8 max-w-md mx-auto">
              Save your favorite items here and come back to them later!
            </p>
            <Link
              to="/products"
              className="inline-flex items-center gap-2 bg-[#8B6B4D] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#9B7E5E] transition-colors"
            >
              Explore Products
              <Sparkles className="w-4 h-4" />
            </Link>
          </motion.div>
        ) : (
          // Wishlist items grid
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {items.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all overflow-hidden group"
                >
                  <div className="relative">
                    <Link to={`/products/${item.id}`}>
                      <img
                        src={item.image || '/images/placeholder-product.webp'}
                        alt={item.name}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                        onError={(e) => {
                          e.target.src = '/images/placeholder-product.webp'
                        }}
                      />
                    </Link>
                    
                    {/* Remove button */}
                    <button
                      onClick={() => handleRemoveFromWishlist(item.id, item.name)}
                      className="absolute top-3 right-3 p-2 bg-white rounded-full shadow-md hover:bg-red-50 transition-colors"
                      title="Remove from wishlist"
                    >
                      <Trash2 className="w-4 h-4 text-red-500" />
                    </button>

                    {/* Out of stock badge */}
                    {item.inStock === false && (
                      <span className="absolute bottom-3 left-3 bg-red-500 text-white text-xs px-2 py-1 rounded">
                        Out of Stock
                      </span>
                    )}

                    {/* Added date */}
                    {item.addedAt && (
                      <div className="absolute top-3 left-3 flex items-center gap-1 bg-black/60 backdrop-blur-sm text-white text-xs px-2 py-1 rounded">
                        <Clock className="w-3 h-3" />
                        {formatDate(item.addedAt)}
                      </div>
                    )}
                  </div>

                  <div className="p-4">
                    <Link to={`/products/${item.id}`}>
                      <p className="text-sm text-gray-500 mb-1">{item.brand || 'Premium Brand'}</p>
                      <h3 className="font-semibold text-gray-800 mb-2 hover:text-[#8B6B4D] transition-colors line-clamp-2">
                        {item.name}
                      </h3>
                    </Link>

                    {/* Rating */}
                    {item.rating && (
                      <div className="flex items-center gap-2 mb-3">
                        <div className="flex text-[#C4A962]">
                          {[...Array(5)].map((_, i) => (
                            <svg
                              key={i}
                              className={`w-4 h-4 ${
                                i < Math.floor(item.rating) ? 'fill-current' : 'text-gray-300'
                              }`}
                              viewBox="0 0 20 20"
                            >
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          ))}
                        </div>
                        <span className="text-xs text-gray-500">{item.rating}</span>
                      </div>
                    )}

                    {/* Price and Add to Cart */}
                    <div className="flex items-center justify-between">
                      <span className="text-xl font-bold text-[#8B6B4D]">
                        GH₵{(item.price || 0).toFixed(2)}
                      </span>
                      <button
                        onClick={() => handleAddToCart(item)}
                        disabled={loading[item.id] || item.inStock === false}
                        className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                          item.inStock === false
                            ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                            : loading[item.id]
                            ? 'bg-gray-200 text-gray-500 cursor-wait'
                            : 'bg-[#8B6B4D] text-white hover:bg-[#9B7E5E]'
                        }`}
                      >
                        {loading[item.id] ? (
                          <>
                            <div className="w-4 h-4 border-2 border-gray-500 border-t-transparent rounded-full animate-spin"></div>
                            <span className="text-sm">Adding...</span>
                          </>
                        ) : (
                          <>
                            <ShoppingCart className="w-4 h-4" />
                            <span className="text-sm">Add to Cart</span>
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Recently Viewed Section */}
            <div className="mt-12 pt-8 border-t border-gray-200">
              <h2 className="text-xl font-semibold text-gray-800 mb-6">Recently Viewed</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="bg-white rounded-lg shadow-sm p-3 text-center hover:shadow-md transition-all">
                    <div className="w-full h-20 bg-gray-100 rounded-lg mb-2"></div>
                    <p className="text-xs text-gray-500">Premium Product</p>
                    <p className="text-sm font-semibold text-[#8B6B4D] mt-1">GH₵299.99</p>
                  </div>
                ))}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  )
}

export default WishlistPage
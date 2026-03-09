// src/pages/CartPage.jsx
import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import {
  ShoppingCartIcon,
  TrashIcon,
  ArrowLeftIcon,
  ArrowRightIcon,
  MinusIcon,
  PlusIcon,
  GiftIcon,
  TruckIcon,
  ShieldCheckIcon,
  TagIcon
} from '@heroicons/react/24/outline'
import { HeartIcon as HeartIconSolid } from '@heroicons/react/24/solid'
import useCartStore from '@store/cartStore'
import useLoyaltyStore from '@store/loyaltyStore'
import useAuthStore from '@store/authStore'
import toast from 'react-hot-toast'

const CartPage = () => {
  const navigate = useNavigate()
  const { items, total, updateQuantity, removeItem, clearCart } = useCartStore()
  const { points, getPointsMultiplier } = useLoyaltyStore()
  const { isAuthenticated } = useAuthStore()
  
  const [promoCode, setPromoCode] = useState('')
  const [promoApplied, setPromoApplied] = useState(false)
  const [promoDiscount, setPromoDiscount] = useState(0)
  const [savedItems, setSavedItems] = useState([])
  const [loading, setLoading] = useState(false)
  const [estimatedShipping, setEstimatedShipping] = useState(0)
  const [estimatedTax, setEstimatedTax] = useState(0)

  // Calculate totals
  const subtotal = total
  const shipping = subtotal > 100 ? 0 : 10
  const tax = subtotal * 0.1 // 10% tax rate
  const discount = promoApplied ? subtotal * promoDiscount : 0
  const finalTotal = subtotal + shipping + tax - discount
  
  // Points to be earned
  const pointsEarned = Math.floor(subtotal * getPointsMultiplier())

  useEffect(() => {
    // Load saved for later items from localStorage
    const saved = localStorage.getItem('savedItems')
    if (saved) {
      setSavedItems(JSON.parse(saved))
    }
  }, [])

  const handleUpdateQuantity = (itemId, newQuantity) => {
    if (newQuantity < 1) return
    if (newQuantity > 99) {
      toast.error('Maximum quantity is 99')
      return
    }
    updateQuantity(itemId, newQuantity)
  }

  const handleRemoveItem = (itemId) => {
    removeItem(itemId)
    toast.success('Item removed from cart')
  }

  const handleSaveForLater = (item) => {
    // Remove from cart
    removeItem(item.id)
    
    // Add to saved items
    const updatedSaved = [...savedItems, item]
    setSavedItems(updatedSaved)
    localStorage.setItem('savedItems', JSON.stringify(updatedSaved))
    
    toast.success('Item saved for later')
  }

  const handleMoveToCart = (item) => {
    // Remove from saved
    const updatedSaved = savedItems.filter(i => i.id !== item.id)
    setSavedItems(updatedSaved)
    localStorage.setItem('savedItems', JSON.stringify(updatedSaved))
    
    // Add to cart
    updateQuantity(item.id, item.quantity)
    
    toast.success('Item moved to cart')
  }

  const handleRemoveSaved = (itemId) => {
    const updatedSaved = savedItems.filter(i => i.id !== itemId)
    setSavedItems(updatedSaved)
    localStorage.setItem('savedItems', JSON.stringify(updatedSaved))
    toast.success('Item removed from saved')
  }

  const handleApplyPromo = () => {
    setLoading(true)
    
    // Simulate API call
    setTimeout(() => {
      if (promoCode.toUpperCase() === 'SAVE20') {
        setPromoApplied(true)
        setPromoDiscount(0.2) // 20% off
        toast.success('Promo code applied! 20% discount')
      } else if (promoCode.toUpperCase() === 'WELCOME10') {
        setPromoApplied(true)
        setPromoDiscount(0.1) // 10% off
        toast.success('Promo code applied! 10% discount')
      } else {
        toast.error('Invalid promo code')
      }
      setLoading(false)
    }, 1000)
  }

  const handleRemovePromo = () => {
    setPromoApplied(false)
    setPromoDiscount(0)
    setPromoCode('')
    toast.success('Promo code removed')
  }

  const handleCheckout = () => {
    if (!isAuthenticated) {
      toast.error('Please login to checkout')
      navigate('/register', { state: { from: '/cart' } })
    } else {
      navigate('/checkout')
    }
  }

  if (items.length === 0 && savedItems.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-lg mx-auto text-center"
          >
            <div className="bg-white rounded-full w-24 h-24 mx-auto mb-6 flex items-center justify-center">
              <ShoppingCartIcon className="h-12 w-12 text-gray-400" />
            </div>
            
            <h1 className="text-2xl font-bold text-gray-800 mb-3">
              Your cart is empty
            </h1>
            
            <p className="text-gray-600 mb-8">
              Looks like you haven't added anything to your cart yet.
              Browse our products and find the perfect paint for your project.
            </p>
            
            <div className="space-y-4">
              <Link
                to="/products"
                className="inline-block bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors w-full"
              >
                Start Shopping
              </Link>
              
              <div className="grid grid-cols-2 gap-4">
                <Link
                  to="/products/category/interior"
                  className="text-sm text-gray-600 hover:text-primary-600"
                >
                  Interior Paints
                </Link>
                <Link
                  to="/products/category/exterior"
                  className="text-sm text-gray-600 hover:text-primary-600"
                >
                  Exterior Paints
                </Link>
                <Link
                  to="/products/category/specialty"
                  className="text-sm text-gray-600 hover:text-primary-600"
                >
                  Specialty Finishes
                </Link>
                <Link
                  to="/products/category/tools"
                  className="text-sm text-gray-600 hover:text-primary-600"
                >
                  Tools & Supplies
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-2xl lg:text-3xl font-bold text-gray-800">
            Shopping Cart ({items.length} {items.length === 1 ? 'item' : 'items'})
          </h1>
          
          <Link
            to="/products"
            className="text-primary-600 hover:text-primary-700 font-semibold flex items-center"
          >
            <ArrowLeftIcon className="h-4 w-4 mr-1" />
            Continue Shopping
          </Link>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            {/* Cart Items List */}
            {items.length > 0 && (
              <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-6">
                <div className="p-4 bg-gray-50 border-b hidden lg:block">
                  <div className="grid grid-cols-12 gap-4 text-sm font-medium text-gray-600">
                    <div className="col-span-6">Product</div>
                    <div className="col-span-2 text-center">Price</div>
                    <div className="col-span-2 text-center">Quantity</div>
                    <div className="col-span-2 text-center">Total</div>
                  </div>
                </div>

                <AnimatePresence>
                  {items.map((item, index) => (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, x: -100 }}
                      transition={{ delay: index * 0.05 }}
                      className="p-4 border-b last:border-b-0 hover:bg-gray-50 transition-colors"
                    >
                      <div className="lg:grid lg:grid-cols-12 lg:gap-4 items-center">
                        {/* Product Info */}
                        <div className="lg:col-span-6 flex gap-4 mb-4 lg:mb-0">
                          <img
                            src={item.image || "/api/placeholder/100/100"}
                            alt={item.name}
                            className="w-20 h-20 object-cover rounded-lg"
                          />
                          
                          <div>
                            <Link
                              to={`/products/${item.id}`}
                              className="font-semibold text-gray-800 hover:text-primary-600"
                            >
                              {item.name}
                            </Link>
                            
                            <p className="text-sm text-gray-500 mt-1">
                              {item.brand}
                            </p>
                            
                            {item.finish && (
                              <p className="text-xs text-gray-400">
                                Finish: {item.finish}
                              </p>
                            )}
                            
                            {item.size && (
                              <p className="text-xs text-gray-400">
                                Size: {item.size}
                              </p>
                            )}
                            
                            {/* Mobile Price */}
                            <div className="lg:hidden mt-2">
                              <span className="text-primary-600 font-bold">
                                ${(item.price * item.quantity).toFixed(2)}
                              </span>
                            </div>
                          </div>
                        </div>

                        {/* Price - Desktop */}
                        <div className="hidden lg:block lg:col-span-2 text-center">
                          <span className="font-medium">${item.price.toFixed(2)}</span>
                        </div>

                        {/* Quantity */}
                        <div className="lg:col-span-2 flex items-center justify-between lg:justify-center mb-4 lg:mb-0">
                          <span className="lg:hidden text-sm text-gray-600">Quantity:</span>
                          
                          <div className="flex items-center border rounded-lg">
                            <button
                              onClick={() => handleUpdateQuantity(item.id, item.quantity - 1)}
                              className="px-2 py-1 hover:bg-gray-100 transition-colors"
                              disabled={item.quantity <= 1}
                            >
                              <MinusIcon className="h-4 w-4" />
                            </button>
                            
                            <span className="w-12 text-center">{item.quantity}</span>
                            
                            <button
                              onClick={() => handleUpdateQuantity(item.id, item.quantity + 1)}
                              className="px-2 py-1 hover:bg-gray-100 transition-colors"
                            >
                              <PlusIcon className="h-4 w-4" />
                            </button>
                          </div>
                        </div>

                        {/* Total - Desktop */}
                        <div className="hidden lg:block lg:col-span-1 text-center">
                          <span className="font-bold text-primary-600">
                            ${(item.price * item.quantity).toFixed(2)}
                          </span>
                        </div>

                        {/* Actions */}
                        <div className="lg:col-span-1 flex items-center justify-end gap-2">
                          <button
                            onClick={() => handleSaveForLater(item)}
                            className="p-2 text-gray-400 hover:text-primary-600 transition-colors"
                            title="Save for later"
                          >
                            <GiftIcon className="h-5 w-5" />
                          </button>
                          
                          <button
                            onClick={() => handleRemoveItem(item.id)}
                            className="p-2 text-gray-400 hover:text-red-500 transition-colors"
                            title="Remove item"
                          >
                            <TrashIcon className="h-5 w-5" />
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>

                {/* Cart Actions */}
                <div className="p-4 bg-gray-50 flex justify-between items-center">
                  <button
                    onClick={clearCart}
                    className="text-sm text-gray-500 hover:text-red-500 transition-colors"
                  >
                    Clear Cart
                  </button>
                  
                  <div className="flex items-center gap-4">
                    <span className="text-sm text-gray-600">
                      Subtotal: <span className="font-bold">${subtotal.toFixed(2)}</span>
                    </span>
                  </div>
                </div>
              </div>
            )}

            {/* Saved for Later */}
            {savedItems.length > 0 && (
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="p-4 bg-gray-50 border-b">
                  <h2 className="font-semibold flex items-center">
                    <GiftIcon className="h-5 w-5 mr-2 text-gray-500" />
                    Saved for Later ({savedItems.length})
                  </h2>
                </div>

                <div className="divide-y">
                  {savedItems.map((item) => (
                    <div key={item.id} className="p-4 flex items-center justify-between hover:bg-gray-50">
                      <div className="flex items-center gap-4">
                        <img
                          src={item.image || "/api/placeholder/60/60"}
                          alt={item.name}
                          className="w-12 h-12 object-cover rounded"
                        />
                        
                        <div>
                          <h3 className="font-medium text-sm">{item.name}</h3>
                          <p className="text-xs text-gray-500">{item.brand}</p>
                          <p className="text-sm font-bold text-primary-600 mt-1">
                            ${item.price.toFixed(2)}
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex gap-2">
                        <button
                          onClick={() => handleMoveToCart(item)}
                          className="text-xs bg-primary-600 text-white px-3 py-1 rounded hover:bg-primary-700"
                        >
                          Move to Cart
                        </button>
                        
                        <button
                          onClick={() => handleRemoveSaved(item.id)}
                          className="text-xs text-gray-500 hover:text-red-500"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-lg p-6 sticky top-24">
              <h2 className="text-xl font-bold mb-6">Order Summary</h2>
              
              {/* Price Breakdown */}
              <div className="space-y-3 mb-4">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Shipping</span>
                  {shipping === 0 ? (
                    <span className="text-green-600">Free</span>
                  ) : (
                    <span>${shipping.toFixed(2)}</span>
                  )}
                </div>
                
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Estimated Tax</span>
                  <span>${tax.toFixed(2)}</span>
                </div>
                
                {promoApplied && (
                  <div className="flex justify-between text-sm text-green-600">
                    <span>Discount ({(promoDiscount * 100)}%)</span>
                    <span>-${discount.toFixed(2)}</span>
                  </div>
                )}
                
                <div className="border-t pt-3 flex justify-between font-bold">
                  <span>Total</span>
                  <span className="text-primary-600 text-xl">
                    ${finalTotal.toFixed(2)}
                  </span>
                </div>
              </div>

              {/* Promo Code */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Promo Code
                </label>
                
                {promoApplied ? (
                  <div className="flex items-center justify-between bg-green-50 border border-green-200 rounded-lg p-2">
                    <span className="text-sm text-green-700 font-medium">
                      {promoCode.toUpperCase()} applied
                    </span>
                    <button
                      onClick={handleRemovePromo}
                      className="text-xs text-green-700 hover:text-green-800"
                    >
                      Remove
                    </button>
                  </div>
                ) : (
                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={promoCode}
                      onChange={(e) => setPromoCode(e.target.value)}
                      placeholder="Enter code"
                      className="flex-1 px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary-500"
                    />
                    <button
                      onClick={handleApplyPromo}
                      disabled={!promoCode || loading}
                      className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {loading ? '...' : 'Apply'}
                    </button>
                  </div>
                )}
                
                <p className="text-xs text-gray-500 mt-2">
                  Try "SAVE20" for 20% off or "WELCOME10" for 10% off
                </p>
              </div>

              {/* Loyalty Points */}
              <div className="bg-secondary-50 rounded-lg p-4 mb-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium">Points this purchase:</span>
                  <span className="text-secondary-600 font-bold">{pointsEarned} pts</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Your current points:</span>
                  <span className="text-secondary-600 font-bold">{points} pts</span>
                </div>
                
                <div className="mt-2 text-xs text-gray-500">
                  <span className="font-medium">Multiplier:</span> {getPointsMultiplier()}x
                </div>
              </div>

              {/* Checkout Button */}
              <button
                onClick={handleCheckout}
                className="w-full bg-primary-600 text-white py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors mb-4 flex items-center justify-center gap-2"
              >
                Proceed to Checkout
                <ArrowRightIcon className="h-5 w-5" />
              </button>

              {/* Payment Methods */}
              <div className="text-center">
                <p className="text-xs text-gray-500 mb-2">We accept:</p>
                <div className="flex justify-center gap-3 text-xl">
                  <span className="text-blue-600">Visa</span>
                  <span className="text-red-600">Mastercard</span>
                  <span className="text-green-600">Mobile</span>
                  <span className="text-orange-500">Crypto</span>
                </div>
              </div>

              {/* Shipping Info */}
              <div className="mt-6 pt-6 border-t">
                <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
                  <TruckIcon className="h-4 w-4" />
                  {subtotal > 100 ? (
                    <span className="text-green-600">You qualify for free shipping!</span>
                  ) : (
                    <span>Add ${(100 - subtotal).toFixed(2)} more for free shipping</span>
                  )}
                </div>
                
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <ShieldCheckIcon className="h-4 w-4" />
                  <span>30-day return policy</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Recommended Products */}
        <div className="mt-12">
          <h2 className="text-xl font-bold text-gray-800 mb-6">You Might Also Like</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[1, 2, 3, 4].map((i) => (
              <motion.div
                key={i}
                whileHover={{ y: -5 }}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <img
                  src="/api/placeholder/200/200"
                  alt="Recommended product"
                  className="w-full h-40 object-cover"
                />
                
                <div className="p-3">
                  <p className="text-xs text-gray-500 mb-1">ColorMaster</p>
                  <h3 className="font-semibold text-sm mb-2">Premium Paint</h3>
                  <div className="flex justify-between items-center">
                    <span className="text-primary-600 font-bold">$45.99</span>
                    <button className="text-xs bg-primary-600 text-white px-2 py-1 rounded hover:bg-primary-700">
                      Add
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartPage
// src/pages/ProductDetailPage.jsx
import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { 
  ShoppingCartIcon, 
  HeartIcon, 
  StarIcon,
  TruckIcon,
  ShieldCheckIcon,
  ArrowPathIcon,
  InformationCircleIcon,
  MinusIcon,
  PlusIcon
} from '@heroicons/react/24/outline'
import { HeartIcon as HeartIconSolid } from '@heroicons/react/24/solid'
import useCartStore from '@store/cartStore'
import useLoyaltyStore from '@store/loyaltyStore'
import toast from 'react-hot-toast'
import ProductCard from '@components/ProductCard'

const ProductDetailPage = () => {
  const { id } = useParams()
  const [product, setProduct] = useState(null)
  const [loading, setLoading] = useState(true)
  const [quantity, setQuantity] = useState(1)
  const [selectedImage, setSelectedImage] = useState(0)
  const [isWishlisted, setIsWishlisted] = useState(false)
  const [selectedFinish, setSelectedFinish] = useState('')
  const [selectedSize, setSelectedSize] = useState('')
  
  const addToCart = useCartStore((state) => state.addItem)
  const { points, getPointsMultiplier } = useLoyaltyStore()

  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      setProduct({
        id: parseInt(id),
        name: "Premium Interior Paint - Matte Finish",
        brand: "ColorMaster",
        price: 45.99,
        oldPrice: 54.99,
        description: "Our premium interior paint delivers exceptional coverage and a beautiful matte finish. Formulated with advanced color technology for lasting beauty and easy application.",
        longDescription: "Transform your living space with our premium interior paint. This professional-grade formula provides one-coat coverage and creates a durable, washable surface that stands up to daily life. The advanced low-VOC formulation ensures a safe environment for your family while delivering the rich, uniform finish you expect from a premium paint.",
        images: [
          "/api/placeholder/600/600",
          "/api/placeholder/600/600",
          "/api/placeholder/600/600",
          "/api/placeholder/600/600"
        ],
        rating: 4.5,
        reviews: 128,
        specifications: {
          "Coverage": "400 sq ft per gallon",
          "Drying Time": "1 hour to touch, 4 hours to recoat",
          "Finish": "Matte",
          "Base": "Water-based",
          "VOC Level": "< 50 g/L",
          "Clean-up": "Soap and water"
        },
        features: [
          "One-coat coverage on most surfaces",
          "Advanced stain-resistant technology",
          "Low odor, low VOC formula",
          "Washable and durable finish",
          "Available in thousands of colors"
        ],
        finishes: ["Matte", "Eggshell", "Satin", "Semi-Gloss"],
        sizes: ["1 Quart", "1 Gallon", "5 Gallons"],
        colors: [
          { name: "White", code: "#FFFFFF" },
          { name: "Off White", code: "#F5F5F5" },
          { name: "Beige", code: "#F5F5DC" },
          { name: "Gray", code: "#808080" }
        ],
        relatedProducts: [
          {
            id: 2,
            name: "Premium Primer",
            brand: "ColorMaster",
            price: 32.99,
            image: "/api/placeholder/300/300",
            rating: 4.3
          },
          {
            id: 3,
            name: "Paint Roller Set",
            brand: "ProTools",
            price: 24.99,
            image: "/api/placeholder/300/300",
            rating: 4.7
          },
          {
            id: 4,
            name: "Painter's Tape",
            brand: "ProTools",
            price: 8.99,
            image: "/api/placeholder/300/300",
            rating: 4.5
          }
        ]
      })
      setSelectedFinish("Matte")
      setSelectedSize("1 Gallon")
      setLoading(false)
    }, 1000)
  }, [id])

  const handleAddToCart = () => {
    addToCart({ ...product, quantity, finish: selectedFinish, size: selectedSize })
    toast.success('Added to cart!')
  }

  const handleWishlist = () => {
    setIsWishlisted(!isWishlisted)
    toast.success(isWishlisted ? 'Removed from wishlist' : 'Added to wishlist')
  }

  const handleQuantityChange = (delta) => {
    setQuantity(Math.max(1, quantity + delta))
  }

  const pointsEarned = product ? Math.floor(product.price * quantity * getPointsMultiplier()) : 0

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <div className="animate-pulse">
            <div className="h-8 bg-gray-200 rounded w-1/4 mb-8"></div>
            <div className="grid lg:grid-cols-2 gap-12">
              <div className="bg-gray-200 h-96 rounded-lg"></div>
              <div className="space-y-4">
                <div className="h-8 bg-gray-200 rounded w-3/4"></div>
                <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                <div className="h-4 bg-gray-200 rounded w-full"></div>
                <div className="h-4 bg-gray-200 rounded w-full"></div>
                <div className="h-4 bg-gray-200 rounded w-2/3"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        {/* Breadcrumb */}
        <nav className="text-sm mb-8">
          <ol className="flex items-center space-x-2">
            <li><Link to="/" className="text-gray-500 hover:text-primary-600">Home</Link></li>
            <li><span className="text-gray-300">/</span></li>
            <li><Link to="/products" className="text-gray-500 hover:text-primary-600">Products</Link></li>
            <li><span className="text-gray-300">/</span></li>
            <li className="text-gray-900">{product.name}</li>
          </ol>
        </nav>

        {/* Product Details */}
        <div className="bg-white rounded-xl shadow-lg p-6 lg:p-8 mb-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Image Gallery */}
            <div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="mb-4"
              >
                <img
                  src={product.images[selectedImage]}
                  alt={product.name}
                  className="w-full h-96 object-cover rounded-lg"
                />
              </motion.div>
              
              <div className="grid grid-cols-4 gap-2">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`border-2 rounded-lg overflow-hidden ${
                      selectedImage === index ? 'border-primary-600' : 'border-transparent'
                    }`}
                  >
                    <img src={image} alt={`${product.name} ${index + 1}`} className="w-full h-20 object-cover" />
                  </button>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div>
              <div className="mb-6">
                <p className="text-sm text-gray-500 mb-1">{product.brand}</p>
                <h1 className="text-3xl font-bold text-gray-800 mb-2">{product.name}</h1>
                
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex items-center">
                    <div className="flex text-yellow-400 mr-2">
                      {[...Array(5)].map((_, i) => (
                        <StarIcon
                          key={i}
                          className={`h-5 w-5 ${
                            i < Math.floor(product.rating) ? 'fill-current' : 'text-gray-300'
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-gray-600">
                      {product.rating} ({product.reviews} reviews)
                    </span>
                  </div>
                  
                  <button
                    onClick={handleWishlist}
                    className="flex items-center gap-1 text-gray-500 hover:text-red-500"
                  >
                    {isWishlisted ? (
                      <HeartIconSolid className="h-5 w-5 text-red-500" />
                    ) : (
                      <HeartIcon className="h-5 w-5" />
                    )}
                    <span className="text-sm">Wishlist</span>
                  </button>
                </div>

                <div className="flex items-baseline gap-3 mb-6">
                  <span className="text-3xl font-bold text-primary-600">
                    ${product.price}
                  </span>
                  {product.oldPrice && (
                    <>
                      <span className="text-lg text-gray-400 line-through">
                        ${product.oldPrice}
                      </span>
                      <span className="bg-red-500 text-white text-sm px-2 py-1 rounded">
                        Save ${(product.oldPrice - product.price).toFixed(2)}
                      </span>
                    </>
                  )}
                </div>

                <div className="bg-secondary-50 rounded-lg p-4 mb-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-600">Earn with this purchase:</p>
                      <p className="text-2xl font-bold text-secondary-600">{pointsEarned} Points</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-gray-600">Current multiplier:</p>
                      <p className="text-lg font-semibold text-secondary-600">{getPointsMultiplier()}x</p>
                    </div>
                  </div>
                </div>

                <p className="text-gray-600 mb-6">{product.description}</p>
              </div>

              {/* Options */}
              <div className="space-y-4 mb-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Finish</label>
                  <div className="flex flex-wrap gap-2">
                    {product.finishes.map((finish) => (
                      <button
                        key={finish}
                        onClick={() => setSelectedFinish(finish)}
                        className={`px-4 py-2 border rounded-lg text-sm ${
                          selectedFinish === finish
                            ? 'border-primary-600 bg-primary-50 text-primary-600'
                            : 'border-gray-300 hover:border-gray-400'
                        }`}
                      >
                        {finish}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Size</label>
                  <div className="flex flex-wrap gap-2">
                    {product.sizes.map((size) => (
                      <button
                        key={size}
                        onClick={() => setSelectedSize(size)}
                        className={`px-4 py-2 border rounded-lg text-sm ${
                          selectedSize === size
                            ? 'border-primary-600 bg-primary-50 text-primary-600'
                            : 'border-gray-300 hover:border-gray-400'
                        }`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Quantity and Add to Cart */}
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center border rounded-lg">
                  <button
                    onClick={() => handleQuantityChange(-1)}
                    className="px-3 py-2 hover:bg-gray-100"
                  >
                    <MinusIcon className="h-5 w-5" />
                  </button>
                  <span className="px-4 py-2 border-x">{quantity}</span>
                  <button
                    onClick={() => handleQuantityChange(1)}
                    className="px-3 py-2 hover:bg-gray-100"
                  >
                    <PlusIcon className="h-5 w-5" />
                  </button>
                </div>
                
                <button
                  onClick={handleAddToCart}
                  className="flex-1 bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors flex items-center justify-center gap-2"
                >
                  <ShoppingCartIcon className="h-5 w-5" />
                  Add to Cart
                </button>
              </div>

              {/* Shipping Info */}
              <div className="border-t pt-6">
                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center">
                    <TruckIcon className="h-6 w-6 mx-auto text-gray-400 mb-2" />
                    <p className="text-sm font-medium">Free Shipping</p>
                    <p className="text-xs text-gray-500">On orders $100+</p>
                  </div>
                  <div className="text-center">
                    <ShieldCheckIcon className="h-6 w-6 mx-auto text-gray-400 mb-2" />
                    <p className="text-sm font-medium">Quality Guarantee</p>
                    <p className="text-xs text-gray-500">30-day returns</p>
                  </div>
                  <div className="text-center">
                    <ArrowPathIcon className="h-6 w-6 mx-auto text-gray-400 mb-2" />
                    <p className="text-sm font-medium">Easy Returns</p>
                    <p className="text-xs text-gray-500">Satisfaction guaranteed</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Product Details Tabs */}
        <div className="bg-white rounded-xl shadow-lg p-6 lg:p-8 mb-8">
          <div className="border-b mb-6">
            <div className="flex gap-6">
              <button className="pb-4 border-b-2 border-primary-600 text-primary-600 font-medium">
                Description
              </button>
              <button className="pb-4 text-gray-500 hover:text-gray-700">
                Specifications
              </button>
              <button className="pb-4 text-gray-500 hover:text-gray-700">
                Reviews ({product.reviews})
              </button>
            </div>
          </div>

          <div className="prose max-w-none">
            <p className="text-gray-600 mb-4">{product.longDescription}</p>
            
            <h3 className="text-lg font-semibold mb-2">Key Features:</h3>
            <ul className="list-disc pl-5 mb-4">
              {product.features.map((feature, index) => (
                <li key={index} className="text-gray-600">{feature}</li>
              ))}
            </ul>

            <h3 className="text-lg font-semibold mb-2">Specifications:</h3>
            <table className="min-w-full">
              <tbody>
                {Object.entries(product.specifications).map(([key, value]) => (
                  <tr key={key} className="border-b">
                    <td className="py-2 font-medium text-gray-700">{key}</td>
                    <td className="py-2 text-gray-600">{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Related Products */}
        {product.relatedProducts && (
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-6">You May Also Like</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {product.relatedProducts.map((relatedProduct) => (
                <ProductCard key={relatedProduct.id} product={relatedProduct} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default ProductDetailPage
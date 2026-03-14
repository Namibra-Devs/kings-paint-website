// src/pages/CategoryPage.jsx
import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import ProductCard from '@components/ProductCard'

const CategoryPage = () => {
  const { category } = useParams()
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)

  // Category mapping
  const categoryInfo = {
    interior: {
      name: 'Interior Paints',
      description: 'Transform your living spaces with our premium interior paints.',
      count: 45
    },
    exterior: {
      name: 'Exterior Paints',
      description: 'Weather-resistant paints designed to protect your home\'s exterior.',
      count: 32
    },
    specialty: {
      name: 'Specialty Finishes',
      description: 'Unique textures and effects for extraordinary spaces.',
      count: 28
    },
    primers: {
      name: 'Primers',
      description: 'Professional-grade primers for the perfect base.',
      count: 15
    },
    tools: {
      name: 'Tools & Supplies',
      description: 'Everything you need for your painting project.',
      count: 38
    }
  }

  useEffect(() => {
    if (!category) return

    const normalizedCategory = category.toLowerCase()
    const currentCategory = categoryInfo[normalizedCategory]
    
    if (!currentCategory) return

    // Load products for this category
    setLoading(true)
    setTimeout(() => {
      const mockProducts = Array.from({ length: 12 }, (_, i) => ({
        id: i + 1,
        name: `${currentCategory.name} Product ${i + 1}`,
        brand: ['Benjamin Moore®', 'SHERWIN WILLIAMS', 'Dulux'][Math.floor(Math.random() * 3)],
        price: Math.floor(Math.random() * 500) + 50,
        image: `/images/products/${category}-${i + 1}.webp`,
        rating: 4.5,
        reviews: 45,
        category: currentCategory.name
      }))
      setProducts(mockProducts)
      setLoading(false)
    }, 1000)
  }, [category])

  const currentCategory = categoryInfo[category?.toLowerCase()]

  if (!currentCategory) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Category Not Found</h2>
          <Link to="/products" className="text-[#C4A962] hover:underline">
            View All Products
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-[#0a120a] to-[#1a2a1a] text-white py-12">
        <div className="container mx-auto px-4">
          <Link to="/products" className="inline-flex items-center text-[#C4A962] hover:text-white mb-4">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Products
          </Link>
          <h1 className="text-4xl font-bold mb-2">{currentCategory.name}</h1>
          <p className="text-gray-300 max-w-2xl">{currentCategory.description}</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {loading ? (
          <div>Loading...</div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default CategoryPage
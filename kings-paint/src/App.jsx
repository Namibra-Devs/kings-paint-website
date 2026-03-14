// src/App.jsx - UPDATED VERSION
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import MainLayout from '@layouts/MainLayout'
import HomePage from '@pages/HomePage'
import AboutPage from '@pages/AboutPage'
import ProductsPage from '@pages/ProductsPage'
import ProductDetailPage from '@pages/ProductDetailPage'
import CategoryPage from '@pages/CategoryPage' // Import the category page
import RegistrationPage from '@pages/RegistrationPage'
import CheckoutPage from '@pages/CheckoutPage'
import CartPage from '@pages/CartPage'
import LoyaltyPage from '@pages/LoyaltyPage'
import OrderConfirmationPage from '@pages/OrderConfirmationPage'
import NotFoundPage from '@pages/NotFoundPage'

function App() {
  return (
    <Router>
      <Toaster 
        position="top-right"
        toastOptions={{
          duration: 4000,
          style: {
            background: '#1a2a1a',
            color: '#C4A962',
            border: '1px solid #C4A962',
          },
          success: {
            duration: 3000,
            iconTheme: {
              primary: '#C4A962',
              secondary: '#1a2a1a',
            },
          },
        }}
      />
      <Routes>
        <Route path="/" element={<MainLayout />}>
          {/* Main routes */}
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          
          {/* Product routes */}
          <Route path="products" element={<ProductsPage />} />
          <Route path="products/:id" element={<ProductDetailPage />} />
          
          {/* ✅ FIXED: Single dynamic route for all categories */}
          <Route path="products/category/:category" element={<CategoryPage />} />
          
          {/* Registration */}
          <Route path="register" element={<RegistrationPage />} />
          
          {/* Cart & Checkout */}
          <Route path="cart" element={<CartPage />} />
          <Route path="checkout" element={<CheckoutPage />} />
          <Route path="order-confirmation" element={<OrderConfirmationPage />} />
          
          {/* Loyalty Program */}
          <Route path="loyalty" element={<LoyaltyPage />} />
          
          {/* 404 for any unmatched routes */}
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
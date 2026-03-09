// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import MainLayout from '@layouts/MainLayout'
import HomePage from '@pages/HomePage'
import AboutPage from '@pages/AboutPage'
import ProductsPage from '@pages/ProductsPage'
import ProductDetailPage from '@pages/ProductDetailPage'
import RegistrationPage from '@pages/RegistrationPage'
import CheckoutPage from '@pages/CheckoutPage'
import CartPage from '@pages/CartPage'
import LoyaltyPage from '@pages/LoyaltyPage'
import OrderConfirmationPage from '@pages/OrderConfirmationPage'
import NotFoundPage from '@pages/NotFoundPage'

// Using query parameters for different registration types and filters
// This avoids creating multiple separate pages

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
          
          {/* Product routes - using query params for filtering */}
          <Route path="products" element={<ProductsPage />} />
          <Route path="products/:id" element={<ProductDetailPage />} />
          
          {/* Registration - handles both regular and dealer via query param */}
          <Route path="register" element={<RegistrationPage />} />
          
          {/* Cart & Checkout */}
          <Route path="cart" element={<CartPage />} />
          <Route path="checkout" element={<CheckoutPage />} />
          <Route path="order-confirmation" element={<OrderConfirmationPage />} />
          
          {/* Loyalty Program */}
          <Route path="loyalty" element={<LoyaltyPage />} />
          
          {/* Custom Colors - using the same registration page with service param */}
          {/* This route is handled by the registration page with ?service=custom */}
          
          {/* 404 for any unmatched routes */}
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
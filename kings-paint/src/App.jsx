// src/App.jsx
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import { Toaster } from 'react-hot-toast'
import MainLayout from '@layouts/MainLayout'
import HomePage from '@pages/HomePage'
import DiscoverPage from '@pages/DiscoverPage'
import AboutPage from '@pages/AboutPage'
import ContactPage from '@pages/ContactPage'
import ProductsPage from '@pages/ProductsPage'
import ProductDetailPage from '@pages/ProductDetailPage'
import CategoryPage from '@pages/CategoryPage'
import RegistrationPage from '@pages/RegistrationPage'
import CheckoutPage from '@pages/CheckoutPage'
import CartPage from '@pages/CartPage'
import LoyaltyPage from '@pages/LoyaltyPage'
import OrderConfirmationPage from '@pages/OrderConfirmationPage'
import NotFoundPage from '@pages/NotFoundPage'

// Scrolls to top on every route change
const ScrollToTop = () => {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [pathname])
  return null
}

function App() {
  return (
    <Router>
      <ScrollToTop />
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
          <Route index element={<HomePage />} />
          <Route path='discover' element={<DiscoverPage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path='contact' element={<ContactPage />} />
          

          {/* ✅ Static segment first — must come before :id or it gets swallowed */}
          <Route path="products/category/:category" element={<CategoryPage />} />
          <Route path="products/:id" element={<ProductDetailPage />} />
          <Route path="products" element={<ProductsPage />} />

          <Route path="register" element={<RegistrationPage />} />
          <Route path="cart" element={<CartPage />} />
          <Route path="checkout" element={<CheckoutPage />} />
          <Route path="order-confirmation" element={<OrderConfirmationPage />} />
          <Route path="loyalty" element={<LoyaltyPage />} />

          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
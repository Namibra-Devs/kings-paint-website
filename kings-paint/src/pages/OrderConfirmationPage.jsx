// src/pages/OrderConfirmationPage.jsx
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { CheckCircleIcon, PrinterIcon, ShareIcon } from '@heroicons/react/24/outline'

const OrderConfirmationPage = () => {
  const [orderNumber, setOrderNumber] = useState('')
  
  useEffect(() => {
    // Generate random order number
    setOrderNumber('ORD-' + Math.random().toString(36).substr(2, 9).toUpperCase())
  }, [])

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-2xl mx-auto text-center"
        >
          <CheckCircleIcon className="h-20 w-20 text-green-500 mx-auto mb-6" />
          
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
            Thank You for Your Order!
          </h1>
          
          <p className="text-lg text-gray-600 mb-2">
            Your order has been confirmed and will be shipped soon.
          </p>
          
          <p className="text-gray-500 mb-8">
            Order Number: <span className="font-mono font-bold">{orderNumber}</span>
          </p>
          
          <div className="bg-white rounded-xl shadow-lg p-6 mb-8 text-left">
            <h2 className="font-semibold mb-4">Order Summary</h2>
            
            <div className="space-y-2 mb-4">
              <div className="flex justify-between">
                <span className="text-gray-600">Subtotal</span>
                <span>$124.99</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Shipping</span>
                <span className="text-green-600">Free</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Tax</span>
                <span>$12.50</span>
              </div>
              <div className="border-t pt-2 flex justify-between font-bold">
                <span>Total</span>
                <span className="text-primary-600">$137.49</span>
              </div>
            </div>
            
            <div className="border-t pt-4">
              <p className="text-sm text-gray-600 mb-2">
                <span className="font-semibold">Points Earned:</span> 1,374 points
              </p>
              <p className="text-sm text-gray-600">
                <span className="font-semibold">Estimated Delivery:</span> Mar 15-20, 2024
              </p>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-4 justify-center mb-8">
            <button className="flex items-center gap-2 px-4 py-2 border rounded-lg hover:bg-gray-50">
              <PrinterIcon className="h-5 w-5" />
              Print Receipt
            </button>
            <button className="flex items-center gap-2 px-4 py-2 border rounded-lg hover:bg-gray-50">
              <ShareIcon className="h-5 w-5" />
              Share
            </button>
          </div>
          
          <div className="space-x-4">
            <Link
              to="/products"
              className="inline-block bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700"
            >
              Continue Shopping
            </Link>
            <Link
              to="/account/orders"
              className="inline-block border border-gray-300 px-6 py-3 rounded-lg font-semibold hover:bg-gray-50"
            >
              Track Order
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default OrderConfirmationPage
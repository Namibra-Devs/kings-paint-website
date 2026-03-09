// src/pages/CheckoutPage.jsx

import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { motion } from "framer-motion"
import {
  ShoppingBag,
  CreditCard,
  Truck,
  CheckCircle,
  Lock,
  MapPin,
  Phone,
  Mail,
  Bitcoin,
  Smartphone
} from "lucide-react"

import useCartStore from "@store/cartStore"
import useLoyaltyStore from "@store/loyaltyStore"
import toast from "react-hot-toast"

const CheckoutPage = () => {
  const navigate = useNavigate()
  const { items, total, clearCart } = useCartStore()
  const { points, redeemPoints } = useLoyaltyStore()

  const [step, setStep] = useState(1)
  const [paymentMethod, setPaymentMethod] = useState("card")
  const [usePoints, setUsePoints] = useState(false)
  const [pointsToRedeem, setPointsToRedeem] = useState(0)

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    phone: "",
    email: "",

    sameAsShipping: true,

    billingAddress: "",
    billingCity: "",
    billingState: "",
    billingZipCode: "",

    cardNumber: "",
    cardName: "",
    expiryDate: "",
    cvv: "",

    mobileProvider: "mtn",
    mobileNumber: "",

    cryptoCurrency: "btc",
    cryptoAddress: ""
  })

  const maxPointsRedeemable = Math.min(points, Math.floor(total * 100))
  const discountAmount = usePoints ? pointsToRedeem / 100 : 0
  const finalTotal = total - discountAmount
  const pointsEarned = Math.floor(finalTotal * 10)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handlePointsToggle = () => {
    if (!usePoints) {
      setPointsToRedeem(maxPointsRedeemable)
    } else {
      setPointsToRedeem(0)
    }
    setUsePoints(!usePoints)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (usePoints) {
      const redeemed = redeemPoints(pointsToRedeem, { orderId: "temp" })
      if (!redeemed) {
        toast.error("Failed to redeem points")
        return
      }
    }

    toast.success("Order placed successfully!")
    clearCart()
    navigate("/order-confirmation")
  }

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="container mx-auto px-4 text-center">
          <ShoppingBag className="h-16 w-16 mx-auto text-gray-400 mb-4" />
          <h2 className="text-2xl font-bold text-gray-800 mb-2">
            Your cart is empty
          </h2>
          <p className="text-gray-600 mb-6">
            Add some items to your cart to proceed with checkout
          </p>

          <button
            onClick={() => navigate("/products")}
            className="bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700"
          >
            Continue Shopping
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">

          {/* Header */}

          <h1 className="text-3xl font-bold text-gray-800 mb-8">
            Checkout
          </h1>

          {/* Progress */}

          <div className="flex items-center justify-between mb-8">
            {["Shipping", "Payment", "Review"].map((label, i) => (
              <div key={i} className="flex-1 text-center">

                <div
                  className={`w-8 h-8 mx-auto rounded-full flex items-center justify-center mb-2 ${
                    i + 1 <= step
                      ? "bg-primary-600 text-white"
                      : "bg-gray-200 text-gray-500"
                  }`}
                >
                  {i + 1}
                </div>

                <p
                  className={`text-sm ${
                    i + 1 <= step
                      ? "text-primary-600 font-medium"
                      : "text-gray-500"
                  }`}
                >
                  {label}
                </p>
              </div>
            ))}
          </div>

          <div className="grid lg:grid-cols-3 gap-8">

            {/* LEFT FORM */}

            <div className="lg:col-span-2">
              <form onSubmit={handleSubmit}>

                {/* SHIPPING */}

                {step === 1 && (
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="bg-white rounded-xl shadow-lg p-6"
                  >
                    <h2 className="text-xl font-semibold mb-4 flex items-center">
                      <Truck className="h-5 w-5 mr-2 text-primary-600" />
                      Shipping Information
                    </h2>

                    <div className="space-y-4">

                      {/* names */}

                      <div className="grid grid-cols-2 gap-4">

                        <input
                          type="text"
                          name="firstName"
                          placeholder="First Name"
                          value={formData.firstName}
                          onChange={handleChange}
                          required
                          className="input"
                        />

                        <input
                          type="text"
                          name="lastName"
                          placeholder="Last Name"
                          value={formData.lastName}
                          onChange={handleChange}
                          required
                          className="input"
                        />

                      </div>

                      {/* address */}

                      <div className="relative">
                        <MapPin className="icon-input" />

                        <input
                          type="text"
                          name="address"
                          placeholder="Address"
                          value={formData.address}
                          onChange={handleChange}
                          required
                          className="input pl-10"
                        />
                      </div>

                      {/* city */}

                      <div className="grid grid-cols-2 gap-4">

                        <input
                          type="text"
                          name="city"
                          placeholder="City"
                          value={formData.city}
                          onChange={handleChange}
                          required
                          className="input"
                        />

                        <input
                          type="text"
                          name="state"
                          placeholder="State"
                          value={formData.state}
                          onChange={handleChange}
                          required
                          className="input"
                        />

                      </div>

                      {/* phone */}

                      <div className="relative">
                        <Phone className="icon-input" />

                        <input
                          type="tel"
                          name="phone"
                          placeholder="Phone"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                          className="input pl-10"
                        />
                      </div>

                      {/* email */}

                      <div className="relative">
                        <Mail className="icon-input" />

                        <input
                          type="email"
                          name="email"
                          placeholder="Email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="input pl-10"
                        />
                      </div>

                    </div>

                    <div className="mt-6 flex justify-end">

                      <button
                        type="button"
                        onClick={() => setStep(2)}
                        className="btn-primary"
                      >
                        Continue to Payment
                      </button>

                    </div>

                  </motion.div>
                )}

                {/* PAYMENT */}

                {step === 2 && (
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="bg-white rounded-xl shadow-lg p-6"
                  >

                    <h2 className="text-xl font-semibold mb-4 flex items-center">
                      <CreditCard className="h-5 w-5 mr-2 text-primary-600" />
                      Payment Method
                    </h2>

                    {/* payment selection */}

                    <div className="grid grid-cols-3 gap-4 mb-6">

                      <button
                        type="button"
                        onClick={() => setPaymentMethod("card")}
                        className={`payment-card ${
                          paymentMethod === "card" && "payment-active"
                        }`}
                      >
                        <CreditCard className="mx-auto mb-2" />
                        Card Payment
                      </button>

                      <button
                        type="button"
                        onClick={() => setPaymentMethod("mobile")}
                        className={`payment-card ${
                          paymentMethod === "mobile" && "payment-active"
                        }`}
                      >
                        <Smartphone className="mx-auto mb-2" />
                        Mobile Money
                      </button>

                      <button
                        type="button"
                        onClick={() => setPaymentMethod("crypto")}
                        className={`payment-card ${
                          paymentMethod === "crypto" && "payment-active"
                        }`}
                      >
                        <Bitcoin className="mx-auto mb-2" />
                        Crypto
                      </button>

                    </div>

                    {paymentMethod === "crypto" && (
                      <div className="bg-yellow-50 border p-4 rounded-lg text-sm">
                        <Lock className="inline mr-2" />
                        Cryptocurrency payments require manual confirmation.
                      </div>
                    )}

                    <div className="mt-6 flex justify-between">

                      <button
                        type="button"
                        onClick={() => setStep(1)}
                        className="btn-outline"
                      >
                        Back
                      </button>

                      <button
                        type="button"
                        onClick={() => setStep(3)}
                        className="btn-primary"
                      >
                        Review Order
                      </button>

                    </div>

                  </motion.div>
                )}

                {/* REVIEW */}

                {step === 3 && (
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="bg-white rounded-xl shadow-lg p-6"
                  >

                    <h2 className="text-xl font-semibold mb-4 flex items-center">
                      <CheckCircle className="h-5 w-5 mr-2 text-primary-600" />
                      Review Order
                    </h2>

                    <div className="space-y-4">

                      {items.map((item) => (
                        <div
                          key={item.id}
                          className="flex justify-between text-sm"
                        >
                          <span>
                            {item.name} x {item.quantity}
                          </span>

                          <span>
                            ${(item.price * item.quantity).toFixed(2)}
                          </span>
                        </div>
                      ))}

                    </div>

                    <div className="mt-6 flex justify-between">

                      <button
                        type="button"
                        onClick={() => setStep(2)}
                        className="btn-outline"
                      >
                        Back
                      </button>

                      <button
                        type="submit"
                        className="btn-primary"
                      >
                        Place Order
                      </button>

                    </div>

                  </motion.div>
                )}
              </form>
            </div>

            {/* ORDER SUMMARY */}

            <div className="bg-white rounded-xl shadow-lg p-6 sticky top-24 h-fit">

              <h2 className="text-xl font-semibold mb-4">
                Order Summary
              </h2>

              <div className="space-y-2">

                {items.map((item) => (
                  <div
                    key={item.id}
                    className="flex justify-between text-sm"
                  >
                    <span>
                      {item.name} x {item.quantity}
                    </span>

                    <span>
                      ${(item.price * item.quantity).toFixed(2)}
                    </span>
                  </div>
                ))}

              </div>

              <div className="border-t mt-4 pt-4 flex justify-between font-bold">

                <span>Total</span>

                <span className="text-primary-600">
                  ${(finalTotal + total * 0.1).toFixed(2)}
                </span>

              </div>

              <div className="mt-4 text-center text-sm text-gray-500">

                <Lock className="inline mr-1 h-4 w-4" />

                Secure Checkout

              </div>

            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default CheckoutPage

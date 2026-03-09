// src/pages/LoyaltyPage.jsx
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  StarIcon,
  GiftIcon,
  TrophyIcon,
  ChartBarIcon,
  ArrowRightIcon,
  ClockIcon,
  CurrencyDollarIcon,
  SparklesIcon,
  CheckBadgeIcon,
  InformationCircleIcon,
  ShoppingCartIcon,
  PlusIcon,
  MinusIcon
} from '@heroicons/react/24/outline'
import { StarIcon as StarIconSolid } from '@heroicons/react/24/solid'
import useLoyaltyStore from '@store/loyaltyStore'
import useAuthStore from '@store/authStore'
import toast from 'react-hot-toast'

const LoyaltyPage = () => {
  const { 
    points, 
    pointsHistory, 
    tier, 
    getPointsMultiplier,
    redeemPoints 
  } = useLoyaltyStore()
  const { isAuthenticated, user } = useAuthStore()

  const [activeTab, setActiveTab] = useState('overview')
  const [redeemAmount, setRedeemAmount] = useState('')
  const [showRedeemModal, setShowRedeemModal] = useState(false)
  const [selectedReward, setSelectedReward] = useState(null)

  // Tier definitions
  const tiers = [
    {
      name: 'Bronze',
      minPoints: 0,
      maxPoints: 999,
      multiplier: 1.0,
      color: 'from-amber-600 to-amber-700',
      bgColor: 'bg-amber-50',
      textColor: 'text-amber-700',
      icon: StarIcon,
      benefits: [
        '1x points on all purchases',
        'Birthday bonus points',
        'Exclusive member pricing'
      ]
    },
    {
      name: 'Silver',
      minPoints: 1000,
      maxPoints: 4999,
      multiplier: 1.2,
      color: 'from-gray-400 to-gray-500',
      bgColor: 'bg-gray-50',
      textColor: 'text-gray-600',
      icon: StarIconSolid,
      benefits: [
        '1.2x points on all purchases',
        'Birthday bonus points',
        'Exclusive member pricing',
        'Free shipping on orders $50+',
        'Early access to sales'
      ]
    },
    {
      name: 'Gold',
      minPoints: 5000,
      maxPoints: 9999,
      multiplier: 1.5,
      color: 'from-yellow-500 to-yellow-600',
      bgColor: 'bg-yellow-50',
      textColor: 'text-yellow-600',
      icon: TrophyIcon,
      benefits: [
        '1.5x points on all purchases',
        'Birthday bonus points',
        'Exclusive member pricing',
        'Free shipping on all orders',
        'Early access to sales',
        'Priority customer support',
        'Free color consultation'
      ]
    },
    {
      name: 'Platinum',
      minPoints: 10000,
      maxPoints: Infinity,
      multiplier: 2.0,
      color: 'from-purple-500 to-purple-600',
      bgColor: 'bg-purple-50',
      textColor: 'text-purple-600',
      icon: SparklesIcon,
      benefits: [
        '2x points on all purchases',
        'Birthday bonus points',
        'Exclusive member pricing',
        'Free shipping on all orders',
        'Early access to sales',
        'Priority customer support',
        'Free color consultation',
        'Annual gift',
        'VIP event invitations'
      ]
    }
  ]

  // Rewards catalog
  const rewards = [
    {
      id: 1,
      name: '$10 Off',
      points: 1000,
      description: 'Get $10 off your next purchase',
      icon: CurrencyDollarIcon,
      category: 'discount'
    },
    {
      id: 2,
      name: '$25 Off',
      points: 2500,
      description: 'Get $25 off your next purchase',
      icon: CurrencyDollarIcon,
      category: 'discount'
    },
    {
      id: 3,
      name: '$50 Off',
      points: 5000,
      description: 'Get $50 off your next purchase',
      icon: CurrencyDollarIcon,
      category: 'discount'
    },
    {
      id: 4,
      name: 'Free Shipping',
      points: 500,
      description: 'Free shipping on your next order',
      icon: GiftIcon,
      category: 'shipping'
    },
    {
      id: 5,
      name: 'Color Consultation',
      points: 2000,
      description: '1-hour professional color consultation',
      icon: StarIcon,
      category: 'service'
    },
    {
      id: 6,
      name: 'Premium Brush Set',
      points: 3000,
      description: 'Professional grade brush set',
      icon: GiftIcon,
      category: 'product'
    },
    {
      id: 7,
      name: 'Paint Samples (5)',
      points: 750,
      description: '5 free paint samples of your choice',
      icon: GiftIcon,
      category: 'product'
    },
    {
      id: 8,
      name: 'Double Points Day',
      points: 1500,
      description: 'Earn double points on one purchase',
      icon: StarIcon,
      category: 'bonus'
    }
  ]

  // Mock transaction history
  const mockHistory = [
    {
      id: 1,
      type: 'earned',
      points: 450,
      description: 'Purchase: Premium Interior Paint',
      date: '2024-02-15T10:30:00',
      orderId: 'ORD-123456'
    },
    {
      id: 2,
      type: 'earned',
      points: 120,
      description: 'Purchase: Paint Roller Set',
      date: '2024-02-10T14:20:00',
      orderId: 'ORD-123455'
    },
    {
      id: 3,
      type: 'redeemed',
      points: 500,
      description: 'Redeemed: Free Shipping',
      date: '2024-02-05T09:15:00',
      orderId: 'ORD-123454'
    },
    {
      id: 4,
      type: 'earned',
      points: 75,
      description: 'Product Review Bonus',
      date: '2024-02-01T16:45:00'
    },
    {
      id: 5,
      type: 'earned',
      points: 250,
      description: 'Birthday Bonus Points',
      date: '2024-01-28T00:00:00'
    },
    {
      id: 6,
      type: 'earned',
      points: 800,
      description: 'Purchase: Exterior Paint Bundle',
      date: '2024-01-20T11:10:00',
      orderId: 'ORD-123453'
    }
  ]

  const currentTier = tiers.find(t => points >= t.minPoints && points <= t.maxPoints) || tiers[0]
  const nextTier = tiers[tiers.findIndex(t => t.name === currentTier.name) + 1]
  const pointsToNextTier = nextTier ? nextTier.minPoints - points : 0
  const progressPercentage = nextTier 
    ? ((points - currentTier.minPoints) / (nextTier.minPoints - currentTier.minPoints)) * 100
    : 100

  const handleRedeem = (reward) => {
    if (!isAuthenticated) {
      toast.error('Please login to redeem rewards')
      return
    }

    if (points < reward.points) {
      toast.error('Insufficient points')
      return
    }

    setSelectedReward(reward)
    setShowRedeemModal(true)
  }

  const confirmRedeem = () => {
    if (selectedReward && redeemPoints(selectedReward.points, selectedReward)) {
      toast.success(`Successfully redeemed: ${selectedReward.name}`)
      setShowRedeemModal(false)
      setSelectedReward(null)
    }
  }

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    })
  }

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-lg mx-auto text-center"
          >
            <div className="bg-gradient-to-r from-primary-600 to-primary-800 rounded-full w-24 h-24 mx-auto mb-6 flex items-center justify-center">
              <TrophyIcon className="h-12 w-12 text-white" />
            </div>
            
            <h1 className="text-3xl font-bold text-gray-800 mb-3">
              Join Our Loyalty Program
            </h1>
            
            <p className="text-gray-600 mb-8">
              Sign in or create an account to start earning points on every purchase 
              and unlock exclusive rewards!
            </p>
            
            <div className="space-y-4">
              <Link
                to="/register"
                className="block bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors"
              >
                Create Account
              </Link>
              
              <Link
                to="/login"
                className="block border border-gray-300 px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
              >
                Sign In
              </Link>
            </div>

            {/* Preview Benefits */}
            <div className="mt-12 text-left">
              <h2 className="text-xl font-semibold mb-4">Program Benefits:</h2>
              <div className="space-y-3">
                {tiers[0].benefits.slice(0, 3).map((benefit, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <CheckBadgeIcon className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">{benefit}</span>
                  </div>
                ))}
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
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Loyalty Program</h1>
          <p className="text-gray-600">
            Earn points on every purchase and unlock exclusive rewards
          </p>
        </div>

        {/* Points Overview Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className={`bg-gradient-to-r ${currentTier.color} rounded-2xl p-6 lg:p-8 text-white mb-8 relative overflow-hidden`}
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-white rounded-full"></div>
            <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-white rounded-full"></div>
          </div>

          <div className="relative z-10">
            <div className="flex flex-wrap items-start justify-between mb-6">
              <div>
                <p className="text-sm opacity-90 mb-1">Current Balance</p>
                <p className="text-4xl lg:text-5xl font-bold mb-2">{points.toLocaleString()} Points</p>
                <div className="flex items-center gap-2">
                  <currentTier.icon className="h-5 w-5" />
                  <span className="font-medium">{currentTier.name} Member</span>
                  <span className="text-sm opacity-75">• {currentTier.multiplier}x Multiplier</span>
                </div>
              </div>
              
              <Link
                to="/products"
                className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-lg font-semibold hover:bg-white/30 transition-colors"
              >
                Shop & Earn
              </Link>
            </div>

            {/* Progress to next tier */}
            {nextTier && (
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span>{currentTier.name}</span>
                  <span>{nextTier.name}</span>
                </div>
                <div className="h-2 bg-white/20 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${progressPercentage}%` }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="h-full bg-white rounded-full"
                  />
                </div>
                <p className="text-sm mt-2 opacity-90">
                  {pointsToNextTier.toLocaleString()} more points to reach {nextTier.name}
                </p>
              </div>
            )}
          </div>
        </motion.div>

        {/* Tabs */}
        <div className="border-b border-gray-200 mb-6">
          <nav className="flex gap-6">
            <button
              onClick={() => setActiveTab('overview')}
              className={`pb-4 px-1 font-medium text-sm border-b-2 transition-colors ${
                activeTab === 'overview'
                  ? 'border-primary-600 text-primary-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              Overview
            </button>
            <button
              onClick={() => setActiveTab('rewards')}
              className={`pb-4 px-1 font-medium text-sm border-b-2 transition-colors ${
                activeTab === 'rewards'
                  ? 'border-primary-600 text-primary-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              Rewards Catalog
            </button>
            <button
              onClick={() => setActiveTab('history')}
              className={`pb-4 px-1 font-medium text-sm border-b-2 transition-colors ${
                activeTab === 'history'
                  ? 'border-primary-600 text-primary-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              Transaction History
            </button>
          </nav>
        </div>

        {/* Tab Content */}
        {activeTab === 'overview' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="space-y-6"
          >
            {/* Tier Benefits */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-xl font-bold mb-6">Tier Benefits</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {tiers.map((tierInfo, index) => {
                  const Icon = tierInfo.icon
                  const isCurrentTier = tierInfo.name === currentTier.name
                  
                  return (
                    <div
                      key={index}
                      className={`relative p-4 rounded-lg border-2 transition-all ${
                        isCurrentTier
                          ? 'border-primary-600 bg-primary-50'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      {isCurrentTier && (
                        <div className="absolute -top-2 -right-2">
                          <span className="bg-primary-600 text-white text-xs px-2 py-1 rounded-full">
                            Current
                          </span>
                        </div>
                      )}
                      
                      <div className={`w-10 h-10 rounded-lg bg-gradient-to-r ${tierInfo.color} text-white flex items-center justify-center mb-3`}>
                        <Icon className="h-5 w-5" />
                      </div>
                      
                      <h3 className="font-bold mb-1">{tierInfo.name}</h3>
                      <p className="text-sm text-gray-500 mb-2">
                        {tierInfo.minPoints.toLocaleString()} - {tierInfo.maxPoints === Infinity ? '∞' : tierInfo.maxPoints.toLocaleString()} points
                      </p>
                      <p className="text-sm font-medium mb-2">
                        {tierInfo.multiplier}x Points Multiplier
                      </p>
                      
                      <ul className="space-y-1">
                        {tierInfo.benefits.slice(0, 3).map((benefit, i) => (
                          <li key={i} className="text-xs text-gray-600 flex items-start gap-1">
                            <CheckBadgeIcon className="h-3 w-3 text-green-500 flex-shrink-0 mt-0.5" />
                            <span>{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* How to Earn */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-xl font-bold mb-4">Ways to Earn Points</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="flex gap-3">
                  <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <ShoppingCartIcon className="h-4 w-4 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Make Purchases</h3>
                    <p className="text-sm text-gray-500">
                      Earn {currentTier.multiplier}x points on every purchase
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-3">
                  <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <StarIcon className="h-4 w-4 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Write Reviews</h3>
                    <p className="text-sm text-gray-500">
                      Earn 50 points per product review
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-3">
                  <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <GiftIcon className="h-4 w-4 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Birthday Bonus</h3>
                    <p className="text-sm text-gray-500">
                      Get 250 bonus points on your birthday
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Recent Activity */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold">Recent Activity</h2>
                <button
                  onClick={() => setActiveTab('history')}
                  className="text-primary-600 hover:text-primary-700 text-sm font-medium flex items-center"
                >
                  View All
                  <ArrowRightIcon className="h-4 w-4 ml-1" />
                </button>
              </div>
              
              <div className="space-y-3">
                {mockHistory.slice(0, 3).map((transaction) => (
                  <div key={transaction.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                        transaction.type === 'earned' ? 'bg-green-100' : 'bg-red-100'
                      }`}>
                        {transaction.type === 'earned' ? (
                          <PlusIcon className={`h-4 w-4 ${
                            transaction.type === 'earned' ? 'text-green-600' : 'text-red-600'
                          }`} />
                        ) : (
                          <MinusIcon className="h-4 w-4 text-red-600" />
                        )}
                      </div>
                      <div>
                        <p className="text-sm font-medium">{transaction.description}</p>
                        <p className="text-xs text-gray-500">{formatDate(transaction.date)}</p>
                      </div>
                    </div>
                    <span className={`font-bold ${
                      transaction.type === 'earned' ? 'text-green-600' : 'text-red-600'
                    }`}>
                      {transaction.type === 'earned' ? '+' : '-'}{transaction.points} pts
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}

        {activeTab === 'rewards' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="space-y-6"
          >
            {/* Points Summary */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div>
                  <p className="text-sm text-gray-500 mb-1">Your Points Balance</p>
                  <p className="text-3xl font-bold text-primary-600">{points.toLocaleString()}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-gray-500 mb-1">Available to Redeem</p>
                  <p className="text-xl font-semibold">{Math.floor(points / 100) * 100} pts</p>
                </div>
              </div>
            </div>

            {/* Rewards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {rewards.map((reward) => {
                const Icon = reward.icon
                const canRedeem = points >= reward.points
                
                return (
                  <motion.div
                    key={reward.id}
                    whileHover={{ y: -5 }}
                    className={`bg-white rounded-xl shadow-lg p-6 border-2 transition-all ${
                      canRedeem ? 'hover:border-primary-600' : 'opacity-75'
                    }`}
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                        canRedeem ? 'bg-primary-100 text-primary-600' : 'bg-gray-100 text-gray-400'
                      }`}>
                        <Icon className="h-6 w-6" />
                      </div>
                      <span className={`text-lg font-bold ${
                        canRedeem ? 'text-primary-600' : 'text-gray-400'
                      }`}>
                        {reward.points} pts
                      </span>
                    </div>
                    
                    <h3 className="font-bold mb-2">{reward.name}</h3>
                    <p className="text-sm text-gray-500 mb-4">{reward.description}</p>
                    
                    <button
                      onClick={() => handleRedeem(reward)}
                      disabled={!canRedeem}
                      className={`w-full py-2 rounded-lg font-medium transition-colors ${
                        canRedeem
                          ? 'bg-primary-600 text-white hover:bg-primary-700'
                          : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                      }`}
                    >
                      {canRedeem ? 'Redeem Now' : 'Insufficient Points'}
                    </button>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>
        )}

        {activeTab === 'history' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="bg-white rounded-xl shadow-lg p-6"
          >
            <h2 className="text-xl font-bold mb-6">Transaction History</h2>
            
            <div className="space-y-4">
              {mockHistory.map((transaction) => (
                <div
                  key={transaction.id}
                  className="flex flex-wrap items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                      transaction.type === 'earned' ? 'bg-green-100' : 'bg-red-100'
                    }`}>
                      {transaction.type === 'earned' ? (
                        <PlusIcon className="h-5 w-5 text-green-600" />
                      ) : (
                        <MinusIcon className="h-5 w-5 text-red-600" />
                      )}
                    </div>
                    
                    <div>
                      <p className="font-medium">{transaction.description}</p>
                      <div className="flex items-center gap-3 text-sm text-gray-500 mt-1">
                        <span>{formatDate(transaction.date)}</span>
                        {transaction.orderId && (
                          <>
                            <span>•</span>
                            <span>Order #{transaction.orderId}</span>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                  
                  <div className="text-right">
                    <span className={`text-lg font-bold ${
                      transaction.type === 'earned' ? 'text-green-600' : 'text-red-600'
                    }`}>
                      {transaction.type === 'earned' ? '+' : '-'}{transaction.points} pts
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Load More */}
            <div className="mt-6 text-center">
              <button className="text-primary-600 hover:text-primary-700 font-medium">
                Load More History
              </button>
            </div>
          </motion.div>
        )}
      </div>

      {/* Redeem Modal */}
      {showRedeemModal && selectedReward && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen px-4">
            <div className="fixed inset-0 bg-black opacity-50" onClick={() => setShowRedeemModal(false)}></div>
            
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="relative bg-white rounded-xl max-w-md w-full p-6 z-10"
            >
              <h3 className="text-xl font-bold mb-4">Confirm Redemption</h3>
              
              <div className="bg-primary-50 rounded-lg p-4 mb-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-gray-600">Reward:</span>
                  <span className="font-bold">{selectedReward.name}</span>
                </div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-gray-600">Points Cost:</span>
                  <span className="font-bold text-primary-600">{selectedReward.points} pts</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Your Balance:</span>
                  <span className="font-bold">{points} pts</span>
                </div>
              </div>
              
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3 mb-4">
                <p className="text-sm text-yellow-800 flex items-start gap-2">
                  <InformationCircleIcon className="h-4 w-4 flex-shrink-0 mt-0.5" />
                  <span>
                    After redemption, {points - selectedReward.points} points will remain in your account.
                    This action cannot be undone.
                  </span>
                </p>
              </div>
              
              <div className="flex gap-3">
                <button
                  onClick={() => setShowRedeemModal(false)}
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-lg font-medium hover:bg-gray-50"
                >
                  Cancel
                </button>
                <button
                  onClick={confirmRedeem}
                  className="flex-1 bg-primary-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-primary-700"
                >
                  Confirm
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      )}
    </div>
  )
}

export default LoyaltyPage
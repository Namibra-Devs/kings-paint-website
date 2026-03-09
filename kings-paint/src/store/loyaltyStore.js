// src/store/loyaltyStore.js
import { create } from 'zustand'
import { persist } from 'zustand/middleware'

const useLoyaltyStore = create(
  persist(
    (set, get) => ({
      points: 0,
      pointsHistory: [],
      tier: 'Bronze', // Bronze, Silver, Gold, Platinum
      
      addPoints: (points, transaction) => {
        set({ points: get().points + points })
        get().addToHistory({
          type: 'earned',
          points,
          transaction,
          date: new Date().toISOString(),
        })
        get().updateTier()
      },
      
      redeemPoints: (points, transaction) => {
        if (get().points >= points) {
          set({ points: get().points - points })
          get().addToHistory({
            type: 'redeemed',
            points,
            transaction,
            date: new Date().toISOString(),
          })
          get().updateTier()
          return true
        }
        return false
      },
      
      addToHistory: (entry) => {
        set({ pointsHistory: [entry, ...get().pointsHistory].slice(0, 50) })
      },
      
      updateTier: () => {
        const points = get().points
        let tier = 'Bronze'
        
        if (points >= 10000) tier = 'Platinum'
        else if (points >= 5000) tier = 'Gold'
        else if (points >= 1000) tier = 'Silver'
        
        set({ tier })
      },
      
      getPointsMultiplier: () => {
        const tier = get().tier
        switch (tier) {
          case 'Platinum': return 2.0
          case 'Gold': return 1.5
          case 'Silver': return 1.2
          default: return 1.0
        }
      },
    }),
    {
      name: 'loyalty-storage',
    }
  )
)

export default useLoyaltyStore
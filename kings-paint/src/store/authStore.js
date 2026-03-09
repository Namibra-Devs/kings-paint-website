// src/store/authStore.js
import { create } from 'zustand'
import { persist } from 'zustand/middleware'

const useAuthStore = create(
  persist(
    (set) => ({
      user: null,
      isAuthenticated: false,
      userType: null, // 'retailer' or 'dealer'
      
      login: (userData) => {
        set({
          user: userData,
          isAuthenticated: true,
          userType: userData.type,
        })
      },
      
      logout: () => {
        set({
          user: null,
          isAuthenticated: false,
          userType: null,
        })
      },
      
      register: (userData) => {
        // Registration logic here
        set({
          user: userData,
          isAuthenticated: true,
          userType: userData.type,
        })
      },
    }),
    {
      name: 'auth-storage',
    }
  )
)

export default useAuthStore
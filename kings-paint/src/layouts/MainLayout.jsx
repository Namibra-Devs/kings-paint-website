// src/layouts/MainLayout.jsx
import { Outlet } from 'react-router-dom'
import DesktopNav from '@components/navigation/DesktopNav'
import MobileNav from '@components/navigation/MobileNav'
import Footer from '@components/Footer'
// import PopupMessage from '@components/PopupMessage'

const MainLayout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <DesktopNav />
      <MobileNav />
      
      {/* Popup Message Component */}
      {/* <PopupMessage /> */}
      
      {/* Main Content */}
      <main className="flex-grow">
        <Outlet />
      </main>
      
      <Footer />
    </div>
  )
}

export default MainLayout
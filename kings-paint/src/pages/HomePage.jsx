// src/pages/HomePage.jsx
import HeroSection from '@components/home/HeroSection'
import FeaturesSection from '@components/home/FeaturesSection'
import DiscoverSection from '@components/home/DiscoverSection'
import FeaturedProducts from '@components/home/FeaturedProducts'
import PromotionBanner from '@components/home/PromotionBanner'
import TestimonialsSection from '@components/home/TestimonialsSection'
import BrandsSection from '@components/home/BrandsSection'
import NewsletterSection from '@components/home/NewsletterSection'
import Partnersmarquee from '@components/home/Partnersmarquee'

const HomePage = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <FeaturesSection />
      <DiscoverSection />
      <FeaturedProducts />
      <PromotionBanner />
      <TestimonialsSection />
      <BrandsSection />
      <NewsletterSection />
      <Partnersmarquee />
    </div>
  )
}

export default HomePage
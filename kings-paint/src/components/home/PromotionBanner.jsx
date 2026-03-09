// src/components/home/PromotionBanner.jsx
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const PromotionBanner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const [imagesLoaded, setImagesLoaded] = useState({});
  const [imageErrors, setImageErrors] = useState({});

  const banners = [
    {
      id: 1,
      image: "/images/banner1.png",
      link: "/register?type=loyalty",
      fallbackImage: "/images/banners/fallback-1.webp",
    },
    {
      id: 2,
      image: "/images/banner2.avif",
      link: "/products?filter=new",
      fallbackImage: "/images/banners/fallback-2.webp",
    },
    {
      id: 3,
      image: "/images/banner3.avif",
      link: "/products?filter=sale",
      fallbackImage: "/images/banners/fallback-3.webp",
    },
    {
      id: 4,
      image: "/images/banner4.avif",
      link: "/register?type=dealer",
      fallbackImage: "/images/banners/fallback-4.webp",
    },
    {
      id: 5,
      image: "/images/banner5.avif",
      link: "/register?service=custom",
      fallbackImage: "/images/banners/fallback-5.webp",
    },
  ];

  useEffect(() => {
    if (!isHovering) {
      const timer = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % banners.length);
      }, 5000);
      return () => clearInterval(timer);
    }
  }, [isHovering, banners.length]);

  const handlePrevious = () =>
    setCurrentSlide((prev) => (prev - 1 + banners.length) % banners.length);

  const handleNext = () =>
    setCurrentSlide((prev) => (prev + 1) % banners.length);

  const handleImageLoad = (slideId) =>
    setImagesLoaded((prev) => ({ ...prev, [slideId]: true }));

  const handleImageError = (slideId) =>
    setImageErrors((prev) => ({ ...prev, [slideId]: true }));

  const currentBanner = banners[currentSlide];

  return (
    <section
      className="py-16"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <div className="container mx-auto px-4 relative">
        {/* Banner Container — no fixed height, image drives the size */}
        <div className="relative rounded-md overflow-hidden w-full">

          {/* Navigation at Top Right */}
          <div className="absolute top-4 right-4 z-30 flex items-center gap-2">
            <button
              onClick={handlePrevious}
              className="w-10 h-10 rounded-full bg-black/40 backdrop-blur-sm border border-white/30 flex items-center justify-center hover:bg-black/60 transition-all hover:scale-110"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-5 h-5 text-white" />
            </button>

            <button
              onClick={handleNext}
              className="w-10 h-10 rounded-full bg-black/40 backdrop-blur-sm border border-white/30 flex items-center justify-center hover:bg-black/60 transition-all hover:scale-110"
              aria-label="Next slide"
            >
              <ChevronRight className="w-5 h-5 text-white" />
            </button>

            <div className="ml-2 bg-black/40 backdrop-blur-sm px-3 py-1.5 rounded-full border border-white/30">
              <span className="text-white text-sm font-medium">
                {String(currentSlide + 1).padStart(2, "0")} /{" "}
                {String(banners.length).padStart(2, "0")}
              </span>
            </div>
          </div>

          {/* Slides — each slide is in normal flow so its image height wins */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ x: "100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: "-100%", opacity: 0 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="w-full"
            >
              <Link to={currentBanner.link} className="block w-full">
                {/* Loading placeholder — shown until image is ready */}
                {!imagesLoaded[currentBanner.id] &&
                  !imageErrors[currentBanner.id] && (
                    <div className="w-full aspect-[2/1] bg-gradient-to-r from-gray-800 to-gray-900 animate-pulse flex items-center justify-center">
                      <div className="w-16 h-16 rounded-full bg-white/10" />
                    </div>
                  )}

                {/* Image — w-full h-auto shows the entire image at every width */}
                <img
                  src={
                    imageErrors[currentBanner.id]
                      ? currentBanner.fallbackImage
                      : currentBanner.image
                  }
                  alt={`Promotion ${currentSlide + 1}`}
                  className={`w-full h-auto block transition-opacity duration-500 ${
                    imagesLoaded[currentBanner.id] ||
                    imageErrors[currentBanner.id]
                      ? "opacity-100"
                      : "opacity-0 absolute inset-0"
                  }`}
                  loading="lazy"
                  onLoad={() => handleImageLoad(currentBanner.id)}
                  onError={() => handleImageError(currentBanner.id)}
                />
              </Link>
            </motion.div>
          </AnimatePresence>

          {/* Slide Indicators */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2">
            {banners.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`transition-all duration-300 ${
                  currentSlide === index
                    ? "w-8 h-2 bg-white rounded-full"
                    : "w-2 h-2 bg-white/50 rounded-full hover:bg-white/80 hover:scale-125"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Decorative blurs */}
        <div className="absolute -top-4 -left-4 w-32 h-32 bg-[#8B6B4D]/20 rounded-full blur-3xl -z-10" />
        <div className="absolute -bottom-4 -right-4 w-40 h-40 bg-[#5D8A7A]/20 rounded-full blur-3xl -z-10" />
      </div>
    </section>
  );
};

export default PromotionBanner;
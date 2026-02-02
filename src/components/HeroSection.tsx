"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    title: "Premium Glass Manufacturing",
    subtitle:
      "Leading the industry with quality and innovation for over a decade",
    image: "hero_1.jpg",
  },
  {
    title: "Architectural Glass Excellence",
    subtitle: "Transform your spaces with our cutting-edge glass solutions",
    image: "hero_2.jpg",
  },
  {
    title: "Custom Glass Manufacturing",
    subtitle: "Tailored solutions for every project requirement",
    image: "hero_3.jpg",
  },
];

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="relative h-[70vh] w-full overflow-hidden sm:h-[80vh] md:h-screen">
      {/* Carousel Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${slide.image})`,
            }}
          >
            {/* Overlay - Stronger on mobile for better text readability */}
            <div className="absolute inset-0 bg-linear-to-r from-gray-900/90 via-gray-800/70 to-transparent sm:from-gray-900/85 sm:via-gray-800/60"></div>
          </div>

          {/* Content */}
          <div className="relative z-10 flex h-full items-center">
            <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-16">
              <div className="max-w-3xl">
                {/* Company Name */}
                <h3 className="mb-3 text-sm font-semibold tracking-wider text-white sm:mb-4 sm:text-base md:text-xl lg:text-2xl">
                  STAR GLASS LINE INDUSTRIES
                </h3>

                {/* Main Headline - Responsive font sizes */}
                <h1 className="mb-4 text-3xl font-bold leading-tight text-white sm:mb-5 sm:text-4xl md:mb-6 md:text-5xl lg:text-6xl xl:text-7xl">
                  {slide.title}
                </h1>

                {/* Subtitle - Responsive sizing and spacing */}
                <p className="mb-6 text-base leading-relaxed text-gray-200 sm:mb-7 sm:text-lg md:mb-8 md:text-xl lg:text-2xl">
                  {slide.subtitle}
                </p>

                {/* CTA Button - WhatsApp Link */}
                <a
                  href="https://wa.me/919811031849?text=Hi%2C%20I%27d%20like%20to%20get%20a%20quote%20for%20glass%20products"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative inline-block overflow-hidden rounded-md bg-[#FB0309] px-6 py-3 text-base font-semibold text-white transition-all duration-300 hover:shadow-2xl hover:shadow-[#FB0309]/50 sm:px-7 sm:py-3.5 md:px-8 md:py-4 md:text-lg"
                >
                  <span className="relative z-10">Get a Quote</span>
                  <div className="absolute inset-0 z-0 bg-linear-to-r from-[#FB0309] to-red-600 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
                </a>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows - Hidden on mobile for cleaner look, visible on tablet+ */}
      <button
        onClick={prevSlide}
        className="absolute left-2 top-1/2 z-20 hidden -translate-y-1/2 rounded-full bg-white/20 p-2 text-white backdrop-blur-sm transition-all hover:bg-white/30 sm:block sm:left-4 md:left-8 md:p-3"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-5 w-5 md:h-6 md:w-6" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-2 top-1/2 z-20 hidden -translate-y-1/2 rounded-full bg-white/20 p-2 text-white backdrop-blur-sm transition-all hover:bg-white/30 sm:block sm:right-4 md:right-8 md:p-3"
        aria-label="Next slide"
      >
        <ChevronRight className="h-5 w-5 md:h-6 md:w-6" />
      </button>

      {/* Slide Indicators - Touch-friendly sizing */}
      <div className="absolute bottom-6 left-1/2 z-20 flex -translate-x-1/2 space-x-2 sm:bottom-8 sm:space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-1.5 rounded-full transition-all duration-300 sm:h-2 ${
              index === currentSlide
                ? "w-8 bg-[#FB0309] sm:w-12"
                : "w-1.5 bg-white/50 hover:bg-white/75 sm:w-2"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}

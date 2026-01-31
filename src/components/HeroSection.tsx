'use client';

import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const slides = [
  {
    title: "Premium Glass Manufacturing Solutions",
    subtitle: "Leading the industry with quality and innovation for over a decade",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=80"
  },
  {
    title: "Architectural Glass Excellence",
    subtitle: "Transform your spaces with our cutting-edge glass solutions",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80"
  },
  {
    title: "Custom Glass Manufacturing",
    subtitle: "Tailored solutions for every project requirement",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1920&q=80"
  }
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
    <div className="relative h-screen w-full overflow-hidden">
      {/* Carousel Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${slide.image})`,
            }}
          >
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent"></div>
          </div>

          {/* Content */}
          <div className="relative z-10 flex h-full items-center">
            <div className="container mx-auto px-4 md:px-8 lg:px-16">
              <div className="max-w-3xl">
                {/* Company Name */}
                <h3 className="mb-4 text-xl font-semibold tracking-wider text-white md:text-2xl">
                  STAR GLASS LINE INDUSTRIES
                </h3>
                
                {/* Main Headline */}
                <h1 className="mb-6 text-4xl font-bold leading-tight text-white md:text-6xl lg:text-7xl">
                  {slide.title}
                </h1>
                
                {/* Subtitle */}
                <p className="mb-8 text-lg text-gray-200 md:text-xl lg:text-2xl">
                  {slide.subtitle}
                </p>

                {/* CTA Button */}
                <button className="group relative overflow-hidden rounded-md bg-[#FB0309] px-8 py-4 text-lg font-semibold text-white transition-all duration-300 hover:shadow-2xl hover:shadow-[#FB0309]/50">
                  <span className="relative z-10">Get a Quote</span>
                  <div className="absolute inset-0 -z-0 bg-gradient-to-r from-[#FB0309] to-red-600 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 z-20 -translate-y-1/2 rounded-full bg-white/20 p-3 text-white backdrop-blur-sm transition-all hover:bg-white/30 md:left-8"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 z-20 -translate-y-1/2 rounded-full bg-white/20 p-3 text-white backdrop-blur-sm transition-all hover:bg-white/30 md:right-8"
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? 'w-12 bg-[#FB0309]'
                : 'w-2 bg-white/50 hover:bg-white/75'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
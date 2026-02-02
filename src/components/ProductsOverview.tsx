"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";

type Product = {
  name: string;
  href: string;
  image: string;
  description: string;
  features: string[];
};

const products: Product[] = [
  {
    name: "Annealed Glass",
    href: "/products/annealed-glass",
    image: "/products/annealed-glass.jpg",
    description: "Standard float glass with excellent clarity and versatility for various applications.",
    features: ["High Clarity", "Cost Effective", "Easy to Process"],
  },
  {
    name: "Toughened Glass",
    href: "/products/toughened-glass",
    image: "/products/toughened-glass.jpg",
    description: "Heat-treated safety glass with 4-5x strength of standard glass.",
    features: ["High Strength", "Safety Glass", "Heat Resistant"],
  },
  {
    name: "Insulated Glass",
    href: "/products/insulated-glasses",
    image: "/products/insulated-glass.jpg",
    description: "Double/triple glazed units for superior thermal and acoustic insulation.",
    features: ["Energy Efficient", "Sound Insulation", "Climate Control"],
  },
  {
    name: "Laminated Glass",
    href: "/products/laminate-safety-glass",
    image: "/products/laminated-safety-glass.jpg",
    description: "Multi-layer safety glass that holds together when shattered.",
    features: ["Impact Resistant", "UV Protection", "Security Glass"],
  },
  {
    name: "Heat Soaked Glass",
    href: "/products/heat-soaked-glass",
    image: "/products/heat-soaked-glass.jpg",
    description: "Tested toughened glass with reduced risk of spontaneous breakage.",
    features: ["Quality Assured", "Reduced Risk", "Premium Grade"],
  },
  {
    name: "Fluted Glass",
    href: "/products/fluted-glass",
    image: "/products/fluted-glass.jpg",
    description: "Textured decorative glass with elegant vertical ribbed pattern.",
    features: ["Privacy Glass", "Decorative", "Light Diffusion"],
  },
  {
    name: "Fabric Glass",
    href: "/products/fabric-glass",
    image: "/products/fabric-glass.jpg",
    description: "Innovative decorative glass with fabric-inspired textures and patterns.",
    features: ["Artistic Design", "Soft Lighting", "Unique Aesthetics"],
  },
  {
    name: "Bulletproof Glass",
    href: "/products/bulletproof-glass",
    image: "/products/bulletproof-glass.jpg",
    description: "Ballistic-resistant security glass for high-protection environments.",
    features: ["Ballistic Protection", "Multi-Layer", "High Security"],
  },
  {
    name: "Patterned Glass",
    href: "/products/patterned-glass",
    image: "/products/patterned-glass.jpg",
    description: "Decorative textured glass offering privacy with beautiful light diffusion.",
    features: ["Privacy Solution", "Decorative", "Low Maintenance"],
  },
];

// Product Card Component
function ProductCard({ product, index, isInView }: {
  product: Product;
  index: number;
  isInView: boolean;
}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <Link
        href={product.href}
        className="group relative block"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="relative overflow-hidden rounded-2xl bg-gray-100">
          {/* Image Container */}
          <div className="relative aspect-4/3 overflow-hidden">
            {/* Product Image */}
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              onError={(e) => {
                // Fallback for missing images
                const target = e.target as HTMLImageElement;
                target.style.display = 'none';
              }}
            />
            {/* Fallback gradient for missing images */}
            <div className="absolute inset-0 -z-10 bg-linear-to-br from-slate-200 via-slate-100 to-slate-200">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="h-20 w-20 rounded-full bg-linear-to-br from-[#13007D]/10 to-[#13007D]/5" />
              </div>
            </div>

            {/* Glass Reflection Overlay */}
            <motion.div
              className="absolute inset-0 bg-linear-to-tr from-transparent via-white/20 to-white/40"
              initial={{ x: "-100%", opacity: 0 }}
              animate={{
                x: isHovered ? "100%" : "-100%",
                opacity: isHovered ? 1 : 0
              }}
              transition={{ duration: 0.7, ease: "easeInOut" }}
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

            {/* Features - Show on Hover */}
            <AnimatePresence>
              {isHovered && (
                <motion.div
                  className="absolute bottom-0 left-0 right-0 p-4 sm:p-5"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex flex-wrap gap-2">
                    {product.features.map((feature, i) => (
                      <motion.span
                        key={feature}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: i * 0.05 }}
                        className="rounded-full bg-white/20 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm"
                      >
                        {feature}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Arrow Icon */}
            <motion.div
              className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-[#13007D] shadow-lg backdrop-blur-sm"
              initial={{ scale: 0, rotate: -45 }}
              animate={{
                scale: isHovered ? 1 : 0,
                rotate: isHovered ? 0 : -45
              }}
              transition={{ duration: 0.3, ease: "backOut" }}
            >
              <ArrowUpRight className="h-5 w-5" />
            </motion.div>
          </div>

          {/* Content Below Image */}
          <div className="relative bg-white p-4 sm:p-5">
            {/* Subtle top border with brand color */}
            <motion.div
              className="absolute left-0 right-0 top-0 h-0.5 bg-linear-to-r from-[#13007D] to-[#FB0309]"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: isHovered ? 1 : 0 }}
              transition={{ duration: 0.4 }}
              style={{ transformOrigin: "left" }}
            />

            <h3 className="mb-1 text-lg font-semibold text-gray-900 transition-colors duration-300 group-hover:text-[#13007D] sm:text-xl">
              {product.name}
            </h3>
            <p className="line-clamp-2 text-sm text-gray-500">
              {product.description}
            </p>

            {/* Learn More Link */}
            <motion.div
              className="mt-3 flex items-center gap-1 text-sm font-medium text-[#13007D]"
              animate={{ x: isHovered ? 5 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <span>Learn More</span>
              <ArrowRight className="h-4 w-4" />
            </motion.div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

// Mobile Carousel Component
function MobileCarousel({ products, isInView }: { products: Product[]; isInView: boolean }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (direction === "left" && currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    } else if (direction === "right" && currentIndex < products.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  return (
    <div className="relative">
      {/* Navigation Buttons */}
      <div className="absolute -top-12 right-0 flex gap-2">
        <button
          onClick={() => scroll("left")}
          disabled={currentIndex === 0}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-600 transition-all hover:border-[#13007D] hover:text-[#13007D] disabled:opacity-40"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button
          onClick={() => scroll("right")}
          disabled={currentIndex === products.length - 1}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-600 transition-all hover:border-[#13007D] hover:text-[#13007D] disabled:opacity-40"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>

      {/* Carousel Container */}
      <div ref={containerRef} className="overflow-hidden">
        <motion.div
          className="flex"
          animate={{ x: `-${currentIndex * 100}%` }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        >
          {products.map((product: Product, index: number) => (
            <div key={product.name} className="w-full shrink-0 px-2 first:pl-0 last:pr-0">
              <ProductCard product={product} index={index} isInView={isInView} />
            </div>
          ))}
        </motion.div>
      </div>

      {/* Dots Indicator */}
      <div className="mt-6 flex justify-center gap-2">
        {products.map((_: Product, index: number) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? "w-8 bg-[#13007D]"
                : "w-2 bg-gray-300 hover:bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export default function ProductsOverview() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section ref={ref} className="relative w-full overflow-hidden bg-linear-to-b from-white to-gray-50 py-16 md:py-24">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div
          className="h-full w-full"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="mb-12 sm:mb-16 md:mb-20">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-16">
            {/* Left - Title */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5 }}
                className="mb-4"
              >
                <span className="inline-flex items-center gap-2 rounded-full border border-[#13007D]/20 bg-[#13007D]/5 px-4 py-1.5 text-sm font-medium text-[#13007D]">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#13007D]" />
                  Product Range
                </span>
              </motion.div>

              <motion.h2
                className="text-3xl font-bold text-gray-900 sm:text-4xl md:text-5xl"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                Our{" "}
                <span className="relative">
                  <span className="relative z-10 text-[#13007D]">Premium</span>
                  <motion.span
                    className="absolute bottom-1 left-0 h-3 w-full bg-[#FB0309]/20"
                    initial={{ scaleX: 0 }}
                    animate={isInView ? { scaleX: 1 } : {}}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    style={{ transformOrigin: "left" }}
                  />
                </span>{" "}
                Glass Solutions
              </motion.h2>
            </div>

            {/* Right - Description */}
            <motion.div
              className="flex flex-col justify-end"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <p className="text-base leading-relaxed text-gray-600 sm:text-lg">
                <span className="font-semibold text-gray-900">At Star Line Glass,</span> we offer a comprehensive range of architectural glass solutions. Each product is crafted with precision to deliver superior performance, safety, and aesthetic appeal for commercial, residential, and institutional projects.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Desktop Grid - Hidden on Mobile */}
        <div className="hidden gap-6 sm:grid sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {products.map((product, index) => (
            <ProductCard
              key={product.name}
              product={product}
              index={index}
              isInView={isInView}
            />
          ))}
        </div>

        {/* Mobile Carousel - Shown on Mobile Only */}
        <div className="sm:hidden">
          <MobileCarousel products={products} isInView={isInView} />
        </div>

        {/* View All Products CTA */}
        <motion.div
          className="mt-12 text-center sm:mt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <Link
            href="/products"
            className="group inline-flex items-center gap-3 rounded-full border-2 border-[#13007D] bg-transparent px-6 py-3 text-sm font-semibold text-[#13007D] transition-all duration-300 hover:bg-[#13007D] hover:text-white sm:px-8 sm:py-4 sm:text-base"
          >
            View All Products
            <motion.span
              className="flex h-6 w-6 items-center justify-center rounded-full bg-[#13007D] text-white transition-colors group-hover:bg-white group-hover:text-[#13007D]"
              whileHover={{ scale: 1.1 }}
            >
              <ArrowRight className="h-3.5 w-3.5" />
            </motion.span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
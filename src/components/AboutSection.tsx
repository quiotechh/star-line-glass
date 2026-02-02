"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function AboutSectionHome() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [activeFeature, setActiveFeature] = useState(0);

  // Auto-cycle through features
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % 3);
    }, 2000); // Change every 2 seconds

    return () => clearInterval(interval);
  }, []);

  const features = [
    { text: "ISO Certified Manufacturing Facility" },
    { text: "State-of-the-Art Technology" },
    { text: "Custom Solutions for Every Project" },
  ];

  return (
    <section
      ref={ref}
      className="relative overflow-hidden bg-linear-to-br from-gray-50 to-white py-12 sm:py-16 md:py-20"
    >
      {/* Background Animation */}
      <motion.div
        className="absolute right-0 top-0 h-64 w-64 rounded-full bg-[#13007D]/10 blur-3xl sm:h-80 sm:w-80 md:h-96 md:w-96"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="container relative mx-auto px-4 sm:px-6 md:px-8 lg:px-16">
        <div className="grid items-center gap-8 sm:gap-10 md:gap-12 lg:grid-cols-2">
          {/* Left Side - Image */}
          <motion.div
            className="relative order-2 lg:order-1"
            initial={{ x: -100, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : { x: -100, opacity: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="group relative overflow-hidden rounded-2xl shadow-2xl sm:rounded-3xl"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="relative h-64 sm:h-80 md:h-96 lg:h-[500px] w-full">
                <Image
                  src="/about_section.jpg"
                  fill
                  alt="Glass Manufacturing"
                  className="object-cover"
                />
              </div>

              {/* Overlay */}
              <motion.div
                className="absolute inset-0 flex items-end bg-linear-to-t from-[#13007D]/90 via-[#13007D]/50 to-transparent p-4 sm:p-6 md:p-8"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.4 }}
              >
                <div className="text-white ml-20">
                  <p className="mb-1 text-lg font-bold sm:mb-2 sm:text-xl md:text-2xl">
                    Premium Glass Products
                  </p>
                  <p className="text-xs opacity-90 sm:text-sm">
                    Crafted with Precision & Care
                  </p>
                </div>
              </motion.div>

              {/* Floating Stats */}
              <motion.div
                className="absolute -bottom-4 -left-4 z-10 rounded-xl bg-white p-4 shadow-xl sm:-bottom-6 sm:-left-6 sm:rounded-2xl sm:p-6"
                initial={{ scale: 0, rotate: -10 }}
                animate={
                  isInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -10 }
                }
                transition={{ delay: 0.8, type: "spring", stiffness: 200 }}
                whileHover={{ scale: 1.1, rotate: 5 }}
              >
                <p className="text-3xl font-bold text-[#FB0309] sm:text-4xl">
                  20+
                </p>
                <p className="text-xs font-semibold text-gray-600 sm:text-sm">
                  Years
                </p>
              </motion.div>

              <motion.div
                className="absolute -right-4 -top-4 z-10 rounded-xl bg-[#13007D] p-4 shadow-xl sm:-right-6 sm:-top-6 sm:rounded-2xl sm:p-6"
                initial={{ scale: 0, rotate: 10 }}
                animate={
                  isInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: 10 }
                }
                transition={{ delay: 1, type: "spring", stiffness: 200 }}
                whileHover={{ scale: 1.1, rotate: -5 }}
              >
                <p className="text-3xl font-bold text-white sm:text-4xl">
                  500+
                </p>
                <p className="text-xs font-semibold text-white/90 sm:text-sm">
                  Projects
                </p>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right Side - Content */}
          <motion.div
            className="order-1 lg:order-2"
            initial={{ x: 100, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : { x: 100, opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.h2
              className="mb-3 text-3xl font-bold text-[#13007D] sm:mb-4 sm:text-4xl md:text-4xl lg:text-5xl"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.5 }}
            >
              Leading Glass Manufacturer
            </motion.h2>

            <motion.div
              className="mb-4 h-1 bg-[#FB0309] sm:mb-6"
              initial={{ width: 0 }}
              animate={isInView ? { width: 96 } : { width: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
            />

            <motion.p
              className="mb-6 text-base leading-relaxed text-gray-700 sm:mb-8 sm:text-lg"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: 0.8 }}
            >
              We specialize in manufacturing premium quality glass products for
              architectural, automotive, and industrial applications.
            </motion.p>

            {/* Interactive Features List */}
            <ul className="mb-6 space-y-3 sm:mb-8 sm:space-y-4">
              {features.map((feature, index) => (
                <motion.li
                  key={index}
                  className={`group flex items-start gap-2 rounded-lg border-l-4 p-3 transition-all duration-500 sm:gap-3 sm:p-4 ${
                    activeFeature === index
                      ? "translate-x-2 border-[#FB0309] bg-[#FB0309]/5 shadow-lg shadow-[#FB0309]/20"
                      : "border-transparent bg-gray-50"
                  }`}
                  initial={{ opacity: 0, x: -20 }}
                  animate={
                    isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }
                  }
                  transition={{ delay: 0.9 + index * 0.1 }}
                >
                  <motion.span
                    className="mt-1 h-2 w-2 shrink-0 rounded-full"
                    animate={{
                      backgroundColor:
                        activeFeature === index ? "#FB0309" : "#13007D",
                      scale: activeFeature === index ? 1.5 : 1,
                    }}
                    transition={{ duration: 0.5 }}
                  />
                  <span className="text-sm font-medium text-gray-700 sm:text-base">
                    {feature.text}
                  </span>
                </motion.li>
              ))}
            </ul>

            {/* CTA Button */}
            <motion.a
              href="/about"
              className="group relative inline-flex items-center gap-2 overflow-hidden rounded-lg bg-[#13007D] px-6 py-3 text-sm font-semibold text-white sm:px-8 sm:py-4 sm:text-base"
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ delay: 1.2 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10">Learn More</span>
              <ArrowRight className="relative z-10 h-4 w-4 transition-transform group-hover:translate-x-2 sm:h-5 sm:w-5" />
              <motion.div
                className="absolute inset-0 bg-[#FB0309]"
                initial={{ x: "-100%" }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

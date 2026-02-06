"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import {
  CheckCircle,
  Target,
  Sparkles,
  Eye,
  Award,
  TrendingUp,
  Shield,
  LucideIcon,
} from "lucide-react";

interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
}

interface Stat {
  number: string;
  label: string;
}

export default function AboutPage() {
  const [activeTab, setActiveTab] = useState<"mission" | "vision">("mission");

  return (
    <div className="bg-white">
      {/* Hero Section - Full Width Split */}
      <HeroSection />

      {/* Story Section - Full Width Reverse Split */}
      <StorySection />

      {/* Mission & Vision - Tabs Section */}
      <MissionVisionSection activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Core Values - Full Width Split */}
      <CoreValuesSection />

      {/* Stats Section */}
      <StatsSection />
    </div>
  );
}

// Hero Section with Image on Right
function HeroSection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section
      ref={ref}
      className="relative grid min-h-[80vh] sm:min-h-screen lg:grid-cols-2"
    >
      {/* Left Side - Content */}
      <div className="order-2 flex items-center bg-linear-to-br from-[#1E3A8A] to-[#1E40AF] px-4 py-12 sm:px-8 sm:py-16 md:px-12 lg:order-1 lg:px-16 xl:px-20">
        <div className="w-full max-w-2xl">
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -80 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="mb-4 text-3xl font-bold leading-tight text-white sm:mb-6 sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
              About <span className="text-[#FB0309]">Star Glass Line</span>
            </h1>
            <div className="mb-6 h-1 w-20 bg-[#FB0309] sm:mb-8 sm:h-1.5 sm:w-32"></div>
          </motion.div>

          <motion.p
            className="mb-6 text-base leading-relaxed text-gray-200 sm:mb-8 sm:text-lg md:text-xl lg:text-2xl"
            initial={{ opacity: 0, x: -60 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -60 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            Leading manufacturer of premium glass products, serving diverse
            industries with excellence for over 20 years.
          </motion.p>

          <motion.p
            className="text-sm leading-relaxed text-gray-300 sm:text-base md:text-lg"
            initial={{ opacity: 0, x: -60 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -60 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          >
            We combine traditional craftsmanship with modern technology to
            deliver superior glass solutions that exceed expectations.
          </motion.p>

          <motion.div
            className="mt-8 grid grid-cols-2 gap-4 sm:mt-12 sm:gap-6"
            initial={{ opacity: 0, x: -60 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -60 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          >
            <div className="rounded-xl border border-white/20 bg-white/10 p-4 backdrop-blur-sm sm:p-6">
              <p className="text-3xl font-bold text-[#FB0309] sm:text-4xl">
                20+
              </p>
              <p className="mt-1 text-xs font-medium text-white sm:mt-2 sm:text-sm">
                Years of Excellence
              </p>
            </div>
            <div className="rounded-xl border border-white/20 bg-white/10 p-4 backdrop-blur-sm sm:p-6">
              <p className="text-3xl font-bold text-[#FB0309] sm:text-4xl">
                500+
              </p>
              <p className="mt-1 text-xs font-medium text-white sm:mt-2 sm:text-sm">
                Projects Completed
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Right Side - Image */}
      <motion.div
        className="relative order-1 h-64 sm:h-80 md:h-96 lg:order-2 lg:h-auto"
        initial={{ opacity: 0, x: 80 }}
        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 80 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <Image
          src="/factory1.jpeg"
          alt="Glass Manufacturing"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/50 to-transparent lg:bg-linear-to-r lg:from-[#1E3A8A]/30 lg:to-transparent"></div>
      </motion.div>
    </section>
  );
}

// Story Section - Image on Left
function StorySection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section ref={ref} className="relative grid lg:grid-cols-2">
      {/* Left Side - Image */}
      <motion.div
        className="relative order-2 h-64 sm:h-80 md:h-96 lg:order-1 lg:h-auto"
        initial={{ opacity: 0, x: -80 }}
        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -80 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <Image
          src="/factory3.jpeg"
          alt="Our Journey"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-b from-transparent to-black/40 lg:bg-linear-to-l lg:from-white/20 lg:to-transparent"></div>
      </motion.div>

      {/* Right Side - Content */}
      <div className="order-1 flex items-center bg-gray-50 px-4 py-12 sm:px-8 sm:py-16 md:px-12 lg:order-2 lg:px-16 xl:px-20">
        <div className="w-full max-w-2xl">
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 80 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2 className="mb-4 text-3xl font-bold text-[#1E3A8A] sm:mb-6 sm:text-4xl md:text-5xl">
              Our Journey
            </h2>
            <div className="mb-6 h-1 w-20 bg-[#FB0309] sm:mb-8 sm:w-24"></div>
          </motion.div>

          <motion.p
            className="mb-4 text-base leading-relaxed text-gray-700 sm:mb-6 sm:text-lg"
            initial={{ opacity: 0, x: 60 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 60 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            Founded in <b>2013, Star Glass Industries (Delhi)</b> began with a clear vision — to create glass products that seamlessly blend beauty with functionality. What started as a small workshop steadily grew into one of the region’s trusted glass manufacturers.
            Building on this strong foundation, the company expanded its operations in <b>2022 with the launch of Star Line Glass Industries (Ghaziabad)</b>, strengthening production capacity and market reach while maintaining the same commitment to quality and innovation.
          </motion.p>

          <motion.p
            className="mb-6 text-base leading-relaxed text-gray-700 sm:mb-8 sm:text-lg"
            initial={{ opacity: 0, x: 60 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 60 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          >
            Our commitment to quality, innovation, and customer satisfaction has
            been the cornerstone of our success. Today, we serve clients across
            architectural, automotive, and industrial sectors, delivering
            excellence in every project.
          </motion.p>

          <div className="mt-6 space-y-3 sm:mt-10 sm:space-y-4">
            <motion.div
              className="flex items-start gap-3 sm:gap-4"
              initial={{ opacity: 0, x: 60 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 60 }}
              transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            >
              <div className="rounded-full bg-[#1E3A8A]/10 p-2 sm:p-3">
                <CheckCircle className="h-5 w-5 text-[#1E3A8A] sm:h-6 sm:w-6" />
              </div>
              <div>
                <h4 className="mb-1 text-sm font-semibold text-gray-800 sm:text-base">
                  Quality First
                </h4>
                <p className="text-xs text-gray-600 sm:text-sm">
                  Every product meets international standards
                </p>
              </div>
            </motion.div>

            <motion.div
              className="flex items-start gap-3 sm:gap-4"
              initial={{ opacity: 0, x: 60 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 60 }}
              transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
            >
              <div className="rounded-full bg-[#1E3A8A]/10 p-2 sm:p-3">
                <TrendingUp className="h-5 w-5 text-[#1E3A8A] sm:h-6 sm:w-6" />
              </div>
              <div>
                <h4 className="mb-1 text-sm font-semibold text-gray-800 sm:text-base">
                  Continuous Innovation
                </h4>
                <p className="text-xs text-gray-600 sm:text-sm">
                  Staying ahead with cutting-edge technology
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Mission & Vision Tabs
interface MissionVisionProps {
  activeTab: "mission" | "vision";
  setActiveTab: (tab: "mission" | "vision") => void;
}

function MissionVisionSection({ activeTab, setActiveTab }: MissionVisionProps) {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section
      ref={ref}
      className="bg-white px-4 py-12 sm:px-8 sm:py-16 md:px-12 lg:px-16 lg:py-20"
    >
      <div className="container mx-auto max-w-6xl">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: -40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -40 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="mb-3 text-3xl font-bold text-[#1E3A8A] sm:mb-4 sm:text-4xl md:text-5xl">
            Mission & Vision
          </h2>
          <div className="mx-auto mb-8 h-1 w-20 bg-[#FB0309] sm:mb-12 sm:w-24"></div>
        </motion.div>

        {/* Tabs */}
        <motion.div
          className="mb-6 flex flex-col justify-center gap-3 sm:mb-8 sm:flex-row sm:gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          <button
            onClick={() => setActiveTab("mission")}
            className={`group relative overflow-hidden rounded-lg px-6 py-3 text-sm font-semibold transition-all sm:px-8 sm:py-4 sm:text-base ${
              activeTab === "mission"
                ? "bg-[#1E3A8A] text-white"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            <Eye className="mr-2 inline-block h-4 w-4 sm:h-5 sm:w-5" />
            Our Mission
          </button>
          <button
            onClick={() => setActiveTab("vision")}
            className={`group relative overflow-hidden rounded-lg px-6 py-3 text-sm font-semibold transition-all sm:px-8 sm:py-4 sm:text-base ${
              activeTab === "vision"
                ? "bg-[#1E3A8A] text-white"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            <Target className="mr-2 inline-block h-4 w-4 sm:h-5 sm:w-5" />
            Our Vision
          </button>
        </motion.div>

        {/* Tab Content */}
        <motion.div
          className="rounded-2xl bg-linear-to-br from-gray-50 to-white p-6 shadow-xl sm:p-8 md:p-12"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={
            isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }
          }
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          key={activeTab}
        >
          {activeTab === "mission" && (
            <motion.p
              className="text-base leading-relaxed text-gray-700 sm:text-lg md:text-xl lg:text-2xl"
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              To provide world-class glass manufacturing solutions that exceed
              customer expectations through innovation, quality, and sustainable
              practices. We are committed to building lasting relationships with
              our clients and contributing to their success.
            </motion.p>
          )}
          {activeTab === "vision" && (
            <motion.p
              className="text-base leading-relaxed text-gray-700 sm:text-lg md:text-xl lg:text-2xl"
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              To be the most trusted and preferred glass manufacturing partner
              globally, recognized for our commitment to excellence, innovation,
              and environmental responsibility in every product we create.
            </motion.p>
          )}
        </motion.div>
      </div>
    </section>
  );
}

// Core Values - Image on Right
function CoreValuesSection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const values: Feature[] = [
    {
      icon: Award,
      title: "Quality Assurance",
      description:
        "Every product undergoes rigorous testing to ensure superior quality and durability.",
    },
    {
      icon: Target,
      title: "Precision Manufacturing",
      description:
        "State-of-the-art technology for accurate and consistent glass production.",
    },
    {
      icon: Sparkles,
      title: "Innovation Driven",
      description:
        "Continuously evolving with the latest trends and technologies.",
    },
    {
      icon: Shield,
      title: "Customer Trust",
      description:
        "Building long-term relationships through transparency and reliability.",
    },
  ];

  return (
    <section ref={ref} className="relative grid lg:grid-cols-2">
      {/* Left Side - Content */}
      <div className="order-2 flex items-center bg-linear-to-br from-gray-50 to-white px-4 py-12 sm:px-8 sm:py-16 md:px-12 lg:order-1 lg:px-16 xl:px-20">
        <div className="w-full max-w-2xl">
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -80 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2 className="mb-4 text-3xl font-bold text-[#1E3A8A] sm:mb-6 sm:text-4xl md:text-5xl">
              Our Core Values
            </h2>
            <div className="mb-6 h-1 w-20 bg-[#FB0309] sm:mb-10 sm:w-24"></div>
          </motion.div>

          <div className="space-y-4 sm:space-y-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={index}
                  className="group flex items-start gap-3 rounded-xl border border-gray-200 bg-white p-4 transition-all hover:border-[#FB0309] hover:shadow-lg sm:gap-4 sm:p-6"
                  initial={{ opacity: 0, x: -60 }}
                  animate={
                    isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -60 }
                  }
                  transition={{
                    duration: 0.8,
                    delay: 0.2 + index * 0.15,
                    ease: "easeOut",
                  }}
                  whileHover={{ x: 8 }}
                >
                  <div className="rounded-full bg-[#1E3A8A]/10 p-2 transition-all group-hover:bg-[#1E3A8A]/20 sm:p-3">
                    <Icon className="h-5 w-5 text-[#13007D] sm:h-6 sm:w-6" />
                  </div>
                  <div>
                    <h4 className="mb-1 text-base font-semibold text-gray-800 sm:mb-2 sm:text-lg">
                      {value.title}
                    </h4>
                    <p className="text-sm text-gray-600 sm:text-base">
                      {value.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Right Side - Image */}
      <motion.div
        className="relative order-1 h-64 sm:h-80 md:h-96 lg:order-2 lg:h-auto"
        initial={{ opacity: 0, x: 80 }}
        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 80 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <Image
          src="/factory8.jpeg"
          alt="Core Values"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent lg:bg-linear-to-l lg:from-[#1E3A8A]/20 lg:to-transparent"></div>
      </motion.div>
    </section>
  );
}

// Stats Section
function StatsSection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const stats: Stat[] = [
    { number: "300+", label: "Happy Clients" },
    { number: "500+", label: "Projects Completed" },
    { number: "20+", label: "Years of Excellence" },
    { number: "ISO", label: "Certified Quality" },
  ];

  return (
    <section
      ref={ref}
      className="bg-[#1E3A8A] px-4 py-12 sm:px-8 sm:py-16 md:py-20"
    >
      <div className="container mx-auto max-w-6xl">
        <div className="grid gap-6 sm:grid-cols-2 sm:gap-8 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="text-center"
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{
                duration: 0.8,
                delay: index * 0.15,
                ease: "easeOut",
              }}
            >
              <p className="mb-2 text-4xl font-bold text-[#FB0309] sm:text-5xl">
                {stat.number}
              </p>
              <p className="text-base font-medium text-white sm:text-lg">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

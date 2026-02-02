"use client";

import {
  Shield,
  Sparkles,
  Clock,
  Users,
  Award,
  Wrench,
} from "lucide-react";
import Link from "next/link";

const features = [
  {
    icon: Shield,
    title: "Premium Quality",
    description:
      "ISO 9001:2015 certified manufacturing with stringent quality checks at every stage.",
    gradient: "from-blue-500 to-cyan-400",
  },
  {
    icon: Sparkles,
    title: "Advanced Technology",
    description:
      "State-of-the-art facilities with modernized equipment and R&D labs.",
    gradient: "from-purple-500 to-pink-400",
  },
  {
    icon: Wrench,
    title: "Custom Solutions",
    description:
      "Tailor-made glass solutions for unique architectural applications and designs.",
    gradient: "from-orange-500 to-yellow-400",
  },
  {
    icon: Clock,
    title: "Timely Delivery",
    description:
      "Efficient production processes ensuring on-time delivery for all projects.",
    gradient: "from-green-500 to-emerald-400",
  },
  {
    icon: Users,
    title: "Expert Team",
    description:
      "Experienced professionals combining expertise with innovation.",
    gradient: "from-red-500 to-rose-400",
  },
  {
    icon: Award,
    title: "Global Standards",
    description:
      "Products meeting international quality standards with global reach.",
    gradient: "from-indigo-500 to-violet-400",
  },
];

// Simple Card Component with CSS-only hover effects
function FeatureCard({ feature }: { feature: typeof features[0] }) {
  const Icon = feature.icon;

  return (
    <div className="group relative cursor-pointer">
      <div className="relative h-full overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:border-white/20 sm:rounded-3xl sm:p-8">
        {/* Hover glow effect */}
        <div
          className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${feature.gradient} opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-20 sm:rounded-3xl`}
        />

        {/* Icon Container */}
        <div
          className={`relative mb-5 inline-flex rounded-xl bg-gradient-to-br ${feature.gradient} p-0.5 sm:mb-6 sm:rounded-2xl transition-transform duration-300 group-hover:scale-110`}
        >
          <div className="rounded-xl bg-[#13007D]/90 p-3 sm:rounded-2xl sm:p-4">
            <Icon className="h-6 w-6 text-white sm:h-7 sm:w-7" />
          </div>
        </div>

        {/* Title */}
        <h3 className="relative mb-2 text-lg font-bold text-white sm:mb-3 sm:text-xl">
          {feature.title}
        </h3>

        {/* Description */}
        <p className="relative text-sm leading-relaxed text-white/60 sm:text-base">
          {feature.description}
        </p>

        {/* Bottom Accent Line */}
        <div
          className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${feature.gradient} w-0 transition-all duration-300 group-hover:w-full`}
        />
      </div>
    </div>
  );
}

export default function WhyChooseUs() {
  return (
    <div className="px-2 sm:px-4 lg:px-6">
      <section className="relative w-full overflow-hidden bg-[#13007D] py-16 sm:py-20 md:py-28 rounded-3xl sm:rounded-[2.5rem]">
        {/* Static decorative orbs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-3xl sm:rounded-[2.5rem]">
          <div className="absolute h-64 w-64 sm:h-80 sm:w-80 bg-purple-500/20 rounded-full blur-3xl" style={{ left: '5%', top: '10%' }} />
          <div className="absolute h-72 w-72 sm:h-96 sm:w-96 bg-[#FB0309]/15 rounded-full blur-3xl" style={{ left: '70%', top: '60%' }} />
          <div className="absolute h-48 w-48 sm:h-64 sm:w-64 bg-blue-500/15 rounded-full blur-3xl" style={{ left: '50%', top: '20%' }} />
        </div>

        <div className="container relative mx-auto px-4 sm:px-6 md:px-8 lg:px-16">
          {/* Header Section */}
          <div className="mb-12 text-center sm:mb-16 md:mb-20">
            {/* Badge */}
            <div className="mb-4 inline-block sm:mb-6">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-medium text-white/90 backdrop-blur-sm sm:text-sm">
                <span className="h-2 w-2 rounded-full bg-[#FB0309]" />
                Why Partner With Us
              </span>
            </div>

            {/* Title */}
            <h2 className="mb-4 text-3xl font-bold text-white sm:mb-6 sm:text-4xl md:text-5xl lg:text-6xl">
              Why Choose{" "}
              <span className="text-[#FB0309]">Star Line Glass</span>
            </h2>

            {/* Subtitle */}
            <p className="mx-auto max-w-2xl text-sm text-white/60 sm:text-base md:text-lg">
              We don&apos;t just manufacture glass — we engineer solutions that
              redefine modern architecture with precision and excellence.
            </p>

            {/* Underline */}
            <div className="mx-auto mt-6 h-1 w-[200px] rounded-full bg-gradient-to-r from-transparent via-[#FB0309] to-transparent sm:mt-8" />
          </div>

          {/* Features Grid */}
          <div className="grid gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 lg:gap-8">
            {features.map((feature, index) => (
              <FeatureCard key={index} feature={feature} />
            ))}
          </div>

          {/* CTA Section */}
          <div className="mt-12 text-center sm:mt-16 md:mt-20">
            <Link href="/about" className="group relative inline-block">
              {/* Button Glow */}
              <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-[#FB0309] via-purple-500 to-[#FB0309] opacity-60 blur-lg" />

              <span className="relative flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-bold text-[#13007D] transition-all duration-300 group-hover:bg-[#FB0309] group-hover:text-white sm:px-8 sm:py-4 sm:text-base hover:scale-105 active:scale-95">
                Learn More About Us
                <svg
                  className="h-4 w-4 sm:h-5 sm:w-5 transition-transform group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

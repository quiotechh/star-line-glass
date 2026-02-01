"use client";

import { useRef, useState } from "react";
import { motion, useInView, useMotionValue, useTransform, useSpring } from "framer-motion";
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

// 3D Card Component
function Card3D({ feature, index, isInView }: { feature: typeof features[0]; index: number; isInView: boolean }) {
  const Icon = feature.icon;
  const [isHovered, setIsHovered] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    setIsHovered(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 60, rotateX: -15 }}
      animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : { opacity: 0, y: 60, rotateX: -15 }}
      transition={{
        duration: 0.7,
        delay: index * 0.1,
        ease: [0.23, 1, 0.32, 1]
      }}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      className="group relative cursor-pointer"
    >
      <div className="relative h-full overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition-all duration-500 sm:rounded-3xl sm:p-8">
        {/* Animated Border Glow */}
        <motion.div
          className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${feature.gradient} opacity-0 blur-xl transition-opacity duration-500 sm:rounded-3xl`}
          animate={{ opacity: isHovered ? 0.3 : 0 }}
        />

        {/* Shimmering Border */}
        <motion.div
          className="absolute inset-0 rounded-2xl sm:rounded-3xl"
          style={{
            background: `linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)`,
            backgroundSize: "200% 100%",
          }}
          animate={{
            backgroundPosition: isHovered ? ["200% 0%", "-200% 0%"] : "0% 0%",
          }}
          transition={{ duration: 1.5, repeat: isHovered ? Infinity : 0 }}
        />

        {/* Icon Container */}
        <motion.div
          className={`relative mb-5 inline-flex rounded-xl bg-gradient-to-br ${feature.gradient} p-0.5 sm:mb-6 sm:rounded-2xl`}
          animate={{
            scale: isHovered ? 1.1 : 1,
            rotate: isHovered ? [0, -5, 5, 0] : 0,
          }}
          transition={{ duration: 0.4 }}
        >
          <div className="rounded-xl bg-[#13007D]/90 p-3 sm:rounded-2xl sm:p-4">
            <Icon className="h-6 w-6 text-white sm:h-7 sm:w-7" />
          </div>
        </motion.div>

        {/* Floating Particles */}
        {isHovered && (
          <>
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                className={`absolute h-1 w-1 rounded-full bg-gradient-to-r ${feature.gradient}`}
                initial={{
                  x: 50,
                  y: 50,
                  opacity: 0,
                  scale: 0
                }}
                animate={{
                  x: [50, 30 + i * 40, 50 + i * 30],
                  y: [50, 20 + i * 20, -20],
                  opacity: [0, 1, 0],
                  scale: [0, 1.5, 0]
                }}
                transition={{
                  duration: 1.5,
                  delay: i * 0.2,
                  repeat: Infinity,
                }}
              />
            ))}
          </>
        )}

        {/* Title with Reveal */}
        <motion.h3
          className="relative mb-2 text-lg font-bold text-white sm:mb-3 sm:text-xl"
          style={{ transform: "translateZ(30px)" }}
        >
          {feature.title}
        </motion.h3>

        {/* Description */}
        <motion.p
          className="relative text-sm leading-relaxed text-white/60 sm:text-base"
          style={{ transform: "translateZ(20px)" }}
        >
          {feature.description}
        </motion.p>

        {/* Bottom Accent Line */}
        <motion.div
          className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${feature.gradient}`}
          initial={{ width: "0%" }}
          animate={{ width: isHovered ? "100%" : "0%" }}
          transition={{ duration: 0.4 }}
        />
      </div>
    </motion.div>
  );
}

// Floating Orb Component
function FloatingOrb({ delay, duration, size, color, left, top }: {
  delay: number;
  duration: number;
  size: string;
  color: string;
  left: string;
  top: string;
}) {
  return (
    <motion.div
      className={`absolute ${size} rounded-full ${color} blur-3xl`}
      style={{ left, top }}
      animate={{
        y: [0, -30, 0],
        x: [0, 20, 0],
        scale: [1, 1.2, 1],
        opacity: [0.3, 0.5, 0.3],
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  );
}

export default function WhyChooseUs() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.15 });

  // Text animation variants
  const titleWords = ["Why", "Choose", "Star", "Line", "Glass"];

  return (
    <section
      ref={ref}
      className="relative w-full overflow-hidden bg-[#13007D] py-16 sm:py-20 md:py-28"
    >
      {/* Animated Background Orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <FloatingOrb delay={0} duration={8} size="h-64 w-64 sm:h-80 sm:w-80" color="bg-purple-500/30" left="5%" top="10%" />
        <FloatingOrb delay={2} duration={10} size="h-72 w-72 sm:h-96 sm:w-96" color="bg-[#FB0309]/20" left="70%" top="60%" />
        <FloatingOrb delay={4} duration={12} size="h-48 w-48 sm:h-64 sm:w-64" color="bg-blue-500/20" left="50%" top="20%" />
        <FloatingOrb delay={1} duration={9} size="h-40 w-40 sm:h-56 sm:w-56" color="bg-cyan-500/20" left="20%" top="70%" />
      </div>

      {/* Animated Grid Pattern */}
      <motion.div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            radial-gradient(circle at 1px 1px, white 1px, transparent 0)
          `,
          backgroundSize: "40px 40px",
        }}
        animate={{
          backgroundPosition: ["0px 0px", "40px 40px"],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      <div className="container relative mx-auto px-4 sm:px-6 md:px-8 lg:px-16">
        {/* Header Section */}
        <div className="mb-12 text-center sm:mb-16 md:mb-20">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="mb-4 inline-block sm:mb-6"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-medium text-white/90 backdrop-blur-sm sm:text-sm">
              <motion.span
                className="h-2 w-2 rounded-full bg-[#FB0309]"
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
              Why Partner With Us
            </span>
          </motion.div>

          {/* Animated Title */}
          <h2 className="mb-4 text-3xl font-bold text-white sm:mb-6 sm:text-4xl md:text-5xl lg:text-6xl">
            <span className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1 sm:gap-x-4">
              {titleWords.map((word, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 40, rotateX: -90 }}
                  animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
                  transition={{
                    duration: 0.6,
                    delay: i * 0.1,
                    ease: [0.23, 1, 0.32, 1],
                  }}
                  className={word === "Star" || word === "Line" || word === "Glass" ? "text-[#FB0309]" : ""}
                >
                  {word}
                </motion.span>
              ))}
            </span>
          </h2>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mx-auto max-w-2xl text-sm text-white/60 sm:text-base md:text-lg"
          >
            We don&apos;t just manufacture glass — we engineer solutions that
            redefine modern architecture with precision and excellence.
          </motion.p>

          {/* Animated Underline */}
          <motion.div
            className="mx-auto mt-6 h-1 rounded-full bg-gradient-to-r from-transparent via-[#FB0309] to-transparent sm:mt-8"
            initial={{ width: 0, opacity: 0 }}
            animate={isInView ? { width: "200px", opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.7 }}
          />
        </div>

        {/* Features Grid */}
        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 lg:gap-8">
          {features.map((feature, index) => (
            <Card3D
              key={index}
              feature={feature}
              index={index}
              isInView={isInView}
            />
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          className="mt-12 text-center sm:mt-16 md:mt-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1, duration: 0.6 }}
        >
          <Link href="/about" className="group relative inline-block">
            {/* Button Glow */}
            <motion.div
              className="absolute -inset-1 rounded-full bg-gradient-to-r from-[#FB0309] via-purple-500 to-[#FB0309] opacity-70 blur-lg"
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{ duration: 3, repeat: Infinity }}
              style={{ backgroundSize: "200% 200%" }}
            />

            <motion.span
              className="relative flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-bold text-[#13007D] transition-all duration-300 group-hover:bg-[#FB0309] group-hover:text-white sm:px-8 sm:py-4 sm:text-base"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              Learn More About Us
              <motion.svg
                className="h-4 w-4 sm:h-5 sm:w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </motion.svg>
            </motion.span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

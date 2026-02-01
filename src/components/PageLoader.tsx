"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function PageLoader() {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    // Check if loader has been shown in this session
    const hasLoaded = sessionStorage.getItem("starline-loaded");
    if (hasLoaded) {
      setShowLoader(false);
      setIsLoading(false);
      return;
    }

    // Simulate loading progress
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        // Accelerating progress
        const increment = prev < 70 ? 3 : prev < 90 ? 2 : 1;
        return Math.min(prev + increment, 100);
      });
    }, 40);

    // Complete loading
    const timer = setTimeout(() => {
      setIsLoading(false);
      sessionStorage.setItem("starline-loaded", "true");
    }, 2800);

    return () => {
      clearInterval(progressInterval);
      clearTimeout(timer);
    };
  }, []);

  if (!showLoader) return null;

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            transition: { duration: 0.5, ease: [0.645, 0.045, 0.355, 1] },
          }}
          onAnimationComplete={() => !isLoading && setShowLoader(false)}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-gradient-to-br from-slate-950 via-brand-primary to-slate-900 overflow-hidden"
        >
          {/* Animated Background Grid */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:4rem_4rem]" />
          </div>

          {/* Floating Glass Shards */}
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute border border-white/10 bg-white/5 backdrop-blur-sm"
              style={{
                width: 60 + i * 20,
                height: 60 + i * 20,
                left: `${15 + i * 15}%`,
                top: `${20 + (i % 3) * 25}%`,
              }}
              initial={{ opacity: 0, rotate: 45, scale: 0 }}
              animate={{
                opacity: [0, 0.3, 0],
                rotate: [45, 50, 45],
                scale: [0, 1, 0.8],
                y: [0, -30, 0],
              }}
              transition={{
                duration: 3,
                delay: i * 0.2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}

          {/* Light Rays from Center */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute h-[200vh] w-1 bg-gradient-to-t from-transparent via-white/20 to-transparent origin-center"
                style={{
                  rotate: `${i * 45}deg`,
                }}
                initial={{ opacity: 0, scaleY: 0 }}
                animate={{
                  opacity: [0, 0.3, 0],
                  scaleY: [0, 1, 0],
                }}
                transition={{
                  duration: 2,
                  delay: 0.5 + i * 0.1,
                  repeat: Infinity,
                  repeatDelay: 1,
                  ease: "easeOut",
                }}
              />
            ))}
          </div>

          {/* Glowing Orbs */}
          <motion.div
            className="absolute w-96 h-96 rounded-full bg-brand-secondary/20 blur-[100px]"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute w-64 h-64 rounded-full bg-blue-500/20 blur-[80px]"
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* Main Content Container */}
          <div className="relative z-10 flex flex-col items-center">
            {/* Logo Container with Glass Effect */}
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{
                duration: 1,
                ease: [0.175, 0.885, 0.32, 1.275],
              }}
              className="relative"
            >
              {/* Rotating Ring */}
              <motion.div
                className="absolute -inset-8 rounded-full border-2 border-dashed border-white/20"
                animate={{ rotate: 360 }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />

              {/* Pulsing Glow Behind Logo */}
              <motion.div
                className="absolute -inset-4 rounded-full bg-gradient-to-r from-brand-secondary/40 via-white/30 to-brand-secondary/40 blur-xl"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 0.8, 0.5],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              {/* Glass Container */}
              <motion.div
                className="relative w-32 h-32 sm:w-40 sm:h-40 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center overflow-hidden"
                animate={{
                  boxShadow: [
                    "0 0 30px rgba(255,255,255,0.1)",
                    "0 0 60px rgba(255,255,255,0.2)",
                    "0 0 30px rgba(255,255,255,0.1)",
                  ],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                {/* Shine Effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12"
                  initial={{ x: "-100%" }}
                  animate={{ x: "200%" }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    repeatDelay: 1,
                    ease: "easeInOut",
                  }}
                />

                {/* Logo */}
                <Image
                  src="/logo/star-line-logo.png"
                  alt="Star Line Glass"
                  width={120}
                  height={120}
                  className="w-24 h-24 sm:w-28 sm:h-28 object-contain relative z-10 drop-shadow-2xl"
                  priority
                />
              </motion.div>
            </motion.div>

            {/* Company Name */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="mt-8 text-center"
            >
              <motion.h1 className="text-2xl sm:text-3xl font-bold tracking-wider">
                {"STAR LINE".split("").map((char, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      delay: 0.8 + i * 0.05,
                      duration: 0.4,
                      ease: [0.215, 0.61, 0.355, 1],
                    }}
                    className="inline-block text-white"
                    style={{ marginRight: char === " " ? "0.3em" : "0.02em" }}
                  >
                    {char === " " ? "\u00A0" : char}
                  </motion.span>
                ))}
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, scaleX: 0 }}
                animate={{ opacity: 1, scaleX: 1 }}
                transition={{ delay: 1.3, duration: 0.5 }}
                className="text-sm sm:text-base text-white/60 tracking-[0.3em] mt-1 origin-left"
              >
                GLASS INDUSTRIES
              </motion.p>
            </motion.div>

            {/* Progress Bar */}
            <motion.div
              initial={{ opacity: 0, width: 0 }}
              animate={{ opacity: 1, width: "200px" }}
              transition={{ delay: 1, duration: 0.5 }}
              className="mt-10 relative"
            >
              {/* Track */}
              <div className="w-[200px] h-1 bg-white/10 rounded-full overflow-hidden backdrop-blur-sm">
                {/* Progress Fill */}
                <motion.div
                  className="h-full bg-gradient-to-r from-brand-secondary via-white to-brand-secondary rounded-full"
                  style={{ width: `${progress}%` }}
                  transition={{ duration: 0.1 }}
                />
              </div>

              {/* Progress Text */}
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2 }}
                className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-xs text-white/50 font-mono"
              >
                {progress}%
              </motion.span>
            </motion.div>

            {/* Loading Text */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5 }}
              className="mt-10 flex items-center gap-2 text-white/40 text-sm"
            >
              <span>Crafting Excellence</span>
              <motion.span
                animate={{ opacity: [0, 1, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                ...
              </motion.span>
            </motion.div>
          </div>

          {/* Bottom Decorative Line */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2 w-1/3 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"
          />

          {/* Corner Accents */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="absolute top-8 left-8 w-16 h-16 border-l-2 border-t-2 border-white/20"
          />
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="absolute top-8 right-8 w-16 h-16 border-r-2 border-t-2 border-white/20"
          />
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="absolute bottom-8 left-8 w-16 h-16 border-l-2 border-b-2 border-white/20"
          />
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="absolute bottom-8 right-8 w-16 h-16 border-r-2 border-b-2 border-white/20"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}

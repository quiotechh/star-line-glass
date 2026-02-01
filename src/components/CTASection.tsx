"use client";

import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Phone, Sparkles } from "lucide-react";

// Animated counter hook
function useAnimatedCounter(end: number, duration: number = 2, startOnView: boolean = true) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const hasStarted = useRef(false);

  useEffect(() => {
    if (startOnView && !isInView) return;
    if (hasStarted.current) return;
    hasStarted.current = true;

    let startTime: number;
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(easeOutQuart * end));
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    requestAnimationFrame(animate);
  }, [end, duration, isInView, startOnView]);

  return { count, ref };
}

// Pre-generated particle positions to avoid hydration mismatch
const PARTICLE_CONFIGS = [
  { x: 120, y: 50, scale: 0.7, duration: 5, delay: 0.5 },
  { x: 350, y: 150, scale: 0.9, duration: 6, delay: 1.2 },
  { x: 580, y: 80, scale: 0.6, duration: 4.5, delay: 2 },
  { x: 800, y: 200, scale: 0.8, duration: 7, delay: 0.8 },
  { x: 1000, y: 120, scale: 0.5, duration: 5.5, delay: 1.5 },
  { x: 200, y: 300, scale: 0.75, duration: 6.5, delay: 2.5 },
  { x: 450, y: 400, scale: 0.85, duration: 4, delay: 3 },
  { x: 650, y: 350, scale: 0.65, duration: 7.5, delay: 0.3 },
  { x: 900, y: 280, scale: 0.95, duration: 5, delay: 1.8 },
  { x: 1100, y: 450, scale: 0.55, duration: 6, delay: 2.8 },
  { x: 50, y: 500, scale: 0.7, duration: 4.8, delay: 3.5 },
  { x: 280, y: 550, scale: 0.8, duration: 5.2, delay: 0.6 },
  { x: 520, y: 480, scale: 0.6, duration: 6.8, delay: 1.1 },
  { x: 750, y: 520, scale: 0.9, duration: 4.2, delay: 2.3 },
  { x: 980, y: 380, scale: 0.75, duration: 5.8, delay: 3.2 },
];

// Floating particles component
function FloatingParticles() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {PARTICLE_CONFIGS.map((config, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-white/30 rounded-full"
          style={{
            left: `${(config.x / 1200) * 100}%`,
            top: config.y,
          }}
          initial={{
            scale: config.scale,
            opacity: 0,
          }}
          animate={{
            y: [0, -100],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: config.duration,
            repeat: Infinity,
            delay: config.delay,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
}

// Magnetic button component
function MagneticButton({ children, href, className, variant = "primary" }: {
  children: React.ReactNode;
  href: string;
  className?: string;
  variant?: "primary" | "whatsapp";
}) {
  const ref = useRef<HTMLAnchorElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { damping: 15, stiffness: 150 };
  const xSpring = useSpring(x, springConfig);
  const ySpring = useSpring(y, springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set((e.clientX - centerX) * 0.15);
    y.set((e.clientY - centerY) * 0.15);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.a
      ref={ref}
      href={href}
      target={variant === "whatsapp" ? "_blank" : undefined}
      rel={variant === "whatsapp" ? "noopener noreferrer" : undefined}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x: xSpring, y: ySpring }}
      whileTap={{ scale: 0.95 }}
      className={className}
    >
      {children}
    </motion.a>
  );
}

// Shimmer text component
function ShimmerText({ children, className }: { children: string; className?: string }) {
  return (
    <span className={`relative inline-block ${className}`}>
      <span className="relative z-10">{children}</span>
      <motion.span
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent z-20"
        initial={{ x: "-100%" }}
        animate={{ x: "200%" }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
          repeatDelay: 3,
          ease: "easeInOut",
        }}
        style={{ WebkitBackgroundClip: "text" }}
      />
    </span>
  );
}

// Word by word reveal animation
function AnimatedHeading({ text, className, delay = 0 }: { text: string; className?: string; delay?: number }) {
  const words = text.split(" ");

  return (
    <span>
      {words.map((word, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 30, rotateX: -40 }}
          whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.6,
            delay: delay + i * 0.08,
            ease: [0.215, 0.61, 0.355, 1],
          }}
          className={`inline-block mr-[0.25em] ${className || ""}`}
          style={{ transformStyle: "preserve-3d" }}
        >
          {word}
        </motion.span>
      ))}
    </span>
  );
}

// Stat card with animated counter
function StatCard({ number, suffix, label, delay }: { number: number; suffix: string; label: string; delay: number }) {
  const { count, ref } = useAnimatedCounter(number, 2);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay, ease: [0.215, 0.61, 0.355, 1] }}
      whileHover={{ scale: 1.1, y: -5 }}
      className="text-center group cursor-default relative"
    >
      {/* Glow effect on hover */}
      <motion.div
        className="absolute inset-0 bg-white/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
      />
      <div className="relative">
        <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white group-hover:text-brand-secondary transition-colors duration-300">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            {count}
          </motion.span>
          <span>{suffix}</span>
        </div>
        <motion.div
          className="text-xs sm:text-sm text-white/60 mt-2 group-hover:text-white/80 transition-colors duration-300"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: delay + 0.3 }}
        >
          {label}
        </motion.div>
      </div>
    </motion.div>
  );
}

export default function CTASection() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      {/* Animated Gradient Background */}
      <motion.div
        className="absolute inset-0"
        animate={{
          background: [
            "linear-gradient(135deg, #1e3a5f 0%, #312e81 50%, #0f172a 100%)",
            "linear-gradient(135deg, #312e81 0%, #1e3a5f 50%, #0f172a 100%)",
            "linear-gradient(135deg, #1e3a5f 0%, #312e81 50%, #0f172a 100%)",
          ],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Animated Grid Pattern */}
      <div className="absolute inset-0 opacity-10">
        <motion.div
          className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff15_1px,transparent_1px),linear-gradient(to_bottom,#ffffff15_1px,transparent_1px)] bg-[size:3rem_3rem]"
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%"],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>

      {/* Floating Particles */}
      <FloatingParticles />

      {/* Floating Decorative Orbs */}
      <motion.div
        className="absolute top-10 left-10 w-72 h-72 bg-gradient-to-br from-white/20 to-transparent rounded-full blur-3xl"
        animate={{
          scale: [1, 1.4, 1],
          opacity: [0.15, 0.3, 0.15],
          x: [0, 50, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-10 right-10 w-96 h-96 bg-gradient-to-tl from-brand-secondary/30 to-transparent rounded-full blur-3xl"
        animate={{
          scale: [1.3, 1, 1.3],
          opacity: [0.15, 0.35, 0.15],
          x: [0, -50, 0],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Animated Glass Shards */}
      <motion.div
        className="absolute top-1/4 right-1/4 w-40 h-40 border border-white/10 rotate-45"
        animate={{
          rotate: [45, 55, 45],
          opacity: [0.05, 0.15, 0.05],
          scale: [1, 1.1, 1],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-1/4 left-1/4 w-28 h-28 border border-white/10 rotate-12"
        animate={{
          rotate: [12, 22, 12],
          opacity: [0.05, 0.15, 0.05],
          scale: [1, 1.15, 1],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-1/2 left-[16%] w-20 h-20 border border-white/5 -rotate-12"
        animate={{
          rotate: [-12, -5, -12],
          opacity: [0.03, 0.1, 0.03],
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Animated Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.215, 0.61, 0.355, 1] }}
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/10 backdrop-blur-md rounded-full text-white/90 text-sm mb-8 border border-white/10"
          >
            <motion.div
              animate={{
                rotate: [0, 15, -15, 0],
                scale: [1, 1.2, 1.2, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatDelay: 3,
                ease: "easeInOut"
              }}
            >
              <Sparkles className="w-4 h-4 text-brand-secondary" />
            </motion.div>
            <ShimmerText>Transform Your Space Today</ShimmerText>
          </motion.div>

          {/* Animated Heading */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-6 leading-tight">
            <AnimatedHeading text="Ready to Elevate Your" delay={0.2} />
            <br />
            <AnimatedHeading
              text="Architecture with Premium Glass?"
              delay={0.6}
              className="text-blue-200"
            />
          </h2>

          {/* Animated Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-lg sm:text-xl text-white/70 mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            Get expert consultation and competitive quotes for your project.
            Our team is ready to bring your vision to life with world-class
            glass solutions.
          </motion.p>

          {/* CTA Buttons with Magnetic Effect */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 1 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-5 mb-16"
          >
            {/* Primary CTA - Phone */}
            <MagneticButton
              href="tel:+919811031849"
              variant="primary"
              className="group relative w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-white text-brand-primary font-bold px-8 py-4 rounded-xl transition-all duration-300 shadow-lg shadow-white/25 hover:shadow-2xl hover:shadow-white/40 overflow-hidden"
            >
              {/* Animated background gradient */}
              <motion.span
                className="absolute inset-0 bg-gradient-to-r from-brand-secondary via-red-500 to-brand-secondary bg-[length:200%_100%]"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />

              {/* Shine effect */}
              <motion.span
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent -skew-x-12"
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%" }}
                transition={{ duration: 0.6 }}
              />

              {/* Pulse ring */}
              <motion.span
                className="absolute inset-0 rounded-xl border-2 border-white/50"
                animate={{
                  scale: [1, 1.05, 1],
                  opacity: [0.5, 0, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              <motion.div
                animate={{ rotate: [0, 15, -15, 0] }}
                transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 2 }}
              >
                <Phone className="w-5 h-5 relative z-10 transition-colors duration-300" />
              </motion.div>
              <span className="relative z-10  transition-colors duration-300">
                Call Now: +91 98110 31849
              </span>
            </MagneticButton>

            {/* Secondary CTA - WhatsApp */}
            <MagneticButton
              href="https://wa.me/919811031849?text=Hi%2C%20I%27d%20like%20to%20inquire%20about%20your%20glass%20products"
              variant="whatsapp"
              className="group relative w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#20BA5A] text-white font-bold px-8 py-4 rounded-xl transition-all duration-300 shadow-lg shadow-green-500/30 hover:shadow-2xl hover:shadow-green-500/50 overflow-hidden"
            >
              {/* Shine effect */}
              <motion.span
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12"
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%" }}
                transition={{ duration: 0.6 }}
              />

              {/* Pulse effect */}
              <motion.span
                className="absolute inset-0 rounded-xl"
                animate={{
                  boxShadow: [
                    "0 0 0 0 rgba(37, 211, 102, 0.4)",
                    "0 0 0 10px rgba(37, 211, 102, 0)",
                    "0 0 0 0 rgba(37, 211, 102, 0)",
                  ],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              <motion.svg
                className="w-5 h-5 relative z-10"
                fill="currentColor"
                viewBox="0 0 24 24"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </motion.svg>
              <span className="relative z-10">WhatsApp Us</span>
            </MagneticButton>
          </motion.div>

          {/* Animated Trust Indicators with Counters */}
          <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12 lg:gap-16">
            <StatCard number={15} suffix="+" label="Years Experience" delay={1.2} />
            <StatCard number={500} suffix="+" label="Projects Completed" delay={1.4} />
            <StatCard number={100} suffix="%" label="Quality Assured" delay={1.6} />
          </div>
        </div>

        {/* Animated Bottom Line */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          whileInView={{ scaleX: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 1.8, ease: [0.215, 0.61, 0.355, 1] }}
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2/3 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent"
        />
      </div>

      {/* Wave Divider at Bottom */}
      <div className="absolute bottom-0 left-0 right-0 translate-y-px">
        <motion.svg
          viewBox="0 0 1440 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto"
          preserveAspectRatio="none"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <motion.path
            d="M0 60L48 55C96 50 192 40 288 35C384 30 480 30 576 32.5C672 35 768 40 864 42.5C960 45 1056 45 1152 42.5C1248 40 1344 35 1392 32.5L1440 30V60H1392C1344 60 1248 60 1152 60C1056 60 960 60 864 60C768 60 672 60 576 60C480 60 384 60 288 60C192 60 96 60 48 60H0Z"
            fill="black"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, delay: 0.5, ease: "easeInOut" }}
          />
        </motion.svg>
      </div>

    </section>
  );
}

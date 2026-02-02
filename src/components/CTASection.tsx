"use client";

import { useRef, useEffect, useState } from "react";
import { Phone, Sparkles } from "lucide-react";

// Animated counter hook - uses requestAnimationFrame for performance
function useAnimatedCounter(end: number, duration: number = 2) {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasStarted) {
          setHasStarted(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [hasStarted]);

  useEffect(() => {
    if (!hasStarted) return;

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
  }, [end, duration, hasStarted]);

  return { count, ref };
}

// Stat card with animated counter
function StatCard({ number, suffix, label }: { number: number; suffix: string; label: string }) {
  const { count, ref } = useAnimatedCounter(number, 2);

  return (
    <div
      ref={ref}
      className="text-center group cursor-default relative animate-fade-in-up"
    >
      <div className="relative">
        <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white group-hover:text-brand-secondary transition-colors duration-300">
          <span>{count}</span>
          <span>{suffix}</span>
        </div>
        <div className="text-xs sm:text-sm text-white/60 mt-2 group-hover:text-white/80 transition-colors duration-300">
          {label}
        </div>
      </div>
    </div>
  );
}

export default function CTASection() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden bg-gradient-to-br from-[#1e3a5f] via-[#312e81] to-[#0f172a]">
      {/* Static decorative orbs - CSS only, no JS animations */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-gradient-to-br from-white/10 to-transparent rounded-full blur-3xl opacity-20" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-gradient-to-tl from-brand-secondary/20 to-transparent rounded-full blur-3xl opacity-20" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/10 backdrop-blur-md rounded-full text-white/90 text-sm mb-8 border border-white/10 animate-fade-in">
            <Sparkles className="w-4 h-4 text-brand-secondary" />
            <span>Transform Your Space Today</span>
          </div>

          {/* Heading - simple fade in */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-6 leading-tight animate-fade-in-up">
            Ready to Elevate Your
            <br />
            <span className="text-blue-200">Architecture with Premium Glass?</span>
          </h2>

          {/* Subheading */}
          <p className="text-lg sm:text-xl text-white/70 mb-12 max-w-2xl mx-auto leading-relaxed animate-fade-in-up animation-delay-200">
            Get expert consultation and competitive quotes for your project.
            Our team is ready to bring your vision to life with world-class
            glass solutions.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-5 mb-16 animate-fade-in-up animation-delay-300">
            {/* Primary CTA - Phone */}
            <a
              href="tel:+919811031849"
              className="group relative w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-white text-brand-primary font-bold px-8 py-4 rounded-xl transition-all duration-300 shadow-lg shadow-white/25 hover:shadow-2xl hover:shadow-white/40 hover:scale-105 active:scale-95 overflow-hidden"
            >
              <Phone className="w-5 h-5 transition-transform group-hover:rotate-12" />
              <span>Call Now: +91 98110 31849</span>
            </a>

            {/* Secondary CTA - WhatsApp */}
            <a
              href="https://wa.me/919811031849?text=Hi%2C%20I%27d%20like%20to%20inquire%20about%20your%20glass%20products"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#20BA5A] text-white font-bold px-8 py-4 rounded-xl transition-all duration-300 shadow-lg shadow-green-500/30 hover:shadow-2xl hover:shadow-green-500/50 hover:scale-105 active:scale-95 overflow-hidden"
            >
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              <span>WhatsApp Us</span>
            </a>
          </div>

          {/* Trust Indicators with Counters */}
          <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12 lg:gap-16">
            <StatCard number={20} suffix="+" label="Years Experience" />
            <StatCard number={500} suffix="+" label="Projects Completed" />
            <StatCard number={100} suffix="%" label="Quality Assured" />
          </div>
        </div>

        {/* Bottom Line */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2/3 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />
      </div>

      {/* Wave Divider at Bottom */}
      <div className="absolute bottom-0 left-0 right-0 translate-y-px">
        <svg
          viewBox="0 0 1440 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto"
          preserveAspectRatio="none"
        >
          <path
            d="M0 60L48 55C96 50 192 40 288 35C384 30 480 30 576 32.5C672 35 768 40 864 42.5C960 45 1056 45 1152 42.5C1248 40 1344 35 1392 32.5L1440 30V60H1392C1344 60 1248 60 1152 60C1056 60 960 60 864 60C768 60 672 60 576 60C480 60 384 60 288 60C192 60 96 60 48 60H0Z"
            fill="black"
          />
        </svg>
      </div>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.6s ease-out forwards;
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out forwards;
        }

        .animation-delay-200 {
          animation-delay: 0.2s;
          opacity: 0;
        }

        .animation-delay-300 {
          animation-delay: 0.3s;
          opacity: 0;
        }
      `}</style>
    </section>
  );
}

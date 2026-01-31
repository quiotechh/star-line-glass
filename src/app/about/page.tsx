'use client';

import type { Metadata } from "next";
import { useState, useEffect, useRef } from 'react';
import { CheckCircle, Target, Eye, Sparkles } from 'lucide-react';

// export const metadata: Metadata = {
//   title: "About Us - Star Line Glass",
//   description: "Learn about Star Line Glass, our history, values, and commitment to providing premium glass solutions.",
// };

const features = [
  {
    icon: CheckCircle,
    title: "Quality Assurance",
    description: "Every product undergoes rigorous testing to ensure superior quality and durability."
  },
  {
    icon: Target,
    title: "Precision Manufacturing",
    description: "State-of-the-art technology for accurate and consistent glass production."
  },
  {
    icon: Sparkles,
    title: "Innovation Driven",
    description: "Continuously evolving with the latest trends and technologies in glass manufacturing."
  }
];

export default function AboutPage() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState('mission');
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className="relative overflow-hidden bg-gradient-to-br from-gray-50 to-white py-16 md:py-24">
      {/* Animated Background Elements */}
      <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-[#13007D]/5 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 h-96 w-96 rounded-full bg-[#FB0309]/5 blur-3xl"></div>

      <div className="container relative mx-auto px-4 md:px-8 lg:px-16">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Left Side - Content */}
          <div
            className={`transition-all duration-1000 ${
              isVisible ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'
            }`}
          >
            {/* Section Header */}
            <div className="mb-8">
              <h2 className="mb-3 text-4xl font-bold text-[#13007D] md:text-5xl">
                About <span className="text-[#FB0309]">Star Glass Line</span>
              </h2>
              <div className="h-1 w-24 bg-[#FB0309]"></div>
            </div>

            {/* Description */}
            <p className="mb-6 text-lg leading-relaxed text-gray-700">
              Star Glass Line Industries is a leading manufacturer of premium glass products, 
              serving diverse industries with excellence for over 15 years. We combine traditional 
              craftsmanship with modern technology to deliver superior glass solutions.
            </p>

            {/* Interactive Tabs */}
            <div className="mb-8">
              <div className="mb-4 flex gap-2 border-b border-gray-200">
                <button
                  onClick={() => setActiveTab('mission')}
                  className={`relative px-6 py-3 font-semibold transition-all ${
                    activeTab === 'mission'
                      ? 'text-[#FB0309]'
                      : 'text-gray-600 hover:text-[#13007D]'
                  }`}
                >
                  <Eye className="mb-1 inline-block h-5 w-5" /> Mission
                  {activeTab === 'mission' && (
                    <div className="absolute bottom-0 left-0 h-1 w-full bg-[#FB0309]"></div>
                  )}
                </button>
                <button
                  onClick={() => setActiveTab('vision')}
                  className={`relative px-6 py-3 font-semibold transition-all ${
                    activeTab === 'vision'
                      ? 'text-[#FB0309]'
                      : 'text-gray-600 hover:text-[#13007D]'
                  }`}
                >
                  <Target className="mb-1 inline-block h-5 w-5" /> Vision
                  {activeTab === 'vision' && (
                    <div className="absolute bottom-0 left-0 h-1 w-full bg-[#FB0309]"></div>
                  )}
                </button>
              </div>

              {/* Tab Content */}
              <div className="rounded-lg bg-white p-6 shadow-md">
                {activeTab === 'mission' && (
                  <div className="animate-fadeIn">
                    <p className="text-gray-700">
                      To provide world-class glass manufacturing solutions that exceed customer 
                      expectations through innovation, quality, and sustainable practices. We are 
                      committed to building lasting relationships with our clients.
                    </p>
                  </div>
                )}
                {activeTab === 'vision' && (
                  <div className="animate-fadeIn">
                    <p className="text-gray-700">
                      To be the most trusted and preferred glass manufacturing partner globally, 
                      recognized for our commitment to excellence, innovation, and environmental 
                      responsibility in every product we create.
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* Features */}
            <div className="space-y-4">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div
                    key={index}
                    className={`group flex items-start gap-4 rounded-lg border border-gray-100 bg-white p-4 transition-all duration-500 hover:border-[#FB0309] hover:shadow-lg ${
                      isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
                    }`}
                    style={{ transitionDelay: `${index * 150}ms` }}
                  >
                    <div className="rounded-full bg-[#13007D]/10 p-3 transition-all group-hover:bg-[#13007D]/20">
                      <Icon className="h-6 w-6 text-[#13007D]" />
                    </div>
                    <div>
                      <h4 className="mb-1 font-semibold text-gray-800">{feature.title}</h4>
                      <p className="text-sm text-gray-600">{feature.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Side - Image Grid */}
          <div
            className={`transition-all duration-1000 delay-300 ${
              isVisible ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'
            }`}
          >
            <div className="relative">
              {/* Main Image */}
              <div className="group relative overflow-hidden rounded-2xl shadow-2xl">
                {/* <img
                  src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80"
                  alt="Glass Manufacturing"
                  className="h-96 w-full object-cover transition-transform duration-700 group-hover:scale-110"
                /> */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#13007D]/60 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>
              </div>

              {/* Floating Cards */}
              <div className="absolute -bottom-6 -left-6 rounded-xl bg-white p-6 shadow-xl transition-transform hover:scale-105">
                <div className="text-center">
                  <p className="text-3xl font-bold text-[#FB0309]">15+</p>
                  <p className="text-sm font-semibold text-gray-600">Years Experience</p>
                </div>
              </div>

              <div className="absolute -right-6 -top-6 rounded-xl bg-[#13007D] p-6 shadow-xl transition-transform hover:scale-105">
                <div className="text-center">
                  <p className="text-3xl font-bold text-white">500+</p>
                  <p className="text-sm font-semibold text-white/90">Projects Done</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out;
        }
      `}</style>
    </section>
  );
}

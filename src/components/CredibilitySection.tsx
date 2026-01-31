'use client';

import { Award, Users, Briefcase, Factory } from 'lucide-react';

const stats = [
  {
    icon: Factory,
    number: "15+",
    label: "Years of Excellence",
    description: "Manufacturing Quality Glass"
  },
  {
    icon: Briefcase,
    number: "500+",
    label: "Projects Completed",
    description: "Across Multiple Industries"
  },
  {
    icon: Users,
    number: "300+",
    label: "Happy Clients",
    description: "Trust Our Quality"
  },
  {
    icon: Award,
    number: "ISO",
    label: "Certified Quality",
    description: "International Standards"
  }
];

export default function CredibilitySection() {
  return (
    <section className="relative bg-white py-12 sm:py-16 md:py-20">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-16">
        {/* Section Header */}
        <div className="mb-8 text-center sm:mb-10 md:mb-12">
          <h2 className="mb-2 text-2xl font-bold text-[#13007D] sm:mb-3 sm:text-3xl md:text-4xl">
            Trusted by Industry Leaders
          </h2>
          <div className="mx-auto h-1 w-20 bg-[#FB0309] sm:w-24"></div>
        </div>

        {/* Stats Grid - Responsive columns */}
        <div className="grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-4 md:gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="group flex flex-col items-center rounded-lg border border-gray-200 bg-linear-to-br from-gray-50 to-white p-4 text-center transition-all duration-300 hover:border-[#FB0309] hover:shadow-xl sm:p-5 md:p-6"
              >
                {/* Icon */}
                <div className="mb-3 rounded-full bg-[#13007D]/10 p-3 transition-all duration-300 group-hover:bg-[#13007D]/20 sm:mb-4 sm:p-4">
                  <Icon className="h-6 w-6 text-[#13007D] transition-transform duration-300 group-hover:scale-110 sm:h-7 sm:w-7 md:h-8 md:w-8" />
                </div>

                {/* Number */}
                <h3 className="mb-1 text-3xl font-bold text-[#13007D] sm:mb-2 sm:text-4xl md:text-5xl">
                  {stat.number}
                </h3>

                {/* Label */}
                <p className="mb-1 text-sm font-semibold text-gray-800 sm:text-base md:text-lg">
                  {stat.label}
                </p>

                {/* Description */}
                <p className="text-xs text-gray-600 sm:text-sm">
                  {stat.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Certifications/Logos Section */}
        <div className="mt-12 sm:mt-14 md:mt-16">
          <p className="mb-4 text-center text-xs font-semibold uppercase tracking-wider text-gray-500 sm:mb-6 sm:text-sm">
            Certified & Trusted
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 md:gap-8 lg:gap-12">
            {/* Replace with actual certification logos */}
            <div className="flex h-14 w-20 items-center justify-center rounded-md border border-gray-200 bg-white px-3 grayscale transition-all hover:grayscale-0 sm:h-16 sm:w-24 sm:px-4">
              <span className="text-xs font-semibold text-gray-600">ISO 9001</span>
            </div>
            <div className="flex h-14 w-20 items-center justify-center rounded-md border border-gray-200 bg-white px-3 grayscale transition-all hover:grayscale-0 sm:h-16 sm:w-24 sm:px-4">
              <span className="text-xs font-semibold text-gray-600">CE Certified</span>
            </div>
            <div className="flex h-14 w-20 items-center justify-center rounded-md border border-gray-200 bg-white px-3 grayscale transition-all hover:grayscale-0 sm:h-16 sm:w-24 sm:px-4">
              <span className="text-xs font-semibold text-gray-600">BIS Approved</span>
            </div>
            <div className="flex h-14 w-20 items-center justify-center rounded-md border border-gray-200 bg-white px-3 grayscale transition-all hover:grayscale-0 sm:h-16 sm:w-24 sm:px-4">
              <span className="text-xs font-semibold text-gray-600">IGBC Member</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
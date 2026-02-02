"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function PageLoader() {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [showLoader, setShowLoader] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

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
        const increment = prev < 60 ? 4 : prev < 85 ? 3 : 2;
        return Math.min(prev + increment, 100);
      });
    }, 30);

    // Complete loading
    const timer = setTimeout(() => {
      setFadeOut(true);
      sessionStorage.setItem("starline-loaded", "true");
      setTimeout(() => {
        setIsLoading(false);
        setShowLoader(false);
      }, 500);
    }, 2000);

    return () => {
      clearInterval(progressInterval);
      clearTimeout(timer);
    };
  }, []);

  if (!showLoader || !isLoading) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center bg-white transition-opacity duration-500 ${
        fadeOut ? "opacity-0" : "opacity-100"
      }`}
    >
      {/* Main Content */}
      <div className="flex flex-col items-center">
        {/* Logo */}
        <div className="relative mb-8">
          <Image
            src="/logo/star-line-logo.png"
            alt="Star Line Glass"
            width={140}
            height={140}
            className="w-28 h-28 sm:w-36 sm:h-36 object-contain"
            priority
          />
        </div>

        {/* Company Name */}
        <div className="text-center mb-8">
          <h1 className="text-2xl sm:text-3xl font-bold tracking-wide text-[#13007D]">
            STAR LINE
          </h1>
          <p className="text-sm text-gray-500 tracking-[0.2em] mt-1">
            GLASS INDUSTRIES
          </p>
        </div>

        {/* Progress Bar */}
        <div className="w-48 sm:w-56">
          {/* Track */}
          <div className="w-full h-1 bg-gray-200 rounded-full overflow-hidden">
            {/* Progress Fill */}
            <div
              className="h-full bg-[#13007D] rounded-full transition-all duration-100 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>

          {/* Loading Text */}
          <p className="text-center text-xs text-gray-400 mt-3">
            Loading...
          </p>
        </div>
      </div>
    </div>
  );
}

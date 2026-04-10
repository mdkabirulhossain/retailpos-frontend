"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

const features = [
  {
    title: "Plan your schedules",
    description: "Streamline customer subscriptions and billing with automated scheduling tools.",
    image: "/images/FeatureSlider/bottom-hero-slider.png",
  },
  {
    title: "Analytics & insights",
    description: "Transform your business data into actionable insights with real-time analytics.",
    image: "/images/FeatureSlider/bottom-hero-slider-image2.png",
  },
  {
    title: "Collaborate seamlessly",
    description: "Keep your team aligned with shared dashboards and collaborative workflows.",
    image: "/images/FeatureSlider/bottom-hero-slider-image3.png",
  }
];

const FeatureSlider = () => {
  const [index, setIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = 5000; // 5 seconds
    const step = 100;
    const increment = 100 / (interval / step);

    const timer = setTimeout(() => {
      if (progress + increment >= 100) {
        setIndex((prevIndex) => (prevIndex + 1) % features.length);
        setProgress(0);
      } else {
        setProgress(progress + increment);
      }
    }, step);

    return () => clearTimeout(timer);
  }, [index, progress]);

  return (
    <section className="pb-20 bg-[#f7f5f3] overflow-hidden">
      <div className="max-w-6xl mx-auto px-4">
        
        {/* Image Display Area */}
        <div className="relative aspect-[16/9] w-full mb-12 rounded-xl overflow-hidden shadow-2xl bg-white border border-gray-200/50">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="relative w-full h-full"
            >
              <Image
                src={features[index].image}
                alt={features[index].title}
                fill
                className="object-cover p-4 md:p-8"
                priority
              />
            </motion.div>
          </AnimatePresence>
        </div>

      </div>

      {/* Navigation Tabs Full Width Wrapper */}
      <div className="relative border-t border-gray-200 w-full">
        {/* Left & Right Remaining Parts Background Pattern */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[repeating-linear-gradient(45deg,transparent,transparent_10px,#000_10px,#000_11px)]" />

        <div className="max-w-6xl mx-auto px-4 relative z-10 w-full">
          <div className="grid grid-cols-1 md:grid-cols-3 bg-[#f7f5f3] border-x border-gray-200">
            {features.map((feature, i) => {
            const isActive = i === index;
            return (
              <button
                key={i}
                onClick={() => {
                  setIndex(i);
                  setProgress(0);
                }}
                className={`relative pt-6 pb-8 px-8 text-left transition-all duration-300 ${
                  isActive ? "bg-white" : "hover:bg-gray-50/50"
                } border-r last:border-r-0 border-gray-200`}
              >
                {/* Top Progress Bar */}
                {isActive && (
                  <motion.div 
                    className="absolute top-0 left-0 h-[3px] bg-[#33312e] z-10"
                    style={{ width: `${progress}%` }}
                  />
                )}
                <div className="absolute top-0 left-0 w-full h-[1px] bg-gray-200" />

                <h3 className={`text-lg font-semibold mb-2 transition-colors ${
                  isActive ? "text-[#33312e]" : "text-[#6b6967]"
                }`}>
                  {feature.title}
                </h3>
                <p className={`text-sm leading-relaxed transition-colors ${
                  isActive ? "text-[#33312e]/80" : "text-[#6b6967]/70"
                }`}>
                  {feature.description}
                </p>

                {/* Background Pattern for Inactive Tabs (as seen in image) */}
                {!isActive && (
                  <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[repeating-linear-gradient(45deg,transparent,transparent_10px,#000_10px,#000_11px)]" />
                )}
              </button>
            );


          })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSlider;
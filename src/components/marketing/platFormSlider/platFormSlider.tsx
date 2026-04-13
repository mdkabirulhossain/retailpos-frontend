"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

const features = [
  {
    title: "Plan your schedules",
    description: "Explore your data, build your dashboard, bring your team together.",
    image: "/images/FeatureSlider/bottom-hero-slider.png",
  },
  {
    title: "Data to insights in minutes",
    description: "Transform raw data into actionable insights with powerful analytics tools.",
    image: "/images/FeatureSlider/bottom-hero-slider-image2.png",
  },
  {
    title: "Collaborate seamlessly",
    description: "Work together in real-time with your team and share insights instantly.",
    image: "/images/FeatureSlider/bottom-hero-slider-image3.png",
  }
];

const PlatFormSlider = () => {
  const [index, setIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = 5000; 
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
    <section className="py-20 bg-[#f9f9f9] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Section */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center px-4 py-1.5 mb-6 rounded-full border border-gray-300 bg-white text-sm font-medium text-gray-700 shadow-sm">
            <span className="w-2 h-2 rounded-full border border-gray-400 mr-2"></span>
            Platform Features
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold text-[#33312e] tracking-tight mb-6">
            Streamline your <br className="hidden md:block" /> business operations
          </h2>
          <p className="text-base sm:text-xl text-gray-600 max-w-2xl leading-relaxed">
            Manage schedules, analyze data, and collaborate with your team all in one powerful platform.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Side: Navigation Tabs */}
          <div className="lg:col-span-4 space-y-4">
            {features.map((feature, i) => {
              const isActive = i === index;
              return (
                <button
                  key={i}
                  onClick={() => {
                    setIndex(i);
                    setProgress(0);
                  }}
                  className={`relative w-full text-left p-8 transition-all duration-300 rounded-lg border border-gray-200 ${
                    isActive 
                      ? "bg-white shadow-sm" 
                      : "bg-transparent hover:bg-gray-100/50"
                  }`}
                >
                  {/* Progress Line for Active Tab */}
                  {isActive && (
                    <div className="absolute top-0 left-0 w-full h-1 bg-gray-100 rounded-t-lg overflow-hidden">
                      <motion.div 
                        className="h-full bg-[#33312e]"
                        initial={{ width: 0 }}
                        animate={{ width: `${progress}%` }}
                        transition={{ ease: "linear" }}
                      />
                    </div>
                  )}

                  <h3 className={`text-xl font-bold mb-3 ${
                    isActive ? "text-[#33312e]" : "text-gray-500"
                  }`}>
                    {feature.title}
                  </h3>
                  <p className={`text-base leading-relaxed ${
                    isActive ? "text-gray-600" : "text-gray-400"
                  }`}>
                    {feature.description}
                  </p>
                </button>
              );
            })}
          </div>

          {/* Right Side: Image Display Area */}
          <div className="lg:col-span-8">
            <div className="relative aspect-4/3 w-full rounded-2xl overflow-hidden bg-[#e6f0ff] border border-gray-200 shadow-inner">
              <AnimatePresence mode="wait">
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.02 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="relative w-full h-full flex items-center justify-center"
                >
                  {/* Image/dashboard view taking full width */}
                  <div className="relative w-full h-full">
                    <Image
                      src={features[index].image}
                      alt={features[index].title}
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default PlatFormSlider;
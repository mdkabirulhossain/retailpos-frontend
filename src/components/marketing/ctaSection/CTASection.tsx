"use client";

import React from 'react';

const CTASection = () => {
  return (
    <section className="relative w-full py-24 overflow-hidden border-y border-gray-200">
      {/* The Diagonal Hatched Background Pattern */}
      <div 
        className="absolute inset-0 z-0 opacity-[0.05]" 
        style={{
          backgroundImage: `repeating-linear-gradient(
            45deg,
            #000,
            #000 1px,
            transparent 1px,
            transparent 10px
          )`
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold text-[#33312e] tracking-tight mb-8">
          Ready to transform your <br className="hidden md:block" /> business?
        </h2>
        
        <p className="text-base sm:text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed mb-12">
          Join thousands of businesses streamlining their operations, <br className="hidden sm:block" />
          managing schedules, and growing with data-driven insights.
        </p>

        <div className="flex justify-center">
          <button className="bg-[#33312e] text-white px-10 py-4 rounded-full font-bold text-sm transition-all hover:bg-black hover:scale-[1.02] active:scale-[0.98] shadow-lg">
            Start for free
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const PricingSection = () => {
  const [billingCycle, setBillingCycle] = useState<'annually' | 'monthly'>('annually');

  const plans = [
    {
      name: "Starter",
      description: "Perfect for individuals and small teams getting started.",
      price: billingCycle === 'annually' ? "0" : "0",
      buttonText: "Start for free",
      isDark: false,
      features: [
        "Up to 3 projects",
        "Basic documentation tools",
        "Community support",
        "Standard templates",
        "Basic analytics"
      ]
    },
    {
      name: "Professional",
      description: "Advanced features for growing teams and businesses.",
      price: billingCycle === 'annually' ? "16" : "20",
      buttonText: "Get started",
      isDark: true,
      features: [
        "Unlimited projects",
        "Advanced documentation tools",
        "Priority support",
        "Custom templates",
        "Advanced analytics",
        "Team collaboration",
        "API access",
        "Custom integrations"
      ]
    },
    {
      name: "Enterprise",
      description: "Complete solution for large organizations and enterprises.",
      price: billingCycle === 'annually' ? "160" : "190",
      buttonText: "Contact sales",
      isDark: false,
      features: [
        "Everything in Professional",
        "Dedicated account manager",
        "24/7 phone support",
        "Custom onboarding",
        "Advanced security features",
        "SSO integration",
        "Custom contracts",
        "White-label options"
      ]
    }
  ];

  return (
    <section className="py-24 bg-[#f9f9f9] min-h-screen">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Header Section */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center px-4 py-1 mb-6 rounded-full border border-gray-300 bg-white text-[12px] font-medium text-gray-600 shadow-sm">
            <span className="mr-1.5">$</span> Plans & Pricing
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-[#33312e] tracking-tight mb-8">
            Choose the perfect plan <br /> for your business
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl leading-relaxed">
            Scale your operations with flexible pricing that grows with your team. <br />
            Start free, upgrade when you&apos;re ready.
          </p>
        </div>

        {/* Custom Toggle Switch */}
        <div className="flex justify-center mb-16">
          <div className="bg-[#efefef] p-1 rounded-full flex items-center border border-gray-200 shadow-inner">
            <button
              onClick={() => setBillingCycle('annually')}
              className={`px-6 py-2 text-sm font-medium rounded-full transition-all duration-200 ${
                billingCycle === 'annually' 
                ? "bg-white text-[#33312e] shadow-md" 
                : "text-gray-500 hover:text-gray-700"
              }`}
            >
              Annually
            </button>
            <button
              onClick={() => setBillingCycle('monthly')}
              className={`px-6 py-2 text-sm font-medium rounded-full transition-all duration-200 ${
                billingCycle === 'monthly' 
                ? "bg-white text-[#33312e] shadow-md" 
                : "text-gray-500 hover:text-gray-700"
              }`}
            >
              Monthly
            </button>
          </div>
        </div>

        {/* Pricing Grid with Decorative Sides */}
        <div className="relative max-w-6xl mx-auto">
          {/* Background Decorative Hatched Pattern (Left/Right) */}
          <div className="absolute inset-y-0 -left-8 w-8 opacity-[0.08] pointer-events-none bg-[repeating-linear-gradient(45deg,transparent,transparent_5px,#000_5px,#000_6px)]" />
          <div className="absolute inset-y-0 -right-8 w-8 opacity-[0.08] pointer-events-none bg-[repeating-linear-gradient(45deg,transparent,transparent_5px,#000_5px,#000_6px)]" />

          <div className="grid grid-cols-1 md:grid-cols-3 border border-gray-200 bg-white shadow-sm overflow-hidden">
            {plans.map((plan, idx) => (
              <div 
                key={idx}
                className={`p-10 flex flex-col border-r last:border-r-0 border-gray-200 ${
                  plan.isDark ? "bg-[#33312e] text-white" : "bg-white text-[#33312e]"
                }`}
              >
                <h3 className="text-2xl font-bold mb-3">{plan.name}</h3>
                <p className={`text-sm mb-10 leading-relaxed ${plan.isDark ? "text-gray-400" : "text-gray-500"}`}>
                  {plan.description}
                </p>

                <div className="mb-10">
                  <div className="flex items-baseline gap-1">
                    <span className="text-6xl font-serif font-light tracking-tight">${plan.price}</span>
                  </div>
                  <p className={`text-xs mt-3 ${plan.isDark ? "text-gray-400" : "text-gray-500"}`}>
                    per year, per user.
                  </p>
                </div>

                <button className={`w-full py-4 rounded-full font-semibold transition-all mb-12 ${
                  plan.isDark 
                  ? "bg-white text-[#33312e] hover:bg-gray-100" 
                  : "bg-[#33312e] text-white hover:bg-black"
                }`}>
                  {plan.buttonText}
                </button>

                <ul className="space-y-4 flex-grow">
                  {plan.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-3">
                      <Check className={`w-4 h-4 mt-0.5 ${plan.isDark ? "text-orange-400" : "text-gray-400"}`} />
                      <span className={`text-sm ${plan.isDark ? "text-gray-300" : "text-gray-600"}`}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: "What is Brillance and who is it for?",
    answer: "Brillance is a comprehensive billing automation platform designed for businesses that need custom contract management. It's perfect for SaaS companies, service providers, and enterprises looking to streamline their billing processes."
  },
  {
    question: "How does the custom contract billing work?",
    answer: "Our platform allows you to define complex logic for every contract, including tiered pricing, usage-based billing, and custom renewal terms that automate based on your specific client agreements."
  },
  {
    question: "Can I integrate Brillance with my existing tools?",
    answer: "Yes, we offer native integrations with major CRMs, accounting software, and payment gateways. Our robust API also allows for custom connections to your internal tech stack."
  },
  {
    question: "What kind of support do you provide?",
    answer: "We provide 24/7 dedicated support for Enterprise clients and comprehensive documentation, community forums, and email support for all other tiers."
  },
  {
    question: "Is my data secure with Brillance?",
    answer: "Security is our top priority. We are SOC2 compliant, use AES-256 encryption for data at rest, and implement rigorous security audits to ensure your business data remains protected."
  },
  {
    question: "How do I get started with Brillance?",
    answer: "You can start by signing up for a free trial or scheduling a demo with our sales team to explore how Brillance can fit your specific business needs."
  }
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-[#f9f9f9]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          
          {/* Left Side: Header */}
          <div className="max-w-md">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#33312e] mb-6 md:mb-8 tracking-tight">
              Frequently Asked <br className="hidden md:block" /> Questions
            </h2>
            <p className="text-base sm:text-lg text-gray-500 leading-relaxed">
              Explore your data, build your dashboard, bring your team together.
            </p>
          </div>

          {/* Right Side: Accordion */}
          <div className="space-y-0">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;

              return (
                <div 
                  key={index} 
                  className="border-b border-gray-200 last:border-b-0"
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="w-full py-7 flex items-center justify-between text-left group"
                  >
                    <span className={`text-xl font-bold transition-colors ${
                      isOpen ? "text-[#33312e]" : "text-[#33312e]/80 group-hover:text-[#33312e]"
                    }`}>
                      {faq.question}
                    </span>
                    <ChevronDown 
                      className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="pb-8 text-gray-500 leading-relaxed text-[17px] max-w-xl">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
};

export default FAQSection;
"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqItems = [
  {
    question: "What certifications and documentation accompany the products you supply?",
    answer: `All supplied parts come with appropriate certification, including:

OEM/Manufacturer Certificate of Conformance (COC)
Airworthiness Review Certificate(ARC)`,
  },
  {
    question: "What is the warranty period for the units you supply?",
    answer: `Warranty periods vary by condition:

New units: 1 year
Serviceable units: 3–6 months
Repaired units: 1–3 months
Overhauled units: 6–9 months

Warranties begin from the date of delivery (or installation, where applicable) and cover defects in materials and workmanship.`,
  },
  {
    question: "What is the average shelf life for consumable parts you supply?",
    answer:
      "We supply consumables with a minimum remaining shelf life of 70% or above, ensuring maximum usability and compliance.",
  },
  {
    question: "How quickly can RDA deliver parts for an urgent Aircraft on Ground (AOG) situation?",
    answer:
      "RDA guarantees parts preparation for pickup within 90 minutes for urgent AOG situations. This is supported by our extensive UAE warehouse stocking over 400,000 parts and our dedicated 24/7 AOG response team.",
  },
];

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-black text-white pt-40 pb-20">
      {/* Container with same width & side gaps as other sections */}
      <div className="w-full max-w-[1200px] mx-auto grid md:grid-cols-2 gap-12 md:gap-20 px-[5vw] items-start">
        {/* Left Section (vertical offset) */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.9,
            ease: [0.25, 0.1, 0.25, 1],
          }}
          viewport={{ once: true }}
          className="space-y-6 mt-10 md:mt-16"
        >
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-semibold font-[Poppins] leading-tight text-[#5CC6D0]">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-300 text-lg md:text-xl font-[Poppins] font-medium leading-relaxed max-w-[500px]">
              Find answers to common questions about our services, processes, and how we can help optimize your aircraft parts supply chain.
            </p>
          </div>


        </motion.div>

        {/* Right Section */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{
            duration: 1,
            ease: [0.25, 0.1, 0.25, 1],
          }}
          viewport={{ once: true }}
          className="space-y-4 w-full"
        >
          {faqItems.map((faq, index) => (
            <div
              key={index}
              className="border-b border-gray-700 pb-2 overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center py-4 text-left text-base md:text-lg font-[Poppins] font-medium transition-all duration-500 hover:text-[#5CC6D0]"
              >
                <span>{faq.question}</span>
                <motion.div
                  animate={{
                    rotate: openIndex === index ? 180 : 0,
                    color: openIndex === index ? "#5CC6D0" : "#fff",
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 200,
                    damping: 20,
                  }}
                >
                  <ChevronDown className="w-5 h-5" />
                </motion.div>
              </button>

              <AnimatePresence initial={false}>
                {openIndex === index && (
                  <motion.div
                    key="content"
                    initial={{ height: 0, opacity: 0, y: -5 }}
                    animate={{ height: "auto", opacity: 1, y: 0 }}
                    exit={{ height: 0, opacity: 0, y: -5 }}
                    transition={{
                      type: "spring",
                      stiffness: 120,
                      damping: 18,
                      opacity: { duration: 0.4 },
                    }}
                  >
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ delay: 0.05, duration: 0.4 }}
                      className="text-[#5CC6D0] text-sm md:text-base font-[Poppins] font-medium leading-relaxed pb-4 whitespace-pre-line"
                    >
                      {faq.answer}
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
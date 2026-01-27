"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqItems = [
  {
    question: "What kind of certificate will come with products?",
    answer: `OEM/MFC COC
FAA 8130
EASA FORM1`,
  },
  {
    question: "What is the warranty period for the unit supplied?",
    answer: `NEW – 1YR
SERVICEABLE 3–6 MONTH
REPAIRED 1–3 MONTHS
OVERHAUL 6–9 MONTHS`,
  },
  {
    question: "Average self life for the consumable supplied?",
    answer: `70% AND ABOVE`,
  },
  {
    question: "How quickly can RDA deliver parts for an urgent AOG situation?",
    answer:
      "RDA guarantees parts preparation for pickup within 60–90 minutes for urgent AOG situations, leveraging our UAE warehouse with over 400,000 parts.",
  },
];

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      className="
        bg-black text-white py-24
      "
    >
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
          className="space-y-4 mt-10 md:mt-16"
        >
          <h2 className="text-4xl md:text-5xl font-semibold font-[Poppins]">
            FAQS
          </h2>
          <p className="text-gray-300 text-lg md:text-xl font-[Poppins] font-medium leading-snug">
            Here are answers to <br /> questions our clients ask.
          </p>
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
import React, { useState } from "react";
import { AlertCircle, ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "../components/ui/button";
import { PageLayout } from "../components/PageLayout";

const FAQs: React.FC = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const faqs = [
    {
      question: "Are your quoted prices negotiable?",
      answer:
        "Yes, our quotes are negotiable. We aim to offer competitive pricing and are happy to discuss options based on volume, long-term partnerships, or specific requirements.",
    },
    {
      question: "Do you offer exchange, lease, or loan options for parts?",
      answer:
        "Yes, exchange, lease, and loan options are available for eligible parts. Please contact our team with your requirements for tailored solutions.",
    },
    {
      question: "How long is a quotation valid?",
      answer:
        "Our quotations are typically valid for 20–30 days from the date of issue, subject to stock availability and market conditions. We recommend confirming validity when placing an order.",
    },
    {
      question: "Do you provide repair services for customer-owned components?",
      answer:
        "Yes, we offer comprehensive repair services for customer-supplied components. Our experienced team handles repairs to the highest industry standards.",
    },
    {
      question: "What quality certifications and memberships does RDA hold?",
      answer:
        "We are proud members of the Aviation Suppliers Association (ASA) and hold ISO 9001 certification. We are also proud to be associated with the National Business Aviation Association (NBAA), ensuring compliance with global aviation quality and safety standards.",
    },
    {
      question: "How quickly can you deliver parts?",
      answer:
        "We prioritise speed and aim to deliver as quickly as possible. For standard orders, lead times depend on part availability and location. For urgent needs, see our AOG response below.",
    },
    {
      question: "What happens if there is a delay in the quoted lead time?",
      answer:
        "We maintain close communication with the unit manufacturer and provide updates within 1 day of any potential delay. You'll receive prompt notification so you can plan accordingly and meet your operational requirements.",
    },
    {
      question: "Can I supply a PMA (Parts Manufacturer Approval) unit for your services?",
      answer:
        "No, we do not accept customer-supplied PMA units for our processes. We handle all background verification, sourcing, and compliance work to ensure traceability and quality.",
    },
    {
      question: "What certifications and documentation accompany the products you supply?",
      answer: `All supplied parts come with appropriate certification, including:

OEM/Manufacturer Certificate of Conformance (COC)
Airworthiness Review Certificate (ARC)`,
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

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <PageLayout>
      <div className="min-h-screen bg-black text-white">
        {/* Hero Section */}
        <section className="relative pt-40 md:pt-48 pb-20 px-8 overflow-hidden">
          {/* Background Glow */}
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 pointer-events-none"
            style={{ width: "55vw", height: "55vh" }}
          >
            <div
              className="w-full h-full rounded-full bg-[#5cc6d0] opacity-20"
              style={{ filter: "blur(120px)" }}
            ></div>
          </div>
          <div className="max-w-7xl mx-auto relative z-10 text-center">
            <div className="flex flex-col items-center gap-4 mb-8">
              <AlertCircle className="w-12 h-12 text-[#5cc6d0]" />
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight text-white md:whitespace-nowrap">
                Frequently Asked Questions
              </h1>
            </div>
            <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Find answers to common questions about our services, processes,
              and how we can help optimize your aircraft parts supply chain.
            </p>
          </div>
        </section>

        {/* FAQs Section */}
        <section className="py-20 px-8">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-4">
              {faqs.map((faq, index) => {
                const isOpen = openFAQ === index;

                return (
                  <div
                    key={index}
                    className="bg-[#0b0d10]/50 border border-[#1a1d22] rounded-xl overflow-hidden"
                  >
                    <button
                      onClick={() => toggleFAQ(index)}
                      className="w-full px-6 py-6 text-left flex items-center justify-between hover:bg-[#0b0d10]/70 transition-all duration-300"
                    >
                      <span className="text-lg font-semibold text-white">
                        {faq.question}
                      </span>
                      {isOpen ? (
                        <ChevronUp className="w-6 h-6 text-[#5cc6d0] flex-shrink-0" />
                      ) : (
                        <ChevronDown className="w-6 h-6 text-[#5cc6d0] flex-shrink-0" />
                      )}
                    </button>
                    {isOpen && (
                      <div className="px-6 pb-6">
                        <p className="text-gray-300 leading-relaxed whitespace-pre-line">
                          {faq.answer}
                        </p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 px-8 bg-[#0b0d10]/30">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8">Still Have Questions?</h2>
            <p className="text-xl text-gray-300 mb-12">
              Our team is here to help. Contact us for personalized assistance
              with your specific needs.
            </p>
            <div className="flex justify-center">
              <a href="mailto:sales@rockdoveaviation.com">
                <Button className="bg-gradient-to-b from-[#5CC6D0] to-[#05848E] text-white px-10 py-4 text-lg font-semibold hover:scale-105 transition-all duration-300 h-auto rounded-xl shadow-[0_4px_14px_rgba(92,198,208,0.4)] border-0">
                  sales@rockdoveaviation.com
                </Button>
              </a>
            </div>
          </div>
        </section>
      </div>
    </PageLayout>
  );
};

export default FAQs;

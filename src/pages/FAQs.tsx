import React, { useState } from "react";
import { HelpCircle, ChevronDown, ChevronUp } from "lucide-react";
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
  ];

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <PageLayout>
      <div className="min-h-screen bg-black text-white">
        {/* Hero Section */}
        <section className="relative pt-32 md:pt-48 pb-20 px-8 overflow-hidden">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12 relative z-10">
            <div className="flex-1">
              <div className="flex flex-col items-start gap-4 mb-8">
                <HelpCircle className="w-12 h-12 text-[#5cc6d0] hidden md:block" />
                <h1 className="text-4xl md:text-7xl font-bold leading-tight text-white">
                  Frequently Asked Questions
                </h1>
              </div>
              <p className="text-xl md:text-2xl text-gray-300 max-w-2xl leading-relaxed">
                Find answers to common questions about our services, processes,
                and how we can help optimize your aircraft parts supply chain.
              </p>
            </div>

            <div className="flex-1 h-20 md:h-auto" />
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
                        <p className="text-gray-300 leading-relaxed">
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
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-[#5cc6d0] text-black px-8 py-4 text-lg font-semibold hover:bg-[#4ab5bf] transition-all duration-300 hover:scale-105">
                Contact Support
              </Button>
              <Button
                variant="outline"
                className="border-[#5cc6d0] text-[#5cc6d0] px-8 py-4 text-lg font-semibold hover:bg-[#5cc6d0] hover:text-black transition-all duration-300"
              >
                Schedule Call
              </Button>
            </div>
          </div>
        </section>
      </div>
    </PageLayout>
  );
};

export default FAQs;

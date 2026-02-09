import React, { useState } from "react";
import { HelpCircle, ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "../components/ui/button";
import { PageLayout } from "../components/PageLayout";

const FAQs: React.FC = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const faqs = [
    {
      category: "General",
      questions: [
        {
          question: "What is RockDove Aviation?",
          answer:
            "RockDove Aviation is a leading global supplier of aircraft parts and components, serving airlines, MROs, and operators worldwide with reliable, high-quality parts and exceptional service.",
        },
        {
          question: "How long has RockDove been in business?",
          answer:
            "RockDove Aviation was founded in 2015 and has grown to become a trusted partner for over 500 global clients in the aviation industry.",
        },
        {
          question: "What types of aircraft parts do you supply?",
          answer:
            "We supply a comprehensive range of aircraft parts including engines, avionics, landing gear, hydraulic systems, structural components, and more for commercial, cargo, and military aircraft.",
        },
      ],
    },
    {
      category: "Services",
      questions: [
        {
          question: "Do you offer 24/7 AOG support?",
          answer:
            "Yes, we provide round-the-clock Aircraft on Ground (AOG) support with our dedicated emergency hotline and global network of certified technicians and parts suppliers.",
        },
        {
          question: "What is your delivery success rate?",
          answer:
            "We maintain a 99.8% delivery success rate, ensuring reliable and timely delivery of critical aircraft parts to our clients worldwide.",
        },
        {
          question: "Do you provide repair services?",
          answer:
            "Yes, we offer comprehensive repair management services including engine overhaul, avionics repair, landing gear service, and component testing through our certified repair facilities.",
        },
      ],
    },
    {
      category: "Quality & Compliance",
      questions: [
        {
          question: "Are your parts certified and traceable?",
          answer:
            "All our parts come with complete certification and traceability documentation, ensuring full compliance with aviation regulations and quality standards.",
        },
        {
          question: "What quality standards do you follow?",
          answer:
            "We adhere to strict quality standards including FAA, EASA, and other international aviation regulatory requirements, with comprehensive quality assurance processes.",
        },
        {
          question: "Do you provide warranty on parts?",
          answer:
            "Yes, all our parts come with comprehensive warranty coverage and we stand behind the quality and reliability of every component we supply.",
        },
      ],
    },
    {
      category: "Support",
      questions: [
        {
          question: "How can I contact your support team?",
          answer:
            "You can reach our support team through our 24/7 emergency hotline at +1-800-AOG-HELP, email support, or through our online portal for non-emergency inquiries.",
        },
        {
          question: "Do you offer training for your systems?",
          answer:
            "Yes, we provide comprehensive training programs for our inventory management platform and other systems to ensure our clients can maximize their operational efficiency.",
        },
        {
          question: "What is your response time for inquiries?",
          answer:
            "We respond to all inquiries within 15 minutes for emergency requests and within 2 hours for general inquiries during business hours.",
        },
      ],
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <PageLayout>
      <div className="min-h-screen bg-black text-white">
        {/* Hero Section */}
        <section className="relative pt-2 pb-20 px-8 ">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center gap-4 mb-8">
              <HelpCircle className="w-12 h-12 text-[#5cc6d0]" />
              <h1 className="text-5xl md:text-6xl font-bold">
                Frequently Asked Questions
              </h1>
            </div>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl leading-relaxed">
              Find answers to common questions about our services, processes,
              and how we can help optimize your aircraft parts supply chain.
            </p>
          </div>
        </section>

        {/* FAQs Section */}
        <section className="py-20 px-8">
          <div className="max-w-4xl mx-auto">
            {faqs.map((category, categoryIndex) => (
              <div key={categoryIndex} className="mb-16">
                <h2 className="text-3xl font-bold mb-8 text-[#5cc6d0]">
                  {category.category}
                </h2>
                <div className="space-y-4">
                  {category.questions.map((faq, faqIndex) => {
                    const globalIndex = categoryIndex * 10 + faqIndex;
                    const isOpen = openFAQ === globalIndex;

                    return (
                      <div
                        key={faqIndex}
                        className="bg-[#0b0d10]/50 border border-[#1a1d22] rounded-xl overflow-hidden"
                      >
                        <button
                          onClick={() => toggleFAQ(globalIndex)}
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
            ))}
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

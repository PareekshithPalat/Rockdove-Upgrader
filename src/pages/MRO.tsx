import React from "react";
import { Wrench, Users, Clock, Shield, Calendar, Phone, Mail } from "lucide-react";
import { PageLayout } from "../components/PageLayout";
import {
  FadeInUp,
  FadeInLeft,
  FadeInRight,
  ScaleIn,
  StaggeredContainer
} from "../components/animations";

const MRO: React.FC = () => {
  const services = [
    {
      icon: <Wrench className="w-8 h-8 text-[#5cc6d0]" />,
      title: "Aircraft Maintenance",
      description: "Comprehensive maintenance services for all aircraft types with certified technicians and state-of-the-art facilities."
    },
    {
      icon: <Shield className="w-8 h-8 text-[#5cc6d0]" />,
      title: "Safety Compliance",
      description: "Full regulatory compliance with FAA, EASA, and international aviation standards to ensure airworthiness."
    },
    {
      icon: <Clock className="w-8 h-8 text-[#5cc6d0]" />,
      title: "24/7 Support",
      description: "Round-the-clock technical support and emergency services to minimize aircraft downtime."
    },
    {
      icon: <Users className="w-8 h-8 text-[#5cc6d0]" />,
      title: "Expert Team",
      description: "Highly qualified engineers and technicians with extensive experience across multiple aircraft platforms."
    }
  ];



  return (
    <PageLayout>
      <div className="min-h-screen bg-black text-white">
        {/* Hero Section */}
        <section className="relative pt-40 pb-20 px-8 overflow-hidden">

          <div className="max-w-6xl mx-auto">
            {/* Animated title and icon */}
            <FadeInUp delay={200}>
              <div className="flex items-center gap-4 mb-8">
                <Wrench className="w-12 h-12 text-[#5cc6d0]" />
                <h1 className="text-5xl md:text-6xl font-bold">MRO Services</h1>
              </div>
            </FadeInUp>

            {/* Animated description */}
            <FadeInUp delay={400}>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl leading-relaxed">
                Explore our comprehensive Maintenance, Repair, and Overhaul (MRO) services.
                Secure an early appointment to connect with our expert team and discover how we can support your aviation needs.
              </p>
            </FadeInUp>

            {/* Animated call-to-action */}
            <FadeInUp delay={600}>
              <div className="mt-8 flex items-center gap-4">
                <Calendar className="w-6 h-6 text-[#5cc6d0]" />
                <span className="text-lg font-semibold text-[#5cc6d0]">Schedule Your Consultation Today</span>
              </div>
            </FadeInUp>
          </div>
        </section>

        {/* Services Section with Staggered Animation */}
        <section className="py-20 px-8">
          <div className="max-w-6xl mx-auto">
            {/* Animated section title */}
            <FadeInUp delay={200}>
              <h2 className="text-4xl font-bold text-center mb-16">Our MRO Services</h2>
            </FadeInUp>

            {/* Staggered service cards */}
            <StaggeredContainer delay={150}>
              <div className="grid md:grid-cols-2 gap-12">
                {services.map((service, index) => (
                  <ScaleIn key={index} delay={index * 100} scale={0.9}>
                    <div className="bg-[#0b0d10]/50 border border-[#1a1d22] rounded-xl p-8 hover:bg-[#0b0d10]/70 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#5cc6d0]/20">
                      <div className="flex items-start gap-4">
                        {service.icon}
                        <div>
                          <h3 className="text-2xl font-semibold mb-4 text-[#5cc6d0]">{service.title}</h3>
                          <p className="text-gray-300 leading-relaxed">{service.description}</p>
                        </div>
                      </div>
                    </div>
                  </ScaleIn>
                ))}
              </div>
            </StaggeredContainer>
          </div>
        </section>



        {/* Global Presence & Events Gallery */}
        <section className="py-24 px-8 overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <FadeInUp>
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Global Presence</h2>
                <div className="w-24 h-1 bg-[#5cc6d0] mx-auto mb-8"></div>
                <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                  Showcase of our participation in premier aviation events, exhibitions, and maintenance symposia worldwide.
                  Connecting with industry leaders to drive innovation in MRO.
                </p>
              </div>
            </FadeInUp>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-[250px]">
              {[
                { src: "/WhatsApp Image 2025-09-17 at 7.24.56 AM (1).jpg" },
                { src: "/WhatsApp Image 2025-09-17 at 9.40.43 AM (1).jpg" },
                { src: "/WhatsApp Image 2026-02-17 at 10.51.39 (2).jpeg" },
                { src: "/WhatsApp Image 2026-02-17 at 10.51.39 (4).jpeg" },
                { src: "/WhatsApp Image 2026-02-17 at 10.51.39.jpeg" },
                { src: "/WhatsApp Image 2026-02-17 at 10.51.40 (1).jpeg" },
                { src: "/WhatsApp Image 2026-02-17 at 10.51.40 (2).jpeg" },
                { src: "/WhatsApp Image 2026-02-17 at 10.51.40 (3).jpeg" },
                { src: "/WhatsApp Image 2026-02-17 at 10.51.40 (4).jpeg" },
                { src: "/WhatsApp Image 2026-02-17 at 10.51.40 (5).jpeg" },
                { src: "/WhatsApp Image 2026-02-17 at 10.51.40.jpeg" },
                { src: "/image.png" },

              ].map((event, index) => (
                <FadeInUp key={index} delay={index * 100}>
                  <div className={`group relative overflow-hidden rounded-3xl bg-[#0b0d10] border border-white/10 ${event.span} h-full`}>
                    <img
                      src={event.src}
                      alt={event.src}
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                    />
                    {/* Interactive border glow */}
                    <div className="absolute inset-0 border border-white/0 group-hover:border-[#5cc6d0]/30 rounded-3xl transition-colors duration-500"></div>
                  </div>
                </FadeInUp>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section with Final Animations */}
        <section className="py-20 px-8">
          <div className="max-w-4xl mx-auto text-center">
            {/* Animated title and description */}
            <FadeInUp delay={200}>
              <h2 className="text-4xl font-bold mb-8">Ready to Get Started?</h2>
            </FadeInUp>

            <FadeInUp delay={400}>
              <p className="text-xl text-gray-300 mb-12">
                Connect with our MRO team to discuss your maintenance needs and secure an early appointment.
                Our experts are ready to provide personalized solutions for your aircraft.
              </p>
            </FadeInUp>

            {/* Animated contact cards with alternating directions */}
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <FadeInLeft delay={600}>
                <div className="bg-[#0b0d10]/50 border border-[#1a1d22] rounded-xl p-6 hover:bg-[#0b0d10]/70 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#5cc6d0]/20">
                  <Phone className="w-8 h-8 text-[#5cc6d0] mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2 text-[#5cc6d0]">Call Our MRO Team</h3>
                  <p className="text-2xl font-bold">+971 505056093</p>
                  <p className="text-sm text-gray-400 mt-2">Available 24/7 for emergency support</p>
                </div>
              </FadeInLeft>

              <FadeInRight delay={600}>
                <div className="bg-[#0b0d10]/50 border border-[#1a1d22] rounded-xl p-6 hover:bg-[#0b0d10]/70 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#5cc6d0]/20">
                  <Mail className="w-8 h-8 text-[#5cc6d0] mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2 text-[#5cc6d0]">Email Consultation</h3>
                  <p className="text-2xl font-bold">sales@rockdoveaviation.com</p>
                  <p className="text-sm text-gray-400 mt-2">Response within 24 hours</p>
                </div>
              </FadeInRight>
            </div>

          </div>
        </section>
      </div >
    </PageLayout >
  );
};

export default MRO;

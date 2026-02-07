import React from "react";
import { Wrench, Users, Clock, Shield, Calendar, Phone, Mail } from "lucide-react";
import { Button } from "../components/ui/button";
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


  const certifications = [
    "FAA Part 145 Repair Station",
    "EASA Part 145 Approved",
    "ISO 9001:2015 Certified",
    "AS9100D Aerospace Quality",
    "NADCAP Accredited"
  ];

  return (
    <PageLayout>
      <div className="min-h-screen bg-black text-white">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 px-8">
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


        {/* Certifications Section with Alternating Animations */}
        <section className="py-20 px-8">
          <div className="max-w-6xl mx-auto">
            {/* Animated section title */}
            <FadeInUp delay={200}>
              <h2 className="text-4xl font-bold text-center mb-16">Certifications & Approvals</h2>
            </FadeInUp>

            {/* Alternating left/right animations for certifications */}
            <div className="grid md:grid-cols-3 gap-8">
              {certifications.map((cert, index) => {
                const AnimationComponent = index % 2 === 0 ? FadeInLeft : FadeInRight;
                return (
                  <AnimationComponent key={index} delay={index * 150}>
                    <div className="bg-[#0b0d10]/50 border border-[#1a1d22] rounded-xl p-6 text-center hover:bg-[#0b0d10]/70 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#5cc6d0]/20">
                      <Shield className="w-12 h-12 text-[#5cc6d0] mx-auto mb-4" />
                      <h3 className="text-lg font-semibold text-[#5cc6d0]">{cert}</h3>
                    </div>
                  </AnimationComponent>
                );
              })}
            </div>
          </div>
        </section>

        {/* Why Choose Us Section with Staggered Stats */}
        <section className="py-20 px-8 bg-[#0b0d10]/30">
          <div className="max-w-6xl mx-auto">
            {/* Animated section title */}
            <FadeInUp delay={200}>
              <h2 className="text-4xl font-bold text-center mb-16">Why Choose RockDove MRO?</h2>
            </FadeInUp>

            {/* Staggered benefit cards with scale animation */}
            <StaggeredContainer delay={200}>
              <div className="grid md:grid-cols-3 gap-8">
                {[
                  {
                    title: "Proven Track Record",
                    description: "Over 10,000 successful maintenance events with 99.8% on-time delivery",
                    stat: "10,000+"
                  },
                  {
                    title: "Global Network",
                    description: "Worldwide facilities and partnerships for comprehensive coverage",
                    stat: "15+"
                  },
                  {
                    title: "Cost Efficiency",
                    description: "Competitive pricing with transparent cost structures and no hidden fees",
                    stat: "30%"
                  }
                ].map((benefit, index) => (
                  <ScaleIn key={index} delay={index * 200} scale={0.85}>
                    <div className="text-center bg-[#0b0d10]/50 border border-[#1a1d22] rounded-xl p-8 hover:bg-[#0b0d10]/70 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#5cc6d0]/20">
                      <div className="text-4xl font-bold text-[#5cc6d0] mb-4">{benefit.stat}</div>
                      <h3 className="text-2xl font-semibold mb-4 text-[#5cc6d0]">{benefit.title}</h3>
                      <p className="text-gray-300">{benefit.description}</p>
                    </div>
                  </ScaleIn>
                ))}
              </div>
            </StaggeredContainer>
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
                  <p className="text-2xl font-bold">+1-800-MRO-HELP</p>
                  <p className="text-sm text-gray-400 mt-2">Available 24/7 for emergency support</p>
                </div>
              </FadeInLeft>

              <FadeInRight delay={600}>
                <div className="bg-[#0b0d10]/50 border border-[#1a1d22] rounded-xl p-6 hover:bg-[#0b0d10]/70 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#5cc6d0]/20">
                  <Mail className="w-8 h-8 text-[#5cc6d0] mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2 text-[#5cc6d0]">Email Consultation</h3>
                  <p className="text-2xl font-bold">mro@rockdove.com</p>
                  <p className="text-sm text-gray-400 mt-2">Response within 2 hours</p>
                </div>
              </FadeInRight>
            </div>

            {/* Animated buttons */}
            <FadeInUp delay={800}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-[#5cc6d0] text-black px-8 py-4 text-lg font-semibold hover:bg-[#4ab5bf] transition-all duration-300 hover:scale-105">
                  Schedule Consultation
                </Button>
                <Button variant="outline" className="border-[#5cc6d0] text-[#5cc6d0] px-8 py-4 text-lg font-semibold hover:bg-[#5cc6d0] hover:text-black transition-all duration-300">
                  Request Quote
                </Button>
              </div>
            </FadeInUp>
          </div>
        </section>
      </div>
    </PageLayout>
  );
};

export default MRO;

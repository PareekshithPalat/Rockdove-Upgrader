import React, { useEffect, useRef } from 'react';
import { ContainerScroll } from '../components/ui/container-scroll-animation';
import { Button } from '../components/ui/button';
import { motion } from 'framer-motion';
import { cn } from '../lib/utils';
import { GlowEffect } from '../components/ui/GlowEffect';
import { Meteors } from '../components/ui/meteors';
import { Card, CardContent } from '../components/ui/card';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Header from '../components/Header';
import { Footer } from '../components/Footer';

gsap.registerPlugin(ScrollTrigger);

const ServiceStepCard = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => (
  <div
    className={cn(
      'relative h-full w-full p-4 overflow-hidden bg-black border border-white/[0.2] group-hover:border-white/[0.3] rounded-2xl transition-all duration-300 min-h-[300px]',
      className
    )}
  >
    <Meteors number={20} />
    <div className="relative z-10">{children}</div>
  </div>
);

const RepairManagementPage = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const planeRef = useRef<HTMLImageElement | null>(null);
  const whiteLineRef = useRef<HTMLDivElement | null>(null);
  const blueLineRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const plane = planeRef.current;
    const blueLine = blueLineRef.current;

    if (!section || !plane || !blueLine) return;

    const isMobile = window.innerWidth < 768;
    const distance = isMobile ? 1600 : 1150;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top center",
        end: `+=${distance}`,
        scrub: 1,
      },
    });

    // Animate height instead of scaleY for better sync and rounded caps
    tl.to(blueLine, { height: distance, ease: "none" }, 0);
    tl.to(plane, { y: distance, ease: "none" }, 0);

    const texts = gsap.utils.toArray<HTMLElement>(".feature-block");
    texts.forEach((text) => {
      gsap.fromTo(
        text,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: text,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );
    });
  }, []);

  const serviceSteps = [
    { title: 'Assessment & Diagnosis', description: 'Thorough inspection of components like thrust reversers and actuators.' },
    { title: 'Repair & Overhaul', description: 'Utilizing partnerships for specialized fixes on engines, brakes, and wheels.' },
    { title: 'Testing & Certification', description: 'Rigorous quality checks to guarantee reliability.' },
    { title: 'Integration with Supply Chain', description: 'Seamless coordination with warehousing and distribution for quick part replacement.' },
  ];

  const partnerCards = [
    {
      title: "SAT",
      description: "Provides comprehensive repair and service solutions for aircraft components.",
      logo: "https://c.animaapp.com/mhamq68c87ZEAC/img/1630555350384-removebg-preview-1.png",
      logoClass: "w-[200px] h-[200px]",
    },
    {
      title: "LogoSky",
      description: "Provides comprehensive repair and service solutions for aircraft components.",
      logo: "https://c.animaapp.com/mhamq68c87ZEAC/img/logosky-logos-lockup-black-1.png",
      logoClass: "w-[162px] h-10",
    },
    {
      title: "Shanghai Junxun Aviation",
      description: "Provides comprehensive repair and service solutions for aircraft components.",
      logo: "https://c.animaapp.com/mhamq68c87ZEAC/img/2022082410490570a173-removebg-preview-1.png",
      logoClass: "w-[225px] h-[81px]",
    },
    {
      title: "JS-Tooling",
      description: "Provides comprehensive repair and service solutions for aircraft components.",
      logo: "https://c.animaapp.com/mhamq68c87ZEAC/img/logo-removebg-preview-1.png",
      logoClass: "w-[200px] h-[130px]",
    },
  ];

  return (
    <>
      <Header />
      <div className="flex flex-col overflow-hidden bg-black text-white">
        <ContainerScroll
          titleComponent={
            <>
              <h1 className="text-3xl md:text-5xl font-semibold text-white leading-snug text-center mb-12 md:mb-24">
                Comprehensive Repair Management for <br className="hidden md:block" />
                <span className="text-3xl md:text-[5rem] lg:text-[6rem] font-bold mt-2 leading-tight block">
                  Unmatched Aircraft Reliability
                </span>
              </h1>
            </>
          }
        >
          <div className="py-12 md:py-20 px-6 sm:px-8 md:px-8">
            <div className="max-w-6xl mx-auto relative rounded-2xl border border-white/[0.2]">
              <GlowEffect />
              <div className="relative z-10 bg-black rounded-2xl">
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 p-4"
                >
                  {serviceSteps.map((step, index) => (
                    <motion.div
                      key={index}
                      className={cn(
                        'transition-transform duration-300 hover:scale-105',
                        index === 0 || index === 3
                          ? 'md:translate-y-8'
                          : '-translate-y-8'
                      )}
                    >
                      <ServiceStepCard>
                        <div className="flex flex-col p-4 h-full text-center md:text-left">
                          <h3 className="text-lg md:text-xl font-semibold mb-2">
                            {step.title}
                          </h3>
                          <p className="text-gray-400 text-sm md:text-base">
                            {step.description}
                          </p>
                        </div>
                      </ServiceStepCard>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </div>
          </div>
        </ContainerScroll>

        {/* Partnerships Section */}
        <section className="relative px-6 sm:px-10 md:px-[149px] py-12 md:py-[93px]">
          <div className="text-center mb-10 md:mb-[94px]">
            <h2 className="font-[Poppins] font-bold text-white text-2xl md:text-[32px] mb-4">
              Powered by Industry-Leading Partnerships
            </h2>
            <p className="font-[Poppins] font-medium text-gray-300 text-base md:text-2xl leading-relaxed">
              Our alliances with top providers enhance our repair capabilities, <br className="hidden md:block" />
              delivering reliable, efficient, and innovative solutions
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-[18px]">
            {partnerCards.map((partner, index) => (
              <Card
                key={index}
                className="group relative bg-[#d9d9d9] rounded-[20px] border-none cursor-pointer transition-all duration-300 hover:-translate-y-2 overflow-hidden h-[340px] md:h-[403px]"
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-[#0097A1] transition-opacity duration-500 rounded-[20px]"></div>
                <CardContent className="relative z-10 flex flex-col items-center justify-between h-full p-6 text-center">
                  <div className="flex-1 flex items-center justify-center">
                    <img
                      className={`${partner.logoClass} object-contain`}
                      alt={partner.title}
                      src={partner.logo}
                    />
                  </div>
                  <div>
                    <h3 className="font-[Poppins] font-bold text-black text-lg md:text-xl mb-3 transition-colors duration-300 group-hover:text-white">
                      {partner.title}
                    </h3>
                    <div className="w-6 h-0.5 bg-black mx-auto mb-3 transition-colors duration-300 group-hover:bg-white" />
                    <p className="font-[Poppins] font-medium text-black text-sm md:text-base transition-colors duration-300 group-hover:text-white">
                      {partner.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Scroll animation section */}
        <section
          ref={sectionRef}
          className="relative min-h-[160vh] bg-black text-white flex flex-col items-center justify-start py-16 md:py-24 font-[Poppins]"
        >
          <h2 className="text-3xl md:text-[48px] font-semibold text-center text-white mb-20 md:mb-32 px-4">
            Fly safe with parts you <span className="text-[#7DF9FF]">trust.</span>
          </h2>

          {/* Lines & Plane */}
          <div
            ref={whiteLineRef}
            className="absolute top-[280px] left-1/2 w-[6px] md:w-[10px] h-[1600px] md:h-[1150px] bg-white/10 rounded-full -translate-x-1/2"
          ></div>

          <div
            ref={blueLineRef}
            className="absolute top-[280px] left-1/2 w-[6px] md:w-[10px] h-0 bg-[#7DF9FF] rounded-full -translate-x-1/2 will-change-transform"
            style={{
              boxShadow: '0 0 15px #7DF9FF, 0 0 30px #7DF9FF',
            }}
          ></div>

          <img
            ref={planeRef}
            src="/sliderplane.png"
            alt="Plane"
            className="absolute top-[240px] left-1/2 w-[70px] h-[70px] md:w-[120px] md:h-[120px] -translate-x-1/2 will-change-transform"
          />

          {/* Zigzag features */}
          <div className="mt-[-60px] md:mt-[-100px] flex flex-col gap-[100px] md:gap-[120px] w-full max-w-[1200px] px-4">
            {[
              {
                id: '01',
                title: 'Quality we follow',
                desc: 'RDA ensures top-quality products and on-time support, backed by ISO 9001:2015 compliance, ASA, and NBAA memberships.',
                align: 'left',
              },
              {
                id: '02',
                title: 'Logistics',
                desc: 'Our team ensures timely global delivery of aircraft parts, partnering with trusted providers like DHL, FedEx, UPS, and TWI.',
                align: 'right',
              },
              {
                id: '03',
                title: 'From OEM to Customer',
                desc: 'A trusted distributor of aerospace tools and placards, RDA guarantees quality and reliability for every order.',
                align: 'left',
              },
              {
                id: '04',
                title: 'Accreditation',
                desc: 'Partnerships with SAT, Logisky, Shanghai Junxun Aviation, and JS-Tooling elevate our repair, tooling, and distribution services.',
                align: 'right',
              },
            ].map((feature, i) => (
              <div
                key={i}
                className={`feature-block flex ${feature.align === 'right' ? 'justify-end text-right' : 'justify-start text-left'
                  }`}
              >
                <div className="max-w-[440px] space-y-3">
                  <div className="text-[#7DF9FF] font-bold text-[32px] md:text-[40px]">
                    {feature.id}
                  </div>
                  <h3 className="text-[24px] md:text-[32px] font-medium">
                    {feature.title}
                  </h3>
                  <p className="text-[15px] md:text-[16px] text-gray-300 leading-[160%]">
                    {feature.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-20 px-6 text-center">
          <div className="max-w-2xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-3xl md:text-4xl font-bold mb-4"
            >
              Elevate Your Aircraft Maintenance Today
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Button className="bg-blue-600 text-white px-8 py-4 text-base md:text-lg font-semibold hover:bg-blue-700">
                Schedule a Repair Consultation
              </Button>
            </motion.div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default RepairManagementPage;
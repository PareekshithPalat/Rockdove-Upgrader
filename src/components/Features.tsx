import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Features: React.FC = () => {
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
    const distance = isMobile ? 1300 : 900;

    // Scroll animation for plane and blue line growth
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top center",
        end: "bottom center",
        scrub: 1, // Reduced scrub for better responsiveness
      },
    });

    // Plane movement along the line
    tl.fromTo(plane,
      { y: 0 },
      { y: distance, ease: "none" },
      0
    );

    // Line growth animation - ensure it perfectly matches the plane center
    tl.fromTo(
      blueLine,
      { scaleY: 0 },
      { scaleY: 1, transformOrigin: "top center", ease: "none" },
      0
    );

    // Fade-in animations for text blocks on scroll
    const texts = gsap.utils.toArray<HTMLElement>(".feature-block");
    texts.forEach((text) => {
      gsap.fromTo(
        text,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
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

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[120vh] bg-black text-white flex flex-col items-center justify-start py-24 font-[Poppins]"
    >
      {/* Title */}
      <h2 className="text-[48px] font-semibold text-center leading-[100%] text-white mb-32">
        Fly safe with parts you <span className="text-[#00E5FF]">trust.</span>
      </h2>

      {/* Static White Line */}
      <div
        ref={whiteLineRef}
        className="absolute top-[280px] left-[20px] md:left-1/2 w-[4px] md:w-[10px] h-[1300px] md:h-[900px] bg-white/20 rounded-full -translate-x-1/2"
      ></div>

      {/* Glowing Cyan Line (grows + glows continuously) */}
      <div
        ref={blueLineRef}
        className="absolute top-[280px] left-[20px] md:left-1/2 w-[4px] md:w-[10px] h-[1300px] md:h-[900px] bg-[#00E5FF] rounded-full -translate-x-1/2 will-change-transform"
        style={{
          boxShadow: '0 0 15px #00E5FF, 0 0 30px #00E5FF',
        }}
      ></div>

      {/* Plane (scrolls with GSAP) */}
      <img
        ref={planeRef}
        src="/sliderplane.png"
        alt="Plane"
        className="absolute top-[260px] left-[20px] md:left-1/2 w-[40px] h-[40px] md:w-[120px] md:h-[120px] -translate-x-1/2 z-10 will-change-transform"
      />

      {/* Feature Blocks */}
      {/* Feature Blocks */}
      <div className="mt-0 md:mt-20 flex flex-col gap-24 md:gap-[150px] w-full max-w-[1400px] px-6 sm:px-10 z-20">
        {/* 01 - Mobile: Right of line, Desktop: Left */}
        <div className="feature-block flex justify-end md:justify-start md:ml-0">
          <div className="w-full pl-12 md:pl-0 max-w-none md:max-w-[480px] text-left space-y-3">
            <div className="text-[#00E5FF] font-bold text-[32px] md:text-[40px] leading-[100%]">
              01
            </div>
            <h3 className="text-[26px] md:text-[32px] font-semibold md:font-medium leading-[110%] text-white">
              Quality we follow
            </h3>
            <p className="text-[15px] md:text-[16px] text-gray-300 leading-[160%] tracking-wide">
              RDA ensures top-quality products and on-time support, backed by
              ISO 9001:2015 compliance, ASA, and NBAA memberships. Regular
              audits reflect our commitment to being the premier aviation
              service provider.
            </p>
          </div>
        </div>

        {/* 02 - Mobile: Right of line, Desktop: Right */}
        <div className="feature-block flex justify-end">
          <div className="w-full pl-12 md:pl-0 max-w-none md:max-w-[480px] md:mt-[-15vh] text-left md:text-right space-y-3">
            <div className="text-[#00E5FF] font-bold text-[32px] md:text-[40px] leading-[100%]">
              02
            </div>
            <h3 className="text-[26px] md:text-[32px] font-semibold md:font-medium leading-[110%] text-white">
              Logistics
            </h3>
            <p className="text-[15px] md:text-[16px] text-gray-300 leading-[160%] tracking-wide">
              Our team ensures timely global delivery of aircraft parts,
              partnering with trusted providers like DHL, FedEx, UPS, and TWI.
              We collaborate with private air, sea, and freight forwarders for
              reliable, efficient shipping.
            </p>
          </div>
        </div>

        {/* 03 - Mobile: Right of line, Desktop: Left */}
        <div className="feature-block flex justify-end md:justify-start">
          <div className="w-full pl-12 md:pl-0 max-w-none md:max-w-[480px] md:mt-[-10vh] text-left space-y-3">
            <div className="text-[#00E5FF] font-bold text-[32px] md:text-[40px] leading-[100%]">
              03
            </div>
            <h3 className="text-[26px] md:text-[32px] font-semibold md:font-medium leading-[110%] text-white">
              From OEM to Customer
            </h3>
            <p className="text-[15px] md:text-[16px] text-gray-300 leading-[160%] tracking-wide">
              A trusted distributor of aerospace tools and placards, RDA
              specializes in aircraft parts for the Asia-Pacific, Middle East,
              and Africa. As an official OEM distributor, we guarantee quality
              and reliability for every order.
            </p>
          </div>
        </div>

        {/* 04 - Mobile: Right of line, Desktop: Right */}
        <div className="feature-block flex justify-end">
          <div className="w-full pl-12 md:pl-0 max-w-none md:max-w-[480px] md:mt-[-15vh] text-left md:text-right space-y-3">
            <div className="text-[#5CC6D0] font-bold text-[32px] md:text-[40px] leading-[100%]">
              04
            </div>
            <h3 className="text-[26px] md:text-[32px] font-semibold md:font-medium leading-[110%] text-white">
              Accreditation
            </h3>
            <p className="text-[15px] md:text-[16px] text-gray-300 leading-[160%] tracking-wide">
              Partnerships with SAT, Logisky, Shanghai Junuun Aviation, and
              JS-Tooling elevate our repair, tooling, and distribution services.
              We ensure fast turnaround, high precision, and unmatched service
              standards.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
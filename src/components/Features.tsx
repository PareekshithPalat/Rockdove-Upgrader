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

    // Scroll animation for plane and blue line growth
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top center",
        end: "bottom bottom",
        scrub: 1,
      },
    });

    // Plane movement along the line
    tl.fromTo(plane, { y: 0 }, { y: 900, ease: "none" }, 0);

    // Line growth animation
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
        Fly safe with parts you <span className="text-[#5CC6D0]">trust.</span>
      </h2>

      {/* Static White Line */}
      <div
        ref={whiteLineRef}
        className="hidden md:block absolute top-[280px] left-1/2 w-[10px] h-[900px] bg-white rounded-full -translate-x-1/2"
      ></div>

      {/* Glowing Cyan Line (grows + glows continuously) */}
      <div
        ref={blueLineRef}
        className="hidden md:block absolute top-[280px] left-1/2 w-[10px] h-[900px] bg-[#5CC6D0] rounded-full -translate-x-1/2 scale-y-0 glow-line"
      ></div>

      {/* Plane (scrolls with GSAP) */}
      <img
        ref={planeRef}
        src="/sliderplane.png"
        alt="Plane"
        className="hidden md:block absolute top-[250px] left-1/2 w-[120px] h-[120px] -translate-x-1/2"
      />

      {/* Feature Blocks */}
      <div className="mt-10 md:mt-20 flex flex-col gap-12 md:gap-[150px] w-full max-w-[1200px] px-6 sm:px-10 z-20">
        {/* 01 - Left */}
        <div className="feature-block flex justify-center md:justify-start md:ml-[5vw]">
          <div className="max-w-[480px] w-full bg-[#111] md:bg-transparent p-8 md:p-0 rounded-2xl border border-white/5 md:border-0 shadow-2xl md:shadow-none text-center md:text-left space-y-4">
            <div className="text-[#5CC6D0] font-bold text-[32px] md:text-[40px] leading-[100%]">
              01
            </div>
            <h3 className="text-[26px] md:text-[32px] font-semibold md:font-medium leading-[110%] text-white">
              Quality we follow
            </h3>
            <p className="text-[15px] md:text-[16px] text-gray-400 md:text-gray-300 leading-[160%] tracking-wide">
              RDA ensures top-quality products and on-time support, backed by
              ISO 9001:2015 compliance, ASA, and NBAA memberships. Regular
              audits reflect our commitment to being the premier aviation
              service provider.
            </p>
          </div>
        </div>

        {/* 02 - Right */}
        <div className="feature-block flex justify-center md:justify-end">
          <div className="max-w-[480px] w-full bg-[#111] md:bg-transparent p-8 md:p-0 rounded-2xl border border-white/5 md:border-0 shadow-2xl md:shadow-none md:mr-[4vw] md:mt-[-15vh] text-center md:text-right space-y-4">
            <div className="text-[#5CC6D0] font-bold text-[32px] md:text-[40px] leading-[100%]">
              02
            </div>
            <h3 className="text-[26px] md:text-[32px] font-semibold md:font-medium leading-[110%] text-white">
              Logistics
            </h3>
            <p className="text-[15px] md:text-[16px] text-gray-400 md:text-gray-300 leading-[160%] tracking-wide">
              Our team ensures timely global delivery of aircraft parts,
              partnering with trusted providers like DHL, FedEx, UPS, and TWI.
              We collaborate with private air, sea, and freight forwarders for
              reliable, efficient shipping.
            </p>
          </div>
        </div>

        {/* 03 - Left */}
        <div className="feature-block flex justify-center md:justify-start">
          <div className="max-w-[480px] w-full bg-[#111] md:bg-transparent p-8 md:p-0 rounded-2xl border border-white/5 md:border-0 shadow-2xl md:shadow-none md:ml-[5vw] md:mt-[-10vh] text-center md:text-left space-y-4">
            <div className="text-[#5CC6D0] font-bold text-[32px] md:text-[40px] leading-[100%]">
              03
            </div>
            <h3 className="text-[26px] md:text-[32px] font-semibold md:font-medium leading-[110%] text-white">
              From OEM to Customer
            </h3>
            <p className="text-[15px] md:text-[16px] text-gray-400 md:text-gray-300 leading-[160%] tracking-wide">
              A trusted distributor of aerospace tools and placards, RDA
              specializes in aircraft parts for the Asia-Pacific, Middle East,
              and Africa. As an official OEM distributor, we guarantee quality
              and reliability for every order.
            </p>
          </div>
        </div>

        {/* 04 - Right */}
        <div className="feature-block flex justify-center md:justify-end">
          <div className="max-w-[480px] w-full bg-[#111] md:bg-transparent p-8 md:p-0 rounded-2xl border border-white/5 md:border-0 shadow-2xl md:shadow-none md:mr-[4vw] md:mt-[-15vh] text-center md:text-right space-y-4">
            <div className="text-[#5CC6D0] font-bold text-[32px] md:text-[40px] leading-[100%]">
              04
            </div>
            <h3 className="text-[26px] md:text-[32px] font-semibold md:font-medium leading-[110%] text-white">
              Accreditation
            </h3>
            <p className="text-[15px] md:text-[16px] text-gray-400 md:text-gray-300 leading-[160%] tracking-wide">
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
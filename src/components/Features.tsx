import React, { useEffect, useRef, useState, useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Features: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const planeRef = useRef<HTMLImageElement | null>(null);
  const whiteLineRef = useRef<HTMLDivElement | null>(null);
  const blueLineRef = useRef<HTMLDivElement | null>(null);
  const lastBlockRef = useRef<HTMLDivElement | null>(null);
  const [distance, setDistance] = useState(0);

  useLayoutEffect(() => {
    const calculateDistance = () => {
      if (!sectionRef.current || !lastBlockRef.current || !whiteLineRef.current) return;

      const lastBlock = lastBlockRef.current;
      const section = sectionRef.current;
      const whiteLine = whiteLineRef.current;

      const sectionRect = section.getBoundingClientRect();
      const lastBlockRect = lastBlock.getBoundingClientRect();
      const lineRect = whiteLine.getBoundingClientRect();

      // Calculate the distance from the start of the line to the center-bottom of the last block
      // Line starts at some top relative to section
      const lineStartTop = lineRect.top - sectionRect.top;
      const lastBlockBottom = (lastBlockRect.top - sectionRect.top) + lastBlockRect.height;

      const newDistance = lastBlockBottom - lineStartTop;
      setDistance(newDistance);
    };

    calculateDistance();
    window.addEventListener("resize", calculateDistance);
    return () => window.removeEventListener("resize", calculateDistance);
  }, []);

  useEffect(() => {
    if (distance === 0) return;

    const section = sectionRef.current;
    const plane = planeRef.current;
    const blueLine = blueLineRef.current;

    if (!section || !plane || !blueLine) return;

    // Scroll animation for plane and blue line growth
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top center",
        end: `+=${distance}`,
        scrub: 1,
        invalidateOnRefresh: true,
      },
    });

    // Plane movement along the line
    tl.to(plane, { y: distance, ease: "none" }, 0);

    // Line growth animation
    tl.to(blueLine, { height: distance, ease: "none" }, 0);

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

    return () => {
      tl.kill();
      ScrollTrigger.getAll().forEach(st => {
        if (st.vars.trigger === section) st.kill();
      });
    };
  }, [distance]);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[80vh] bg-black text-white flex flex-col items-center justify-start py-24 pb-48 font-[Poppins]"
    >
      {/* Title */}
      <h2 className="text-[48px] font-semibold text-center leading-[100%] text-white mb-32">
        Fly safe with parts you <span className="text-[#7DF9FF]">trust.</span>
      </h2>

      {/* Static White Line */}
      <div
        ref={whiteLineRef}
        className="absolute top-[204px] md:top-[364px] left-[20px] md:left-1/2 w-[4px] md:w-[10px] bg-white/10 rounded-full -translate-x-1/2"
        style={{ height: distance > 0 ? `${distance}px` : "1000px" }}
      ></div>

      {/* Glowing Cyan Line (grows + glows continuously) */}
      <div
        ref={blueLineRef}
        className="absolute top-[204px] md:top-[364px] left-[20px] md:left-1/2 w-[4px] md:w-[10px] h-0 bg-[#7DF9FF] rounded-full -translate-x-1/2 will-change-transform"
        style={{
          boxShadow: '0 0 15px #7DF9FF, 0 0 30px #7DF9FF',
        }}
      ></div>

      {/* Plane (scrolls with GSAP) */}
      <img
        ref={planeRef}
        src="/sliderplane.png"
        alt="Plane"
        className="absolute top-[164px] md:top-[324px] left-[20px] md:left-1/2 w-[40px] h-[40px] md:w-[120px] md:h-[120px] -translate-x-1/2 z-10 will-change-transform"
      />

      {/* Feature Blocks */}
      <div className="mt-0 md:mt-20 flex flex-col gap-24 md:gap-[150px] w-full max-w-[1400px] px-6 sm:px-10 z-20">
        {/* 01 */}
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

        {/* 02 */}
        <div className="feature-block flex justify-end">
          <div className="w-full pl-12 md:pl-0 max-w-none md:max-w-[480px] md:mt-[-15vh] text-left md:text-right space-y-3">
            <div className="text-[#7DF9FF] font-bold text-[32px] md:text-[40px] leading-[100%]">
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

        {/* 03 */}
        <div className="feature-block flex justify-end md:justify-start">
          <div className="w-full pl-12 md:pl-0 max-w-none md:max-w-[480px] md:mt-[-10vh] text-left space-y-3">
            <div className="text-[#7DF9FF] font-bold text-[32px] md:text-[40px] leading-[100%]">
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

        {/* 04 */}
        <div ref={lastBlockRef} className="feature-block flex justify-end">
          <div className="w-full pl-12 md:pl-0 max-w-none md:max-w-[480px] md:mt-[-15vh] text-left md:text-right space-y-3">
            <div className="text-[#7DF9FF] font-bold text-[32px] md:text-[40px] leading-[100%]">
              04
            </div>
            <h3 className="text-[26px] md:text-[32px] font-semibold md:font-medium leading-[110%] text-white">
              Accreditation
            </h3>
            <p className="text-[15px] md:text-[16px] text-gray-300 leading-[160%] tracking-wide">
              Partnerships with SAT, Logosky, Shanghai Junuun Aviation, and
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
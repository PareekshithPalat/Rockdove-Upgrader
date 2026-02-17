import React, { useState, useEffect, useRef } from "react";
import { PageLayout } from "../components/PageLayout";
import { Button } from "../components/ui/button";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "../lib/utils";


gsap.registerPlugin(ScrollTrigger);

const advantages = [
  {
    title: "Advantage 1",
    description: "Always-on team for global, time-sensitive needs.",
    icon: (
      <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M5.5 0.916672H38.5M5.5 43.0833H38.5M10.0833 43.0833V32.0833L15.3193 28.941C16.518 28.2219 17.5101 27.2046 18.1988 25.9883C18.8876 24.7719 19.2496 23.3979 19.2496 22C19.2496 20.6022 18.8876 19.2281 18.1988 18.0118C17.5101 16.7954 16.518 15.7781 15.3193 15.059L10.0833 11.9167V0.916672M33.9167 0.916672V11.9167L28.6807 15.059C27.4824 15.7785 26.4908 16.7958 25.8024 18.0122C25.114 19.2285 24.7521 20.6024 24.7521 22C24.7521 23.3977 25.114 24.7715 25.8024 25.9878C26.4908 27.2042 27.4824 28.2216 28.6807 28.941L33.9167 32.0833V43.0833" stroke="black" strokeWidth="2" />
      </svg>
    ),
  },
  {
    title: "Advantage 2",
    description: "Reduces expenses by addressing urgent issues efficiently.",
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M31.8335 4.9872C31.6991 4.90027 31.5488 4.84109 31.3913 4.81312C31.2337 4.78516 31.0722 4.78897 30.9162 4.82435C30.7601 4.85972 30.6128 4.92594 30.4827 5.01911C30.3526 5.11228 30.2425 5.23052 30.1588 5.36687C30.0751 5.50322 30.0195 5.65493 29.9953 5.81308C29.9711 5.97123 29.9788 6.13262 30.0179 6.28777C30.0569 6.44291 30.1267 6.58868 30.2229 6.71648C30.3191 6.84429 30.44 6.95157 30.5783 7.032C35.9975 10.3536 40.4663 15.2256 40.8023 24.048C40.8215 24.3608 40.9624 24.6536 41.1948 24.8639C41.4271 25.0741 41.7325 25.1852 42.0456 25.1733C42.3587 25.1614 42.6548 25.0274 42.8705 24.8001C43.0862 24.5728 43.2044 24.2701 43.1999 23.9568C42.8231 14.1192 37.7327 8.6016 31.8335 4.9872ZM29.0063 11.3472C29.1846 11.0838 29.4602 10.9019 29.7725 10.8416C30.0848 10.7813 30.4083 10.8475 30.6719 11.0256C34.5287 13.6296 37.1879 17.3568 37.6031 21.6432C37.6415 22.0272 37.6607 22.4168 37.6607 22.812C37.6607 23.1303 37.5342 23.4355 37.3092 23.6605C37.0841 23.8856 36.7789 24.012 36.4607 24.012C36.1424 24.012 35.8372 23.8856 35.6121 23.6605C35.3871 23.4355 35.2607 23.1303 35.2607 22.812C35.2607 22.4952 35.2447 22.1832 35.2127 21.876C34.8863 18.4728 32.7551 15.3288 29.3279 13.0128C29.0644 12.8345 28.8826 12.5589 28.8223 12.2466C28.762 11.9342 28.8282 11.6108 29.0063 11.3472ZM12.1919 13.0512C9.19287 14.3876 6.84732 16.8603 5.67089 19.9256C4.49446 22.9909 4.58344 26.3979 5.91826 29.3976L8.85346 35.9952L9.06946 41.5632C9.08097 41.8569 9.16423 42.1433 9.31196 42.3974C9.4597 42.6515 9.66741 42.8656 9.91695 43.0209C10.1665 43.1762 10.4503 43.268 10.7435 43.2884C11.0367 43.3087 11.3305 43.257 11.5991 43.1376L34.9439 32.7456C35.2127 32.626 35.4481 32.4424 35.6295 32.2107C35.8109 31.9791 35.9327 31.7065 35.9844 31.4168C36.036 31.1272 36.0158 30.8293 35.9257 30.5492C35.8355 30.2692 35.678 30.0155 35.4671 29.8104L31.4735 25.9248L28.5359 19.3272C27.1994 16.3288 24.7272 13.9837 21.6624 12.8073C18.5977 11.6309 15.1913 11.7171 12.1919 13.0512ZM8.11186 28.4232C7.08642 26.0141 7.04882 23.2986 8.00716 20.8621C8.96551 18.4256 10.843 16.4633 13.2349 15.3983C15.6267 14.3334 18.3413 14.2511 20.7933 15.1693C23.2452 16.0874 25.2381 17.9324 26.3423 20.3064L29.4671 27.3264L33.1583 30.9144L11.4335 40.5864L11.2343 35.4432L8.11186 28.4232ZM25.6271 42.9048C24.8539 43.2483 23.9841 43.3066 23.172 43.0693C22.36 42.832 21.6584 42.3145 21.1919 41.6088L27.6359 38.7432C27.8475 39.5624 27.7618 40.4301 27.394 41.1921C27.0262 41.954 26.4001 42.5609 25.6271 42.9048Z" fill="black" />
      </svg>
    ),
  },
  {
    title: "Advantage 3",
    description: "Certified quality and innovation for trusted performance.",
    icon: (
      <svg width="43" height="43" viewBox="0 0 43 43" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1.34375 41.6562H41.6562M7.48917 16.555L36.2812 3.47583M36.2812 3.47583L34.1492 9.19125M36.2812 3.47583L30.5837 1.34375M10.75 29.1146H5.375C5.02006 29.1192 4.68096 29.2623 4.42996 29.5133C4.17895 29.7643 4.03589 30.1034 4.03125 30.4583V41.6562H12.0937V30.4583C12.0891 30.1034 11.946 29.7643 11.695 29.5133C11.444 29.2623 11.1049 29.1192 10.75 29.1146ZM24.1875 21.9479H18.8125C18.4576 21.9526 18.1185 22.0956 17.8675 22.3466C17.6165 22.5976 17.4734 22.9367 17.4687 23.2917V41.6562H25.5312V23.2917C25.5266 22.9367 25.3835 22.5976 25.1325 22.3466C24.8815 22.0956 24.5424 21.9526 24.1875 21.9479ZM37.625 14.7812H32.25C31.8951 14.7859 31.556 14.929 31.305 15.18C31.054 15.431 30.9109 15.7701 30.9062 16.125V41.6562H38.9687V16.125C38.9641 15.7701 38.821 15.431 38.57 15.18C38.319 14.929 37.9799 14.7859 37.625 14.7812Z" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

const processSteps = [
  {
    number: "01",
    title: "Immediate Contact",
    description:
      "Reach our 24/7 team via phone or email for instant assessment.",
  },
  {
    number: "02",
    title: "Part Preparation",
    description:
      "Over 400,000 warehouse parts and 500k+ inventories ensure availability within 60-90 minutes for pickup.",
  },
  {
    number: "03",
    title: "Delivery & Support",
    description:
      "Fast logistics, integrated with repair management if needed, to reduce downtime and costs.",
  },
  {
    number: "04",
    title: "Follow-Up",
    description:
      "Post-resolution assistance for aftermarket support and prevention.",
  },
];

const logisticsPartners = [
  { src: "/dhl.png", alt: "DHL" },
  {
    src: "https://c.animaapp.com/mh4e1d40mbxSsz/img/logo-mobile-removebg-preview-1.png",
    alt: "Sterling",
  },
  {
    src: "https://c.animaapp.com/mh4e1d40mbxSsz/img/tnt-logo-png-5-1.png",
    alt: "TNT",
  },
  { src: "/fedex.png", alt: "FedEx" },
  {
    src: "https://c.animaapp.com/mh4e1d40mbxSsz/img/united-parcel-service-logo-2014-svg-1.png",
    alt: "UPS",
  },
];

const AOGSupport: React.FC = () => {


  const [showHeading, setShowHeading] = useState(false);
  const heroRef = useRef<HTMLDivElement | null>(null);
  const illustrationRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    setShowHeading(true);
    if (heroRef.current && illustrationRef.current) {
      const ctx = gsap.context(() => {
        gsap.fromTo(
          illustrationRef.current,
          { y: 80, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 2,
            scrollTrigger: {
              trigger: heroRef.current,
              start: "top 90%",
              end: "bottom 30%",
              scrub: true,
            },
          }
        );
      }, heroRef);
      return () => ctx.revert();
    }
  }, []);

  return (
    <PageLayout>
      <div className="bg-black text-white overflow-x-hidden">
        {/* ====================== HERO SECTION ====================== */}
        <section
          ref={heroRef}
          className="relative w-full h-screen flex flex-col justify-center items-center overflow-hidden"
        >


          <div
            ref={illustrationRef}
            className="
              absolute inset-0 z-10 flex items-center justify-center pointer-events-none
              transform translate-y-4 md:-translate-y-10
            "
          >
            <div
              className="
                relative flex justify-center items-center
                w-[90vw] sm:w-[80vw] md:w-[70vw] lg:w-[60vw]
                h-[50vh] sm:h-[60vh]
              "
            >
              {/* Background Glow directly behind the image */}
              <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0"
                style={{ width: "120%", height: "120%" }}
              >
                <div
                  className="w-full h-full rounded-full bg-[#5cc6d0] opacity-30"
                  style={{ filter: "blur(80px)" }}
                ></div>
              </div>

              <img
                src="/undraw_aircraft_usu4.svg"
                alt="AOG Support Illustration"
                className="relative z-10 w-full h-full object-contain"
              />
            </div>
          </div>

          {/* Animated Heading */}
          <div
            className={`absolute inset-0 flex items-start justify-center pt-32 sm:pt-32 md:pt-40 z-20 transition-opacity duration-1000 ${showHeading ? "opacity-100" : "opacity-0"
              } md:transform md:-translate-y-16`}
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center px-6 leading-tight max-w-[90vw] md:max-w-full">
              <span className="text-[#5cc6d0]">24/7 AOG Support </span>
              <br className="block md:hidden" />
              <span className="text-white">(Aircraft on ground)</span>
            </h1>
          </div>

          {/* Paragraph + Button */}
          <div
            className={`absolute bottom-10 left-0 right-0 flex flex-col items-center z-20 transition-opacity duration-1000 ${showHeading ? "opacity-100" : "opacity-0"
              } px-4`}
          >
            <p
              className="text-base sm:text-lg md:text-xl text-white text-center max-w-full sm:max-w-xl md:max-w-3xl mb-8"
              style={{ lineHeight: "1.6" }}
            >
              Our priority service ensures parts are ready for pickup in 60–90
              minutes, delivering fast, cost-effective solutions to minimize
              downtime during Aircraft-on-Ground emergencies
            </p>
            <Button
              className="shadow-lg w-full sm:w-auto"
              style={{
                maxWidth: 367,
                height: 40,
                borderRadius: 40,
                background:
                  "linear-gradient(180deg, #5CC6D0 0%, #14919B 100%)",
                color: "#ffffff",
                fontFamily: "Poppins, sans-serif",
                fontWeight: 500,
                fontSize: "clamp(16px, 5vw, 20px)",
                lineHeight: "100%",
              }}
            >
              Request AOG Assistance Now
            </Button>
          </div>


        </section>

        {/* ====================== ADVANTAGES SECTION ====================== */}
        <section className="flex flex-col items-center px-6 sm:px-8 md:px-16 lg:px-24 py-24 text-center bg-black text-white">
          <h2 className="max-w-3xl text-3xl md:text-4xl leading-tight md:leading-snug mb-16">
            <span className="font-medium text-white">
              Keeping Your Aircraft Airborne in{" "}
              <br className="hidden md:block" />
            </span>
            <span className="font-bold text-[#5cc6d0]">Critical Moments</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 w-full max-w-6xl">
            {advantages.map((advantage, index) => (
              <div
                key={index}
                className={cn(
                  "group rounded-[20px] w-full h-auto min-h-[320px] flex flex-col justify-start items-center md:items-start px-8 py-10 mx-auto transition-all duration-300 ease-in-out transform hover:scale-105 shadow-lg",
                  index === 0
                    ? "bg-[linear-gradient(180deg,#5CC6D0_0%,#0097A1_100%)]"
                    : "bg-[#D9D9D9]"
                )}
              >
                <div className="mb-6">
                  {advantage.icon}
                </div>
                <h3 className={cn(
                  "font-[600] text-xl mb-4 transition-colors duration-300 font-[Poppins] text-center md:text-left",
                  index === 0 ? "text-white" : "text-black"
                )}>
                  {advantage.title}
                </h3>
                <p className={cn(
                  "font-medium text-base leading-relaxed tracking-wide text-center md:text-left",
                  index === 0 ? "text-white" : "text-black"
                )}>
                  {advantage.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ====================== RAPID RESPONSE SECTION ====================== */}
        <section className="flex flex-col items-center px-4 sm:px-8 md:px-16 lg:px-24 pt-24 pb-32 text-center">
          <h2 className="max-w-2xl font-bold text-3xl md:text-4xl mb-14">
            <span className="text-white">Rapid Response: </span>
            <span className="text-[#5cc6d0]">From Request to Resolution</span>
          </h2>

          <p className="max-w-3xl text-lg md:text-xl text-white mb-24">
            When you select our AOG Priority service, we guarantee prompt
            action. Our committed and agile team handles all aspects to
            seamlessly assist during Aircraft-on-Ground scenarios.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 max-w-6xl">
            {processSteps.map((step, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                <div className="w-[100px] h-[100px] rounded-full border-2 border-[#5cc6d0] flex items-center justify-center mb-10 transition-transform duration-300 hover:scale-110">
                  <span className="text-[#5cc6d0] font-bold text-3xl">
                    {step.number}
                  </span>
                </div>
                <span className="text-white font-semibold text-xl mb-4 leading-snug">
                  {step.title}
                </span>
                <p
                  className="text-white text-base font-medium leading-relaxed"
                  style={{ maxWidth: "260px", color: "#E5E5E5" }}
                >
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ====================== LOGISTICS SECTION ====================== */}
        <section className="flex flex-col items-center px-4 sm:px-8 md:px-16 lg:px-24 pt-24 pb-32 text-center">
          <h2 className="max-w-3xl font-bold text-3xl md:text-4xl mb-16">
            <span className="text-white">Logistics support for our</span>
            <span className="text-[#5cc6d0]"> AOG</span>
            <span className="text-white"> orders.</span>
          </h2>

          <div className="flex flex-col gap-8 md:gap-12 w-full max-w-5xl mx-auto">
            {/* First Row: 3 logos (DHL, Sterling, TNT) */}
            <div className="flex flex-wrap justify-center items-center gap-8 sm:gap-12">
              {logisticsPartners.slice(0, 3).map((partner, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center bg-[#d9d9d9] rounded-[20px] w-[180px] h-[100px] sm:w-[200px] sm:h-[110px] md:w-[220px] md:h-[120px] shadow-md transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg p-4"
                >
                  <img
                    className="max-w-full max-h-full w-auto h-auto object-contain"
                    alt={partner.alt}
                    src={partner.src}
                  />
                </div>
              ))}
            </div>

            {/* Second Row: 2 logos (FedEx, UPS) */}
            <div className="flex flex-wrap justify-center items-center gap-8 sm:gap-12">
              {logisticsPartners.slice(3).map((partner, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center bg-[#d9d9d9] rounded-[20px] w-[180px] h-[100px] sm:w-[200px] sm:h-[110px] md:w-[220px] md:h-[120px] shadow-md transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg p-4"
                >
                  <img
                    className={`${partner.alt === "UPS"
                      ? "max-h-[85%] w-auto"
                      : "max-w-full max-h-full w-auto h-auto"
                      } object-contain`}
                    alt={partner.alt}
                    src={partner.src}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </PageLayout>
  );
};

export default AOGSupport;
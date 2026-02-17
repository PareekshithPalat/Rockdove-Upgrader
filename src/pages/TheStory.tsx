import React from "react";
import { PageLayout } from "../components/PageLayout";
import { FadeInUp } from "../components/animations";

const founders = [
  {
    name: "KIRAN JOSEPH",
    image: "/founder1.png",
  },
  {
    name: "GUKAN CHANDRAN",
    image: "/founder2.png",
  },
];

const TheStory: React.FC = () => {
  return (
    <PageLayout>
      <div className="bg-black text-white w-full overflow-x-hidden">
        {/* Hero Section */}
        <section className="relative flex flex-col items-center text-center px-6 sm:px-10 md:px-20 pt-32 pb-48 overflow-hidden">
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
          <FadeInUp delay={200}>
            <h1 className="font-bold leading-tight text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
              <span className="block">From Vision to Victory –</span>
              <span className="block mt-3 text-[#5cc6d0]">
                The Rockdove Aviation Story
              </span>
            </h1>
          </FadeInUp>

          <FadeInUp delay={400}>
            <p
              className="mt-10 text-white/90 max-w-3xl lg:max-w-4xl text-center text-base sm:text-lg md:text-xl leading-relaxed"
              style={{
                fontFamily: "Poppins",
                fontWeight: 500,
              }}
            >
              Founded in 2019 in Sharjah, UAE, we&apos;ve become a global leader
              in aircraft teardown, aftermarket parts, and seamless aviation
              support.
            </p>
          </FadeInUp>
        </section>

        {/* Our Journey */}
        <section className="px-6 sm:px-10 md:px-20 pb-60 flex flex-col items-center text-left mt-46">
          {/* Heading */}
          <FadeInUp delay={200}>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-6 w-full max-w-5xl text-left md:mr-[720px]">
              Our Journey
            </h2>
          </FadeInUp>

          {/* Paragraph */}
          <FadeInUp delay={400}>
            <p
              className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed mb-20 w-full max-w-5xl text-justify"
              style={{
                fontFamily: "Poppins",
                fontWeight: 400,
                lineHeight: "160%",
              }}
            >
              Since our founding in 2019, Rockdove Aviation has been proudly
              headquartered in Sharjah, UAE, serving a worldwide aviation
              community. What began as a shared vision between two friends,{" "}
              <span className="font-semibold text-white">Kiran Joseph</span> and{" "}
              <span className="font-semibold text-white">Gukan Chandran</span>,
              has evolved into a trusted name delivering high-quality pre-owned
              aircraft components and innovative services to airlines across the
              globe.
            </p>
          </FadeInUp>

          {/* Founders + Motto */}
          <div className="flex flex-col md:flex-row justify-center items-end gap-14">
            {/* Founders */}
            {founders.map((founder, index) => (
              <FadeInUp key={index} delay={600 + index * 200}>
                <div className="relative flex flex-col items-center mt-20 md:mt-16">
                  <div className="w-44 sm:w-52 md:w-56 h-56 sm:h-60 md:h-64 bg-[#5cc6d0] rounded-md overflow-visible relative">
                    <img
                      src={founder.image}
                      alt={founder.name}
                      className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[200%] sm:w-[250%] h-[120%] sm:h-[130%] rounded-md object-cover drop-shadow-2xl"
                      loading="lazy"
                    />
                  </div>
                  <p className="mt-4 text-sm sm:text-base font-semibold tracking-wide text-white text-center">
                    {founder.name}
                  </p>
                </div>
              </FadeInUp>
            ))}

            {/* Motto */}
            <FadeInUp delay={1000}>
              <div className="relative flex flex-col justify-center items-start md:ml-12 text-left mt-20 md:mt-0">
                <img
                  src="/uq.png"
                  alt="Opening Quote"
                  className="absolute -top-6 right-24 sm:right-36 md:right-48 w-6 sm:w-8 md:w-12"
                  loading="lazy"
                />

                <div className="flex flex-col leading-none space-y-1">
                  <p className="text-white font-extrabold text-3xl sm:text-4xl md:text-[42px] leading-none">
                    WE KEEP
                  </p>
                  <p className="text-white font-extrabold text-5xl sm:text-6xl md:text-[80px] leading-none">
                    YOU
                  </p>
                  <p className="text-white font-extrabold text-4xl sm:text-5xl md:text-[60px] leading-none">
                    NON-
                  </p>
                  <p className="text-white font-extrabold text-5xl sm:text-6xl md:text-[70px] leading-none">
                    STOP
                  </p>
                </div>

                <img
                  src="/lq.png"
                  alt="Closing Quote"
                  className="absolute -bottom-4 left-32 sm:left-40 md:left-48 w-6 sm:w-8 md:w-12"
                  loading="lazy"
                />
              </div>
            </FadeInUp>
          </div>
        </section>

        {/* Who We Are Section */}
        <section className="bg-black text-white px-6 sm:px-10 md:px-20 pt-0 pb-20 flex flex-col items-center text-center -mt-20">
          <div className="max-w-5xl mb-16">
            <h2 className="text-3xl sm:text-[36px] md:text-[40px] font-extrabold mb-6 text-left leading-tight">
              Who We Are
            </h2>
            <p className="text-base sm:text-lg md:text-[24px] text-gray-300 leading-relaxed text-justify">
              Rockdove Aviation is your one-stop destination for premium
              aircraft parts and aviation services. As a premier stocking
              distributor, we serve strategic aerospace markets with unmatched
              commitment to quality, reliability, and customer success. In just
              four years, we’ve established ourselves as a top-tier leader in
              the global aviation aftermarket.
            </p>
          </div>

          {/* Vision & Mission Cards */}
          <div className="flex flex-col md:flex-row gap-10 sm:gap-12 md:gap-16 justify-center items-center md:items-start w-full max-w-6xl">
            {/* Vision Card */}
            <div className="bg-[#5cc6d0] rounded-[10px] px-6 sm:px-8 py-10 flex flex-col justify-start relative text-left overflow-hidden w-full md:w-[420px] min-h-[480px] md:h-[580px]">
              <div className="mt-10 sm:mt-16">
                <h4 className="text-black font-extrabold text-2xl sm:text-3xl md:text-[40px] tracking-tight">
                  OUR
                </h4>
                <h3 className="text-white font-extrabold text-4xl sm:text-5xl md:text-[64px] tracking-tight mt-2 sm:mt-3">
                  VISION
                </h3>
                <p className="text-black text-base sm:text-lg md:text-[20px] leading-relaxed text-justify tracking-wide pr-2 sm:pr-4">
                  Ensuring seamless aviation through cutting-edge, reliable, and
                  comprehensive aerospace solutions.
                </p>
              </div>
              <img
                src="/eye.png"
                alt="Vision Icon"
                className="absolute bottom-0 left-0 w-28 sm:w-36 md:w-52 opacity-90"
                loading="lazy"
              />
            </div>

            {/* Mission Card */}
            <div className="bg-[#5cc6d0] rounded-[10px] px-6 sm:px-8 py-10 flex flex-col justify-end relative text-left overflow-hidden w-full md:w-[420px] min-h-[480px] md:h-[580px]">
              <div className="mb-6">
                <h4 className="text-black font-extrabold text-2xl sm:text-3xl md:text-[40px] tracking-tight">
                  OUR
                </h4>
                <h3 className="text-white font-extrabold text-4xl sm:text-5xl md:text-[64px] tracking-tight mt-2 sm:mt-3">
                  MISSION
                </h3>
                <p className="text-black text-base sm:text-lg md:text-[20px] leading-relaxed tracking-wide text-justify pr-2 sm:pr-4">
                  To become a global leader in aircraft teardown and aftermarket
                  aviation parts, setting the standard for quality, efficiency,
                  and innovation.
                </p>
              </div>
              <img
                src="/target.png"
                alt="Mission Icon"
                className="absolute top-0 right-0 w-28 sm:w-36 md:w-52 opacity-90"
                loading="lazy"
              />
            </div>
          </div>
        </section>

        {/* What We Do Section */}
        <section className="bg-black text-white px-6 sm:px-10 md:px-28 py-20 flex flex-col md:flex-row justify-center items-start gap-16 md:gap-24">
          <div className="max-w-xl w-full">
            <FadeInUp delay={200}>
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center md:text-left">
                What We Do
              </h2>
            </FadeInUp>
            <FadeInUp delay={400}>
              <p className="text-gray-300 leading-relaxed text-justify text-base sm:text-lg md:text-2xl">
                We specialize in high-quality pre-owned aviation parts, aircraft
                teardown, and comprehensive end-to-end aerospace solutions.
                Leveraging cutting-edge technology, personalized teamwork, and
                rigorous quality standards, we deliver seamless operations for
                Boeing, Airbus, Embraer, and many other platforms. Our core
                values of leadership, accountability, and service excellence
                guide every decision and every delivery.
              </p>
            </FadeInUp>
          </div>

          <div className="flex flex-col items-center md:items-start w-full md:w-auto">
            <FadeInUp delay={200}>
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center md:text-left">
                Serving world-wide
              </h2>
            </FadeInUp>
            <FadeInUp delay={400}>
              <div className="relative w-full flex justify-center md:justify-start">
                <img
                  src="/worldmap.png"
                  alt="World Map"
                  className="w-full max-w-[600px] object-contain mt-4 md:mt-8"
                />
              </div>
            </FadeInUp>
          </div>
        </section>


      </div>
    </PageLayout>
  );
};

export default TheStory;
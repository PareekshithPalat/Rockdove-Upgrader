import { Link } from "react-router-dom";

const Services: React.FC = () => {
  return (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-center bg-black pt-20 pb-24 -mt-20 sm:pt-16 sm:pb-28 px-6 sm:px-10 md:px-20 overflow-hidden font-[Poppins]">
      {/* Title */}
      <h2 className="text-white font-semibold text-3xl md:text-5xl text-center tracking-tight leading-snug mb-4 transition-transform duration-500 hover:scale-105">
        Services
      </h2>

      {/* Underline */}
      <div
        className="w-16 h-[2px] mt-6  mb-20"
        style={{
          background: "linear-gradient(90deg, #5CC6D0 0%, #14919B 100%)",
        }}
      ></div>

      {/* Cards Container */}
      <div
        className="
          flex
          flex-wrap
          justify-center
          gap-x-12
          gap-y-16
          sm:gap-x-16
          sm:gap-y-20
          md:gap-x-20
          md:gap-y-24
          max-w-7xl
        "
      >
        {/* Card Template */}
        {[
          {
            title: (
              <>
                Asset <br /> Management
              </>
            ),
            text: (
              <>
                Streamlined solutions with <strong>400,000+</strong> parts for
                seamless fleet operations.
              </>
            ),
            path: "/asset-management",
          },
          {
            title: (
              <>
                Repair <br /> Management
              </>
            ),
            text: (
              <>
                Expert repairs on critical components to ensure aircraft
                reliability.
              </>
            ),
            path: "/repair-management",
          },
          {
            title: (
              <>
                24/7 AOG <br /> Support
              </>
            ),
            text: (
              <>
                Rapid 60–90 minute parts delivery to resolve urgent AOG issues.
              </>
            ),
            path: "/aog-support",
          },
        ].map((card, index) => (
          <Link
            key={index}
            to={card.path}
            className="
              group relative bg-gray-200 text-black rounded-[20px]
              w-[300px] sm:w-[320px] md:w-[341px]
              h-[390px] sm:h-[400px] md:h-[412px]
              p-8 flex flex-col justify-between
              cursor-pointer transition-all duration-300 hover:-translate-y-2 overflow-hidden block
            "
          >
            {/* Hover Gradient */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-b from-[#5CC6D0] to-[#0097A1] transition-opacity duration-500 rounded-[20px]"></div>

            {/* Content */}
            <div className="relative z-10">
              <h3 className="font-semibold text-[22px] sm:text-[24px] leading-[110%] mb-4 transition-colors duration-300 group-hover:text-white">
                {card.title}
              </h3>
              <p className="font-normal text-[15px] sm:text-[16px] leading-snug mt-10">
                {card.text}
              </p>
            </div>

            {/* Arrow Button */}
            <div className="relative z-10 flex justify-end">
              <div className="w-10 h-10 flex items-center justify-center bg-black/10 rounded-full transition-transform duration-300 group-hover:translate-x-1">
                <span className="text-xl font-bold group-hover:text-white">
                  ➜
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Background gradient for subtle depth */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-neutral-900 to-black opacity-60"></div>
    </section>
  );
};

export default Services;

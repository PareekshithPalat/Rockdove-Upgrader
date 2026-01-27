import React from "react";

export const Stats: React.FC = () => {
  return (
    <section className="bg-black text-white py-24 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="[font-family:'Poppins',Helvetica] font-semibold text-3xl md:text-5xl text-center tracking-[0] leading-[normal] animate-fade-up">
          <span className="text-[#5cc6d0]">
            From urgent needs to routine care, <br />
            our parts bring{" "}
          </span>
          <span className="text-white">speed and reliability</span>
          <span className="text-[#5cc6d0]">.</span>
        </h2>

        <div className="mt-12 md:mt-16">
          <img
            className="w-full max-w-4xl mx-auto h-[3px] animate-flicker"
            alt="Line"
            src="/line-6.svg"
          />
        </div>

        <div className="mt-8 md:mt-12 flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 lg:gap-24">
          <div
            className="text-center transition-transform duration-500 hover:scale-110 animate-fade-up"
            style={{ animationDelay: "0.1s", opacity: 0 }}
          >
            <div className="[font-family:'Poppins',Helvetica] font-bold text-[#55cccc] text-3xl md:text-[40px] tracking-[0] leading-[normal]">
              27k+
            </div>
            <div className="mt-4 md:mt-8 [font-family:'Poppins',Helvetica] font-medium text-white text-xl md:text-[32px] text-center tracking-[0] leading-[normal]">
              Inventories
            </div>
          </div>

          <img
            className="w-32 h-32 md:w-[196px] md:h-[196px] object-cover transition-transform duration-500 hover:scale-110 hover:rotate-12"
            alt="Element removebg"
            src="/7z2dnha8-removebg-preview-1.png"
          />

          <div
            className="text-center transition-transform duration-500 hover:scale-110 animate-fade-up"
            style={{ animationDelay: "0.3s", opacity: 0 }}
          >
            <div className="[font-family:'Poppins',Helvetica] font-bold text-[#55cccc] text-3xl md:text-[40px] text-center tracking-[0] leading-[normal]">
              400,000
            </div>
            <div className="mt-4 md:mt-8 [font-family:'Poppins',Helvetica] font-medium text-white text-xl md:text-[32px] text-center tracking-[0] leading-[normal]">
              Parts
            </div>
          </div>

          <img
            className="w-40 h-24 md:w-[245px] md:h-[153px] object-cover transition-transform duration-500 hover:scale-110"
            alt="Element f"
            src="/360-f-188273616-ocnkpdm5ghyjcbywmohaoy6qz0h30auf-removebg-previe.png"
          />
        </div>
      </div>
    </section>
  );
};

import React from "react";
import {
  Building2Icon,
  MailIcon,
  MapPinIcon,
  PhoneIcon,
  WarehouseIcon,
} from "lucide-react";

export const ContactUs: React.FC = () => {
  return (
    <div className="bg-black text-white min-h-screen font-[Poppins] overflow-hidden">
      {/* ================= TITLE SECTION ================= */}
      <section className="px-4 sm:px-6 md:px-12 lg:px-[220px] pt-12 lg:pt-[120px] pb-8 lg:pb-[80px]">
        {/* Left-Aligned Title */}
        <h1 className="text-[#5cc6d0] font-bold text-3xl md:text-4xl text-left mb-8 md:mb-20">
          Contact Us
        </h1>

        {/* ================= OFFICE SECTION ================= */}
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-32 mb-12 md:mb-36 justify-items-center md:justify-items-start">
          {/* UAE Office */}
          <div className="space-y-8 text-left">
            <div className="mb-4">
              <img
                src="https://flagcdn.com/w320/ae.png"
                alt="UAE Flag"
                className="w-[120px] h-[60px] sm:w-[150px] sm:h-[75px] rounded-sm"
              />
            </div>

            <div className="flex items-center gap-2">
              <Building2Icon className="w-[22px] h-[22px] text-[#5cc6d0]" />
              <h2 className="text-white text-xl font-semibold">
                Rockdove Aviation FZ-LLC
              </h2>
            </div>

            <div className="flex items-start gap-3">
              <MapPinIcon className="w-[18px] h-[18px] text-[#5cc6d0] mt-1" />
              <p className="text-gray-200 text-base md:text-lg leading-relaxed">
                No. B17-22, RAK Port Customs <br />
                Building, Nakheel Ras Al Khaimah, <br />
                UAE
              </p>
            </div>

            <div className="flex items-start gap-3">
              <WarehouseIcon className="w-[18px] h-[18px] text-[#5cc6d0] mt-1" />
              <p className="text-gray-200 text-base md:text-lg leading-relaxed">
                Q4-212, Sharjah International <br />
                Airport Free Zone, UAE.
              </p>
            </div>

            <div className="flex items-start gap-3">
              <PhoneIcon className="w-[18px] h-[18px] text-[#5cc6d0] mt-1" />
              <p className="text-gray-200 text-base md:text-lg leading-relaxed">
                +971 505056093
              </p>
            </div>

            <div className="flex items-start gap-3">
              <MailIcon className="w-[18px] h-[18px] text-[#5cc6d0] mt-1" />
              <p className="text-gray-200 text-base md:text-lg leading-relaxed">
                sales@rockdoveaviation.com
              </p>
            </div>
          </div>

          {/* INDIA OFFICE */}
          <div className="space-y-8 text-left">
            <div className="mb-4">
              <img
                src="https://flagcdn.com/w320/in.png"
                alt="India Flag"
                className="w-[120px] h-[60px] sm:w-[150px] sm:h-[75px] rounded-sm"
              />
            </div>

            <div className="flex items-center gap-2">
              <Building2Icon className="w-[22px] h-[22px] text-[#5cc6d0]" />
              <h2 className="text-white text-xl font-semibold">
                Rockdove Aviation PVT Limited
              </h2>
            </div>

            <div className="flex items-start gap-3">
              <MapPinIcon className="w-[18px] h-[18px] text-[#5cc6d0] mt-1" />
              <p className="text-gray-200 text-base md:text-lg leading-relaxed">
                Behind Volvo Showroom, <br />
                Poongothai Nagar, Civil Aerodrome Post, <br />
                Coimbatore, Tamil Nadu, 641014
              </p>
            </div>

            <div className="flex items-start gap-3">
              <PhoneIcon className="w-[18px] h-[18px] text-[#5cc6d0] mt-1" />
              <p className="text-gray-200 text-base md:text-lg leading-relaxed">
                +91 73568 90322
              </p>
            </div>

            <div className="flex items-start gap-3">
              <MailIcon className="w-[18px] h-[18px] text-[#5cc6d0] mt-1" />
              <p className="text-gray-200 text-base md:text-lg leading-relaxed">
                sales@rockdoveaviation.com
              </p>
            </div>
          </div>
        </div>

        {/* ================= CONTACT FORM HEADER ================= */}
        <div className="text-center mb-12 md:mb-24">
          <h2 className="text-white text-2xl font-bold leading-relaxed">
            If required, please use the form below to contact us.
            <br />A representative from our company will respond soon.
          </h2>
        </div>

        {/* ================= CONTACT FORM SECTION ================= */}
        <div className="flex flex-col lg:flex-row justify-center items-center gap-8 lg:gap-20 mb-12 lg:mb-40 relative">
          {/* FORM */}
          <form className="order-1 grid gap-8 w-full max-w-md text-left z-20">
            <div>
              <label
                htmlFor="name"
                className="text-[#5cc6d0] font-semibold text-base"
              >
                Name*
              </label>
              <input
                id="name"
                type="text"
                className="w-full h-12 px-3 rounded-md bg-white text-black text-base focus:outline-none focus:ring-2 focus:ring-[#5cc6d0]"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="text-[#5cc6d0] font-semibold text-base"
              >
                Email address*
              </label>
              <input
                id="email"
                type="email"
                className="w-full h-12 px-3 rounded-md bg-white text-black text-base focus:outline-none focus:ring-2 focus:ring-[#5cc6d0]"
              />
            </div>

            <div>
              <label
                htmlFor="phone"
                className="text-[#5cc6d0] font-semibold text-base"
              >
                Phone*
              </label>
              <input
                id="phone"
                type="tel"
                className="w-full h-12 px-3 rounded-md bg-white text-black text-base focus:outline-none focus:ring-2 focus:ring-[#5cc6d0]"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="text-[#5cc6d0] font-semibold text-base"
              >
                Write a message *
              </label>
              <input
                id="message"
                type="text"
                className="w-full h-12 px-3 rounded-md bg-white text-black text-base focus:outline-none focus:ring-2 focus:ring-[#5cc6d0]"
              />
            </div>

            {/* Smaller Submit Button */}
            <div className="mb-8 lg:mb-0">
              <button
                type="submit"
                className="bg-[#5cc6d0] hover:bg-[#4ab5bf] text-white font-semibold transition-all duration-300 w-[97px] h-[47px] rounded-[30px]"
              >
                SUBMIT
              </button>
            </div>
          </form>

          {/* IMAGE STACK (blue rectangle + man) */}
          <div className="order-2 relative w-full max-w-[350px] h-[320px] sm:h-[320px] flex justify-center items-center lg:justify-end lg:ml-8 mt-8 lg:mt-0 mb-12 lg:mb-0">
            {/* Blue background rectangle - only offset on lg to avoid overlapping the form on small screens */}
            <img
              src="/rectangle.png"
              alt="Blue Background"
              className="absolute w-full h-full object-contain lg:right-[-30px] lg:top-[-25px]"
            />
            {/* Man image on top */}
            <img
              src="/manbusiness.png"
              alt="Business Man"
              className="absolute w-[220px] sm:w-[280px] h-auto object-contain"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

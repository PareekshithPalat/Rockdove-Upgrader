import React from "react";
import {
  MailIcon,
  MapPinIcon,
  PhoneIcon,
  WarehouseIcon,
} from "lucide-react";
import { FadeInUp } from "./animations";

export const ContactUs: React.FC = () => {
  return (
    <div className="bg-black text-white min-h-screen font-[Poppins] overflow-hidden">
      {/* ================= TITLE SECTION ================= */}
      <section className="px-4 sm:px-6 md:px-12 lg:px-[220px] pt-12 lg:pt-[120px] pb-8 lg:pb-[80px]">
        {/* Centered Title */}
        <h1 className="text-[#5cc6d0] font-bold text-3xl md:text-5xl text-center mb-12 md:mb-24 uppercase tracking-wider">
          Contact Us
        </h1>

        {/* ================= OFFICE SECTION ================= */}
        <section className="flex justify-center mb-16 md:mb-32">
          <FadeInUp>
            <div className="bg-white/5 border border-white/10 rounded-[32px] p-8 md:p-14 backdrop-blur-md max-w-5xl w-full shadow-2xl relative overflow-hidden group">
              {/* Subtle background glow */}
              <div className="absolute -top-24 -right-24 w-64 h-64 bg-[#5cc6d0]/5 rounded-full blur-[100px] pointer-events-none group-hover:bg-[#5cc6d0]/10 transition-colors duration-700"></div>

              <div className="flex flex-col md:flex-row gap-12 md:gap-24 items-center md:items-start relative z-10">
                {/* Brand / Office Label */}
                <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-8 shrink-0">
                  <div className="relative">
                    <img
                      src="https://flagcdn.com/w320/ae.png"
                      alt="UAE Flag"
                      className="w-[220px] h-auto rounded-2xl shadow-2xl transition-all duration-500 group-hover:scale-[1.02] border border-white/10"
                    />
                  </div>
                  <div>
                    <div className="h-1 w-12 bg-[#5cc6d0] mb-4 mx-auto md:mx-0"></div>
                    <h2 className="text-[#5cc6d0] text-3xl font-extrabold tracking-tighter mb-2">UAE OFFICE</h2>
                    <h3 className="text-white/90 text-xl font-medium leading-snug">
                      Rockdove Aviation <br className="hidden md:block" /> FZ-LLC
                    </h3>
                  </div>
                </div>

                {/* Details List */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-x-12 gap-y-10 w-full">
                  <div className="flex items-start gap-5 group/item">
                    <div className="bg-[#5cc6d0]/10 p-3.5 rounded-2xl border border-[#5cc6d0]/20 group-hover/item:bg-[#5cc6d0]/20 transition-all duration-300">
                      <MapPinIcon className="w-6 h-6 text-[#5cc6d0]" />
                    </div>
                    <div>
                      <p className="text-[#5cc6d0]/60 text-[11px] uppercase font-bold tracking-[0.25em] mb-2">Location</p>
                      <p className="text-gray-200 text-lg leading-relaxed font-light">
                        No. B17-22, RAK Port Customs Building, <br className="hidden lg:block" /> Nakheel Ras Al Khaimah, UAE
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-5 group/item">
                    <div className="bg-[#5cc6d0]/10 p-3.5 rounded-2xl border border-[#5cc6d0]/20 group-hover/item:bg-[#5cc6d0]/20 transition-all duration-300">
                      <WarehouseIcon className="w-6 h-6 text-[#5cc6d0]" />
                    </div>
                    <div>
                      <p className="text-[#5cc6d0]/60 text-[11px] uppercase font-bold tracking-[0.25em] mb-2">Warehouse</p>
                      <p className="text-gray-200 text-lg leading-relaxed font-light">
                        Q4-212, Sharjah International <br className="hidden lg:block" /> Airport Free Zone, UAE.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-5 group/item">
                    <div className="bg-[#5cc6d0]/10 p-3.5 rounded-2xl border border-[#5cc6d0]/20 group-hover/item:bg-[#5cc6d0]/20 transition-all duration-300">
                      <PhoneIcon className="w-6 h-6 text-[#5cc6d0]" />
                    </div>
                    <div>
                      <p className="text-[#5cc6d0]/60 text-[11px] uppercase font-bold tracking-[0.25em] mb-2">Contact</p>
                      <p className="text-gray-200 text-lg font-light tracking-wide">
                        +971 505056093 <span className="text-white/20 mx-2 hidden sm:inline lg:hidden">|</span> <br className="hidden sm:block lg:block" /> +971 505059093
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-5 group/item">
                    <div className="bg-[#5cc6d0]/10 p-3.5 rounded-2xl border border-[#5cc6d0]/20 group-hover/item:bg-[#5cc6d0]/20 transition-all duration-300">
                      <MailIcon className="w-6 h-6 text-[#5cc6d0]" />
                    </div>
                    <div>
                      <p className="text-[#5cc6d0]/60 text-[11px] uppercase font-bold tracking-[0.25em] mb-2">Email Details</p>
                      <p className="text-[#5cc6d0] text-lg font-medium hover:text-white transition-colors duration-300">
                        sales@rockdoveaviation.com
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </FadeInUp>
        </section>

        {/* ================= CONTACT FORM HEADER ================= */}
        <div className="text-center mb-16 md:mb-24">
          <FadeInUp delay={200}>
            <h2 className="text-white text-2xl md:text-3xl font-bold leading-tight max-w-3xl mx-auto">
              If required, please use the form below to contact us.
              <span className="block text-[#5cc6d0] text-lg md:text-xl font-medium mt-4">A representative from our company will respond soon.</span>
            </h2>
          </FadeInUp>
        </div>

        {/* ================= CONTACT FORM SECTION ================= */}
        <div className="flex flex-col lg:flex-row justify-center items-center gap-12 lg:gap-24 mb-12 lg:mb-40 relative">
          {/* FORM */}
          <FadeInUp delay={400} className="w-full max-w-md">
            <form className="grid gap-6 text-left z-20">
              <div>
                <label
                  htmlFor="name"
                  className="text-[#5cc6d0] font-semibold text-sm uppercase tracking-widest mb-2 block"
                >
                  Name*
                </label>
                <input
                  id="name"
                  type="text"
                  className="w-full h-12 px-4 rounded-xl bg-white/5 border border-white/10 text-white text-base focus:outline-none focus:ring-2 focus:ring-[#5cc6d0] transition-all"
                  placeholder="Your Name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="text-[#5cc6d0] font-semibold text-sm uppercase tracking-widest mb-2 block"
                >
                  Email address*
                </label>
                <input
                  id="email"
                  type="email"
                  className="w-full h-12 px-4 rounded-xl bg-white/5 border border-white/10 text-white text-base focus:outline-none focus:ring-2 focus:ring-[#5cc6d0] transition-all"
                  placeholder="email@example.com"
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="text-[#5cc6d0] font-semibold text-sm uppercase tracking-widest mb-2 block"
                >
                  Phone*
                </label>
                <input
                  id="phone"
                  type="tel"
                  className="w-full h-12 px-4 rounded-xl bg-white/5 border border-white/10 text-white text-base focus:outline-none focus:ring-2 focus:ring-[#5cc6d0] transition-all"
                  placeholder="+1 (555) 000-0000"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="text-[#5cc6d0] font-semibold text-sm uppercase tracking-widest mb-2 block"
                >
                  Write a message *
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-base focus:outline-none focus:ring-2 focus:ring-[#5cc6d0] transition-all resize-none"
                  placeholder="How can we help you?"
                />
              </div>

              {/* Smaller Submit Button */}
              <div className="mt-4">
                <button
                  type="submit"
                  className="bg-[#5cc6d0] hover:bg-[#4ab5bf] text-black font-bold tracking-widest transition-all duration-300 w-full sm:w-[160px] h-[54px] rounded-full shadow-lg shadow-[#5cc6d0]/20 hover:shadow-[#5cc6d0]/40 uppercase text-sm"
                >
                  SUBMIT
                </button>
              </div>
            </form>
          </FadeInUp>

          {/* IMAGE STACK (blue rectangle + man) */}
          <FadeInUp delay={600} className="w-full max-w-[400px]">
            <div className="relative h-[350px] sm:h-[400px] flex justify-center items-center lg:justify-end">
              {/* Blue background rectangle */}
              <img
                src="/rectangle.png"
                alt="Blue Background"
                className="absolute w-full h-full object-contain opacity-40 lg:right-[-40px]"
              />
              {/* Man image on top */}
              <img
                src="/manbusiness.png"
                alt="Business Man"
                className="absolute w-[250px] sm:w-[320px] h-auto object-contain z-10 filter drop-shadow-[0_20px_50px_rgba(92,198,208,0.3)]"
              />
            </div>
          </FadeInUp>
        </div>
      </section>
    </div>
  );
};

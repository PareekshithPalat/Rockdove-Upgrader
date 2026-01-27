"use client";
import React from "react";
import { Button } from "./ui/button";

export const Inventory: React.FC = () => {
  return (
    <section className="relative bg-black text-white py-10 px-6 sm:px-10 md:px-[178px] font-[Poppins] overflow-hidden">
      {/* Centered container with consistent alignment */}
      <div className="relative w-full max-w-[1300px] mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-16 z-10">
        {/* LEFT SIDE CONTENT */}
        <div className="space-y-8 text-center lg:text-left">
          <h2 className="text-[42px] sm:text-[48px] md:text-[54px] font-bold leading-[110%] text-[#5CC6D0] drop-shadow-[0_0_25px_rgba(92,198,208,0.4)]">
            Broad Inventory
          </h2>

          <p className="text-[16px] sm:text-[17px] md:text-[18px] text-gray-300 font-medium leading-relaxed max-w-[550px] mx-auto lg:mx-0">
            Rockdove Aviation's Broad Inventory, with over 500,000 items
            including Rotables, consumables, expendables, tools, and placards,
            ensures rapid access to high-quality aircraft parts for Boeing,
            Airbus, and Embraer, minimizing downtime through our UAE warehouse
            and global partnership.
          </p>

          <div className="flex justify-center lg:justify-start">
            <Button
              className="
                relative overflow-hidden
                bg-gradient-to-b from-[#5CC6D0] to-[#14919B]
                text-white
                font-semibold
                text-lg
                px-8 py-3
                rounded-xl
                shadow-[0_6px_20px_rgba(92,198,208,0.4)]
                transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]
                hover:scale-[1.05]
                active:scale-[0.97]
                hover:shadow-[0_10px_25px_rgba(92,198,208,0.6)]
              "
            >
              Know more
            </Button>
          </div>
        </div>

        {/* RIGHT SIDE IMAGE */}
        <div className="flex justify-center lg:justify-end relative">

          <img
            src="/RDINVENT.png"
            alt="Broad Inventory Illustration"
            className="w-[80%] sm:w-[70%] md:w-[85%] lg:w-full max-w-[500px] h-auto object-contain transition-transform duration-700 ease-in-out hover:scale-110 hover:drop-shadow-[0_0_30px_rgba(92,198,208,0.6)]"
          />
        </div>
      </div>
    </section>
  );
};
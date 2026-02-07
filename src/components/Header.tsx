import React, { useEffect, useRef, useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

type NavLink = { label: string; href: string; icon?: string; desc?: string };

const SERVICES: NavLink[] = [
  {
    label: "Asset Management",
    href: "/asset-management",
    icon: "/file.png",
    desc: "Manage your fleet with our 400,000+ part inventory.",
  },
  {
    label: "Repair Management",
    href: "/repair-management",
    icon: "/bag.png",
    desc: "Reliable component repairs with minimal downtime.",
  },
  {
    label: "24/7 AOG Support",
    href: "/aog-support",
    icon: "/ava.png",
    desc: "Parts ready in 60–90 minutes for AOG emergencies.",
  },
];

const COMPANY: NavLink[] = [
  {
    label: "The Story",
    href: "/the-story",
    icon: "/1.png",
    desc: "Our journey so far, our future direction, and why we’re thrilled to have you with us.",
  },
  {
    label: "Career",
    href: "/careers",
    icon: "/2.png",
    desc: "Become part of Rockdove’s dynamic team and elevate your career.",
  },
  {
    label: "MRO",
    href: "/mro",
    icon: "/3.png",
    desc: "Explore on our journey and secure an early appointment to connect with us.",
  },
  {
    label: "FAQs",
    href: "/faqs",
    icon: "/4.png",
    desc: "Find fast solutions to our most frequently asked questions.",
  },
];

const Header: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const containerRef = useRef<HTMLElement | null>(null);
  const hoverTimeout = useRef<NodeJS.Timeout | null>(null);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleOutside = (e: MouseEvent | TouchEvent) => {
      if (!containerRef.current?.contains(e.target as Node)) {
        setActiveDropdown(null);
        setMobileOpen(false);
      }
    };
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setActiveDropdown(null);
        setMobileOpen(false);
      }
    };
    document.addEventListener("mousedown", handleOutside);
    document.addEventListener("touchstart", handleOutside);
    document.addEventListener("keydown", handleEsc);
    return () => {
      document.removeEventListener("mousedown", handleOutside);
      document.removeEventListener("touchstart", handleOutside);
      document.removeEventListener("keydown", handleEsc);
    };
  }, []);

  const toggleDropdown = (name: string) => {
    setActiveDropdown((prev) => (prev === name ? null : name));
  };

  const handleMouseEnter = (name: string) => {
    if (hoverTimeout.current) clearTimeout(hoverTimeout.current);
    setActiveDropdown(name);
  };

  const handleMouseLeave = () => {
    hoverTimeout.current = setTimeout(() => setActiveDropdown(null), 200);
  };

  return (
    <header
      ref={containerRef}
      className="w-full relative top-0 left-0 z-50 bg-black font-[Poppins]"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="h-28 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <img
              src="/rockdove-logo.png"
              alt="RockDove Logo"
              className="h-24 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-12 text-[17px] font-semibold">
            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter("services")}
              onMouseLeave={handleMouseLeave}
            >
              <button
                onClick={() => toggleDropdown("services")}
                className={`inline-flex items-center gap-2 transition-colors ${activeDropdown === "services"
                  ? "text-white"
                  : "text-[#5CC6D0] hover:text-white"
                  }`}
              >
                Services <ChevronDown className="h-5 w-5" />
              </button>

              {activeDropdown === "services" && (
                <div
                  className="absolute left-1/2 -translate-x-1/2 mt-4 w-[998px] rounded-3xl shadow-2xl overflow-hidden"
                  style={{
                    background: `
                      linear-gradient(0deg, #5CC6D0, #5CC6D0),
                      linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(20, 40, 50, 0.25) 100%)
                    `,
                  }}
                >
                  <div className="flex h-full">
                    <div className="flex-1 p-8">
                      <p className="text-black font-medium text-sm mb-6">
                        Explore Our Services
                      </p>
                      <div className="flex flex-col gap-6">
                        {SERVICES.map((s) => (
                          <Link
                            key={s.href}
                            to={s.href}
                            className="flex items-start gap-4 hover:bg-white/10 p-3 rounded-xl transition"
                          >
                            <div className="bg-white rounded-lg p-3 shadow-md">
                              <img src={s.icon} alt="" className="w-6 h-6" />
                            </div>
                            <div>
                              <p className="text-black font-semibold text-base">
                                {s.label}
                              </p>
                              <p className="text-black/80 text-sm leading-tight">
                                {s.desc}
                              </p>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>

                    <div className="w-[1px] bg-black/20 my-8"></div>

                    <div className="w-[40%] p-8 flex flex-col justify-between">
                      <div>
                        <h4 className="text-black font-semibold text-lg mb-3">
                          Request for quote
                        </h4>
                        <p className="text-black/80 text-sm leading-relaxed mb-5">
                          With our extensive inventory and strategic UAE
                          locations, we ensure reliable, cost-effective
                          solutions for Boeing, Airbus, and Embraer fleets.
                        </p>
                      </div>
                      <Link
                        to="/rfq"
                        className="inline-flex items-center justify-center gap-2 bg-[#EAEAEA] text-black font-semibold text-sm px-5 py-3 rounded-xl transition-all duration-300 w-fit"
                      >
                        <img
                          src="/sign.png"
                          alt=""
                          className="w-10 h-6 opacity-70"
                        />
                        Go to Form
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* RFQ Link */}
            <Link
              to="/rfq"
              className="text-[#5CC6D0] hover:text-white transition-colors"
            >
              RFQ
            </Link>

            {/* Company Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter("company")}
              onMouseLeave={handleMouseLeave}
            >
              <button
                onClick={() => toggleDropdown("company")}
                className={`inline-flex items-center gap-2 transition-colors ${activeDropdown === "company"
                  ? "text-white"
                  : "text-[#5CC6D0] hover:text-white"
                  }`}
              >
                Company <ChevronDown className="h-5 w-5" />
              </button>

              {activeDropdown === "company" && (
                <div
                  className="absolute left-1/2 -translate-x-[51%] mt-4 w-[1000px] rounded-3xl shadow-2xl overflow-hidden"
                  style={{
                    background: `
                      linear-gradient(0deg, #5CC6D0, #5CC6D0),
                      linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(20, 40, 50, 0.25) 100%)
                    `,
                  }}
                >
                  <div className="flex h-full">
                    <div className="flex-1 p-8">
                      <p className="text-black font-medium text-sm mb-6">
                        Know more about Company
                      </p>

                      <div className="grid grid-cols-2 gap-6">
                        {COMPANY.map((item) => (
                          <Link
                            key={item.href}
                            to={item.href}
                            className="flex items-start gap-4 hover:bg-white/10 p-3 rounded-xl transition"
                          >
                            <div className="bg-white rounded-lg p-3 shadow-md flex-shrink-0">
                              <img
                                src={item.icon}
                                alt=""
                                className="w-10 h-10 object-contain"
                              />
                            </div>

                            <div>
                              <p className="text-black font-semibold text-base">
                                {item.label}
                              </p>
                              <p className="text-black/80 text-sm leading-snug">
                                {item.desc}
                              </p>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>

                    <div className="w-[1px] bg-black/20 my-8"></div>

                    <div className="w-[34%] p-7 flex flex-col justify-between">
                      <div>
                        <h4 className="text-black font-semibold text-base mb-2">
                          Request for Quote
                        </h4>
                        <p className="text-black/80 text-sm leading-relaxed mb-5">
                          With our extensive inventory and UAE presence, we
                          ensure cost-effective, reliable support for Boeing,
                          Airbus, and Embraer fleets.
                        </p>
                      </div>

                      <Link
                        to="/rfq"
                        className="inline-flex items-center justify-center gap-2 bg-[#EAEAEA] text-black font-semibold text-sm px-4 py-2.5 rounded-xl transition-all duration-300 w-fit"
                      >
                        <img
                          src="/sign.png"
                          alt=""
                          className="w-8 h-5 opacity-70"
                        />
                        Go to Form
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </nav>

          {/* Contact Button */}
          <Link
            to="/contact"
            className="hidden md:inline-block border border-[#5CC6D0] text-[#5CC6D0] rounded-full px-5 py-2 font-semibold hover:bg-[#5CC6D0] hover:text-black transition"
          >
            Contact
          </Link>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-[#5CC6D0] hover:text-white"
            onClick={() => setMobileOpen((v) => !v)}
          >
            {mobileOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* ✅ Fixed Mobile Menu */}
        {mobileOpen && (
          <div className="md:hidden fixed inset-0 top-20 bg-black bg-opacity-95 backdrop-blur-sm z-50 overflow-y-auto transition-all duration-300">
            <div className="flex flex-col p-6 space-y-5 text-[#5CC6D0] font-medium text-lg">
              <Link to="/asset-management" className="hover:text-white transition-colors" onClick={() => setMobileOpen(false)}>Asset Management</Link>
              <Link to="/repair-management" className="hover:text-white transition-colors" onClick={() => setMobileOpen(false)}>Repair Management</Link>
              <Link to="/aog-support" className="hover:text-white transition-colors" onClick={() => setMobileOpen(false)}>AOG Support</Link>
              <hr className="border-gray-700" />
              <Link to="/the-story" className="hover:text-white transition-colors" onClick={() => setMobileOpen(false)}>The Story</Link>
              <Link to="/careers" className="hover:text-white transition-colors" onClick={() => setMobileOpen(false)}>Careers</Link>
              <Link to="/mro" className="hover:text-white transition-colors" onClick={() => setMobileOpen(false)}>MRO</Link>
              <Link to="/faqs" className="hover:text-white transition-colors" onClick={() => setMobileOpen(false)}>FAQs</Link>
              <hr className="border-gray-700" />
              <Link to="/rfq" className="hover:text-white transition-colors" onClick={() => setMobileOpen(false)}>RFQ</Link>
              <Link to="/contact" className="hover:text-white transition-colors" onClick={() => setMobileOpen(false)}>Contact</Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
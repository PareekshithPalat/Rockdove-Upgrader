import React, { useState, useRef, useEffect } from "react";
import { PageLayout } from "../components/PageLayout";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { RadioGroup, RadioGroupItem } from "../components/ui/radio-group";
import { Textarea } from "../components/ui/textarea";

const jobTypes = [
  { id: "internship", label: "Internship" },
  { id: "fulltime", label: "Full Time" },
];

const jobRoles = [
  { id: "sales", label: "Sales" },
  { id: "finance", label: "Finance" },
  { id: "marketing", label: "Marketing" },
  { id: "hr", label: "HR" },
  { id: "admin", label: "Admin" },
];

const positions = [
  "Procurement Analyst",
  "Business Associate",
  "Senior Business Associate",
  "Senior Finance Manager",
  "Finance Manager",
  "Finance Executive",
  "HR Manager",
  "Operations Manager",
  "Digital Marketing Executive",
  "Office Admin",
];

const Career = (): JSX.Element => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedPosition, setSelectedPosition] = useState("");
  const dropdownRef = useRef<HTMLDivElement>(null);

  // close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <PageLayout>
      <div className="bg-black overflow-hidden w-full min-h-screen relative">
        <div className="max-w-[1440px] mx-auto">
          <main>
            {/* Hero Section */}
            <section className="flex flex-col items-center px-9 pt-32 md:pt-48 pb-16 animate-fade-in">
              <h1 className="[font-family:'Poppins',Helvetica] font-bold text-[40px] text-center leading-[60px] mb-6">
                <span className="text-[#5cc6d0]">Soar with</span>
                <br />
                <span className="text-white">Rockdove Aviation</span>
              </h1>
              <p className="[font-family:'Poppins',Helvetica] font-medium text-white text-[24px] md:text-[32px] text-center max-w-[931px]">
                Be part of a fast-growing aviation leader
              </p>
            </section>

            {/* Why Join Us */}
            <section className="flex flex-col items-center px-9 py-16 animate-fade-in">
              <h2 className="[font-family:'Poppins',Helvetica] font-bold text-white text-[32px] md:text-[40px] text-center mb-6">
                Why Join Us?
              </h2>
              <div className="w-[93px] h-[3px] bg-[#5cc6d0] mb-8" />
              <p className="[font-family:'Poppins',Helvetica] font-medium text-white text-2xl text-center max-w-[861px]">
                We value talent and growth, nurturing every team member to reach
                their full potential. From day one, you&apos;ll gain hands-on
                experience in a dynamic, high-impact aviation environment. With
                clear pathways to leadership, your ambition fuels our mission to
                lead the global aftermarket.
              </p>
            </section>

            {/* Our Perks Section */}
            {/* <section className="px-9 py-20 flex flex-col items-center">
              <h2 className="[font-family:'Poppins',Helvetica] font-bold text-[#5cc6d0] text-[40px] text-left mb-2 ml-[-820px]">
                Our Perks
              </h2>
              <p className="[font-family:'Poppins',Helvetica] font-bold text-white text-[24px] text-left mb-24 ml-[-770px]">
                Here&apos;s what you get:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-[1100px] mx-auto justify-items-center">
                {[
                  {
                    title: "Medical Insurance",
                    description:
                      "We ensure the health and safety of our employees by providing comprehensive medical insurance coverage for them and their families.",
                  },
                  {
                    title: "CSR Initiatives",
                    description:
                      "We actively take part in community development and support social causes that create a positive impact.",
                  },
                  {
                    title: "Weekend Turf",
                    description:
                      "Our weekend turf sessions offer a fun way for employees to relax, recharge, and build team spirit.",
                  },
                  {
                    title: "Festival Celebrations",
                    description:
                      "Every festival is celebrated with enthusiasm, bringing the team together in a joyful and friendly atmosphere.",
                  },
                  {
                    title: "MRO",
                    description:
                      "Employees gain valuable exposure through international trips and MRO visits that enhance professional experience and learning.",
                  },
                  {
                    title: "Career Growth",
                    description:
                      "We provide continuous learning opportunities and a clear path for professional development.",
                  },
                  {
                    title: "Flat Hierarchy",
                    description:
                      "We encourage open communication and easy access to leadership for guidance and collaboration.",
                  },
                  {
                    title: "Awards and Rewards",
                    description:
                      "Employee achievements are recognized and appreciated through regular awards and acknowledgments.",
                  },
                  {
                    title: "Team Outs",
                    description:
                      "Regular team lunches and outings provide a refreshing break from work and help build stronger connections within the team.",
                  },
                ].map((perk, index) => (
                  <div
                    key={index}
                    className="bg-[#D9D9D9] w-[320px] h-[260px] rounded-[8px] flex flex-col justify-end items-start text-left shadow-[0px_0px_4px_#00000040] transition-transform hover:scale-[1.03] p-6"
                  >
                    <h3 className="[font-family:'Poppins',Helvetica] font-semibold text-black text-[18px] mb-2">
                      {perk.title}
                    </h3>
                    <p className="[font-family:'Poppins',Helvetica] font-normal text-[#3e3e3e] text-[15px] leading-[26px]">
                      {perk.description}
                    </p>
                  </div>
                ))}
              </div>
            </section> */}

            {/* Application Form */}
            <section className="relative px-4 sm:px-6 md:px-12 lg:px-[178px] py-24 bg-transparent">
              <h2 className="[font-family:'Poppins',Helvetica] font-bold text-[#5cc6d0] text-[40px] mb-12 text-left">
                Join Our Team - Employee Gallery
              </h2>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                {/* Left Form Section */}
                <div className="flex flex-col space-y-8">
                  {/* Job Type */}
                  <div>
                    <Label className="[font-family:'Poppins',Helvetica] font-semibold text-white text-xl mb-3 block">
                      Select which type you are applying for{" "}
                      <span className="text-[#f50000]">*</span>
                    </Label>
                    <RadioGroup defaultValue="internship" className="space-y-3">
                      {jobTypes.map((type) => (
                        <div key={type.id} className="flex items-center gap-3">
                          <RadioGroupItem
                            value={type.id}
                            id={type.id}
                            className="
                              w-4 h-4 border-2 border-[#d9d9d9]
                              data-[state=checked]:border-[#00E0FF]
                              data-[state=checked]:bg-[#00E0FF]
                              data-[state=checked]:shadow-[0_0_6px_#00E0FF]
                              rounded-full transition-all duration-200
                            "
                          />
                          <Label
                            htmlFor={type.id}
                            className="[font-family:'Poppins',Helvetica] font-normal text-white text-[15px] cursor-pointer"
                          >
                            {type.label}
                          </Label>
                        </div>
                      ))}
                    </RadioGroup>
                  </div>

                  {/* Job Role */}
                  <div>
                    <Label className="[font-family:'Poppins',Helvetica] font-semibold text-white text-xl mb-3 block">
                      Select which role you are applying for{" "}
                      <span className="text-[#f50000]">*</span>
                    </Label>
                    <RadioGroup defaultValue="sales" className="space-y-3">
                      {jobRoles.map((role) => (
                        <div key={role.id} className="flex items-center gap-3">
                          <RadioGroupItem
                            value={role.id}
                            id={role.id}
                            className="
                              w-4 h-4 border-2 border-[#d9d9d9]
                              data-[state=checked]:border-[#00E0FF]
                              data-[state=checked]:bg-[#00E0FF]
                              data-[state=checked]:shadow-[0_0_6px_#00E0FF]
                              rounded-full transition-all duration-200
                            "
                          />
                          <Label
                            htmlFor={role.id}
                            className="[font-family:'Poppins',Helvetica] font-normal text-white text-[15px] cursor-pointer"
                          >
                            {role.label}
                          </Label>
                        </div>
                      ))}
                    </RadioGroup>
                  </div>

                  {/* Position Dropdown */}
                  <div ref={dropdownRef} className="relative">
                    <Label className="[font-family:'Poppins',Helvetica] font-semibold text-white text-xl mb-3 block">
                      Position Applying For{" "}
                      <span className="text-[#f50000]">*</span>
                    </Label>
                    <button
                      type="button"
                      onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                      className="h-[50px] w-full bg-[#e7e7e7] rounded-[8px] border border-transparent px-4 text-[#3c3c3c] text-sm [font-family:'Poppins',Helvetica] text-left focus:ring-2 focus:ring-[#00E0FF] focus:outline-none flex justify-between items-center"
                    >
                      {selectedPosition || "Select a position"}
                      <span
                        className={`text-[#00E0FF] ml-2 transform transition-transform duration-300 ${isDropdownOpen ? "rotate-180" : "rotate-0"
                          }`}
                      >
                        ▼
                      </span>
                    </button>

                    <div
                      className={`absolute z-10 mt-2 w-full bg-white rounded-[8px] shadow-lg transition-all duration-300 ease-in-out overflow-hidden ${isDropdownOpen
                        ? "max-h-60 opacity-100"
                        : "max-h-0 opacity-0"
                        }`}
                    >
                      <ul className="py-2 max-h-60 overflow-y-auto scrollbar-thin scrollbar-thumb-[#00E0FF]/50 scrollbar-track-transparent">
                        {positions.map((pos) => (
                          <li
                            key={pos}
                            onClick={() => {
                              setSelectedPosition(pos);
                              setIsDropdownOpen(false);
                            }}
                            className="px-4 py-2 text-[#3c3c3c] hover:bg-[#00E0FF]/20 cursor-pointer [font-family:'Poppins',Helvetica]"
                          >
                            {pos}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Remaining Input Fields */}
                  {[
                    {
                      id: "name",
                      label: "Enter your name",
                      placeholder: "Enter your full name",
                      required: true,
                    },
                    {
                      id: "email",
                      label: "Enter your Email ID",
                      placeholder: "Enter your email",
                      type: "email",
                      required: true,
                    },
                    {
                      id: "contact",
                      label: "Enter your contact no",
                      placeholder: "Enter your contact number",
                      required: true,
                    },
                    {
                      id: "education",
                      label: "Enter your Educational Qualification",
                      placeholder: "Enter your educational qualification",
                      required: true,
                    },
                  ].map(({ id, label, placeholder, type, required }) => (
                    <div key={id}>
                      <Label
                        htmlFor={id}
                        className="[font-family:'Poppins',Helvetica] font-semibold text-white text-xl mb-3 block"
                      >
                        {label}
                        {required && <span className="text-[#f50000]">*</span>}
                      </Label>
                      <Input
                        id={id}
                        type={type || "text"}
                        placeholder={placeholder}
                        className="h-[50px] bg-[#e7e7e7] rounded-[8px] border border-transparent focus:ring-2 focus:ring-[#00E0FF] focus:outline-none px-4 text-[#3c3c3c] text-sm [font-family:'Poppins',Helvetica]"
                      />
                    </div>
                  ))}

                  {/* Attachments */}
                  {[
                    { id: "resume", label: "Attach your Resume" },
                    { id: "photo", label: "Attach your recent photo" },
                  ].map(({ id, label }) => (
                    <div key={id}>
                      <Label
                        htmlFor={id}
                        className="[font-family:'Poppins',Helvetica] font-semibold text-white text-xl mb-3 block"
                      >
                        {label} <span className="text-[#f50000]">*</span>
                      </Label>
                      <input
                        type="file"
                        id={id}
                        className="block w-full text-sm text-[#3c3c3c] bg-[#e7e7e7] rounded-[8px] p-2 cursor-pointer focus:ring-2 focus:ring-[#00E0FF]"
                      />
                    </div>
                  ))}

                  {/* Address */}
                  <div>
                    <Label
                      htmlFor="address"
                      className="[font-family:'Poppins',Helvetica] font-semibold text-white text-xl mb-3 block"
                    >
                      Enter your Current Address{" "}
                      <span className="text-[#f50000]">*</span>
                    </Label>
                    <Textarea
                      id="address"
                      placeholder="Enter your current address"
                      className="min-h-[100px] bg-[#e7e7e7] rounded-[8px] border border-transparent focus:ring-2 focus:ring-[#00E0FF] focus:outline-none px-4 py-2 text-[#3c3c3c] text-sm [font-family:'Poppins',Helvetica] resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-4">
                    <Button className="w-[160px] rounded-[40px] bg-gradient-to-b from-[#5cc6d0] to-[#14919b] [font-family:'Poppins',Helvetica] font-bold text-white text-lg py-3 hover:opacity-90 transition-all duration-200">
                      SUBMIT
                    </Button>
                  </div>
                </div>

                {/* Right Image beside radio section */}
                <div className="flex justify-center items-start lg:pt-[50px]">
                  <img
                    className="w-full max-w-[420px] object-contain"
                    alt="Hiring illustration"
                    src="https://c.animaapp.com/mh6jeg64gltCdD/img/undraw-hiring-8szx-1.svg"
                  />
                </div>
              </div>
            </section>

            {/* Contact HR Section */}
            <section className="flex flex-col items-center px-9 py-24 animate-fade-in">
              <h2 className="[font-family:'Poppins',Helvetica] font-bold text-[#5cc6d0] text-[32px] md:text-[40px] text-center mb-8 uppercase">
                Grow with Rockdove Aviation - Contact HR
              </h2>
              <Button className="flex items-center gap-3 h-auto rounded-[40px] bg-[linear-gradient(180deg,rgba(92,198,208,1)_0%,rgba(20,145,155,1)_100%)] border-0 [font-family:'Poppins',Helvetica] font-bold text-white text-2xl px-12 py-4 hover:opacity-90 transition-opacity">
                <img
                  src="/smail.svg"
                  alt="Mail Icon"
                  className="w-6 h-6 object-contain"
                />
                HR@rockdoveaviation.com
              </Button>
            </section>
          </main>
        </div>
      </div>
    </PageLayout>
  );
};

export default Career;

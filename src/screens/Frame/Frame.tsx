import { ChevronDown as ChevronDownIcon } from "lucide-react";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";

const navigationItems = [
  { label: "Services", hasDropdown: true },
  { label: "RFQ", hasDropdown: false },
  { label: "Company", hasDropdown: true },
];

const serviceCards = [
  {
    title: "Asset \nManagement",
    gradient: true,
  },
  {
    title: "Repair \nManagement",
    gradient: false,
  },
  {
    title: "24/7 AOG \nSupport",
    gradient: false,
  },
];

const inventoryCategories = [
  { label: "Consumables", top: "top-[19px]", left: "left-0" },
  { label: "Rotables", top: "top-[76px]", left: "left-[133px]" },
  { label: "Expendables", top: "top-[185px]", left: "left-[198px]" },
  { label: "Tools", top: "top-[114px]", left: "left-[313px]" },
  { label: "Placards", top: "top-0", left: "left-[370px]" },
];

const features = [
  {
    number: "01",
    title: "Quality we follow",
    left: "left-[87px]",
    top: "top-[3856px]",
    titleTop: "top-[3929px]",
  },
  {
    number: "02",
    title: "Logistics",
    left: "left-[880px]",
    top: "top-[4088px]",
    titleTop: "top-[4148px]",
    titleLeft: "left-[790px]",
  },
  {
    number: "03",
    title: "From OEM to \nCustomer",
    left: "left-[90px]",
    top: "top-[4362px]",
    titleTop: "top-[4422px]",
  },
  {
    number: "04",
    title: "Accreditation",
    left: "left-[886px]",
    top: "top-[4604px]",
    titleTop: "top-[4664px]",
    titleLeft: "left-[720px]",
  },
];

const faqItems = [
  {
    question: "What kind of certificate will come with the products?",
    top: "top-[5016px]",
    lineTop: "top-[4997px]",
    arrowTop: "top-[5022px]",
  },
  {
    question: "What is the warranty period for the unit supplied?",
    top: "top-[5100px]",
    lineTop: "top-[5069px]",
    arrowTop: "top-[5107px]",
  },
  {
    question: "Average self life for the consumable supplied?",
    top: "top-[5183px]",
    lineTop: "top-[5152px]",
    arrowTop: "top-[5190px]",
  },
];

const footerServices = [
  "Asset Management",
  "Repair Management",
  "24/7 AOG Support",
];

const footerCompany = ["Story", "Careers", "FAQs"];

const footerLogos = [
  {
    src: "/download--12--removebg-preview.png",
    alt: "Download removebg",
    className:
      "absolute top-[50px] left-[154px] w-[88px] h-[88px] object-cover transition-transform duration-300 hover:scale-110",
  },
  {
    src: "/images--1--removebg-preview.png",
    alt: "Images removebg",
    className: "absolute top-[69px] left-24 w-[49px] h-[49px] object-cover transition-transform duration-300 hover:scale-110",
  },
  {
    src: "/images--2--removebg-preview.png",
    alt: "Images removebg",
    className: "absolute top-[85px] left-0 w-[78px] h-[17px] object-cover transition-transform duration-300 hover:scale-110",
  },
];

export const Frame = (): JSX.Element => {
  return (
    <div className="bg-black overflow-hidden w-full min-w-[1055px] min-h-[6731px] relative">
      <img
        className="absolute top-[5402px] left-0 w-[1055px] h-[891px] object-cover"
        alt="Hd wallpaper night"
        src="/hd-wallpaper--night--airport--boeing-737--mau--ukraine-internati.png"
      />

      <img
        className="absolute top-52 left-0 w-[1055px] h-[1889px] object-cover"
        alt="Download free image"
        src="/download-free-image-of-photography-of-airplane-aircraft-airliner.png"
      />

      <header className="absolute top-[58px] left-[58px] right-[58px] flex items-center justify-between">
        <img
          className="w-[550px] h-[170px] object-contain transition-transform duration-300 hover:scale-105"
          alt="Rda gradient logo"
          src="/rockdove-logo.png"
        />

        <nav className="flex items-center gap-8">
          {navigationItems.map((item, index) => (
            <div key={index} className="flex items-center gap-2 cursor-pointer group transition-transform duration-300 hover:scale-105">
              <span className="[font-family:'Poppins',Helvetica] font-bold text-[#5cc6d0] text-[15px] tracking-[0] leading-[normal] transition-colors duration-300 group-hover:text-[#4ab5bf]">
                {item.label}
              </span>
              {item.hasDropdown && (
                <ChevronDownIcon className="w-[23px] h-[11px] text-[#5cc6d0] transition-all duration-300 group-hover:text-[#4ab5bf] group-hover:translate-y-0.5" />
              )}
            </div>
          ))}

          <Button
            variant="outline"
            className="h-auto rounded-[40px] border border-solid border-white bg-transparent px-6 py-1 transition-all duration-300 hover:bg-white hover:scale-105"
          >
            <span className="[font-family:'Poppins',Helvetica] font-semibold text-white text-[15px] tracking-[0] leading-[normal] transition-colors duration-300 hover:text-black">
              Contact
            </span>
          </Button>
        </nav>
      </header>

      <section className="absolute top-[255px] left-[199px] text-center">
        <h1 className="[font-family:'Poppins',Helvetica] font-semibold text-5xl tracking-[0] leading-[normal] animate-fade-up">
          <span className="text-white">Parts, Service and</span>
          <span className="text-[#5cc6d0]"> Solution</span>
        </h1>

        <p className="mt-[115px] w-[1161px] -ml-[65px] [font-family:'Poppins',Helvetica] font-medium text-white text-xl text-center tracking-[0] leading-[normal] animate-fade-up" style={{ animationDelay: '0.2s', opacity: 0 }}>
          The one-stop destination for all of your aircraft components
          <br /> and servicing for a safe flight
        </p>

        <Button className="mt-[103px] h-auto bg-[#5cc6d0] rounded-[40px] border-0 px-8 py-2 transition-all duration-300 hover:bg-[#4ab5bf] hover:scale-110 hover:shadow-lg hover:shadow-[#5cc6d0]/50 animate-fade-up" style={{ animationDelay: '0.4s', opacity: 0 }}>
          <span className="[font-family:'Poppins',Helvetica] font-semibold text-white text-[15px] tracking-[0] leading-[normal]">
            Know more
          </span>
        </Button>
      </section>

      <section className="absolute top-[1025px] left-0 w-[1055px] h-[1100px]">
        <img
          className="w-full h-full"
          alt="Pngwing com"
          src="/pngwing-com--9--3-1.png"
        />

        <h2 className="absolute top-[274px] left-[439px] [font-family:'Poppins',Helvetica] font-semibold text-white text-5xl text-center tracking-[0] leading-[normal] transition-transform duration-500 hover:scale-105">
          Clients
        </h2>

        <img
          className="absolute top-[357px] left-[43px] w-[962px] h-[413px] transition-transform duration-500 hover:scale-105"
          alt="Rda MRO black AZURE"
          src="/rda---mro-black-azure-cmyk-1.png"
        />
      </section>

      <section className="absolute top-[1840px] left-[73px] flex gap-[27px]">
        {serviceCards.map((card, index) => (
          <Card
            key={index}
            className={`w-[281px] h-[345px] rounded-[20px] border-0 transition-all duration-500 hover:scale-105 hover:shadow-2xl cursor-pointer group ${card.gradient
              ? "bg-[linear-gradient(180deg,rgba(92,198,208,1)_0%,rgba(0,151,161,1)_100%)] hover:shadow-[#5cc6d0]/50"
              : "bg-[#d9d9d9] hover:shadow-gray-500/50"
              }`}
          >
            <CardContent className="p-8 flex flex-col justify-between h-full">
              <h3
                className={`[font-family:'Poppins',Helvetica] font-semibold text-2xl tracking-[0] leading-[normal] whitespace-pre-line ${card.gradient ? "text-white" : "text-black"
                  }`}
              >
                {card.title}
              </h3>

              <img
                className="w-[45px] h-[45px] self-end transition-transform duration-300 group-hover:translate-x-2"
                alt="Next page"
                src="/next-page-2.png"
              />
            </CardContent>
          </Card>
        ))}
      </section>

      <section className="absolute top-[2255px] left-[70px]">
        <h2 className="[font-family:'Poppins',Helvetica] font-bold text-[#5cc6d0] text-5xl text-center tracking-[0] leading-[normal] transition-transform duration-500 hover:scale-105">
          Broad Inventory
        </h2>

        <div className="mt-[181px] w-[337px] h-[318px] flex items-center justify-center [font-family:'Poppins',Helvetica] font-medium text-white text-2xl text-justify tracking-[0] leading-[normal]">
          Backed by a global supply chain and round-the-clock support, we ensure
          fast, reliable delivery to keep your operations running smoothly.
        </div>

        <Button className="mt-[67px] h-auto bg-transparent border-0 p-0 hover:bg-transparent relative transition-transform duration-300 hover:scale-110">
          <img
            className="w-[150px] h-[46px]"
            alt="Rectangle"
            src="/rectangle-6.svg"
          />
          <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 [font-family:'Poppins',Helvetica] font-semibold text-white text-2xl tracking-[0] leading-[normal]">
            Explore
          </span>
        </Button>
      </section>

      <div className="absolute top-[2681px] left-[439px] w-[555px] h-[209px] relative">
        {inventoryCategories.map((category, index) => (
          <div
            key={index}
            className={`absolute ${category.top} ${category.left} [font-family:'Poppins',Helvetica] font-semibold text-white text-base tracking-[0] leading-[normal] transition-all duration-300 hover:text-[#5cc6d0] hover:scale-110 cursor-pointer`}
          >
            {category.label}
          </div>
        ))}
      </div>

      <img
        className="absolute top-[2255px] left-[411px] w-[644px] h-[829px] object-cover transition-transform duration-700 hover:scale-105"
        alt="Untitled design"
        src="/untitled-design--3--1.png"
      />

      <section className="absolute top-[3045px] left-[70px]">
        <h2 className="[font-family:'Poppins',Helvetica] font-semibold text-5xl text-center tracking-[0] leading-[normal]">
          <span className="text-[#5cc6d0]">
            From urgent needs to routine care, <br />
            our parts bring{" "}
          </span>
          <span className="text-white">speed and reliability</span>
          <span className="text-[#5cc6d0]">.</span>
        </h2>

        <img
          className="mt-[192px] w-[881px] h-[3px]"
          alt="Line"
          src="/line-6.svg"
        />

        <div className="mt-[41px] flex items-center gap-[191px]">
          <div className="transition-transform duration-500 hover:scale-110">
            <div className="[font-family:'Poppins',Helvetica] font-bold text-[#55cccc] text-[40px] tracking-[0] leading-[normal]">
              27k+
            </div>
            <div className="mt-[64px] [font-family:'Poppins',Helvetica] font-medium text-white text-[32px] text-center tracking-[0] leading-[normal]">
              Inventories
            </div>
          </div>

          <img
            className="w-[196px] h-[196px] object-cover transition-transform duration-500 hover:scale-110 hover:rotate-12"
            alt="Element removebg"
            src="/7z2dnha8-removebg-preview-1.png"
          />

          <div className="transition-transform duration-500 hover:scale-110">
            <div className="[font-family:'Poppins',Helvetica] font-bold text-[#55cccc] text-[40px] text-center tracking-[0] leading-[normal]">
              400,000
            </div>
            <div className="mt-[64px] [font-family:'Poppins',Helvetica] font-medium text-white text-[32px] text-center tracking-[0] leading-[normal]">
              Parts
            </div>
          </div>

          <img
            className="w-[245px] h-[153px] object-cover transition-transform duration-500 hover:scale-110"
            alt="Element f"
            src="/360-f-188273616-ocnkpdm5ghyjcbywmohaoy6qz0h30auf-removebg-previe.png"
          />
        </div>
      </section>

      <section className="absolute top-[3664px] left-[170px]">
        <h2 className="[font-family:'Poppins',Helvetica] font-semibold text-5xl text-center tracking-[0] leading-[normal]">
          <span className="text-white">Fly safe with parts you</span>
          <span className="text-[#5cc6d0]"> trust.</span>
        </h2>
      </section>

      <img
        className="absolute top-[3886px] left-[517px] w-3.5 h-[869px]"
        alt="Line"
        src="/line-1.svg"
      />

      <img
        className="absolute top-[4087px] left-[472px] w-[103px] h-[122px] object-cover transition-transform duration-500 hover:scale-110 hover:rotate-12"
        alt="Pngwing com"
        src="/pngwing-com--28--28-1.png"
      />

      {features.map((feature, index) => (
        <div key={index} className="transition-all duration-500 hover:scale-105">
          <div
            className={`absolute ${feature.top} ${feature.left} [font-family:'Poppins',Helvetica] font-bold text-[#5cc6d0] text-[40px] tracking-[0] leading-[normal]`}
          >
            {feature.number}
          </div>
          <div
            className={`absolute ${feature.titleTop} ${feature.titleLeft || feature.left} [font-family:'Poppins',Helvetica] font-medium text-white text-[32px] tracking-[0] leading-[normal] whitespace-pre-line`}
          >
            {feature.title}
          </div>
        </div>
      ))}

      <section className="absolute top-[4901px] left-[63px]">
        <h2 className="[font-family:'Poppins',Helvetica] font-semibold text-white text-5xl text-center tracking-[0] leading-[normal]">
          FAQS
        </h2>

        <p className="mt-[97px] [font-family:'Poppins',Helvetica] font-semibold text-white text-2xl tracking-[0] leading-[normal]">
          Here are answers to <br />
          questions our clients ask.
        </p>
      </section>

      {faqItems.map((faq, index) => (
        <div key={index} className="group">
          <img
            className={`absolute ${faq.lineTop} left-[520px] w-[457px] h-px object-cover`}
            alt="Line"
            src="/line-5.svg"
          />
          <div
            className={`absolute ${faq.top} left-[520px] w-[998px] [font-family:'Poppins',Helvetica] font-medium text-white text-base tracking-[0] leading-[normal] transition-colors duration-300 cursor-pointer hover:text-[#5cc6d0]`}
          >
            {faq.question}
          </div>
          <img
            className={`${faq.arrowTop} left-[954px] absolute w-[23px] h-[11px] transition-transform duration-300 group-hover:translate-y-1`}
            alt="Expand arrow"
            src="/expand-arrow-4.png"
          />
        </div>
      ))}

      <img
        className="absolute top-[5235px] left-[520px] w-[457px] h-px object-cover"
        alt="Line"
        src="/line-5.svg"
      />

      <section className="absolute top-[5640px] left-[63px]">
        <h2 className="[font-family:'Poppins',Helvetica] font-semibold text-white text-5xl text-center tracking-[0] leading-[normal]">
          Lets Talk Business
        </h2>

        <p className="mt-[87px] w-[998px] [font-family:'Poppins',Helvetica] font-medium text-white text-xl tracking-[0] leading-[normal]">
          Ready to elevate your fleet? <br />
          At RDA, we deliver fast, reliable parts to keep your aircraft soaring
        </p>

        <Button className="mt-[98px] h-auto bg-transparent border-0 p-0 hover:bg-transparent relative transition-transform duration-300 hover:scale-110">
          <img
            className="w-[150px] h-[46px]"
            alt="Rectangle"
            src="/rectangle-6.svg"
          />
          <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 [font-family:'Poppins',Helvetica] font-semibold text-white text-2xl tracking-[0] leading-[normal]">
            Explore
          </span>
        </Button>
      </section>

      <footer className="absolute top-[6305px] left-[-5px] w-[1071px] h-[823px]">
        <img
          className="w-full h-full"
          alt="Rectangle"
          src="/rectangle-19.svg"
        />

        <div className="absolute top-[41px] left-[77px] w-[242px] h-[138px]">
          <img
            className="absolute top-0 left-0 w-[280px] h-[88px] object-contain transition-transform duration-300 hover:scale-105"
            alt="Rda black logo"
            src="/rda-black-logo.png"
          />

          {footerLogos.map((logo, index) => (
            <img
              key={index}
              className={logo.className}
              alt={logo.alt}
              src={logo.src}
            />
          ))}
        </div>

        <div className="absolute top-[72px] left-[425px]">
          <div className="flex items-center gap-2 bg-[#d9d9d9] rounded-[20px] px-4 py-1 w-fit transition-transform duration-300 hover:scale-105 cursor-pointer">
            <span className="[font-family:'Poppins',Helvetica] font-medium text-black text-base tracking-[0] leading-[normal]">
              RFQ
            </span>
          </div>
        </div>

        <div className="absolute top-[119px] left-[425px] flex flex-col gap-2">
          {footerServices.map((service, index) => (
            <span
              key={index}
              className="[font-family:'Poppins',Helvetica] font-medium text-black text-base tracking-[0] leading-[normal] transition-colors duration-300 hover:text-[#5cc6d0] cursor-pointer"
            >
              {service}
            </span>
          ))}
        </div>

        <div className="absolute top-[210px] left-[425px] flex flex-col gap-2">
          {footerCompany.map((item, index) => (
            <span
              key={index}
              className="[font-family:'Poppins',Helvetica] font-medium text-black text-base tracking-[0] leading-[normal] transition-colors duration-300 hover:text-[#5cc6d0] cursor-pointer"
            >
              {item}
            </span>
          ))}
        </div>

        <div className="absolute top-[119px] left-[723px]">
          <p className="[font-family:'Poppins',Helvetica] font-medium text-black text-base tracking-[0] leading-[normal]">
            No. B17-22, RAK Port Customs <br />
            Building, Nakheel Ras Al Khaimah, <br />
            UAE
          </p>

          <p className="mt-[95px] [font-family:'Poppins',Helvetica] font-medium text-black text-base tracking-[0] leading-[normal] transition-colors duration-300 hover:text-[#5cc6d0] cursor-pointer">
            +971 505056093
          </p>

          <p className="mt-[48px] [font-family:'Poppins',Helvetica] font-medium text-black text-base tracking-[0] leading-[normal] transition-colors duration-300 hover:text-[#5cc6d0] cursor-pointer">
            sales@rockdoveaiation.com
          </p>
        </div>

        <div className="absolute top-[346px] left-[77px] w-[510px] [font-family:'Poppins',Helvetica] font-medium text-black text-xl tracking-[0] leading-[normal] whitespace-nowrap">
          Copyright © 2025 | All Rights Reserved
        </div>
      </footer>
    </div>
  );
};

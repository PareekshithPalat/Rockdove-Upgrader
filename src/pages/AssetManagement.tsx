import { Button } from "../components/ui/button";
import { PageLayout } from "../components/PageLayout";



const inventoryCategories = [
  {
    title: "Consumables",
    icon: "/inflation.svg",
    items: ["Oils and fluids"],
  },
  {
    title: "Rotables",
    icon: "plane.svg",
    items: ["Engines & Landing gears"],
  },
  {
    title: "Expendables",
    icon: "/spare-parts.svg",
    items: ["filters and seals"],
  },
  {
    title: "Tools",
    icon: "/tool-box .svg",
    items: ["Specialized aviation tooling"],
  },
  {
    title: "Placards",
    icon: "/placard.svg",
    items: ["Aircraft signage and labels"],
  },
];

const brandLogos = [
  {
    src: "https://c.animaapp.com/mh31x2ueWQqHGB/img/airbus-logo-1.png",
    alt: "Airbus logo",
  },
  {
    src: "https://c.animaapp.com/mh31x2ueWQqHGB/img/logo-boeing-1.png",
    alt: "Logo boeing",
  },
  {
    src: "https://c.animaapp.com/mh31x2ueWQqHGB/img/atr-logo-2015-svg-1.png",
    alt: "Atr logo svg",
  },
  { src: "/Bombardier.png", alt: "Bombardier logo" },
  {
    src: "https://c.animaapp.com/mh31x2ueWQqHGB/img/embraer-logo-1.png",
    alt: "Embraer logo",
  },
];

const specializedProducts = [
  {
    title: "APUs",
    image:
      "https://c.animaapp.com/mh31x2ueWQqHGB/img/10products-13apu-categorypage-pw901a-c-content-card-800x450-remo.png",
    imageClassName: "w-[405px] h-[228px]",
    cardClassName:
      "bg-[linear-gradient(180deg,rgba(92,198,208,1)_0%,rgba(0,151,161,1)_100%)]",
  },
  {
    title: "Brakes",
    image: "/breaks.png",
    imageClassName: "w-[194px] h-[175px]",
    cardClassName:
      "bg-[#d9d9d9] hover:bg-[#5cc6d0] transition-colors duration-300",
  },
  {
    title: "Engine",
    image:
      "https://c.animaapp.com/mh31x2ueWQqHGB/img/360-f-269338408-iic0xiyjedyxws8gczvsuromv0whj2rs-removebg-previe.png",
    imageClassName: "w-[306px] h-[175px]",
    cardClassName:
      "bg-[#d9d9d9] hover:bg-[#5cc6d0] transition-colors duration-300",
  },
  {
    title: "Starters",
    image:
      "https://c.animaapp.com/mh31x2ueWQqHGB/img/images--2--removebg-preview--1--1.png",
    imageClassName: "w-[209px] h-[130px]",
    cardClassName:
      "bg-[#d9d9d9] hover:bg-[#5cc6d0] transition-colors duration-300",
  },
  {
    title: "ThrustReverser",
    image: "https://c.animaapp.com/mh31x2ueWQqHGB/img/thrust-reverser-1-1.png",
    imageClassName: "w-[211px] h-[152px]",
    cardClassName:
      "bg-[#d9d9d9] hover:bg-[#5cc6d0] transition-colors duration-300",
  },
  {
    title: "Wheels",
    image:
      "https://c.animaapp.com/mh31x2ueWQqHGB/img/boeing737aircraftwheelvray3dmodel001-removebg-preview-1.png",
    imageClassName: "w-[305px] h-[172px]",
    cardClassName:
      "bg-[#d9d9d9] hover:bg-[#5cc6d0] transition-colors duration-300",
  },
  {
    title: "Landing Gears",
    image:
      "https://c.animaapp.com/mh31x2ueWQqHGB/img/landing-gear-r787-01-removebg-preview-1.png",
    imageClassName: "w-[304px] h-[190px]",
    cardClassName:
      "bg-[#d9d9d9] hover:bg-[#5cc6d0] transition-colors duration-300",
  },
  {
    title: "Blades",
    image:
      "https://c.animaapp.com/mh31x2ueWQqHGB/img/images--3--removebg-preview-1.png",
    imageClassName: "w-[325px] h-52",
    cardClassName:
      "bg-[#d9d9d9] hover:bg-[#5cc6d0] transition-colors duration-300",
  },
  {
    title: "Actuators",
    image:
      "https://c.animaapp.com/mh31x2ueWQqHGB/img/images--4--removebg-preview--1--1.png",
    imageClassName: "w-[231px] h-[133px]",
    cardClassName:
      "bg-[#d9d9d9] hover:bg-[#5cc6d0] transition-colors duration-300",
  },
];

const AssetManagement = (): JSX.Element => {
  return (
    <PageLayout>
      <div className="bg-black overflow-hidden w-full">
        {/* Hero Section */}
        <section className="relative flex flex-col md:flex-row items-center justify-center px-4 sm:px-6 md:px-12 lg:px-[160px] pt-24 pb-24 gap-8 md:gap-16">
          {/* Left Content */}
          <div className="flex-1 text-center md:text-left max-w-xl">
            <h1 className="font-bold text-[#5cc6d0] text-3xl sm:text-4xl md:text-5xl mb-4">
              Asset Management
            </h1>
            <p className="font-medium text-white text-[24px] leading-relaxed">
              With over 400,000 parts in our dedicated warehouse and broad
              inventories covering Rotables, consumables, and more, we ensure
              your aircraft stays Non-stop.
            </p>
          </div>

          {/* Right Mascot / Spline Section */}
          <div className="flex-shrink-0 w-full md:w-auto flex justify-center md:justify-end">
            <div className="w-[300px] sm:w-[380px] md:w-[420px] h-[300px] sm:h-[380px] md:h-[420px]">
              <img
                src="/undraw_logistics_8vri.svg"
                alt="Asset Management Illustration"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </section>

        {/* Expert Asset Management Section */}
        <section className="px-8 sm:px-16 lg:px-[220px] py-20 flex flex-col items-center text-center">
          {/* Section Title */}
          <h2 className="text-white font-medium text-3xl sm:text-4xl lg:text-[36px] leading-snug mb-28">
            Expert Asset Management <br />
            for Seamless <br />
            <span className="text-[#5cc6d0] font-bold">
              Aviation Operations
            </span>
          </h2>

          {/* Content Row */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-16 md:gap-[200px] w-full">
            {/* Left Side - Stats */}
            <div className="flex flex-col items-center md:items-start text-center md:text-left">
              <div className="flex flex-row items-center justify-center md:justify-start gap-10 sm:gap-14">
                {/* Inventories */}
                <div>
                  <p className="font-bold text-[#55cccc] text-3xl sm:text-[38px] leading-tight mb-1">
                    27k+
                  </p>
                  <p className="text-white text-lg sm:text-xl font-medium">
                    Inventories
                  </p>
                </div>

                {/* Divider */}
                <div className="h-14 w-[2px] bg-white hidden sm:block" />

                {/* Parts */}
                <div>
                  <p className="font-bold text-[#55cccc] text-3xl sm:text-[38px] leading-tight mb-1">
                    400,000+
                  </p>
                  <p className="text-white text-lg sm:text-xl font-medium">
                    Parts
                  </p>
                </div>
              </div>
            </div>

            {/* Right Side - Engine Image */}
            <div className="relative flex justify-start md:ml-[-80px] overflow-visible">
              {/* Gradient Base */}
              <div className="w-[250px] h-[150px] lg:w-[320px] lg:h-[170px] rounded-2xl bg-[linear-gradient(180deg,rgba(92,198,208,1)_0%,rgba(47,101,106,1)_100%)]" />

              {/* Jet Engine Image */}
              <img
                src="https://c.animaapp.com/mh31x2ueWQqHGB/img/now-that-looks-fun-removebg-preview--1--1.png"
                alt="Jet Engine"
                className="absolute -top-14 -left-20 w-[700px] scale-[1.15] object-cover"
              />
            </div>
          </div>
        </section>

        {/* Broad Inventory Section */}
        <section className="px-4 sm:px-6 md:px-12 lg:px-[228px] py-16">
          <h2 className="font-extrabold text-[#5cc6d0] text-3xl sm:text-4xl md:text-5xl text-center mb-36">
            Broad Inventory
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 text-center">
            {inventoryCategories.map((category, index) => (
              <div key={index} className="flex flex-col items-center">
                {/* Icon on top of heading */}
                <img
                  src={category.icon}
                  alt={`${category.title} Icon`}
                  className="w-12 h-12 mb-4 object-contain"
                />

                {/* Heading */}
                <h3 className="font-bold text-white text-lg sm:text-xl mb-3">
                  {category.title}
                </h3>

                {/* Items */}
                <div className="space-y-1">
                  {category.items.map((item, idx) => (
                    <p key={idx} className="font-medium text-white text-base">
                      {item}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Brand Logos Section */}
        <section className="px-4 sm:px-6 md:px-12 lg:px-[228px] py-16 text-center">
          <h3 className="font-medium text-white text-[40px] mb-20">
            These inventories support Major{" "}
            <span className="text-[#5cc6d0]">Brands</span>
          </h3>
          <div className="flex flex-wrap justify-center gap-6">
            {brandLogos.map((logo, index) => (
              <img
                key={index}
                className="w-40 h-auto object-contain"
                alt={logo.alt}
                src={logo.src}
              />
            ))}
          </div>
        </section>

        {/* A to Z Parts Solutions Section */}
        <section className="px-4 sm:px-6 md:px-12 lg:px-[228px] py-16 text-center">
          <h2 className="font-bold text-[#5cc6d0] text-3xl sm:text-4xl md:text-5xl mb-16">
            A to Z Parts Solutions
          </h2>
          <p className="font-medium text-white text-lg sm:text-xl md:text-2xl max-w-[1080px] mx-auto mb-8">
            Not limited to high-end specialties; we provide everything from
            basic hardware (nuts, bolts, seals) to advanced systems (avionics,
            landing gear, propulsion). Sourced from trusted OEMs and aftermarket
          </p>
          <Button className="h-auto rounded-[40px] border-0 bg-[linear-gradient(180deg,rgba(92,198,208,1)_0%,rgba(20,145,155,1)_100%)] px-10 py-3 text-white font-semibold text-lg hover:opacity-90 transition-opacity">
            Request a quote
          </Button>
        </section>

        {/* We Are Specialized In Section */}
        <section className="px-4 sm:px-6 md:px-12 lg:px-[228px] py-16 text-center overflow-visible">
          <h2 className="font-bold text-[#5cc6d0] text-3xl sm:text-4xl md:text-5xl mb-12">
            We are specialized in
          </h2>

          <div className="w-24 h-1 bg-[#5cc6d0] mx-auto mb-12" />
          <p className="font-medium text-white text-lg sm:text-xl md:text-2xl mb-28">
            We manage critical assets with
            <br />
            expert maintenance, ensuring top performance and safety
          </p>

          {/* Grid Container */}
          <div className="flex flex-wrap justify-center gap-x-24 gap-y-28 max-w-[1300px] mx-auto overflow-visible">
            {specializedProducts.map((product, index) => {
              const isAPU = product.title === "APUs";
              const isBrakes = product.title === "Brakes";
              const isStarter = product.title === "Starters";
              const isThrustReverser = product.title === "ThrustReverser";
              const isEngine = product.title === "Engine";

              // 🎯 Balanced image sizing
              const imageWidth = isAPU
                ? 660 // increased APU
                : isBrakes || isStarter
                  ? 250 // moderate reduction
                  : isThrustReverser
                    ? 270
                    : isEngine
                      ? 290
                      : 370;

              const imageHeight = isAPU
                ? 580
                : isBrakes || isStarter
                  ? 150
                  : isThrustReverser
                    ? 170
                    : 230;

              const scale = isAPU
                ? "scale-[1.7]"
                : isStarter || isThrustReverser
                  ? "scale-[1.0]"
                  : isEngine
                    ? "scale-[1.27]"
                    : isBrakes
                      ? "scale-[1.2]"
                      : "scale-[1.15]";

              // 🧭 Position adjustments
              const topOffset = isAPU
                ? "-top-60"
                : isStarter
                  ? "-top-0"
                  : isBrakes
                    ? "-top-4"
                    : isEngine
                      ? "-top-14"
                      : isThrustReverser
                        ? "-top-6"
                        : "-top-16";

              const leftOffset = isEngine ? "left-[-80px]" : "-left-16";

              // 💡 Custom hover scale depending on the product
              const hoverScale = isAPU
                ? "group-hover:scale-[1.8]"
                : isEngine
                  ? "group-hover:scale-[1.33]"
                  : isBrakes
                    ? "group-hover:scale-[1.28]" // subtle increase (from 1.45 → 1.5)
                    : "group-hover:scale-110"; // others use normal 10% increase

              return (
                <div
                  key={index}
                  className="relative w-[260px] flex flex-col items-start gap-4 overflow-visible group"
                >
                  {/* Card Container */}
                  <div className="w-[200px] h-[120px] bg-white rounded-2xl flex items-center justify-center transition-all duration-300 ease-in-out group-hover:bg-[#5cc6d0]" />

                  {/* Product Image */}
                  <img
                    src={product.image}
                    alt={product.title}
                    className={`absolute ${topOffset} ${leftOffset} z-10 object-contain transition-transform duration-300 ease-in-out ${hoverScale} ${scale}`}
                    style={{
                      width: `${imageWidth}px`,
                      height: `${imageHeight}px`,
                    }}
                  />

                  {/* Transparent hover layer */}
                  <div className="absolute inset-0 z-20 cursor-pointer" />

                  {/* Product Title */}
                  <div className="flex flex-col items-start justify-start w-full">
                    <h3 className="mt-5 text-white text-lg font-semibold text-left min-h-[28px] flex items-start">
                      {product.title}
                    </h3>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
        <section className="h-56" />
      </div>
    </PageLayout>
  );
};

export default AssetManagement;

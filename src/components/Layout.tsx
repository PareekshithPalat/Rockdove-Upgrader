import React from "react";
import Header from "./Header";
import { Hero } from "./Hero";
import { Clients } from "./Clients";
import { Inventory } from "./Inventory";
import { Stats } from "./Stats";
import Features from "./Features";
import { FAQ } from "./FAQ";
import { Contact } from "./Contact";
import { Footer } from "./Footer";
import Services from "./Services";
//import "../styles/horror-effects.css";

export const Layout: React.FC = () => {
  return (
    <div className="bg-black overflow-x-hidden w-full min-h-screen relative">
      {/* Background Images */}
      {/* Main Content */}
      <Header />
      <Hero />
      <Clients />
      <Services />
      <Inventory />
      <Stats />
      <Features />
      <FAQ />
      {/* <Contact /> */}
      <Contact />
      <Footer />
    </div>
  );
};

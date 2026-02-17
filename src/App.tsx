import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout";
import {
  AssetManagement,
  RepairManagement,
  AOGSupport,
  TheStory,
  Careers,
  FAQs,
  RFQ,
  MRO
} from "./pages";
import ContactPage from "./pages/ContactPage";
import ScrollToTop from "./components/ScrollToTop";

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        {/* Home page */}
        <Route path="/" element={<Layout />} />

        {/* Service pages */}
        <Route path="/asset-management" element={<AssetManagement />} />
        <Route path="/repair-management" element={<RepairManagement />} />
        <Route path="/aog-support" element={<AOGSupport />} />

        {/* Contact page */}
        <Route path="/contact" element={<ContactPage />} />

        {/* Company pages */}
        <Route path="/the-story" element={<TheStory />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/faqs" element={<FAQs />} />
        <Route path="/mro" element={<MRO />} />

        {/* Other pages */}
        <Route path="/rfq" element={<RFQ />} />
      </Routes>
    </Router>
  );
};

export default App;

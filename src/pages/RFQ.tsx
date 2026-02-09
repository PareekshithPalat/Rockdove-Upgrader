import React, { useState, useRef } from "react";
import { Send, Phone, Mail } from "lucide-react";
import { Button } from "../components/ui/button";
import { PageLayout } from "../components/PageLayout";

const RFQ: React.FC = () => {
  const [formData, setFormData] = useState({
    partNumber: "",
    condition: "",
    description: "",
    certificate: "",
    quality: "",
    notes: "",
  });



  const formRef = useRef<HTMLDivElement | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const url = "https://script.google.com/macros/s/AKfycbxcW6jiHtOKpjmYdC6AFdmG3NYyui7weUHoNpWUTs_R3YaXiB2NDomNppCbziO9T_1r/exec"; // TODO: Replace with your Google Apps Script URL
    fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData).toString(),
    })
        .then((res) => res.text())
        .then((data) => {
            alert(data);
        })
        .catch((error) => console.log(error));

    // Simple professional visual effect
    const button = document.getElementById("submit-btn");
    if (button) {
      button.classList.add("scale-95", "bg-[#4ab5bf]");
      setTimeout(() => {
        button.classList.remove("scale-95", "bg-[#4ab5bf]");
      }, 300);
    }

    console.log("RFQ submitted:", formData);
  };

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const sectionPadding: React.CSSProperties = {
    paddingLeft: "260px",
    paddingRight: "260px",
    paddingTop: "100px",
    paddingBottom: "80px",
    boxSizing: "border-box",
  };

  return (
    <PageLayout>
      <div className="bg-black text-white min-h-screen font-[Poppins] relative overflow-hidden">
        {/* ============ HERO SECTION ============ */}
        <section
          style={sectionPadding}
          className="flex flex-col lg:flex-row justify-between items-center text-left pt-[150px]"
        >
          <div className="max-w-xl space-y-6">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#5cc6d0] leading-snug whitespace-nowrap">
              Request for Quote (RFQ)
            </h1>

            <p className="text-gray-200 text-lg leading-relaxed">
              Submit your parts requirements and receive competitive quotes from
              our global network. Expect a response within 2 hours.
            </p>

            <Button
              onClick={scrollToForm}
              className="bg-[#5cc6d0] text-black px-6 py-3 rounded-full font-semibold hover:bg-[#4ab5bf] transition-all"
            >
              ↓ Scroll to Form
            </Button>
          </div>

          {/* Right Image Placeholder */}
          <div className="w-[260px] h-[320px] bg-[#d9d9d9] rounded-xl flex items-center justify-center mt-10 lg:mt-0">
            <span className="text-[#5cc6d0] text-lg font-medium">Mascot</span>
          </div>
        </section>

        {/* ============ PARTS INFORMATION FORM ============ */}
        <section ref={formRef} style={sectionPadding} className="text-left">
          <h2 className="text-[#5cc6d0] text-2xl md:text-3xl font-semibold mb-12">
            Parts Information
          </h2>

          <form onSubmit={handleSubmit} className="space-y-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {[
                {
                  name: "partNumber",
                  label: "Part Number*",
                  placeholder: "Enter the part number",
                },
                {
                  name: "condition",
                  label: "Condition*",
                  placeholder: "Enter the condition",
                },
                {
                  name: "description",
                  label: "Description*",
                  placeholder: "Enter the description",
                },
                {
                  name: "certificate",
                  label: "Certificate*",
                  placeholder: "Enter the certificate",
                },
                {
                  name: "quality",
                  label: "Quality*",
                  placeholder: "Enter your quantity needed",
                },
              ].map((field) => (
                <div key={field.name}>
                  <label className="block text-sm font-medium mb-2">
                    {field.label}
                  </label>
                  <input
                    name={field.name}
                    value={(formData as any)[field.name]}
                    onChange={handleChange}
                    placeholder={field.placeholder}
                    className="w-full bg-[#d9d9d9] text-black px-5 py-3 rounded-full outline-none"
                  />
                </div>
              ))}
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Notes*</label>
              <textarea
                name="notes"
                value={formData.notes}
                onChange={handleChange}
                placeholder="Add any extra details, specs, or special instructions"
                className="w-full bg-[#d9d9d9] text-black px-5 py-4 rounded-xl outline-none resize-none"
                rows={4}
              />
            </div>

            {/* Submit Button */}
            <div className="flex flex-wrap items-center gap-4">
              <Button
                id="submit-btn"
                type="submit"
                className="bg-[#5cc6d0] text-black px-6 py-3 rounded-full font-semibold flex items-center gap-2 hover:bg-[#4ab5bf] transition-all transform active:scale-95"
              >
                <Send className="w-5 h-5" />
                Submit RFQ
              </Button>
              <span className="text-sm text-gray-400">
                Response within 2 hours
              </span>
            </div>
          </form>
        </section>

        {/* ============ WHY SUBMIT SECTION ============ */}
        <section style={sectionPadding} className="text-left">
          <h2 className="text-[#5cc6d0] text-2xl md:text-3xl font-semibold mb-14">
            Why Submit Your RFQ with Rockdove Aviation?
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl">
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="w-full h-[220px] bg-[#d9d9d9] rounded-xl flex items-center justify-center text-[#5cc6d0] text-lg font-medium mx-auto"
              >
                Image {item}
              </div>
            ))}
          </div>
        </section>

        {/* ============ HELP SECTION ============ */}
        <section style={sectionPadding} className="text-left pb-20">
          <h3 className="text-[#5cc6d0] text-xl md:text-2xl font-semibold mb-4">
            Need Help with Your RFQ?
          </h3>
          <p className="text-gray-200 mb-8 text-base md:text-lg">
            Contact our team directly for personalized assistance.
          </p>

          <div className="flex flex-col text-gray-300 gap-4">
            <div className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-[#5cc6d0]" />
              <span>+971 505056093</span>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-[#5cc6d0]" />
              <span>sales@rockdoveaviation.com</span>
            </div>
          </div>
        </section>

        {/* ============ ELLIPTICAL BALLS SECTION ============ */}
        <section
          className="w-full flex justify-center items-center bg-black overflow-hidden pb-16"
          style={{ height: "280px" }}
        >
          <div
            className="grid gap-[4px]"
            style={{
              gridTemplateColumns: "repeat(66, 10px)",
              gridTemplateRows: "repeat(3, 10px)",
            }}
          >
            {Array.from({ length: 3 * 66 }).map((_, i) => (
              <div
                key={i}
                className="w-[10px] h-[10px] rounded-full bg-white"
              ></div>
            ))}
          </div>
        </section>
      </div>
    </PageLayout>
  );
};

export default RFQ;
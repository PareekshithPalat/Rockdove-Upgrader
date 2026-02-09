import React, { useState, useRef } from "react";
import { Send, Phone, Mail, CheckCircle2, ArrowDown } from "lucide-react";
import { Button } from "../components/ui/button";
import { PageLayout } from "../components/PageLayout";
import { FadeInUp } from "../components/animations";

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
    const url = "https://script.google.com/macros/s/AKfycbxcW6jiHtOKpjmYdC6AFdmG3NYyui7weUHoNpWUTs_R3YaXiB2NDomNppCbziO9T_1r/exec";
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
  };

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <PageLayout>
      <div className="bg-black text-white min-h-screen font-[Poppins] relative overflow-x-hidden">
        {/* ============ HERO SECTION ============ */}
        <section className="px-6 sm:px-10 md:px-20 lg:px-40 xl:px-64 pt-32 md:pt-48 pb-20 flex flex-col lg:flex-row justify-between items-center gap-12">
          <div className="max-w-4xl space-y-8 text-center lg:text-left">
            <FadeInUp>
              <h1 className="text-3xl md:text-4xl lg:text-[48px] font-bold leading-tight whitespace-nowrap">
                <span className="text-[#5cc6d0]">Request for Quote</span>{" "}
                <span className="text-white">(RFQ)</span>
              </h1>
            </FadeInUp>

            <FadeInUp delay={200}>
              <p className="text-gray-300 text-lg md:text-xl leading-relaxed max-w-2xl">
                Submit your parts requirements and receive competitive quotes from
                our global network. Expect a professional response within{" "}
                <span className="text-[#5cc6d0] font-semibold">24 hours.</span>
              </p>
            </FadeInUp>

            <FadeInUp delay={400}>
              <Button
                onClick={scrollToForm}
                className="bg-[#5cc6d0] text-black px-10 py-6 rounded-full font-bold text-lg hover:bg-[#4ab5bf] transition-all shadow-lg shadow-[#5cc6d0]/20 flex items-center gap-2 mx-auto lg:mx-0"
              >
                Scroll down to form <ArrowDown className="w-5 h-5" />
              </Button>
            </FadeInUp>
          </div>

          <FadeInUp delay={600} className="w-full lg:w-auto">
            <div className="w-full sm:w-[320px] md:w-[400px] h-[300px] md:h-[400px] bg-white/5 border border-white/10 backdrop-blur-sm rounded-3xl flex items-center justify-center relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-[#5cc6d0]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <span className="text-[#5cc6d0] text-xl font-bold uppercase tracking-widest relative z-10">Mascot Model</span>
            </div>
          </FadeInUp>
        </section>

        {/* ============ PARTS INFORMATION FORM ============ */}
        <section ref={formRef} className="px-6 sm:px-10 md:px-20 lg:px-40 xl:px-64 py-24 bg-white/[0.02] border-y border-white/5">
          <FadeInUp>
            <div className="flex items-center gap-4 mb-12 justify-center lg:justify-start">
              <div className="h-10 w-2 bg-[#5cc6d0] rounded-full"></div>
              <h2 className="text-[#5cc6d0] text-3xl md:text-4xl font-bold uppercase tracking-tight">
                Parts Information
              </h2>
            </div>
          </FadeInUp>

          <form onSubmit={handleSubmit} className="space-y-12 max-w-5xl mx-auto lg:mx-0">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-x-12 md:gap-y-10">
              {[
                {
                  name: "partNumber",
                  label: "Part Number*",
                  placeholder: "Enter the part number",
                },
                {
                  name: "condition",
                  label: "Condition*",
                  placeholder: "NE, OH, SV, etc.",
                },
                {
                  name: "description",
                  label: "Description*",
                  placeholder: "What is this part?",
                },
                {
                  name: "certificate",
                  label: "Certificate*",
                  placeholder: "FAA 8130, EASA Form 1, etc.",
                },
                {
                  name: "quality",
                  label: "Quantity*",
                  placeholder: "Number of units",
                },
              ].map((field, idx) => (
                <FadeInUp key={field.name} delay={idx * 100}>
                  <div className="group">
                    <label className="block text-sm font-bold text-[#5cc6d0] uppercase tracking-widest mb-3 ml-2 transition-all group-focus-within:translate-x-1">
                      {field.label.replace("*", "")}<span className="text-red-500">*</span>
                    </label>
                    <input
                      name={field.name}
                      value={(formData as any)[field.name]}
                      onChange={handleChange}
                      placeholder={field.placeholder}
                      className="w-full bg-white/5 border border-white/10 text-white px-6 py-4 rounded-2xl outline-none focus:border-[#5cc6d0]/50 transition-all placeholder:text-white/20 hover:bg-white/[0.08]"
                      required
                    />
                  </div>
                </FadeInUp>
              ))}
            </div>

            <FadeInUp delay={500}>
              <div className="group">
                <label className="block text-sm font-bold text-[#5cc6d0] uppercase tracking-widest mb-3 ml-2 transition-all group-focus-within:translate-x-1">Notes<span className="text-red-500">*</span></label>
                <textarea
                  name="notes"
                  value={formData.notes}
                  onChange={handleChange}
                  placeholder="Add any extra details, specs, or special instructions"
                  className="w-full bg-white/5 border border-white/10 text-white px-6 py-5 rounded-3xl outline-none focus:border-[#5cc6d0]/50 transition-all placeholder:text-white/20 hover:bg-white/[0.08] resize-none"
                  rows={5}
                />
              </div>
            </FadeInUp>

            {/* Submit Button */}
            <FadeInUp delay={600}>
              <div className="flex flex-col sm:flex-row items-center gap-6 pt-4">
                <Button
                  id="submit-btn"
                  type="submit"
                  className="bg-[#5cc6d0] text-black px-12 py-7 rounded-full font-black text-lg flex items-center gap-3 hover:bg-[#4ab5bf] transition-all transform hover:scale-[1.02] active:scale-95 shadow-xl shadow-[#5cc6d0]/10 w-full sm:w-auto uppercase tracking-widest"
                >
                  <Send className="w-5 h-5" />
                  Submit RFQ
                </Button>
                <div className="flex items-center gap-2 text-gray-400">
                  <CheckCircle2 className="w-5 h-5 text-[#5cc6d0]" />
                  <span className="text-sm font-medium tracking-wide">Professional Response within 2 hours</span>
                </div>
              </div>
            </FadeInUp>
          </form>
        </section>

        {/* ============ WHY SUBMIT SECTION ============ */}
        <section className="px-6 sm:px-10 md:px-20 lg:px-40 xl:px-64 py-32">
          <FadeInUp>
            <h2 className="text-[#5cc6d0] text-3xl md:text-5xl font-bold mb-20 text-center uppercase tracking-tighter">
              Why Choose Rockdove?
            </h2>
          </FadeInUp>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 max-w-7xl mx-auto">
            {[
              { title: "Global Network", text: "Access to thousands of certified parts worldwide." },
              { title: "Rapid Turnaround", text: "Receive competitive quotes in under 2 hours." },
              { title: "Quality Guaranteed", text: "All parts come with full certification and traceability." }
            ].map((item, idx) => (
              <FadeInUp key={idx} delay={idx * 200} className="group">
                <div className="w-full h-[280px] bg-white/5 border border-white/10 rounded-[40px] p-10 flex flex-col justify-end transition-all duration-500 hover:bg-[#5cc6d0]/5 hover:border-[#5cc6d0]/30 hover:-translate-y-2 relative overflow-hidden">
                  <div className="absolute top-8 left-8 text-6xl font-black text-white/5 group-hover:text-[#5cc6d0]/10 transition-colors">0{idx + 1}</div>
                  <h3 className="text-[#5cc6d0] text-2xl font-bold mb-3 relative z-10">{item.title}</h3>
                  <p className="text-gray-400 leading-relaxed font-light relative z-10">{item.text}</p>
                </div>
              </FadeInUp>
            ))}
          </div>
        </section>

        {/* ============ HELP SECTION ============ */}
        <section className="px-6 sm:px-10 md:px-20 lg:px-40 xl:px-64 py-32 bg-gradient-to-t from-[#5cc6d0]/5 to-transparent text-center">
          <FadeInUp>
            <h3 className="text-[#5cc6d0] text-2xl md:text-4xl font-black mb-6 uppercase tracking-widest">
              Need Direct Assistance?
            </h3>
            <p className="text-gray-300 mb-16 text-lg md:text-xl mx-auto font-light">
              Our support team is available 24/7 to help you with urgent parts requirements.
            </p>
          </FadeInUp>

          <div className="flex flex-col sm:flex-row justify-center gap-8 md:gap-16">
            <FadeInUp delay={200}>
              <a href="tel:+971505056093" className="flex flex-col items-center gap-4 group">
                <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-[#5cc6d0] group-hover:text-black transition-all duration-500">
                  <Phone className="w-8 h-8" />
                </div>
                <span className="text-lg font-bold group-hover:text-[#5cc6d0] transition-colors tracking-widest">+971 505056093</span>
              </a>
            </FadeInUp>

            <FadeInUp delay={400}>
              <a href="mailto:sales@rockdoveaviation.com" className="flex flex-col items-center gap-4 group">
                <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-[#5cc6d0] group-hover:text-black transition-all duration-500">
                  <Mail className="w-8 h-8" />
                </div>
                <span className="text-lg font-bold group-hover:text-[#5cc6d0] transition-colors tracking-widest">sales@rockdoveaviation.com</span>
              </a>
            </FadeInUp>
          </div>
        </section>
      </div>
    </PageLayout>
  );
};

export default RFQ;
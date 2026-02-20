import React, { useState, useRef } from "react";
import { Phone, Mail, AlertCircle } from "lucide-react";
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

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const formDataToSend = new FormData();
      formDataToSend.append('type', 'rfq');
      formDataToSend.append('partNumber', formData.partNumber);
      formDataToSend.append('condition', formData.condition);
      formDataToSend.append('description', formData.description);
      formDataToSend.append('certificate', formData.certificate);
      formDataToSend.append('quality', formData.quality);
      formDataToSend.append('notes', formData.notes);

      const response = await fetch("/api/submit-form", {
        method: "POST",
        body: formDataToSend,
      });

      const data = await response.json();

      if (response.ok) {
        alert("RFQ Submitted Successfully");
        setFormData({
          partNumber: "",
          condition: "",
          description: "",
          certificate: "",
          quality: "",
          notes: "",
        });
      } else {
        alert("Error: " + (data.error || "Failed to submit"));
      }
    } catch (error) {
      console.error(error);
      alert("Failed to connect to server");
    } finally {
      setLoading(false);
    }
  };

  return (
    <PageLayout>
      <div className="bg-black text-white min-h-screen font-[Poppins] relative overflow-x-hidden">
        {/* ============ HERO SECTION ============ */}
        <section className="pt-52 md:pt-60 pb-20 px-6">
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-center gap-12">
            <div className="space-y-8 text-center lg:text-left">
              <FadeInUp>
                <h1 className="text-3xl md:text-5xl lg:text-[56px] font-bold leading-tight">
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
            </div>

            <FadeInUp delay={600} className="w-full lg:w-1/2 relative flex justify-center">
              {/* Blue Shade Background Glow */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] bg-[#5cc6d0]/20 blur-[115px] rounded-full pointer-events-none z-0" />

              <img
                src="/undraw_work-chat_hc3y.svg"
                alt="RFQ Illustration"
                className="w-full max-w-[450px] h-auto opacity-95 drop-shadow-[0_0_30px_rgba(92,198,208,0.2)] relative z-10"
              />
            </FadeInUp>
          </div>
        </section>

        {/* ============ PARTS INFORMATION FORM ============ */}
        <section ref={formRef} className="py-24 px-6">
          <div className="max-w-7xl mx-auto">
            <FadeInUp>
              <div className="flex items-center gap-4 mb-12 justify-start">
                <div className="h-10 w-2 bg-[#5cc6d0] rounded-full"></div>
                <h2 className="text-[#5cc6d0] text-3xl md:text-4xl font-bold uppercase tracking-tight">
                  Parts Information
                </h2>
              </div>
            </FadeInUp>

            <form onSubmit={handleSubmit} className="space-y-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-x-12 md:gap-y-10">
                {[
                  {
                    name: "partNumber",
                    label: "Part Number",
                    placeholder: "Enter the part number",
                    required: true,
                  },
                  {
                    name: "condition",
                    label: "Condition",
                    placeholder: "NE, OH, SV, etc.",
                    required: false,
                  },
                  {
                    name: "description",
                    label: "Description",
                    placeholder: "What is this part?",
                    required: true,
                  },
                  {
                    name: "certificate",
                    label: "Certificate",
                    placeholder: "FAA 8130, EASA Form 1, etc.",
                    required: false,
                  },
                  {
                    name: "quality",
                    label: "Quantity",
                    placeholder: "Number of units",
                    required: true,
                  },
                ].map((field, idx) => (
                  <FadeInUp key={field.name} delay={idx * 100}>
                    <div className="group">
                      <label className="block text-sm font-bold text-[#5cc6d0] uppercase tracking-widest mb-3 ml-2 transition-all group-focus-within:translate-x-1">
                        {field.label}{field.required && <span className="text-red-500">*</span>}
                      </label>
                      <input
                        name={field.name}
                        value={(formData as any)[field.name]}
                        onChange={handleChange}
                        placeholder={field.placeholder}
                        className="w-full bg-white/5 border border-white/10 text-white px-6 py-4 rounded-2xl outline-none focus:border-[#5cc6d0]/50 transition-all placeholder:text-white/20 hover:bg-white/[0.08]"
                        required={field.required}
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
                    disabled={loading}
                    className="w-full h-[60px] bg-[#5cc6d0] hover:bg-[#4ab5bf] text-white rounded-xl text-lg font-bold tracking-wide transition-all duration-300 shadow-[0_4px_20px_rgba(92,198,208,0.4)] hover:shadow-[0_8px_30px_rgba(92,198,208,0.5)] transform hover:-translate-y-1"
                  >
                    {loading ? "SENDING SELECTION..." : "SEND SELECTION"}
                  </Button>
                  <div className="flex items-center gap-2 text-gray-400">
                    <AlertCircle className="w-5 h-5 text-[#5cc6d0]" />
                    <span className="text-sm font-medium tracking-wide"> Response within 24 hours!</span>
                  </div>
                </div>
              </FadeInUp>
            </form>
          </div>
        </section>

        {/* ============ WHY SUBMIT SECTION ============ */}
        <section className="py-32 px-6">
          <div className="max-w-7xl mx-auto">
            <FadeInUp>
              <h2 className="text-[#5cc6d0] text-3xl md:text-5xl font-bold mb-20 text-center lg:text-left uppercase tracking-tighter">
                Why Choose Rockdove?
              </h2>
            </FadeInUp>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
              {[
                { title: "Global Network", text: "Access to thousands of certified parts worldwide." },
                { title: "Rapid Turnaround", text: "Receive competitive quotes in under 2 hours." },
                { title: "Quality Guaranteed", text: "All parts come with full certification and traceability." }
              ].map((item, idx) => (
                <FadeInUp key={idx} delay={idx * 200} className="group">
                  <div className="w-full h-[280px] bg-white/5 border border-white/10 rounded-[40px] p-10 flex flex-col justify-end transition-all duration-500 hover:bg-[#5cc6d0]/5 hover:border-[#5cc6d0]/30 hover:-translate-y-2 relative overflow-hidden">
                    <div className="absolute top-8 left-8 text-6xl font-black text-white/15 group-hover:text-[#5cc6d0]/30 transition-colors">0{idx + 1}</div>
                    <h3 className="text-[#5cc6d0] text-2xl font-bold mb-3 relative z-10">{item.title}</h3>
                    <p className="text-gray-400 leading-relaxed font-light relative z-10">{item.text}</p>
                  </div>
                </FadeInUp>
              ))}
            </div>
          </div>
        </section>

        {/* ============ HELP SECTION ============ */}
        <section className="py-32 px-6 bg-gradient-to-t from-[#5cc6d0]/5 to-transparent">
          <div className="max-w-7xl mx-auto text-center lg:text-left">
            <FadeInUp>
              <h3 className="text-[#5cc6d0] text-2xl md:text-4xl font-black mb-6 uppercase tracking-widest">
                Need Direct Assistance?
              </h3>
              <p className="text-gray-300 mb-16 text-lg md:text-xl font-light">
                Our support team is available 24/7 to help you with urgent parts requirements.
              </p>
            </FadeInUp>

            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-8 md:gap-16">
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
          </div>
        </section>
      </div>
    </PageLayout>
  );
};

export default RFQ;
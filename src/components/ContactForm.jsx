import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { ArrowRight, CheckCircle } from "lucide-react";

const plans = ["Core (1-3 branches)", "Scale (4-15 branches)", "Enterprise (16+ branches)", "Bespoke / Custom", "Not sure yet"];

export default function ContactForm() {
  const shouldReduce = useReducedMotion();
  const [form, setForm] = useState({ name: "", email: "", company: "", phone: "", branches: "", plan: "", message: "" });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = "Name is required";
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) e.email = "Valid email is required";
    if (!form.company.trim()) e.company = "Company name is required";
    return e;
  };

  const handleSubmit = async (ev) => {
    ev.preventDefault();
    const e = validate();
    if (Object.keys(e).length) { setErrors(e); return; }

    setErrors({});
    setLoading(true);

    const formData = {
      ...form,
      access_key: "926ad43c-2cd4-4f18-8b6a-8ae2107b77c0",
      subject: `New Lead from ${form.company}`,
      from_name: "Cartfinch Website"
    };

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
        setSubmitted(true);
      } else {
        console.error("Submission failed:", result.message);
        alert("Submission failed. Please try again.");
      }
    } catch (err) {
      console.error("Network error:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (field, value) => {
    setForm(prev => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors(prev => ({ ...prev, [field]: undefined }));
  };

  return (
    <section id="contact" className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-midnight via-atmospheric/50 to-midnight pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full bg-indigo-600/12 blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={shouldReduce ? {} : { opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-indigo-500/20 bg-indigo-500/8 text-indigo-300 text-xs font-mono-cf uppercase tracking-widest mb-6">
            Get in Touch
          </div>
          <h2 className="font-outfit font-bold text-4xl sm:text-5xl lg:text-6xl text-white tracking-[-0.03em] leading-tight mb-5">
            Your grocery revolution{" "}
            <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
              starts here
            </span>
          </h2>
          <p className="text-white/45 text-lg font-inter max-w-xl mx-auto">
            Book a personalized demo or reach out to our sales team. We'll get back to you within 24 hours.
          </p>
        </motion.div>

        {/* Form card */}
        <motion.div
          initial={shouldReduce ? {} : { opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="glass-card rounded-2xl p-8 sm:p-12 relative overflow-hidden"
        >
          <AnimatePresence mode="wait">
            {submitted ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                className="flex flex-col items-center justify-center py-16 text-center"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 200, damping: 12 }}
                  className="w-20 h-20 rounded-full bg-indigo-500/20 flex items-center justify-center mb-6"
                >
                  <CheckCircle className="w-10 h-10 text-indigo-400" />
                </motion.div>
                <h3 className="font-outfit font-bold text-3xl text-white mb-3">Message received!</h3>
                <p className="text-white/55 font-inter max-w-sm leading-relaxed">
                  Thank you for reaching out. Our team will contact you within 24 hours to arrange your personalized demo.
                </p>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                onSubmit={handleSubmit}
                className="space-y-8"
              >
                {/* Row 1 */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <FormField
                    label="Full Name"
                    value={form.name}
                    onChange={v => handleChange("name", v)}
                    error={errors.name}
                    placeholder="Ahmed Al-Rashidi"
                  />
                  <FormField
                    label="Work Email"
                    type="email"
                    value={form.email}
                    onChange={v => handleChange("email", v)}
                    error={errors.email}
                    placeholder="ahmed@freshmart.ae"
                  />
                </div>

                {/* Row 2 */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <FormField
                    label="Company Name"
                    value={form.company}
                    onChange={v => handleChange("company", v)}
                    error={errors.company}
                    placeholder="Fresh Mart LLC"
                  />
                  <FormField
                    label="Phone Number (optional)"
                    value={form.phone}
                    onChange={v => handleChange("phone", v)}
                    placeholder="+971 50 000 0000"
                  />
                </div>

                {/* Row 3 */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <FormField
                    label="Number of Branches"
                    value={form.branches}
                    onChange={v => handleChange("branches", v)}
                    placeholder="e.g. 3"
                  />
                  <div>
                    <label className="block text-xs font-mono-cf text-white/40 uppercase tracking-widest mb-3">
                      Interested Plan
                    </label>
                    <div className="relative">
                      <select
                        value={form.plan}
                        onChange={e => handleChange("plan", e.target.value)}
                        className="cf-input appearance-none w-full cursor-pointer"
                        style={{ background: "transparent" }}
                      >
                        <option value="" style={{ background: "#0F172A" }}>Select a plan...</option>
                        {plans.map(p => (
                          <option key={p} value={p} style={{ background: "#0F172A" }}>{p}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-mono-cf text-white/40 uppercase tracking-widest mb-3">
                    Message (optional)
                  </label>
                  <textarea
                    className="cf-input resize-none"
                    rows={4}
                    value={form.message}
                    onChange={e => handleChange("message", e.target.value)}
                    placeholder="Tell us about your business and what you're looking to achieve..."
                  />
                </div>

                {/* Submit */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={loading}
                    className="shimmer-btn text-white font-semibold text-base px-8 py-3.5 rounded-full shadow-xl shadow-indigo-500/25 hover:shadow-indigo-500/40 transition-shadow flex items-center gap-2 group disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {loading ? (
                      <>
                        <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        Book My Demo
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </button>
                </div>
              </motion.form>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}

function FormField({ label, value, onChange, error, placeholder, type = "text" }) {
  return (
    <div>
      <label className="block text-xs font-mono-cf text-white/40 uppercase tracking-widest mb-3">
        {label}
      </label>
      <input
        type={type}
        className={`cf-input ${error ? "border-b-red-500" : ""}`}
        value={value}
        onChange={e => onChange(e.target.value)}
        placeholder={placeholder}
      />
      <AnimatePresence>
        {error && (
          <motion.p
            initial={{ opacity: 0, x: -4 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0 }}
            className="text-red-400 text-xs font-inter mt-1.5"
          >
            {error}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
}

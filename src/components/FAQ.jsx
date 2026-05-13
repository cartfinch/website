import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    q: "What is Cartfinch Grocery?",
    a: "Cartfinch Grocery is a fully white-labeled ecommerce software suite built specifically for grocery businesses in the UAE. It includes a customer mobile app (phone, foldable, and tablet), a picking & delivery app for your operations team, a branded web storefront, and a powerful admin dashboard — all under your brand.",
  },
  {
    q: "What does 'white-label' mean for my business?",
    a: "White-label means your customers will never see the Cartfinch name. Your mobile app, website, and all customer-facing interfaces will carry your brand — your logo, your colors, your name. We are the invisible infrastructure powering your digital grocery experience.",
  },
  {
    q: "Does the setup fee include staff training?",
    a: "Yes. Every plan — Core, Scale, and Enterprise — includes comprehensive staff training as part of the setup fee. We train your team on the admin dashboard, the picking & delivery app, and operational workflows before go-live.",
  },
  {
    q: "What is the 'performance fee'?",
    a: "The performance fee is a small percentage applied only to your digital sales (orders placed through the app or website). It means our success is directly tied to yours — we only earn when you sell. There is no performance fee on in-store or off-platform sales.",
  },
  {
    q: "Can I start on Core and upgrade to Scale or Enterprise later?",
    a: "Absolutely. As your business grows, you can upgrade your plan. We work with you to ensure the transition is seamless, with no downtime to your operations.",
  },
  {
    q: "How long does it take to go live?",
    a: "Typical deployment timelines range from 4 to 8 weeks depending on the number of branches, catalog size, and the complexity of your existing operations. We manage the entire onboarding process.",
  },
  {
    q: "Does the app work on foldable phones and tablets?",
    a: "Yes. The Cartfinch Grocery customer app is built with an adaptive layout engine that provides an optimized experience on standard phones, foldable devices (like Galaxy Z Fold), and tablets — automatically, without the customer needing to do anything.",
  },
  {
    q: "Is Cartfinch available outside the UAE?",
    a: "Currently, Cartfinch is headquartered and primarily operates in the UAE. We do have the capability to support businesses in the broader GCC region. Please contact us to discuss your specific requirements.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);
  const shouldReduce = useReducedMotion();

  return (
    <section id="faq" className="relative py-32 bg-midnight">
      <div className="section-divider mb-24" />

      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={shouldReduce ? {} : { opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-indigo-500/20 bg-indigo-500/8 text-indigo-300 text-xs font-mono-cf uppercase tracking-widest mb-6">
            Frequently Asked Questions
          </div>
          <h2 className="font-outfit font-bold text-4xl sm:text-5xl text-white tracking-[-0.03em] leading-tight mb-4">
            Everything you need{" "}
            <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
              to know
            </span>
          </h2>
          <p className="text-white/45 font-inter">
            Can't find your answer? <a href="#contact" className="text-indigo-400 hover:text-indigo-300 underline underline-offset-4">Talk to our team</a>.
          </p>
        </motion.div>

        {/* Accordion */}
        <div className="space-y-3">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <motion.div
                key={i}
                initial={shouldReduce ? {} : { opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className={`glass-card rounded-xl overflow-hidden transition-all duration-300 ${
                  isOpen ? "border-indigo-500/30" : "border-white/5"
                }`}
                style={{ border: "1px solid" }}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full flex items-center justify-between p-6 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="font-outfit font-semibold text-white text-base leading-snug pr-4">
                    {faq.q}
                  </span>
                  <div className={`shrink-0 p-1.5 rounded-full transition-colors ${isOpen ? "bg-indigo-500/20 text-indigo-400" : "bg-white/5 text-white/40"}`}>
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-6">
                        <div className="h-px bg-white/8 mb-5" />
                        <p className="text-white/60 font-inter leading-relaxed text-base">
                          {faq.a}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

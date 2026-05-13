import { motion, useReducedMotion } from "framer-motion";
import { Check, Zap, ArrowRight } from "lucide-react";

const tiers = [
  {
    name: "Core",
    badge: null,
    branches: "1 – 3 Branches",
    setup: "20,000",
    monthly: "5,000",
    fee: "1%",
    feeLabel: "performance fee on digital sales",
    description: "Perfect for neighbourhood grocers and small chains taking their first digital leap.",
    features: [
      "Up to 3 branch locations",
      "Customer mobile app (all screen sizes)",
      "Web storefront",
      "Picking & delivery app",
      "Admin dashboard",
      "Staff training included",
      "Standard support",
    ],
    cta: "Get Started",
    highlighted: false,
  },
  {
    name: "Scale",
    badge: "Most Popular",
    branches: "4 – 15 Branches",
    setup: "25,000",
    monthly: "1,500",
    monthlyNote: "per branch / month",
    fee: "0.75%",
    feeLabel: "performance fee on digital sales",
    description: "Built for growing grocery chains that need powerful multi-branch coordination.",
    features: [
      "4 to 15 branch locations",
      "Everything in Core",
      "Multi-branch inventory sync",
      "Advanced analytics",
      "Priority onboarding",
      "Staff training included",
      "Priority support",
    ],
    cta: "Book a Demo",
    highlighted: true,
  },
  {
    name: "Enterprise",
    badge: null,
    branches: "16+ Branches",
    setup: "30,000",
    monthly: "1,200",
    monthlyNote: "per branch / month",
    fee: "0.5%",
    feeLabel: "performance fee on digital sales",
    description: "Enterprise-grade infrastructure for large-scale grocery operations across the UAE.",
    features: [
      "16+ branch locations",
      "Everything in Scale",
      "Enterprise SLA",
      "Custom integrations",
      "Dedicated account manager",
      "Staff training included",
      "24/7 enterprise support",
    ],
    cta: "Contact Sales",
    highlighted: false,
  },
  {
    name: "Bespoke",
    badge: null,
    branches: "Custom",
    setup: null,
    monthly: null,
    fee: null,
    feeLabel: null,
    description: "Have unique requirements? We architect a fully custom solution around your exact operations.",
    features: [
      "Fully custom scope",
      "Tailored integrations",
      "Custom feature development",
      "Flexible commercial terms",
      "White-glove onboarding",
      "Dedicated engineering team",
      "Strategic partnership",
    ],
    cta: "Contact Us",
    highlighted: false,
    bespoke: true,
  },
];

export default function Pricing() {
  const shouldReduce = useReducedMotion();

  return (
    <section id="pricing" className="relative py-32 bg-midnight">
      <div className="section-divider mb-24" />

      {/* Subtle background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full bg-indigo-600/8 blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={shouldReduce ? {} : { opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-indigo-500/20 bg-indigo-500/8 text-indigo-300 text-xs font-mono-cf uppercase tracking-widest mb-6">
            Transparent Pricing · AED
          </div>
          <h2 className="font-outfit font-bold text-4xl sm:text-5xl lg:text-6xl text-white tracking-[-0.03em] leading-tight mb-5">
            Scale at your{" "}
            <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
              own pace
            </span>
          </h2>
          <p className="text-white/50 text-lg max-w-xl mx-auto font-inter">
            Straightforward pricing with no hidden fees. Setup includes comprehensive staff training.
          </p>
        </motion.div>

        {/* Pricing grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 relative z-10">
          {tiers.map((tier, i) => (
            <motion.div
              key={tier.name}
              initial={shouldReduce ? {} : { opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className={`relative rounded-2xl flex flex-col ${
                tier.highlighted ? "glow-border" : ""
              }`}
            >
              <div
                className={`flex-1 flex flex-col rounded-2xl p-7 ${
                  tier.highlighted
                    ? "bg-atmospheric border border-transparent"
                    : "glass-card"
                }`}
              >
                {/* Badge */}
                {tier.badge && (
                  <div className="mb-4">
                    <span className="pulse-badge inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-500/20 border border-indigo-500/40 text-indigo-300 text-xs font-mono-cf">
                      <Zap className="w-3 h-3" />
                      {tier.badge}
                    </span>
                  </div>
                )}

                {/* Tier name & branches */}
                <div className="mb-6">
                  <h3 className="font-outfit font-bold text-xl text-white mb-1">{tier.name}</h3>
                  <p className="text-xs font-mono-cf text-indigo-300/70 uppercase tracking-widest">{tier.branches}</p>
                </div>

                {/* Pricing */}
                {tier.bespoke ? (
                  <div className="mb-6">
                    <div className="font-outfit font-bold text-4xl text-white mb-1">Custom</div>
                    <p className="text-white/40 text-sm font-inter">Tailored to your business</p>
                  </div>
                ) : (
                  <div className="mb-6 space-y-3">
                    <div>
                      <div className="flex items-baseline gap-1">
                        <span className="font-mono-cf text-white/40 text-sm">AED</span>
                        <span className="font-mono-cf font-bold text-4xl text-white">{tier.setup}</span>
                      </div>
                      <p className="text-white/35 text-xs font-inter mt-0.5">one-time setup + training</p>
                    </div>
                    <div className="h-px bg-white/8" />
                    <div>
                      <div className="flex items-baseline gap-1">
                        <span className="font-mono-cf text-white/40 text-sm">AED</span>
                        <span className="font-mono-cf font-bold text-3xl text-indigo-300">{tier.monthly}</span>
                      </div>
                      <p className="text-white/35 text-xs font-inter mt-0.5">{tier.monthlyNote || "/ month"}</p>
                    </div>
                    <div className="h-px bg-white/8" />
                    <div>
                      <span className="font-mono-cf font-bold text-2xl text-purple-300">{tier.fee}</span>
                      <p className="text-white/35 text-xs font-inter mt-0.5">{tier.feeLabel}</p>
                    </div>
                  </div>
                )}

                <p className="text-white/45 text-sm font-inter leading-relaxed mb-6">{tier.description}</p>

                {/* Features */}
                <ul className="space-y-2.5 flex-1 mb-8">
                  {tier.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm text-white/65 font-inter">
                      <Check className="w-4 h-4 text-indigo-400 mt-0.5 shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <a
                  href="#contact"
                  className={`w-full text-center py-3 rounded-xl text-sm font-semibold transition-all duration-300 flex items-center justify-center gap-2 group ${
                    tier.highlighted
                      ? "shimmer-btn text-white shadow-lg shadow-indigo-500/25"
                      : "border border-white/15 text-white/70 hover:border-indigo-500/50 hover:text-white hover:bg-indigo-500/10"
                  }`}
                >
                  {tier.cta}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={shouldReduce ? {} : { opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-white/25 text-sm font-mono-cf mt-10"
        >
          All prices in UAE Dirhams (AED) · Exclusive of VAT · Performance fee applies to digital sales only
        </motion.p>
      </div>
    </section>
  );
}

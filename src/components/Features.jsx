import { motion } from "framer-motion";
import { useReducedMotion } from "framer-motion";
import { Smartphone, Truck, Globe, LayoutDashboard } from "lucide-react";

const features = [
  {
    icon: Smartphone,
    title: "Adaptive Mobile App",
    tag: "Customer Facing",
    description:
      "A beautifully crafted consumer app that adapts flawlessly across phone, foldable, and tablet form factors. Your customers get a premium shopping experience on any device.",
    gradient: "from-indigo-600/20 to-purple-600/10",
    iconColor: "text-indigo-400",
    iconBg: "bg-indigo-500/15",
    detail: "Phone · Foldable · Tablet",
  },
  {
    icon: Truck,
    title: "Picking & Delivery App",
    tag: "Operations",
    description:
      "Equip your ground team with a purpose-built app for order picking, and route optimization. Reduce errors, speed up fulfillment.",
    gradient: "from-purple-600/20 to-pink-600/10",
    iconColor: "text-purple-400",
    iconBg: "bg-purple-500/15",
    detail: "Real-time · Optimized · Accurate",
  },
  {
    icon: Globe,
    title: "Storefront Website",
    tag: "Customer Facing",
    description:
      "A high-converting, SEO-optimized web storefront fully white-labeled under your brand. Customers browse, order, and reorder with zero friction.",
    gradient: "from-cyan-600/15 to-indigo-600/15",
    iconColor: "text-cyan-400",
    iconBg: "bg-cyan-500/15",
    detail: "SEO-ready · Fast · Branded",
  },
  {
    icon: LayoutDashboard,
    title: "Admin Dashboard",
    tag: "Management",
    description:
      "A powerful command center for your team. Manage inventory, staff, orders, promotions, and analytics across all branches from a single unified view.",
    gradient: "from-violet-600/20 to-indigo-600/10",
    iconColor: "text-violet-400",
    iconBg: "bg-violet-500/15",
    detail: "Multi-branch · Analytics · Control",
  },
];

export default function Features() {
  const shouldReduce = useReducedMotion();

  return (
    <section id="features" className="relative py-32 bg-midnight">
      {/* Section divider */}
      <div className="section-divider mb-24" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={shouldReduce ? {} : { opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-indigo-500/20 bg-indigo-500/8 text-indigo-300 text-xs font-mono-cf uppercase tracking-widest mb-6">
            The Cartfinch Ecosystem
          </div>
          <h2 className="font-outfit font-bold text-4xl sm:text-5xl lg:text-6xl text-white tracking-[-0.03em] leading-tight mb-5">
            One platform.{" "}
            <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
              Every surface.
            </span>
          </h2>
          <p className="text-white/50 text-lg max-w-xl mx-auto font-inter leading-relaxed">
            Grocery — our flagship product — covers every digital touchpoint your business needs to compete and win.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {features.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={shouldReduce ? {} : { opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                whileHover={shouldReduce ? {} : { scale: 1.02, y: -4 }}
                className={`glass-card rounded-2xl p-8 relative overflow-hidden group cursor-default`}
              >
                {/* Background gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl`} />

                {/* Content */}
                <div className="relative z-10">
                  {/* Tag */}
                  <div className="flex items-center gap-3 mb-6">
                    <div className={`p-2.5 rounded-xl ${feature.iconBg}`}>
                      <Icon className={`w-5 h-5 ${feature.iconColor}`} />
                    </div>
                    <span className="text-xs font-mono-cf text-white/40 uppercase tracking-widest">{feature.tag}</span>
                  </div>

                  <h3 className="font-outfit font-bold text-2xl text-white mb-3 tracking-tight">
                    {feature.title}
                  </h3>
                  <p className="text-white/55 font-inter leading-relaxed text-base mb-6">
                    {feature.description}
                  </p>

                  {/* Detail badge */}
                  <div className="flex items-center gap-2">
                    <div className="h-px flex-1 bg-white/10" />
                    <span className="text-xs font-mono-cf text-white/30">{feature.detail}</span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom flourish */}
        <motion.div
          initial={shouldReduce ? {} : { opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-16 text-center"
        >
          <p className="text-white/30 text-sm font-mono-cf">
            All surfaces are fully white-labeled under your brand — zero Cartfinch branding visible to your customers.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

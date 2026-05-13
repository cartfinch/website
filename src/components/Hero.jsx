import { useEffect, useRef } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Star } from "lucide-react";

const words = ["Modern", "Grocery"];

export default function Hero() {
  const shouldReduce = useReducedMotion();
  const canvasRef = useRef(null);

  // Subtle parallax aurora on mouse move
  useEffect(() => {
    if (shouldReduce) return;
    const hero = document.getElementById("hero-aurora");
    const handleMove = (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 30;
      const y = (e.clientY / window.innerHeight - 0.5) * 30;
      if (hero) {
        hero.style.transform = `translate(${x}px, ${y}px)`;
      }
    };
    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, [shouldReduce]);

  const container = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12 } }
  };

  const item = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] } }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden aurora-bg grain">
      {/* Aurora blur orbs */}
      <div
        id="hero-aurora"
        className="absolute inset-0 pointer-events-none"
        style={{ transition: "transform 0.1s ease-out" }}>
        
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[900px] h-[600px] rounded-full bg-indigo-500/20 blur-[120px]" />
        <div className="absolute top-1/3 left-1/4 w-[500px] h-[400px] rounded-full bg-purple-600/15 blur-[100px]" />
        <div className="absolute top-1/4 right-1/4 w-[400px] h-[300px] rounded-full bg-indigo-400/10 blur-[80px]" />
      </div>

      {/* Grid overlay */}
      <div className="absolute inset-0 data-grid opacity-40 pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-24 pb-20 text-center">
        {/* Badge */}
        







        

        {/* Headline */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="mb-6">
          
          <motion.h1
            variants={item}
            className="font-outfit font-bold text-5xl sm:text-6xl lg:text-8xl text-white leading-[1.05] tracking-[-0.04em]">
            
            The Operating System
          </motion.h1>
          <motion.h1
            variants={item}
            className="font-outfit font-bold text-5xl sm:text-6xl lg:text-8xl leading-[1.05] tracking-[-0.04em]">
            
            <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-lavender bg-clip-text text-transparent">
              for Modern Grocery
            </span>
          </motion.h1>
        </motion.div>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.7 }}
          className="text-lg sm:text-xl text-white/55 font-inter leading-relaxed max-w-2xl mx-auto mb-12">
          
          White-label ecommerce infrastructure for UAE grocery businesses — from boutique chains to enterprise operations with 16+ branches.
        </motion.p>

        {/* CTA Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.7 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
          
          <a
            href="#contact"
            className="shimmer-btn text-white font-semibold text-base px-8 py-3.5 rounded-full shadow-xl shadow-indigo-500/30 hover:shadow-indigo-500/50 transition-shadow flex items-center gap-2 group">
            
            Book a Demo
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#pricing"
            className="text-white/60 hover:text-white text-base font-medium transition-colors flex items-center gap-2">
            
            View Pricing
            <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>

        {/* Stats Row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-3xl mx-auto">
          
          {[
          { value: "100+", label: "Branches Support" },
          { value: "4", label: "Platform Surfaces" },
          { value: "UAE", label: "Based & Operated" },
          { value: "24/7", label: "Support Coverage" }].
          map((stat) =>
          <div key={stat.label} className="text-center">
              <div className="font-mono-cf font-bold text-3xl text-indigo-400 mb-1">{stat.value}</div>
              <div className="text-white/40 text-sm font-inter">{stat.label}</div>
            </div>
          )}
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-midnight to-transparent pointer-events-none" />
    </section>);

}

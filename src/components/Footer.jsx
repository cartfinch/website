import { ShoppingCart, Mail, Phone, MapPin } from "lucide-react";

const links = [
  { label: "Product", href: "#features" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-midnight">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-lg shadow-indigo-500/30">
                <ShoppingCart className="w-4 h-4 text-white" />
              </div>
              <span className="font-outfit font-bold text-lg text-white tracking-tight">
                Cart<span className="text-indigo-400">finch</span>
              </span>
            </div>
            <p className="text-white/40 text-sm font-inter leading-relaxed max-w-xs">
              Ecommerce software solutions for modern grocery businesses across the UAE and GCC.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-xs font-mono-cf text-white/30 uppercase tracking-widest mb-5">Navigation</h4>
            <ul className="space-y-3">
              {links.map(link => (
                <li key={link.label}>
                  <a href={link.href} className="text-white/50 hover:text-white text-sm font-inter transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs font-mono-cf text-white/30 uppercase tracking-widest mb-5">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2.5 text-white/50 text-sm font-inter">
                <MapPin className="w-4 h-4 text-indigo-400 shrink-0" />
                United Arab Emirates
              </li>
              <li className="flex items-center gap-2.5 text-sm font-inter">
                <Mail className="w-4 h-4 text-indigo-400 shrink-0" />
                <a href="mailto:ceo@cartfinch.com" className="text-white/50 hover:text-white transition-colors">
                  ceo@cartfinch.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="section-divider mb-8" />
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/25 text-sm font-mono-cf">
            © {new Date().getFullYear()} Cartfinch. All rights reserved.
          </p>
          <p className="text-white/20 text-xs font-inter">
            Built in the UAE · Powering grocery commerce
          </p>
        </div>
      </div>
    </footer>
  );
}

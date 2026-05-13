import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-midnight font-inter overflow-x-hidden">
      <Navbar />
      <Hero />
      <Features />
      <Pricing />
      <FAQ />
      <ContactForm />
      <Footer />
    </div>
  );
}

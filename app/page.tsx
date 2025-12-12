import Image from "next/image";
import Navbar from "@/components/navbar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import Feature from "@/components/Feature";
import FAQ from "@/components/FAQ";

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white transition-colors duration-300">
      <Navbar />
      <Hero />
      <Feature />
      <FAQ />
      <Footer />
    </div>
  );
}

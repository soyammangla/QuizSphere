import Image from "next/image";
import Navbar from "@/components/navbar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import Feature from "@/components/Feature";
import FAQ from "@/components/FAQ";
export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Feature />
      <FAQ />
      <Footer />
    </>
  );
}

"use client";
import { useState, useEffect } from "react";
import SplashScreen from "@/components/SplashScreen";
import Navbar from "@/components/navbar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import Feature from "@/components/Feature";
import FAQ from "@/components/FAQ";

const Home = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const hasShown = sessionStorage.getItem("splashShown");

    if (hasShown) {
      setLoading(false);
    } else {
      const timer = setTimeout(() => {
        setLoading(false);
        sessionStorage.setItem("splashShown", "true");
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, []);

  if (loading) return <SplashScreen />;

  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white transition-colors duration-300">
      <Navbar />
      <Hero />
      <Feature />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Home;

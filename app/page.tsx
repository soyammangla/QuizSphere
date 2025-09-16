"use client";
import { useState, useEffect } from "react";

import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Feature from "@/components/Feature";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import SplashScreen from "@/components/SplashScreen";

const Page = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <SplashScreen />;
  }

  return (
    <>
      <Navbar />
      <Hero />
      <Feature />
      <FAQ />
      <Footer />
    </>
  );
};

export default Page;

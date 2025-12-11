"use client";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";

const SplashScreen = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isFirstVisit, setIsFirstVisit] = useState(false);

  useEffect(() => {
    const hasVisited = sessionStorage.getItem("visited");
    if (hasVisited) {
      setIsVisible(false);
    } else {
      setIsFirstVisit(true);
      sessionStorage.setItem("visited", "true");
      const timer = setTimeout(() => {
        document.body.style.overflow = "auto"; // restore scroll
        setIsVisible(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, []);

  useEffect(() => {
    if (isFirstVisit) {
      document.body.style.overflow = "hidden";
    }
  }, [isFirstVisit]);

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          key="splash"
          className="fixed inset-0 flex flex-col items-center justify-center bg-white text-black dark:bg-black dark:text-white z-[99999] px-4 sm:px-6 md:px-8"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="w-[220px] sm:w-[320px] md:w-[400px] lg:w-[500px]"
          >
            <Image
              src="/quiz.jpeg"
              alt="QuizSphere Logo"
              width={500}
              height={500}
              className="rounded-2xl shadow-2xl w-full h-auto object-contain"
              priority
            />
          </motion.div>

          <motion.p
            className="mt-6 text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold tracking-wide text-center text-black dark:text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 1 }}
          >
            Where Knowledge Meets Victory.
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SplashScreen;

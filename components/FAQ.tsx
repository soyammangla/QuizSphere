"use client";

import { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

export default function Page() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs: FAQItem[] = [
    {
      question: "How do I create a quiz?",
      answer:
        "Just enter your topic, set the difficulty and number of questions, and your quiz will be ready instantly.",
    },
    {
      question: "Can I share my quizzes?",
      answer:
        "Yes! Each quiz comes with a unique link that you can share with your friends, students, or team.",
    },
    {
      question: "Is this platform free?",
      answer:
        "Yes, you can create and attempt quizzes for free. Some advanced features may be added in premium plans later.",
    },
    {
      question: "Do I need technical skills?",
      answer:
        "Not at all. The platform is simple and user-friendly — anyone can create quizzes without coding knowledge.",
    },
    {
      question: "Can I track quiz results?",
      answer:
        "Yes. If you sign up, you’ll be able to view detailed results and track performance over time.",
    },
  ];

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full max-w-[90%] sm:max-w-[80%] md:max-w-[70%] lg:max-w-[50%] mx-auto py-12 sm:py-14 md:py-16 bg-white text-black dark:bg-black dark:text-white transition-colors">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-6 sm:mb-8 md:mb-10">
        Frequently Asked Questions
      </h2>

      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-gray-200 dark:bg-neutral-900 rounded-lg shadow-md overflow-hidden transition-colors"
          >
            <button
              onClick={() => toggleFaq(index)}
              className="w-full flex justify-between items-center px-4 sm:px-6 py-3 sm:py-4 text-left font-medium transition-colors"
            >
              <span className="text-base sm:text-lg">{faq.question}</span>
              <span className="text-xl">{openIndex === index ? "−" : "+"}</span>
            </button>

            {openIndex === index && (
              <div className="px-4 sm:px-6 pb-4 mt-1 sm:mt-2 text-black dark:text-white transition-colors text-sm sm:text-base">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

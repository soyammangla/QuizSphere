"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

interface Question {
  question: string;
  options: string[];
}

interface Quiz {
  id: number;
  title: string;
  description: string;
  category: string;
  difficulty: string;
  questions: Question[];
  created: string;
}

export default function FinalQuiz() {
  const [quiz, setQuiz] = useState<Quiz | null>(null);
  const router = useRouter();

  useEffect(() => {
    const stored = localStorage.getItem("tempQuiz");
    if (stored) setQuiz(JSON.parse(stored));
  }, []);

  const handleSave = () => {
    if (!quiz) return;
    const existing = JSON.parse(localStorage.getItem("quizzes") || "[]");
    const updated = [...existing, quiz];
    localStorage.setItem("quizzes", JSON.stringify(updated));
    localStorage.removeItem("tempQuiz");
    router.push("/quiz");
  };

  if (!quiz) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white dark:bg-black transition-colors p-4">
        <p className="text-black dark:text-white text-base sm:text-lg text-center">
          No quiz found to display.
        </p>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-4 sm:p-6 bg-white dark:bg-black transition-colors">
      <div className="bg-gray-100 dark:bg-neutral-900 w-full max-w-4xl rounded-2xl shadow-lg p-4 sm:p-8 transition-colors">
        {/* Header */}
        <h1 className="text-2xl sm:text-3xl font-bold mb-4 text-center text-black dark:text-white">
          Preview Quiz
        </h1>

        {/* Quiz Info */}
        <div className="mb-6 text-center sm:text-left">
          <h2 className="text-xl sm:text-2xl font-semibold text-black dark:text-white">
            {quiz.title}
          </h2>
          <p className="text-black dark:text-white mt-2 text-sm sm:text-base">
            {quiz.description}
          </p>
          <p className="text-xs sm:text-sm text-black/70 dark:text-white/70 mt-1">
            {quiz.difficulty} • {quiz.category} • {quiz.created}
          </p>
        </div>

        {/* Questions */}
        <div>
          {quiz.questions.map((q, idx) => (
            <div
              key={idx}
              className="mb-6 border p-4 sm:p-5 rounded-lg bg-gray-200 dark:bg-neutral-800 shadow-sm transition-colors"
            >
              <h3 className="font-medium text-black dark:text-white mb-3 text-sm sm:text-base">
                Q{idx + 1}. {q.question}
              </h3>

              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {q.options.map((opt, optIdx) => (
                  <li
                    key={optIdx}
                    className="border rounded-lg px-3 py-2 text-sm sm:text-base text-black dark:text-white bg-gray-300 dark:bg-neutral-700 transition-colors text-center sm:text-left"
                  >
                    {opt}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Button */}
        <div className="flex justify-center mt-6">
          <button
            onClick={handleSave}
            className="w-full sm:w-auto px-6 sm:px-8 py-3 rounded-full shadow-lg bg-gray-200 dark:bg-neutral-700 text-black dark:text-white hover:scale-105 transition transform duration-300"
          >
            Save to Dashboard
          </button>
        </div>
      </div>
    </div>
  );
}

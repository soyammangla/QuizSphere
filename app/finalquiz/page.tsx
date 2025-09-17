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
      <div className="min-h-screen flex items-center justify-center bg-white dark:bg-black transition-colors">
        <p className="text-black dark:text-white text-lg">
          No quiz found to display.
        </p>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-6 bg-white dark:bg-black transition-colors">
      <div className="bg-gray-100 dark:bg-neutral-900 max-w-3xl w-full rounded-2xl shadow-lg p-8 transition-colors">
        <h1 className="text-3xl font-bold mb-4 text-center text-black dark:text-white">
          Preview Quiz
        </h1>

        <div className="mb-6">
          <h2 className="text-2xl font-semibold text-black dark:text-white">
            {quiz.title}
          </h2>
          <p className="text-black dark:text-white mt-2">{quiz.description}</p>
          <p className="text-sm text-black/70 dark:text-white/70 mt-1">
            {quiz.difficulty} • {quiz.category} • {quiz.created}
          </p>
        </div>

        <div>
          {quiz.questions.map((q, idx) => (
            <div
              key={idx}
              className="mb-6 border p-4 rounded-lg bg-gray-200 dark:bg-neutral-800 shadow-sm transition-colors"
            >
              <h3 className="font-medium text-black dark:text-white mb-2">
                Q{idx + 1}. {q.question}
              </h3>
              <ul className="grid grid-cols-2 gap-2">
                {q.options.map((opt, optIdx) => (
                  <li
                    key={optIdx}
                    className="border rounded-lg px-3 py-2 text-black dark:text-white bg-gray-300 dark:bg-neutral-700 transition-colors"
                  >
                    {opt}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-6">
          <button
            onClick={handleSave}
            className="px-8 py-3 rounded-full shadow-lg bg-gray-200 dark:bg-neutral-700 text-black dark:text-white hover:scale-105 transition transform duration-300"
          >
            Save to Dashboard
          </button>
        </div>
      </div>
    </div>
  );
}

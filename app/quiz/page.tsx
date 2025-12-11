"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

interface Quiz {
  id: number;
  title: string;
  description: string;
  category: string;
  difficulty: string;
  questions: number | { question: string; options: string[] }[];
  created: string;
}

export default function QuizDashboard() {
  const router = useRouter();
  const [quizzes, setQuizzes] = useState<Quiz[]>([]);
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    const saved = localStorage.getItem("quizzes");
    if (saved) setQuizzes(JSON.parse(saved));

    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "dark") setDarkMode(true);
    else if (storedTheme === "light") setDarkMode(false);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  return (
    <div className="min-h-screen transition-colors duration-300 p-4 sm:p-6 md:p-8 bg-white dark:bg-black text-black dark:text-white">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-6">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center md:text-left w-full">
          QuizSphere
        </h1>
        <div className="flex justify-center md:justify-end w-full">
          <Link href="/createquiz">
            <button className="px-5 sm:px-6 py-3 rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition transform duration-300 font-semibold bg-black dark:bg-neutral-900 text-white">
              Create New Quiz
            </button>
          </Link>
        </div>
      </div>

      {/* Quiz List */}
      {quizzes.length === 0 ? (
        <p className="text-center mt-32 sm:mt-40 text-base sm:text-lg text-gray-700 dark:text-gray-300">
          No quizzes yet. Click{" "}
          <span className="font-semibold">&quot;Create New Quiz&quot;</span> to
          get started!
        </p>
      ) : (
        <div className="grid gap-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {quizzes.map((quiz) => (
            <div
              key={quiz.id}
              className="rounded-2xl p-5 sm:p-6 flex flex-col justify-between shadow-md hover:shadow-2xl transition-all duration-300 cursor-pointer bg-gray-100 dark:bg-neutral-900"
            >
              <div className="mb-4">
                <h2 className="text-xl sm:text-2xl font-bold mb-2">
                  {quiz.title}
                </h2>
                <p className="text-sm sm:text-base mb-3 text-gray-700 dark:text-gray-300 line-clamp-2">
                  {quiz.description}
                </p>

                <div className="flex flex-wrap gap-2 text-xs mb-3">
                  <span className="px-2 py-1 rounded-full font-medium bg-gray-200 text-black dark:bg-neutral-700 dark:text-white">
                    {Array.isArray(quiz.questions)
                      ? quiz.questions.length
                      : quiz.questions}{" "}
                    Questions
                  </span>
                  <span className="px-2 py-1 rounded-full font-medium bg-gray-200 text-black dark:bg-neutral-700 dark:text-white">
                    {quiz.difficulty}
                  </span>
                  <span className="px-2 py-1 rounded-full font-medium bg-gray-200 text-black dark:bg-neutral-700 dark:text-white">
                    {quiz.category}
                  </span>
                </div>

                <p className="text-xs text-gray-500 dark:text-gray-400">
                  Created: {quiz.created}
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 mt-4">
                <button
                  onClick={() => router.push(`/quiz/${quiz.id}`)}
                  className="flex-1 py-2 rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition transform duration-300 font-medium bg-gray-900 dark:bg-neutral-800 text-white"
                >
                  Take Quiz
                </button>

                {/* 🗑️ Delete Single Quiz Button */}
                <button
                  onClick={() => {
                    if (
                      confirm(
                        `Are you Sure you want to Delete "${quiz.title}"?`
                      )
                    ) {
                      const updated = quizzes.filter((q) => q.id !== quiz.id);
                      localStorage.setItem("quizzes", JSON.stringify(updated));
                      setQuizzes(updated);
                    }
                  }}
                  className="flex-1 py-2 rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition transform duration-300 font-medium bg-red-600 text-white"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

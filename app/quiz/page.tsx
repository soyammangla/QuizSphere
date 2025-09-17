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
  const [darkMode, setDarkMode] = useState(true); // default dark

  useEffect(() => {
    // Load quizzes
    const saved = localStorage.getItem("quizzes");
    if (saved) setQuizzes(JSON.parse(saved));

    // Load theme
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "dark") setDarkMode(true);
    else if (storedTheme === "light") setDarkMode(false);
  }, []);

  useEffect(() => {
    // Apply theme
    document.documentElement.classList.toggle("dark", darkMode);
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  return (
    <div className="min-h-screen transition-colors duration-300 p-8 bg-white dark:bg-black text-black dark:text-white">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-4">
        <h1 className="text-5xl font-bold">QuizSphere</h1>
        <Link href="/createquiz">
          <button className="mt-4 px-6 py-3 rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition transform duration-300 font-semibold bg-black dark:bg-neutral-900 text-white dark:text-white">
            Create New Quiz
          </button>
        </Link>
      </div>

      {quizzes.length === 0 ? (
        <p className="text-center mt-40 text-lg text-gray-700 dark:text-gray-300">
          No quizzes yet. Click{" "}
          <span className="font-semibold">&quot;Create New Quiz&quot;</span> to
          get started!
        </p>
      ) : (
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {quizzes.map((quiz) => (
            <div
              key={quiz.id}
              className="rounded-2xl p-6 flex flex-col justify-between shadow-md hover:shadow-2xl transition-colors duration-300 cursor-pointer bg-gray-100 dark:bg-neutral-900"
            >
              <div className="mb-4">
                <h2 className="text-2xl font-bold mb-2 text-black dark:text-white">
                  {quiz.title}
                </h2>
                <p className="text-sm mb-3 text-gray-700 dark:text-gray-300">
                  {quiz.description}
                </p>

                <div className="flex flex-wrap gap-2 text-xs mb-2">
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

              <button
                onClick={() => router.push(`/quiz/${quiz.id}`)}
                className="mt-4 py-2 rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition transform duration-300 font-medium bg-gray-900 dark:bg-neutral-900 text-white dark:text-white"
              >
                Take Quiz
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

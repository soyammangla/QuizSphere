"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

interface Question {
  question: string;
  options: string[];
}

interface Quiz {
  id: number | string;
  title: string;
  description: string;
  category: string;
  difficulty: string;
  questions: Question[] | number;
  created: string;
}

export default function QuizDashboard() {
  const router = useRouter();
  const [quizzes, setQuizzes] = useState<Quiz[]>([]);

  // 🔹 Load quizzes from LocalStorage
  useEffect(() => {
    const saved = localStorage.getItem("quizzes");
    if (saved) {
      try {
        setQuizzes(JSON.parse(saved));
      } catch (error) {
        console.error("Failed to parse quizzes:", error);
        setQuizzes([]);
      }
    }
  }, []);

  // 🔹 Delete quiz
  const deleteQuiz = (id: number | string) => {
    const updated = quizzes.filter((q) => q.id !== id);
    localStorage.setItem("quizzes", JSON.stringify(updated));
    setQuizzes(updated);
  };

  return (
    <div className="min-h-screen p-4 sm:p-6 md:p-8 bg-white dark:bg-black text-black dark:text-white transition-colors">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-10">
        <h1 className="text-4xl md:text-5xl font-bold">QuizSphere</h1>

        <Link href="/createquiz">
          <button className="px-6 py-3 rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition font-semibold bg-black dark:bg-neutral-900 text-white">
            Create New Quiz
          </button>
        </Link>
      </div>

      {/* Quiz List */}
      {quizzes.length === 0 ? (
        <p className="text-center mt-32 text-lg text-gray-600 dark:text-gray-400">
          No quizzes yet. Click{" "}
          <span className="font-semibold">“Create New Quiz”</span> to get
          started!
        </p>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {quizzes.map((quiz) => (
            <div
              key={quiz.id}
              className="rounded-2xl p-6 shadow-md hover:shadow-2xl transition-all bg-gray-100 dark:bg-neutral-900 flex flex-col justify-between"
            >
              <div>
                <h2 className="text-2xl font-bold mb-2">{quiz.title}</h2>

                <p className="text-sm mb-3 text-gray-700 dark:text-gray-300 line-clamp-2">
                  {quiz.description}
                </p>

                <div className="flex flex-wrap gap-2 text-xs mb-3">
                  <span className="px-2 py-1 rounded-full bg-gray-200 dark:bg-neutral-700">
                    {Array.isArray(quiz.questions)
                      ? quiz.questions.length
                      : quiz.questions}{" "}
                    Questions
                  </span>

                  <span className="px-2 py-1 rounded-full bg-gray-200 dark:bg-neutral-700">
                    {quiz.difficulty}
                  </span>

                  <span className="px-2 py-1 rounded-full bg-gray-200 dark:bg-neutral-700">
                    {quiz.category}
                  </span>
                </div>

                <p className="text-xs text-gray-500 dark:text-gray-400">
                  Created: {quiz.created}
                </p>
              </div>

              <div className="flex gap-3 mt-5">
                <button
                  onClick={() => router.push(`/quiz/${quiz.id}`)}
                  className="flex-1 py-2 rounded-lg bg-gray-900 dark:bg-neutral-800 text-white shadow-md hover:scale-105 transition"
                >
                  Take Quiz
                </button>

                <button
                  onClick={() => {
                    if (
                      confirm(
                        `Are you sure you want to delete "${quiz.title}"?`
                      )
                    ) {
                      deleteQuiz(quiz.id);
                    }
                  }}
                  className="flex-1 py-2 rounded-lg bg-red-600 text-white shadow-md hover:scale-105 transition"
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

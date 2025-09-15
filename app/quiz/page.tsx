"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface Quiz {
  id: number;
  title: string;
  description: string;
  category: string;
  difficulty: string;
  questions: number | { question: string; options: string[] }[]; // array or number
  created: string;
}

export default function QuizDashboard() {
  const router = useRouter();
  const [quizzes, setQuizzes] = useState<Quiz[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem("quizzes");
    if (saved) setQuizzes(JSON.parse(saved));
  }, []);

  return (
    <div className="min-h-screen bg-black p-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-4">
        <h1 className="text-5xl font-bold text-white">QuizSphere</h1>
        <Link href="/createquiz">
          <button className="bg-neutral-900 text-white px-6 py-3 rounded-xl shadow-lg hover:shadow-2xl transition transform duration-300 font-semibold">
            Create New Quiz
          </button>
        </Link>
      </div>

      {quizzes.length === 0 ? (
        <p className="text-gray-500 text-center mt-40 text-lg">
          No quizzes yet. Click {`"Create New Quiz"`} to get started!
        </p>
      ) : (
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {quizzes.map((quiz) => (
            <div
              key={quiz.id}
              className="bg-neutral-900 rounded-2xl p-6 flex flex-col justify-between shadow-md hover:shadow-2xl transition duration-300 cursor-pointer"
            >
              <div className="mb-4">
                <h2 className="text-2xl font-bold text-neutral-50 mb-2">
                  {quiz.title}
                </h2>
                <p className="text-neutral-200 text-sm mb-3">
                  {quiz.description}
                </p>

                <div className="flex flex-wrap gap-2 text-xs text-black-50 mb-2">
                  <span className="bg-neutral-200 px-2 py-1 rounded-full">
                    {Array.isArray(quiz.questions)
                      ? quiz.questions.length
                      : quiz.questions}{" "}
                    Questions
                  </span>
                  <span className="bg-neutral-200 px-2 py-1 rounded-full">
                    {quiz.difficulty}
                  </span>
                  <span className="bg-neutral-200 px-2 py-1 rounded-full">
                    {quiz.category}
                  </span>
                </div>

                <p className="text-neutral-200 text-xs">
                  Created: {quiz.created}
                </p>
              </div>

              <button
                onClick={() => router.push(`/quiz/${quiz.id}`)}
                className="mt-4 bg-black text-white py-2 rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition transform duration-300 font-medium"
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

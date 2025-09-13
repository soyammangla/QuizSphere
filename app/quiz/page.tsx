"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { FaBrain, FaBook, FaStar } from "react-icons/fa";
import Link from "next/link";

interface Quiz {
  id: number;
  difficulty: string;
  category: string;
  title: string;
  description: string;
  questions: number;
  created: string;
}

export default function QuizDashboard() {
  const router = useRouter();
  const [quizzes, setQuizzes] = useState<Quiz[]>([]);

  // Load quizzes from localStorage
  useEffect(() => {
    const stored = localStorage.getItem("quizzes");
    if (stored) setQuizzes(JSON.parse(stored));
  }, []);

  // Save quizzes on update
  useEffect(() => {
    localStorage.setItem("quizzes", JSON.stringify(quizzes));
  }, [quizzes]);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-6">
        <h1 className="text-5xl font-bold text-gray-800 mt-4">QuizSphere</h1>
        <Link href="/createquiz">
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-full shadow-lg hover:scale-105 transition transform duration-300 mt-4 md:mt-0">
            Create New Quiz
          </button>
        </Link>
      </div>

      {quizzes.length === 0 ? (
        <p className="text-gray-500 text-center mt-40 text-lg">
          No quizzes yet. Click {`"Create New Quiz"`} to get started!
        </p>
      ) : (
        <div className="grid md:grid-cols-3 gap-6">
          {quizzes.map((quiz) => (
            <div
              key={quiz.id}
              className="bg-white rounded-2xl p-6 flex flex-col justify-between shadow-md hover:shadow-xl transition duration-300 cursor-pointer"
            >
              <div className="mb-4">
                <div className="flex items-center gap-3 text-sm text-gray-500 mb-2">
                  <FaStar /> {quiz.difficulty}
                  <FaBook /> {quiz.category}
                  <FaBrain /> {quiz.questions} Qs
                </div>
                <h2 className="text-xl font-bold text-gray-800 mb-1">
                  {quiz.title}
                </h2>
                <p className="text-gray-600 text-sm mb-2">{quiz.description}</p>
                <p className="text-gray-400 text-xs">Created {quiz.created}</p>
              </div>
              <button
                onClick={() => router.push(`/final-quiz?id=${quiz.id}`)}
                className="mt-auto bg-green-500 hover:bg-green-600 text-white py-2 rounded-full shadow-md hover:scale-105 transition duration-300"
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

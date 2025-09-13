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

  // Fetch temp quiz from localStorage
  useEffect(() => {
    const stored = localStorage.getItem("tempQuiz");
    if (stored) {
      setQuiz(JSON.parse(stored));
    }
  }, []);

  const handleSave = () => {
    if (!quiz) return;

    const existing = JSON.parse(localStorage.getItem("quizzes") || "[]");
    const updated = [...existing, quiz];

    localStorage.setItem("quizzes", JSON.stringify(updated));
    localStorage.removeItem("tempQuiz");

    alert("Quiz saved successfully!");
    router.push("/quiz"); // back to dashboard
  };

  if (!quiz) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <p className="text-gray-600 text-lg">No quiz found to display.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="bg-white max-w-3xl w-full rounded-2xl shadow-lg p-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-4 text-center">
          Preview Quiz
        </h1>

        {/* Quiz Info */}
        <div className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-700">{quiz.title}</h2>
          <p className="text-gray-600 mt-2">{quiz.description}</p>
          <p className="text-sm text-gray-500 mt-1">
            {quiz.difficulty} • {quiz.category} • {quiz.created}
          </p>
        </div>

        {/* Questions */}
        <div>
          {quiz.questions.map((q, idx) => (
            <div
              key={idx}
              className="mb-6 border p-4 rounded-lg bg-gray-50 shadow-sm"
            >
              <h3 className="font-medium text-gray-800 mb-2">
                Q{idx + 1}. {q.question}
              </h3>
              <ul className="grid grid-cols-2 gap-2">
                {q.options.map((opt, optIdx) => (
                  <li
                    key={optIdx}
                    className="border rounded-lg px-3 py-2 text-gray-700 bg-white"
                  >
                    {opt}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Save Button */}
        <div className="flex justify-center mt-6">
          <button
            onClick={handleSave}
            className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-full shadow-lg hover:scale-105 transition transform duration-300"
          >
            Save to Dashboard
          </button>
        </div>
      </div>
    </div>
  );
}

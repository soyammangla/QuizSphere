"use client";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

interface Question {
  question: string;
  options: string[];
  correctOption: number; // 0,1,2,3
}

interface Quiz {
  id: number;
  title: string;
  description: string;
  difficulty: string;
  category: string;
  questions: Question[];
}

export default function QuizPage() {
  const { id } = useParams();
  const [quiz, setQuiz] = useState<Quiz | null>(null);
  const [currentQ, setCurrentQ] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("quizzes");
    if (stored) {
      const allQuizzes: Quiz[] = JSON.parse(stored);
      const q = allQuizzes.find((quiz) => quiz.id.toString() === id);
      setQuiz(q || null);
    }
  }, [id]);

  if (!quiz) return <p className="p-6 text-gray-600">Quiz not found</p>;

  const question = quiz.questions[currentQ];

  const handleNext = () => {
    if (selected === null) {
      alert("Please select an option!");
      return;
    }

    // Check answer
    if (selected === question.correctOption) setScore(score + 1);

    if (currentQ < quiz.questions.length - 1) {
      setCurrentQ((prev) => prev + 1);
      setSelected(null);
    } else {
      setFinished(true);
    }
  };

  if (finished)
    return (
      <div className="min-h-screen bg-black p-6 flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold mb-4 text-white">{quiz.title}</h1>
        <p className="text-gray-600 mb-6 text-white">{quiz.description}</p>
        <div className="bg-neutral-900 rounded-xl shadow-md p-6 w-full max-w-md text-center">
          <h2 className="text-2xl font-semibold mb-4 text-white">
            🎉 Quiz Finished!
          </h2>
          <p className="text-lg mb-2 text-white">
            Correct Answers:{" "}
            <span className="font-bold text-white">{score}</span>
          </p>
          <p className="text-lg mb-4 text-white">
            Wrong Answers:{" "}
            <span className="font-bold">{quiz.questions.length - score}</span>
          </p>
          <button
            onClick={() => window.location.reload()}
            className="mt-4 bg-black text-white py-2 px-6 rounded-lg"
          >
            Retake Quiz
          </button>
        </div>
      </div>
    );

  return (
    <div className="min-h-screen bg-black p-6 flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-4 text-white">{quiz.title}</h1>
      <p className="text-white mb-6">{quiz.description}</p>

      <div className="bg-neutral-900 rounded-xl shadow-md p-6 w-full max-w-xl">
        <h2 className="text-lg text-white font-semibold mb-4">
          Q{currentQ + 1}. {question.question}
        </h2>

        <div className="flex flex-col gap-3">
          {question.options.map((opt, idx) => (
            <button
              key={idx}
              onClick={() => setSelected(idx)}
              className={`px-4 py-2 rounded-lg border w-full text-left transition duration-200
        ${
          selected === idx
            ? "bg-white text-black border-blue-600"
            : "bg-neutral-700 text-white border-gray-600 hover:bg-neutral-600"
        }`}
            >
              {opt}
            </button>
          ))}
        </div>

        <button
          onClick={handleNext}
          className="mt-6 w-full bg-black text-white py-2 rounded-lg"
        >
          {currentQ === quiz.questions.length - 1 ? "Finish" : "Next"}
        </button>
      </div>
    </div>
  );
}

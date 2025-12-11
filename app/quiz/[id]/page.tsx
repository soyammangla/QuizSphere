"use client";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

interface Question {
  question: string;
  options: string[];
  correctOption: number;
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
  const [darkMode, setDarkMode] = useState<boolean | null>(null);

  useEffect(() => {
    const storedQuizzes = localStorage.getItem("quizzes");
    if (storedQuizzes) {
      const allQuizzes: Quiz[] = JSON.parse(storedQuizzes);
      const q = allQuizzes.find((quiz) => quiz.id.toString() === id);
      setQuiz(q || null);
    }

    const storedMode = localStorage.getItem("darkMode");
    setDarkMode(storedMode === "true");
  }, [id]);

  if (!quiz)
    return (
      <p className="p-4 sm:p-6 text-gray-600 dark:text-gray-300 text-center text-sm sm:text-base">
        Quiz not found
      </p>
    );

  if (darkMode === null) return null;

  const question = quiz.questions[currentQ];

  const handleNext = () => {
    if (selected === null) {
      alert("Please select an option!");
      return;
    }

    if (selected === question.correctOption) setScore(score + 1);

    if (currentQ < quiz.questions.length - 1) {
      setCurrentQ((prev) => prev + 1);
      setSelected(null);
    } else {
      setFinished(true);
    }
  };

  const bgClass = darkMode ? "bg-black" : "bg-white";
  const cardClass = darkMode ? "bg-neutral-800" : "bg-gray-200";
  const textClass = darkMode ? "text-white" : "text-black";

  if (finished)
    return (
      <div
        className={`${bgClass} min-h-screen p-4 sm:p-6 flex flex-col items-center justify-center transition-colors`}
      >
        <h1
          className={`text-2xl sm:text-3xl font-bold mb-4 text-center ${textClass}`}
        >
          {quiz.title}
        </h1>
        <p className={`${textClass} mb-6 text-center text-sm sm:text-base`}>
          {quiz.description}
        </p>
        <div
          className={`${cardClass} rounded-xl shadow-md p-4 sm:p-6 w-full max-w-sm sm:max-w-md text-center transition-colors`}
        >
          <h2 className={`text-xl sm:text-2xl font-semibold mb-4 ${textClass}`}>
            🎉 Quiz Finished!
          </h2>
          <p className={`text-base sm:text-lg mb-2 ${textClass}`}>
            Correct Answers: <span className="font-bold">{score}</span>
          </p>
          <p className={`text-base sm:text-lg mb-4 ${textClass}`}>
            Wrong Answers:{" "}
            <span className="font-bold">{quiz.questions.length - score}</span>
          </p>
          <button
            onClick={() => window.location.reload()}
            className={`mt-4 py-2 px-6 rounded-lg shadow-md hover:scale-105 transition transform duration-200 ${
              darkMode
                ? "bg-neutral-900 text-white"
                : "bg-white text-black border border-gray-400"
            }`}
          >
            Retake Quiz
          </button>
        </div>
      </div>
    );

  return (
    <div
      className={`${bgClass} min-h-screen p-4 sm:p-6 flex flex-col items-center transition-colors`}
    >
      {/* Dark/Light Toggle */}
      <div className="w-full max-w-md sm:max-w-xl flex justify-end mb-4">
        <button
          onClick={() => {
            const newMode = !darkMode;
            setDarkMode(newMode);
            localStorage.setItem("darkMode", newMode.toString());
          }}
          className={`px-3 sm:px-4 py-2 rounded-lg text-sm sm:text-base font-medium border transition duration-200 ease-in-out ${
            darkMode
              ? "bg-neutral-900 text-white border-gray-600 hover:bg-neutral-800"
              : "bg-white text-black border-gray-400 hover:bg-gray-100"
          }`}
        >
          {darkMode ? "Switch to Light" : "Switch to Dark"}
        </button>
      </div>

      {/* Quiz Header */}
      <h1
        className={`text-2xl sm:text-3xl font-bold mb-3 text-center ${textClass}`}
      >
        {quiz.title}
      </h1>
      <p className={`${textClass} mb-5 text-center text-sm sm:text-base`}>
        {quiz.description}
      </p>

      {/* Question Card */}
      <div
        className={`${cardClass} rounded-xl shadow-md p-4 sm:p-6 w-full max-w-md sm:max-w-xl transition-colors`}
      >
        <h2 className={`text-base sm:text-lg font-semibold mb-4 ${textClass}`}>
          Q{currentQ + 1}. {question.question}
        </h2>

        <div className="flex flex-col gap-3">
          {question.options.map((opt, idx) => (
            <button
              key={idx}
              onClick={() => setSelected(idx)}
              className={`px-4 py-2 rounded-lg border text-left text-sm sm:text-base transition duration-200
                ${
                  selected === idx
                    ? darkMode
                      ? "bg-neutral-900 text-white border-neutral-700 font-semibold shadow-md"
                      : "bg-gray-300 text-black border-gray-500 font-semibold shadow-sm"
                    : darkMode
                    ? "bg-neutral-700 border-gray-600 text-white hover:bg-neutral-600"
                    : "bg-gray-100 border-gray-400 text-black hover:bg-gray-200"
                }`}
            >
              {opt}
            </button>
          ))}
        </div>

        <button
          onClick={handleNext}
          className={`mt-6 w-full py-2 rounded-lg shadow-md hover:scale-105 transition transform duration-200 text-sm sm:text-base ${
            darkMode
              ? "bg-neutral-900 text-white"
              : "bg-white text-black border border-gray-400"
          }`}
        >
          {currentQ === quiz.questions.length - 1 ? "Finish" : "Next"}
        </button>
      </div>
    </div>
  );
}

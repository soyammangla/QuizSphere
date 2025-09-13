"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

interface Question {
  question: string;
  options: string[];
}

export default function CreateQuiz() {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [difficulty, setDifficulty] = useState("Easy");
  const [questions, setQuestions] = useState<Question[]>([
    { question: "", options: ["", "", "", ""] },
  ]);

  const addQuestion = () => {
    setQuestions([...questions, { question: "", options: ["", "", "", ""] }]);
  };

  const removeQuestion = (index: number) => {
    const updated = [...questions];
    updated.splice(index, 1);
    setQuestions(updated);
  };

  const handleQuestionChange = (
    qIndex: number,
    field: "question" | "options",
    optIndex?: number,
    value?: string
  ) => {
    const updated = [...questions];
    if (field === "question" && value) updated[qIndex].question = value;
    if (field === "options" && optIndex !== undefined && value)
      updated[qIndex].options[optIndex] = value;
    setQuestions(updated);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const stored = localStorage.getItem("quizzes");
    const quizzes = stored ? JSON.parse(stored) : [];
    const newQuiz = {
      id: quizzes.length + 1,
      title,
      description,
      category,
      difficulty,
      questions,
      created: new Date().toLocaleDateString(),
    };
    quizzes.push(newQuiz);
    localStorage.setItem("quizzes", JSON.stringify(quizzes));
    router.push("/quiz"); // back to dashboard
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto bg-white p-6 rounded-xl shadow-lg">
        <h1 className="text-3xl font-bold text-gray-800 mb-4 text-center">
          Create New Quiz
        </h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Quiz Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full border px-3 py-2 rounded-lg"
            required
          />
          <textarea
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full border px-3 py-2 rounded-lg"
            rows={2}
          />
          <input
            type="text"
            placeholder="Category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full border px-3 py-2 rounded-lg"
          />
          <select
            value={difficulty}
            onChange={(e) => setDifficulty(e.target.value)}
            className="w-full border px-3 py-2 rounded-lg"
          >
            <option>Easy</option>
            <option>Medium</option>
            <option>Hard</option>
          </select>

          <div>
            <div className="flex justify-between items-center mb-2">
              <h2 className="font-semibold text-gray-700">Questions</h2>
              <button
                type="button"
                onClick={addQuestion}
                className="bg-blue-500 hover:bg-blue-600 text-white py-1 px-3 rounded-lg"
              >
                Add Question
              </button>
            </div>
            {questions.map((q, idx) => (
              <div key={idx} className="border p-4 rounded-lg mb-4 bg-gray-50">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="font-medium">Question {idx + 1}</h3>
                  {questions.length > 1 && (
                    <button
                      type="button"
                      onClick={() => removeQuestion(idx)}
                      className="text-red-500 hover:underline"
                    >
                      Remove
                    </button>
                  )}
                </div>
                <input
                  type="text"
                  placeholder="Enter your question"
                  value={q.question}
                  onChange={(e) =>
                    handleQuestionChange(
                      idx,
                      "question",
                      undefined,
                      e.target.value
                    )
                  }
                  className="w-full border px-3 py-2 rounded-lg mb-2"
                  required
                />
                <div className="grid grid-cols-2 gap-2">
                  {q.options.map((opt, optIdx) => (
                    <input
                      key={optIdx}
                      type="text"
                      placeholder={`Option ${optIdx + 1}`}
                      value={opt}
                      onChange={(e) =>
                        handleQuestionChange(
                          idx,
                          "options",
                          optIdx,
                          e.target.value
                        )
                      }
                      className="w-full border px-3 py-2 rounded-lg"
                      required
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
          <Link href="/finalquiz">
            <button
              type="submit"
              className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full font-semibold transition transform duration-300"
            >
              Create Quiz
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
}

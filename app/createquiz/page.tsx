"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

interface Question {
  question: string;
  options: string[];
  correctOption: number; // 0,1,2,3
}

export default function CreateQuiz() {
  const router = useRouter();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [difficulty, setDifficulty] = useState("Easy");
  const [questions, setQuestions] = useState<Question[]>([
    { question: "", options: ["", "", "", ""], correctOption: 0 },
  ]);

  const addQuestion = () => {
    setQuestions([
      ...questions,
      { question: "", options: ["", "", "", ""], correctOption: 0 },
    ]);
  };

  const removeQuestion = (index: number) => {
    const updated = [...questions];
    updated.splice(index, 1);
    setQuestions(updated);
  };

  const handleQuestionChange = (
    qIndex: number,
    field: "question" | "options" | "correctOption",
    optIndex?: number,
    value?: string | number
  ) => {
    const updated = [...questions];
    if (field === "question" && typeof value === "string") {
      updated[qIndex].question = value;
    } else if (
      field === "options" &&
      typeof value === "string" &&
      optIndex !== undefined
    ) {
      updated[qIndex].options[optIndex] = value;
    } else if (field === "correctOption" && typeof value === "number") {
      updated[qIndex].correctOption = value;
    }
    setQuestions(updated);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newQuiz = {
      id: Date.now(),
      title,
      description,
      category,
      difficulty,
      questions,
      created: new Date().toLocaleDateString(),
    };
    localStorage.setItem("tempQuiz", JSON.stringify(newQuiz));
    alert("Quiz Created! Check console for data.");
    console.log("Created Quiz:", newQuiz);
    router.push("/finalquiz"); // ya dashboard ke liye redirect
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      {/* Centered form container */}
      <div className="bg-white w-full max-w-4xl mx-auto rounded-2xl shadow-xl p-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-4 text-center">
          Create New Quiz
        </h1>
        <p className="text-gray-500 mb-6 text-center">
          Add questions with multiple choice options
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Quiz Info */}
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Quiz Title
              </label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Enter quiz title"
                className="w-full border px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Category
              </label>
              <input
                type="text"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                placeholder="Enter quiz category"
                className="w-full border px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Description
            </label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Enter quiz description"
              className="w-full border px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              rows={3}
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Difficulty
            </label>
            <select
              value={difficulty}
              onChange={(e) => setDifficulty(e.target.value)}
              className="w-full border px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              <option>Easy</option>
              <option>Medium</option>
              <option>Hard</option>
            </select>
          </div>

          {/* Questions */}
          <div>
            <div className="flex justify-between items-center mb-3">
              <h2 className="text-xl font-semibold text-gray-800">Questions</h2>
              <button
                type="button"
                onClick={addQuestion}
                className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg shadow-md transition"
              >
                + Add Question
              </button>
            </div>

            {questions.map((q, idx) => (
              <div key={idx} className="border p-4 rounded-lg mb-4 bg-gray-50">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="font-medium text-gray-700">
                    Question {idx + 1}
                  </h3>
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

                {/* Question text */}
                <input
                  type="text"
                  value={q.question}
                  onChange={(e) =>
                    handleQuestionChange(
                      idx,
                      "question",
                      undefined,
                      e.target.value
                    )
                  }
                  placeholder="Enter your question"
                  className="w-full px-3 py-2 border rounded-lg mb-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  required
                />

                {/* Options + correct */}
                <div className="grid grid-cols-2 gap-3">
                  {q.options.map((opt, optIdx) => (
                    <div key={optIdx} className="flex items-center gap-2">
                      <input
                        type="text"
                        value={opt}
                        onChange={(e) =>
                          handleQuestionChange(
                            idx,
                            "options",
                            optIdx,
                            e.target.value
                          )
                        }
                        placeholder={`Option ${optIdx + 1}`}
                        className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                        required
                      />
                      <label className="text-sm text-gray-700 flex items-center">
                        <input
                          type="radio"
                          name={`correct-${idx}`}
                          checked={q.correctOption === optIdx}
                          onChange={() =>
                            handleQuestionChange(
                              idx,
                              "correctOption",
                              undefined,
                              optIdx
                            )
                          }
                          className="accent-green-500"
                        />{" "}
                        Correct
                      </label>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-full shadow-lg hover:scale-105 transition transform duration-300"
            >
              Create Quiz
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

interface Question {
  question: string;
  options: string[];
  correctOption: number;
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
    if (field === "question" && typeof value === "string")
      updated[qIndex].question = value;
    else if (
      field === "options" &&
      typeof value === "string" &&
      optIndex !== undefined
    )
      updated[qIndex].options[optIndex] = value;
    else if (field === "correctOption" && typeof value === "number")
      updated[qIndex].correctOption = value;
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
    router.push("/finalquiz");
  };

  return (
    <div className="min-h-screen p-4 sm:p-6 bg-white text-black dark:bg-black dark:text-white transition-colors">
      <div className="bg-gray-100 dark:bg-neutral-950 w-full max-w-5xl mx-auto rounded-2xl shadow-xl p-4 sm:p-8 transition-colors">
        <h1 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4 text-center">
          Create New Quiz
        </h1>
        <p className="mb-6 text-center text-sm sm:text-base">
          Add questions with multiple choice options
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Basic Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block font-medium mb-2 text-sm sm:text-base">
                Quiz Title
              </label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Enter quiz title"
                className="w-full px-3 py-2 rounded-lg bg-gray-200 dark:bg-neutral-700 text-black dark:text-white placeholder-black dark:placeholder-white focus:outline-none focus:ring-2 transition-colors"
                required
              />
            </div>

            <div>
              <label className="block font-medium mb-2 text-sm sm:text-base">
                Category
              </label>
              <input
                type="text"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                placeholder="Enter quiz category"
                className="w-full px-3 py-2 rounded-lg bg-gray-200 dark:bg-neutral-700 text-black dark:text-white placeholder-black dark:placeholder-white focus:outline-none focus:ring-2 transition-colors"
              />
            </div>
          </div>

          {/* Description */}
          <div>
            <label className="block font-medium mb-2 text-sm sm:text-base">
              Description
            </label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Enter quiz description"
              className="w-full px-3 py-2 rounded-lg bg-gray-200 dark:bg-neutral-700 text-black dark:text-white placeholder-black dark:placeholder-white focus:outline-none focus:ring-2 transition-colors"
              rows={3}
            />
          </div>

          {/* Difficulty */}
          <div>
            <label className="block font-medium mb-2 text-sm sm:text-base">
              Difficulty
            </label>
            <select
              value={difficulty}
              onChange={(e) => setDifficulty(e.target.value)}
              className="w-full px-3 py-2 rounded-lg bg-gray-200 dark:bg-neutral-700 text-black dark:text-white focus:outline-none focus:ring-2 transition-colors"
            >
              <option>Easy</option>
              <option>Medium</option>
              <option>Hard</option>
            </select>
          </div>

          {/* Questions */}
          <div>
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 mb-3">
              <h2 className="text-lg sm:text-xl font-semibold">Questions</h2>
              <button
                type="button"
                onClick={addQuestion}
                className="px-4 py-2 rounded-lg shadow-md bg-gray-200 dark:bg-neutral-700 text-black dark:text-white hover:bg-gray-300 dark:hover:bg-neutral-600 transition w-full sm:w-auto"
              >
                + Add Question
              </button>
            </div>

            {questions.map((q, idx) => (
              <div
                key={idx}
                className="bg-gray-200 dark:bg-neutral-900 border border-gray-400 dark:border-gray-700 p-4 rounded-lg mb-4 transition-colors"
              >
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 mb-2">
                  <h3 className="font-medium text-base sm:text-lg">
                    Question {idx + 1}
                  </h3>
                  {questions.length > 1 && (
                    <button
                      type="button"
                      onClick={() => removeQuestion(idx)}
                      className="text-red-500 hover:underline text-sm sm:text-base"
                    >
                      Remove
                    </button>
                  )}
                </div>

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
                  className="w-full px-3 py-2 border rounded-lg border-gray-400 dark:border-gray-600 bg-gray-200 dark:bg-neutral-700 text-black dark:text-white placeholder-black dark:placeholder-white focus:outline-none focus:ring-2 transition-colors mb-3"
                  required
                />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {q.options.map((opt, optIdx) => (
                    <div
                      key={optIdx}
                      className="flex flex-col sm:flex-row sm:items-center gap-2"
                    >
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
                        className="w-full px-3 py-2 border rounded-lg border-gray-400 dark:border-gray-600 bg-gray-200 dark:bg-neutral-700 text-black dark:text-white placeholder-black dark:placeholder-white focus:outline-none focus:ring-2 transition-colors"
                        required
                      />
                      <label className="text-sm flex items-center gap-1">
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
                          className="accent-black dark:accent-white"
                        />
                        Correct
                      </label>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Submit */}
          <div className="flex justify-center">
            <button
              type="submit"
              className="px-6 sm:px-8 py-3 rounded-full shadow-lg bg-gray-200 dark:bg-neutral-700 text-black dark:text-white hover:scale-105 transition transform duration-300 w-full sm:w-auto"
            >
              Create Quiz
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

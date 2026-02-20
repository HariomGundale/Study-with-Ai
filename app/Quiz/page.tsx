"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

type Question = {
  question: string;
  options: string[];
  answer: string;
};

export default function QuizPage() {
  const [standard, setStandard] = useState("");
  const [topic, setTopic] = useState("");
  const [difficulty, setDifficulty] = useState("medium");
  const [questions, setQuestions] = useState<Question[]>([]);
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState("");
  const [score, setScore] = useState(0);
  const [completed, setCompleted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [timeLeft, setTimeLeft] = useState(30);
  const [showAnswer, setShowAnswer] = useState(false);
  const [history, setHistory] = useState<any[]>([]);

  // ========================
  // SESSION STORAGE LOAD
  // ========================
  useEffect(() => {
    const saved = sessionStorage.getItem("quiz-history");
    if (saved) {
      setHistory(JSON.parse(saved));
    }
  }, []);

  useEffect(() => {
    sessionStorage.setItem("quiz-history", JSON.stringify(history));
  }, [history]);

  // ========================
  // PER QUESTION TIMER (30s)
  // ========================
  useEffect(() => {
    if (!questions.length || completed) return;

    if (timeLeft === 0) {
      handleNext();
      return;
    }

    const timer = setTimeout(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [timeLeft, questions, completed]);

  const generateQuiz = async () => {
    if (!topic || !standard) return;
    setLoading(true);

    try {
      const res = await fetch("/api/quiz-generator", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ topic, difficulty, standard }),
      });

      const data = await res.json();

      if (!res.ok || !Array.isArray(data.quiz)) {
        console.error(data);
        return;
      }

      setQuestions(data.quiz);
      setCurrent(0);
      setScore(0);
      setCompleted(false);
      setTimeLeft(30);
      setShowAnswer(false);
    } catch (err) {
      console.error(err);
    }

    setLoading(false);
  };

  const handleNext = () => {
    if (!questions[current]) return;

    const correctAnswer = questions[current].answer;
    const isCorrect = selected === correctAnswer;
    const newScore = isCorrect ? score + 1 : score;

    if (isCorrect) setScore(newScore);

    setShowAnswer(true);

    setTimeout(() => {
      setShowAnswer(false);
      setSelected("");
      setTimeLeft(30);

      if (current + 1 < questions.length) {
        setCurrent((prev) => prev + 1);
      } else {
        setCompleted(true);
        setHistory((prev) => [
          ...prev,
          {
            standard,
            topic,
            score: newScore,
            total: questions.length,
            date: new Date().toLocaleTimeString(),
          },
        ]);
      }
    }, 1500);
  };

  const progress =
    questions.length > 0
      ? ((current + 1) / questions.length) * 100
      : 0;

  const percentage =
    questions.length > 0
      ? Math.round((score / questions.length) * 100)
      : 0;

  return (
    <main className="min-h-screen bg-slate-950 text-white py-20 px-6">
      <div className="max-w-3xl mx-auto space-y-8">

        <h1 className="text-4xl font-bold text-blue-500 text-center">
            Quiz Generator
        </h1>

        {!questions.length && (
          <div className="bg-slate-900/60 p-8 rounded-2xl space-y-4">

            <input
              type="text"
              placeholder="Standard (e.g., 10th, 12th)"
              value={standard}
              onChange={(e) => setStandard(e.target.value)}
              className="w-full p-3 rounded-xl bg-slate-800 border border-slate-700"
            />

            <input
              type="text"
              placeholder="Enter Topic (e.g., Algebra, Physics)"
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
              className="w-full p-3 rounded-xl bg-slate-800 border border-slate-700"
            />

            <select
              value={difficulty}
              onChange={(e) => setDifficulty(e.target.value)}
              className="w-full p-3 rounded-xl bg-slate-800 border border-slate-700"
            >
              <option value="easy">Easy</option>
              <option value="medium">Medium</option>
              <option value="hard">Hard</option>
            </select>

            <button
              onClick={generateQuiz}
              className="w-full bg-blue-600 py-3 rounded-xl hover:bg-blue-700"
            >
              {loading ? "Generating..." : "Generate Quiz"}
            </button>
          </div>
        )}

        {questions.length > 0 && !completed && (
          <div className="bg-slate-900/60 p-8 rounded-2xl space-y-6">

            {/* Progress Bar */}
            <div className="w-full bg-slate-800 h-3 rounded-full">
              <motion.div
                className="bg-blue-500 h-3 rounded-full"
                animate={{ width: `${progress}%` }}
              />
            </div>

            {/* Timer */}
            <div className="text-right text-red-400 font-bold">
              ⏱ {timeLeft}s
            </div>

            <h2 className="text-xl">
              {questions[current].question}
            </h2>

            <div className="space-y-3">
              {questions[current].options.map((opt) => {
                const correct = questions[current].answer;

                return (
                  <button
                    key={opt}
                    disabled={showAnswer}
                    onClick={() => setSelected(opt)}
                    className={`w-full p-3 rounded-xl border transition ${
                      showAnswer
                        ? opt === correct
                          ? "bg-green-600 border-green-600"
                          : opt === selected
                          ? "bg-red-600 border-red-600"
                          : "bg-slate-800 border-slate-700"
                        : selected === opt
                        ? "bg-blue-600 border-blue-600"
                        : "bg-slate-800 border-slate-700"
                    }`}
                  >
                    {opt}
                  </button>
                );
              })}
            </div>

            {!showAnswer && (
              <button
                disabled={!selected}
                onClick={handleNext}
                className="w-full bg-blue-600 py-3 rounded-xl"
              >
                Submit
              </button>
            )}

          </div>
        )}

        {completed && (
          <div className="bg-slate-900/60 p-8 rounded-2xl text-center space-y-4">
            <h2 className="text-2xl text-blue-400">
              Quiz Completed 🎉
            </h2>
            <p>
              Score: {score} / {questions.length}
            </p>
            <p>Percentage: {percentage}%</p>

            <button
              onClick={() => {
                setQuestions([]);
                setCompleted(false);
              }}
              className="bg-blue-600 px-6 py-2 rounded-xl"
            >
              New Quiz
            </button>
          </div>
        )}

        {/* SESSION HISTORY */}
        {history.length > 0 && (
          <div className="bg-slate-900/60 p-6 rounded-2xl">
            <h3 className="text-lg text-blue-400 mb-3">
              Session History
            </h3>
            {history.map((item, i) => (
              <p key={i} className="text-slate-400">
                {item.standard} - {item.topic} → {item.score}/{item.total}
              </p>
            ))}
          </div>
        )}

      </div>
    </main>
  );
}
"use client";

import { useState } from "react";

export default function QuizPage() {

  const [notes, setNotes] = useState("");
  const [quiz, setQuiz] = useState("");

  const generateQuiz = async () => {
    const res = await fetch("/api/quiz", {
      method: "POST",
      body: JSON.stringify({ text: notes })
    });

    const data = await res.json();
    setQuiz(data.result);
  };

  return (
    <main className="min-h-screen bg-slate-100 py-10">

      <div className="max-w-6xl mx-auto px-6">

        <h1 className="text-3xl font-bold mb-8 text-slate-800">
          AI Quiz Generator
        </h1>

        <div className="grid md:grid-cols-2 gap-8">

          {/* INPUT */}
          <div className="bg-white p-6 rounded-2xl shadow">
            <textarea
              className="w-full h-64 border rounded-xl p-4"
              placeholder="Paste study notes to generate quiz..."
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
            />

            <button
              onClick={generateQuiz}
              className="mt-4 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold w-full"
            >
              Generate Quiz
            </button>
          </div>

          {/* OUTPUT */}
          <div className="bg-white p-6 rounded-2xl shadow">
            <h3 className="font-semibold text-lg mb-4 text-indigo-600">
              Quiz Questions
            </h3>

            <p className="text-slate-700 leading-relaxed whitespace-pre-wrap">
              {quiz || "Your quiz will appear here..."}
            </p>
          </div>

        </div>

      </div>

    </main>
  );
}

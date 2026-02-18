"use client";

import { useState } from "react";

export default function Dashboard() {

  const [notes, setNotes] = useState("");
  const [summary, setSummary] = useState("");
  const [quiz, setQuiz] = useState("");

  return (
    <main className="min-h-screen bg-slate-100 py-10">

      <div className="container-app p-7">

        {/* Header */}
        <h1 className="text-3xl font-bold mb-8 text-slate-800">
          AI Study Dashboard
        </h1>

        {/* GRID */}
        <div className="grid lg:grid-cols-2 gap-8">

          {/* INPUT PANEL */}
          <div className="bg-white rounded-2xl shadow-md p-6 border">

            <h2 className="font-semibold text-black text-lg mb-3">
              Your Study Notes
            </h2>

            <textarea
              className="w-full h-64 border rounded-xl p-4 text-black focus:ring-2 focus:ring-blue-500 outline-none transition"
              placeholder="Paste your study notes..."
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
            />

            <div className="flex gap-4 mt-5">
              <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-semibold shadow">
                Summarize
              </button>

              <button className="flex-1 border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white py-3 rounded-xl font-semibold transition">
                Generate Quiz
              </button>
            </div>
          </div>

          {/* OUTPUT PANEL */}
          <div className="space-y-6">

            <div className="bg-white rounded-2xl shadow-md p-6 border">
              <h3 className="font-semibold text-lg mb-2 text-blue-600">
                Summary
              </h3>
              <p className="text-slate-700 leading-relaxed">
                {summary || "Your summary will appear here..."}
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-md p-6 border">
              <h3 className="font-semibold text-lg mb-2 text-indigo-600">
                Quiz
              </h3>
              <p className="text-slate-700 leading-relaxed">
                {quiz || "Quiz questions will appear here..."}
              </p>
            </div>

          </div>

        </div>

      </div>

    </main>
  );
}

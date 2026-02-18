"use client";

import { useState } from "react";

export default function Dashboard() {
  const [text, setText] = useState("");
  const [difficulty, setDifficulty] = useState("medium");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<any>(null);

  const handleSummarize = async () => {
    if (!text) return alert("Please enter notes");

    setLoading(true);
    setResult(null);

    try {
      const res = await fetch("/api/summarize", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ text, difficulty }),
      });

      const data = await res.json();
      setResult(data);
    } catch (error) {
      console.error(error);
      alert("Something went wrong");
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-slate-50 py-10 px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">AI Note Summarizer</h1>

        <textarea
          className="w-full border rounded-lg p-4 mb-4"
          rows={6}
          placeholder="Paste your study notes..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />

        <div className="flex gap-4 mb-4">
          <select
            className="border rounded-lg px-4 py-2"
            value={difficulty}
            onChange={(e) => setDifficulty(e.target.value)}
          >
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
          </select>

          <button
            onClick={handleSummarize}
            className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition"
          >
            {loading ? "Generating..." : "Summarize"}
          </button>

          <button
            onClick={handleSummarize}
            className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition"
          >
            {loading ? "Generating..." : "Key Points"}
          </button>

          <button
            onClick={handleSummarize}
            className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition"
          >
            {loading ? "Generating..." : "Simplify"}
          </button>
        </div>

        {result && (
          <div className="bg-white p-6 rounded-xl shadow-md mt-6">
            <h2 className="text-xl font-semibold mb-2">Summary</h2>
            <p className="text-slate-700">{result.summary}</p>
          </div>
        )}
      </div>
    </div>
  );
}

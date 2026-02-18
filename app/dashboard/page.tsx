"use client";

import { useState } from "react";

export default function Dashboard() {
  const [text, setText] = useState("");
  const [difficulty, setDifficulty] = useState("medium");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);
  const [resultType, setResultType] = useState("");

  const handleAction = async (type: string) => {
    if (!text) {
      alert("Please enter study notes");
      return;
    }

    setLoading(true);
    setResult("");
    setResultType(type); // 👈 store which button was clicked

    try {
      const res = await fetch("/api/summarize", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          text,
          difficulty,
          type,
        }),
      });

      const data = await res.json();
      setResult(data.result);
    } catch (error) {
      console.error(error);
      alert("Something went wrong.");
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-slate-50 py-10 px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">AI Note Summarizer</h1>

        <textarea
          className="w-full border rounded-xl p-4 mb-6"
          rows={8}
          placeholder="Paste your study notes..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />

        <div className="flex gap-4 mb-6 flex-wrap">
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
            onClick={() => handleAction("summary")}
            className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition"
          >
            Summarize
          </button>

          <button
            onClick={() => handleAction("keypoints")}
            className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition"
          >
            Key Points
          </button>

          <button
            onClick={() => handleAction("simplify")}
            className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition"
          >
            Simplify
          </button>
        </div>

        {loading && <p className="text-gray-600">Generating response...</p>}

        {result && (
          <div className="bg-white p-6 rounded-xl shadow-md mt-6">
            <h2 className="text-xl font-semibold mb-4 capitalize">
              {resultType === "summary" && "Summary"}
              {resultType === "keypoints" && "Key Points"}
              {resultType === "simplify" && "Simplified Version"}
            </h2>

            <p className="whitespace-pre-line text-slate-700">{result}</p>
          </div>
        )}
      </div>
    </div>
  );
}

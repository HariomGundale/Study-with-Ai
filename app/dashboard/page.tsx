"use client";

import { useState } from "react";
import { motion } from "framer-motion";

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
    setResultType(type);

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
    <div className="min-h-screen bg-slate-950 py-16 px-6 text-white">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto"
      >
        <h1 className="text-4xl font-bold mb-8 text-center">
          AI Note Summarizer
        </h1>

        {/* Textarea */}
        <textarea
          className="w-full bg-slate-900 border border-slate-700 rounded-2xl p-5 mb-6 focus:outline-none focus:ring-2 focus:ring-blue-600 text-slate-200 placeholder-slate-500 transition"
          rows={8}
          placeholder="Paste your study notes..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />

        {/* Controls */}
        <div className="flex gap-4 mb-8 flex-wrap justify-center">
          <select
            className="bg-slate-900 border border-slate-700 rounded-xl px-4 py-2 text-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-600"
            value={difficulty}
            onChange={(e) => setDifficulty(e.target.value)}
          >
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
          </select>

          {["summary", "keypoints", "simplify"].map((type) => (
            <button
              key={type}
              onClick={() => handleAction(type)}
              className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-xl font-medium transition-all duration-300 hover:scale-105 hover:shadow-blue-500/30 shadow-md"
            >
              {type === "summary" && "Summarize"}
              {type === "keypoints" && "Key Points"}
              {type === "simplify" && "Simplify"}
            </button>
          ))}
        </div>

        {/* Loading */}
        {loading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center text-blue-400"
          >
            Generating AI response...
          </motion.div>
        )}

        {/* Result */}
        {result && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-slate-900/60 backdrop-blur-md border border-slate-700 p-6 rounded-2xl shadow-lg mt-8"
          >
            <h2 className="text-xl font-semibold mb-4 text-blue-400 capitalize">
              {resultType === "summary" && "Summary"}
              {resultType === "keypoints" && "Key Points"}
              {resultType === "simplify" && "Simplified Version"}
            </h2>

            <p className="whitespace-pre-line text-slate-300 leading-relaxed">
              {result}
            </p>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
}
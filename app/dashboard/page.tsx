"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { jsPDF } from "jspdf";

export default function Dashboard() {
  const [text, setText] = useState("");
  const [difficulty, setDifficulty] = useState("medium");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);
  const [resultType, setResultType] = useState("");
  const [topic, setTopic] = useState("");

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



const exportToPDF = () => {
  if (!result) return;

  const doc = new jsPDF();

  const pageWidth = doc.internal.pageSize.getWidth();

  // Header Title
  doc.setFont("Times New Roman", "bold");
  doc.setFontSize(18);
  doc.text("StudyWith AI", pageWidth / 2, 20, { align: "center" });

  // Subtitle
  doc.setFontSize(12);
  doc.setFont("Times New Roman", "normal");
  doc.text(
    `Generated ${resultType.toUpperCase()} Document`,
    pageWidth / 2,
    28,
    { align: "center" }
  );

  // Divider Line
  doc.line(20, 32, pageWidth - 20, 32);

  // Main Content
  doc.setFontSize(12);
  const lines = doc.splitTextToSize(result, 170);
  doc.text(lines, 20, 75);

  // Save
  doc.save(`StudyWithAI-${topic || "Output"}-${resultType}.pdf`);
};

  return (
    <div className="min-h-screen bg-slate-950 py-16 px-6 text-white">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto"
      >
        <h1 className="text-4xl font-bold mb-10 text-center">
          Notes Summarizer
        </h1>

        {/* ✨ HALF-SIDE GLOW TEXTAREA */}
        <div className="relative w-full mb-10">
          {/* full glow */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute left-0 top-0 bottom-0 w-full rounded-3xl">
              {/* Neon border layer */}
              <div
                className="absolute inset-0 rounded-3xl 
                      bg-gradient-to-b from-blue-400 via-indigo-500 to-blue-600 
                      opacity-90 blur-md"
              ></div>

              {/* Mask to keep glow only at boundary */}
              <div className="absolute inset-[2px] rounded-3xl bg-[#0b0f1a]"></div>
            </div>
          </div>

          {/* Main box */}
          <div className="relative bg-slate-900/70 backdrop-blur-xl rounded-3xl border border-slate-700 p-6 shadow-lg">
            <textarea
              rows={8}
              placeholder="Paste your study notes..."
              value={text}
              onChange={(e) => setText(e.target.value)}
              className="w-full bg-transparent outline-none text-slate-200 placeholder-slate-500 resize-none"
            />
          </div>
        </div>

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

        {/* ✨ HALF-SIDE GLOW RESULT CARD */}
        {result && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
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

            <button
              onClick={exportToPDF}
              className="mt-6 bg-green-600 hover:bg-green-700 px-6 py-2 rounded-xl transition-all duration-300 hover:scale-105"
            >
              Export as PDF
            </button>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
}

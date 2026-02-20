"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <main className="min-h-screen bg-slate-950 py-20 px-6 text-white">

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-5xl mx-auto"
      >

        <h1 className="text-4xl md:text-5xl font-bold text-blue-500 mb-8 text-center">
          About Study With AI
        </h1>

        <div className="bg-slate-900/60 backdrop-blur-md border border-slate-800 rounded-2xl p-8 shadow-lg">

          <p className="text-lg text-slate-300 leading-relaxed mb-6">
            StudyWith AI is an intelligent learning platform designed to simplify
            complex study material using artificial intelligence.
            It transforms lengthy notes into concise summaries, extracts key concepts,
            and generates quizzes to help students learn faster and smarter.
          </p>

          <p className="text-lg text-slate-300 leading-relaxed mb-6">
            Built with modern AI technologies and a clean, user-friendly interface,
            the platform enhances productivity and improves knowledge retention.
          </p>

          <div className="border-t border-slate-800 pt-6 mt-6">
            <h2 className="text-xl font-semibold text-blue-400 mb-3">
              🌍 SDG-4: Quality Education
            </h2>
            <p className="text-slate-400 leading-relaxed">
              StudyWith AI aligns with the United Nations Sustainable Development Goal 4
              by promoting inclusive and accessible quality education.
              By leveraging AI-powered tools, we aim to make learning more efficient,
              personalized, and available to students everywhere.
            </p>
          </div>

        </div>

      </motion.div>
    </main>
  );
}
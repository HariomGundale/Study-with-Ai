"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <main className="min-h-screen bg-slate-950 py-14 sm:py-20 px-4 sm:px-6 text-white">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl lg:max-w-5xl mx-auto"
      >
        {/* Heading */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-blue-500 mb-6 sm:mb-8 text-center">
          About Study With AI
        </h1>

        {/* Content Card */}
        <div className="bg-slate-900/60 backdrop-blur-md border border-blue-500 rounded-2xl p-5 sm:p-8 shadow-lg space-y-6">

          <p className="text-sm sm:text-base md:text-lg text-slate-300 leading-relaxed">
            StudyWith AI is an intelligent learning platform designed to simplify
            complex study material using artificial intelligence.
            It transforms lengthy notes into concise summaries, extracts key concepts,
            and generates quizzes to help students learn faster and smarter.
          </p>

          <p className="text-sm sm:text-base md:text-lg text-slate-300 leading-relaxed">
            Built with modern AI technologies and a clean, user-friendly interface,
            the platform enhances productivity and improves knowledge retention.
          </p>

          {/* SDG Section */}
          <div className="border-t border-slate-800 pt-6">
            <h2 className="text-lg sm:text-xl font-semibold text-blue-400 mb-3">
              🌍 SDG-4: Quality Education
            </h2>

            <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
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
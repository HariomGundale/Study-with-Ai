"use client";

import { motion } from "framer-motion";
import { Brain, FileText, Sparkles } from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "AI Smart Summarization",
    description:
      "Instantly convert long notes into concise summaries, key points, or simplified explanations using Gemini AI.",
  },
  {
    icon: FileText,
    title: "Dynamic Quiz Generation",
    description:
      "Generate intelligent quizzes from any topic to test understanding and improve retention.",
  },
  {
    icon: Sparkles,
    title: "Personalized Learning",
    description:
      "Adaptive content helps students learn faster and smarter aligned with SDG-4 Quality Education.",
  },
];

export default function FeatureSection() {
  return (
    <section className="relative py-16 sm:py-20 px-4 sm:px-6 bg-gradient-to-b from-transparent to-slate-900">
      
      {/* Heading */}
      <div className="max-w-6xl mx-auto text-center mb-12 sm:mb-16">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white leading-snug">
          Transforming Education with AI
        </h2>

        <p className="text-slate-400 mt-4 max-w-xl sm:max-w-2xl mx-auto text-sm sm:text-base px-2 sm:px-0">
          StudyWith AI empowers students with intelligent tools that simplify
          learning and promote accessible, quality education.
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">

        {features.map((feature, index) => {
          const Icon = feature.icon;

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-slate-800/40 backdrop-blur-lg border border-slate-700 p-6 sm:p-8 rounded-2xl hover:border-blue-500 transition-all duration-300"
            >
              <div className="flex justify-center">
                <Icon className="text-blue-500 w-8 h-8 sm:w-10 sm:h-10 mb-4" />
              </div>

              <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 text-center">
                {feature.title}
              </h3>

              <p className="text-slate-400 text-sm sm:text-base text-center leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          );
        })}

      </div>
    </section>
  );
}
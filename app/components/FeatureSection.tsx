"use client"

import { motion } from "framer-motion"
import { Brain, FileText, Sparkles } from "lucide-react"

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
]

export default function FeatureSection() {
  return (
    <section className="relative py-20 px-6 bg-gradient-to-b from-transparent to-slate-900">
      <div className="max-w-6xl mx-auto text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-white">
          Transforming Education with AI
        </h2>
        <p className="text-slate-400 mt-4 max-w-2xl mx-auto">
          StudyWith AI empowers students with intelligent tools that simplify
          learning and promote accessible, quality education.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {features.map((feature, index) => {
          const Icon = feature.icon
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-slate-800/40 backdrop-blur-lg border border-slate-700 p-8 rounded-2xl hover:border-blue-500 transition-all duration-300"
            >
              <Icon className="text-blue-500 w-10 h-10 mb-4 mx-auto" />
              <h3 className="text-xl font-semibold text-white mb-3">
                {feature.title}
              </h3>
              <p className="text-slate-400 text-sm">
                {feature.description}
              </p>
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}
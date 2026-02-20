"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Github, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="mt-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white border-t border-slate-800">

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-4 gap-12"
      >

        {/* BRAND */}
        <div>
          <h2 className="text-2xl font-bold text-blue-500 mb-4">
            StudyWith AI
          </h2>
          <p className="text-slate-400 text-sm leading-relaxed">
            Smart learning powered by artificial intelligence.
            Transforming notes into clear summaries, key concepts,
            and interactive quizzes for deeper understanding.
          </p>

          <p className="text-blue-400 text-xs mt-4">
            Supporting SDG-4: Quality Education 🌍
          </p>
        </div>

        {/* NAVIGATION */}
        <div>
          <h3 className="font-semibold mb-4 text-lg text-white">
            Navigation
          </h3>
          <div className="flex flex-col gap-3 text-slate-400 text-sm">
            <Link href="/dashboard" className="hover:text-blue-400 transition">
              Dashboard
            </Link>
            <Link href="/Quiz" className="hover:text-blue-400 transition">
              Quiz Generator
            </Link>
            <Link href="/About" className="hover:text-blue-400 transition">
              About
            </Link>
            <Link href="/Contact" className="hover:text-blue-400 transition">
              Contact
            </Link>
          </div>
        </div>

        {/* FEATURES */}
        <div>
          <h3 className="font-semibold mb-4 text-lg text-white">
            Features
          </h3>
          <ul className="text-slate-400 space-y-3 text-sm">
            <li className="hover:text-blue-400 transition">
              AI Summarization
            </li>
            <li className="hover:text-blue-400 transition">
              Quiz Generation
            </li>
            <li className="hover:text-blue-400 transition">
              Key Concept Extraction
            </li>
            <li className="hover:text-blue-400 transition">
              Smart Study Assistant
            </li>
          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <h3 className="font-semibold mb-4 text-lg text-white">
            Contact
          </h3>

          <div className="flex items-center gap-2 text-slate-400 text-sm mb-3">
            <MapPin size={16} className="text-blue-500" />
            Pune, India
          </div>

          <div className="text-slate-400 text-sm space-y-2 mb-6">
            <p>sumitkotalwar1@email.com</p>
            <p>hariomgundale21@gmail.com</p>
            <p>varadgundale2006@gmail.com</p>
          </div>

          {/* SOCIAL */}
          <div className="flex gap-4">

            <a
              href="https://github.com/HariomGundale/Study-with-Ai"
              className="bg-slate-800 p-3 rounded-xl hover:bg-blue-600 transition-all duration-300 hover:scale-105"
            >
              <Github size={18} />
            </a>

            <a
              href="#"
              className="bg-slate-800 p-3 rounded-xl hover:bg-blue-600 transition-all duration-300 hover:scale-105"
            >
              <Mail size={18} />
            </a>

          </div>
        </div>

      </motion.div>

      {/* Bottom Strip */}
      <div className="border-t border-slate-800 text-center py-6 text-sm text-slate-500">
        © 2026 StudyWith AI. Built for smarter learning.
      </div>

    </footer>
  );
}
"use client";

import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

type StatProps = {
  value: number;
  label: string;
};

function AnimatedCounter({ value, label }: StatProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const duration = 1500;
    const increment = value / (duration / 16);

    const counter = setInterval(() => {
      start += increment;
      if (start >= value) {
        setCount(value);
        clearInterval(counter);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(counter);
  }, [isInView, value]);

  return (
    <div ref={ref} className="text-center py-4">
      <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-500">
        {count}+
      </h3>
      <p className="text-slate-400 mt-2 text-xs sm:text-sm md:text-base">
        {label}
      </p>
    </div>
  );
}

export default function StatsSection() {
  return (
    <section className="bg-gradient-to-b from-transparent to-slate-900 py-16 sm:py-20 px-4 sm:px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto"
      >
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 md:gap-10 text-center">

          <AnimatedCounter
            value={1200}
            label="Notes Summarized"
          />

          <AnimatedCounter
            value={350}
            label="AI Quizzes Generated"
          />

          <AnimatedCounter
            value={95}
            label="Faster Learning (%)"
          />

          <AnimatedCounter
            value={100}
            label="CBSE Aligned Topics"
          />

        </div>
      </motion.div>
    </section>
  );
}
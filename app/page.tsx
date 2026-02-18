import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center">
      <div className="text-center max-w-2xl px-6">
        <h1 className="text-5xl font-bold text-slate-900 mb-6">
          Study Smarter with AI
        </h1>

        <p className="text-lg text-slate-600 mb-8">
          Transform your notes into summaries, quizzes and key concepts instantly.
          Learn faster. Understand better.
        </p>

        <Link
          href="/dashboard"
          className="bg-indigo-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-indigo-700 transition"
        >
          Start Learning 🚀
        </Link>
      </div>
    </div>
  );
}

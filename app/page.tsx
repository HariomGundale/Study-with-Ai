import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 flex items-center justify-center">

      <div className="container-app text-center">

        <h1 className="text-5xl md:text-6xl font-bold text-blue-600 mb-6">
          StudyWith AI
        </h1>

        <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto mb-10 leading-relaxed">
          Transform your notes into summaries, quizzes and key concepts instantly using AI.
          Study smarter, not harder.
        </p>

        <Link
          href="/dashboard"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 rounded-xl text-lg font-semibold shadow-lg hover:shadow-xl transition-all"
        >
          Start Learning
        </Link>

      </div>
    </main>
  );
}

import Link from "next/link";

export default function Home() {
  return (
    <div className="relative min-h-screen flex items-center justify-center">

      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/bg.jpeg')" }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative z-10 text-center max-w-2xl px-6">

        <h1 className="text-5xl font-bold text-white mb-6">
          Study Smarter with AI
        </h1>

        <p className="text-lg text-gray-200 mb-8">
          Transform your notes into summaries, quizzes and key concepts instantly.
          Learn faster. Understand better.
        </p>

        <Link
          href="/dashboard"
          className="bg-[#7895CB] hover:bg-[#5f7eb8] text-white px-8 py-4 rounded-xl font-semibold shadow-lg transition"
        >
          Start Learning 🚀
        </Link>

      </div>
    </div>
  );
}

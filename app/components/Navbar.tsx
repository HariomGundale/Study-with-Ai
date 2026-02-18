import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-indigo-600">
          StudyWith AI
        </Link>

        <div className="flex gap-6 text-slate-700 font-medium">
          <Link href="/dashboard" className="hover:text-indigo-600 transition">
            Dashboard
          </Link>
          <Link href="/history" className="hover:text-indigo-600 transition">
            History
          </Link>
          <Link href="/login" className="hover:text-indigo-600 transition">
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
}

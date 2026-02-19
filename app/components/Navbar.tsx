import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <header className="bg-slate-900/90 backdrop-blur-md border-b border-slate-700">

      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        <Link href="/" className="flex items-center gap-3">

          <Image
            src="/logo.png"   // change to logo.png if png
            alt="StudyWith AI Logo"
            width={50}
            height={50}
            className="rounded-full object-cover"
          />

          <span className="text-xl font-bold text-white">
            StudyWith AI
          </span>

        </Link>

        {/* Navigation */}
        <nav className="flex gap-6 text-slate-300 font-medium">
          <Link href="/dashboard" className="hover:text-white transition">
            Dashboard
          </Link>
          <Link href="/Quiz" className="hover:text-white transition">
            Quiz
          </Link>
          <Link href="/About" className="hover:text-white transition">
            About
          </Link>
          <Link href="/Contact" className="hover:text-white transition">
            Contact
          </Link>
        </nav>

      </div>

    </header>
  );
}

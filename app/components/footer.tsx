import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">

      {/* MAIN FOOTER */}
      <div className="max-w-7xl mx-auto px-6 py-14 grid md:grid-cols-4 gap-10">

        {/* BRAND */}
        <div>
          <h2 className="text-2xl font-bold text-blue-400 mb-3">
            StudyWith AI
          </h2>
          <p className="text-slate-400 text-sm leading-relaxed">
            Smart learning powered by artificial intelligence.
            Enhancing learning by transforming notes into clear summaries, key concepts,
            and interactive quizzes for deeper understanding
            
          </p>
        </div>

        {/* NAVIGATION */}
        <div>
          <h3 className="font-semibold mb-4 text-lg">Navigation</h3>
          <div className="flex flex-col gap-2 text-slate-400">
            <Link href="/dashboard" className="hover:text-white transition">
              Dashboard
            </Link>
            <Link href="/Quiz" className="hover:text-white transition">
              Quiz Generator
            </Link>
            <Link href="/About" className="hover:text-white transition">
              About
            </Link>
            <Link href="/Contact" className="hover:text-white transition">
              Contact
            </Link>
          </div>
        </div>

        {/* FEATURES */}
        <div>
          <h3 className="font-semibold mb-4 text-lg">Features</h3>
          <ul className="text-slate-400 space-y-2 text-sm">
            <li className="hover:text-white transition">AI Summarization</li>
            <li className="hover:text-white transition">Quiz Generation</li>
            <li className="hover:text-white transition">Key Concept Extraction</li>
            <li className="hover:text-white transition">Smart Study Assistant</li>
          </ul>
        </div>

        {/* CONTACT + SOCIAL */}
        <div>
          <h3 className="font-semibold mb-4 text-lg">Contact</h3>

          <p className="text-slate-400 text-sm mb-2">
            Pune, India
          </p>

          <p className="text-slate-400 text-sm mb-4">
            sumitkotalwar1@email.com
            hariomgundale21@gmail.com
            varadgundale2006@gmail.com
          </p>

          {/* SOCIAL LINKS */}
          <div className="flex gap-4">

            <a
              href="#"
              className="bg-slate-700 p-2 rounded-lg hover:bg-blue-600 transition"
            >
              GitHub
            </a>

            {/* <a
              href="#"
              className="bg-slate-700 p-2 rounded-lg hover:bg-blue-600 transition"
            >
              LinkedIn
            </a> */}

            <a
              href="#"
              className="bg-slate-700 p-2 rounded-lg hover:bg-blue-600 transition"
            >
              Mail
            </a>

          </div>
        </div>

      </div>

      {/* BOTTOM STRIP */}
      <div className="border-t border-slate-700 text-center py-5 text-sm text-slate-400">
        © 2026 StudyWith AI. Built for smarter learning.
      </div>

    </footer>
  );
}

import Link from "next/link";

export default function Navbar() {
  return (
    <div className="bg-white border-b shadow-sm">
      <div className="container-app flex justify-between items-center py-4">

        <Link href="/" className="text-xl font-bold text-blue-600 px-10">
          StudyWith AI
        </Link>

        <div className="flex gap-6 text-slate-600 font-medium px-10">
          <Link href="/dashboard">Dashboard</Link>
          <Link href="/history">History</Link>
          <Link href="/login">Login</Link>
        </div>

      </div>
    </div>
  );
}

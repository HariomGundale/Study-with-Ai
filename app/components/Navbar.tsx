"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const navLinks = [
    { name: "Dashboard", href: "/dashboard" },
    { name: "Quiz", href: "/Quiz" },
    { name: "About", href: "/About" },
    { name: "Contact", href: "/Contact" },
  ];

  return (
    <motion.header
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 w-full z-50 bg-slate-950/80 backdrop-blur-xl border-b border-slate-800"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">

          <Image
            src="/logo.png"
            alt="StudyWith AI Logo"
            width={45}
            height={45}
            className="rounded-full object-cover transition-transform duration-300 group-hover:scale-105"
          />

          <span className="text-xl font-bold text-white group-hover:text-blue-400 transition">
            StudyWith AI
          </span>
        </Link>

        {/* Navigation */}
        <nav className="flex gap-8 text-slate-300 font-medium">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`relative transition hover:text-blue-400 ${
                pathname === link.href ? "text-blue-400" : ""
              }`}
            >
              {link.name}

              {/* Animated underline */}
              <span
                className={`absolute left-0 -bottom-1 h-[2px] bg-blue-400 transition-all duration-300 ${
                  pathname === link.href
                    ? "w-full"
                    : "w-0 group-hover:w-full"
                }`}
              />
            </Link>
          ))}
        </nav>

      </div>
    </motion.header>
  );
}
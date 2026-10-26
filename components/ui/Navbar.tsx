"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 border-b-2 border-[#172033]/10 bg-[#fff8f0]/88 backdrop-blur-xl">
      <div className="max-w-6xl mx-auto px-4 py-3.5">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="relative w-10 h-10 bg-[#ffd166] rounded-[14px] border-2 border-[#172033] flex items-center justify-center shadow-[3px_3px_0_#172033] group-hover:rotate-12 group-hover:scale-105 transition-transform">
              <span className="text-xl font-black">T</span>
            </div>
            <span className="text-xl font-black hidden sm:block tracking-[-0.05em]">
              TEMAN<span className="text-[#ff7a59]">.</span>MAIN
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6">
            <Link
              href="/"
              className="rounded-full px-3 py-2 font-bold text-[#172033]/70 hover:bg-[#5dd9d0]/25 hover:text-[#172033] transition-colors"
            >
              Home
            </Link>
            <Link
              href="/tentang"
              className="rounded-full px-3 py-2 font-bold text-[#172033]/70 hover:bg-[#9b8cff]/20 hover:text-[#172033] transition-colors"
            >
              Tentang
            </Link>
            <Link
              href="/#games"
              className="px-6 py-2 bg-[#ff7a59] text-white rounded-full font-bold border-2 border-[#172033] shadow-[3px_3px_0_#172033] hover:translate-y-[-2px] hover:shadow-[5px_5px_0_#172033] active:translate-y-0 active:shadow-none transition-all"
            >
              Main Yuk!
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-xl border-2 border-transparent hover:border-[#172033] hover:bg-[#ffd166]/40 transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden overflow-hidden"
            >
              <div className="mt-3 space-y-2 border-t border-[#172033]/10 py-4">
                <Link
                  href="/"
                  onClick={() => setIsOpen(false)}
                  className="block rounded-xl px-4 py-3 font-bold text-[#172033]/75 hover:bg-[#5dd9d0]/25 transition-colors"
                >
                  Home
                </Link>
                <Link
                  href="/tentang"
                  onClick={() => setIsOpen(false)}
                  className="block rounded-xl px-4 py-3 font-bold text-[#172033]/75 hover:bg-[#9b8cff]/20 transition-colors"
                >
                  Tentang
                </Link>
                <Link
                  href="/#games"
                  onClick={() => setIsOpen(false)}
                  className="block rounded-xl border-2 border-[#172033] bg-[#ff7a59] px-4 py-3 text-center font-bold text-white shadow-[3px_3px_0_#172033] active:translate-y-0.5 active:shadow-none transition-all"
                >
                  Main Yuk!
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}

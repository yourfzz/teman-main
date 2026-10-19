"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, Home } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white border-b-2 border-black">
      <div className="max-w-6xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 bg-[#c1ff72] rounded-full border-2 border-black flex items-center justify-center group-hover:rotate-12 transition-transform">
              <span className="text-xl font-black">T</span>
            </div>
            <span className="text-xl font-black hidden sm:block">
              TEMAN MAIN
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6">
            <Link
              href="/"
              className="font-medium hover:text-[#8ebe4f] transition-colors"
            >
              Home
            </Link>
            <Link
              href="/tentang"
              className="font-medium hover:text-[#8ebe4f] transition-colors"
            >
              Tentang
            </Link>
            <Link
              href="/#games"
              className="px-6 py-2 bg-[#c1ff72] rounded-full font-bold border-2 border-black hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all"
            >
              Main Yuk!
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 hover:bg-black/5 rounded-lg transition-colors"
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
              <div className="py-4 space-y-3">
                <Link
                  href="/"
                  onClick={() => setIsOpen(false)}
                  className="block px-4 py-2 hover:bg-[#c1ff72]/20 rounded-lg font-medium transition-colors"
                >
                  Home
                </Link>
                <Link
                  href="/tentang"
                  onClick={() => setIsOpen(false)}
                  className="block px-4 py-2 hover:bg-[#c1ff72]/20 rounded-lg font-medium transition-colors"
                >
                  Tentang
                </Link>
                <Link
                  href="/#games"
                  onClick={() => setIsOpen(false)}
                  className="block px-4 py-2 bg-[#c1ff72] rounded-lg font-bold border-2 border-black text-center"
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

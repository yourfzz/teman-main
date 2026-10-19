"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Footer() {
  const [currentYear, setCurrentYear] = useState(2026);

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="mt-16 border-t-2 border-black/10 bg-white">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-[#c1ff72] rounded-full border-2 border-black flex items-center justify-center">
                <span className="text-xl font-black">T</span>
              </div>
              <span className="text-xl font-black">TEMAN MAIN</span>
            </div>
            <p className="text-sm text-black/70 leading-relaxed">
              Bikin nongkrong lebih seru, satu permainan dalam sekali klik.
              Nggak perlu download, nggak perlu login, langsung gas aja.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-bold mb-4">Permainan</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="/main/pertanyaan"
                  className="text-black/70 hover:text-[#c1ff72] transition-colors"
                >
                  Pertanyaan Random
                </a>
              </li>
              <li>
                <a
                  href="/main/truth-or-dare"
                  className="text-black/70 hover:text-[#a78bfa] transition-colors"
                >
                  Truth or Dare
                </a>
              </li>
              <li>
                <a
                  href="/main/would-you-rather"
                  className="text-black/70 hover:text-[#60a5fa] transition-colors"
                >
                  Would You Rather
                </a>
              </li>
              <li>
                <a
                  href="/main/si-paling"
                  className="text-black/70 hover:text-[#fb923c] transition-colors"
                >
                  Si Paling
                </a>
              </li>
            </ul>
          </div>

          {/* Info */}
          <div>
            <h3 className="font-bold mb-4">Info</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="/tentang"
                  className="text-black/70 hover:text-black transition-colors"
                >
                  Tentang Kami
                </a>
              </li>
              <li>
                <a
                  href="/#games"
                  className="text-black/70 hover:text-black transition-colors"
                >
                  Cara Main
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-black/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-black/60">
            <p className="order-2 text-center md:order-1 md:text-left">
              © {currentYear} TEMAN MAIN. Semua hak cipta dilindungi
              undang-undang (yang penting udah dikasih tau).
            </p>

            <p className="order-1 text-center md:order-2 md:text-right">
              Dibuat dengan ☕ dan sedikit overthinking oleh{" "}
              <Link
                href="https://instagram.com/yourfzz_"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="font-bold text-black">Hafidz</span>
              </Link>
              <br />
              <span className="text-xs italic">
                "Karena scrolling terus juga nggak produktif, kan?"
              </span>
            </p>
          </div>

          {/* <div className="mt-6 text-center">
            <p className="text-xs text-black/40">
              💡 Fun fact: Website ini dibuat karena developer-nya juga sering
              kehabisan bahan obrolan pas nongkrong
            </p>
          </div> */}
        </div>
      </div>
    </footer>
  );
}

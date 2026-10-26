import Link from "next/link";
import { ArrowUpRight, Sparkles } from "lucide-react";

export default function Footer() {
  const currentYear = 2026;

  return (
    <footer className="relative mt-1 overflow-hidden border-t-2 border-[#172033] bg-[#172033] text-[#fff8f0]">
      <div className="pointer-events-none absolute -right-12 -top-16 h-40 w-40 rounded-full border-[18px] border-[#ff7a59]/70" />
      <div className="pointer-events-none absolute bottom-8 left-[42%] h-4 w-4 rotate-45 bg-[#ffd166]" />
      <div className="relative mx-auto max-w-6xl px-4 py-12 md:py-14">
        <div className="mb-10 grid grid-cols-1 gap-10 md:grid-cols-[1.5fr_1fr_1fr]">
          {/* Brand */}
          <div>
            <div className="mb-5 flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-[14px] border-2 border-[#fff8f0] bg-[#ffd166] text-[#172033] shadow-[3px_3px_0_#ff7a59]">
                <span className="text-xl font-black">T</span>
              </div>
              <span className="text-xl font-black tracking-[-0.05em]">
                TEMAN<span className="text-[#ff7a59]">.</span>MAIN
              </span>
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-[#fff8f0]/65">
              Bikin nongkrong lebih seru, satu permainan dalam sekali klik.
              Nggak perlu download, nggak perlu login, langsung gas aja.
            </p>
            <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-[#fff8f0]/20 bg-[#fff8f0]/10 px-3 py-2 text-xs font-bold text-[#ffd166]">
              <Sparkles className="h-3.5 w-3.5" /> Dibuat untuk momen spontan
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="mb-4 text-xs font-black uppercase tracking-[0.18em] text-[#5dd9d0]">
              Permainan
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  href="/main/pertanyaan"
                  className="group inline-flex items-center gap-1 text-[#fff8f0]/65 transition-colors hover:text-[#ffd166]"
                >
                  Pertanyaan Random{" "}
                  <ArrowUpRight className="h-3.5 w-3.5 opacity-0 transition-opacity group-hover:opacity-100" />
                </Link>
              </li>
              <li>
                <Link
                  href="/main/truth-or-dare"
                  className="group inline-flex items-center gap-1 text-[#fff8f0]/65 transition-colors hover:text-[#9b8cff]"
                >
                  Truth or Dare{" "}
                  <ArrowUpRight className="h-3.5 w-3.5 opacity-0 transition-opacity group-hover:opacity-100" />
                </Link>
              </li>
              <li>
                <Link
                  href="/main/would-you-rather"
                  className="group inline-flex items-center gap-1 text-[#fff8f0]/65 transition-colors hover:text-[#5dd9d0]"
                >
                  Would You Rather{" "}
                  <ArrowUpRight className="h-3.5 w-3.5 opacity-0 transition-opacity group-hover:opacity-100" />
                </Link>
              </li>
              <li>
                <Link
                  href="/main/si-paling"
                  className="group inline-flex items-center gap-1 text-[#fff8f0]/65 transition-colors hover:text-[#ff7a59]"
                >
                  Si Paling{" "}
                  <ArrowUpRight className="h-3.5 w-3.5 opacity-0 transition-opacity group-hover:opacity-100" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Info */}
          <div>
            <h3 className="mb-4 text-xs font-black uppercase tracking-[0.18em] text-[#ff7a59]">
              Info
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  href="/tentang"
                  className="text-[#fff8f0]/65 transition-colors hover:text-[#fff8f0]"
                >
                  Tentang Kami
                </Link>
              </li>
              <li>
                <Link
                  href="/#games"
                  className="text-[#fff8f0]/65 transition-colors hover:text-[#fff8f0]"
                >
                  Cara Main
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-[#fff8f0]/15 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 text-sm text-[#fff8f0]/50 md:flex-row">
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
                <span className="font-bold text-[#ffd166]">Hafidz</span>
              </Link>
              <br />
              <span className="text-xs italic">
                &quot;Karena scrolling terus juga nggak produktif, kan?&quot;
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

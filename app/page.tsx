'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import GameCard from '@/components/ui/GameCard';
import { ArrowDownRight, ArrowRight, MessageCircle, Scale, Sparkles, Users, Zap } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative isolate overflow-hidden bg-[linear-gradient(135deg,#fff8f0_0%,#fff8f0_45%,#e8e4ff_100%)] px-4 py-12 md:py-20 lg:py-24">
        {/* Decorative Floating Shapes */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
            transition={{ duration: 5, repeat: Infinity }}
            className="absolute left-[-2rem] top-24 h-24 w-24 rounded-full border-2 border-[#172033] bg-[#ffd166]/70 blur-[1px] md:left-[5%] md:h-32 md:w-32"
          />
          <motion.div
            animate={{ y: [0, 20, 0], rotate: [0, -10, 0] }}
            transition={{ duration: 6, repeat: Infinity, delay: 1 }}
            className="absolute right-[5%] top-20 h-16 w-16 rotate-12 rounded-3xl border-2 border-[#172033] bg-[#ff7a59]/75 md:h-24 md:w-24"
          />
          <motion.div
            animate={{ y: [0, -15, 0], rotate: [0, 15, 0] }}
            transition={{ duration: 4, repeat: Infinity, delay: 0.5 }}
            className="absolute bottom-20 left-[15%] hidden h-16 w-16 rotate-45 border-2 border-[#172033] bg-[#9b8cff]/60 md:block"
          />
          <motion.div
            animate={{ y: [0, 25, 0], rotate: [0, -15, 0] }}
            transition={{ duration: 7, repeat: Infinity, delay: 2 }}
            className="absolute right-[3%] top-1/2 h-12 w-12 rotate-12 rounded-full border-2 border-[#172033] bg-[#5dd9d0]/70 md:h-16 md:w-16"
          />
          
          {/* Pattern dots */}
          <div className="absolute top-10 right-[20%] hidden md:grid grid-cols-3 gap-2 opacity-20">
            {[...Array(9)].map((_, i) => (
              <div key={i} className="h-2 w-2 rounded-full bg-[#172033]" />
            ))}
          </div>
        </div>

        <div className="relative z-10 mx-auto max-w-6xl">
          <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left"
          >
            {/* Badge */}
            <motion.div 
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring" }}
              className="mb-6 inline-block md:mb-8"
            >
              <div className="inline-flex items-center gap-2 rounded-full border-2 border-[#172033] bg-white px-4 py-2 shadow-[4px_4px_0_#172033] transition-transform hover:rotate-[-2deg] md:px-5 md:py-3">
                <Sparkles className="h-4 w-4 text-[#ff7a59]" />
                <span className="text-xs font-black uppercase tracking-[0.08em] md:text-sm">Biar nongkrong nggak cuma scrolling</span>
              </div>
            </motion.div>

            {/* Main heading */}
            <h1 className="mb-5 px-2 text-5xl font-black leading-[0.92] tracking-[-0.07em] sm:text-6xl md:text-7xl lg:px-0 lg:text-[5.8rem]">
              NONGKRONG<br />
              <span className="relative inline-block -rotate-2 bg-[#ffd166] px-3 py-2 text-[#172033] md:px-5">
                JANGAN SCROLLING
              </span>
            </h1>

            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="mx-auto mb-8 max-w-xl px-4 text-base leading-relaxed text-[#172033]/70 sm:text-lg md:px-0 md:text-xl lg:mx-0"
            >
              Udah ngumpul, tapi semuanya sibuk sama HP masing-masing? 
              Saatnya punya cerita baru yang bisa diketawain bareng.
            </motion.p>
            {/* CTA Buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col items-center justify-center gap-3 px-4 sm:flex-row lg:justify-start lg:px-0"
            >
              <Link 
                href="#games"
                className="group flex w-full items-center justify-center gap-2 rounded-full border-2 border-[#172033] bg-[#ff7a59] px-6 py-3 text-center text-base font-black text-white shadow-[4px_4px_0_#172033] transition-all hover:-translate-y-1 hover:shadow-[6px_6px_0_#172033] active:translate-y-0 active:shadow-none sm:w-auto md:px-8 md:py-4 md:text-lg"
              >
                🎮 AYO MAIN! <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link 
                href="/tentang"
                className="w-full rounded-full border-2 border-[#172033] bg-white px-6 py-3 text-center text-base font-black shadow-[3px_3px_0_#172033] transition-all hover:-translate-y-1 hover:bg-[#5dd9d0]/25 active:translate-y-0 active:shadow-none sm:w-auto md:px-8 md:py-4 md:text-lg"
              >
                TENTANG KAMI
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.92, rotate: 2 }}
            animate={{ opacity: 1, scale: 1, rotate: -2 }}
            transition={{ delay: 0.25, type: 'spring', stiffness: 120 }}
            className="relative mx-auto w-full max-w-md lg:mx-0 lg:ml-auto"
          >
            <div className="absolute -right-3 -top-4 z-20 rounded-full border-2 border-[#172033] bg-[#5dd9d0] px-4 py-2 text-xs font-black uppercase tracking-[0.1em] shadow-[3px_3px_0_#172033] md:-right-6">
              pilih mood kamu
            </div>
            <div className="relative overflow-hidden rounded-[2rem] border-2 border-[#172033] bg-[#172033] p-3 shadow-[10px_10px_0_#ff7a59]">
              <div className="rounded-[1.35rem] border-2 border-[#fff8f0]/20 bg-[#fff8f0] p-5 md:p-7">
                <div className="mb-10 flex items-center justify-between text-xs font-black uppercase tracking-[0.16em] text-[#172033]/50">
                  <span>teman main / 001</span>
                  <span className="flex items-center gap-1 text-[#ff7a59]"><Sparkles className="h-3.5 w-3.5" /> live</span>
                </div>
                <div className="mb-5 inline-flex rounded-full border-2 border-[#172033] bg-[#9b8cff] px-3 py-1.5 text-xs font-black uppercase text-white shadow-[3px_3px_0_#172033]">
                  pertanyaan random
                </div>
                <p className="text-2xl font-black leading-tight tracking-[-0.04em] text-[#172033] md:text-3xl">
                  “Hal kecil apa yang akhir-akhir ini bikin kamu senyum?”
                </p>
                <div className="mt-8 flex items-center justify-between border-t-2 border-[#172033]/10 pt-4 text-xs font-bold text-[#172033]/50">
                  <span>nggak ada jawaban salah</span>
                  <ArrowDownRight className="h-5 w-5 text-[#ff7a59]" />
                </div>
              </div>
            </div>
            <div className="absolute -bottom-5 -left-5 rotate-[-8deg] rounded-2xl border-2 border-[#172033] bg-[#ffd166] px-4 py-3 text-sm font-black shadow-[4px_4px_0_#172033]">
              0% awkward silence
            </div>
          </motion.div>
          </div>

          {/* Stats */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="mx-auto mt-14 grid max-w-5xl grid-cols-2 gap-3 px-2 md:mt-20 md:grid-cols-4 md:gap-5"
          >
            {[
              { number: '4', label: 'Permainan', icon: '🎯' },
              { number: '100+', label: 'Pertanyaan', icon: '💭' },
              { number: '0', label: 'Iklan', icon: '🚫' },
              { number: '100%', label: 'Gratis', icon: '🎉' },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.8 + i * 0.1, type: "spring" }}
                className="rounded-2xl border-2 border-[#172033] bg-white p-3 text-center shadow-[3px_3px_0_#172033] transition-all hover:-translate-y-1 hover:shadow-[5px_5px_0_#172033] md:p-5"
              >
                <div className="mb-1 text-xl md:mb-2 md:text-3xl">{stat.icon}</div>
                <div className="mb-1 text-xl font-black md:text-3xl">{stat.number}</div>
                <div className="text-xs font-bold text-[#172033]/60 md:text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Games Section */}
      <section id="games" className="border-t-2 border-[#172033]/10 bg-[#fff8f0] px-4 py-16 md:py-24">
        <div className="mx-auto max-w-6xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1, y: 0 }}
            className="mb-10 text-center md:mb-14"
          >
            <div className="mb-4 inline-flex rounded-full border-2 border-[#172033] bg-[#5dd9d0] px-4 py-2 text-xs font-black uppercase tracking-[0.16em] shadow-[3px_3px_0_#172033]">
              4 cara buat mulai ngobrol
            </div>
            <h2 className="mb-3 text-4xl font-black tracking-[-0.05em] sm:text-5xl md:text-6xl">
              Pilih permainanmu<span className="text-[#ff7a59]">.</span>
            </h2>
            <p className="px-4 text-sm leading-relaxed text-[#172033]/65 md:text-base">
              Empat cara seru buat bikin nongkrong lebih hidup
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-6">
            <GameCard
              title="Pertanyaan Random"
              description="Biar obrolan nggak muter di kerjaan, kuliah, sama mantan."
              icon={<MessageCircle className="w-5 h-5 md:w-6 md:h-6" />}
              href="/main/pertanyaan"
              color="#ffd166"
              duration="5-15 menit"
            />
            
            <GameCard
              title="Truth or Dare"
              description="Jujur dikit atau berani dikit? Tenang, nggak ada yang disuruh manjat genteng."
              icon={<Zap className="w-5 h-5 md:w-6 md:h-6" />}
              href="/main/truth-or-dare"
              color="#9b8cff"
              duration="10-20 menit"
            />
            
            <GameCard
              title="Would You Rather"
              description="Dua pilihan sama-sama ngeselin. Hidup memang suka bercanda."
              icon={<Scale className="w-5 h-5 md:w-6 md:h-6" />}
              href="/main/would-you-rather"
              color="#5dd9d0"
              duration="10-15 menit"
            />
            
            <GameCard
              title="Si Paling"
              description="Siapa yang paling mungkin bikin masalah, terus pura-pura nggak tahu?"
              icon={<Users className="w-5 h-5 md:w-6 md:h-6" />}
              href="/main/si-paling"
              color="#ff7a59"
              duration="15-30 menit"
            />
          </div>
        </div>
      </section>

      {/* How to Play Section */}
      <section className="border-t-2 border-[#172033]/10 bg-[#e8e4ff] px-4 py-16 md:py-24">
        <div className="mx-auto max-w-5xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1, y: 0 }}
            className="mb-10 text-center md:mb-14"
          >
            <div className="mb-4 inline-flex rounded-full border-2 border-[#172033] bg-white px-4 py-2 text-xs font-black uppercase tracking-[0.16em] shadow-[3px_3px_0_#172033]">
              gampang banget
            </div>
            <h2 className="mb-3 text-4xl font-black tracking-[-0.05em] sm:text-5xl md:text-6xl">
              Dari awkward jadi seru<span className="text-[#ff7a59]">.</span>
            </h2>
            <p className="text-sm text-[#172033]/65 md:text-base">Tiga langkah kecil untuk bikin momen besar.</p>
          </motion.div>
          
          <div className="grid grid-cols-1 gap-5 md:grid-cols-3 md:gap-6">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              viewport={{ once: true }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="rounded-[1.75rem] border-2 border-[#172033] bg-[#ffd166] p-6 text-center shadow-[5px_5px_0_#172033] md:p-8"
            >
              <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl border-2 border-[#172033] bg-white text-xl font-black shadow-[3px_3px_0_#172033] md:h-16 md:w-16 md:text-2xl">
                1
              </div>
              <h3 className="mb-2 text-base font-black md:text-lg">Pilih Permainan</h3>
              <p className="px-1 text-sm leading-relaxed text-[#172033]/70 md:text-base">
                Pilih salah satu dari empat permainan yang tersedia
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              viewport={{ once: true }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="rounded-[1.75rem] border-2 border-[#172033] bg-[#9b8cff] p-6 text-center text-white shadow-[5px_5px_0_#172033] md:p-8"
            >
              <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl border-2 border-[#172033] bg-white text-xl font-black text-[#172033] shadow-[3px_3px_0_#172033] md:h-16 md:w-16 md:text-2xl">
                2
              </div>
              <h3 className="mb-2 text-base font-black md:text-lg">Gas Langsung Main</h3>
              <p className="px-1 text-sm leading-relaxed text-white/80 md:text-base">
                Nggak perlu daftar atau login, langsung main aja
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              viewport={{ once: true }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="rounded-[1.75rem] border-2 border-[#172033] bg-[#ff7a59] p-6 text-center shadow-[5px_5px_0_#172033] md:p-8"
            >
              <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl border-2 border-[#172033] bg-white text-xl font-black shadow-[3px_3px_0_#172033] md:h-16 md:w-16 md:text-2xl">
                3
              </div>
              <h3 className="mb-2 text-base font-black md:text-lg">Nikmati Momennya</h3>
              <p className="px-1 text-sm leading-relaxed text-[#172033]/75 md:text-base">
                Main sampai puas, ketawa bareng, bikin cerita baru
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}


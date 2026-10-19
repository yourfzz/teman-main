'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import GameCard from '@/components/ui/GameCard';
import { MessageCircle, Zap, Scale, Users } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative px-4 py-12 md:py-20 lg:py-24 overflow-hidden bg-gradient-to-br from-[#c1ff72]/30 via-[#fef9f3] to-[#a78bfa]/20">
        {/* Decorative Floating Shapes */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
            transition={{ duration: 5, repeat: Infinity }}
            className="absolute top-20 left-[5%] w-16 h-16 md:w-24 md:h-24 bg-[#c1ff72] rounded-full border-2 border-black opacity-60"
          />
          <motion.div
            animate={{ y: [0, 20, 0], rotate: [0, -10, 0] }}
            transition={{ duration: 6, repeat: Infinity, delay: 1 }}
            className="absolute top-40 right-[10%] w-12 h-12 md:w-20 md:h-20 bg-[#fb923c] rounded-full border-2 border-black opacity-50"
          />
          <motion.div
            animate={{ y: [0, -15, 0], rotate: [0, 15, 0] }}
            transition={{ duration: 4, repeat: Infinity, delay: 0.5 }}
            className="absolute bottom-32 left-[15%] w-14 h-14 md:w-20 md:h-20 bg-[#a78bfa] rotate-45 border-2 border-black opacity-40"
          />
          <motion.div
            animate={{ y: [0, 25, 0], rotate: [0, -15, 0] }}
            transition={{ duration: 7, repeat: Infinity, delay: 2 }}
            className="absolute top-1/2 right-[5%] w-10 h-10 md:w-16 md:h-16 bg-[#60a5fa] rotate-12 border-2 border-black opacity-50"
          />
          
          {/* Pattern dots */}
          <div className="absolute top-10 right-[20%] hidden md:grid grid-cols-3 gap-2 opacity-20">
            {[...Array(9)].map((_, i) => (
              <div key={i} className="w-2 h-2 bg-black rounded-full" />
            ))}
          </div>
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8 md:mb-12"
          >
            {/* Badge */}
            <motion.div 
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring" }}
              className="inline-block mb-6 md:mb-8"
            >
              <div className="px-4 md:px-6 py-2 md:py-3 bg-white rounded-full border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <span className="text-xs md:text-sm font-bold">✨ Biar Nongkrong Nggak Cuma Scrolling</span>
              </div>
            </motion.div>

            {/* Main heading */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-4 md:mb-6 leading-tight px-2">
              NONGKRONG JANGAN<br />
              <span className="inline-block bg-[#c1ff72] px-3 md:px-4 py-1 md:py-2 -rotate-1 border-2 border-black my-2">
                CUMA SCROLLING
              </span>
            </h1>

            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-base sm:text-lg md:text-xl text-black/70 max-w-2xl mx-auto mb-8 md:mb-10 leading-relaxed px-4"
            >
              Udah ngumpul, tapi semuanya sibuk sama HP masing-masing? 
              Saatnya punya cerita baru yang bisa diketawain bareng.
            </motion.p>
            {/* CTA Buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center px-4"
            >
              <Link 
                href="#games"
                className="w-full sm:w-auto px-6 md:px-8 py-3 md:py-4 bg-[#c1ff72] rounded-full font-bold text-base md:text-lg border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-y-[-2px] transition-all text-center"
              >
                🎮 AYO MAIN!
              </Link>
              <Link 
                href="/tentang"
                className="w-full sm:w-auto px-6 md:px-8 py-3 md:py-4 bg-white rounded-full font-bold text-base md:text-lg border-2 border-black hover:bg-black/5 transition-all text-center"
              >
                TENTANG KAMI
              </Link>
            </motion.div>
          </motion.div>

          {/* Stats */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6 max-w-4xl mx-auto mt-12 md:mt-16 px-2"
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
                className="p-3 md:p-6 bg-white rounded-xl md:rounded-2xl border-2 border-black text-center hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-y-[-2px] transition-all"
              >
                <div className="text-xl md:text-3xl mb-1 md:mb-2">{stat.icon}</div>
                <div className="text-xl md:text-3xl font-black mb-1">{stat.number}</div>
                <div className="text-xs md:text-sm text-black/60 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Games Section */}
      <section id="games" className="px-4 py-12 md:py-16 bg-white/50">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-8 md:mb-12"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-3 md:mb-4">
              Pilih Permainanmu
            </h2>
            <p className="text-sm md:text-base text-black/70 px-4">
              Empat cara seru buat bikin nongkrong lebih hidup
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            <GameCard
              title="Pertanyaan Random"
              description="Biar obrolan nggak muter di kerjaan, kuliah, sama mantan."
              icon={<MessageCircle className="w-5 h-5 md:w-6 md:h-6" />}
              href="/main/pertanyaan"
              color="#c1ff72"
              duration="5-15 menit"
            />
            
            <GameCard
              title="Truth or Dare"
              description="Jujur dikit atau berani dikit? Tenang, nggak ada yang disuruh manjat genteng."
              icon={<Zap className="w-5 h-5 md:w-6 md:h-6" />}
              href="/main/truth-or-dare"
              color="#a78bfa"
              duration="10-20 menit"
            />
            
            <GameCard
              title="Would You Rather"
              description="Dua pilihan sama-sama ngeselin. Hidup memang suka bercanda."
              icon={<Scale className="w-5 h-5 md:w-6 md:h-6" />}
              href="/main/would-you-rather"
              color="#60a5fa"
              duration="10-15 menit"
            />
            
            <GameCard
              title="Si Paling"
              description="Siapa yang paling mungkin bikin masalah, terus pura-pura nggak tahu?"
              icon={<Users className="w-5 h-5 md:w-6 md:h-6" />}
              href="/main/si-paling"
              color="#fb923c"
              duration="15-30 menit"
            />
          </div>
        </div>
      </section>

      {/* How to Play Section */}
      <section className="px-4 py-12 md:py-16">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-8 md:mb-12"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-3 md:mb-4">
              Cara Main
            </h2>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              viewport={{ once: true }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-center"
            >
              <div className="w-14 h-14 md:w-16 md:h-16 bg-[#c1ff72] rounded-full flex items-center justify-center text-xl md:text-2xl font-black border-2 border-black mx-auto mb-4">
                1
              </div>
              <h3 className="font-bold text-base md:text-lg mb-2">Pilih Permainan</h3>
              <p className="text-sm md:text-base text-black/70 px-4">
                Pilih salah satu dari empat permainan yang tersedia
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              viewport={{ once: true }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-center"
            >
              <div className="w-14 h-14 md:w-16 md:h-16 bg-[#a78bfa] rounded-full flex items-center justify-center text-xl md:text-2xl font-black border-2 border-black mx-auto mb-4">
                2
              </div>
              <h3 className="font-bold text-base md:text-lg mb-2">Gas Langsung Main</h3>
              <p className="text-sm md:text-base text-black/70 px-4">
                Nggak perlu daftar atau login, langsung main aja
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              viewport={{ once: true }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-center"
            >
              <div className="w-14 h-14 md:w-16 md:h-16 bg-[#fb923c] rounded-full flex items-center justify-center text-xl md:text-2xl font-black border-2 border-black mx-auto mb-4">
                3
              </div>
              <h3 className="font-bold text-base md:text-lg mb-2">Nikmati Momennya</h3>
              <p className="text-sm md:text-base text-black/70 px-4">
                Main sampai puas, ketawa bareng, bikin cerita baru
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}


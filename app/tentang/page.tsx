import Link from "next/link";
import {
  ArrowRight,
  Coffee,
  Heart,
  MessageCircle,
  Sparkles,
  Users,
  Zap,
} from "lucide-react";

export default function TentangPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative overflow-hidden bg-[linear-gradient(135deg,#fff8f0_0%,#fff8f0_48%,#e8e4ff_100%)] px-4 py-16 md:py-24">
        <div className="pointer-events-none absolute -right-10 top-16 h-32 w-32 rounded-full border-2 border-[#172033] bg-[#ff7a59]/60 md:right-[8%] md:h-44 md:w-44" />
        <div className="pointer-events-none absolute bottom-8 left-[8%] h-16 w-16 rotate-12 rounded-2xl border-2 border-[#172033] bg-[#ffd166]/70" />
        <div className="relative mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border-2 border-[#172033] bg-[#ffd166] px-4 py-2 text-xs font-black uppercase tracking-[0.14em] shadow-[3px_3px_0_#172033]">
              <Sparkles className="h-4 w-4" /> Tentang kami
            </div>
            <h1 className="mb-6 text-5xl font-black leading-[0.94] tracking-[-0.07em] sm:text-6xl md:text-7xl">
              TEMAN MAIN itu
              <br />
              <span className="inline-block -rotate-2 bg-[#9b8cff] px-3 py-2 text-white md:px-5">
                apa sih?
              </span>
            </h1>
            <p className="max-w-2xl text-lg leading-relaxed text-[#172033]/70 md:text-xl">
              Singkatnya? Platform buat bikin nongkrong bareng teman jadi lebih
              seru. Panjangnya? Yaudah baca aja terus ke bawah.
            </p>
          </div>
          <div className="relative mx-auto w-full max-w-sm lg:ml-auto">
            <div className="absolute -right-4 -top-5 z-10 rotate-6 rounded-full border-2 border-[#172033] bg-[#5dd9d0] px-4 py-2 text-xs font-black uppercase shadow-[3px_3px_0_#172033]">
              made for real moments
            </div>
            <div className="rotate-2 rounded-[2rem] border-2 border-[#172033] bg-[#172033] p-3 shadow-[9px_9px_0_#ff7a59]">
              <div className="rounded-[1.4rem] border-2 border-[#172033]/10 bg-[#fff8f0] p-6 md:p-8">
                <div className="mb-10 flex items-center justify-between text-xs font-black uppercase tracking-[0.14em] text-[#172033]/45">
                  <span>teman main / about</span>
                  <Heart className="h-4 w-4 fill-[#ff7a59] text-[#ff7a59]" />
                </div>
                <p className="mb-5 text-sm font-black uppercase tracking-[0.12em] text-[#ff7a59]">
                  the whole idea
                </p>
                <p className="text-3xl font-black leading-tight tracking-[-0.05em] text-[#172033]">
                  Bikin momen biasa jadi cerita yang diingat.
                </p>
                <div className="mt-8 border-t-2 border-[#172033]/10 pt-4 text-sm font-bold text-[#172033]/55">
                  nggak perlu login. nggak perlu awkward.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="border-t-2 border-[#172033]/10 bg-[#fff8f0] px-4 py-16 md:py-24">
        <div className="mx-auto max-w-5xl">
          <div className="rounded-[2rem] border-2 border-[#172033] bg-white p-7 shadow-[7px_7px_0_#172033] md:p-12">
            <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-center">
              <h2 className="flex items-center gap-3 text-3xl font-black tracking-[-0.04em] md:text-4xl">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl border-2 border-[#172033] bg-[#ffd166] shadow-[3px_3px_0_#172033]">
                  <Coffee className="h-6 w-6" />
                </span>
                Cerita di Baliknya
              </h2>
              <span className="w-fit rounded-full bg-[#5dd9d0] px-3 py-1.5 text-xs font-black uppercase tracking-[0.1em]">
                why we exist
              </span>
            </div>
            <div className="space-y-4 leading-relaxed text-[#172033]/75 md:text-lg">
              <p>
                Pernah nggak sih lagi nongkrong sama teman, udah ngumpul
                rame-rame, tapi kok rasanya sepi? Semua sibuk scrolling HP
                masing-masing. Obrolan cuma seputar &quot;lu udah makan?&quot;
                atau &quot;besok ngapain?&quot;. Terus... awkward silence.
              </p>
              <p>
                Nah, <span className="font-bold">TEMAN MAIN</span> dibuat buat
                ngatasin masalah itu. Biar nongkrong nggak cuma buang-buang
                waktu doang, tapi beneran punya cerita yang bisa dikenang (atau
                diketawain) di kemudian hari.
              </p>
              <p>
                Konsepnya simpel: website ini nyediain pertanyaan-pertanyaan
                random, tantangan seru, dan permainan yang bisa langsung
                dimainkan tanpa ribet. Nggak perlu download aplikasi, nggak
                perlu bikin akun, langsung buka browser terus GAS!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="border-t-2 border-[#172033]/10 bg-[#e8e4ff] px-4 py-16 md:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 text-center md:mb-14">
            <div className="mb-4 inline-flex rounded-full border-2 border-[#172033] bg-white px-4 py-2 text-xs font-black uppercase tracking-[0.14em] shadow-[3px_3px_0_#172033]">
              built for the group chat
            </div>
            <h2 className="text-4xl font-black tracking-[-0.05em] md:text-5xl">
              Kenapa harus TEMAN MAIN<span className="text-[#ff7a59]">?</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-3 md:gap-6">
            <div className="rounded-[1.75rem] border-2 border-[#172033] bg-[#ffd166] p-6 shadow-[5px_5px_0_#172033] md:p-7">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl border-2 border-[#172033] bg-white shadow-[3px_3px_0_#172033]">
                <Zap className="h-6 w-6" />
              </div>
              <h3 className="mb-2 text-xl font-black">Langsung Main</h3>
              <p className="text-sm leading-relaxed text-[#172033]/70">
                Nggak perlu ribet daftar atau login. Buka browser, pilih
                permainan, langsung gas!
              </p>
            </div>

            <div className="rounded-[1.75rem] border-2 border-[#172033] bg-[#9b8cff] p-6 text-white shadow-[5px_5px_0_#172033] md:p-7">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl border-2 border-[#172033] bg-white text-[#172033] shadow-[3px_3px_0_#172033]">
                <Users className="h-6 w-6" />
              </div>
              <h3 className="mb-2 text-xl font-black">Buat Semua Orang</h3>
              <p className="text-sm leading-relaxed text-white/80">
                Dari yang baru kenal sampe sahabat lama, semua permainan bisa
                disesuaikan.
              </p>
            </div>

            <div className="rounded-[1.75rem] border-2 border-[#172033] bg-[#ff7a59] p-6 shadow-[5px_5px_0_#172033] md:p-7">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl border-2 border-[#172033] bg-white shadow-[3px_3px_0_#172033]">
                <MessageCircle className="h-6 w-6" />
              </div>
              <h3 className="mb-2 text-xl font-black">
                Bahan Obrolan Unlimited
              </h3>
              <p className="text-sm leading-relaxed text-[#172033]/75">
                Ratusan pertanyaan dan tantangan yang bikin obrolan nggak pernah
                basi.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Behind the Scenes */}
      <section className="bg-[#fff8f0] px-4 py-16 md:py-24">
        <div className="mx-auto max-w-5xl">
          <div className="rounded-[2rem] border-2 border-[#172033] bg-[#5dd9d0] p-7 shadow-[7px_7px_0_#172033] md:p-12">
            <h2 className="mb-6 flex items-center gap-3 text-3xl font-black tracking-[-0.04em] md:text-4xl">
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl border-2 border-[#172033] bg-white shadow-[3px_3px_0_#172033]">
                <Sparkles className="h-6 w-6" />
              </span>
              Behind the Scenes
            </h2>
            <div className="space-y-4 leading-relaxed text-[#172033]/75 md:text-lg">
              <p>
                TEMAN MAIN dibuat oleh{" "}
                <span className="font-bold text-black">Hafidz</span>, seorang
                developer yang juga sering kehabisan bahan obrolan pas nongkrong
                (relatable banget, kan?).
              </p>
              <p>
                Website ini dibuat dengan Next.js, TypeScript, dan secangkir
                kopi yang hampir nggak pernah habis. Desainnya sengaja dibuat
                playful dan colorful biar nggak kayak website kantor yang bikin
                ngantuk.
              </p>
              <p>
                Fun fact: Sebagian besar pertanyaan di sini muncul pas lagi
                mandi, nyetir, atau tidur setengah sadar. Otak manusia emang
                aneh ya.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="border-t-2 border-[#172033]/10 bg-[#e8e4ff] px-4 py-16 md:py-24">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-4 inline-flex rounded-full border-2 border-[#172033] bg-white px-4 py-2 text-xs font-black uppercase tracking-[0.14em] shadow-[3px_3px_0_#172033]">
            the belief
          </div>
          <h2 className="mb-6 text-4xl font-black tracking-[-0.05em] md:text-5xl">
            Filosofi Kami
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg leading-relaxed text-[#172033]/70">
            Di era digital yang serba cepat ini, kita sering lupa bahwa momen
            terbaik dalam hidup itu sederhana: ketawa bareng teman, ngobrol
            sampai lupa waktu, dan bikin kenangan yang bisa diceritain
            bertahun-tahun kemudian.
          </p>
          <div className="inline-block rounded-[1.75rem] border-2 border-[#172033] bg-[#ffd166] p-8 shadow-[6px_6px_0_#172033] md:p-10">
            <Heart className="mx-auto mb-4 h-12 w-12 fill-[#ff7a59] text-[#172033]" />
            <p className="text-xl font-black md:text-2xl">
              &quot;Life&apos;s too short to have boring hangouts&quot;
            </p>
            <p className="mt-2 text-sm text-[#172033]/70">
              (Hidup terlalu singkat buat nongkrong yang membosankan)
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#172033] px-4 py-16 text-[#fff8f0] md:py-24">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-4 inline-flex rounded-full border-2 border-[#fff8f0]/30 bg-[#fff8f0]/10 px-4 py-2 text-xs font-black uppercase tracking-[0.14em] text-[#ffd166]">
            ready when you are
          </div>
          <h2 className="mb-6 text-4xl font-black tracking-[-0.05em] md:text-5xl">
            Yuk, Main Bareng!
          </h2>
          <p className="mb-8 text-lg text-[#fff8f0]/65">
            Udah baca sampai sini? Berarti kamu udah siap buat bikin nongkrong
            kamu jadi lebih seru. Gas, jangan kebanyakan mikir!
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/#games"
              className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-[#172033] bg-[#ff7a59] px-8 py-4 text-lg font-black text-white shadow-[4px_4px_0_#fff8f0] transition-all hover:-translate-y-1 hover:shadow-[6px_6px_0_#fff8f0]"
            >
              Pilih Permainan <ArrowRight className="h-5 w-5" />
            </Link>
            <Link
              href="/"
              className="inline-block rounded-full border-2 border-[#fff8f0]/40 bg-[#fff8f0]/10 px-8 py-4 text-lg font-black transition-all hover:bg-[#fff8f0]/20"
            >
              Balik ke Home
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

import { Sparkles, Heart, Coffee, Zap, Users, MessageCircle } from 'lucide-react';

export default function TentangPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="px-4 py-16 md:py-20 bg-gradient-to-b from-[#c1ff72]/20 to-transparent">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block px-4 py-2 bg-[#c1ff72] rounded-full border-2 border-black font-bold mb-6">
            ✨ Tentang Kami
          </div>
          <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
            TEMAN MAIN itu<br />Apa Sih Sebenernya?
          </h1>
          <p className="text-lg md:text-xl text-black/70 max-w-2xl mx-auto leading-relaxed">
            Singkatnya? Platform buat bikin nongkrong bareng teman jadi lebih seru. 
            Panjangnya? Yaudah baca aja terus ke bawah.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl border-2 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-8 md:p-12">
            <h2 className="text-3xl font-black mb-6 flex items-center gap-3">
              <Coffee className="w-8 h-8" />
              Cerita di Baliknya
            </h2>
            <div className="space-y-4 text-black/80 leading-relaxed">
              <p>
                Pernah nggak sih lagi nongkrong sama teman, udah ngumpul rame-rame, 
                tapi kok rasanya sepi? Semua sibuk scrolling HP masing-masing. 
                Obrolan cuma seputar "lu udah makan?" atau "besok ngapain?". 
                Terus... awkward silence.
              </p>
              <p>
                Nah, <span className="font-bold">TEMAN MAIN</span> dibuat buat ngatasin masalah itu. 
                Biar nongkrong nggak cuma buang-buang waktu doang, tapi beneran punya cerita 
                yang bisa dikenang (atau diketawain) di kemudian hari.
              </p>
              <p>
                Konsepnya simpel: website ini nyediain pertanyaan-pertanyaan random, 
                tantangan seru, dan permainan yang bisa langsung dimainkan tanpa ribet. 
                Nggak perlu download aplikasi, nggak perlu bikin akun, langsung buka 
                browser terus GAS!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="px-4 py-16 bg-white/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black text-center mb-12">
            Kenapa Harus TEMAN MAIN?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-white rounded-2xl border-2 border-black">
              <div className="w-12 h-12 bg-[#c1ff72] rounded-full flex items-center justify-center border-2 border-black mb-4">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-2">Langsung Main</h3>
              <p className="text-sm text-black/70">
                Nggak perlu ribet daftar atau login. Buka browser, pilih permainan, langsung gas!
              </p>
            </div>

            <div className="p-6 bg-white rounded-2xl border-2 border-black">
              <div className="w-12 h-12 bg-[#a78bfa] rounded-full flex items-center justify-center border-2 border-black mb-4">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-2">Buat Semua Orang</h3>
              <p className="text-sm text-black/70">
                Dari yang baru kenal sampe sahabat lama, semua permainan bisa disesuaikan.
              </p>
            </div>

            <div className="p-6 bg-white rounded-2xl border-2 border-black">
              <div className="w-12 h-12 bg-[#fb923c] rounded-full flex items-center justify-center border-2 border-black mb-4">
                <MessageCircle className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-2">Bahan Obrolan Unlimited</h3>
              <p className="text-sm text-black/70">
                Ratusan pertanyaan dan tantangan yang bikin obrolan nggak pernah basi.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Behind the Scenes */}
      <section className="px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="bg-[#60a5fa]/10 rounded-2xl border-2 border-black p-8 md:p-12">
            <h2 className="text-3xl font-black mb-6 flex items-center gap-3">
              <Sparkles className="w-8 h-8" />
              Behind the Scenes
            </h2>
            <div className="space-y-4 text-black/80 leading-relaxed">
              <p>
                TEMAN MAIN dibuat oleh <span className="font-bold text-black">Hafidz</span>, 
                seorang developer yang juga sering kehabisan bahan obrolan pas nongkrong 
                (relatable banget, kan?).
              </p>
              <p>
                Website ini dibuat dengan Next.js, TypeScript, dan secangkir kopi yang 
                hampir nggak pernah habis. Desainnya sengaja dibuat playful dan colorful 
                biar nggak kayak website kantor yang bikin ngantuk.
              </p>
              <p>
                Fun fact: Sebagian besar pertanyaan di sini muncul pas lagi mandi, 
                nyetir, atau tidur setengah sadar. Otak manusia emang aneh ya.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="px-4 py-16 bg-white/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-black mb-6">
            Filosofi Kami
          </h2>
          <p className="text-lg text-black/70 max-w-2xl mx-auto mb-8 leading-relaxed">
            Di era digital yang serba cepat ini, kita sering lupa bahwa momen terbaik 
            dalam hidup itu sederhana: ketawa bareng teman, ngobrol sampai lupa waktu, 
            dan bikin kenangan yang bisa diceritain bertahun-tahun kemudian.
          </p>
          <div className="inline-block p-8 bg-[#c1ff72] rounded-2xl border-2 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
            <Heart className="w-12 h-12 mx-auto mb-4" />
            <p className="text-xl font-bold">
              "Life's too short to have boring hangouts"
            </p>
            <p className="text-sm mt-2 text-black/70">
              (Hidup terlalu singkat buat nongkrong yang membosankan)
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-black mb-6">
            Yuk, Main Bareng!
          </h2>
          <p className="text-lg text-black/70 mb-8">
            Udah baca sampai sini? Berarti kamu udah siap buat bikin nongkrong 
            kamu jadi lebih seru. Gas, jangan kebanyakan mikir!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/#games"
              className="inline-block px-8 py-4 bg-[#c1ff72] rounded-full font-bold text-lg border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-y-[-2px] transition-all"
            >
              Pilih Permainan
            </a>
            <a 
              href="/"
              className="inline-block px-8 py-4 bg-white rounded-full font-bold text-lg border-2 border-black hover:bg-black/5 transition-all"
            >
              Balik ke Home
            </a>
          </div>
        </div>
      </section>

      {/* Final Note */}
      <section className="px-4 py-8 border-t-2 border-black/10">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm text-black/60 italic">
            P.S. Kalau kamu punya ide buat pertanyaan atau fitur baru, 
            kabarin aja! Siapa tau dimasukin ke versi berikutnya 
            (atau mungkin juga enggak, tapi appreciate banget kok).
          </p>
        </div>
      </section>
    </div>
  );
}


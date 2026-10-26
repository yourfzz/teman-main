'use client';

import { useEffect, useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import BackButton from '@/components/ui/BackButton';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import Toast from '@/components/ui/Toast';
import { questions, getCategoryLabel } from '@/data/questions';
import { shareContent, generateShareText } from '@/lib/share';
import { getFavorites, removeFavorite, saveFavorite } from '@/lib/storage';
import { Category, Question } from '@/types/game';
import { Heart, Lightbulb, Phone, RefreshCw, Share2, Sparkles, Star } from 'lucide-react';

const categories: Category[] = ['random', 'ice-breaker', 'absurd', 'deep-talk', 'nostalgia', 'relationship', 'hot-takes'];
const favoriteKey = 'questions';
const followUps: Record<string, string[]> = {
  random: ['Kenapa jawaban itu kepikiran duluan?', 'Ada cerita lucu di balik jawabanmu?', 'Kalau temanmu yang menjawab, kira-kira jawabannya apa?'],
  'ice-breaker': ['Apa kejadian paling lucu yang pernah muncul dari hal itu?', 'Siapa yang paling mungkin punya jawaban berbeda?', 'Kalau harus memilih lagi, pilihanmu tetap sama?'],
  kenalan: ['Apa kejadian paling lucu yang pernah muncul dari hal itu?', 'Siapa yang paling mungkin punya jawaban berbeda?', 'Kalau harus memilih lagi, pilihanmu tetap sama?'],
  absurd: ['Seberapa yakin kamu dengan jawaban itu?', 'Kalau ini jadi berita besok, judulnya apa?', 'Siapa teman yang paling cocok diajak melakukan itu?'],
  'deep-talk': ['Apa yang membuat kamu merasa begitu?', 'Kapan terakhir kali kamu menyadari hal itu?', 'Apa yang ingin kamu lakukan setelah menyadarinya?'],
  nostalgia: ['Bagian mana yang paling kamu rindukan?', 'Siapa saja yang ada di momen itu?', 'Kalau bisa mengulangnya, apa yang ingin kamu lakukan berbeda?'],
  relationship: ['Apa yang membuat hal itu penting buat kamu?', 'Pernah ada pengalaman yang mengubah pandanganmu?', 'Menurutmu, seperti apa hubungan yang sehat?'],
  percintaan: ['Apa yang membuat hal itu penting buat kamu?', 'Pernah ada pengalaman yang mengubah pandanganmu?', 'Menurutmu, seperti apa hubungan yang sehat?'],
  'hot-takes': ['Apa alasan terkuat yang mendukung pendapatmu?', 'Siapa di sini yang kemungkinan besar tidak setuju?', 'Apa yang bisa membuat pendapatmu berubah?'],
};

const categoryMatches = (category: Category, question: Question) => {
  if (category === 'random') return true;
  if (category === 'ice-breaker') return question.category === 'ice-breaker' || question.category === 'kenalan';
  if (category === 'relationship') return question.category === 'relationship' || question.category === 'percintaan';
  return question.category === category;
};

export default function PertanyaanPage() {
  const [selectedCategory, setSelectedCategory] = useState<Category>('random');
  const [currentId, setCurrentId] = useState<string | null>(null);
  const [history, setHistory] = useState<string[]>([]);
  const [favorites, setFavorites] = useState<string[]>([]);
  const [showFavorites, setShowFavorites] = useState(false);
  const [followUp, setFollowUp] = useState<string | null>(null);
  const [specialQuestion, setSpecialQuestion] = useState<Question | null>(null);
  const [phoneMode, setPhoneMode] = useState(false);
  const [players, setPlayers] = useState<string[]>([]);
  const [playerInput, setPlayerInput] = useState('');
  const [playerIndex, setPlayerIndex] = useState(0);
  const [toast, setToast] = useState<string | null>(null);

  useEffect(() => {
    const timer = window.setTimeout(() => setFavorites(getFavorites(favoriteKey)), 0);
    return () => window.clearTimeout(timer);
  }, []);

  const categoryQuestions = useMemo(() => questions.filter(question => categoryMatches(selectedCategory, question)), [selectedCategory]);
  const visibleQuestions = showFavorites ? categoryQuestions.filter(question => favorites.includes(question.id)) : categoryQuestions;
  const currentQuestion = specialQuestion || visibleQuestions.find(question => question.id === currentId) || visibleQuestions[0] || null;
  const currentFavorite = currentQuestion ? favorites.includes(currentQuestion.id) : false;
  const currentFollowUps = currentQuestion?.followUps?.length ? currentQuestion.followUps : followUps[currentQuestion?.category || selectedCategory] || followUps.random;
  const activePlayer = phoneMode && players.length ? players[playerIndex % players.length] : null;

  const handleNext = () => {
    if (!visibleQuestions.length) return;
    const used = new Set(history);
    if (currentQuestion) used.add(currentQuestion.id);
    let candidates = visibleQuestions.filter(question => !used.has(question.id));
    if (!candidates.length) {
      setHistory([]);
      candidates = visibleQuestions.filter(question => question.id !== currentQuestion?.id);
    }
    const next = candidates[Math.floor(Math.random() * candidates.length)] || visibleQuestions[0];
    setHistory(previous => [...previous, currentQuestion?.id || ''].filter(Boolean).slice(-visibleQuestions.length));
    setCurrentId(next.id);
    setSpecialQuestion(null);
    setFollowUp(null);
    if (phoneMode && players.length) setPlayerIndex(index => (index + 1) % players.length);
  };

  const handleCategoryChange = (category: Category) => {
    setSelectedCategory(category);
    setCurrentId(null);
    setHistory([]);
    setSpecialQuestion(null);
    setFollowUp(null);
    setShowFavorites(false);
  };

  const handleNewSession = () => {
    setHistory([]);
    setCurrentId(null);
    setSpecialQuestion(null);
    setFollowUp(null);
    setToast('Sesi baru dimulai!');
  };

  const toggleFavorite = () => {
    if (!currentQuestion) return;
    if (currentFavorite) {
      removeFavorite(favoriteKey, currentQuestion.id);
      setFavorites(previous => previous.filter(id => id !== currentQuestion.id));
      setToast('Dihapus dari favorit.');
    } else {
      saveFavorite(favoriteKey, currentQuestion.id);
      setFavorites(previous => [...previous, currentQuestion.id]);
      setToast('Disimpan ke favorit!');
    }
  };

  const showSpecialQuestion = () => {
    const available = questions.filter(question => question.special);
    const next = available[Math.floor(Math.random() * available.length)];
    if (next) {
      setSpecialQuestion(next);
      setFollowUp(null);
    }
  };

  const handleShare = async () => {
    if (!currentQuestion) return;
    const success = await shareContent(generateShareText(`Pertanyaan: ${currentQuestion.text}`, 'Pertanyaan Random'));
    if (success) setToast('Berhasil disalin!');
  };

  const addPlayers = () => {
    const names = playerInput.split(',').map(name => name.trim()).filter(Boolean).slice(0, 12);
    setPlayers(names);
    setPlayerIndex(0);
    setPlayerInput('');
  };

  return (
    <div className="min-h-screen px-4 py-8">
      <div className="max-w-3xl mx-auto">
        <BackButton />
        <div className="mt-8 mb-8 text-center">
          <h1 className="text-4xl md:text-5xl font-black mb-4">Pertanyaan Random</h1>
          <p className="text-black/70">Biar obrolan kamu nggak cuma muter di kerjaan, kuliah, sama mantan.</p>
        </div>

        <div className="mb-6 flex flex-wrap gap-2 justify-center" aria-label="Pilih kategori pertanyaan">
          {categories.map(category => (
            <button key={category} type="button" onClick={() => handleCategoryChange(category)} aria-pressed={selectedCategory === category}
              className={`px-4 py-2 rounded-full font-medium border-2 border-black transition-all ${selectedCategory === category ? 'bg-[#c1ff72] shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]' : 'bg-white hover:bg-black/5'}`}>
              {getCategoryLabel(category)}
            </button>
          ))}
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-8">
          <Button size="sm" variant={showFavorites ? 'primary' : 'outline'} onClick={() => setShowFavorites(value => !value)}>
            <Heart className="inline w-4 h-4 mr-1" fill={showFavorites ? 'currentColor' : 'none'} />Favorit ({favorites.length})
          </Button>
          <Button size="sm" variant={phoneMode ? 'primary' : 'outline'} onClick={() => setPhoneMode(value => !value)}>
            <Phone className="inline w-4 h-4 mr-1" />Oper ponsel
          </Button>
          <Button size="sm" variant="outline" onClick={handleNewSession}>Sesi baru</Button>
        </div>

        {phoneMode && (
          <Card className="mb-8 p-5">
            <label htmlFor="player-names" className="block font-bold mb-2">Nama pemain (opsional)</label>
            <div className="flex gap-2">
              <input id="player-names" value={playerInput} onChange={event => setPlayerInput(event.target.value)} onKeyDown={event => event.key === 'Enter' && addPlayers()}
                placeholder="Contoh: Adit, Sari, Bima" className="min-w-0 flex-1 px-4 py-3 rounded-xl border-2 border-black focus:outline-none focus:ring-2 focus:ring-[#c1ff72]" />
              <Button onClick={addPlayers}>Pakai</Button>
            </div>
            <p className="text-sm text-black/60 mt-2">Pisahkan nama dengan koma. Kalau kosong, kamu tetap bisa main.</p>
          </Card>
        )}

        {!currentQuestion ? (
          <Card><p className="text-center text-lg">Belum ada pertanyaan favorit di kategori ini. Coba kategori lain atau matikan filter favorit.</p></Card>
        ) : (
          <AnimatePresence mode="wait">
            <Card key={currentQuestion.id}>
              <div className="text-center">
                <div className="flex justify-between items-center mb-6">
                  <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${currentQuestion.special ? 'bg-[#fbbf24]' : 'bg-[#c1ff72]'}`}>
                    {currentQuestion.special && <Sparkles className="inline w-4 h-4 mr-1" />}{currentQuestion.special ? 'Pertanyaan spesial ronde ini' : getCategoryLabel(currentQuestion.category)}
                  </span>
                  <button type="button" onClick={toggleFavorite} aria-label={currentFavorite ? 'Hapus dari favorit' : 'Simpan ke favorit'} aria-pressed={currentFavorite} className="p-2 rounded-full border-2 border-black hover:bg-[#c1ff72]">
                    <Star className="w-5 h-5" fill={currentFavorite ? 'currentColor' : 'none'} />
                  </button>
                </div>
                {activePlayer && <p className="text-sm font-bold text-black/60 mb-3">Giliran {activePlayer}</p>}
                <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-2xl md:text-3xl font-bold leading-relaxed mb-8">{currentQuestion.text}</motion.p>
                {followUp && <p className="rounded-xl bg-[#fef3c7] border-2 border-black px-4 py-3 mb-6 font-medium">{followUp}</p>}
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <Button onClick={handleNext} size="lg" className="flex items-center gap-2"><RefreshCw className="w-5 h-5" />Lewati / pertanyaan berikutnya</Button>
                  <Button onClick={() => setFollowUp(currentFollowUps.find(item => item !== followUp) || null)} variant="secondary" size="lg" className="flex items-center gap-2"><Lightbulb className="w-5 h-5" />Lanjut gali cerita</Button>
                </div>
                <div className="flex flex-wrap gap-3 justify-center mt-4">
                  <Button onClick={showSpecialQuestion} variant="outline" size="sm"><Sparkles className="inline w-4 h-4 mr-1" />Pertanyaan spesial</Button>
                  <Button onClick={handleShare} variant="outline" size="sm"><Share2 className="inline w-4 h-4 mr-1" />Bagikan</Button>
                </div>
              </div>
            </Card>
          </AnimatePresence>
        )}
        <p className="mt-8 text-center text-sm text-black/60">Jawab santai, boleh cerita panjang, boleh juga lewat dulu. Nggak ada jawaban paling benar.</p>
      </div>
      <AnimatePresence>{toast && <Toast message={toast} onClose={() => setToast(null)} />}</AnimatePresence>
    </div>
  );
}
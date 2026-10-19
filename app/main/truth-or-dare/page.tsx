'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import BackButton from '@/components/ui/BackButton';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import Toast from '@/components/ui/Toast';
import { truthOrDareItems } from '@/data/truth-or-dare';
import { getNextItem } from '@/lib/game-utils';
import { shareContent, generateShareText } from '@/lib/share';
import { Share2, RefreshCw, Zap } from 'lucide-react';
import type { ChallengeType, DifficultyLevel } from '@/types/game';

export default function TruthOrDarePage() {
  const [challengeType, setChallengeType] = useState<ChallengeType>('random');
  const [level, setLevel] = useState<DifficultyLevel>('santai');
  const [index, setIndex] = useState(0);
  const [order, setOrder] = useState<string[]>([]);
  const [toast, setToast] = useState<string | null>(null);
  const [started, setStarted] = useState(false);

  const filtered = truthOrDareItems.filter(item => {
    if (item.level !== level) return false;
    if (challengeType === 'random') return true;
    return item.type === challengeType;
  });

  const current = filtered[0] && order.length ? filtered.find(i => i.id === order[index]) || filtered[0] : filtered[0];

  const handleNext = () => {
    const result = getNextItem(filtered, index, order);
    setIndex(result.newIndex);
    if (result.newOrder) setOrder(result.newOrder);
  };

  const handleShare = async () => {
    if (!current) return;
    const text = generateShareText(`${current.type === 'truth' ? 'Truth' : 'Dare'}: ${current.text}`, 'Truth or Dare');
    if (await shareContent(text)) setToast('Berhasil disalin!');
  };

  if (!started) return (
    <div className="min-h-screen px-4 py-8">
      <div className="max-w-3xl mx-auto">
        <BackButton />
        <div className="mt-8 mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-black mb-4">Truth or Dare</h1>
          <p className="text-black/70">Jujur dikit atau berani dikit?</p>
        </div>
        <Card>
          <div className="space-y-8">
            <div>
              <h3 className="text-lg font-bold mb-4">Pilih Jenis Tantangan</h3>
              <div className="grid grid-cols-3 gap-3">
                {(['truth', 'dare', 'random'] as ChallengeType[]).map(t => (
                  <button key={t} onClick={() => setChallengeType(t)}
                    className={`px-4 py-3 rounded-xl font-medium border-2 border-black ${challengeType === t ? 'bg-[#a78bfa] text-white' : 'bg-white'}`}>
                    {t === 'truth' ? 'Truth' : t === 'dare' ? 'Dare' : 'Random'}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Pilih Tingkat Tantangan</h3>
              <div className="grid grid-cols-3 gap-3">
                {(['santai', 'seru', 'berani'] as DifficultyLevel[]).map(l => (
                  <button key={l} onClick={() => setLevel(l)}
                    className={`px-4 py-3 rounded-xl font-medium border-2 border-black ${level === l ? 'bg-[#a78bfa] text-white' : 'bg-white'}`}>
                    {l.charAt(0).toUpperCase() + l.slice(1)}
                  </button>
                ))}
              </div>
            </div>
            <Button onClick={() => setStarted(true)} size="lg" className="w-full flex items-center justify-center gap-2">
              <Zap className="w-5 h-5" />Mulai tantangan
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );

  if (!current) return (
    <div className="min-h-screen px-4 py-8">
      <div className="max-w-3xl mx-auto">
        <BackButton />
        <div className="mt-8 text-center">
          <p className="text-lg">Nggak ada tantangan yang cocok.</p>
          <Button onClick={() => setStarted(false)} className="mt-4">Kembali</Button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen px-4 py-8">
      <div className="max-w-3xl mx-auto">
        <BackButton />
        <div className="mt-8 mb-8 text-center">
          <h1 className="text-4xl md:text-5xl font-black mb-2">Truth or Dare</h1>
        </div>
        <AnimatePresence mode="wait">
          <Card key={current.id}>
            <div className="text-center">
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                <div className={`inline-block px-4 py-2 rounded-full text-lg font-bold mb-6 border-2 border-black ${current.type === 'truth' ? 'bg-blue-400' : 'bg-orange-400'}`}>
                  {current.type === 'truth' ? '🤔 TRUTH' : '⚡ DARE'}
                </div>
                <p className="text-2xl md:text-3xl font-bold leading-relaxed mb-8">{current.text}</p>
              </motion.div>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Button onClick={handleNext} size="lg" className="flex items-center gap-2">
                  <RefreshCw className="w-5 h-5" />Ganti tantangan
                </Button>
                <Button onClick={handleShare} variant="outline" size="lg" className="flex items-center gap-2">
                  <Share2 className="w-5 h-5" />Bagikan
                </Button>
              </div>
              <button onClick={() => setStarted(false)} className="mt-6 text-sm text-black/60 hover:text-black">
                Ubah pengaturan
              </button>
            </div>
          </Card>
        </AnimatePresence>
      </div>
      <AnimatePresence>{toast && <Toast message={toast} onClose={() => setToast(null)} />}</AnimatePresence>
    </div>
  );
}

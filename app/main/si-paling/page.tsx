'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import BackButton from '@/components/ui/BackButton';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import Toast from '@/components/ui/Toast';
import { siPalingStatements } from '@/data/si-paling';
import { getNextItem } from '@/lib/game-utils';
import { shareContent, generateShareText } from '@/lib/share';
import { Share2, RefreshCw, Users, X } from 'lucide-react';

export default function SiPalingPage() {
  const [players, setPlayers] = useState<string[]>([]);
  const [input, setInput] = useState('');
  const [index, setIndex] = useState(0);
  const [order, setOrder] = useState<string[]>([]);
  const [toast, setToast] = useState<string | null>(null);
  const [started, setStarted] = useState(false);
  const [selectedPlayer, setSelectedPlayer] = useState<string | null>(null);

  const current = siPalingStatements[0] && order.length 
    ? siPalingStatements.find(s => s.id === order[index]) || siPalingStatements[0] 
    : siPalingStatements[0];

  const addPlayer = () => {
    if (input.trim() && players.length < 12) {
      setPlayers([...players, input.trim()]);
      setInput('');
    }
  };

  const removePlayer = (idx: number) => {
    setPlayers(players.filter((_, i) => i !== idx));
  };

  const handleNext = () => {
    const result = getNextItem(siPalingStatements, index, order);
    setIndex(result.newIndex);
    if (result.newOrder) setOrder(result.newOrder);
    setSelectedPlayer(null);
  };

  const handleShare = async () => {
    if (!current) return;
    const text = generateShareText(
      `${current.text}${selectedPlayer ? `\n\nJawaban: ${selectedPlayer}` : ''}`,
      'Si Paling'
    );
    if (await shareContent(text)) setToast('Berhasil disalin!');
  };

  if (!started) return (
    <div className="min-h-screen px-4 py-8">
      <div className="max-w-3xl mx-auto">
        <BackButton />
        <div className="mt-8 mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-black mb-4">Si Paling</h1>
          <p className="text-black/70">Siapa yang paling mungkin bikin masalah?</p>
        </div>
        <Card>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-bold mb-4">Masukkan Nama Pemain</h3>
              <div className="flex gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && addPlayer()}
                  placeholder="Nama pemain..."
                  className="flex-1 px-4 py-3 rounded-xl border-2 border-black focus:outline-none focus:ring-2 focus:ring-[#fb923c]"
                  maxLength={20}
                />
                <Button onClick={addPlayer} disabled={!input.trim() || players.length >= 12}>
                  Tambah
                </Button>
              </div>
              <p className="text-sm text-black/60 mt-2">{players.length}/12 pemain • Min. 2 pemain</p>
            </div>

            {players.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {players.map((name, idx) => (
                  <div key={idx} className="px-3 py-2 bg-[#fb923c] rounded-full border-2 border-black flex items-center gap-2">
                    <span className="font-medium">{name}</span>
                    <button onClick={() => removePlayer(idx)} className="hover:opacity-70">
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
            )}

            <Button onClick={() => setStarted(true)} size="lg" className="w-full flex items-center justify-center gap-2" disabled={players.length < 2}>
              <Users className="w-5 h-5" />Mulai main
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );

  if (!current) return null;

  return (
    <div className="min-h-screen px-4 py-8">
      <div className="max-w-3xl mx-auto">
        <BackButton />
        <div className="mt-8 mb-8 text-center">
          <h1 className="text-4xl md:text-5xl font-black mb-2">Si Paling</h1>
          <p className="text-sm text-black/60">{players.length} pemain</p>
        </div>
        <AnimatePresence mode="wait">
          <Card key={current.id}>
            <div className="text-center">
              <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}>
                <div className="inline-block px-4 py-2 rounded-full bg-[#fb923c] text-lg font-bold mb-6 border-2 border-black">
                  👥 SI PALING
                </div>
                <p className="text-3xl md:text-4xl font-black leading-relaxed mb-8">{current.text}</p>
                <p className="text-black/60 mb-4">Diskusikan bersama dan pilih siapa orangnya!</p>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 mb-8">
                  {players.map((name, idx) => (
                    <button
                      key={`${name}-${idx}`}
                      type="button"
                      aria-pressed={selectedPlayer === name}
                      onClick={() => setSelectedPlayer(name)}
                      className={`px-3 py-3 rounded-xl font-bold border-2 border-black transition-colors ${selectedPlayer === name ? 'bg-[#c1ff72]' : 'bg-white hover:bg-black/5'}`}
                    >
                      {name}
                    </button>
                  ))}
                </div>
                {selectedPlayer && (
                  <p className="font-bold mb-8">{selectedPlayer} paling mungkin!</p>
                )}
              </motion.div>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Button onClick={handleNext} size="lg" className="flex items-center gap-2">
                  <RefreshCw className="w-5 h-5" />Pernyataan berikutnya
                </Button>
                <Button onClick={handleShare} variant="outline" size="lg" className="flex items-center gap-2">
                  <Share2 className="w-5 h-5" />Bagikan
                </Button>
              </div>
              <button onClick={() => { setSelectedPlayer(null); setStarted(false); }} className="mt-6 text-sm text-black/60 hover:text-black">
                Ganti pemain
              </button>
            </div>
          </Card>
        </AnimatePresence>
      </div>
      <AnimatePresence>{toast && <Toast message={toast} onClose={() => setToast(null)} />}</AnimatePresence>
    </div>
  );
}

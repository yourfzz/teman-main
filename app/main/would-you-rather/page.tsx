'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import BackButton from '@/components/ui/BackButton';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import Toast from '@/components/ui/Toast';
import { wouldYouRatherQuestions, getWyrCategoryLabel } from '@/data/would-you-rather';
import { getNextItem } from '@/lib/game-utils';
import { shareContent, generateShareText } from '@/lib/share';
import { Share2, RefreshCw } from 'lucide-react';
import type { WouldYouRatherCategory } from '@/types/game';

const categories: WouldYouRatherCategory[] = ['absurd', 'kehidupan', 'pertemanan', 'percintaan', 'masa-depan'];

export default function WouldYouRatherPage() {
  const [category, setCategory] = useState<WouldYouRatherCategory>('absurd');
  const [index, setIndex] = useState(0);
  const [order, setOrder] = useState<string[]>([]);
  const [selected, setSelected] = useState<'A' | 'B' | null>(null);
  const [toast, setToast] = useState<string | null>(null);

  const filtered = wouldYouRatherQuestions.filter(q => q.category === category);
  const current = filtered[0] && order.length ? filtered.find(q => q.id === order[index]) || filtered[0] : filtered[0];

  const handleSelect = (choice: 'A' | 'B') => {
    setSelected(choice);
    setTimeout(() => {
      setSelected(null);
      handleNext();
    }, 1500);
  };

  const handleNext = () => {
    const result = getNextItem(filtered, index, order);
    setIndex(result.newIndex);
    if (result.newOrder) setOrder(result.newOrder);
  };

  const handleShare = async () => {
    if (!current) return;
    const text = generateShareText(
      `Would You Rather:\nA) ${current.optionA}\nB) ${current.optionB}`,
      'Would You Rather'
    );
    if (await shareContent(text)) setToast('Berhasil disalin!');
  };

  const handleCategoryChange = (cat: WouldYouRatherCategory) => {
    setCategory(cat);
    setIndex(0);
    setOrder([]);
    setSelected(null);
  };

  if (!current) return null;

  return (
    <div className="min-h-screen px-4 py-8">
      <div className="max-w-3xl mx-auto">
        <BackButton />
        <div className="mt-8 mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-black mb-4">Would You Rather</h1>
          <p className="text-black/70">Dua pilihan sama-sama ngeselin. Hidup memang suka bercanda.</p>
        </div>

        <div className="mb-8 flex flex-wrap gap-2 justify-center">
          {categories.map(cat => (
            <button key={cat} onClick={() => handleCategoryChange(cat)}
              className={`px-4 py-2 rounded-full font-medium border-2 border-black ${category === cat ? 'bg-[#60a5fa] text-white' : 'bg-white'}`}>
              {getWyrCategoryLabel(cat)}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div key={current.id} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <div className="space-y-4">
              <motion.button
                onClick={() => handleSelect('A')}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full p-6 rounded-2xl border-2 border-black text-left transition-all ${
                  selected === 'A' ? 'bg-[#60a5fa] text-white shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]' : 'bg-white hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]'
                }`}
              >
                <div className="font-bold text-lg mb-2">Pilihan A</div>
                <p className="text-lg leading-relaxed">{current.optionA}</p>
              </motion.button>

              <motion.button
                onClick={() => handleSelect('B')}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full p-6 rounded-2xl border-2 border-black text-left transition-all ${
                  selected === 'B' ? 'bg-[#60a5fa] text-white shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]' : 'bg-white hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]'
                }`}
              >
                <div className="font-bold text-lg mb-2">Pilihan B</div>
                <p className="text-lg leading-relaxed">{current.optionB}</p>
              </motion.button>
            </div>

            <div className="mt-6 flex gap-3 justify-center">
              <Button onClick={handleNext} variant="outline" className="flex items-center gap-2">
                <RefreshCw className="w-5 h-5" />Lanjut
              </Button>
              <Button onClick={handleShare} variant="outline" className="flex items-center gap-2">
                <Share2 className="w-5 h-5" />Bagikan
              </Button>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
      <AnimatePresence>{toast && <Toast message={toast} onClose={() => setToast(null)} />}</AnimatePresence>
    </div>
  );
}

'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import BackButton from '@/components/ui/BackButton';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import Toast from '@/components/ui/Toast';
import { questions, getCategoryLabel } from '@/data/questions';
import { getNextItem } from '@/lib/game-utils';
import { shareContent, generateShareText } from '@/lib/share';
import { Share2, RefreshCw } from 'lucide-react';
import { Category } from '@/types/game';

const categories: Category[] = ['random', 'deep-talk', 'absurd', 'kenalan', 'percintaan', 'nostalgia'];

export default function PertanyaanPage() {
  const [selectedCategory, setSelectedCategory] = useState<Category>('random');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [shuffledOrder, setShuffledOrder] = useState<string[]>([]);
  const [toast, setToast] = useState<string | null>(null);

  const filteredQuestions = questions.filter(q => 
    selectedCategory === 'random' ? true : q.category === selectedCategory
  );

  const currentQuestion = filteredQuestions.length > 0 
    ? (shuffledOrder.length > 0 
        ? filteredQuestions.find(q => q.id === shuffledOrder[currentIndex]) || filteredQuestions[0]
        : filteredQuestions[0])
    : null;

  const handleNext = () => {
    const result = getNextItem(filteredQuestions, currentIndex, shuffledOrder);
    setCurrentIndex(result.newIndex);
    if (result.newOrder) {
      setShuffledOrder(result.newOrder);
    }
  };

  const handleShare = async () => {
    if (!currentQuestion) return;
    
    const shareText = generateShareText(
      `Pertanyaan: ${currentQuestion.text}`,
      'Pertanyaan Random'
    );
    
    const success = await shareContent(shareText);
    if (success) {
      setToast('Berhasil disalin!');
    }
  };

  const handleCategoryChange = (category: Category) => {
    setSelectedCategory(category);
    setCurrentIndex(0);
    setShuffledOrder([]);
  };

  if (!currentQuestion) {
    return (
      <div className="min-h-screen px-4 py-8">
        <div className="max-w-3xl mx-auto">
          <BackButton />
          <div className="mt-8 text-center">
            <p className="text-lg">Nggak ada pertanyaan yang cocok. Coba kategori lain.</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen px-4 py-8">
      <div className="max-w-3xl mx-auto">
        <BackButton />
        
        <div className="mt-8 mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-black mb-4">
            Pertanyaan Random
          </h1>
          <p className="text-black/70">
            Biar obrolan nggak muter di kerjaan, kuliah, sama mantan.
          </p>
        </div>

        {/* Category Selector */}
        <div className="mb-8 flex flex-wrap gap-2 justify-center">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => handleCategoryChange(category)}
              className={`px-4 py-2 rounded-full font-medium border-2 border-black transition-all ${
                selectedCategory === category
                  ? 'bg-[#c1ff72] shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]'
                  : 'bg-white hover:bg-black/5'
              }`}
            >
              {getCategoryLabel(category)}
            </button>
          ))}
        </div>

        {/* Question Card */}
        <AnimatePresence mode="wait">
          <Card key={currentQuestion.id}>
            <div className="text-center">
              <div className="inline-block px-3 py-1 bg-[#c1ff72] rounded-full text-sm font-medium mb-6">
                {getCategoryLabel(currentQuestion.category)}
              </div>
              
              <motion.p
                key={currentQuestion.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="text-2xl md:text-3xl font-bold leading-relaxed mb-8"
              >
                {currentQuestion.text}
              </motion.p>

              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Button onClick={handleNext} size="lg" className="flex items-center gap-2">
                  <RefreshCw className="w-5 h-5" />
                  Pertanyaan berikutnya
                </Button>
                
                <Button onClick={handleShare} variant="outline" size="lg" className="flex items-center gap-2">
                  <Share2 className="w-5 h-5" />
                  Bagikan
                </Button>
              </div>
            </div>
          </Card>
        </AnimatePresence>

        <div className="mt-8 text-center text-sm text-black/60">
          <p>Tekan pertanyaan berikutnya untuk mendapatkan pertanyaan baru</p>
        </div>
      </div>

      <AnimatePresence>
        {toast && (
          <Toast message={toast} onClose={() => setToast(null)} />
        )}
      </AnimatePresence>
    </div>
  );
}

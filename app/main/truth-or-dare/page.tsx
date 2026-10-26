'use client';

import { useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { RefreshCw, Share2, ShieldCheck, SkipForward, Sparkles, Zap } from 'lucide-react';
import BackButton from '@/components/ui/BackButton';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import Toast from '@/components/ui/Toast';
import { chaosModifiers, randomEvents, truthOrDareItems } from '@/data/truth-or-dare';
import { getRandomItem } from '@/lib/game-utils';
import { shareContent, generateShareText } from '@/lib/share';
import type { ChaosLevel, ChaosModifier, ChallengeType, RandomEvent, TruthOrDareItem } from '@/types/game';

const levels: Array<{ id: ChaosLevel; label: string; description: string }> = [
  { id: 'playful', label: 'Playful Chaos', description: 'Pemanasan yang tetap bikin meja ribut.' },
  { id: 'social', label: 'Social Chaos', description: 'Lebih banyak opini, reaksi, dan interaksi.' },
  { id: 'unhinged', label: 'Unhinged', description: 'Absurd, dramatis, dan sulit ditebak.' },
  { id: 'maximum', label: 'Maximum Chaos', description: 'Untuk kelompok yang sudah nyaman dan siap improvisasi.' },
];

function pickModifier(item: TruthOrDareItem): ChaosModifier | null {
  return getRandomItem(chaosModifiers.filter(modifier => !modifier.types || modifier.types.includes(item.type)));
}

function pickEvent(item: TruthOrDareItem): RandomEvent | null {
  return getRandomItem(randomEvents.filter(randomEvent => !randomEvent.types || randomEvent.types.includes(item.type)));
}

export default function TruthOrDarePage() {
  const [challengeType, setChallengeType] = useState<ChallengeType>('random');
  const [level, setLevel] = useState<ChaosLevel>('playful');
  const [modifierEnabled, setModifierEnabled] = useState(false);
  const [eventEnabled, setEventEnabled] = useState(false);
  const [started, setStarted] = useState(false);
  const [usedIds, setUsedIds] = useState<string[]>([]);
  const [currentId, setCurrentId] = useState<string | null>(null);
  const [modifier, setModifier] = useState<ChaosModifier | null>(null);
  const [event, setEvent] = useState<RandomEvent | null>(null);
  const [lighter, setLighter] = useState(false);
  const [toast, setToast] = useState<string | null>(null);

  const pool = useMemo(() => truthOrDareItems.filter(item => item.level === level && (challengeType === 'random' || item.type === challengeType)), [challengeType, level]);
  const current = pool.find(item => item.id === currentId) ?? null;

  const chooseNext = () => {
    const available = pool.filter(item => !usedIds.includes(item.id) && item.id !== currentId);
    const candidates = available.length ? available : pool.filter(item => item.id !== currentId);
    const next = getRandomItem(candidates);
    if (!next) return;
    setCurrentId(next.id);
    setUsedIds(previous => [...previous.filter(id => id !== next.id), next.id]);
    setLighter(false);
    setModifier(modifierEnabled ? pickModifier(next) : null);
    setEvent(eventEnabled && Math.random() < 0.28 ? pickEvent(next) : null);
  };

  const start = () => {
    setStarted(true);
    setUsedIds([]);
    setCurrentId(null);
    setModifier(null);
    setEvent(null);
    window.setTimeout(chooseNext, 0);
  };

  const changeSetting = <T,>(setter: (value: T) => void, value: T) => {
    setter(value);
    if (started) {
      setStarted(false);
      setCurrentId(null);
      setUsedIds([]);
    }
  };

  const handleShare = async () => {
    if (!current) return;
    const text = generateShareText(`${current.type === 'truth' ? 'Truth' : 'Dare'}: ${current.text}`, 'Truth or Dare');
    if (await shareContent(text)) setToast('Berhasil disalin!');
  };

  if (!started) return (
    <div className="min-h-screen px-4 py-8"><div className="max-w-3xl mx-auto"><BackButton /><header className="mt-8 mb-10 text-center"><div className="inline-flex items-center gap-2 rounded-full border-2 border-black bg-[#c1ff72] px-4 py-2 font-bold"><Sparkles className="w-4 h-4" /> Mode chaos</div><h1 className="text-4xl md:text-5xl font-black mt-4 mb-3">Truth or Dare</h1><p className="text-black/70">Jujur dikit, berani dikit, jangan bikin meja sepi.</p></header><Card><div className="space-y-7"><section><h2 className="text-lg font-bold mb-3">Pilih jenis kartu</h2><div className="grid grid-cols-3 gap-2">{(['truth', 'dare', 'random'] as ChallengeType[]).map(type => <button key={type} onClick={() => changeSetting(setChallengeType, type)} className={`rounded-xl border-2 border-black px-3 py-3 font-bold ${challengeType === type ? 'bg-[#a78bfa] text-white' : 'bg-white'}`}>{type === 'truth' ? '🤔 Truth' : type === 'dare' ? '⚡ Dare' : '🎲 Acak'}</button>)}</div></section><section><h2 className="text-lg font-bold mb-3">Pilih level chaos</h2><div className="grid gap-2 sm:grid-cols-2">{levels.map(item => <button key={item.id} onClick={() => changeSetting(setLevel, item.id)} className={`rounded-xl border-2 border-black p-3 text-left ${level === item.id ? 'bg-[#a78bfa] text-white' : 'bg-white'}`}><strong className="block">{item.label}</strong><span className="text-sm opacity-80">{item.description}</span></button>)}</div></section><section className="grid gap-3 sm:grid-cols-2"><label className="flex cursor-pointer items-start gap-3 rounded-xl border-2 border-black p-4"><input type="checkbox" checked={modifierEnabled} onChange={event => setModifierEnabled(event.target.checked)} className="mt-1 h-5 w-5 accent-[#a78bfa]" /><span><strong className="block">Chaos Modifier</strong><span className="text-sm text-black/70">Satu aturan tambahan acak tiap kartu.</span></span></label><label className="flex cursor-pointer items-start gap-3 rounded-xl border-2 border-black p-4"><input type="checkbox" checked={eventEnabled} onChange={event => setEventEnabled(event.target.checked)} className="mt-1 h-5 w-5 accent-[#a78bfa]" /><span><strong className="block">Random Event</strong><span className="text-sm text-black/70">Kadang muncul plot twist. Tidak tiap ronde.</span></span></label></section><div className="flex items-start gap-2 rounded-xl bg-[#f0fdf4] p-4 text-sm"><ShieldCheck className="mt-0.5 h-5 w-5 shrink-0" /><p>Kamu selalu boleh skip tanpa alasan. Semua tantangan sukarela dan tidak menyentuh privasi.</p></div><Button onClick={start} size="lg" className="flex w-full items-center justify-center gap-2"><Zap className="w-5 h-5" />Mulai chaos</Button></div></Card></div></div>
  );

  if (!current) return <div className="min-h-screen px-4 py-8"><div className="max-w-3xl mx-auto text-center"><BackButton /><p className="mt-16 text-lg">Belum ada kartu yang bisa dimainkan.</p><Button onClick={() => setStarted(false)} className="mt-4">Kembali ke pengaturan</Button></div></div>;

  const displayText = lighter && current.lighterText ? current.lighterText : current.text;
  return <div className="min-h-screen px-4 py-8"><div className="max-w-3xl mx-auto"><BackButton /><div className="mt-8 mb-6 flex items-center justify-between gap-3"><div><p className="text-sm font-bold text-black/60">{levels.find(item => item.id === level)?.label}</p><h1 className="text-3xl font-black">Truth or Dare</h1></div><button onClick={() => setStarted(false)} className="text-sm font-bold underline">Pengaturan</button></div><AnimatePresence mode="wait"><Card key={`${current.id}-${lighter}`}><motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="text-center"><div className={`inline-block rounded-full border-2 border-black px-4 py-2 text-lg font-black ${current.type === 'truth' ? 'bg-blue-400' : 'bg-orange-400'}`}>{current.type === 'truth' ? '🤔 TRUTH' : '⚡ DARE'}</div><p className="mt-6 mb-8 text-2xl font-bold leading-relaxed md:text-3xl">{displayText}</p>{(modifier || event) && <div className="mb-8 grid gap-3 text-left sm:grid-cols-2">{modifier && <div className="rounded-xl border-2 border-black bg-[#fef3c7] p-4"><p className="font-black">⚙️ {modifier.label}</p><p className="text-sm">{modifier.text}</p></div>}{event && <div className="rounded-xl border-2 border-black bg-[#ddd6fe] p-4"><p className="font-black">✨ {event.label}</p><p className="text-sm">{event.text}</p></div>}</div>}<div className="grid gap-3 sm:grid-cols-2"><Button onClick={chooseNext} size="lg" className="flex items-center justify-center gap-2"><RefreshCw className="w-5 h-5" />Kartu berikutnya</Button><Button onClick={chooseNext} variant="outline" size="lg" className="flex items-center justify-center gap-2"><SkipForward className="w-5 h-5" />Lewati saja</Button>{current.type === 'dare' && current.lighterText && <Button onClick={() => setLighter(value => !value)} variant="secondary" size="lg">{lighter ? 'Kembali ke versi asli' : 'Versi lebih ringan'}</Button>}<Button onClick={handleShare} variant="outline" size="lg" className="flex items-center justify-center gap-2"><Share2 className="w-5 h-5" />Bagikan</Button></div><p className="mt-6 text-sm text-black/60">Tidak nyaman? Skip saja. Kamu tidak perlu menjelaskan.</p></motion.div></Card></AnimatePresence></div><AnimatePresence>{toast && <Toast message={toast} onClose={() => setToast(null)} />}</AnimatePresence></div>;
}
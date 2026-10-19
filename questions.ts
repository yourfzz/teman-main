import { Question } from '@/types/game';

export const questions: Question[] = [
  { id: 'r1', text: 'Kalau bisa langsung jago satu hal tanpa belajar, kamu pilih apa?', category: 'random' },
  { id: 'r2', text: 'Apa hal paling receh yang bisa bikin mood kamu balik?', category: 'random' },
  { id: 'r3', text: 'Kalau hidupmu punya tombol undo, kejadian apa yang mau kamu ulang?', category: 'random' },
  { id: 'r4', text: 'Makanan apa yang nggak pernah bikin kamu bosen?', category: 'random' },
  { id: 'r5', text: 'Kalau bisa jadi orang lain selama sehari, siapa yang kamu pilih?', category: 'random' },
  { id: 'r6', text: 'Apa soundtrack hidup kamu kalau kehidupan ini film?', category: 'random' },
  { id: 'r7', text: 'Skill yang pengin kamu pelajari tapi belum sempat?', category: 'random' },
  { id: 'r8', text: 'Kalau bisa hapus satu kebiasaan buruk, apa yang kamu pilih?', category: 'random' },
  { id: 'r9', text: 'Apa hal kecil yang bikin hari kamu langsung berasa bagus?', category: 'random' },
  { id: 'r10', text: 'Kalau dunia tiba-tiba jadi film zombie, strategi bertahan hidup kamu apa?', category: 'random' },
  { id: 'r11', text: 'Red flag apa yang langsung bikin kamu mundur dari seseorang?', category: 'random' },
  { id: 'r12', text: 'Apa mitos atau takhayul yang kamu masih percaya sampai sekarang?', category: 'random' },
  { id: 'r13', text: 'Kalau ada yang ngasih kamu 100 juta tapi harus dihabiskan dalam sehari, kamu beli apa?', category: 'random' },
  { id: 'r14', text: 'Siapa tokoh fiksi yang paling kamu relate sama kehidupanmu?', category: 'random' },
  { id: 'r15', text: 'Kalau bisa pindah ke kota atau negara mana pun, kamu pilih mana?', category: 'random' },
  { id: 'd1', text: 'Kamu lebih takut gagal atau takut nggak pernah mencoba?', category: 'deep-talk' },
  { id: 'd2', text: 'Apa hal yang pengin kamu pahami dari dirimu sendiri?', category: 'deep-talk' },
  { id: 'd3', text: 'Kapan terakhir kali kamu merasa benar-benar bangga sama diri sendiri?', category: 'deep-talk' },
  { id: 'a1', text: 'Kalau hewan peliharaanmu bisa ngomong, rahasia apa yang bakal dia bongkar?', category: 'absurd' },
  { id: 'a2', text: 'Kalau semua orang harus punya musik latar saat berjalan, lagu kamu apa?', category: 'absurd' },
  { id: 'a3', text: 'Kalau jadi hantu, siapa orang pertama yang bakal kamu ganggu?', category: 'absurd' },
  { id: 'k1', text: 'Kesan pertama orang tentang kamu biasanya benar atau meleset?', category: 'kenalan' },
  { id: 'k2', text: 'Kebiasaan kecil apa yang paling menggambarkan dirimu?', category: 'kenalan' },
  { id: 'p1', text: 'Menurut kamu, lebih penting nyaman atau deg-degan?', category: 'percintaan' },
  { id: 'p2', text: 'Apa tanda seseorang benar-benar menghargai kamu?', category: 'percintaan' },
  { id: 'n1', text: 'Momen masa sekolah apa yang paling kamu kangenin?', category: 'nostalgia' },
  { id: 'n2', text: 'Permainan masa kecil apa yang pengin kamu mainkan lagi?', category: 'nostalgia' },
];

export const getCategoryLabel = (category: string): string => {
  const labels: Record<string, string> = {
    'random': 'Random',
    'deep-talk': 'Deep Talk',
    'absurd': 'Absurd',
    'kenalan': 'Kenalan',
    'percintaan': 'Percintaan',
    'nostalgia': 'Nostalgia',
  };
  return labels[category] || category;
};
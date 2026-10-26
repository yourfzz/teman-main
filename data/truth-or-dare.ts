import type { ChaosModifier, RandomEvent, TruthOrDareItem } from '@/types/game';

const truthItems: TruthOrDareItem[] = [
  { id: 't1', level: 'playful', category: 'confession', type: 'truth', text: 'Apa kebiasaan kecilmu yang paling mungkin bikin teman serumah menghela napas panjang?' },
  { id: 't2', level: 'playful', category: 'embarrassing', type: 'truth', text: 'Apa alasan paling tidak masuk akal yang pernah kamu pakai untuk membatalkan rencana?' },
  { id: 't3', level: 'playful', category: 'hypothetical', type: 'truth', text: 'Kalau hidupmu punya tombol undo, momen receh apa yang langsung kamu hapus?' },
  { id: 't4', level: 'playful', category: 'unpopular-opinion', type: 'truth', text: 'Makanan atau kebiasaan populer apa yang menurutmu diam-diam cuma menang branding?' },
  { id: 't5', level: 'playful', category: 'social-dynamics', type: 'truth', text: 'Di kelompok ini, siapa yang paling mungkin punya kehidupan rahasia? Jelaskan teori kamu.' },
  { id: 't6', level: 'playful', category: 'confession', type: 'truth', text: 'Apa kebohongan paling receh yang pernah kamu pertahankan terlalu lama?' },
  { id: 't7', level: 'social', category: 'social-dynamics', type: 'truth', text: 'Apa kesan pertamamu tentang seseorang di sini yang ternyata berubah total setelah kamu mengenalnya?' },
  { id: 't8', level: 'social', category: 'hot-seat', type: 'truth', text: 'Siapa di sini yang paling sulit ditebak isi pikirannya, dan apa buktinya?' },
  { id: 't9', level: 'social', category: 'unpopular-opinion', type: 'truth', text: 'Opini receh apa yang siap kamu bela meskipun satu meja langsung menggelengkan kepala?' },
  { id: 't10', level: 'social', category: 'embarrassing', type: 'truth', text: 'Ceritakan momen ketika kamu mencoba terlihat keren tetapi semesta memilih menjadikanmu bahan cerita.' },
  { id: 't11', level: 'social', category: 'hypothetical', type: 'truth', text: 'Kalau kelompok ini jadi perusahaan, posisi apa yang paling tidak boleh kamu pegang? Kenapa?' },
  { id: 't12', level: 'social', category: 'deep-talk', type: 'truth', text: 'Hal kecil apa yang belakangan ini membuat kamu merasa hidupmu ternyata baik-baik saja?' },
  { id: 't13', level: 'unhinged', category: 'confession', type: 'truth', text: 'Apa hal paling tidak masuk akal yang pernah kamu lakukan hanya karena ingin terlihat keren?' },
  { id: 't14', level: 'unhinged', category: 'hypothetical', type: 'truth', text: 'Kalau kamu dituduh sebagai dalang kekacauan di kota, bukti paling meyakinkan apa yang akan dipakai jaksa?' },
  { id: 't15', level: 'unhinged', category: 'social-dynamics', type: 'truth', text: 'Siapa di sini yang paling mungkin selamat dari kiamat zombie, dan siapa yang kalah karena terlalu banyak rapat?' },
  { id: 't16', level: 'unhinged', category: 'unpopular-opinion', type: 'truth', text: 'Apa pendapatmu yang terdengar seperti bait, tetapi sebenarnya sudah kamu pikirkan matang-matang?' },
  { id: 't17', level: 'unhinged', category: 'embarrassing', type: 'truth', text: 'Apa momen paling canggung yang sekarang bisa kamu ceritakan sambil tertawa?' },
  { id: 't18', level: 'unhinged', category: 'hot-seat', type: 'truth', text: 'Kalau setiap orang di sini punya efek suara saat muncul, efek suaramu apa?' },
  { id: 't19', level: 'maximum', category: 'deep-talk', type: 'truth', text: 'Keputusan impulsif apa yang pernah mengubah arah hidupmu, walau awalnya terlihat seperti ide buruk?' },
  { id: 't20', level: 'maximum', category: 'social-dynamics', type: 'truth', text: 'Apa hal yang pernah kamu pikirkan tentang dinamika kelompok ini tetapi belum pernah kamu ucapkan?' },
  { id: 't21', level: 'maximum', category: 'hypothetical', type: 'truth', text: 'Kalau besok kamu harus memulai hidup dengan reputasi baru, cerita palsu apa yang paling mudah dipercaya orang?' },
  { id: 't22', level: 'maximum', category: 'confession', type: 'truth', text: 'Kebiasaan rahasia apa yang terdengar aneh, tetapi sebenarnya sangat membantu kamu melewati hari?' },
  { id: 't23', level: 'maximum', category: 'deep-talk', type: 'truth', text: 'Apa mimpi yang masih kamu simpan karena belum siap mendengar komentar orang lain?' },
  { id: 't24', level: 'maximum', category: 'unpopular-opinion', type: 'truth', text: 'Hal apa yang kamu pura-pura paham hanya supaya tidak perlu menghentikan obrolan?' },
];

const dareItems: TruthOrDareItem[] = [
  { id: 'd1', level: 'playful', category: 'act-it-out', type: 'dare', text: 'Peragakan cara kamu bertingkah saat melihat orang yang kamu kagumi, tanpa boleh bicara.', lighterText: 'Peragakan ekspresi kaget melihat makanan favoritmu.' },
  { id: 'd2', level: 'playful', category: 'creative', type: 'dare', text: 'Jelaskan kenapa kamu layak menjadi presiden tongkrongan selama 30 detik.', lighterText: 'Jelaskan kenapa kamu layak menjadi menteri camilan selama 15 detik.' },
  { id: 'd3', level: 'playful', category: 'social-performance', type: 'dare', text: 'Jual benda paling dekat denganmu seolah-olah benda itu teknologi revolusioner.', lighterText: 'Buat slogan singkat untuk benda paling dekat denganmu.' },
  { id: 'd4', level: 'playful', category: 'absurd-scenario', type: 'dare', text: 'Lakukan tutorial memasak makanan imajiner dengan ekspresi chef profesional.', lighterText: 'Jelaskan resep makanan imajiner dalam tiga langkah.' },
  { id: 'd5', level: 'playful', category: 'improv', type: 'dare', text: 'Tirukan gaya bicara karakter film sampai pemain lain berhasil menebak.', lighterText: 'Tirukan suara robot yang baru belajar berteman.' },
  { id: 'd6', level: 'playful', category: 'creative', type: 'dare', text: 'Buat slogan iklan untuk persahabatan kalian yang terdengar terlalu mahal untuk dipercaya.', lighterText: 'Buat slogan lima kata untuk kelompok ini.' },
  { id: 'd7', level: 'social', category: 'group-interaction', type: 'dare', text: 'Berikan penghargaan paling tidak penting kepada setiap pemain, lengkap dengan pidato singkat.', lighterText: 'Berikan satu penghargaan lucu kepada pemain yang bersedia.' },
  { id: 'd8', level: 'social', category: 'social-performance', type: 'dare', text: 'Wawancarai satu pemain seolah-olah dia baru terlibat skandal paling konyol tahun ini.', lighterText: 'Ajukan tiga pertanyaan sebagai pembawa acara berita.' },
  { id: 'd9', level: 'social', category: 'improv', type: 'dare', text: 'Lakukan debat serius dengan pemain lain tentang apakah sendok adalah penemuan paling penting dalam sejarah.', lighterText: 'Bela sendok sebagai benda paling penting selama 15 detik.' },
  { id: 'd10', level: 'social', category: 'creative', type: 'dare', text: 'Buat ramalan masa depan setiap pemain berdasarkan benda yang mereka pegang.', lighterText: 'Buat satu ramalan untuk benda di dekatmu.' },
  { id: 'd11', level: 'social', category: 'group-interaction', type: 'dare', text: 'Minta kelompok memilih dua kata acak, lalu buat cerita yang menghubungkan keduanya dalam 20 detik.', lighterText: 'Gunakan satu kata pilihan kelompok dalam cerita 10 detik.' },
  { id: 'd12', level: 'social', category: 'act-it-out', type: 'dare', text: 'Peragakan seseorang yang baru menemukan bahwa seluruh hidupnya ternyata acara komedi.', lighterText: 'Peragakan kejutan terbesar yang bisa kamu bayangkan.' },
  { id: 'd13', level: 'unhinged', category: 'absurd-scenario', type: 'dare', text: 'Lakukan konferensi pers untuk menjelaskan kenapa kamu terlambat tiga menit ke sebuah acara yang bahkan tidak ada.', lighterText: 'Berikan satu alasan dramatis untuk keterlambatan fiktif.' },
  { id: 'd14', level: 'unhinged', category: 'creative', type: 'dare', text: 'Buat drama tiga babak tentang konflik antara sandal kiri dan sandal kanan.', lighterText: 'Buat akhir tragis untuk konflik dua benda di dekatmu.' },
  { id: 'd15', level: 'unhinged', category: 'social-performance', type: 'dare', text: 'Berikan presentasi startup selama 20 detik untuk bisnis yang sama sekali tidak masuk akal.', lighterText: 'Buat nama dan slogan bisnis paling aneh selama 10 detik.' },
  { id: 'd16', level: 'unhinged', category: 'improv', type: 'dare', text: 'Jelaskan cara menyelamatkan pesta dari invasi bebek sambil tetap terdengar seperti narator dokumenter alam.', lighterText: 'Jelaskan satu cara menghadapi bebek fiktif dengan suara dramatis.' },
  { id: 'd17', level: 'unhinged', category: 'group-interaction', type: 'dare', text: 'Pilih pemain yang bersedia menjadi saksi. Kalian harus menjual ide liburan ke tempat yang tidak mungkin didatangi.', lighterText: 'Jual ide liburan ke tempat paling aneh selama 15 detik.' },
  { id: 'd18', level: 'unhinged', category: 'creative', type: 'dare', text: 'Jelaskan rutinitas pagimu, tetapi setiap kalimat harus terdengar seperti trailer film horor.', lighterText: 'Jelaskan cara membuat teh dengan nada trailer film.' },
  { id: 'd19', level: 'maximum', category: 'creative', type: 'dare', text: 'Buat trailer film tentang kehidupan salah satu pemain yang bersedia, lengkap dengan judul dan narasi dramatis.', lighterText: 'Buat judul film tentang hidupmu dan satu kalimat trailernya.' },
  { id: 'd20', level: 'maximum', category: 'improv', type: 'dare', text: 'Biarkan kelompok memilih tiga kata acak. Buat pidato motivasi 30 detik yang memakai semuanya secara alami.', lighterText: 'Pakai dua kata acak dalam pidato 15 detik.' },
  { id: 'd21', level: 'maximum', category: 'group-interaction', type: 'dare', text: 'Pimpin rapat darurat untuk menyelamatkan benda paling dekat denganmu dari tuduhan pengkhianatan.', lighterText: 'Bela satu benda dari tuduhan yang sangat konyol.' },
  { id: 'd22', level: 'maximum', category: 'absurd-scenario', type: 'dare', text: 'Mainkan adegan ketika kamu harus meyakinkan alien bahwa kelompok ini layak dijadikan duta Bumi.', lighterText: 'Yakinkan alien fiktif bahwa kamu punya keahlian penting.' },
  { id: 'd23', level: 'maximum', category: 'act-it-out', type: 'dare', text: 'Lakukan adegan perpisahan paling dramatis dengan benda di sebelahmu tanpa merusaknya.', lighterText: 'Ucapkan salam perpisahan dramatis kepada benda di dekatmu.' },
  { id: 'd24', level: 'maximum', category: 'social-performance', type: 'dare', text: 'Jadi komentator pertandingan ketika dua pemain berdebat tentang topik receh pilihan kelompok.', lighterText: 'Komentari satu aksi sederhana seperti pertandingan final.' },
];

export const chaosModifiers: ChaosModifier[] = [
  { id: 'no-laughing', label: 'Tanpa tertawa', text: 'Selesaikan tantangan tanpa tertawa.' },
  { id: 'speedrun', label: 'Speedrun', text: 'Selesaikan inti tantangan dalam 15 detik.' },
  { id: 'dramatic', label: 'Mode dramatis', text: 'Lakukan semuanya seperti adegan final film.' },
  { id: 'npc', label: 'Mode NPC', text: 'Bicara seperti karakter game NPC sampai tantangan selesai.' },
  { id: 'plot-twist', label: 'Plot twist', text: 'Tambahkan satu elemen kejutan yang masih aman dan masuk akal.' },
  { id: 'duet', label: 'Duet chaos', text: 'Ajak satu pemain yang bersedia untuk membantu.', types: ['dare'] },
  { id: 'one-take', label: 'Sekali jalan', text: 'Mulai sekali dan jangan mengulang dari awal.' },
  { id: 'wrong-answers', label: 'Jawaban salah saja', text: 'Jawab dengan versi paling tidak masuk akal.', types: ['truth'] },
  { id: 'genre-swap', label: 'Tukar genre', text: 'Lakukan seolah-olah ini film horor, sinetron, atau dokumenter alam.', types: ['dare'] },
];

export const randomEvents: RandomEvent[] = [
  { id: 'plot-twist', label: 'Plot Twist', text: 'Kelompok memilih satu gaya tambahan: dramatis, NPC, atau dokumenter alam.' },
  { id: 'double-trouble', label: 'Double Trouble', text: 'Tambahkan satu kalimat atau aksi pendek yang masih berkaitan dengan kartu ini.' },
  { id: 'tag-team', label: 'Tag Team', text: 'Pemain boleh mengajak satu orang yang bersedia. Tidak ada yang wajib ikut.', types: ['dare'] },
  { id: 'audience-choice', label: 'Audience Choice', text: 'Kelompok memilih: versi normal atau versi lebih ringan.' },
  { id: 'sudden-chaos', label: 'Sudden Chaos', text: 'Kelompok memilih satu modifier yang belum muncul di ronde ini.' },
  { id: 'role-reversal', label: 'Role Reversal', text: 'Jawab atau lakukan tantangan sebagai karakter fiktif yang dipilih kelompok.' },
];

export const truthOrDareItems: TruthOrDareItem[] = [...truthItems, ...dareItems];
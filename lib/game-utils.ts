// Utility functions untuk pengacakan dan manajemen game state

export function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

export function getRandomItem<T extends { id: string }>(
  items: T[],
  usedIds: string[] = []
): T | null {
  const availableItems = items.filter(item => !usedIds.includes(item.id));
  
  if (availableItems.length === 0) {
    // Semua sudah digunakan, reset dan mulai lagi
    return items[Math.floor(Math.random() * items.length)];
  }
  
  const randomIndex = Math.floor(Math.random() * availableItems.length);
  return availableItems[randomIndex];
}

export function getNextItem<T extends { id: string }>(
  items: T[],
  currentIndex: number,
  shuffledOrder?: string[]
): { item: T; newIndex: number; newOrder?: string[] } {
  if (!shuffledOrder || shuffledOrder.length === 0) {
    // Buat urutan acak baru
    const newOrder = shuffleArray(items.map(item => item.id));
    const nextIndex = 0;
    const nextItem = items.find(item => item.id === newOrder[nextIndex]);
    
    return {
      item: nextItem || items[0],
      newIndex: nextIndex,
      newOrder
    };
  }
  
  const nextIndex = (currentIndex + 1) % shuffledOrder.length;
  const nextItem = items.find(item => item.id === shuffledOrder[nextIndex]);
  
  // Jika sudah habis satu putaran, buat shuffle baru
  if (nextIndex === 0) {
    const newOrder = shuffleArray(items.map(item => item.id));
    const newItem = items.find(item => item.id === newOrder[0]);
    return {
      item: newItem || items[0],
      newIndex: 0,
      newOrder
    };
  }
  
  return {
    item: nextItem || items[0],
    newIndex: nextIndex,
    newOrder: shuffledOrder
  };
}

export function filterByCategory<T extends { category?: string }>(
  items: T[],
  category: string
): T[] {
  if (category === 'random' || !category) {
    return items;
  }
  return items.filter(item => item.category === category);
}

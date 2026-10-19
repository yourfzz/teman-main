// Storage utilities untuk localStorage dengan safe handling

export function saveFavorite(gameType: string, itemId: string): void {
  if (typeof window === 'undefined') return;
  
  try {
    const key = `teman-main-favorites-${gameType}`;
    const existing = getFavorites(gameType);
    
    if (!existing.includes(itemId)) {
      const updated = [...existing, itemId];
      localStorage.setItem(key, JSON.stringify(updated));
    }
  } catch (error) {
    console.error('Failed to save favorite:', error);
  }
}

export function removeFavorite(gameType: string, itemId: string): void {
  if (typeof window === 'undefined') return;
  
  try {
    const key = `teman-main-favorites-${gameType}`;
    const existing = getFavorites(gameType);
    const updated = existing.filter(id => id !== itemId);
    localStorage.setItem(key, JSON.stringify(updated));
  } catch (error) {
    console.error('Failed to remove favorite:', error);
  }
}

export function getFavorites(gameType: string): string[] {
  if (typeof window === 'undefined') return [];
  
  try {
    const key = `teman-main-favorites-${gameType}`;
    const stored = localStorage.getItem(key);
    return stored ? JSON.parse(stored) : [];
  } catch (error) {
    console.error('Failed to get favorites:', error);
    return [];
  }
}

export function isFavorite(gameType: string, itemId: string): boolean {
  const favorites = getFavorites(gameType);
  return favorites.includes(itemId);
}

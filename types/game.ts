// Type definitions untuk semua permainan

export type Category = 
  | 'random'
  | 'deep-talk'
  | 'absurd'
  | 'kenalan'
  | 'percintaan'
  | 'nostalgia';

export type WouldYouRatherCategory = 
  | 'absurd'
  | 'kehidupan'
  | 'pertemanan'
  | 'percintaan'
  | 'masa-depan';

export type DifficultyLevel = 'santai' | 'seru' | 'berani';

export type ChallengeType = 'truth' | 'dare' | 'random';

export interface Question {
  id: string;
  text: string;
  category: Category;
}

export interface TruthOrDareItem {
  id: string;
  text: string;
  type: 'truth' | 'dare';
  level: DifficultyLevel;
}

export interface WouldYouRatherQuestion {
  id: string;
  category: WouldYouRatherCategory;
  optionA: string;
  optionB: string;
}

export interface SiPalingStatement {
  id: string;
  text: string;
}

export interface Player {
  id: string;
  name: string;
}

export interface GameState {
  currentIndex: number;
  usedIds: string[];
  selectedCategory?: string;
}

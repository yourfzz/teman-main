// Type definitions untuk semua permainan

export type Category = 
  | 'random'
  | 'deep-talk'
  | 'absurd'
  | 'kenalan'
  | 'percintaan'
  | 'nostalgia'
  | 'ice-breaker'
  | 'relationship'
  | 'hot-takes';

export type WouldYouRatherCategory = 
  | 'absurd'
  | 'kehidupan'
  | 'pertemanan'
  | 'percintaan'
  | 'masa-depan';

export type DifficultyLevel = 'santai' | 'seru' | 'berani';

export type ChaosLevel = 'playful' | 'social' | 'unhinged' | 'maximum';

export type TruthOrDareCategory =
  | 'confession'
  | 'hot-seat'
  | 'hypothetical'
  | 'social-dynamics'
  | 'embarrassing'
  | 'unpopular-opinion'
  | 'deep-talk'
  | 'act-it-out'
  | 'creative'
  | 'social-performance'
  | 'group-interaction'
  | 'improv'
  | 'reverse-challenge'
  | 'absurd-scenario';

export type ChaosModifierId =
  | 'no-laughing'
  | 'speedrun'
  | 'dramatic'
  | 'npc'
  | 'plot-twist'
  | 'duet'
  | 'one-take'
  | 'wrong-answers'
  | 'genre-swap';

export type RandomEventId =
  | 'plot-twist'
  | 'double-trouble'
  | 'tag-team'
  | 'audience-choice'
  | 'sudden-chaos'
  | 'role-reversal';

export type ChallengeType = 'truth' | 'dare' | 'random';

export interface Question {
  id: string;
  text: string;
  category: Category;
  followUps?: string[];
  special?: boolean;
}

export interface TruthOrDareItem {
  id: string;
  text: string;
  type: 'truth' | 'dare';
  level: ChaosLevel;
  category: TruthOrDareCategory;
  lighterText?: string;
}

export interface ChaosModifier {
  id: ChaosModifierId;
  label: string;
  text: string;
  types?: Array<'truth' | 'dare'>;
}

export interface RandomEvent {
  id: RandomEventId;
  label: string;
  text: string;
  types?: Array<'truth' | 'dare'>;
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

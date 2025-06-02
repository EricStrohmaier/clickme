export type ReactionType = 'sound' | 'text' | 'image' | 'voice' | 'combined';

export interface Reaction {
  id: string;
  type: ReactionType;
  mode?: 'normal' | 'roast';
  content: {
    text?: string;
    soundSrc?: string;
    imageSrc?: string;
    voiceText?: string;
  };
}

export interface Milestone {
  clickCount: number;
  reaction: Reaction;
}
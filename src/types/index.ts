export type DifficultyLevel = 'A1' | 'A2' | 'B1' | 'B1+' | 'B2' | 'C1';

export interface VocabularyCategory {
  id: string;
  name: string;
  icon: string; // Lucide icon name
  color: string; // CSS color classes/gradients
  description: string;
}

export interface VocabularyWord {
  id: string;
  word: string;
  ipa: string;
  meaning: string;
  meaningKhmer?: string; // Khmer translation of the meaning
  partOfSpeech: string;
  exampleSentence: string;
  exampleKhmer?: string; // Khmer translation of the example sentence
  synonyms: string[];
  antonyms: string[];
  image: string; // URL or local path placeholder
  audioPlaceholder: string; // Word representation for TTS
  difficulty: DifficultyLevel;
  category: string; // ID of the category
}

export interface GrammarExample {
  english: string;
  translation: string;
  translationKhmer?: string; // Khmer translation of the grammar example
  note?: string;
}

export interface CommonMistake {
  incorrect: string;
  correct: string;
  explanation: string;
}

export interface PracticeQuestion {
  id: string;
  question: string;
  options: string[];
  correctAnswer: string;
}

export interface GrammarLesson {
  id: string;
  title: string;
  level: DifficultyLevel;
  shortDesc: string;
  shortDescKhmer?: string; // Khmer translation of the short description
  explanation: string; // Markdown or rich text paragraphs
  explanationKhmer?: string; // Khmer translation of the grammar explanation
  examples: GrammarExample[];
  tips: string[];
  commonMistakes: CommonMistake[];
  summary: string;
  summaryKhmer?: string; // Khmer translation of the summary
  practiceQuestions: PracticeQuestion[];
}

export type QuizQuestionType = 'multiple-choice' | 'fill-in-the-blank' | 'matching' | 'sentence-ordering';

export interface MatchingPair {
  left: string; // e.g. English word
  right: string; // e.g. Native meaning
}

export interface QuizQuestion {
  id: string;
  type: QuizQuestionType;
  question: string;
  options?: string[]; // Multiple choice options or draggable word blocks
  correctAnswer?: string; // Used for MC and Fill in the blank (case insensitive)
  matchingPairs?: MatchingPair[]; // Used only for 'matching' questions
  sentenceWords?: string[]; // Used only for 'sentence-ordering' (e.g. ['She', 'is', 'a', 'teacher'])
  orderedAnswer?: string[]; // Used only for 'sentence-ordering' (correct order of sentenceWords)
}

export interface Quiz {
  id: string;
  title: string;
  description: string;
  type: 'vocabulary' | 'grammar' | 'mixed';
  category: string; // Category name or ID
  difficulty: DifficultyLevel;
  questions: QuizQuestion[];
  xpReward: number;
}

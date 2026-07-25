import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { useToastStore } from './toastStore';

export interface QuizAttempt {
  score: number;
  total: number;
  date: string;
  xpGained: number;
}

export interface ProgressState {
  learnedWords: string[];
  completedLessons: string[];
  quizScores: Record<string, QuizAttempt[]>;
  streak: number;
  lastActiveDate: string | null;
  xp: number;
  fontSize: 'sm' | 'base' | 'lg' | 'xl';
  soundEnabled: boolean;
  geminiApiKey: string;
  
  // Actions
  markWordLearned: (wordId: string) => void;
  unmarkWordLearned: (wordId: string) => void;
  completeLesson: (lessonId: string) => void;
  saveQuizResult: (quizId: string, score: number, total: number, xpReward: number) => void;
  updateStreak: () => void;
  addXp: (amount: number) => void;
  setFontSize: (size: 'sm' | 'base' | 'lg' | 'xl') => void;
  setSoundEnabled: (enabled: boolean) => void;
  setGeminiApiKey: (key: string) => void;
  resetProgress: () => void;
}

export const useProgressStore = create<ProgressState>()(
  persist(
    (set, get) => ({
      learnedWords: [],
      completedLessons: [],
      quizScores: {},
      streak: 0,
      lastActiveDate: null,
      xp: 0,
      fontSize: 'base',
      soundEnabled: true,
      geminiApiKey: '',

      markWordLearned: (wordId) => {
        const { learnedWords } = get();
        if (!learnedWords.includes(wordId)) {
          set({ learnedWords: [...learnedWords, wordId] });
          get().addXp(5); // Reward 5 XP for learning a word
          useToastStore.getState().addToast('Marked as learned! (+5 XP)', 'xp');
        }
      },

      unmarkWordLearned: (wordId) => {
        const { learnedWords } = get();
        set({ learnedWords: learnedWords.filter((id) => id !== wordId) });
        useToastStore.getState().addToast('Removed from learned list', 'info');
      },

      completeLesson: (lessonId) => {
        const { completedLessons } = get();
        if (!completedLessons.includes(lessonId)) {
          set({ completedLessons: [...completedLessons, lessonId] });
          get().addXp(15); // Reward 15 XP for completing a grammar lesson
          useToastStore.getState().addToast('Lesson completed! (+15 XP)', 'success');
        }
      },

      saveQuizResult: (quizId, score, total, xpReward) => {
        const { quizScores } = get();
        const date = new Date().toISOString().split('T')[0];
        const newAttempt: QuizAttempt = { score, total, date, xpGained: xpReward };
        
        const previousAttempts = quizScores[quizId] || [];
        set({
          quizScores: {
            ...quizScores,
            [quizId]: [...previousAttempts, newAttempt]
          }
        });
        
        get().addXp(xpReward);
        useToastStore.getState().addToast(`Quiz completed! (+${xpReward} XP)`, 'xp');
        get().updateStreak();
      },

      updateStreak: () => {
        const { streak, lastActiveDate } = get();
        const today = new Date().toISOString().split('T')[0];
        
        if (lastActiveDate === today) {
          // Already active today, streak remains same
          return;
        }

        if (lastActiveDate === null) {
          set({ streak: 1, lastActiveDate: today });
          useToastStore.getState().addToast('First day active! Streak started! 🔥', 'success');
          return;
        }

        const lastDate = new Date(lastActiveDate);
        const currentDate = new Date(today);
        const diffTime = Math.abs(currentDate.getTime() - lastDate.getTime());
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

        if (diffDays === 1) {
          // Consecutive day, increment streak
          const newStreak = streak + 1;
          set({ streak: newStreak, lastActiveDate: today });
          useToastStore.getState().addToast(`Streak extended! ${newStreak} days 🔥`, 'success');
        } else if (diffDays > 1) {
          // Streak broken, reset to 1
          set({ streak: 1, lastActiveDate: today });
          useToastStore.getState().addToast('Streak restarted! Keep it up 🔥', 'info');
        }
      },

      addXp: (amount) => {
        set((state) => ({ xp: state.xp + amount }));
      },

      setFontSize: (fontSize) => {
        set({ fontSize });
      },

      setSoundEnabled: (soundEnabled) => {
        set({ soundEnabled });
      },

      setGeminiApiKey: (geminiApiKey) => {
        set({ geminiApiKey });
        useToastStore.getState().addToast(
          geminiApiKey ? 'Gemini API Key saved! AI Tutor enabled 🚀' : 'API Key removed. Local Tutor mode.',
          'success'
        );
      },

      resetProgress: () => {
        set({
          learnedWords: [],
          completedLessons: [],
          quizScores: {},
          streak: 0,
          lastActiveDate: null,
          xp: 0,
          fontSize: 'base',
          soundEnabled: true,
          geminiApiKey: ''
        });
        useToastStore.getState().addToast('Progress reset successfully', 'info');
      }
    }),
    {
      name: 'english-learn-progress'
    }
  )
);

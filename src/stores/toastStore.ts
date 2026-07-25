import { create } from 'zustand';

export interface ToastMessage {
  id: string;
  message: string;
  type: 'success' | 'info' | 'xp' | 'error';
}

interface ToastStore {
  toasts: ToastMessage[];
  addToast: (message: string, type?: 'success' | 'info' | 'xp' | 'error') => void;
  removeToast: (id: string) => void;
}

export const useToastStore = create<ToastStore>((set) => ({
  toasts: [],
  addToast: (message, type = 'info') => {
    const id = Math.random().toString(36).substring(2, 9);
    set((state) => ({
      toasts: [...state.toasts, { id, message, type }]
    }));
    
    // Automatically clear toast after 3.5 seconds
    setTimeout(() => {
      set((state) => ({
        toasts: state.toasts.filter((t) => t.id !== id)
      }));
    }, 3500);
  },
  removeToast: (id) => {
    set((state) => ({
      toasts: state.toasts.filter((t) => t.id !== id)
    }));
  }
}));

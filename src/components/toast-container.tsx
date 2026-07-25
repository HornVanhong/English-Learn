'use client';

import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useToastStore } from '@/stores/toastStore';
import { X, Trophy, Sparkles, Flame, Info, AlertTriangle } from 'lucide-react';
import { cn } from '@/lib/utils';

export function ToastContainer() {
  const { toasts, removeToast } = useToastStore();

  const getToastStyle = (type: string) => {
    switch (type) {
      case 'xp':
        return {
          bg: 'bg-amber-500 border-amber-600 text-white',
          icon: <Trophy className="h-4.5 w-4.5 fill-current" />
        };
      case 'success':
        return {
          bg: 'bg-emerald-500 border-emerald-600 text-white',
          icon: <Sparkles className="h-4.5 w-4.5" />
        };
      case 'error':
        return {
          bg: 'bg-rose-500 border-rose-600 text-white',
          icon: <AlertTriangle className="h-4.5 w-4.5" />
        };
      case 'info':
      default:
        return {
          bg: 'bg-blue-500 border-blue-600 text-white',
          icon: <Info className="h-4.5 w-4.5" />
        };
    }
  };

  return (
    <div className="fixed top-6 right-6 z-50 flex flex-col gap-2.5 max-w-sm w-full pointer-events-none">
      <AnimatePresence>
        {toasts.map((toast) => {
          const style = getToastStyle(toast.type);

          return (
            <motion.div
              key={toast.id}
              layout
              initial={{ opacity: 0, y: -20, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9, y: -10 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className={cn(
                "pointer-events-auto border rounded-2xl p-4 shadow-xl flex items-center justify-between gap-3 text-xs font-bold leading-normal text-left",
                style.bg
              )}
            >
              <div className="flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-white/20 shrink-0">
                  {style.icon}
                </div>
                <p className="font-extrabold pr-2">{toast.message}</p>
              </div>

              <button
                onClick={() => removeToast(toast.id)}
                className="flex h-6 w-6 items-center justify-center rounded-lg hover:bg-white/10 text-white/80 hover:text-white transition-all shrink-0"
              >
                <X className="h-3.5 w-3.5" />
              </button>
            </motion.div>
          );
        })}
      </AnimatePresence>
    </div>
  );
}

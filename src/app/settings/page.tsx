'use client';

import React, { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { 
  Sun, 
  Moon, 
  Laptop, 
  Trash2, 
  AlertTriangle, 
  Check, 
  Sparkles,
  ChevronRight,
  Sliders
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useProgressStore } from '@/stores/progressStore';
import { cn } from '@/lib/utils';

export default function SettingsPage() {
  const { theme, setTheme } = useTheme();
  const { fontSize, setFontSize, resetProgress, geminiApiKey, setGeminiApiKey } = useProgressStore();
  const [mounted, setMounted] = useState(false);
  const [showConfirmReset, setShowConfirmReset] = useState(false);
  const [resetDone, setResetDone] = useState(false);
  const [apiKeyInput, setApiKeyInput] = useState('');

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (mounted) {
      setApiKeyInput(geminiApiKey);
    }
  }, [geminiApiKey, mounted]);

  if (!mounted) {
    return (
      <div className="h-96 flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-emerald-500" />
      </div>
    );
  }

  const handleReset = () => {
    resetProgress();
    setShowConfirmReset(false);
    setResetDone(true);
    setTimeout(() => {
      setResetDone(false);
    }, 3000);
  };

  const fontSizes = [
    { id: 'sm', name: 'Small', sizeText: '14px' },
    { id: 'base', name: 'Standard (Recommended)', sizeText: '16px' },
    { id: 'lg', name: 'Large', sizeText: '18px' },
    { id: 'xl', name: 'Extra Large', sizeText: '20px' }
  ];

  return (
    <div className="flex flex-col gap-6 pb-12 w-full max-w-2xl mx-auto">
      
      {/* 1. Theme Configuration Card */}
      <section className="rounded-3xl border border-border/40 bg-card p-6 shadow-sm space-y-4">
        <div className="flex items-center gap-2 mb-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-50 dark:bg-emerald-950/20 text-emerald-500 shadow-sm">
            <Sun className="h-4.5 w-4.5" />
          </div>
          <div>
            <h3 className="text-sm font-extrabold text-foreground">Theme & Visual Mode</h3>
            <p className="text-[10px] text-muted-foreground">Adjust how FluentPath looks on your device screen.</p>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-3">
          {[
            { id: 'light', name: 'Light Mode', icon: Sun, color: 'text-yellow-500 bg-yellow-50 dark:bg-yellow-950/20' },
            { id: 'dark', name: 'Dark Mode', icon: Moon, color: 'text-blue-500 bg-blue-50 dark:bg-blue-950/20' },
            { id: 'system', name: 'System Default', icon: Laptop, color: 'text-slate-500 bg-slate-50 dark:bg-slate-950/20' }
          ].map((mode) => {
            const isSelected = theme === mode.id;
            const Icon = mode.icon;

            return (
              <button
                key={mode.id}
                onClick={() => setTheme(mode.id)}
                className={cn(
                  "flex flex-col items-center justify-center gap-2 p-4 rounded-2xl border text-xs font-bold transition-all active:scale-95",
                  isSelected 
                    ? "bg-emerald-500 border-emerald-500 text-white shadow-md shadow-emerald-500/10" 
                    : "bg-secondary/40 border-border/40 text-muted-foreground hover:text-foreground hover:bg-secondary"
                )}
              >
                <Icon className={cn("h-5 w-5", isSelected ? "text-white" : "text-foreground/75")} />
                <span>{mode.name}</span>
              </button>
            );
          })}
        </div>
      </section>

      {/* 2. Font Size Scaling Config Card */}
      <section className="rounded-3xl border border-border/40 bg-card p-6 shadow-sm space-y-4">
        <div className="flex items-center gap-2 mb-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-50 dark:bg-emerald-950/20 text-emerald-500 shadow-sm">
            <Sliders className="h-4.5 w-4.5" />
          </div>
          <div>
            <h3 className="text-sm font-extrabold text-foreground">Accessibility Font Size</h3>
            <p className="text-[10px] text-muted-foreground">Scale text across the entire app for comfortable readability.</p>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          {fontSizes.map((f) => {
            const isSelected = fontSize === f.id;
            return (
              <button
                key={f.id}
                onClick={() => setFontSize(f.id as any)}
                className={cn(
                  "flex items-center justify-between p-4 rounded-2xl border text-xs font-bold transition-all active:scale-[0.99] text-left",
                  isSelected
                    ? "bg-emerald-500/5 border-emerald-500/50 text-emerald-600 dark:text-emerald-400"
                    : "bg-card border-border/40 text-muted-foreground hover:text-foreground"
                )}
              >
                <div className="flex items-center gap-2">
                  {isSelected ? (
                    <div className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500 text-white shadow-sm shrink-0">
                      <Check className="h-3.5 w-3.5 stroke-[2.5]" />
                    </div>
                  ) : (
                    <div className="h-5 w-5 rounded-full border border-border shrink-0" />
                  )}
                  <span>{f.name}</span>
                </div>
                <span className="text-[10px] text-muted-foreground font-semibold">Scale: {f.sizeText}</span>
              </button>
            );
          })}
        </div>
      </section>

      {/* AI Assistant Config Card */}
      <section className="rounded-3xl border border-border/40 bg-card p-6 shadow-sm space-y-4">
        <div className="flex items-center gap-2 mb-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg text-indigo-500 shadow-sm bg-indigo-50 dark:bg-indigo-950/20">
            <Sparkles className="h-4.5 w-4.5" />
          </div>
          <div>
            <h3 className="text-sm font-extrabold text-foreground">AI Study Assistant (Gemini)</h3>
            <p className="text-[10px] text-muted-foreground">Configure the Gemini API Key to enable the live smart tutor chatbot.</p>
          </div>
        </div>
 
        <div className="space-y-3">
          <div className="flex flex-col gap-1.5">
            <label className="text-[10px] font-extrabold uppercase tracking-widest text-muted-foreground pl-1">Gemini API Key</label>
            <div className="flex gap-2">
              <input
                type="password"
                placeholder="AIzaSy..."
                value={apiKeyInput}
                onChange={(e) => setApiKeyInput(e.target.value)}
                className="flex-1 bg-secondary/40 border border-border/50 rounded-xl px-4 py-3 text-xs font-bold focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500/20"
              />
              <button
                onClick={() => setGeminiApiKey(apiKeyInput)}
                className="px-5 py-3 rounded-xl bg-indigo-500 hover:bg-indigo-600 text-white font-extrabold text-xs active:scale-95 transition-all shadow-md shadow-indigo-500/10"
              >
                Save Key
              </button>
            </div>
            <p className="text-[10px] text-muted-foreground leading-relaxed pl-1">
              Your API Key is saved locally in this browser's `localStorage` and sent directly to Google Gemini API endpoints. Get a free key at <a href="https://aistudio.google.com/" target="_blank" rel="noreferrer" className="text-indigo-500 hover:underline">Google AI Studio</a>.
            </p>
          </div>
        </div>
      </section>

      {/* 3. Reset progress (Danger Zone Card) */}
      <section className="rounded-3xl border border-rose-500/30 bg-card p-6 shadow-sm space-y-4">
        <div className="flex items-center gap-2 mb-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-rose-50 dark:bg-rose-950/20 text-rose-500 shadow-sm">
            <AlertTriangle className="h-4.5 w-4.5" />
          </div>
          <div>
            <h3 className="text-sm font-extrabold text-rose-500">Danger Zone</h3>
            <p className="text-[10px] text-muted-foreground">Irreversible actions that clear local application data.</p>
          </div>
        </div>

        <div className="bg-rose-500/5 border border-rose-500/10 rounded-2xl p-4 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="text-left max-w-sm">
            <span className="block text-xs font-extrabold text-foreground">Reset Progress Database</span>
            <p className="text-[11px] text-muted-foreground mt-0.5 leading-relaxed">
              This will instantly erase your streak index, completed lesson checks, learned vocabulary words, and quiz scores history from localStorage.
            </p>
          </div>

          <button
            onClick={() => setShowConfirmReset(true)}
            className="px-5 py-3 rounded-2xl bg-rose-500 hover:bg-rose-600 text-white text-xs font-bold transition-all shadow-md shadow-rose-500/10 active:scale-95 whitespace-nowrap self-end md:self-center"
          >
            Reset Progress
          </button>
        </div>
      </section>

      {/* 4. Reset Success Notification */}
      <AnimatePresence>
        {resetDone && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 30 }}
            className="fixed bottom-6 right-6 z-40 bg-emerald-500 border border-emerald-600 text-white rounded-2xl p-4 shadow-xl flex items-center gap-3"
          >
            <div className="flex h-7 w-7 items-center justify-center rounded-full bg-white/20">
              <Check className="h-4.5 w-4.5 stroke-[2.5]" />
            </div>
            <div>
              <p className="text-xs font-extrabold">Data reset complete!</p>
              <p className="text-[10px] text-emerald-100 font-semibold mt-0.5">Your progress has been restored to defaults.</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 5. Confirmation Reset Dialog */}
      <AnimatePresence>
        {showConfirmReset && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowConfirmReset(false)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />

            {/* Dialog Body */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              className="relative w-full max-w-md bg-card border border-border/80 rounded-3xl p-6 shadow-2xl z-10 space-y-4"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-rose-50 dark:bg-rose-950/20 text-rose-500 shadow-sm mx-auto">
                <Trash2 className="h-6 w-6" />
              </div>

              <div className="text-center space-y-2">
                <h4 className="text-lg font-extrabold text-foreground tracking-tight">Are you absolutely sure?</h4>
                <p className="text-xs text-muted-foreground leading-relaxed px-4">
                  This action cannot be undone. All your earned XP, streaks, achievements, and statistics will be wiped from this browser.
                </p>
              </div>

              <div className="flex gap-3 pt-2">
                <button
                  onClick={() => setShowConfirmReset(false)}
                  className="flex-1 py-3 rounded-2xl bg-secondary hover:bg-muted text-muted-foreground hover:text-foreground font-extrabold text-xs transition-all active:scale-95"
                >
                  Cancel
                </button>
                <button
                  onClick={handleReset}
                  className="flex-1 py-3 rounded-2xl bg-rose-500 hover:bg-rose-600 text-white font-extrabold text-xs transition-all active:scale-95 shadow-md shadow-rose-500/10"
                >
                  Yes, Reset Everything
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}

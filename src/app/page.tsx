'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { 
  Flame, 
  Trophy, 
  BookOpen, 
  Sparkles, 
  Layers, 
  ArrowRight, 
  Volume2, 
  CheckCircle2,
  Calendar,
  GraduationCap
} from 'lucide-react';
import { motion } from 'framer-motion';
import { useProgressStore } from '@/stores/progressStore';
import { vocabularyWords } from '@/data/vocabulary';
import { grammarLessons } from '@/data/grammar';
import { categories } from '@/data/categories';
import { cn } from '@/lib/utils';

export default function HomePage() {
  const { xp, streak, learnedWords, completedLessons, markWordLearned } = useProgressStore();
  const [mounted, setMounted] = useState(false);
  const [playingAudio, setPlayingAudio] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="h-96 flex items-center justify-center">
      <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-emerald-500" />
    </div>;
  }

  // Pick Daily Word (use current day of the year or deterministic index)
  const todayIndex = new Date().getDate() % vocabularyWords.length;
  const dailyWord = vocabularyWords[todayIndex];
  const isDailyWordLearned = learnedWords.includes(dailyWord.id);

  // Pick Daily Tip based on current date
  const tipIndex = new Date().getDate() % grammarLessons.length;
  const dailyLesson = grammarLessons[tipIndex];

  // Continue Learning selection
  const nextLesson = grammarLessons.find(lesson => !completedLessons.includes(lesson.id)) || grammarLessons[0];
  
  // Calculate daily progress (e.g. daily target is 50 XP)
  const xpTarget = 50;
  const xpPercent = Math.min((xp / xpTarget) * 100, 100);

  // Simulate Pronunciation Audio
  const playWordAudio = (word: string) => {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      setPlayingAudio(true);
      const utterance = new SpeechSynthesisUtterance(word);
      utterance.lang = 'en-US';
      utterance.onend = () => setPlayingAudio(false);
      window.speechSynthesis.speak(utterance);
    } else {
      setPlayingAudio(true);
      setTimeout(() => setPlayingAudio(false), 1000);
    }
  };

  return (
    <div className="flex flex-col gap-8 pb-12">
      {/* 1. Welcome Banner */}
      <section className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-600 p-6 md:p-8 text-white shadow-xl shadow-emerald-500/10">
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2">
            <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight">
              Welcome back, language explorer!
            </h2>
            <p className="text-emerald-50/90 text-sm md:text-base max-w-md font-medium">
              You are doing great! Let's crush today's learning objectives and expand your vocabulary.
            </p>
          </div>
          
          {/* Daily Goal Progress */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/10 min-w-[240px]">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-100">Daily XP Goal</span>
              <span className="text-sm font-extrabold">{xp} / {xpTarget} XP</span>
            </div>
            {/* Progress Bar */}
            <div className="h-3 w-full bg-white/20 rounded-full overflow-hidden">
              <motion.div 
                className="h-full bg-yellow-400 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${xpPercent}%` }}
                transition={{ duration: 1, ease: "easeOut" }}
              />
            </div>
            <p className="text-[11px] text-emerald-100 mt-2 font-medium">
              {xp >= xpTarget ? '🎉 Daily goal reached! Outstanding job!' : `Earn ${xpTarget - xp} more XP to reach your daily goal.`}
            </p>
          </div>
        </div>
        
        {/* Background decorative elements */}
        <div className="absolute right-0 top-0 -mr-12 -mt-12 h-48 w-48 rounded-full bg-white/5 blur-3xl pointer-events-none" />
        <div className="absolute left-1/3 bottom-0 -ml-12 -mb-12 h-36 w-36 rounded-full bg-teal-400/20 blur-2xl pointer-events-none" />
      </section>

      {/* Grid of Main Modules */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Left Column (Daily Word & Tip) */}
        <div className="lg:col-span-2 flex flex-col gap-8">
          
          {/* 2. Daily Word of the Day */}
          <div className="rounded-3xl border border-border/40 bg-card p-6 shadow-sm hover:shadow-md transition-shadow duration-200">
            <div className="flex items-center justify-between mb-4 border-b border-border/40 pb-3">
              <span className="text-xs font-extrabold text-emerald-500 uppercase tracking-widest flex items-center gap-1.5">
                <Calendar className="h-3.5 w-3.5" /> Word of the Day
              </span>
              {isDailyWordLearned && (
                <span className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-600 bg-emerald-50 dark:bg-emerald-950/20 px-2.5 py-1 rounded-full">
                  <CheckCircle2 className="h-3.5 w-3.5 fill-current" /> Learned
                </span>
              )}
            </div>

            <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <h3 className="text-3xl font-extrabold text-foreground tracking-tight">
                    {dailyWord.word}
                  </h3>
                  <button 
                    onClick={() => playWordAudio(dailyWord.word)}
                    disabled={playingAudio}
                    className={cn(
                      "flex h-9 w-9 items-center justify-center rounded-xl border border-border/60 hover:bg-secondary text-muted-foreground hover:text-foreground transition-all duration-200 active:scale-95",
                      playingAudio && "bg-emerald-50 text-emerald-500 dark:bg-emerald-950/30 border-emerald-500/30 animate-pulse"
                    )}
                  >
                    <Volume2 className="h-4.5 w-4.5" />
                  </button>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm font-semibold text-muted-foreground">{dailyWord.ipa}</span>
                  <span className="h-1.5 w-1.5 rounded-full bg-border" />
                  <span className="text-xs font-bold uppercase tracking-wider text-emerald-500 bg-emerald-50 dark:bg-emerald-950/20 px-2 py-0.5 rounded-md">
                    {dailyWord.partOfSpeech}
                  </span>
                </div>
                
                <p className="text-base text-foreground/90 font-medium pt-2">
                  {dailyWord.meaning}
                </p>
                {dailyWord.meaningKhmer && (
                  <p className="text-sm font-semibold text-emerald-600 dark:text-emerald-400 mt-1 font-khmer">
                    {dailyWord.meaningKhmer}
                  </p>
                )}

                <div className="bg-secondary/40 border border-border/20 rounded-2xl p-4 mt-4 text-sm italic text-muted-foreground">
                  <span className="block text-[10px] font-extrabold text-foreground not-italic uppercase tracking-widest mb-1">Example Sentence:</span>
                  "{dailyWord.exampleSentence}"
                  {dailyWord.exampleKhmer && (
                    <span className="block text-xs font-semibold text-foreground/80 not-italic mt-1.5 pt-1.5 border-t border-border/10 font-khmer">
                      {dailyWord.exampleKhmer}
                    </span>
                  )}
                </div>
              </div>
            </div>

            <div className="flex justify-end gap-3 mt-6 pt-4 border-t border-border/40">
              <Link
                href="/vocabulary"
                className="inline-flex items-center justify-center rounded-xl px-4 py-2.5 text-xs font-bold text-muted-foreground hover:text-foreground hover:bg-secondary transition-all"
              >
                Browse All Words
              </Link>
              {!isDailyWordLearned && (
                <button
                  onClick={() => markWordLearned(dailyWord.id)}
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-xs px-5 py-2.5 shadow-md shadow-emerald-500/10 hover:shadow-emerald-500/20 hover:scale-[1.01] active:scale-95 transition-all duration-200"
                >
                  <CheckCircle2 className="h-4 w-4" /> Mark as Learned (+5 XP)
                </button>
              )}
            </div>
          </div>

          {/* 3. Daily Grammar Tip */}
          <div className="rounded-3xl border border-border/40 bg-gradient-to-br from-indigo-50/50 to-violet-50/30 dark:from-violet-950/5 dark:to-indigo-950/5 p-6 shadow-sm">
            <div className="flex items-center gap-2 mb-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-100 dark:bg-indigo-950/30 text-indigo-500 shadow-sm">
                <Sparkles className="h-4 w-4 fill-current" />
              </div>
              <span className="text-xs font-extrabold text-indigo-500 uppercase tracking-widest">
                Daily Grammar Highlight
              </span>
            </div>

            <h3 className="text-lg font-bold text-foreground mb-2">
              Topic: {dailyLesson.title} ({dailyLesson.level})
            </h3>
            
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              {dailyLesson.shortDesc}
            </p>

            <div className="bg-card/60 backdrop-blur-sm border border-border/30 rounded-2xl p-4 space-y-2">
              <span className="block text-[10px] font-extrabold text-indigo-500 uppercase tracking-widest">Common Mistake:</span>
              <div className="space-y-1 text-xs">
                <p className="text-red-500 font-semibold">❌ {dailyLesson.commonMistakes[0]?.incorrect}</p>
                <p className="text-emerald-600 dark:text-emerald-500 font-semibold">✅ {dailyLesson.commonMistakes[0]?.correct}</p>
                <p className="text-muted-foreground mt-1 text-[11px] leading-relaxed">
                  {dailyLesson.commonMistakes[0]?.explanation}
                </p>
              </div>
            </div>

            <div className="flex justify-end mt-4">
              <Link
                href={`/grammar`}
                className="inline-flex items-center gap-1.5 text-xs font-extrabold text-indigo-600 hover:text-indigo-700 dark:text-indigo-400 dark:hover:text-indigo-300 hover:underline transition-colors"
              >
                Read full lesson <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Right Column (Side Panels) */}
        <div className="flex flex-col gap-8">
          
          {/* 4. Continue Learning */}
          <div className="rounded-3xl border border-border/40 bg-card p-6 shadow-sm flex flex-col justify-between">
            <div>
              <span className="text-xs font-extrabold text-muted-foreground uppercase tracking-widest block mb-4">
                Continue Learning
              </span>

              <div className="flex items-center gap-4 bg-secondary/30 border border-border/20 rounded-2xl p-4 mb-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-violet-100 dark:bg-violet-950/30 text-violet-500 shadow-sm shrink-0">
                  <GraduationCap className="h-6 w-6" />
                </div>
                <div className="min-w-0">
                  <span className="block text-[10px] font-bold text-violet-500 uppercase tracking-widest mb-0.5">Grammar Path</span>
                  <h4 className="text-sm font-extrabold text-foreground truncate">{nextLesson.title}</h4>
                  <span className="text-[11px] text-muted-foreground capitalize font-medium">{nextLesson.level} Level</span>
                </div>
              </div>

              <p className="text-xs text-muted-foreground leading-relaxed mb-6">
                Jump right back in and master new grammar structures. Complete the practice questions to earn 15 XP.
              </p>
            </div>

            <Link
              href="/grammar"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary hover:bg-primary/95 text-primary-foreground font-bold text-sm w-full py-3 shadow-sm hover:scale-[1.01] active:scale-95 transition-all duration-200"
            >
              Start Lesson <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          {/* 5. Highlight Categories links */}
          <div className="rounded-3xl border border-border/40 bg-card p-6 shadow-sm space-y-4">
            <span className="text-xs font-extrabold text-muted-foreground uppercase tracking-widest block">
              Quick Resources
            </span>
            
            <div className="flex flex-col gap-2">
              <Link 
                href="/vocabulary"
                className="flex items-center justify-between rounded-2xl border border-border/30 bg-secondary/10 hover:bg-secondary/40 p-4 transition-all duration-200 group"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-100 dark:bg-blue-950/30 text-blue-500 shadow-sm">
                    <BookOpen className="h-5 w-5" />
                  </div>
                  <div className="text-left">
                    <span className="block text-sm font-extrabold text-foreground">Vocabulary Hub</span>
                    <span className="block text-[11px] text-muted-foreground">{learnedWords.length} words learned</span>
                  </div>
                </div>
                <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-foreground transition-transform group-hover:translate-x-1" />
              </Link>

              <Link 
                href="/flashcards"
                className="flex items-center justify-between rounded-2xl border border-border/30 bg-secondary/10 hover:bg-secondary/40 p-4 transition-all duration-200 group"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-100 dark:bg-orange-950/30 text-orange-500 shadow-sm">
                    <Layers className="h-5 w-5" />
                  </div>
                  <div className="text-left">
                    <span className="block text-sm font-extrabold text-foreground">Interactive Decks</span>
                    <span className="block text-[11px] text-muted-foreground">Study card sets by category</span>
                  </div>
                </div>
                <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-foreground transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>

      </div>

      {/* 6. Vocabulary Categories Row */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-extrabold text-foreground tracking-tight">
            Explore Categories
          </h3>
          <Link 
            href="/vocabulary" 
            className="text-xs font-bold text-emerald-500 hover:text-emerald-600 hover:underline flex items-center gap-1"
          >
            See all <ArrowRight className="h-3 w-3" />
          </Link>
        </div>

        {/* Horizontal scroll on mobile, grid on desktop */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {categories.slice(0, 6).map((cat) => {
            return (
              <Link 
                key={cat.id}
                href={{ pathname: '/vocabulary', query: { category: cat.id } }}
                className="group flex flex-col items-center text-center p-4 rounded-2xl border border-border/40 bg-card hover:border-emerald-500/30 hover:shadow-sm hover:scale-[1.02] transition-all duration-200"
              >
                <div className={cn(
                  "flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br text-white shadow-md mb-3 group-hover:rotate-6 transition-transform duration-200",
                  cat.color
                )}>
                  <BookOpen className="h-5 w-5" /> {/* Just a static icon representing catalog, or dynamically look up icon */}
                </div>
                <span className="text-xs font-extrabold text-foreground truncate w-full px-1">{cat.name}</span>
                <span className="text-[9px] text-muted-foreground mt-0.5 font-semibold uppercase tracking-wider">Explore</span>
              </Link>
            );
          })}
        </div>
      </section>
    </div>
  );
}

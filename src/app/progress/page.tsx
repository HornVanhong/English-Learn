'use client';

import React, { useState, useEffect } from 'react';
import * as Icons from 'lucide-react';
import { motion } from 'framer-motion';
import { useProgressStore } from '@/stores/progressStore';
import { vocabularyWords } from '@/data/vocabulary';
import { grammarLessons } from '@/data/grammar';
import { quizzes } from '@/data/quizzes';
import { cn } from '@/lib/utils';

export default function ProgressPage() {
  const { xp, streak, learnedWords, completedLessons, quizScores } = useProgressStore();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="h-96 flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-emerald-500" />
      </div>
    );
  }

  // Calculate percentages
  const wordsPercent = Math.min((learnedWords.length / vocabularyWords.length) * 100, 100);
  const grammarPercent = Math.min((completedLessons.length / grammarLessons.length) * 100, 100);
  
  // Quiz score stats
  const totalQuizAttempts = Object.values(quizScores).reduce((acc, current) => acc + current.length, 0);
  const quizScoresFlattened = Object.entries(quizScores).flatMap(([quizId, attempts]) => 
    attempts.map(att => ({ quizId, ...att }))
  );
  
  // Sort attempts by date (newest first)
  const sortedQuizHistory = quizScoresFlattened.sort((a, b) => b.date.localeCompare(a.date));

  // Gamified Level Calculation: Let's say each level is 100 XP
  const userLevel = Math.floor(xp / 100) + 1;
  const currentLevelXp = xp % 100;
  const nextLevelProgress = currentLevelXp; // progress towards next level out of 100

  // Achievements Definition & Validation
  const achievements = [
    {
      id: 'first-word',
      title: 'First Steps',
      description: 'Learn your first English word.',
      icon: 'Bookmark',
      unlocked: learnedWords.length >= 1,
      color: 'text-blue-500 bg-blue-50 dark:bg-blue-950/20'
    },
    {
      id: 'lexicon-master',
      title: 'Lexicon Master',
      description: 'Learn at least 15 words.',
      icon: 'BookOpen',
      unlocked: learnedWords.length >= 15,
      color: 'text-emerald-500 bg-emerald-50 dark:bg-emerald-950/20'
    },
    {
      id: 'grammar-buff',
      title: 'Grammar Buff',
      description: 'Complete 3 grammar lessons.',
      icon: 'Sparkles',
      unlocked: completedLessons.length >= 3,
      color: 'text-violet-500 bg-violet-50 dark:bg-violet-950/20'
    },
    {
      id: 'perfect-score',
      title: 'Flawless Victory',
      description: 'Score 100% on any quiz.',
      icon: 'Trophy',
      unlocked: quizScoresFlattened.some((att) => att.score === att.total),
      color: 'text-yellow-500 bg-yellow-50 dark:bg-yellow-950/20'
    },
    {
      id: 'streak-starter',
      title: 'Consistent Learner',
      description: 'Achieve a streak of at least 3 days.',
      icon: 'Flame',
      unlocked: streak >= 3,
      color: 'text-orange-500 bg-orange-50 dark:bg-orange-950/20'
    },
    {
      id: 'xp-champion',
      title: 'XP Champion',
      description: 'Accumulate more than 150 total XP.',
      icon: 'Award',
      unlocked: xp >= 150,
      color: 'text-rose-500 bg-rose-50 dark:bg-rose-950/20'
    }
  ];

  const renderIcon = (iconName: string, className = "h-5 w-5") => {
    const IconComponent = (Icons as any)[iconName] || Icons.Award;
    return <IconComponent className={className} />;
  };

  return (
    <div className="flex flex-col gap-8 pb-12">
      {/* 1. Profile / Streak Summary */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Total XP & Level */}
        <div className="rounded-3xl border border-border/40 bg-card p-6 shadow-sm flex flex-col justify-between">
          <div className="flex items-center gap-3 mb-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-yellow-50 dark:bg-yellow-950/20 text-yellow-500 shadow-sm">
              <Icons.Star className="h-6 w-6 fill-current" />
            </div>
            <div>
              <span className="text-[10px] font-extrabold uppercase tracking-widest text-muted-foreground">FluentPath Rank</span>
              <h3 className="text-lg font-extrabold text-foreground">Level {userLevel} Scholar</h3>
            </div>
          </div>
          
          <div className="space-y-2">
            <div className="flex justify-between items-center text-xs font-bold">
              <span className="text-muted-foreground">Level Progress</span>
              <span className="text-foreground">{currentLevelXp} / 100 XP</span>
            </div>
            <div className="h-3 w-full bg-secondary rounded-full overflow-hidden">
              <div 
                className="h-full bg-yellow-500 rounded-full transition-all duration-300"
                style={{ width: `${nextLevelProgress}%` }}
              />
            </div>
            <span className="block text-[10px] text-muted-foreground font-semibold">
              Total XP earned: {xp} XP
            </span>
          </div>
        </div>

        {/* Streak Counter */}
        <div className="rounded-3xl border border-border/40 bg-card p-6 shadow-sm flex flex-col justify-between">
          <div className="flex items-center gap-3 mb-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-50 dark:bg-orange-950/20 text-orange-500 shadow-sm">
              <Icons.Flame className="h-6 w-6 fill-current animate-pulse" />
            </div>
            <div>
              <span className="text-[10px] font-extrabold uppercase tracking-widest text-muted-foreground">Daily Habit</span>
              <h3 className="text-lg font-extrabold text-foreground">{streak} Day Streak</h3>
            </div>
          </div>

          <div className="text-xs text-muted-foreground leading-relaxed">
            {streak > 0 
              ? `🔥 Phenomenal! You have logged in for ${streak} consecutive day${streak > 1 ? 's' : ''}. Keep the fire burning!` 
              : '⌛ No active streak. complete a lesson or take a quiz to start your daily streak fire today!'}
          </div>
        </div>

        {/* Aggregate Stats */}
        <div className="rounded-3xl border border-border/40 bg-card p-6 shadow-sm flex flex-col justify-between">
          <div className="flex items-center gap-3 mb-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-50 dark:bg-emerald-950/20 text-emerald-500 shadow-sm">
              <Icons.TrendingUp className="h-6 w-6" />
            </div>
            <div>
              <span className="text-[10px] font-extrabold uppercase tracking-widest text-muted-foreground">General Stats</span>
              <h3 className="text-lg font-extrabold text-foreground">Overview Metrics</h3>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 text-xs font-bold">
            <div>
              <span className="block text-[9px] text-muted-foreground uppercase">Words Learned</span>
              <span className="text-sm font-extrabold text-emerald-500">{learnedWords.length} / {vocabularyWords.length}</span>
            </div>
            <div>
              <span className="block text-[9px] text-muted-foreground uppercase">Lessons Read</span>
              <span className="text-sm font-extrabold text-violet-500">{completedLessons.length} / {grammarLessons.length}</span>
            </div>
          </div>
        </div>

      </section>

      {/* 2. Visual Progress Radial Charts */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Vocabulary Progress */}
        <div className="rounded-3xl border border-border/40 bg-card p-6 shadow-sm text-center flex flex-col items-center">
          <span className="text-xs font-extrabold text-muted-foreground uppercase tracking-widest block mb-4 self-start">
            Vocabulary Progress
          </span>

          <div className="relative flex items-center justify-center h-32 w-32 mb-4">
            {/* SVG circle */}
            <svg className="w-full h-full transform -rotate-90">
              <circle
                cx="64"
                cy="64"
                r="52"
                stroke="currentColor"
                strokeWidth="10"
                fill="transparent"
                className="text-secondary"
              />
              <motion.circle
                cx="64"
                cy="64"
                r="52"
                stroke="currentColor"
                strokeWidth="10"
                fill="transparent"
                strokeDasharray={326.7}
                initial={{ strokeDashoffset: 326.7 }}
                animate={{ strokeDashoffset: 326.7 - (326.7 * wordsPercent) / 100 }}
                transition={{ duration: 1 }}
                className="text-emerald-500"
              />
            </svg>
            <div className="absolute flex flex-col items-center">
              <span className="text-2xl font-extrabold text-foreground">{Math.round(wordsPercent)}%</span>
              <span className="text-[10px] text-muted-foreground uppercase font-bold">Complete</span>
            </div>
          </div>
          
          <p className="text-xs text-muted-foreground leading-relaxed max-w-xs mt-2">
            You have mastered <span className="font-bold text-foreground">{learnedWords.length}</span> out of {vocabularyWords.length} terms in your vocabulary dictionary.
          </p>
        </div>

        {/* Grammar Progress */}
        <div className="rounded-3xl border border-border/40 bg-card p-6 shadow-sm text-center flex flex-col items-center">
          <span className="text-xs font-extrabold text-muted-foreground uppercase tracking-widest block mb-4 self-start">
            Grammar Progress
          </span>

          <div className="relative flex items-center justify-center h-32 w-32 mb-4">
            {/* SVG circle */}
            <svg className="w-full h-full transform -rotate-90">
              <circle
                cx="64"
                cy="64"
                r="52"
                stroke="currentColor"
                strokeWidth="10"
                fill="transparent"
                className="text-secondary"
              />
              <motion.circle
                cx="64"
                cy="64"
                r="52"
                stroke="currentColor"
                strokeWidth="10"
                fill="transparent"
                strokeDasharray={326.7}
                initial={{ strokeDashoffset: 326.7 }}
                animate={{ strokeDashoffset: 326.7 - (326.7 * grammarPercent) / 100 }}
                transition={{ duration: 1 }}
                className="text-indigo-500"
              />
            </svg>
            <div className="absolute flex flex-col items-center">
              <span className="text-2xl font-extrabold text-foreground">{Math.round(grammarPercent)}%</span>
              <span className="text-[10px] text-muted-foreground uppercase font-bold">Complete</span>
            </div>
          </div>

          <p className="text-xs text-muted-foreground leading-relaxed max-w-xs mt-2">
            You have finished reading <span className="font-bold text-foreground">{completedLessons.length}</span> out of {grammarLessons.length} interactive grammar lessons.
          </p>
        </div>

      </section>

      {/* 3. Achievements Badge List */}
      <section className="rounded-3xl border border-border/40 bg-card p-6 shadow-sm space-y-4">
        <div className="space-y-1">
          <h3 className="text-lg font-extrabold text-foreground tracking-tight">Achievements & Badges</h3>
          <p className="text-xs text-muted-foreground">Unlock rewards by completing grammar, vocabulary, and streaks.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {achievements.map((badge) => {
            return (
              <div 
                key={badge.id}
                className={cn(
                  "flex items-center gap-4 border p-4 rounded-2xl transition-all shadow-sm",
                  badge.unlocked 
                    ? "border-border/60 bg-secondary/10" 
                    : "border-border/30 bg-card opacity-55"
                )}
              >
                {/* Badge Icon */}
                <div className={cn(
                  "flex h-12 w-12 items-center justify-center rounded-xl shadow-sm shrink-0",
                  badge.unlocked ? badge.color : "bg-muted text-muted-foreground/60"
                )}>
                  {badge.unlocked ? (
                    renderIcon(badge.icon, "h-6 w-6 fill-current")
                  ) : (
                    <Icons.Lock className="h-5 w-5" />
                  )}
                </div>

                <div className="min-w-0 text-left">
                  <h4 className={cn("text-sm font-extrabold truncate", badge.unlocked ? "text-foreground" : "text-muted-foreground")}>
                    {badge.title}
                  </h4>
                  <p className="text-xs text-muted-foreground leading-tight line-clamp-2">
                    {badge.description}
                  </p>
                  {badge.unlocked && (
                    <span className="inline-flex text-[9px] font-extrabold text-emerald-500 uppercase tracking-widest mt-1">Unlocked</span>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 4. Quiz History Logs */}
      <section className="rounded-3xl border border-border/40 bg-card p-6 shadow-sm space-y-4">
        <div className="space-y-1">
          <h3 className="text-lg font-extrabold text-foreground tracking-tight">Recent Quiz Attempts</h3>
          <p className="text-xs text-muted-foreground">List of your completed interactive quizzes and details.</p>
        </div>

        {sortedQuizHistory.length > 0 ? (
          <div className="overflow-x-auto w-full border border-border/40 rounded-2xl scrollbar-thin">
            <table className="w-full text-xs text-left">
              <thead className="bg-secondary/40 border-b border-border text-[10px] font-extrabold uppercase tracking-wider text-muted-foreground">
                <tr>
                  <th className="px-4 py-3">Date</th>
                  <th className="px-4 py-3">Quiz Name</th>
                  <th className="px-4 py-3 text-center">Score</th>
                  <th className="px-4 py-3 text-center">XP Earned</th>
                  <th className="px-4 py-3 text-center">Rating</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border/30 font-semibold">
                {sortedQuizHistory.map((attempt, index) => {
                  const quizName = quizzes.find(q => q.id === attempt.quizId)?.title || attempt.quizId;
                  const isPerfect = attempt.score === attempt.total;

                  return (
                    <tr key={index} className="hover:bg-secondary/10 transition-colors">
                      <td className="px-4 py-3 font-medium text-muted-foreground">{attempt.date}</td>
                      <td className="px-4 py-3 font-bold text-foreground">{quizName}</td>
                      <td className="px-4 py-3 text-center text-foreground/90">
                        {attempt.score} / {attempt.total}
                      </td>
                      <td className="px-4 py-3 text-center text-emerald-500">+{attempt.xpGained} XP</td>
                      <td className="px-4 py-3 text-center">
                        <span className={cn(
                          "px-2 py-0.5 rounded-full text-[10px] font-extrabold uppercase",
                          isPerfect ? "bg-yellow-500/10 text-yellow-600" : "bg-secondary text-muted-foreground"
                        )}>
                          {isPerfect ? 'Perfect 🏆' : 'Passed'}
                        </span>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center p-8 bg-secondary/15 rounded-2xl border border-dashed border-border text-center">
            <Icons.History className="h-8 w-8 text-muted-foreground/60 mb-2" />
            <h4 className="text-xs font-bold text-foreground">No quiz attempts yet</h4>
            <p className="text-[11px] text-muted-foreground mt-0.5">Start a challenge in the Quizzes section to log score history here.</p>
          </div>
        )}
      </section>
    </div>
  );
}

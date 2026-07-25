'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  Home, 
  BookOpen, 
  Layers, 
  Trophy, 
  TrendingUp, 
  Settings, 
  Info,
  Flame,
  Sparkles,
  ChevronRight
} from 'lucide-react';
import { useProgressStore } from '@/stores/progressStore';
import { cn } from '@/lib/utils';

const navItems = [
  { href: '/', label: 'Home', icon: Home, color: 'text-emerald-500 bg-emerald-50 dark:bg-emerald-950/20' },
  { href: '/vocabulary', label: 'Vocabulary', icon: BookOpen, color: 'text-blue-500 bg-blue-50 dark:bg-blue-950/20' },
  { href: '/grammar', label: 'Grammar', icon: Sparkles, color: 'text-violet-500 bg-violet-50 dark:bg-violet-950/20' },
  { href: '/flashcards', label: 'Flashcards', icon: Layers, color: 'text-orange-500 bg-orange-50 dark:bg-orange-950/20' },
  { href: '/quizzes', label: 'Quizzes', icon: Trophy, color: 'text-yellow-500 bg-yellow-50 dark:bg-yellow-950/20' },
  { href: '/progress', label: 'Progress', icon: TrendingUp, color: 'text-rose-500 bg-rose-50 dark:bg-rose-950/20' },
  { href: '/settings', label: 'Settings', icon: Settings, color: 'text-slate-500 bg-slate-50 dark:bg-slate-950/20' },
  { href: '/about', label: 'About', icon: Info, color: 'text-cyan-500 bg-cyan-50 dark:bg-cyan-950/20' },
];

export function Sidebar() {
  const pathname = usePathname();
  const { xp, streak } = useProgressStore();

  return (
    <aside className="fixed bottom-0 left-0 top-0 hidden w-64 border-r border-border/60 bg-card p-6 md:flex md:flex-col justify-between z-30">
      <div className="flex flex-col gap-8">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-3 px-2 group">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-400 to-teal-600 text-white shadow-md shadow-emerald-500/20 group-hover:scale-105 transition-transform duration-200">
            <Sparkles className="h-5 w-5 animate-pulse" />
          </div>
          <div>
            <span className="font-extrabold text-xl tracking-tight bg-gradient-to-r from-emerald-500 to-teal-600 bg-clip-text text-transparent">
              FluentPath
            </span>
            <span className="block text-[10px] text-muted-foreground font-semibold uppercase tracking-wider">
              English Master
            </span>
          </div>
        </Link>

        {/* Navigation Items */}
        <nav className="flex flex-col gap-1">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            const Icon = item.icon;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "flex items-center justify-between rounded-xl px-4 py-3 text-sm font-bold transition-all duration-200 group",
                  isActive
                    ? "bg-secondary text-foreground shadow-sm scale-[1.02]"
                    : "text-muted-foreground hover:bg-muted/50 hover:text-foreground"
                )}
              >
                <div className="flex items-center gap-3">
                  <div className={cn(
                    "flex h-8 w-8 items-center justify-center rounded-lg transition-colors",
                    isActive ? item.color : "bg-transparent text-muted-foreground group-hover:text-foreground"
                  )}>
                    <Icon className="h-4.5 w-4.5 transition-transform group-hover:scale-110" />
                  </div>
                  <span>{item.label}</span>
                </div>
                {isActive && (
                  <ChevronRight className="h-4 w-4 text-muted-foreground/60 animate-bounce-right" />
                )}
              </Link>
            );
          })}
        </nav>
      </div>

      {/* Gamified Sidebar Stats Card */}
      <div className="flex flex-col gap-4 rounded-2xl bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900/60 dark:to-slate-900/40 p-4 border border-border/40">
        <div className="flex items-center justify-between border-b border-border/40 pb-3">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-orange-100 dark:bg-orange-950/30 text-orange-500 shadow-sm animate-pulse">
              <Flame className="h-4.5 w-4.5 fill-current" />
            </div>
            <div className="flex flex-col">
              <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider">Streak</span>
              <span className="text-sm font-extrabold text-foreground">{streak} Days</span>
            </div>
          </div>
          {streak > 0 && <span className="text-[11px] font-extrabold text-orange-500">🔥 Hot!</span>}
        </div>

        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-yellow-100 dark:bg-yellow-950/30 text-yellow-500 shadow-sm">
            <Trophy className="h-4.5 w-4.5 fill-current" />
          </div>
          <div className="flex flex-col">
            <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider">Total XP</span>
            <span className="text-sm font-extrabold text-foreground">{xp} XP</span>
          </div>
        </div>
      </div>
    </aside>
  );
}

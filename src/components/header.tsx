'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTheme } from 'next-themes';
import { 
  Sun, 
  Moon, 
  Sparkles, 
  Flame, 
  Trophy, 
  Settings,
  Info,
  Laptop,
  Menu
} from 'lucide-react';
import { useProgressStore } from '@/stores/progressStore';
import { useDrawerStore } from '@/stores/drawerStore';
import { cn } from '@/lib/utils';

export function Header() {
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();
  const { xp, streak } = useProgressStore();
  const { openDrawer } = useDrawerStore();
  const [mounted, setMounted] = useState(false);

  // Avoid hydration mismatch for theme state
  useEffect(() => {
    setMounted(true);
  }, []);

  const getPageTitle = () => {
    switch (pathname) {
      case '/': return 'Dashboard';
      case '/vocabulary': return 'Vocabulary Explorer';
      case '/grammar': return 'Grammar Center';
      case '/roadmap': return 'CEFR Roadmap';
      case '/flashcards': return 'Flashcard Suite';
      case '/quizzes': return 'Quiz Challenges';
      case '/progress': return 'Your Progress';
      case '/settings': return 'Settings';
      case '/about': return 'About FluentPath';
      default: return 'Learn English';
    }
  };

  return (
    <header className="sticky top-0 z-20 w-full border-b border-border/40 bg-background/80 backdrop-blur-md px-6 py-4 flex items-center justify-between">
      {/* Mobile Title or Brand */}
      <div className="flex items-center gap-2">
        <div className="md:hidden flex items-center gap-2 mr-2">
          <button 
            onClick={openDrawer}
            className="flex h-8 w-8 items-center justify-center rounded-lg hover:bg-secondary text-foreground active:scale-90 transition-all mr-1"
            aria-label="Open Menu"
          >
            <Menu className="h-5.5 w-5.5" />
          </button>
          <Link href="/" className="flex items-center gap-2">
            <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 text-white shadow-sm">
              <Sparkles className="h-3.5 w-3.5" />
            </div>
            <span className="font-extrabold text-[15px] tracking-tight text-foreground">FluentPath</span>
          </Link>
        </div>
        
        {/* Page Title for Desktop/Tablet */}
        <h1 className="hidden md:block text-xl font-extrabold text-foreground tracking-tight">
          {getPageTitle()}
        </h1>
      </div>

      {/* Right Side Stats & Actions */}
      <div className="flex items-center gap-4">
        {/* Streak & XP for Mobile Header */}
        <div className="flex items-center gap-3 bg-secondary/60 dark:bg-slate-900/60 border border-border/40 rounded-full px-3 py-1 text-sm font-bold shadow-sm">
          {/* Streak */}
          <div className="flex items-center gap-1 text-orange-500" title="Streak Days">
            <Flame className="h-4 w-4 fill-current animate-pulse" />
            <span>{streak}</span>
          </div>

          <div className="h-3 w-[1px] bg-border/80" />

          {/* XP */}
          <div className="flex items-center gap-1 text-yellow-500" title="Earned XP">
            <Trophy className="h-4 w-4 fill-current" />
            <span>{xp} <span className="hidden sm:inline text-[10px] text-muted-foreground">XP</span></span>
          </div>
        </div>

        <div className="h-6 w-[1px] bg-border/60" />

        {/* Theme Toggle & Settings */}
        <div className="flex items-center gap-1.5">
          {mounted && (
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="flex h-9 w-9 items-center justify-center rounded-xl bg-card border border-border/40 text-muted-foreground hover:text-foreground hover:bg-secondary transition-all"
              aria-label="Toggle Theme"
              title="Toggle light/dark mode"
            >
              {theme === 'dark' ? (
                <Sun className="h-4.5 w-4.5 text-yellow-500 transition-transform hover:rotate-45" />
              ) : (
                <Moon className="h-4.5 w-4.5 text-blue-500 transition-transform hover:-rotate-12" />
              )}
            </button>
          )}

          <Link
            href="/settings"
            className="flex h-9 w-9 items-center justify-center rounded-xl bg-card border border-border/40 text-muted-foreground hover:text-foreground hover:bg-secondary transition-all"
            title="Settings"
          >
            <Settings className="h-4.5 w-4.5 transition-transform hover:rotate-45" />
          </Link>
        </div>
      </div>
    </header>
  );
}

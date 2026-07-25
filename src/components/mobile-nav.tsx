'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
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
  X
} from 'lucide-react';
import { useProgressStore } from '@/stores/progressStore';
import { useDrawerStore } from '@/stores/drawerStore';
import { cn } from '@/lib/utils';

const navItems = [
  { href: '/', label: 'Dashboard', icon: Home },
  { href: '/vocabulary', label: 'Vocabulary', icon: BookOpen },
  { href: '/grammar', label: 'Grammar', icon: Sparkles },
  { href: '/flashcards', label: 'Flashcards', icon: Layers },
  { href: '/quizzes', label: 'Quiz Challenges', icon: Trophy },
  { href: '/progress', label: 'Progress', icon: TrendingUp },
  { href: '/settings', label: 'Settings', icon: Settings },
  { href: '/about', label: 'About', icon: Info },
];

export function MobileNav() {
  const pathname = usePathname();
  const { xp, streak } = useProgressStore();
  const { isOpen, closeDrawer } = useDrawerStore();

  // Dynamic level rank based on user's XP index
  const getLevelName = (score: number) => {
    if (score < 100) return 'A1 - Elementary';
    if (score < 250) return 'A2 - Pre-intermediate';
    if (score < 500) return 'B1 - Intermediate';
    if (score < 800) return 'B1+ - Upper-intermediate';
    if (score < 1200) return 'B2 - Pre-advanced';
    return 'C1 - Advanced';
  };

  const levelName = getLevelName(xp);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 md:hidden flex justify-end">
          {/* 1. Backdrop Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.15 } }}
            onClick={closeDrawer}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />

          {/* 2. Side Drawer Sheet */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 280 }}
            className="relative w-80 max-w-[85vw] h-full bg-card border-l border-border/60 p-6 flex flex-col justify-between shadow-2xl z-10 overflow-y-auto"
          >
            <div className="space-y-6">
              {/* Header: Brand and Close */}
              <div className="flex items-center justify-between pb-4 border-b border-border/30">
                <div className="flex items-center gap-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 text-white shadow-sm">
                    <Sparkles className="h-4 w-4" />
                  </div>
                  <span className="font-extrabold text-sm tracking-tight text-foreground">
                    FluentPath Menu
                  </span>
                </div>
                <button
                  onClick={closeDrawer}
                  className="h-8 w-8 flex items-center justify-center rounded-xl bg-secondary hover:bg-muted text-muted-foreground hover:text-foreground transition-all active:scale-90"
                >
                  <X className="h-4.5 w-4.5" />
                </button>
              </div>

              {/* Learning Level Badge Card */}
              <div className="bg-secondary/40 border border-border/40 rounded-2xl p-4 flex items-center justify-between my-4 text-xs font-bold shadow-sm">
                <span className="text-muted-foreground">Learning Level:</span>
                <span className="text-indigo-500 bg-indigo-500/10 px-3 py-1 rounded-lg uppercase tracking-wider font-extrabold text-[10px]">
                  {levelName}
                </span>
              </div>

              {/* Vertical Navigation Links */}
              <nav className="flex flex-col gap-1.5 pt-2">
                {navItems.map((item) => {
                  const isActive = pathname === item.href;
                  const Icon = item.icon;

                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={closeDrawer}
                      className={cn(
                        "flex items-center gap-3.5 rounded-xl px-4 py-3 text-sm font-extrabold transition-all duration-200 active:scale-[0.98]",
                        isActive
                          ? "bg-gradient-to-tr from-indigo-500 to-indigo-600 text-white shadow-md shadow-indigo-500/15"
                          : "text-muted-foreground hover:bg-muted/40 hover:text-foreground"
                      )}
                    >
                      <Icon className={cn("h-5 w-5", isActive ? "text-white" : "text-muted-foreground")} />
                      <span>{item.label}</span>
                    </Link>
                  );
                })}
              </nav>
            </div>

            {/* Footer Statistics */}
            <div className="flex items-center justify-between border-t border-border/40 pt-4 mt-auto">
              <div className="flex items-center gap-2.5">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-orange-100 dark:bg-orange-950/30 text-orange-500 shadow-sm">
                  <Flame className="h-4.5 w-4.5 fill-current animate-pulse" />
                </div>
                <div className="flex flex-col text-left">
                  <span className="text-[9px] font-extrabold text-muted-foreground uppercase tracking-wider">Streak</span>
                  <span className="text-xs font-black text-foreground">{streak} Days 🔥</span>
                </div>
              </div>
              
              <div className="flex flex-col text-right">
                <span className="text-[9px] font-extrabold text-muted-foreground uppercase tracking-wider">Total Score</span>
                <span className="text-xs font-black text-indigo-500">{xp} XP</span>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

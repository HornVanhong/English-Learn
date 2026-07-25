'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  Home, 
  BookOpen, 
  Layers, 
  Trophy, 
  Sparkles
} from 'lucide-react';
import { cn } from '@/lib/utils';

const mobileNavItems = [
  { href: '/', label: 'Home', icon: Home },
  { href: '/vocabulary', label: 'Vocab', icon: BookOpen },
  { href: '/grammar', label: 'Grammar', icon: Sparkles },
  { href: '/flashcards', label: 'Cards', icon: Layers },
  { href: '/quizzes', label: 'Quizzes', icon: Trophy },
];

export function MobileNav() {
  const pathname = usePathname();

  return (
    <nav className="fixed bottom-0 left-0 right-0 border-t border-border/60 bg-card/85 backdrop-blur-md px-4 py-2 flex justify-around items-center md:hidden z-30 shadow-lg pb-safe-bottom">
      {mobileNavItems.map((item) => {
        const isActive = pathname === item.href;
        const Icon = item.icon;

        return (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              "flex flex-col items-center justify-center gap-1 py-1 px-3 rounded-xl transition-all duration-200 active:scale-95 text-xs font-bold",
              isActive
                ? "text-emerald-500 bg-emerald-50/50 dark:bg-emerald-950/20"
                : "text-muted-foreground hover:text-foreground"
            )}
          >
            <Icon className="h-5 w-5" />
            <span>{item.label}</span>
          </Link>
        );
      })}
    </nav>
  );
}

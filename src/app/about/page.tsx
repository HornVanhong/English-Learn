'use client';

import React from 'react';
import { 
  Sparkles, 
  Layers, 
  Terminal, 
  ArrowRight, 
  Cpu, 
  Database, 
  Smartphone,
  Eye
} from 'lucide-react';
import { motion } from 'framer-motion';

export default function AboutPage() {
  const techStack = [
    { name: 'Next.js 15/16', role: 'Framework & Routing (App Router)' },
    { name: 'TypeScript', role: 'Type-Safe Development' },
    { name: 'Tailwind CSS v4', role: 'Modern UI Utility Styling' },
    { name: 'Zustand', role: 'Global Client State Persistence' },
    { name: 'Framer Motion', role: 'Fluid Micro-animations & Transitions' },
    { name: 'next-themes', role: 'Dark & Light Mode Integration' }
  ];

  const features = [
    {
      icon: Layers,
      title: 'Clean Architecture',
      desc: 'Separates static database files (`src/data`), page wrappers, components, and state management hooks to facilitate maintenance.'
    },
    {
      icon: Database,
      title: 'Decoupled Mock Data',
      desc: 'No database queries are embedded directly in pages. All data operations use local TS modules, making it easy to swap in APIs later.'
    },
    {
      icon: Cpu,
      title: 'Persistent Store',
      desc: 'Zustand middleware caches and updates student XP, daily streaks, unlocked achievement badges, and history in the browser.'
    },
    {
      icon: Smartphone,
      title: 'Mobile-Responsive Grid',
      desc: 'Beautiful fixed sidebars for desktops and floating bottom bars for smartphones ensure a comfortable mobile learning experience.'
    }
  ];

  return (
    <div className="flex flex-col gap-8 pb-12 w-full max-w-3xl mx-auto">
      {/* 1. App Introduction Banner */}
      <section className="text-center space-y-4 py-6">
        <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-400 to-teal-600 text-white shadow-lg shadow-emerald-500/20 mb-3">
          <Sparkles className="h-7 w-7 animate-pulse" />
        </div>
        <h2 className="text-3xl font-extrabold tracking-tight text-foreground">About FluentPath</h2>
        <p className="text-sm text-muted-foreground max-w-lg mx-auto leading-relaxed">
          FluentPath is a responsive, gamified English learning web application designed to help users master vocabulary, practice grammar structures, and review cards.
        </p>
      </section>

      {/* 2. Technical Stack List */}
      <section className="rounded-3xl border border-border/40 bg-card p-6 shadow-sm space-y-4">
        <h3 className="text-base font-extrabold text-foreground tracking-tight flex items-center gap-2">
          <Terminal className="h-4.5 w-4.5 text-emerald-500" /> Technology Stack
        </h3>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
          {techStack.map((tech, idx) => (
            <div 
              key={idx} 
              className="flex items-center justify-between p-3.5 rounded-2xl border border-border/30 bg-secondary/15 font-semibold"
            >
              <span className="text-foreground">{tech.name}</span>
              <span className="text-muted-foreground text-[10px] uppercase font-bold">{tech.role}</span>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Architectural Design Features */}
      <section className="space-y-4">
        <h3 className="text-base font-extrabold text-foreground tracking-tight flex items-center gap-2">
          <Eye className="h-4.5 w-4.5 text-emerald-500" /> Architectural Features
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {features.map((feat, idx) => {
            const Icon = feat.icon;
            return (
              <div 
                key={idx}
                className="p-5 border border-border/40 bg-card rounded-3xl shadow-sm text-left space-y-2 hover:shadow-md transition-shadow duration-200"
              >
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-50 dark:bg-emerald-950/20 text-emerald-500 shadow-sm">
                  <Icon className="h-4.5 w-4.5" />
                </div>
                <h4 className="text-sm font-extrabold text-foreground">{feat.title}</h4>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {feat.desc}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* 4. Future Backend Scalability Guideline */}
      <section className="rounded-3xl border border-indigo-500/20 bg-gradient-to-br from-indigo-50/20 to-indigo-950/5 p-6 shadow-sm space-y-4">
        <div className="space-y-1">
          <h3 className="text-base font-extrabold text-indigo-600 dark:text-indigo-400">Future Backend Migration Guide</h3>
          <p className="text-xs text-muted-foreground leading-relaxed">
            FluentPath was engineered following frontend-only guidelines, making future database and server connectivity easy to add.
          </p>
        </div>

        <div className="space-y-3 text-xs leading-relaxed font-semibold text-muted-foreground">
          <div className="flex items-start gap-2.5 p-3 rounded-2xl bg-card border border-border/30">
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-indigo-100 dark:bg-indigo-950/40 text-indigo-500 text-[10px] font-extrabold shrink-0 mt-0.5">1</span>
            <p>
              <strong className="text-foreground">API Hooks</strong>: Convert queries using TanStack Query inside a custom hook layer (`src/hooks`) that sends fetch requests to REST endpoints instead of calling static data direct imports.
            </p>
          </div>

          <div className="flex items-start gap-2.5 p-3 rounded-2xl bg-card border border-border/30">
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-indigo-100 dark:bg-indigo-950/40 text-indigo-500 text-[10px] font-extrabold shrink-0 mt-0.5">2</span>
            <p>
              <strong className="text-foreground">Authentication Integration</strong>: Introduce NextAuth.js or Clerk to guard pages and associate Zustand stores with a server-side PostgreSQL/MongoDB database via Prisma client models.
            </p>
          </div>

          <div className="flex items-start gap-2.5 p-3 rounded-2xl bg-card border border-border/30">
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-indigo-100 dark:bg-indigo-950/40 text-indigo-500 text-[10px] font-extrabold shrink-0 mt-0.5">3</span>
            <p>
              <strong className="text-foreground">Prisma Ready</strong>: The project folder includes pre-existing prisma configurations ready to be loaded with models like User, VocabularyWord, and QuizAttempt.
            </p>
          </div>
        </div>
      </section>

    </div>
  );
}

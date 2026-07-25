'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import * as Icons from 'lucide-react';
import { cn } from '@/lib/utils';

interface CEFRLevel {
  id: string;
  name: string;
  badge: string;
  color: string;
  desc: string;
  goals: string[];
  vocab: string;
  example: string;
  exampleKhmer?: string;
  grammarPoints: string[];
}

const cefrData: CEFRLevel[] = [
  {
    id: 'A1',
    name: 'A1 - Beginner',
    badge: 'Elementary',
    color: 'border-green-500/20 text-green-500 bg-green-500/10',
    desc: 'Understand and use basic words and simple sentences. Introduce yourself and ask simple questions.',
    goals: [
      'Learn alphabet and pronunciation rules',
      'Master numbers, dates, and telling time',
      'Handle simple greetings and basic introductions',
      'Understand and use the Present Simple tense'
    ],
    vocab: 'Common vocabulary: ~ 1,000 words',
    example: 'Hello. My name is Vanhong. I am from Cambodia. I study cybersecurity.',
    exampleKhmer: 'សួស្តី។ ខ្ញុំឈ្មោះ វ៉ាន់ហុង។ ខ្ញុំមកពីប្រទេសកម្ពុជា។ ខ្ញុំសិក្សាផ្នែកសន្តិសុខបច្ចេកវិទ្យា (Cybersecurity)។',
    grammarPoints: ['Be Verb (am/is/are)', 'Subject Pronouns (I, you, he...)', 'Present Simple Tense', 'Articles (a/an/the)']
  },
  {
    id: 'A2',
    name: 'A2 - Elementary',
    badge: 'Pre-intermediate',
    color: 'border-emerald-500/20 text-emerald-500 bg-emerald-500/10',
    desc: 'Talk about daily life, family, shopping, work, and hobbies. Understand simple conversations.',
    goals: [
      'Discuss daily routines and shopping habits',
      'Talk about past events and share life memories',
      'Express simple future plans and travel dreams'
    ],
    vocab: 'Common vocabulary: ~ 2,000 words',
    example: 'I went to school yesterday. I am studying English now. I will travel next month.',
    exampleKhmer: 'ខ្ញុំបានទៅសាលារៀនកាលពីម្សិលមិញ។ ខ្ញុំកំពុងរៀនភាសាអង់គ្លេសឥឡូវនេះ។ ខ្ញុំនឹងធ្វើដំណើរនៅខែក្រោយ។',
    grammarPoints: ['Present Continuous', 'Past Simple Tense', 'Future Tense (will / be going to)', 'Prepositions of Place & Time', 'Comparatives & Superlatives']
  },
  {
    id: 'B1',
    name: 'B1 - Intermediate',
    badge: 'Intermediate',
    color: 'border-blue-500/20 text-blue-500 bg-blue-500/10',
    desc: 'Communicate in most everyday situations. Write simple emails and describe experiences and plans.',
    goals: [
      'Maintain continuous conversations on familiar subjects',
      'Describe experiences, goals, dreams, and opinions with reasons',
      'Understand details in standard broadcasts or work messages'
    ],
    vocab: 'Common vocabulary: 3,500 – 4,000 words',
    example: 'I have studied English for two years. If I have time, I will help you.',
    exampleKhmer: 'ខ្ញុំបានរៀនភាសាអង់គ្លេសអស់រយៈពេលពីរឆ្នាំហើយ។ ប្រសិនបើខ្ញុំមានពេល ខ្ញុំនឹងជួយអ្នក។',
    grammarPoints: ['Present Perfect Tense', 'Passive Voice basics', 'Conditionals (Zero, 1st & 2nd)', 'Reported Speech', 'Modal Verbs (should, must, can...)']
  },
  {
    id: 'B2',
    name: 'B2 - Upper Intermediate',
    badge: 'Upper-intermediate',
    color: 'border-indigo-500/20 text-indigo-500 bg-indigo-500/10',
    desc: 'Discuss many topics confidently. Understand TV shows, articles, and meetings. Write clear reports and essays.',
    goals: [
      'Give detailed explanations and argue viewpoints confidently',
      'Understand complex texts and technical discussions in your field',
      'Interact with native speakers with a high degree of fluency'
    ],
    vocab: 'Common vocabulary: 5,000 – 6,000 words',
    example: 'It is highly recommended that we review the contract thoroughly before signing.',
    exampleKhmer: 'វាត្រូវបានណែនាំយ៉ាងខ្លាំងថា ពួកយើងគប្បីពិនិត្យមើលកិច្ចសន្យាឱ្យបានហ្មត់ចត់មុននឹងចុះហត្ថលេខា។',
    grammarPoints: ['Mixed Conditionals', 'Advanced Passive Voice', 'Relative Clauses', 'Inversion & Emphasis structures', 'Idioms & Phrasal Verbs']
  },
  {
    id: 'C1',
    name: 'C1 - Advanced',
    badge: 'Advanced',
    color: 'border-purple-500/20 text-purple-500 bg-purple-500/10',
    desc: 'Speak fluently with few mistakes. Understand complex texts and express ideas clearly.',
    goals: [
      'Express ideas fluently and spontaneously without searching for words',
      'Use English flexibly for social, academic, and professional purposes',
      'Produce clear, well-structured, detailed texts on complex subjects'
    ],
    vocab: 'Common vocabulary: 8,000+ words',
    example: 'Given the volatile economic environment, implementing a robust strategy is imperative.',
    exampleKhmer: 'ដោយសារតែស្ថានភាពសេដ្ឋកិច្ចមានភាពប្រែប្រួលខ្លាំង ការអនុវត្តយុទ្ធសាស្ត្រដ៏រឹងមាំមួយគឺជារឿងចាំបាច់បំផុត។',
    grammarPoints: ['Advanced Cleft Sentences', 'Subjunctive Mood', 'Narrative Tenses complex combinations', 'Nuanced Lexis & Hedging words']
  },
  {
    id: 'C2',
    name: 'C2 - Proficient',
    badge: 'Mastery (Native-like)',
    color: 'border-rose-500/20 text-rose-500 bg-rose-500/10',
    desc: 'Understand almost everything you read or hear. Communicate like a highly educated native speaker in most situations.',
    goals: [
      'Reconstruct information and arguments from various sources coherently',
      'Express yourself spontaneously, very fluently, and precisely',
      'Differentiate finer shades of meaning even in complex situations'
    ],
    vocab: 'Common vocabulary: 12,000+ words',
    example: 'He articulated his arguments with such precision that it left no room for ambiguity.',
    exampleKhmer: 'គាត់បានពន្យល់នូវអំណះអំណាងរបស់គាត់យ៉ាងច្បាស់លាស់ រហូតដល់គ្មានសល់កន្លែងណាមួយសម្រាប់ភាពស្រពិចស្រពិលឡើយ។',
    grammarPoints: ['Stylistic Inversions', 'Ellipsis & Substitution', 'Advanced Discourse Markers', 'Full mastery of complex idioms']
  }
];

const studyPlan = [
  { month: 'Month 1', focus: 'A1 Basics (alphabet, greetings, Present Simple, 300 words)' },
  { month: 'Month 2', focus: 'Finish A1 (daily conversations, listening practice)' },
  { month: 'Month 3', focus: 'A2 Grammar and vocabulary development' },
  { month: 'Month 4', focus: 'Complete A2 track and prepare for B1' },
  { month: 'Month 5', focus: 'B1 Speaking, writing, and structured listening' },
  { month: 'Month 6', focus: 'Strong B1 consolidation and B2 preparation' }
];

export default function RoadmapPage() {
  const [activeTab, setActiveTab] = useState<string>('A1');
  const [checklist, setChecklist] = useState<Record<string, boolean>>({
    vocab: false,
    grammar: false,
    listening: false,
    speaking: false,
    reading: false,
    writing: false
  });

  const toggleCheck = (key: string) => {
    setChecklist(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const activeLevelData = cefrData.find(lvl => lvl.id === activeTab)!;

  return (
    <div className="flex flex-col gap-8 pb-12 w-full max-w-4xl mx-auto text-left">
      {/* 1. Brand Intro Hero */}
      <section className="relative rounded-3xl bg-gradient-to-r from-indigo-500 to-purple-600 p-6 md:p-8 text-white shadow-xl shadow-indigo-500/10 overflow-hidden">
        <div className="relative z-10 max-w-xl space-y-2">
          <span className="text-[10px] font-extrabold tracking-widest uppercase bg-white/10 px-3 py-1 rounded-full border border-white/10">
            CEFR Curriculum Guide
          </span>
          <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight">English Learning Roadmap</h2>
          <p className="text-indigo-100 text-xs md:text-sm leading-relaxed">
            The Common European Framework of Reference for Languages (CEFR) outlines six standard levels to guide your path to master English fluency.
          </p>
        </div>
        <div className="absolute right-0 bottom-0 -mr-8 -mb-8 opacity-10 pointer-events-none">
          <Icons.Compass className="h-64 w-64 animate-spin-slow" />
        </div>
      </section>

      {/* 2. Interactive Matrix Grid */}
      <section className="space-y-4">
        <h3 className="text-base font-extrabold text-foreground tracking-tight flex items-center gap-2">
          <Icons.Table className="h-4.5 w-4.5 text-indigo-500" /> CEFR Level Matrix
        </h3>
        <div className="border border-border/40 bg-card rounded-2xl overflow-hidden shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full text-xs text-left border-collapse">
              <thead>
                <tr className="bg-secondary/40 border-b border-border/40 text-[10px] font-extrabold uppercase tracking-widest text-muted-foreground">
                  <th className="px-4 py-3">Level</th>
                  <th className="px-4 py-3">Name</th>
                  <th className="px-4 py-3">Core Competency Description</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border/20">
                {cefrData.map((lvl) => (
                  <tr 
                    key={lvl.id} 
                    onClick={() => setActiveTab(lvl.id)}
                    className={cn(
                      "hover:bg-secondary/20 cursor-pointer transition-colors",
                      activeTab === lvl.id ? "bg-indigo-500/5" : ""
                    )}
                  >
                    <td className="px-4 py-3.5 font-black">
                      <span className={cn("px-2 py-0.5 rounded-md border font-extrabold text-[10px]", lvl.color)}>
                        {lvl.id}
                      </span>
                    </td>
                    <td className="px-4 py-3.5 font-bold text-foreground">{lvl.badge}</td>
                    <td className="px-4 py-3.5 text-muted-foreground leading-relaxed">{lvl.desc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 3. Level Goal Explorer */}
      <section className="space-y-4">
        <h3 className="text-base font-extrabold text-foreground tracking-tight flex items-center gap-2">
          <Icons.Milestone className="h-4.5 w-4.5 text-indigo-500" /> Roadmap Explorer
        </h3>

        {/* Level Tabs Selectors */}
        <div className="flex flex-wrap gap-1.5 p-1 bg-secondary/60 rounded-xl w-full">
          {cefrData.map((lvl) => (
            <button
              key={lvl.id}
              onClick={() => setActiveTab(lvl.id)}
              className={cn(
                "flex-1 min-w-[50px] px-3 py-2 text-xs font-bold rounded-lg transition-all active:scale-95",
                activeTab === lvl.id
                  ? "bg-card text-indigo-500 shadow-sm border border-border/10"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              {lvl.id}
            </button>
          ))}
        </div>

        {/* Tab Detail Card */}
        <div className="p-6 border border-border/40 bg-card rounded-2xl shadow-sm space-y-6">
          <div className="flex items-center justify-between border-b border-border/30 pb-4">
            <div className="space-y-1">
              <span className={cn("px-3 py-1 rounded-full border text-[10px] uppercase font-extrabold tracking-widest", activeLevelData.color)}>
                Level {activeLevelData.name}
              </span>
              <h4 className="text-lg font-black text-foreground pt-1.5">{activeLevelData.badge} Targets</h4>
            </div>
            <Icons.BookOpen className="h-8 w-8 text-indigo-500/20" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Learning Goals */}
            <div className="space-y-3">
              <span className="text-[10px] font-extrabold uppercase tracking-widest text-muted-foreground block">Key Goals</span>
              <ul className="space-y-2 text-xs font-bold text-foreground/80">
                {activeLevelData.goals.map((goal, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <Icons.CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{goal}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Grammar Points */}
            <div className="space-y-3">
              <span className="text-[10px] font-extrabold uppercase tracking-widest text-muted-foreground block">Grammar Scope</span>
              <div className="flex flex-wrap gap-2">
                {activeLevelData.grammarPoints.map((gp, idx) => (
                  <span key={idx} className="px-3 py-1.5 rounded-xl border border-border/40 bg-secondary/35 text-[11px] font-bold text-foreground/80">
                    {gp}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Vocabulary and Example */}
          <div className="border-t border-border/30 pt-5 space-y-4">
            <div className="flex justify-between items-center text-xs font-bold text-foreground">
              <span className="text-muted-foreground">Vocabulary Target:</span>
              <span className="text-indigo-500 bg-indigo-500/15 px-3 py-1 rounded-lg text-[10px] uppercase tracking-wider font-extrabold">
                {activeLevelData.vocab}
              </span>
            </div>

            <div className="p-4 rounded-2xl bg-secondary/30 border border-border/20 space-y-2">
              <span className="text-[10px] font-extrabold uppercase tracking-widest text-muted-foreground block">Example Sentence Structure</span>
              <p className="text-xs font-bold text-foreground leading-relaxed">
                "{activeLevelData.example}"
              </p>
              {activeLevelData.exampleKhmer && (
                <p className="text-[11px] font-semibold text-indigo-500 leading-normal font-khmer pt-1">
                  {activeLevelData.exampleKhmer}
                </p>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* 4. Habit Exercises Checklist & Study Plan */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Habit Checklist */}
        <section className="p-6 border border-border/40 bg-card rounded-2xl shadow-sm space-y-4 md:col-span-1">
          <div className="space-y-1">
            <h4 className="text-sm font-extrabold text-foreground tracking-tight flex items-center gap-1.5">
              <Icons.CheckSquare className="h-4.5 w-4.5 text-indigo-500" /> Daily Practices
            </h4>
            <p className="text-[11px] text-muted-foreground">Work out your skills every day.</p>
          </div>

          <div className="space-y-2">
            {[
              { id: 'vocab', name: 'Vocabulary', desc: 'Study 10–20 words' },
              { id: 'grammar', name: 'Grammar Focus', desc: 'Review 1 tense rule' },
              { id: 'listening', name: 'Listening Skills', desc: 'Watch videos/podcasts' },
              { id: 'speaking', name: 'Speaking Work', desc: 'Speak for 10-15 mins' },
              { id: 'reading', name: 'Reading Material', desc: 'Read news or stories' },
              { id: 'writing', name: 'Journal Writing', desc: 'Write a short summary' }
            ].map((habit) => (
              <button
                key={habit.id}
                onClick={() => toggleCheck(habit.id)}
                className={cn(
                  "w-full p-2.5 rounded-xl border flex items-center gap-3 transition-all text-left",
                  checklist[habit.id]
                    ? "bg-indigo-500/5 border-indigo-500/20 text-foreground"
                    : "bg-transparent border-border/20 text-muted-foreground hover:bg-secondary/20"
                )}
              >
                <div className={cn(
                  "h-4.5 w-4.5 rounded flex items-center justify-center border",
                  checklist[habit.id]
                    ? "bg-indigo-500 border-indigo-500 text-white"
                    : "border-border/60 bg-card"
                )}>
                  {checklist[habit.id] && <Icons.Check className="h-3 w-3 stroke-[3]" />}
                </div>
                <div className="flex flex-col select-none">
                  <span className="text-[11px] font-bold text-foreground">{habit.name}</span>
                  <span className="text-[9px] font-semibold text-muted-foreground">{habit.desc}</span>
                </div>
              </button>
            ))}
          </div>
        </section>

        {/* 6-Month Study Plan */}
        <section className="p-6 border border-border/40 bg-card rounded-2xl shadow-sm space-y-4 md:col-span-2 flex flex-col justify-between">
          <div className="space-y-1">
            <h4 className="text-sm font-extrabold text-foreground tracking-tight flex items-center gap-1.5">
              <Icons.Calendar className="h-4.5 w-4.5 text-indigo-500" /> 6-Month Study Plan
            </h4>
            <p className="text-[11px] text-muted-foreground">Standard timeline to advance levels systematically.</p>
          </div>

          <div className="divide-y divide-border/20 flex-1 flex flex-col justify-around">
            {studyPlan.map((plan, idx) => (
              <div key={idx} className="flex items-center gap-4 py-2.5 text-xs">
                <span className="font-extrabold text-indigo-500 w-16 shrink-0">{plan.month}</span>
                <span className="font-bold text-muted-foreground text-left">{plan.focus}</span>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* 5. Recommended Resources */}
      <section className="p-6 border border-border/40 bg-card rounded-2xl shadow-sm space-y-4">
        <h4 className="text-sm font-extrabold text-foreground tracking-tight flex items-center gap-1.5">
          <Icons.Link className="h-4.5 w-4.5 text-indigo-500" /> Curated Resources
        </h4>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 text-xs font-bold">
          <a
            href="https://test-english.com/grammar-points/a1/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 border border-border/30 rounded-2xl bg-secondary/10 hover:bg-secondary/35 transition-colors flex items-center justify-between group"
          >
            <div className="text-left space-y-1">
              <span className="block text-foreground group-hover:text-indigo-500 transition-colors">Test-English Hub</span>
              <span className="block text-[9px] text-muted-foreground font-semibold">CEFR grammar topics</span>
            </div>
            <Icons.ExternalLink className="h-4 w-4 text-muted-foreground/60" />
          </a>

          <a
            href="https://www.bbc.co.uk/learningenglish/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 border border-border/30 rounded-2xl bg-secondary/10 hover:bg-secondary/35 transition-colors flex items-center justify-between group"
          >
            <div className="text-left space-y-1">
              <span className="block text-foreground group-hover:text-indigo-500 transition-colors">BBC Learning English</span>
              <span className="block text-[9px] text-muted-foreground font-semibold">Free vocabulary & podcasts</span>
            </div>
            <Icons.ExternalLink className="h-4 w-4 text-muted-foreground/60" />
          </a>

          <a
            href="https://learningenglish.voanews.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 border border-border/30 rounded-2xl bg-secondary/10 hover:bg-secondary/35 transition-colors flex items-center justify-between group"
          >
            <div className="text-left space-y-1">
              <span className="block text-foreground group-hover:text-indigo-500 transition-colors">VOA Learning English</span>
              <span className="block text-[9px] text-muted-foreground font-semibold">Graded listening news logs</span>
            </div>
            <Icons.ExternalLink className="h-4 w-4 text-muted-foreground/60" />
          </a>
        </div>
      </section>
    </div>
  );
}

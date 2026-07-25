'use client';

import React, { useState, useEffect } from 'react';
import * as Icons from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useProgressStore } from '@/stores/progressStore';
import { grammarLessons } from '@/data/grammar';
import { cn } from '@/lib/utils';

export default function GrammarPage() {
  const { completedLessons, completeLesson } = useProgressStore();
  const [mounted, setMounted] = useState(false);
  const [selectedLesson, setSelectedLesson] = useState<typeof grammarLessons[0] | null>(null);
  
  // Lesson Study State
  const [activeTab, setActiveTab] = useState<'learn' | 'mistakes' | 'practice'>('learn');
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [checkedAnswers, setCheckedAnswers] = useState<Record<string, boolean>>({});
  const [showResults, setShowResults] = useState(false);
  const [practiceCompleted, setPracticeCompleted] = useState(false);

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

  const handleOpenLesson = (lesson: typeof grammarLessons[0]) => {
    setSelectedLesson(lesson);
    setActiveTab('learn');
    setAnswers({});
    setCheckedAnswers({});
    setShowResults(false);
    setPracticeCompleted(false);
  };

  const handleSelectOption = (questionId: string, option: string) => {
    if (showResults) return; // Locked after check
    setAnswers({
      ...answers,
      [questionId]: option
    });
  };

  const checkPracticeAnswers = () => {
    if (!selectedLesson) return;
    
    const results: Record<string, boolean> = {};
    let allCorrect = true;

    selectedLesson.practiceQuestions.forEach((q) => {
      const isCorrect = answers[q.id] === q.correctAnswer;
      results[q.id] = isCorrect;
      if (!isCorrect) allCorrect = false;
    });

    setCheckedAnswers(results);
    setShowResults(true);

    if (allCorrect) {
      setPracticeCompleted(true);
    }
  };

  const handleCompleteAndClaim = () => {
    if (!selectedLesson) return;
    completeLesson(selectedLesson.id);
    setSelectedLesson(null);
  };

  return (
    <div className="flex flex-col gap-8 pb-12">
      {/* 1. Header Information */}
      <div className="relative rounded-3xl bg-gradient-to-r from-violet-500 to-indigo-600 p-6 md:p-8 text-white shadow-xl shadow-indigo-500/10 overflow-hidden">
        <div className="relative z-10 max-w-lg">
          <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight mb-2">Grammar Hub</h2>
          <p className="text-indigo-100 text-sm md:text-base leading-relaxed">
            Master the rules, patterns, and templates of English. Complete interactive checks to earn 15 XP per lesson.
          </p>
        </div>
        <div className="absolute right-0 bottom-0 -mr-8 -mb-8 opacity-10 pointer-events-none">
          <Icons.Sparkles className="h-64 w-64" />
        </div>
      </div>

      {/* 2. Structured Lesson Learning Track */}
      <div className="space-y-10">
        {(['beginner', 'intermediate', 'advanced'] as const).map((level) => {
          const levelLessons = grammarLessons.filter((l) => l.level === level);
          const levelName = level.charAt(0).toUpperCase() + level.slice(1);
          const levelColor = level === 'beginner' ? 'text-green-500' : level === 'intermediate' ? 'text-yellow-500' : 'text-red-500';

          return (
            <div key={level} className="space-y-4">
              <div className="flex items-center gap-2 border-b border-border/40 pb-2">
                <span className={cn("text-sm font-extrabold uppercase tracking-widest", levelColor)}>
                  {levelName} Track
                </span>
                <span className="h-1.5 w-1.5 rounded-full bg-border" />
                <span className="text-xs text-muted-foreground font-semibold">
                  {levelLessons.length} lessons
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {levelLessons.map((lesson) => {
                  const isCompleted = completedLessons.includes(lesson.id);
                  return (
                    <div
                      key={lesson.id}
                      onClick={() => handleOpenLesson(lesson)}
                      className={cn(
                        "group flex items-start justify-between p-5 rounded-2xl border bg-card hover:shadow-md cursor-pointer transition-all duration-200 hover:-translate-y-0.5",
                        isCompleted ? "border-emerald-500/30" : "border-border/40"
                      )}
                    >
                      <div className="space-y-1.5 flex-1 min-w-0 pr-4">
                        <div className="flex items-center gap-2">
                          <h3 className="text-base font-extrabold text-foreground truncate group-hover:text-indigo-500 transition-colors">
                            {lesson.title}
                          </h3>
                        </div>
                        <p className="text-xs text-muted-foreground leading-relaxed line-clamp-2">
                          {lesson.shortDesc}
                        </p>
                        {lesson.shortDescKhmer && (
                          <p className="text-[11px] font-semibold text-emerald-600 dark:text-emerald-400 leading-normal line-clamp-1 font-khmer">
                            {lesson.shortDescKhmer}
                          </p>
                        )}
                      </div>

                      <div className="flex items-center gap-2 shrink-0">
                        {isCompleted ? (
                          <span className="flex h-7 w-7 items-center justify-center rounded-full bg-emerald-100 dark:bg-emerald-950/40 text-emerald-600 shadow-sm">
                            <Icons.Check className="h-4 w-4 stroke-[3]" />
                          </span>
                        ) : (
                          <span className="flex h-7 w-7 items-center justify-center rounded-full bg-secondary text-muted-foreground group-hover:bg-indigo-50 dark:group-hover:bg-indigo-950/20 group-hover:text-indigo-500 transition-all">
                            <Icons.ChevronRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
                          </span>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>

      {/* 3. Lesson Overlay Focus Study Panel (Immersive Full-Screen Player) */}
      <AnimatePresence>
        {selectedLesson && (
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="fixed inset-0 z-50 bg-background flex flex-col"
          >
            {/* Immersive Top Navigation Header */}
            <div className="border-b border-border/40 bg-card px-6 py-4 flex items-center justify-between shrink-0 shadow-sm">
              <div className="flex items-center gap-4 flex-1">
                <button
                  onClick={() => setSelectedLesson(null)}
                  className="flex h-9 w-9 items-center justify-center rounded-xl bg-secondary hover:bg-muted text-muted-foreground hover:text-foreground active:scale-90 transition-all border border-border/40"
                  title="Quit Lesson"
                >
                  <Icons.X className="h-4.5 w-4.5" />
                </button>
                
                {/* Visual Progress Steps Bar */}
                <div className="flex items-center gap-3 flex-1 max-w-md ml-2 md:ml-6">
                  <div className="h-2.5 flex-1 bg-secondary rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-indigo-500 rounded-full transition-all duration-500"
                      style={{ 
                        width: activeTab === 'learn' ? '33.3%' : activeTab === 'mistakes' ? '66.6%' : '100%' 
                      }}
                    />
                  </div>
                  <span className="text-[10px] font-extrabold text-muted-foreground whitespace-nowrap uppercase tracking-widest">
                    {activeTab === 'learn' ? 'Step 1/3' : activeTab === 'mistakes' ? 'Step 2/3' : 'Step 3/3'}
                  </span>
                </div>
              </div>

              {/* Title Badge */}
              <div className="flex items-center gap-2">
                <span className="hidden sm:inline-flex text-[10px] font-extrabold uppercase tracking-widest text-indigo-500 bg-indigo-50 dark:bg-indigo-950/30 px-3 py-1 rounded-full border border-indigo-500/10">
                  {selectedLesson.title}
                </span>
                {completedLessons.includes(selectedLesson.id) && (
                  <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 dark:bg-emerald-950/20 px-2.5 py-1 rounded-full border border-emerald-500/10">
                    ✓ Completed
                  </span>
                )}
              </div>
            </div>

            {/* Step Navigation Tabs Selector */}
            <div className="flex justify-center border-b border-border/30 bg-secondary/15 p-1 shrink-0">
              <div className="flex max-w-lg w-full">
                {(['learn', 'mistakes', 'practice'] as const).map((tab) => {
                  const labels = { learn: '1. Learn Rules', mistakes: '2. Common Mistakes', practice: '3. Lesson Test' };
                  const isTabActive = activeTab === tab;

                  return (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={cn(
                        "flex-1 py-3 text-xs font-bold text-center border-b-2 transition-all duration-200",
                        isTabActive
                          ? "border-indigo-500 text-indigo-600 dark:text-indigo-400 font-extrabold"
                          : "border-transparent text-muted-foreground hover:text-foreground"
                      )}
                    >
                      {labels[tab]}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Scrollable Main Study Deck */}
            <div className="flex-1 overflow-y-auto px-4 py-8 md:py-12 bg-secondary/10">
              <div className="max-w-2xl mx-auto w-full">
                
                {/* STEP 1: LEARN RULES */}
                {activeTab === 'learn' && (
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="space-y-8"
                  >
                    {/* Lesson Core Explanation */}
                    <div className="bg-card border border-border/50 rounded-3xl p-6 shadow-sm space-y-3">
                      <span className="text-[9px] font-extrabold text-indigo-500 uppercase tracking-widest block">Grammar Explanation</span>
                      <h3 className="text-xl font-extrabold text-foreground tracking-tight">Introduction to the concept</h3>
                      <p className="text-sm md:text-base text-foreground/80 leading-relaxed font-medium">
                        {selectedLesson.explanation}
                      </p>
                      {selectedLesson.explanationKhmer && (
                        <p className="text-xs md:text-sm font-semibold text-emerald-600 dark:text-emerald-400 leading-relaxed pt-2 border-t border-border/30 font-khmer">
                          {selectedLesson.explanationKhmer}
                        </p>
                      )}
                    </div>

                    {/* Sentence Examples (Speech Balloons) */}
                    <div className="space-y-4">
                      <span className="text-[9px] font-extrabold text-muted-foreground uppercase tracking-widest pl-1 block">Sentence Examples</span>
                      <div className="grid grid-cols-1 gap-3">
                        {selectedLesson.examples.map((ex, idx) => (
                          <div 
                            key={idx} 
                            className="bg-card border-l-4 border-indigo-500 rounded-r-2xl p-5 shadow-sm space-y-1.5 hover:shadow-md transition-shadow"
                          >
                            <p className="text-base font-extrabold text-indigo-600 dark:text-indigo-400 flex items-center gap-2">
                              🗣️ {ex.english}
                            </p>
                            <p className="text-xs text-muted-foreground font-semibold pl-6">
                              "{ex.translation}"
                            </p>
                            {ex.translationKhmer && (
                              <p className="text-xs text-indigo-600 dark:text-indigo-400 font-semibold pl-6 font-khmer">
                                {ex.translationKhmer}
                              </p>
                            )}
                            {ex.note && (
                              <p className="text-[10px] text-muted-foreground italic pl-6 bg-secondary/50 py-1 px-2.5 rounded-lg w-fit mt-1">
                                Note: {ex.note}
                              </p>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Overall Summary */}
                    <div className="bg-gradient-to-br from-indigo-500 to-indigo-600 text-white rounded-3xl p-6 shadow-md shadow-indigo-500/10 space-y-3">
                      <div>
                        <span className="text-[9px] font-extrabold text-indigo-200 uppercase tracking-widest block mb-1">Lesson Takeaway</span>
                        <p className="text-xs md:text-sm font-semibold leading-relaxed">
                          {selectedLesson.summary}
                        </p>
                      </div>
                      {selectedLesson.summaryKhmer && (
                        <div className="pt-2 border-t border-white/20">
                          <p className="text-[11px] md:text-xs font-semibold text-indigo-100 leading-relaxed font-khmer">
                            {selectedLesson.summaryKhmer}
                          </p>
                        </div>
                      )}
                    </div>
                  </motion.div>
                )}

                {/* STEP 2: COMMON MISTAKES */}
                {activeTab === 'mistakes' && (
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="space-y-8"
                  >
                    {/* Comparative Mistake Cards */}
                    <div className="space-y-4">
                      <span className="text-[9px] font-extrabold text-muted-foreground uppercase tracking-widest pl-1 block">Compare Correct vs. Incorrect</span>
                      
                      <div className="grid grid-cols-1 gap-4">
                        {selectedLesson.commonMistakes.map((mistake, idx) => (
                          <div key={idx} className="bg-card border border-border/50 rounded-3xl p-6 shadow-sm space-y-4">
                            {/* Comparison block */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                              {/* Incorrect Card */}
                              <div className="border-l-4 border-red-500 bg-rose-50/20 dark:bg-rose-950/5 p-4 rounded-r-2xl space-y-1">
                                <span className="text-[9px] font-bold text-red-500 uppercase tracking-wider block">❌ Incorrect</span>
                                <p className="text-xs font-bold text-red-700 dark:text-red-400 line-through">
                                  {mistake.incorrect}
                                </p>
                              </div>

                              {/* Correct Card */}
                              <div className="border-l-4 border-emerald-500 bg-emerald-50/20 dark:bg-emerald-950/5 p-4 rounded-r-2xl space-y-1">
                                <span className="text-[9px] font-bold text-emerald-500 uppercase tracking-wider block">✅ Correct</span>
                                <p className="text-xs font-bold text-emerald-700 dark:text-emerald-400">
                                  {mistake.correct}
                                </p>
                              </div>
                            </div>
                            
                            {/* Rule Explanation */}
                            <div className="pt-3 border-t border-border/30 text-xs text-muted-foreground leading-relaxed font-semibold">
                              <span className="text-foreground font-extrabold">Grammar Rule:</span> {mistake.explanation}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Pro Tips Cards */}
                    <div className="space-y-3">
                      <span className="text-[9px] font-extrabold text-muted-foreground uppercase tracking-widest pl-1 block">Modals & Pro-tips</span>
                      <div className="grid grid-cols-1 gap-2">
                        {selectedLesson.tips.map((tip, idx) => (
                          <div 
                            key={idx} 
                            className="flex items-start gap-3 bg-card border border-border/50 rounded-2xl p-4 shadow-sm"
                          >
                            <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-yellow-100 dark:bg-yellow-950/30 text-yellow-500 shrink-0">
                              <Icons.Lightbulb className="h-4 w-4 fill-current" />
                            </div>
                            <p className="text-xs text-foreground/80 leading-relaxed font-bold self-center">
                              {tip}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* STEP 3: PRACTICE QUIZ */}
                {activeTab === 'practice' && (
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="space-y-6"
                  >
                    <div className="flex items-center gap-3 bg-card border border-border/50 rounded-3xl p-5 shadow-sm">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-50 dark:bg-indigo-950/30 text-indigo-500 shrink-0">
                        <Icons.HelpCircle className="h-5.5 w-5.5" />
                      </div>
                      <div>
                        <h4 className="text-sm font-extrabold text-foreground">Interactive Practice</h4>
                        <p className="text-[10px] text-muted-foreground">Answer all three queries correctly to earn the complete lesson badge (+15 XP).</p>
                      </div>
                    </div>

                    <div className="space-y-4">
                      {selectedLesson.practiceQuestions.map((q, idx) => {
                        const isIncorrect = showResults && checkedAnswers[q.id] === false;
                        const isCorrect = showResults && checkedAnswers[q.id] === true;

                        return (
                          <div
                            key={q.id}
                            className={cn(
                              "border rounded-3xl p-5 space-y-4 transition-colors shadow-sm bg-card",
                              isCorrect && "border-emerald-500/30 bg-emerald-50/10 dark:bg-emerald-950/5",
                              isIncorrect && "border-rose-500/30 bg-rose-50/10 dark:bg-rose-950/5",
                              !showResults && "border-border/40"
                            )}
                          >
                            <p className="text-sm font-extrabold text-foreground flex gap-2">
                              <span className="text-indigo-500">Q{idx + 1}.</span> {q.question}
                            </p>

                            <div className="grid grid-cols-1 gap-2.5">
                              {q.options.map((option) => {
                                const isSelected = answers[q.id] === option;
                                const isOptCorrect = q.correctAnswer === option;

                                return (
                                  <button
                                    key={option}
                                    disabled={showResults}
                                    onClick={() => handleSelectOption(q.id, option)}
                                    className={cn(
                                      "w-full text-left px-4 py-3 rounded-2xl text-xs font-bold transition-all border active:scale-98 shadow-sm",
                                      isSelected && !showResults && "bg-indigo-500 border-indigo-500 text-white",
                                      !isSelected && !showResults && "bg-card border-border/50 text-foreground/85 hover:bg-secondary hover:border-border",
                                      showResults && isOptCorrect && "bg-emerald-500 border-emerald-500 text-white",
                                      showResults && isSelected && !isOptCorrect && "bg-rose-500 border-rose-500 text-white",
                                      showResults && !isOptCorrect && !isSelected && "bg-secondary/15 border-border/20 text-muted-foreground opacity-40 shadow-none"
                                    )}
                                  >
                                    {option}
                                  </button>
                                );
                              })}
                            </div>

                            {/* Verification status bubble */}
                            {showResults && isIncorrect && (
                              <div className="flex items-center gap-1.5 text-xs font-bold text-red-500 pt-2 border-t border-border/30">
                                <span>❌ Incorrect. Correct answer:</span>
                                <span className="underline">{q.correctAnswer}</span>
                              </div>
                            )}
                            {showResults && isCorrect && (
                              <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-600 dark:text-emerald-400 pt-2 border-t border-border/30">
                                <span>✓ Correct! Excellent job.</span>
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </motion.div>
                )}

              </div>
            </div>

            {/* Immersive Sticky Bottom Action Footer */}
            <div className="border-t border-border/40 p-4 md:p-6 shrink-0 bg-card flex items-center justify-center shadow-md">
              <div className="max-w-2xl w-full flex items-center justify-between">
                <div>
                  {activeTab === 'practice' && (
                    <span className="text-[10px] font-extrabold text-muted-foreground uppercase tracking-wider">
                      {Object.keys(answers).length} / {selectedLesson.practiceQuestions.length} Checked
                    </span>
                  )}
                </div>

                <div className="flex gap-3">
                  {activeTab === 'learn' && (
                    <button
                      onClick={() => setActiveTab('mistakes')}
                      className="px-6 py-3 rounded-2xl bg-indigo-500 hover:bg-indigo-600 text-white text-xs font-extrabold shadow-md shadow-indigo-500/10 active:scale-95 transition-all"
                    >
                      Next: Mistakes & Tips
                    </button>
                  )}
                  {activeTab === 'mistakes' && (
                    <button
                      onClick={() => setActiveTab('practice')}
                      className="px-6 py-3 rounded-2xl bg-indigo-500 hover:bg-indigo-600 text-white text-xs font-extrabold shadow-md shadow-indigo-500/10 active:scale-95 transition-all"
                    >
                      Next: Practice Test
                    </button>
                  )}
                  {activeTab === 'practice' && !showResults && (
                    <button
                      onClick={checkPracticeAnswers}
                      disabled={Object.keys(answers).length < selectedLesson.practiceQuestions.length}
                      className={cn(
                        "px-8 py-3 rounded-2xl text-xs font-extrabold transition-all shadow-md",
                        Object.keys(answers).length < selectedLesson.practiceQuestions.length
                          ? "bg-muted text-muted-foreground/60 cursor-not-allowed shadow-none"
                          : "bg-indigo-500 hover:bg-indigo-600 text-white shadow-indigo-500/10 active:scale-95"
                      )}
                    >
                      Check Answers
                    </button>
                  )}
                  {activeTab === 'practice' && showResults && (
                    <>
                      {!practiceCompleted ? (
                        <button
                          onClick={() => {
                            setAnswers({});
                            setCheckedAnswers({});
                            setShowResults(false);
                          }}
                          className="px-6 py-3 rounded-2xl bg-yellow-500 hover:bg-yellow-600 text-white text-xs font-extrabold shadow-md shadow-yellow-500/10 active:scale-95 transition-all"
                        >
                          Try Again
                        </button>
                      ) : (
                        <button
                          onClick={handleCompleteAndClaim}
                          className="px-8 py-3 rounded-2xl bg-emerald-500 hover:bg-emerald-600 text-white text-xs font-extrabold shadow-md shadow-emerald-500/10 active:scale-95 transition-all"
                        >
                          Complete Lesson (+15 XP)
                        </button>
                      )}
                    </>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function selectedWordDifficulty(level: string) {
  switch (level) {
    case 'beginner': return 'Beginner (A1-A2)';
    case 'intermediate': return 'Intermediate (B1-B2)';
    case 'advanced': return 'Advanced (C1-C2)';
    default: return level;
  }
}

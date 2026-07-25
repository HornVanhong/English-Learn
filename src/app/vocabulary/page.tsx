'use client';

import React, { useEffect, useState, useTransition } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import * as Icons from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useProgressStore } from '@/stores/progressStore';
import { vocabularyWords } from '@/data/vocabulary';
import { categories, levels } from '@/data/categories';
import { cn } from '@/lib/utils';

export default function VocabularyPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [, startTransition] = useTransition();

  const { learnedWords, markWordLearned, unmarkWordLearned } = useProgressStore();
  const [mounted, setMounted] = useState(false);

  // States
  const [selectedLevel, setSelectedLevel] = useState<'beginner' | 'intermediate' | 'advanced'>('beginner');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedWord, setSelectedWord] = useState<typeof vocabularyWords[0] | null>(null);
  const [playingAudio, setPlayingAudio] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);

  // Reset pagination limit on filter changes
  useEffect(() => {
    setCurrentPage(1);
  }, [selectedLevel, selectedCategory, searchQuery]);

  useEffect(() => {
    setMounted(true);
    // Read category from URL query parameters if available
    const catQuery = searchParams.get('category');
    if (catQuery) {
      setSelectedCategory(catQuery);
    }
  }, [searchParams]);

  if (!mounted) {
    return (
      <div className="h-96 flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-emerald-500" />
      </div>
    );
  }

  // Filter words
  const filteredWords = vocabularyWords.filter((w) => {
    const matchesLevel = w.difficulty === selectedLevel;
    const matchesCategory = selectedCategory === 'all' || w.category === selectedCategory;
    const matchesSearch = w.word.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          w.meaning.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesLevel && matchesCategory && matchesSearch;
  });
 
  const wordsPerPage = 18;
  const totalPages = Math.ceil(filteredWords.length / wordsPerPage);
 
  const getPageNumbers = () => {
    const range = [];
    const rangeWithDots = [];
    let l;
 
    for (let i = 1; i <= totalPages; i++) {
      if (i === 1 || i === totalPages || (i >= currentPage - 1 && i <= currentPage + 1)) {
        range.push(i);
      }
    }
 
    for (const i of range) {
      if (l) {
        if (i - l === 2) {
          rangeWithDots.push(l + 1);
        } else if (i - l > 2) {
          rangeWithDots.push('...');
        }
      }
      rangeWithDots.push(i);
      l = i;
    }
 
    return rangeWithDots;
  };

  // Category change handler
  const handleCategoryChange = (catId: string) => {
    setSelectedCategory(catId);
    startTransition(() => {
      if (catId === 'all') {
        router.push('/vocabulary');
      } else {
        router.push(`/vocabulary?category=${catId}`);
      }
    });
  };

  // Text to Speech
  const playWordAudio = (word: string) => {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      setPlayingAudio(word);
      window.speechSynthesis.cancel(); // cancel current playing speech
      const utterance = new SpeechSynthesisUtterance(word);
      utterance.lang = 'en-US';
      utterance.onend = () => setPlayingAudio(null);
      window.speechSynthesis.speak(utterance);
    } else {
      setPlayingAudio(word);
      setTimeout(() => setPlayingAudio(null), 1000);
    }
  };

  // Render Lucide Icon dynamically
  const renderCategoryIcon = (iconName: string, className = "h-5 w-5") => {
    const IconComponent = (Icons as any)[iconName] || Icons.BookOpen;
    return <IconComponent className={className} />;
  };

  return (
    <div className="flex flex-col gap-6 pb-12">
      {/* 1. Header Filters Section */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-card border border-border/40 p-4 rounded-2xl shadow-sm">
        {/* Level Selector Tabs */}
        <div className="flex bg-secondary/80 p-1 rounded-xl w-fit">
          {levels.map((level) => (
            <button
              key={level.id}
              onClick={() => setSelectedLevel(level.id as any)}
              className={cn(
                "px-4 py-2 text-xs font-bold rounded-lg transition-all",
                selectedLevel === level.id
                  ? "bg-card text-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              {level.name}
            </button>
          ))}
        </div>

        {/* Search Bar */}
        <div className="relative flex-1 max-w-sm">
          <Icons.Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search words or meanings..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-secondary/50 border border-border/50 rounded-xl pl-9 pr-4 py-2 text-xs font-medium focus:outline-none focus:ring-1 focus:ring-emerald-500 focus:border-emerald-500"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
            >
              <Icons.X className="h-3 w-3" />
            </button>
          )}
        </div>
      </div>

      {/* 2. Category Selector Bar (Horizontal Scrolling Carousel) */}
      <div className="flex items-center gap-2 overflow-x-auto pb-3 -mx-2 px-2 scrollbar-thin">
        {/* "All" button */}
        <button
          onClick={() => handleCategoryChange('all')}
          className={cn(
            "flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold border transition-all shrink-0 active:scale-95",
            selectedCategory === 'all'
              ? "bg-emerald-500 border-emerald-500 text-white shadow-md shadow-emerald-500/10"
              : "bg-card border-border/40 text-muted-foreground hover:text-foreground hover:border-border"
          )}
        >
          <Icons.Compass className="h-4 w-4" />
          <span>All Categories</span>
        </button>

        {/* Category specific buttons */}
        {categories.map((cat) => {
          const isActive = selectedCategory === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => handleCategoryChange(cat.id)}
              className={cn(
                "flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold border transition-all shrink-0 active:scale-95",
                isActive
                  ? "bg-emerald-500 border-emerald-500 text-white shadow-md shadow-emerald-500/10"
                  : "bg-card border-border/40 text-muted-foreground hover:text-foreground hover:border-border"
              )}
            >
              <span className={cn(isActive ? "text-white" : "text-emerald-500")}>
                {renderCategoryIcon(cat.icon, "h-4 w-4")}
              </span>
              <span>{cat.name}</span>
            </button>
          );
        })}
      </div>

      {/* 3. Words Grid */}
      <div className="min-h-[400px]">
        {filteredWords.length > 0 ? (
          <div className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {filteredWords.slice((currentPage - 1) * wordsPerPage, currentPage * wordsPerPage).map((word) => {
                const isLearned = learnedWords.includes(word.id);
                return (
                  <motion.div
                    key={word.id}
                    onClick={() => setSelectedWord(word)}
                    className={cn(
                      "group flex flex-col justify-between p-5 rounded-2xl border bg-card hover:shadow-md cursor-pointer transition-all duration-200 hover:-translate-y-0.5",
                      isLearned
                        ? "border-emerald-500/30 bg-emerald-50/10 dark:bg-emerald-950/5"
                        : "border-border/40"
                    )}
                  >
                    <div>
                      <div className="flex items-start justify-between gap-2 mb-2">
                        <h4 className="text-xl font-extrabold text-foreground group-hover:text-emerald-500 transition-colors">
                          {word.word}
                        </h4>
                        {isLearned ? (
                          <span className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-100 dark:bg-emerald-950/50 text-emerald-600">
                            <Icons.Check className="h-3 w-3 stroke-[3]" />
                          </span>
                        ) : (
                          <span className="text-[10px] font-bold text-muted-foreground bg-secondary px-2 py-0.5 rounded-md capitalize">
                            {word.partOfSpeech}
                          </span>
                        )}
                      </div>
 
                      <p className="text-xs text-muted-foreground mb-1 italic font-medium">{word.ipa}</p>
                      <p className="text-sm font-medium text-foreground/80 line-clamp-2 mt-2 leading-relaxed">
                        {word.meaning}
                      </p>
                      {word.meaningKhmer && (
                        <p className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 mt-1 line-clamp-1 font-khmer">
                          {word.meaningKhmer}
                        </p>
                      )}
                    </div>
 
                    <div className="flex items-center justify-between mt-4 pt-3 border-t border-border/30">
                      <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">
                        {categories.find((c) => c.id === word.category)?.name}
                      </span>
                      <span className="text-[11px] font-bold text-emerald-500 group-hover:underline flex items-center gap-1">
                        Details <Icons.ChevronRight className="h-3.5 w-3.5 group-hover:translate-x-0.5 transition-transform" />
                      </span>
                    </div>
                  </motion.div>
                );
              })}
            </div>
 
            {/* Pagination Controls */}
            {totalPages > 1 && (
              <div className="flex items-center justify-center gap-1.5 mt-8 border-t border-border/30 pt-6">
                <button
                  onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                  disabled={currentPage === 1}
                  className={cn(
                    "flex h-9 w-9 items-center justify-center rounded-xl border border-border/50 text-xs font-bold transition-all active:scale-90",
                    currentPage === 1
                      ? "opacity-35 cursor-not-allowed bg-secondary/10"
                      : "bg-card hover:bg-secondary text-foreground"
                  )}
                  title="Previous Page"
                >
                  <Icons.ChevronLeft className="h-4.5 w-4.5" />
                </button>
 
                {getPageNumbers().map((page, idx) => {
                  const isEllipsis = page === '...';
                  if (isEllipsis) {
                    return (
                      <span key={`dots-${idx}`} className="px-1 text-xs font-bold text-muted-foreground select-none">
                        ...
                      </span>
                    );
                  }
 
                  const pageNum = page as number;
                  const isActive = currentPage === pageNum;
 
                  return (
                    <button
                      key={`page-${pageNum}`}
                      onClick={() => setCurrentPage(pageNum)}
                      className={cn(
                        "flex h-9 w-9 items-center justify-center rounded-xl text-xs font-extrabold transition-all border active:scale-90",
                        isActive
                          ? "bg-indigo-500 border-indigo-500 text-white shadow-md shadow-indigo-500/10"
                          : "bg-card border-border/50 text-muted-foreground hover:text-foreground hover:border-border"
                      )}
                    >
                      {pageNum}
                    </button>
                  );
                })}
 
                <button
                  onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                  disabled={currentPage === totalPages}
                  className={cn(
                    "flex h-9 w-9 items-center justify-center rounded-xl border border-border/50 text-xs font-bold transition-all active:scale-90",
                    currentPage === totalPages
                      ? "opacity-35 cursor-not-allowed bg-secondary/10"
                      : "bg-card hover:bg-secondary text-foreground"
                  )}
                  title="Next Page"
                >
                  <Icons.ChevronRight className="h-4.5 w-4.5" />
                </button>
              </div>
            )}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center p-12 bg-card border border-dashed border-border rounded-3xl text-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-secondary text-muted-foreground mb-4">
              <Icons.BookOpen className="h-8 w-8" />
            </div>
            <h3 className="text-lg font-bold text-foreground mb-1">No words found</h3>
            <p className="text-xs text-muted-foreground max-w-sm mb-4">
              Try adjusting your search query, selecting another category, or changing the level filter.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
              }}
              className="px-4 py-2 text-xs font-bold bg-primary text-primary-foreground rounded-xl"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>

      {/* 4. Word Definition Modal Drawer (with Backdrop) */}
      <AnimatePresence>
        {selectedWord && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, transition: { duration: 0 } }}
              onClick={() => setSelectedWord(null)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />

            {/* Modal Body */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, transition: { duration: 0 } }}
              transition={{ duration: 0.12 }}
              className="relative w-full max-w-lg bg-card border border-border/80 rounded-3xl p-6 shadow-2xl overflow-hidden z-10"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedWord(null)}
                className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full bg-secondary hover:bg-muted text-muted-foreground hover:text-foreground transition-all active:scale-90"
              >
                <Icons.X className="h-4 w-4" />
              </button>

              {/* Category Gradient Indicator */}
              <div className={cn(
                "h-1.5 w-24 rounded-full bg-gradient-to-r mb-5",
                categories.find(c => c.id === selectedWord.category)?.color
              )} />

              {/* Title & Speech */}
              <div className="flex items-center gap-3 mb-2">
                <h3 className="text-3xl font-extrabold text-foreground tracking-tight">
                  {selectedWord.word}
                </h3>
                <button
                  onClick={() => playWordAudio(selectedWord.word)}
                  className={cn(
                    "flex h-9 w-9 items-center justify-center rounded-xl border border-border hover:bg-secondary text-muted-foreground hover:text-foreground transition-all duration-200 active:scale-95",
                    playingAudio === selectedWord.word && "bg-emerald-50 text-emerald-500 dark:bg-emerald-950/30 border-emerald-500/30 animate-pulse"
                  )}
                >
                  <Icons.Volume2 className="h-5 w-5" />
                </button>
              </div>

              {/* Pronunciation & Tag */}
              <div className="flex items-center gap-2 mb-6">
                <span className="text-sm font-semibold text-muted-foreground italic">{selectedWord.ipa}</span>
                <span className="h-1.5 w-1.5 rounded-full bg-border" />
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-500 bg-emerald-50 dark:bg-emerald-950/20 px-2 py-0.5 rounded-md">
                  {selectedWord.partOfSpeech}
                </span>
                <span className="h-1.5 w-1.5 rounded-full bg-border" />
                <span className="text-xs font-bold text-muted-foreground uppercase">
                  {selectedWord.difficulty}
                </span>
              </div>

              {/* Meaning Description */}
              <div className="space-y-4 mb-6">
                <div>
                  <span className="block text-[10px] font-extrabold text-muted-foreground uppercase tracking-widest mb-1.5">Definition:</span>
                  <p className="text-base font-semibold text-foreground/90 leading-relaxed">
                    {selectedWord.meaning}
                  </p>
                  {selectedWord.meaningKhmer && (
                    <p className="text-sm font-semibold text-emerald-600 dark:text-emerald-400 mt-1 font-khmer">
                      {selectedWord.meaningKhmer}
                    </p>
                  )}
                </div>

                {/* Example sentence */}
                <div className="bg-secondary/40 border border-border/20 rounded-2xl p-4">
                  <span className="block text-[10px] font-extrabold text-foreground uppercase tracking-widest mb-1">Example in context:</span>
                  <p className="text-sm text-muted-foreground italic leading-relaxed">
                    "{selectedWord.exampleSentence}"
                  </p>
                  {selectedWord.exampleKhmer && (
                    <p className="text-xs font-semibold text-foreground/80 not-italic mt-1.5 pt-1.5 border-t border-border/10 font-khmer">
                      {selectedWord.exampleKhmer}
                    </p>
                  )}
                </div>

                {/* Synonyms & Antonyms */}
                <div className="grid grid-cols-2 gap-4 pt-2">
                  {selectedWord.synonyms.length > 0 && (
                    <div>
                      <span className="block text-[10px] font-extrabold text-muted-foreground uppercase tracking-widest mb-1">Synonyms:</span>
                      <div className="flex flex-wrap gap-1">
                        {selectedWord.synonyms.map((syn, idx) => (
                          <span key={idx} className="text-xs font-bold text-blue-600 bg-blue-50 dark:text-blue-400 dark:bg-blue-950/20 px-2.5 py-1 rounded-lg">
                            {syn}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {selectedWord.antonyms.length > 0 && (
                    <div>
                      <span className="block text-[10px] font-extrabold text-muted-foreground uppercase tracking-widest mb-1">Antonyms:</span>
                      <div className="flex flex-wrap gap-1">
                        {selectedWord.antonyms.map((ant, idx) => (
                          <span key={idx} className="text-xs font-bold text-rose-600 bg-rose-50 dark:text-rose-400 dark:bg-rose-950/20 px-2.5 py-1 rounded-lg">
                            {ant}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Status and Action bar */}
              <div className="flex items-center justify-between border-t border-border pt-5 mt-6">
                <div>
                  <span className="block text-[9px] font-bold text-muted-foreground uppercase tracking-widest">Category</span>
                  <span className="text-xs font-extrabold text-foreground">
                    {categories.find(c => c.id === selectedWord.category)?.name}
                  </span>
                </div>

                {learnedWords.includes(selectedWord.id) ? (
                  <button
                    onClick={() => {
                      unmarkWordLearned(selectedWord.id);
                    }}
                    className="inline-flex items-center justify-center gap-2 rounded-xl border border-rose-200 text-rose-600 hover:bg-rose-50 dark:border-rose-900/50 dark:text-rose-400 dark:hover:bg-rose-950/20 font-bold text-xs px-5 py-3 transition-all active:scale-95"
                  >
                    <Icons.BookmarkMinus className="h-4 w-4" /> Forget Word
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      markWordLearned(selectedWord.id);
                    }}
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-xs px-5 py-3 shadow-md shadow-emerald-500/10 hover:shadow-emerald-500/20 hover:scale-[1.01] transition-all active:scale-95"
                  >
                    <Icons.BookmarkCheck className="h-4 w-4" /> Mark as Learned (+5 XP)
                  </button>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}

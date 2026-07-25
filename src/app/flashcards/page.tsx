'use client';

import React, { useState, useEffect } from 'react';
import * as Icons from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useProgressStore } from '@/stores/progressStore';
import { vocabularyWords } from '@/data/vocabulary';
import { categories, levels } from '@/data/categories';
import { cn } from '@/lib/utils';

export default function FlashcardsPage() {
  const { learnedWords, markWordLearned, unmarkWordLearned } = useProgressStore();
  const [mounted, setMounted] = useState(false);

  // Filters
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedLevel, setSelectedLevel] = useState<string>('all');

  // Deck State
  const [deck, setDeck] = useState<typeof vocabularyWords>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [playingAudio, setPlayingAudio] = useState(false);
  const [deckCompleted, setDeckCompleted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Construct Deck when filters or words change
  useEffect(() => {
    if (!mounted) return;
    const newDeck = vocabularyWords.filter((w) => {
      const matchesCat = selectedCategory === 'all' || w.category === selectedCategory;
      const matchesLevel = selectedLevel === 'all' || w.difficulty === selectedLevel;
      return matchesCat && matchesLevel;
    });

    setDeck(newDeck);
    setCurrentIndex(0);
    setIsFlipped(false);
    setDeckCompleted(false);
  }, [selectedCategory, selectedLevel, mounted]);

  if (!mounted) {
    return (
      <div className="h-96 flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-emerald-500" />
      </div>
    );
  }

  const handleNext = () => {
    if (currentIndex < deck.length - 1) {
      setIsFlipped(false);
      setTimeout(() => {
        setCurrentIndex((prev) => prev + 1);
      }, 100);
    } else {
      setDeckCompleted(true);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setIsFlipped(false);
      setTimeout(() => {
        setCurrentIndex((prev) => prev - 1);
      }, 100);
    }
  };

  const handleFlip = () => {
    setIsFlipped((prev) => !prev);
  };

  // Text-To-Speech Pronunciation
  const playWordAudio = (word: string, e: React.MouseEvent) => {
    e.stopPropagation(); // Avoid flipping the card
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      setPlayingAudio(true);
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(word);
      utterance.lang = 'en-US';
      utterance.onend = () => setPlayingAudio(false);
      window.speechSynthesis.speak(utterance);
    } else {
      setPlayingAudio(true);
      setTimeout(() => setPlayingAudio(false), 1000);
    }
  };

  const handleToggleLearned = (wordId: string, e: React.MouseEvent) => {
    e.stopPropagation(); // Avoid flipping
    if (learnedWords.includes(wordId)) {
      unmarkWordLearned(wordId);
    } else {
      markWordLearned(wordId);
    }
  };

  const currentWord = deck[currentIndex];
  const progressPercent = deck.length > 0 ? ((currentIndex + (deckCompleted ? 1 : 0)) / deck.length) * 100 : 0;

  return (
    <div className="flex flex-col gap-6 pb-12 items-center w-full max-w-2xl mx-auto">
      {/* 1. Header & Filters */}
      <div className="w-full flex flex-col gap-4 text-center">
        <div>
          <h2 className="text-2xl md:text-3xl font-extrabold text-foreground tracking-tight flex items-center justify-center gap-2">
            <Icons.Layers className="h-6 w-6 text-orange-500" /> Flashcards
          </h2>
          <p className="text-xs text-muted-foreground mt-1">
            Test your recall memory with active flashcards. Flip to see meanings and examples.
          </p>
        </div>

        {/* Filters Panel */}
        <div className="grid grid-cols-2 gap-3 bg-card border border-border/40 p-3 rounded-2xl shadow-sm w-full">
          {/* Level Filter */}
          <div className="flex flex-col text-left gap-1">
            <label className="text-[10px] font-extrabold uppercase tracking-widest text-muted-foreground pl-1">Level</label>
            <select
              value={selectedLevel}
              onChange={(e) => setSelectedLevel(e.target.value)}
              className="bg-secondary/40 border border-border/50 rounded-xl px-3 py-2 text-xs font-bold focus:outline-none"
            >
              <option value="all">All CEFR Levels</option>
              {levels.map((lvl) => (
                <option key={lvl.id} value={lvl.id}>
                  {lvl.id} - {lvl.badge}
                </option>
              ))}
            </select>
          </div>

          {/* Category Filter */}
          <div className="flex flex-col text-left gap-1">
            <label className="text-[10px] font-extrabold uppercase tracking-widest text-muted-foreground pl-1">Category</label>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="bg-secondary/40 border border-border/50 rounded-xl px-3 py-2 text-xs font-bold focus:outline-none truncate"
            >
              <option value="all">All Categories</option>
              {categories.map((cat) => (
                <option key={cat.id} value={cat.id}>
                  {cat.name}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* 2. Deck Progress Bar */}
      {deck.length > 0 && !deckCompleted && (
        <div className="w-full space-y-2 mt-2">
          <div className="flex justify-between items-center text-xs font-bold text-muted-foreground">
            <span>Progress</span>
            <span>{currentIndex + 1} / {deck.length} Cards</span>
          </div>
          <div className="h-2 w-full bg-secondary rounded-full overflow-hidden">
            <div 
              className="h-full bg-orange-500 rounded-full transition-all duration-300"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        </div>
      )}

      {/* 3. Interactive Card Area */}
      <div className="relative w-full h-[360px] cursor-pointer perspective-1000 mt-4">
        {deck.length === 0 ? (
          /* Empty Deck state */
          <div className="absolute inset-0 rounded-3xl border border-dashed border-border/60 bg-card flex flex-col items-center justify-center p-6 text-center shadow-sm">
            <Icons.Layers className="h-12 w-12 text-muted-foreground mb-3" />
            <h3 className="text-lg font-bold text-foreground">No cards matching filters</h3>
            <p className="text-xs text-muted-foreground max-w-xs mt-1">
              Try selecting "All Categories" or changing your difficulty level.
            </p>
          </div>
        ) : deckCompleted ? (
          /* Deck Completed State */
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="absolute inset-0 rounded-3xl border border-border bg-gradient-to-br from-orange-500 to-amber-600 text-white flex flex-col items-center justify-center p-6 text-center shadow-xl"
          >
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/20 mb-4 animate-bounce">
              <Icons.Sparkles className="h-8 w-8 text-yellow-300" />
            </div>
            <h3 className="text-2xl font-extrabold tracking-tight">Deck Completed!</h3>
            <p className="text-sm text-orange-50 mt-1 max-w-xs leading-relaxed">
              Wonderful! You have reviewed all {deck.length} flashcards in this set. Keep practicing to build permanent recall!
            </p>
            <div className="flex gap-3 mt-8">
              <button
                onClick={() => {
                  setCurrentIndex(0);
                  setDeckCompleted(false);
                  setIsFlipped(false);
                }}
                className="px-5 py-2.5 rounded-xl bg-white text-orange-600 hover:bg-orange-50 text-xs font-bold shadow-sm transition-all"
              >
                Restart Deck
              </button>
              <a
                href="/quizzes"
                className="px-5 py-2.5 rounded-xl bg-orange-700/40 border border-white/20 hover:bg-orange-700/60 text-white text-xs font-bold transition-all"
              >
                Take a Quiz
              </a>
            </div>
          </motion.div>
        ) : (
          /* Active Flip Card */
          <div 
            onClick={handleFlip}
            className="relative w-full h-full duration-500 transform-style-3d select-none"
            style={{ transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)' }}
          >
            
            {/* FRONT OF THE CARD */}
            <div 
              className={cn(
                "absolute inset-0 rounded-3xl border bg-card p-6 shadow-md flex flex-col justify-between backface-hidden border-border/50",
                learnedWords.includes(currentWord.id) && "border-emerald-500/30 bg-emerald-50/5 dark:bg-emerald-950/5"
              )}
            >
              {/* Card Top */}
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-extrabold uppercase tracking-widest text-orange-500 bg-orange-50 dark:bg-orange-950/20 px-2 py-0.5 rounded-md">
                  {currentWord.difficulty}
                </span>
                <span className="text-[10px] font-extrabold uppercase tracking-widest text-muted-foreground">
                  {categories.find(c => c.id === currentWord.category)?.name}
                </span>
              </div>

              {/* Card Center */}
              <div className="flex flex-col items-center justify-center text-center gap-3">
                <div className="flex items-center gap-3">
                  <h3 className="text-4xl font-extrabold tracking-tight text-foreground select-text">
                    {currentWord.word}
                  </h3>
                  <button
                    onClick={(e) => playWordAudio(currentWord.word, e)}
                    disabled={playingAudio}
                    className="flex h-9 w-9 items-center justify-center rounded-xl bg-secondary hover:bg-muted text-muted-foreground hover:text-foreground active:scale-95 transition-all border border-border/40"
                    title="Play Pronunciation"
                  >
                    <Icons.Volume2 className="h-4.5 w-4.5" />
                  </button>
                </div>
                <span className="text-sm font-semibold text-muted-foreground italic select-text">{currentWord.ipa}</span>
                <span className="text-xs font-bold text-emerald-600 bg-emerald-50 dark:bg-emerald-950/30 px-2 py-0.5 rounded-md">
                  {currentWord.partOfSpeech}
                </span>
              </div>

              {/* Card Bottom */}
              <div className="flex justify-between items-center border-t border-border/30 pt-4">
                <button
                  onClick={(e) => handleToggleLearned(currentWord.id, e)}
                  className={cn(
                    "flex items-center gap-1.5 text-xs font-bold transition-all",
                    learnedWords.includes(currentWord.id)
                      ? "text-emerald-600 hover:text-emerald-700"
                      : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  {learnedWords.includes(currentWord.id) ? (
                    <>
                      <Icons.BookmarkCheck className="h-4.5 w-4.5 fill-emerald-100 dark:fill-emerald-950" />
                      <span>Learned</span>
                    </>
                  ) : (
                    <>
                      <Icons.Bookmark className="h-4.5 w-4.5" />
                      <span>Not Learned</span>
                    </>
                  )}
                </button>
                
                <span className="text-[11px] font-bold text-orange-500 animate-pulse flex items-center gap-1">
                  <Icons.RotateCw className="h-3 w-3" /> Tap to Flip
                </span>
              </div>
            </div>

            {/* BACK OF THE CARD */}
            <div 
              className="absolute inset-0 rounded-3xl border border-border/50 bg-card p-6 shadow-md flex flex-col justify-between backface-hidden overflow-hidden"
              style={{ transform: 'rotateY(180deg)' }}
            >
              {/* Back Card Top */}
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-extrabold uppercase tracking-widest text-emerald-500 bg-emerald-50 dark:bg-emerald-950/20 px-2 py-0.5 rounded-md">
                  Definition
                </span>
                <h4 className="text-sm font-extrabold text-foreground">{currentWord.word}</h4>
              </div>

              {/* Back Card Center */}
              <div className="flex-1 flex flex-col justify-center gap-4 my-2 overflow-y-auto pr-1">
                <div>
                  <span className="text-[9px] font-extrabold text-muted-foreground uppercase tracking-widest block mb-0.5">Meaning:</span>
                  <p className="text-sm font-extrabold text-foreground/90 select-text leading-relaxed">
                    {currentWord.meaning}
                  </p>
                  {currentWord.meaningKhmer && (
                    <p className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 mt-1 select-text font-khmer">
                      {currentWord.meaningKhmer}
                    </p>
                  )}
                </div>

                <div className="bg-secondary/40 border border-border/20 rounded-2xl p-4">
                  <span className="text-[9px] font-extrabold text-foreground uppercase tracking-widest block mb-0.5">Example:</span>
                  <p className="text-xs text-muted-foreground italic select-text leading-relaxed">
                    "{currentWord.exampleSentence}"
                  </p>
                  {currentWord.exampleKhmer && (
                    <p className="text-[11px] font-semibold text-foreground/80 not-italic mt-1.5 pt-1.5 border-t border-border/10 select-text font-khmer">
                      {currentWord.exampleKhmer}
                    </p>
                  )}
                </div>

                {/* Synonyms/Antonyms if available */}
                <div className="flex gap-4 text-left">
                  {currentWord.synonyms.length > 0 && (
                    <div className="flex-1">
                      <span className="text-[9px] font-extrabold text-muted-foreground uppercase tracking-widest block mb-0.5">Synonyms:</span>
                      <p className="text-xs font-bold text-blue-600 dark:text-blue-400 truncate">
                        {currentWord.synonyms.join(', ')}
                      </p>
                    </div>
                  )}
                  {currentWord.antonyms.length > 0 && (
                    <div className="flex-1">
                      <span className="text-[9px] font-extrabold text-muted-foreground uppercase tracking-widest block mb-0.5">Antonyms:</span>
                      <p className="text-xs font-bold text-rose-600 dark:text-rose-400 truncate">
                        {currentWord.antonyms.join(', ')}
                      </p>
                    </div>
                  )}
                </div>
              </div>

              {/* Back Card Bottom */}
              <div className="flex justify-between items-center border-t border-border/30 pt-4">
                <button
                  onClick={(e) => handleToggleLearned(currentWord.id, e)}
                  className={cn(
                    "flex items-center gap-1.5 text-xs font-bold transition-all",
                    learnedWords.includes(currentWord.id)
                      ? "text-emerald-600 hover:text-emerald-700"
                      : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  {learnedWords.includes(currentWord.id) ? (
                    <>
                      <Icons.BookmarkCheck className="h-4.5 w-4.5 fill-emerald-100 dark:fill-emerald-950" />
                      <span>Learned (+5 XP)</span>
                    </>
                  ) : (
                    <>
                      <Icons.Bookmark className="h-4.5 w-4.5" />
                      <span>Mark Learned</span>
                    </>
                  )}
                </button>

                <span className="text-[11px] font-bold text-emerald-500 flex items-center gap-1">
                  <Icons.RotateCw className="h-3 w-3" /> Tap to Flip
                </span>
              </div>

            </div>

          </div>
        )}
      </div>

      {/* 4. Controls Buttons (Prev, Flip, Next) */}
      {deck.length > 0 && !deckCompleted && (
        <div className="flex items-center justify-between w-full gap-4 mt-6">
          <button
            onClick={handlePrev}
            disabled={currentIndex === 0}
            className={cn(
              "flex items-center gap-1.5 justify-center py-3 rounded-2xl text-xs font-extrabold border transition-all active:scale-95 flex-1 shadow-sm bg-card",
              currentIndex === 0
                ? "border-border/30 text-muted-foreground/40 cursor-not-allowed shadow-none"
                : "border-border/60 text-muted-foreground hover:text-foreground hover:border-border"
            )}
          >
            <Icons.ChevronLeft className="h-4 w-4" /> Previous
          </button>

          <button
            onClick={handleFlip}
            className="flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-100 hover:bg-orange-200 text-orange-600 border border-orange-200 dark:bg-orange-950/20 dark:border-orange-900/50 dark:text-orange-400 active:scale-90 transition-all shadow-sm"
            title="Flip Card"
          >
            <Icons.RefreshCw className="h-5 w-5" />
          </button>

          <button
            onClick={handleNext}
            className="flex items-center gap-1.5 justify-center py-3 rounded-2xl text-xs font-extrabold bg-primary hover:bg-primary/95 text-primary-foreground transition-all active:scale-95 flex-1 shadow-md shadow-emerald-500/5"
          >
            {currentIndex === deck.length - 1 ? 'Finish Set' : 'Next Card'} <Icons.ChevronRight className="h-4 w-4" />
          </button>
        </div>
      )}
    </div>
  );
}

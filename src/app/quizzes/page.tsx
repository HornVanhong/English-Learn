'use client';

import React, { useState, useEffect } from 'react';
import * as Icons from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useProgressStore } from '@/stores/progressStore';
import { quizzes } from '@/data/quizzes';
import { cn } from '@/lib/utils';

export default function QuizzesPage() {
  const { saveQuizResult, quizScores } = useProgressStore();
  const [mounted, setMounted] = useState(false);

  // Quiz Engine States
  const [activeQuiz, setActiveQuiz] = useState<typeof quizzes[0] | null>(null);
  const [currentQuestionIdx, setCurrentQuestionIdx] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [typedAnswer, setTypedAnswer] = useState('');
  
  // Sentence Ordering States
  const [scrambledWords, setScrambledWords] = useState<string[]>([]);
  const [selectedWords, setSelectedWords] = useState<string[]>([]);

  // Matching States
  const [leftSelected, setLeftSelected] = useState<string | null>(null);
  const [rightSelected, setRightSelected] = useState<string | null>(null);
  const [matchedPairs, setMatchedPairs] = useState<string[]>([]); // stores matched left-sides
  const [matchingError, setMatchingError] = useState<boolean>(false);

  // Check state
  const [hasChecked, setHasChecked] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  // Results & Tracking
  const [quizScore, setQuizScore] = useState(0);
  const [userHistory, setUserHistory] = useState<{
    question: string;
    userAnswer: string;
    correctAnswer: string;
    isCorrect: boolean;
  }[]>([]);
  const [quizFinished, setQuizFinished] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Initialize question specific states
  useEffect(() => {
    if (!activeQuiz) return;
    const currentQuestion = activeQuiz.questions[currentQuestionIdx];
    if (!currentQuestion) return;

    setSelectedOption(null);
    setTypedAnswer('');
    setHasChecked(false);
    setIsCorrect(false);

    if (currentQuestion.type === 'sentence-ordering' && currentQuestion.sentenceWords) {
      setScrambledWords([...currentQuestion.sentenceWords].sort(() => Math.random() - 0.5));
      setSelectedWords([]);
    }

    if (currentQuestion.type === 'matching' && currentQuestion.matchingPairs) {
      setMatchedPairs([]);
      setLeftSelected(null);
      setRightSelected(null);
    }
  }, [activeQuiz, currentQuestionIdx]);

  if (!mounted) {
    return (
      <div className="h-96 flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-emerald-500" />
      </div>
    );
  }

  const handleStartQuiz = (quiz: typeof quizzes[0]) => {
    setActiveQuiz(quiz);
    setCurrentQuestionIdx(0);
    setQuizScore(0);
    setUserHistory([]);
    setQuizFinished(false);
  };

  // Word Toggles for Sentence Ordering
  const handleWordTap = (word: string, isFromSelected: boolean) => {
    if (hasChecked) return;
    if (isFromSelected) {
      setSelectedWords(selectedWords.filter((w) => w !== word));
      setScrambledWords([...scrambledWords, word]);
    } else {
      setScrambledWords(scrambledWords.filter((w) => w !== word));
      setSelectedWords([...selectedWords, word]);
    }
  };

  // Matching pair handler
  const handleLeftTap = (item: string) => {
    if (hasChecked || matchedPairs.includes(item)) return;
    setLeftSelected(item);
    if (rightSelected && activeQuiz) {
      checkMatch(item, rightSelected);
    }
  };

  const handleRightTap = (item: string) => {
    if (hasChecked) return;
    setRightSelected(item);
    if (leftSelected && activeQuiz) {
      checkMatch(leftSelected, item);
    }
  };

  const checkMatch = (left: string, right: string) => {
    const currentQuestion = activeQuiz!.questions[currentQuestionIdx];
    const pair = currentQuestion.matchingPairs?.find((p) => p.left === left && p.right === right);

    if (pair) {
      setMatchedPairs([...matchedPairs, left]);
      setLeftSelected(null);
      setRightSelected(null);
      
      // Auto-validate matching if all pairs matched
      if (matchedPairs.length + 1 === currentQuestion.matchingPairs?.length) {
        // Complete matching
        setIsCorrect(true);
      }
    } else {
      setMatchingError(true);
      setTimeout(() => {
        setLeftSelected(null);
        setRightSelected(null);
        setMatchingError(false);
      }, 800);
    }
  };

  // Check Answer Handler
  const handleCheckAnswer = () => {
    if (!activeQuiz) return;
    const currentQuestion = activeQuiz.questions[currentQuestionIdx];
    let correct = false;
    let userAnsText = '';
    let correctAnsText = '';

    if (currentQuestion.type === 'multiple-choice') {
      correct = selectedOption === currentQuestion.correctAnswer;
      userAnsText = selectedOption || 'None';
      correctAnsText = currentQuestion.correctAnswer || '';
    } else if (currentQuestion.type === 'fill-in-the-blank') {
      const sanitizedUser = typedAnswer.trim().toLowerCase();
      const sanitizedCorrect = (currentQuestion.correctAnswer || '').trim().toLowerCase();
      correct = sanitizedUser === sanitizedCorrect;
      userAnsText = typedAnswer;
      correctAnsText = currentQuestion.correctAnswer || '';
    } else if (currentQuestion.type === 'matching') {
      correct = matchedPairs.length === currentQuestion.matchingPairs?.length;
      userAnsText = `Matched ${matchedPairs.length}/${currentQuestion.matchingPairs?.length} pairs`;
      correctAnsText = 'All matched correctly';
    } else if (currentQuestion.type === 'sentence-ordering') {
      const userSentence = selectedWords.join(' ');
      const correctSentence = (currentQuestion.orderedAnswer || []).join(' ');
      correct = userSentence === correctSentence;
      userAnsText = userSentence;
      correctAnsText = correctSentence;
    }

    if (correct) {
      setQuizScore((prev) => prev + 1);
    }

    setIsCorrect(correct);
    setHasChecked(true);

    setUserHistory([
      ...userHistory,
      {
        question: currentQuestion.question,
        userAnswer: userAnsText,
        correctAnswer: correctAnsText,
        isCorrect: correct
      }
    ]);
  };

  const handleContinue = () => {
    if (!activeQuiz) return;
    if (currentQuestionIdx < activeQuiz.questions.length - 1) {
      setCurrentQuestionIdx((prev) => prev + 1);
    } else {
      // Quiz Finished! Save results
      const finalScore = quizScore + (isCorrect ? 0 : 0); // score already updated in check
      saveQuizResult(activeQuiz.id, quizScore, activeQuiz.questions.length, activeQuiz.xpReward);
      setQuizFinished(true);
    }
  };

  const handleQuitQuiz = () => {
    setActiveQuiz(null);
  };

  // Determine if check button should be enabled
  const canCheck = () => {
    if (!activeQuiz) return false;
    const currentQuestion = activeQuiz.questions[currentQuestionIdx];
    if (currentQuestion.type === 'multiple-choice') return selectedOption !== null;
    if (currentQuestion.type === 'fill-in-the-blank') return typedAnswer.trim() !== '';
    if (currentQuestion.type === 'sentence-ordering') return selectedWords.length > 0;
    if (currentQuestion.type === 'matching') return matchedPairs.length === currentQuestion.matchingPairs?.length;
    return false;
  };

  const progressPercent = activeQuiz ? ((currentQuestionIdx) / activeQuiz.questions.length) * 100 : 0;

  return (
    <div className="flex flex-col gap-6 pb-12 w-full max-w-3xl mx-auto">
      
      {/* 1. QUIZ PLAY STATE */}
      {activeQuiz && (
        <div className="flex flex-col gap-6 w-full min-h-[500px]">
          {/* Header Progress Panel */}
          <div className="flex items-center justify-between gap-4 border-b border-border/40 pb-4 shrink-0 bg-background">
            <button
              onClick={handleQuitQuiz}
              className="flex h-9 w-9 items-center justify-center rounded-xl bg-secondary hover:bg-muted text-muted-foreground hover:text-foreground active:scale-95 transition-all"
              title="Quit Quiz"
            >
              <Icons.X className="h-4.5 w-4.5" />
            </button>

            {/* Custom progress bar */}
            <div className="flex-1 h-3 bg-secondary rounded-full overflow-hidden relative">
              <div 
                className="h-full bg-yellow-400 rounded-full transition-all duration-300"
                style={{ width: `${progressPercent}%` }}
              />
            </div>

            <span className="text-xs font-bold text-muted-foreground whitespace-nowrap">
              Q: {currentQuestionIdx + 1} / {activeQuiz.questions.length}
            </span>
          </div>

          {/* Quiz FINISHED screen */}
          {quizFinished ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex flex-col items-center justify-center text-center p-6 bg-card border border-border/40 rounded-3xl shadow-xl max-w-lg mx-auto"
            >
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-yellow-100 dark:bg-yellow-950/20 text-yellow-500 mb-6 shadow-md animate-bounce">
                <Icons.Trophy className="h-10 w-10 fill-current" />
              </div>
              
              <h3 className="text-2xl font-extrabold text-foreground tracking-tight">Quiz Completed!</h3>
              <p className="text-sm text-muted-foreground mt-2 max-w-sm leading-relaxed">
                Superb effort! You earned <span className="font-extrabold text-emerald-500">+{activeQuiz.xpReward} XP</span> and reviewed key English items.
              </p>

              {/* Score breakdown */}
              <div className="grid grid-cols-2 gap-4 mt-6 w-full max-w-xs border-t border-b border-border/40 py-4 mb-6">
                <div>
                  <span className="block text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Score</span>
                  <span className="text-lg font-extrabold text-foreground">{quizScore} / {activeQuiz.questions.length}</span>
                </div>
                <div>
                  <span className="block text-[10px] font-bold text-muted-foreground uppercase tracking-widest">XP Awarded</span>
                  <span className="text-lg font-extrabold text-emerald-500">+{activeQuiz.xpReward} XP</span>
                </div>
              </div>

              {/* Detailed Review Section */}
              <div className="w-full text-left space-y-3 mb-6 max-h-48 overflow-y-auto pr-1">
                <span className="text-[10px] font-extrabold uppercase tracking-widest text-muted-foreground">Answers Review</span>
                {userHistory.map((item, idx) => (
                  <div 
                    key={idx}
                    className={cn(
                      "p-3 rounded-xl border text-xs space-y-1.5",
                      item.isCorrect 
                        ? "border-emerald-500/20 bg-emerald-50/10 dark:bg-emerald-950/5 text-foreground/80" 
                        : "border-rose-500/20 bg-rose-50/10 dark:bg-rose-950/5 text-foreground/80"
                    )}
                  >
                    <p className="font-bold">Q: {item.question}</p>
                    <p className="text-muted-foreground"><span className="font-semibold text-foreground/60">Your Ans:</span> {item.userAnswer}</p>
                    {!item.isCorrect && <p className="text-emerald-600 dark:text-emerald-500"><span className="font-semibold text-foreground/60">Correct:</span> {item.correctAnswer}</p>}
                  </div>
                ))}
              </div>

              <button
                onClick={() => setActiveQuiz(null)}
                className="w-full py-3 rounded-2xl bg-emerald-500 hover:bg-emerald-600 text-white font-extrabold text-sm shadow-md shadow-emerald-500/10 active:scale-95 transition-all"
              >
                Close & Return
              </button>
            </motion.div>
          ) : (
            /* Active Question Panel */
            <div className="flex-1 flex flex-col justify-between">
              
              <div className="space-y-6">
                {/* Question Text */}
                <h3 className="text-xl font-extrabold text-foreground tracking-tight leading-relaxed">
                  {activeQuiz.questions[currentQuestionIdx].question}
                </h3>

                {/* --- QUESTION VIEW RENDERS --- */}
                
                {/* TYPE 1: MULTIPLE CHOICE */}
                {activeQuiz.questions[currentQuestionIdx].type === 'multiple-choice' && (
                  <div className="grid grid-cols-1 gap-3">
                    {activeQuiz.questions[currentQuestionIdx].options?.map((opt) => {
                      const isSelected = selectedOption === opt;
                      return (
                        <button
                          key={opt}
                          disabled={hasChecked}
                          onClick={() => setSelectedOption(opt)}
                          className={cn(
                            "w-full text-left p-4 rounded-2xl text-sm font-bold border transition-all active:scale-98 shadow-sm",
                            isSelected && !hasChecked && "bg-indigo-500 border-indigo-500 text-white",
                            !isSelected && !hasChecked && "bg-card border-border/50 text-foreground/80 hover:bg-secondary hover:border-border",
                            hasChecked && opt === activeQuiz.questions[currentQuestionIdx].correctAnswer && "bg-emerald-500 border-emerald-500 text-white",
                            hasChecked && isSelected && opt !== activeQuiz.questions[currentQuestionIdx].correctAnswer && "bg-rose-500 border-rose-500 text-white",
                            hasChecked && opt !== activeQuiz.questions[currentQuestionIdx].correctAnswer && !isSelected && "bg-secondary/10 border-border/20 text-muted-foreground opacity-40 shadow-none"
                          )}
                        >
                          {opt}
                        </button>
                      );
                    })}
                  </div>
                )}

                {/* TYPE 2: FILL IN THE BLANK */}
                {activeQuiz.questions[currentQuestionIdx].type === 'fill-in-the-blank' && (
                  <div className="space-y-4">
                    <input
                      type="text"
                      disabled={hasChecked}
                      placeholder="Type your answer here..."
                      value={typedAnswer}
                      onChange={(e) => setTypedAnswer(e.target.value)}
                      className={cn(
                        "w-full bg-secondary/30 border border-border/60 rounded-2xl px-5 py-4 text-base font-bold focus:outline-none focus:ring-1 focus:ring-indigo-500",
                        hasChecked && isCorrect && "bg-emerald-50/20 border-emerald-500 text-emerald-600 dark:text-emerald-400 focus:ring-0",
                        hasChecked && !isCorrect && "bg-rose-50/20 border-rose-500 text-rose-600 dark:text-rose-400 focus:ring-0"
                      )}
                    />
                  </div>
                )}

                {/* TYPE 3: WORD MATCHING */}
                {activeQuiz.questions[currentQuestionIdx].type === 'matching' && activeQuiz.questions[currentQuestionIdx].matchingPairs && (
                  <div className="grid grid-cols-2 gap-4">
                    {/* Left Column (English words) */}
                    <div className="flex flex-col gap-2">
                      <span className="text-[10px] font-extrabold uppercase tracking-widest text-muted-foreground pl-1 mb-1">English Words</span>
                      {activeQuiz.questions[currentQuestionIdx].matchingPairs!.map((pair) => {
                        const isMatched = matchedPairs.includes(pair.left);
                        const isSelected = leftSelected === pair.left;
                        return (
                          <button
                            key={pair.left}
                            disabled={hasChecked || isMatched}
                            onClick={() => handleLeftTap(pair.left)}
                            className={cn(
                              "p-3.5 rounded-xl border text-xs font-bold text-left transition-all active:scale-95 shadow-sm min-h-[50px]",
                              isMatched && "bg-emerald-500 border-emerald-500 text-white opacity-80",
                              isSelected && !isMatched && "bg-indigo-500 border-indigo-500 text-white animate-pulse",
                              !isSelected && !isMatched && "bg-card border-border/50 text-foreground/80 hover:bg-secondary",
                              matchingError && isSelected && "bg-rose-500 border-rose-500 text-white border-2"
                            )}
                          >
                            {pair.left}
                          </button>
                        );
                      })}
                    </div>

                    {/* Right Column (Meanings) */}
                    <div className="flex flex-col gap-2">
                      <span className="text-[10px] font-extrabold uppercase tracking-widest text-muted-foreground pl-1 mb-1">Meanings</span>
                      {/* Scramble right side items so it's a test! */}
                      {activeQuiz.questions[currentQuestionIdx].matchingPairs!
                        .map((pair) => pair.right)
                        .sort((a, b) => a.localeCompare(b)) // simple deterministic alphabetical sort for matching list
                        .map((rightItem) => {
                          const associatedPair = activeQuiz.questions[currentQuestionIdx].matchingPairs!.find(p => p.right === rightItem);
                          const isMatched = associatedPair ? matchedPairs.includes(associatedPair.left) : false;
                          const isSelected = rightSelected === rightItem;

                          return (
                            <button
                              key={rightItem}
                              disabled={hasChecked || isMatched}
                              onClick={() => handleRightTap(rightItem)}
                              className={cn(
                                "p-3.5 rounded-xl border text-xs font-bold text-left transition-all active:scale-95 shadow-sm min-h-[50px]",
                                isMatched && "bg-emerald-500 border-emerald-500 text-white opacity-80",
                                isSelected && !isMatched && "bg-indigo-500 border-indigo-500 text-white animate-pulse",
                                !isSelected && !isMatched && "bg-card border-border/50 text-foreground/80 hover:bg-secondary",
                                matchingError && isSelected && "bg-rose-500 border-rose-500 text-white border-2"
                              )}
                            >
                              {rightItem}
                            </button>
                          );
                        })}
                    </div>
                  </div>
                )}

                {/* TYPE 4: SENTENCE ORDERING */}
                {activeQuiz.questions[currentQuestionIdx].type === 'sentence-ordering' && (
                  <div className="space-y-6">
                    {/* Target line wrapper */}
                    <div className="min-h-[60px] border-b-2 border-dashed border-border/60 bg-secondary/15 rounded-2xl p-4 flex flex-wrap gap-2 items-center">
                      {selectedWords.map((word) => (
                        <button
                          key={word}
                          disabled={hasChecked}
                          onClick={() => handleWordTap(word, true)}
                          className="bg-indigo-500 text-white font-bold text-xs px-3.5 py-2.5 rounded-xl shadow-sm hover:scale-95 transition-transform"
                        >
                          {word}
                        </button>
                      ))}
                      {selectedWords.length === 0 && (
                        <span className="text-xs text-muted-foreground/60 italic font-semibold">Tap word bubbles below to build sentence...</span>
                      )}
                    </div>

                    {/* Scrambled word bank */}
                    <div className="flex flex-wrap gap-2 justify-center pt-4">
                      {scrambledWords.map((word) => (
                        <button
                          key={word}
                          disabled={hasChecked}
                          onClick={() => handleWordTap(word, false)}
                          className="bg-card border border-border/60 text-foreground/80 font-bold text-xs px-3.5 py-2.5 rounded-xl shadow-sm hover:bg-secondary active:scale-95 transition-all"
                        >
                          {word}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

              </div>

              {/* Action and Feedback Banner Footer */}
              <div className="pt-8 mt-8 border-t border-border/30">
                <AnimatePresence>
                  {hasChecked ? (
                    <motion.div
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      className={cn(
                        "rounded-2xl p-4 flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4",
                        isCorrect
                          ? "bg-emerald-500/10 border border-emerald-500/20 text-emerald-800 dark:text-emerald-400"
                          : "bg-rose-500/10 border border-rose-500/20 text-rose-800 dark:text-rose-400"
                      )}
                    >
                      <div className="flex items-center gap-3">
                        <div className={cn(
                          "flex h-9 w-9 items-center justify-center rounded-full text-white shrink-0",
                          isCorrect ? "bg-emerald-500" : "bg-rose-500"
                        )}>
                          {isCorrect ? <Icons.Check className="h-5 w-5" /> : <Icons.X className="h-5 w-5" />}
                        </div>
                        <div>
                          <p className="font-extrabold text-sm">
                            {isCorrect ? 'Excellent! You are correct!' : 'Incorrect. Study spelling/rules!'}
                          </p>
                          {!isCorrect && (
                            <p className="text-xs mt-0.5 leading-relaxed font-semibold">
                              Correct answer: <span className="underline">{activeQuiz.questions[currentQuestionIdx].correctAnswer || (activeQuiz.questions[currentQuestionIdx].orderedAnswer || []).join(' ')}</span>
                            </p>
                          )}
                        </div>
                      </div>

                      <button
                        onClick={handleContinue}
                        className="px-6 py-2.5 bg-primary text-primary-foreground hover:bg-primary/95 font-bold text-xs rounded-xl self-end md:self-center transition-all shadow-md active:scale-95"
                      >
                        Continue
                      </button>
                    </motion.div>
                  ) : (
                    <div className="flex justify-end">
                      <button
                        onClick={handleCheckAnswer}
                        disabled={!canCheck()}
                        className={cn(
                          "px-8 py-3.5 rounded-2xl text-xs font-bold transition-all w-full md:w-fit text-center",
                          canCheck()
                            ? "bg-emerald-500 hover:bg-emerald-600 text-white shadow-md shadow-emerald-500/10 active:scale-95"
                            : "bg-muted text-muted-foreground cursor-not-allowed"
                        )}
                      >
                        Check Answer
                      </button>
                    </div>
                  )}
                </AnimatePresence>
              </div>

            </div>
          )}
        </div>
      )}

      {/* 2. QUIZ HUB VIEW (GRID OF AVAILABLE QUIZZES) */}
      {!activeQuiz && (
        <div className="space-y-6">
          <div className="flex flex-col gap-1">
            <h2 className="text-2xl md:text-3xl font-extrabold text-foreground tracking-tight">Quiz Challenges</h2>
            <p className="text-xs text-muted-foreground">
              Test your grammar and vocabulary in structured multiple-choice, ordering, and matching quizzes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {quizzes.map((quiz) => {
              const scores = quizScores[quiz.id] || [];
              const bestScore = scores.length > 0 ? Math.max(...scores.map((s) => s.score)) : null;
              
              return (
                <div 
                  key={quiz.id}
                  className="rounded-3xl border border-border/40 bg-card p-6 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    {/* Header line */}
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-extrabold uppercase tracking-widest text-emerald-500 bg-emerald-50 dark:bg-emerald-950/20 px-2 py-0.5 rounded-md">
                        {quiz.difficulty}
                      </span>
                      <span className="text-[10px] font-bold text-muted-foreground uppercase">
                        {quiz.type} Quiz
                      </span>
                    </div>

                    <div className="space-y-1">
                      <h3 className="text-lg font-extrabold text-foreground leading-tight tracking-tight">
                        {quiz.title}
                      </h3>
                      <p className="text-xs text-muted-foreground leading-relaxed">
                        {quiz.description}
                      </p>
                    </div>

                    {/* Stats & attempts */}
                    <div className="flex items-center gap-4 bg-secondary/30 rounded-2xl p-3 border border-border/20 text-xs">
                      <div>
                        <span className="block text-[9px] font-bold text-muted-foreground uppercase">Reward</span>
                        <span className="font-extrabold text-emerald-500">+{quiz.xpReward} XP</span>
                      </div>
                      <div className="h-6 w-[1px] bg-border" />
                      <div>
                        <span className="block text-[9px] font-bold text-muted-foreground uppercase">Questions</span>
                        <span className="font-extrabold text-foreground">{quiz.questions.length} items</span>
                      </div>
                      {bestScore !== null && (
                        <>
                          <div className="h-6 w-[1px] bg-border" />
                          <div>
                            <span className="block text-[9px] font-bold text-muted-foreground uppercase">Best Score</span>
                            <span className="font-extrabold text-yellow-500">
                              🏆 {bestScore} / {quiz.questions.length}
                            </span>
                          </div>
                        </>
                      )}
                    </div>
                  </div>

                  <button
                    onClick={() => handleStartQuiz(quiz)}
                    className="w-full mt-6 py-3 rounded-2xl bg-emerald-500 hover:bg-emerald-600 text-white font-extrabold text-xs shadow-md shadow-emerald-500/5 active:scale-95 transition-all flex items-center justify-center gap-1.5"
                  >
                    <Icons.Play className="h-3.5 w-3.5 fill-current" /> Start Challenge
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      )}

    </div>
  );
}

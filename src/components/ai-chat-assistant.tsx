'use client';

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Sparkles, 
  X, 
  Send, 
  Bot, 
  User, 
  Key, 
  ArrowRight,
  Globe,
  CheckCircle,
  HelpCircle,
  MessageSquare,
  MessageCircle
} from 'lucide-react';
import { useProgressStore } from '@/stores/progressStore';
import { vocabularyWords } from '@/data/vocabulary';
import { grammarLessons } from '@/data/grammar';
import { cn } from '@/lib/utils';

interface ChatMessage {
  id: string;
  sender: 'ai' | 'user';
  text: string;
  timestamp: Date;
}

export function AiChatAssistant() {
  const { geminiApiKey } = useProgressStore();
  const activeApiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY || geminiApiKey;
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome',
      sender: 'ai',
      text: "Hello! I am your AI English Tutor. How can I help you today? You can ask me grammar questions, define words, translate sentences to Khmer, or check your writing!",
      timestamp: new Date()
    }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom on new messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  const quickPrompts = [
    { text: "Explain the 'Be' Verb", icon: HelpCircle },
    { text: "Translate: 'Learning is fun' to Khmer", icon: Globe },
    { text: "Check grammar: 'He don't like apples'", icon: CheckCircle },
    { text: "Give me 3 conversation tips", icon: Sparkles }
  ];

  const handleSend = async (textToSend: string) => {
    if (!textToSend.trim()) return;

    const userMsg: ChatMessage = {
      id: Math.random().toString(36).substring(2, 9),
      sender: 'user',
      text: textToSend,
      timestamp: new Date()
    };

    setMessages((prev) => [...prev, userMsg]);
    setInput('');
    setIsTyping(true);

    try {
      if (activeApiKey) {
        // Live Gemini API client-side fetch call
        const responseText = await callGeminiApi(textToSend, activeApiKey);
        const aiMsg: ChatMessage = {
          id: Math.random().toString(36).substring(2, 9),
          sender: 'ai',
          text: responseText,
          timestamp: new Date()
        };
        setMessages((prev) => [...prev, aiMsg]);
      } else {
        // Local parsed response fallback
        const responseText = getLocalTutorResponse(textToSend);
        await new Promise((r) => setTimeout(r, 850)); // natural typing delay
        const aiMsg: ChatMessage = {
          id: Math.random().toString(36).substring(2, 9),
          sender: 'ai',
          text: responseText,
          timestamp: new Date()
        };
        setMessages((prev) => [...prev, aiMsg]);
      }
    } catch (e: any) {
      const errorMsg: ChatMessage = {
        id: Math.random().toString(36).substring(2, 9),
        sender: 'ai',
        text: `Oops! I couldn't reach the AI service right now. Error: ${e.message}. Please double-check your Gemini API Key in Settings!`,
        timestamp: new Date()
      };
      setMessages((prev) => [...prev, errorMsg]);
    } finally {
      setIsTyping(false);
    }
  };

  // Helper to format inline tags (bold, code, etc.)
  const formatInlineTokens = (str: string): string => {
    let result = str;
    // Bold: **text**
    result = result.replace(/\*\*([^*]+?)\*\*/g, '<strong class="font-extrabold text-indigo-600 dark:text-indigo-400">$1</strong>');
    // Inline code: `code`
    result = result.replace(/`([^`]+?)`/g, '<code class="bg-indigo-50 dark:bg-indigo-950/40 border border-indigo-100/50 dark:border-indigo-900/30 px-1.5 py-0.5 rounded-md font-mono text-[11px] font-bold text-indigo-500">$1</code>');
    return result;
  };
 
  // Premium parser to render Markdown strings into custom React elements
  const renderFormattedText = (text: string) => {
    const lines = text.split('\n');
    return lines.map((line, idx) => {
      const trimmed = line.trim();
 
      // 1. Horizontal Rule: --- or ***
      if (trimmed === '---' || trimmed === '***') {
        return <hr key={idx} className="my-3.5 border-border/50" />;
      }
 
      // 2. Headings: #, ##, ###, ####
      if (trimmed.startsWith('#')) {
        const match = trimmed.match(/^(#{1,6})\s+(.+)$/);
        if (match) {
          const level = match[1].length;
          const headingText = match[2];
          const formattedHeading = formatInlineTokens(headingText);
 
          if (level === 1 || level === 2) {
            return (
              <h4 key={idx} className="text-base font-black text-indigo-600 dark:text-indigo-400 mt-4 mb-2 tracking-tight text-left">
                <span dangerouslySetInnerHTML={{ __html: formattedHeading }} />
              </h4>
            );
          } else if (level === 3) {
            return (
              <h5 key={idx} className="text-sm font-extrabold text-indigo-600 dark:text-indigo-400 mt-3.5 mb-1.5 tracking-tight text-left">
                <span dangerouslySetInnerHTML={{ __html: formattedHeading }} />
              </h5>
            );
          } else {
            return (
              <h6 key={idx} className="text-[12px] font-extrabold text-foreground mt-3 mb-1.5 text-left">
                <span dangerouslySetInnerHTML={{ __html: formattedHeading }} />
              </h6>
            );
          }
        }
      }
 
      // 3. Format Bullet Lists
      const isBullet = trimmed.startsWith('*') || trimmed.startsWith('•') || trimmed.startsWith('-');
      if (isBullet) {
        const bulletText = trimmed.replace(/^[\*\-\•]\s+/, '');
        const formattedBullet = formatInlineTokens(bulletText);
        return (
          <li key={idx} className="ml-4 list-disc text-left my-1 pl-1 text-foreground/90 font-semibold leading-relaxed">
            <span dangerouslySetInnerHTML={{ __html: formattedBullet }} />
          </li>
        );
      }
 
      // Empty spacing
      if (trimmed === '') {
        return <div key={idx} className="h-2" />;
      }
 
      // Normal paragraph
      const formattedText = formatInlineTokens(line);
      return (
        <p 
          key={idx} 
          className="text-left font-semibold text-foreground/90 leading-relaxed mb-1.5 last:mb-0" 
          dangerouslySetInnerHTML={{ __html: formattedText }} 
        />
      );
    });
  };

  return (
    <>
      {/* 1. Floating Glowing Button Widget */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={() => setIsOpen(true)}
            className="fixed bottom-6 right-6 z-40 h-14 w-14 rounded-full bg-gradient-to-tr from-indigo-500 via-indigo-600 to-purple-600 text-white flex items-center justify-center shadow-lg cursor-pointer active:scale-95 hover:scale-110 transition-all hover:rotate-3 group"
            style={{
              boxShadow: '0 8px 30px rgba(99, 102, 241, 0.4)'
            }}
            title="Open AI Tutor"
          >
            <span className="absolute inset-0 rounded-full bg-indigo-500 animate-ping opacity-25 pointer-events-none" />
            <Sparkles className="h-6 w-6 group-hover:animate-pulse" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* 2. Glassmorphism Chat Panel Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 40, scale: 0.96 }}
            transition={{ type: 'spring', damping: 26, stiffness: 300 }}
            className="fixed bottom-6 right-6 z-40 w-[360px] sm:w-[410px] h-[550px] bg-card/95 backdrop-blur-md border border-border/80 rounded-[28px] shadow-2xl flex flex-col overflow-hidden max-w-[calc(100vw-2rem)] max-h-[calc(100vh-2rem)]"
          >
            {/* Chat Panel Premium Header */}
            <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-600 p-4 text-white flex items-center justify-between shrink-0 shadow-sm relative">
              <div className="flex items-center gap-3">
                {/* AI Avatar */}
                <div className="relative">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/15 border border-white/10 shadow-inner">
                    <Bot className="h-5.5 w-5.5 text-white" />
                  </div>
                  {/* Glowing Active Status indicator */}
                  <span className="absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full border-2 border-indigo-500 bg-emerald-400 shadow-sm">
                    <span className="absolute inset-0 rounded-full bg-emerald-400 animate-ping opacity-75" />
                  </span>
                </div>

                <div className="text-left">
                  <h4 className="text-xs font-extrabold tracking-tight flex items-center gap-1">
                    FluentPath Assistant <Sparkles className="h-3 w-3 text-yellow-300 fill-yellow-300" />
                  </h4>
                  <p className="text-[9px] text-indigo-100 font-extrabold uppercase tracking-widest">Live AI Tutor • Online</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="h-8 w-8 flex items-center justify-center rounded-xl hover:bg-white/15 text-white/80 hover:text-white transition-all active:scale-90"
              >
                <X className="h-4.5 w-4.5" />
              </button>
            </div>

            {/* Offline/Local mode warning notice */}
            {!activeApiKey && (
              <div className="bg-amber-500/10 border-b border-amber-500/10 px-4 py-2 flex items-center justify-between gap-2 shrink-0">
                <div className="flex items-center gap-1.5 text-[9px] font-extrabold text-amber-600 dark:text-amber-500">
                  <Key className="h-3 w-3" />
                  <span>Local Mode: Add Gemini API Key to enable Live chatbot</span>
                </div>
                <a 
                  href="/settings" 
                  onClick={() => setIsOpen(false)}
                  className="text-[9px] font-extrabold text-indigo-500 hover:underline flex items-center gap-0.5"
                >
                  Settings <ArrowRight className="h-2.5 w-2.5" />
                </a>
              </div>
            )}

            {/* Messages Log Panel */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-secondary/15">
              {messages.map((msg) => {
                const isAI = msg.sender === 'ai';
                return (
                  <div
                    key={msg.id}
                    className={cn(
                      "flex gap-3 max-w-[85%] items-start",
                      isAI ? "self-start" : "ml-auto flex-row-reverse"
                    )}
                  >
                    {/* User / Bot Thumbnail */}
                    <div className={cn(
                      "flex h-8 w-8 items-center justify-center rounded-xl shrink-0 text-white shadow-sm border",
                      isAI 
                        ? "bg-indigo-500 border-indigo-400/20" 
                        : "bg-emerald-500 border-emerald-400/20"
                    )}>
                      {isAI ? <Bot className="h-4 w-4" /> : <User className="h-4 w-4" />}
                    </div>

                    {/* Chat Bubble */}
                    <div className={cn(
                      "rounded-2xl px-4 py-3 shadow-sm border text-xs",
                      isAI 
                        ? "bg-card border-border/40 text-foreground rounded-tl-none" 
                        : "bg-gradient-to-tr from-indigo-500 to-indigo-600 border-indigo-500/30 text-white rounded-tr-none"
                    )}>
                      {isAI ? (
                        <div className="space-y-1">{renderFormattedText(msg.text)}</div>
                      ) : (
                        <p className="whitespace-pre-line select-text text-left font-semibold leading-relaxed">
                          {msg.text}
                        </p>
                      )}
                    </div>
                  </div>
                );
              })}

              {/* Typing indicator */}
              {isTyping && (
                <div className="flex gap-3 items-center max-w-[80%]">
                  <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-indigo-500 text-white shadow-sm shrink-0 animate-pulse">
                    <Bot className="h-4 w-4" />
                  </div>
                  <div className="bg-card border border-border/40 rounded-2xl rounded-tl-none px-4 py-3 shadow-sm text-xs font-semibold text-muted-foreground flex gap-1.5 items-center">
                    <span className="flex h-1.5 w-1.5 rounded-full bg-indigo-500 animate-bounce [animation-delay:-0.3s]" />
                    <span className="flex h-1.5 w-1.5 rounded-full bg-indigo-500 animate-bounce [animation-delay:-0.15s]" />
                    <span className="flex h-1.5 w-1.5 rounded-full bg-indigo-500 animate-bounce" />
                    <span className="ml-1 text-[10px] tracking-wide font-extrabold uppercase text-muted-foreground/80">Tutor is thinking...</span>
                  </div>
                </div>
              )}
              
              <div ref={messagesEndRef} />
            </div>

            {/* Suggestions Quick Prompts Grid */}
            {messages.length === 1 && !isTyping && (
              <div className="px-4 py-3 border-t border-border/30 bg-card flex flex-col gap-2 shrink-0">
                <span className="text-[9px] font-extrabold text-muted-foreground uppercase tracking-widest text-left pl-0.5 flex items-center gap-1.5">
                  <MessageSquare className="h-3 w-3 text-indigo-500" /> Suggested Questions
                </span>
                <div className="grid grid-cols-2 gap-2">
                  {quickPrompts.map((p, idx) => {
                    const Icon = p.icon;
                    return (
                      <button
                        key={idx}
                        onClick={() => handleSend(p.text)}
                        className="p-2.5 rounded-xl border border-border/50 hover:border-indigo-500/30 bg-secondary/30 hover:bg-indigo-500/5 text-[10px] font-bold text-muted-foreground hover:text-indigo-500 transition-all text-left flex gap-2 items-start active:scale-[0.98] group"
                      >
                        <Icon className="h-3.5 w-3.5 text-muted-foreground/60 group-hover:text-indigo-500 shrink-0 mt-0.5" />
                        <span className="line-clamp-2 leading-tight">{p.text}</span>
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Input Action Bar */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSend(input);
              }}
              className="border-t border-border/40 p-3 bg-card flex items-center gap-2 shrink-0"
            >
              <input
                type="text"
                placeholder="Ask your tutor anything..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                disabled={isTyping}
                className="flex-1 bg-secondary/40 border border-border/60 rounded-xl px-4 py-2.5 text-xs font-bold focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/10 placeholder:text-muted-foreground/60 transition-all"
              />
              <button
                type="submit"
                disabled={!input.trim() || isTyping}
                className={cn(
                  "flex h-9 w-9 items-center justify-center rounded-xl transition-all shadow-md active:scale-90 shrink-0",
                  !input.trim() || isTyping
                    ? "bg-secondary text-muted-foreground/40 cursor-not-allowed shadow-none border border-border/40"
                    : "bg-gradient-to-tr from-indigo-500 to-indigo-600 hover:from-indigo-600 hover:to-indigo-700 text-white shadow-indigo-500/10"
                )}
              >
                <Send className="h-4 w-4" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

// -------------------------------------------------------------
// Live Gemini API Client Call Integration
// -------------------------------------------------------------
async function callGeminiApi(prompt: string, apiKey: string): Promise<string> {
  const configs = [
    { version: 'v1', model: 'gemini-3.6-flash' },
    { version: 'v1beta', model: 'gemini-3.6-flash' },
    { version: 'v1', model: 'gemini-3.5-flash' },
    { version: 'v1beta', model: 'gemini-3.5-flash' },
    { version: 'v1', model: 'gemini-3.5-flash-lite' },
    { version: 'v1beta', model: 'gemini-3.5-flash-lite' },
    { version: 'v1', model: 'gemini-3.1-flash-lite' },
    { version: 'v1beta', model: 'gemini-3.1-flash-lite' },
    { version: 'v1beta', model: 'gemini-flash-latest' },
    { version: 'v1', model: 'gemini-2.0-flash' },
    { version: 'v1beta', model: 'gemini-2.0-flash' },
    { version: 'v1', model: 'gemini-1.5-flash' },
    { version: 'v1beta', model: 'gemini-1.5-flash' },
    { version: 'v1', model: 'gemini-1.5-pro' },
    { version: 'v1beta', model: 'gemini-1.5-pro' },
    { version: 'v1beta', model: 'gemini-pro' }
  ];
 
  let lastError: Error | null = null;
  const isOauth = apiKey.startsWith('ya29.');
 
  for (const config of configs) {
    try {
      const url = isOauth
        ? `https://generativelanguage.googleapis.com/${config.version}/models/${config.model}:generateContent`
        : `https://generativelanguage.googleapis.com/${config.version}/models/${config.model}:generateContent?key=${apiKey}`;
      
      const headers: Record<string, string> = {
        'Content-Type': 'application/json'
      };
 
      if (isOauth) {
        headers['Authorization'] = `Bearer ${apiKey}`;
      }
 
      const payload = {
        contents: [
          {
            parts: [
              {
                text: `You are an expert, supportive English language tutor bot. Your goal is to guide learners, check spelling/grammar mistakes, explain tenses, and translate words/sentences to Khmer clearly.
 
Instructions:
1. Return answers in structured, readable format. Keep explanations concise, clear, and direct.
2. If the user asks for translations, translate them into correct Khmer script (អក្សរខ្មែរ).
3. If they make spelling/grammar mistakes, point out the error gently, show the corrected sentence, and explain the rule in 1-2 sentences.
4. Keep the tone friendly, encouraging, and helpful.
 
User query: "${prompt}"`
              }
            ]
          }
        ]
      };
 
      const response = await fetch(url, {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(payload)
      });
 
      if (!response.ok) {
        const errData = await response.json().catch(() => ({}));
        const message = errData.error?.message || `HTTP ${response.status}`;
        throw new Error(message);
      }
 
      const data = await response.json();
      const text = data.candidates?.[0]?.content?.parts?.[0]?.text;
      if (text) {
        return text;
      }
    } catch (e: any) {
      console.warn(`Gemini API call failed for ${config.model} (${config.version}):`, e.message);
      lastError = e;
      if (e.message.toLowerCase().includes('key not valid') || e.message.toLowerCase().includes('api key')) {
        break;
      }
    }
  }
 
  throw lastError || new Error("Failed to contact Gemini API.");
}

// -------------------------------------------------------------
// Local Parser Fallback (Offline Mode helper)
// -------------------------------------------------------------
function getLocalTutorResponse(query: string): string {
  const cleanQuery = query.toLowerCase().trim();

  // 1. Check for specific vocabulary word definitions
  if (cleanQuery.includes('what is') || cleanQuery.includes('define') || cleanQuery.includes('what does')) {
    // Extract the word
    const match = cleanQuery.match(/(?:what is|define|what does)\s+['"]?([a-zA-Z\s]+?)['"]?(?:\s*mean|\s*\?)?$/);
    if (match && match[1]) {
      const targetWord = match[1].trim().toLowerCase();
      const found = vocabularyWords.find(w => w.word.toLowerCase() === targetWord);
      
      if (found) {
        return `📖 **Word Lookup:** **${found.word}** (${found.partOfSpeech}) [${found.ipa}]
        
**Definition:** ${found.meaning}
**Khmer:** ${found.meaningKhmer || 'គ្មានការបកប្រែខ្មែរ'}
        
**Example:** "${found.exampleSentence}"
**Khmer example:** ${found.exampleKhmer || ''}`;
      }
    }
  }

  // 2. Check for grammar lesson topics
  if (cleanQuery.includes('verb') || cleanQuery.includes('be verb') || cleanQuery.includes('tense') || cleanQuery.includes('present') || cleanQuery.includes('past') || cleanQuery.includes('future')) {
    // Find a matching lesson
    const matchedLesson = grammarLessons.find(lesson => 
      cleanQuery.includes(lesson.id) || 
      cleanQuery.includes(lesson.title.toLowerCase()) ||
      lesson.title.toLowerCase().split(' ').some(word => word.length > 2 && cleanQuery.includes(word))
    );

    if (matchedLesson) {
      return `✍️ **Grammar Topic:** **${matchedLesson.title}** (${matchedLesson.level} Track)
      
**Rule explanation:** ${matchedLesson.explanation}
**Khmer explanation:** ${matchedLesson.explanationKhmer || ''}
      
**Takeaway summary:** ${matchedLesson.summary}
**Khmer summary:** ${matchedLesson.summaryKhmer || ''}`;
    }
  }

  // 3. Grammar corrections check
  if (cleanQuery.includes('check grammar') || cleanQuery.includes('correct this') || cleanQuery.includes('check this')) {
    return `📝 **Grammar Checker:** 
    
I can check any sentence for spelling and grammar errors if you enable **Live Mode**! Please go to **Settings** and input your **Gemini API Key**.

In the meantime, here is a helpful offline tip:
• Third-person singular subjects (**He**, **She**, **It**) require verbs ending in **-s** or **-es** in the present simple (e.g., *"He plays"*, not *"He play"*).`;
  }

  // Default response
  return `I am running in **Local Tutor Mode**! 

To unlock the full power of Gemini (ask any free question, get live sentence spelling checks, or detailed conversation prompts), please enter your **Gemini API Key** in the **Settings** panel!

In Local offline mode, you can type:
• *"Explain Be Verb"*
• *"Present Continuous"*
• *"What is Message?"*
• *"Define Software"*`;
}

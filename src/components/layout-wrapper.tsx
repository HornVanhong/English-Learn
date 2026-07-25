'use client';

import React, { useEffect, useState } from 'react';
import { useProgressStore } from '@/stores/progressStore';

interface LayoutWrapperProps {
  children: React.ReactNode;
}

export function LayoutWrapper({ children }: LayoutWrapperProps) {
  const fontSize = useProgressStore((state) => state.fontSize);
  const updateStreak = useProgressStore((state) => state.updateStreak);
  const [mounted, setMounted] = useState(false);

  // Set mounted state
  useEffect(() => {
    setMounted(true);
    // Automatically trigger daily streak update on mount
    updateStreak();
  }, [updateStreak]);

  // Adjust HTML font-size class
  useEffect(() => {
    if (!mounted) return;
    
    const html = document.documentElement;
    html.classList.remove('font-size-sm', 'font-size-base', 'font-size-lg', 'font-size-xl');
    html.classList.add(`font-size-${fontSize}`);
  }, [fontSize, mounted]);

  // Avoid hydration mismatch by rendering a loader/skeleton or plain structure before hydration completes
  if (!mounted) {
    return <div className="min-h-screen bg-background opacity-0 transition-opacity duration-300" />;
  }

  return <>{children}</>;
}

'use client';

import { Sidebar } from './sidebar';
import { Header } from './header';
import { MobileNav } from './mobile-nav';
import { PageTransition } from './page-transition';
import { ToastContainer } from './toast-container';
import { AiChatAssistant } from './ai-chat-assistant';

interface MainLayoutProps {
  children: React.ReactNode;
}

export function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-background">
      {/* Toast Notifications Overlay */}
      <ToastContainer />

      {/* Floating AI Chat Assistant */}
      <AiChatAssistant />

      {/* Desktop Sidebar */}
      <Sidebar />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col md:pl-64 min-w-0 pb-16 md:pb-0">
        {/* Top Header */}
        <Header />

        {/* Dynamic page content wrapped in transition animations */}
        <main className="flex-1 flex flex-col p-4 md:p-8 max-w-6xl mx-auto w-full">
          <PageTransition>
            {children}
          </PageTransition>
        </main>
      </div>

      {/* Mobile Bottom Navigation */}
      <MobileNav />
    </div>
  );
}

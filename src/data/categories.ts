import { VocabularyCategory } from '@/types';

export const categories: VocabularyCategory[] = [
  // A1 Topics
  { id: 'greetings', name: 'Greetings', icon: 'Smile', color: 'from-green-400 to-emerald-500', description: 'Hello, goodbye, and polite phrases.' },
  { id: 'family', name: 'Family', icon: 'Users', color: 'from-pink-400 to-rose-500', description: 'Relatives and relationship nouns.' },
  { id: 'numbers', name: 'Numbers', icon: 'Hash', color: 'from-indigo-400 to-indigo-500', description: 'Counting, ordering, and scores.' },
  { id: 'food', name: 'Food', icon: 'Utensils', color: 'from-amber-400 to-orange-500', description: 'Fruit, vegetables, meals, and eating.' },
  { id: 'colors', name: 'Colors', icon: 'Palette', color: 'from-purple-400 to-indigo-500', description: 'Common shades and colors.' },
  { id: 'school', name: 'School', icon: 'BookOpen', color: 'from-violet-400 to-purple-500', description: 'Academic life, pencils, and classrooms.' },
  { id: 'home', name: 'Home', icon: 'Home', color: 'from-emerald-400 to-teal-500', description: 'Rooms, furniture, and house verbs.' },
  { id: 'clothes', name: 'Clothes', icon: 'Shirt', color: 'from-fuchsia-400 to-pink-500', description: 'Apparel and getting dressed.' },
  { id: 'time', name: 'Time', icon: 'Clock', color: 'from-sky-400 to-blue-500', description: 'Telling time, clocks, and hours.' },
  { id: 'days', name: 'Days', icon: 'CalendarDays', color: 'from-cyan-400 to-teal-500', description: 'Monday to Sunday and weekends.' },
  { id: 'months', name: 'Months', icon: 'Calendar', color: 'from-blue-400 to-purple-500', description: 'January to December and years.' },

  // A2 Topics
  { id: 'shopping', name: 'Shopping', icon: 'ShoppingBag', color: 'from-yellow-400 to-amber-500', description: 'Paying, cost, buying, and selling.' },
  { id: 'travel', name: 'Travel', icon: 'Plane', color: 'from-teal-400 to-cyan-500', description: 'Hotels, luggage, passports, and sights.' },
  { id: 'health', name: 'Health', icon: 'HeartPulse', color: 'from-red-400 to-pink-500', description: 'Sickness, medicine, doctors, and pain.' },
  { id: 'weather', name: 'Weather', icon: 'CloudRain', color: 'from-sky-400 to-cyan-500', description: 'Rain, wind, sun, and forecast.' },
  { id: 'technology', name: 'Technology', icon: 'Laptop', color: 'from-blue-500 to-indigo-600', description: 'Computers, internet, and phones.' },
  { id: 'work', name: 'Work', icon: 'Briefcase', color: 'from-slate-400 to-slate-600', description: 'Jobs, offices, salaries, and careers.' },
  { id: 'transportation', name: 'Transportation', icon: 'Car', color: 'from-lime-400 to-emerald-500', description: 'Cars, trains, buses, and stations.' },

  // B1+ Topics
  { id: 'finance', name: 'Finance & Economy', icon: 'Coins', color: 'from-emerald-500 to-teal-600', description: 'Banking, investments, and currency.' },
  { id: 'environment', name: 'Environment', icon: 'Trees', color: 'from-green-400 to-emerald-600', description: 'Ecosystems, climate, and pollution.' },
  { id: 'science', name: 'Science', icon: 'Cpu', color: 'from-violet-500 to-purple-600', description: 'Research, gravity, space, and theories.' },
  { id: 'politics', name: 'Politics', icon: 'Globe', color: 'from-indigo-500 to-blue-600', description: 'Government, laws, and policies.' },
  { id: 'arts', name: 'Arts & Media', icon: 'Music', color: 'from-pink-500 to-rose-600', description: 'Literature, paintings, and concerts.' },
  { id: 'business', name: 'Business (Adv)', icon: 'Building', color: 'from-slate-500 to-slate-700', description: 'Corporate administration and contracts.' },
  { id: 'daily-conversation', name: 'Daily Life', icon: 'MessageSquare', color: 'from-slate-400 to-slate-500', description: 'Everyday conversations and phrases.' }
];

export const levels = [
  { id: 'A1', name: 'A1', badge: 'Elementary', color: 'bg-green-500/10 text-green-500 border-green-500/20' },
  { id: 'A2', name: 'A2', badge: 'Pre-intermediate', color: 'bg-emerald-500/10 text-emerald-500 border-emerald-500/20' },
  { id: 'B1', name: 'B1', badge: 'Intermediate', color: 'bg-blue-500/10 text-blue-500 border-blue-500/20' },
  { id: 'B1+', name: 'B1+', badge: 'Upper-intermediate', color: 'bg-indigo-500/10 text-indigo-500 border-indigo-500/20' },
  { id: 'B2', name: 'B2', badge: 'Pre-advanced', color: 'bg-purple-500/10 text-purple-500 border-purple-500/20' },
  { id: 'C1', name: 'C1', badge: 'Advanced', color: 'bg-rose-500/10 text-rose-500 border-rose-500/20' }
];

import { VocabularyCategory } from '@/types';

export const categories: VocabularyCategory[] = [
  {
    id: 'daily-conversation',
    name: 'Daily Conversation',
    icon: 'MessageCircle',
    color: 'from-blue-400 to-indigo-500',
    description: 'Essential phrases and idioms for everyday chatter.'
  },
  {
    id: 'family',
    name: 'Family & Relationships',
    icon: 'Users',
    color: 'from-pink-400 to-rose-500',
    description: 'Words to describe relatives, feelings, and social circles.'
  },
  {
    id: 'food',
    name: 'Food & Dining',
    icon: 'Utensils',
    color: 'from-amber-400 to-orange-500',
    description: 'Vocabulary for cooking, ordering in restaurants, and ingredients.'
  },
  {
    id: 'animals',
    name: 'Animals & Nature',
    icon: 'Rabbit',
    color: 'from-emerald-400 to-teal-500',
    description: 'Common animals, habitats, and environmental terms.'
  },
  {
    id: 'school',
    name: 'School & Education',
    icon: 'BookOpen',
    color: 'from-violet-400 to-purple-500',
    description: 'Academic subjects, classroom items, and learning verbs.'
  },
  {
    id: 'travel',
    name: 'Travel & Transport',
    icon: 'Plane',
    color: 'from-sky-400 to-cyan-500',
    description: 'Airport terminology, directions, and vacation nouns.'
  },
  {
    id: 'business',
    name: 'Business & Work',
    icon: 'Briefcase',
    color: 'from-slate-400 to-slate-600',
    description: 'Office talk, job roles, meetings, and financial terms.'
  },
  {
    id: 'technology',
    name: 'Technology & Media',
    icon: 'Laptop',
    color: 'from-cyan-500 to-blue-600',
    description: 'Computing, software, internet, and gadget vocabulary.'
  },
  {
    id: 'health',
    name: 'Health & Body',
    icon: 'HeartPulse',
    color: 'from-red-400 to-pink-500',
    description: 'Human anatomy, common sicknesses, and healthy habits.'
  },
  {
    id: 'shopping',
    name: 'Shopping & Clothes',
    icon: 'ShoppingBag',
    color: 'from-fuchsia-400 to-pink-600',
    description: 'Clothing styles, buying verbs, prices, and sizes.'
  },
  {
    id: 'sports',
    name: 'Sports & Hobbies',
    icon: 'Activity',
    color: 'from-lime-400 to-emerald-600',
    description: 'Popular games, sports gear, and leisure actions.'
  },
  {
    id: 'nature',
    name: 'Nature & Weather',
    icon: 'Trees',
    color: 'from-green-400 to-emerald-600',
    description: 'Weather patterns, landscapes, and seasons.'
  }
];

export const levels = [
  { id: 'A1', name: 'A1', badge: 'Elementary', color: 'bg-green-500/10 text-green-500 border-green-500/20' },
  { id: 'A2', name: 'A2', badge: 'Pre-intermediate', color: 'bg-emerald-500/10 text-emerald-500 border-emerald-500/20' },
  { id: 'B1', name: 'B1', badge: 'Intermediate', color: 'bg-blue-500/10 text-blue-500 border-blue-500/20' },
  { id: 'B1+', name: 'B1+', badge: 'Upper-intermediate', color: 'bg-indigo-500/10 text-indigo-500 border-indigo-500/20' },
  { id: 'B2', name: 'B2', badge: 'Pre-advanced', color: 'bg-purple-500/10 text-purple-500 border-purple-500/20' },
  { id: 'C1', name: 'C1', badge: 'Advanced', color: 'bg-rose-500/10 text-rose-500 border-rose-500/20' }
];

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
  { id: 'beginner', name: 'Beginner', badge: 'A1-A2', color: 'bg-green-500' },
  { id: 'intermediate', name: 'Intermediate', badge: 'B1-B2', color: 'bg-yellow-500' },
  { id: 'advanced', name: 'Advanced', badge: 'C1-C2', color: 'bg-red-500' }
];

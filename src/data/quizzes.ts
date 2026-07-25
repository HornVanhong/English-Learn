import { Quiz } from '@/types';

export const quizzes: Quiz[] = [
  {
    id: 'quiz-vocabulary-basics',
    title: 'Vocabulary Basics',
    description: 'Test your knowledge on beginner words: food, family, and animal vocabulary.',
    type: 'vocabulary',
    category: 'Daily Life',
    difficulty: 'beginner',
    xpReward: 30,
    questions: [
      {
        id: 'vb-q1',
        type: 'multiple-choice',
        question: 'Which of the following is the round, red or green fruit that is crisp and sweet?',
        options: ['Banana', 'Orange', 'Apple', 'Grape'],
        correctAnswer: 'Apple'
      },
      {
        id: 'vb-q2',
        type: 'fill-in-the-blank',
        question: 'Complete the sentence: "My mother and father are my ______."',
        options: ['siblings', 'parents', 'ancestors', 'children'],
        correctAnswer: 'parents'
      },
      {
        id: 'vb-q3',
        type: 'matching',
        question: 'Match the English words with their correct meaning:',
        matchingPairs: [
          { left: 'Dog', right: 'Domesticated pet that wags its tail' },
          { left: 'Mother', right: 'A female parent' },
          { left: 'Book', right: 'Sheets of paper bound together' },
          { left: 'Hello', right: 'A friendly greeting' }
        ]
      },
      {
        id: 'vb-q4',
        type: 'sentence-ordering',
        question: 'Arrange the words to form a correct greeting:',
        sentenceWords: ['you', 'how', 'Hello', 'doing', 'are', '?'],
        orderedAnswer: ['Hello', 'how', 'are', 'you', 'doing', '?']
      }
    ]
  },
  {
    id: 'quiz-grammar-essentials',
    title: 'Grammar Essentials',
    description: 'Show your skills in using the Be Verb, articles (a/an/the), and pronouns correctly.',
    type: 'grammar',
    category: 'Grammar Rules',
    difficulty: 'beginner',
    xpReward: 40,
    questions: [
      {
        id: 'ge-q1',
        type: 'multiple-choice',
        question: 'Which sentence uses the verb "to be" correctly?',
        options: [
          'They is very excited.',
          'They are very excited.',
          'They am very excited.',
          'They be very excited.'
        ],
        correctAnswer: 'They are very excited.'
      },
      {
        id: 'ge-q2',
        type: 'fill-in-the-blank',
        question: 'Fill in the blank: "She is studying at ______ university in New York."',
        options: ['a', 'an', 'the', 'no article'],
        correctAnswer: 'a'
      },
      {
        id: 'ge-q3',
        type: 'sentence-ordering',
        question: 'Reorder the blocks to ask a grammatically correct question:',
        sentenceWords: ['doctor', 'she', 'Is', 'a', '?'],
        orderedAnswer: ['Is', 'she', 'a', 'doctor', '?']
      },
      {
        id: 'ge-q4',
        type: 'multiple-choice',
        question: 'Which pronoun belongs in the blank? "That is my car. The keys are ______."',
        options: ['my', 'mine', 'me', 'myself'],
        correctAnswer: 'mine'
      }
    ]
  },
  {
    id: 'quiz-travel-work',
    title: 'Travel & Business English',
    description: 'Check your intermediate understanding of travel schedules and office vocabulary.',
    type: 'mixed',
    category: 'Travel & Work',
    difficulty: 'intermediate',
    xpReward: 50,
    questions: [
      {
        id: 'tw-q1',
        type: 'multiple-choice',
        question: 'What is a "planned route or journey schedule" called?',
        options: ['Itinerary', 'Wanderlust', 'Ticket', 'Passport'],
        correctAnswer: 'Itinerary'
      },
      {
        id: 'tw-q2',
        type: 'fill-in-the-blank',
        question: 'Complete the business action: "We had to ______ a contract to get higher pay."',
        options: ['negotiate', 'dismiss', 'obsolete', 'apologize'],
        correctAnswer: 'negotiate'
      },
      {
        id: 'tw-q3',
        type: 'matching',
        question: 'Match the travel/business words with their descriptions:',
        matchingPairs: [
          { left: 'Ticket', right: 'Voucher showing admission or booking' },
          { left: 'Entrepreneur', right: 'A person who founds and runs a business' },
          { left: 'Negotiate', right: 'To debate and reach a compromise' },
          { left: 'Wanderlust', right: 'An impulse or desire to travel' }
        ]
      },
      {
        id: 'tw-q4',
        type: 'sentence-ordering',
        question: 'Arrange the sentence to discuss future travel plans:',
        sentenceWords: ['flying', 'are', 'We', 'Paris', 'this', 'to', 'Friday', '.'],
        orderedAnswer: ['We', 'are', 'flying', 'to', 'Paris', 'this', 'Friday', '.']
      }
    ]
  },
  {
    id: 'quiz-advanced-structures',
    title: 'Advanced Grammar & Vocab',
    description: 'Challenge yourself with conditionals, passive voice, and complex vocabulary.',
    type: 'mixed',
    category: 'Advanced Mastery',
    difficulty: 'advanced',
    xpReward: 60,
    questions: [
      {
        id: 'as-q1',
        type: 'multiple-choice',
        question: 'Which of the following sentences represents a Second Conditional (hypothetical)?',
        options: [
          'If you heat ice, it melts.',
          'If it rains, we will stay home.',
          'If I were you, I would take that job.',
          'If I had seen her, I would have waved.'
        ],
        correctAnswer: 'If I were you, I would take that job.'
      },
      {
        id: 'as-q2',
        type: 'fill-in-the-blank',
        question: 'Complete the passive sentence: "The book ______ by the time I arrived."',
        options: ['was written', 'had been written', 'writes', 'is written'],
        correctAnswer: 'had been written'
      },
      {
        id: 'as-q3',
        type: 'multiple-choice',
        question: 'What is the meaning of the word "Eloquent"?',
        options: [
          'No longer produced or out of date',
          'Persuasive and fluent in speaking or writing',
          'Unlikely to change or persistent',
          'Lacking restraint in spending money'
        ],
        correctAnswer: 'Persuasive and fluent in speaking or writing'
      },
      {
        id: 'as-q4',
        type: 'sentence-ordering',
        question: 'Arrange in the passive voice with agent:',
        sentenceWords: ['written', 'Shakespeare', 'The', 'was', 'by', 'play', '.'],
        orderedAnswer: ['The', 'play', 'was', 'written', 'by', 'Shakespeare', '.']
      }
    ]
  }
];

export interface PersonalityQuestion {
  id: number;
  question: string;
  options: {
    label: string;
    personalityTag: 'Adventurer' | 'Relaxer' | 'Cultural' | 'Planner';
  }[];
}

export const QUIZ_QUESTIONS: PersonalityQuestion[] = [
  {
    id: 1,
    question: 'What is your ideal morning on vacation?',
    options: [
      { label: 'Sunrise trek up a mountain summit', personalityTag: 'Adventurer' },
      { label: 'Slow breakfast by the beach / pool', personalityTag: 'Relaxer' },
      { label: 'Visiting historic museums & architecture', personalityTag: 'Cultural' },
      { label: 'Following a precisely scheduled itinerary', personalityTag: 'Planner' },
    ],
  },
  {
    id: 2,
    question: 'How do you choose your travel destination?',
    options: [
      { label: 'Offbeat places with thrilling sports', personalityTag: 'Adventurer' },
      { label: 'Peaceful resorts and spa retreats', personalityTag: 'Relaxer' },
      { label: 'UNESCO World Heritage monuments', personalityTag: 'Cultural' },
      { label: 'Best budget-optimized flight deals', personalityTag: 'Planner' },
    ],
  },
];

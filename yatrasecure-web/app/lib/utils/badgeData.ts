export interface FrontendBadge {
  id: string;
  title: string;
  description: string;
  tier: 'bronze' | 'silver' | 'gold' | 'diamond';
  progress: number; // 0 to 100
  unlocked: boolean;
}

export const SAMPLE_USER_BADGES: FrontendBadge[] = [
  { id: 'b1', title: 'Verified Traveler', description: 'Govt ID & email verified', tier: 'bronze', progress: 100, unlocked: true },
  { id: 'b2', title: 'Mountain Conqueror', description: 'Completed 3 Himalayan treks', tier: 'gold', progress: 100, unlocked: true },
  { id: 'b3', title: 'Budget Maestro', description: 'Maintained group expense budget under 95%', tier: 'silver', progress: 80, unlocked: false },
  { id: 'b4', title: 'Safety Sentinel', description: 'Completed 10 safe trips without incident', tier: 'diamond', progress: 60, unlocked: false },
];

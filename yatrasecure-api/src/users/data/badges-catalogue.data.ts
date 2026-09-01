export interface TravelBadge {
  id: string;
  name: string;
  description: string;
  icon: string;
  tier: 'bronze' | 'silver' | 'gold' | 'platinum';
}

export const BADGES_CATALOGUE: TravelBadge[] = [
  {
    id: 'verified_traveler',
    name: 'Verified Explorer',
    description: 'Completed ID and email verification.',
    icon: 'ShieldCheck',
    tier: 'bronze',
  },
  {
    id: 'globe_trotter',
    name: 'Globe Trotter',
    description: 'Participated in 5 or more completed trips.',
    icon: 'Compass',
    tier: 'silver',
  },
  {
    id: 'trip_leader',
    name: 'Trip Leader',
    description: 'Successfully hosted and led a group expedition.',
    icon: 'Crown',
    tier: 'gold',
  },
  {
    id: 'safety_champion',
    name: 'Safety Champion',
    description: 'Maintained 90+ trust and safety rating.',
    icon: 'Award',
    tier: 'platinum',
  },
];

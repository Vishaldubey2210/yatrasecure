import { Injectable } from '@nestjs/common';

export interface Milestone {
  level: number;
  title: string;
  requiredTrips: number;
  perks: string[];
}

@Injectable()
export class MilestonesService {
  private readonly levels: Milestone[] = [
    { level: 1, title: 'Wanderer Novice', requiredTrips: 0, perks: ['Create Trips', 'Join Public Groups'] },
    { level: 2, title: 'Pathfinder', requiredTrips: 3, perks: ['Create Private Invite Trips', 'Custom Badges'] },
    { level: 3, title: 'Expedition Master', requiredTrips: 10, perks: ['Verified Leader Tag', 'Featured in Marketplace'] },
  ];

  getUserLevel(tripsCount: number): Milestone {
    let current = this.levels[0];
    for (const lvl of this.levels) {
      if (tripsCount >= lvl.requiredTrips) {
        current = lvl;
      }
    }
    return current;
  }
}

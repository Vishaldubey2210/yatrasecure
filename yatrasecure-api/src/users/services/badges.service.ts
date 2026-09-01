import { Injectable } from '@nestjs/common';
import { BADGES_CATALOGUE, TravelBadge } from '../data/badges-catalogue.data';

@Injectable()
export class BadgesService {
  evaluateUserBadges(stats: {
    completedTripsCount: number;
    isVerified: boolean;
    hasOrganizedTrip: boolean;
    reviewsScore: number;
  }): TravelBadge[] {
    const earned: TravelBadge[] = [];

    for (const badge of BADGES_CATALOGUE) {
      let isEligible = false;
      if (badge.id === 'verified_traveler' && stats.isVerified) isEligible = true;
      if (badge.id === 'globe_trotter' && stats.completedTripsCount >= 5) isEligible = true;
      if (badge.id === 'trip_leader' && stats.hasOrganizedTrip) isEligible = true;
      if (badge.id === 'safety_champion' && stats.reviewsScore >= 90) isEligible = true;

      if (isEligible) earned.push(badge);
    }

    return earned;
  }
}

import { Injectable } from '@nestjs/common';

@Injectable()
export class ReputationService {
  calculateScore(params: {
    isEmailVerified: boolean;
    isIdVerified: boolean;
    completedTrips: number;
    positiveReviews: number;
    cancelledTrips: number;
  }): number {
    let score = 50; // Base score

    if (params.isEmailVerified) score += 10;
    if (params.isIdVerified) score += 20;
    score += Math.min(15, params.completedTrips * 3);
    score += Math.min(15, params.positiveReviews * 2);
    score -= params.cancelledTrips * 5;

    return Math.max(10, Math.min(100, score));
  }
}

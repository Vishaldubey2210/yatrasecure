import { ReputationService } from './reputation.service';

describe('ReputationService', () => {
  let service: ReputationService;

  beforeEach(() => {
    service = new ReputationService();
  });

  it('should increase score for verified accounts and positive reviews', () => {
    const score = service.calculateScore({
      isEmailVerified: true,
      isIdVerified: true,
      completedTrips: 4,
      positiveReviews: 5,
      cancelledTrips: 0,
    });

    expect(score).toBeGreaterThanOrEqual(90);
  });

  it('should penalize for cancelled trips', () => {
    const score = service.calculateScore({
      isEmailVerified: false,
      isIdVerified: false,
      completedTrips: 0,
      positiveReviews: 0,
      cancelledTrips: 3,
    });

    expect(score).toBeLessThan(50);
  });
});

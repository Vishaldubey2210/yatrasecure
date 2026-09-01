import { BadgesService } from './badges.service';

describe('BadgesService', () => {
  let service: BadgesService;

  beforeEach(() => {
    service = new BadgesService();
  });

  it('should award verified traveler badge when verified', () => {
    const badges = service.evaluateUserBadges({
      completedTripsCount: 1,
      isVerified: true,
      hasOrganizedTrip: false,
      reviewsScore: 75,
    });

    const badgeIds = badges.map((b) => b.id);
    expect(badgeIds).toContain('verified_traveler');
    expect(badgeIds).not.toContain('globe_trotter');
  });

  it('should award globe trotter badge when 5+ trips completed', () => {
    const badges = service.evaluateUserBadges({
      completedTripsCount: 6,
      isVerified: true,
      hasOrganizedTrip: true,
      reviewsScore: 95,
    });

    expect(badges.length).toBe(4);
  });
});

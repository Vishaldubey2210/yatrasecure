import { RiskAssessmentService } from './risk-assessment.service';

describe('RiskAssessmentService', () => {
  let service: RiskAssessmentService;

  beforeEach(() => {
    service = new RiskAssessmentService();
  });

  it('should calculate high score for verified group with emergency contacts', () => {
    const result = service.calculateTripSafetyScore({
      citySafetyIndex: 90,
      verifiedMembersRatio: 1.0,
      hasEmergencyContacts: true,
      weatherRiskPenalty: 0,
    });

    expect(result.score).toBeGreaterThanOrEqual(85);
    expect(result.level).toBe('LOW_RISK');
  });

  it('should detect moderate and high risk profiles with recommendations', () => {
    const result = service.calculateTripSafetyScore({
      citySafetyIndex: 40,
      verifiedMembersRatio: 0.2,
      hasEmergencyContacts: false,
      weatherRiskPenalty: 15,
    });

    expect(result.level).toBe('HIGH_RISK');
    expect(result.recommendations.length).toBeGreaterThan(0);
  });
});

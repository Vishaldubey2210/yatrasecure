import { Injectable } from '@nestjs/common';

@Injectable()
export class RiskAssessmentService {
  calculateTripSafetyScore(params: {
    citySafetyIndex: number; // 0 - 100
    verifiedMembersRatio: number; // 0 - 1
    hasEmergencyContacts: boolean;
    weatherRiskPenalty: number; // 0 - 20
  }): { score: number; level: 'LOW_RISK' | 'MODERATE_RISK' | 'HIGH_RISK'; recommendations: string[] } {
    let score =
      params.citySafetyIndex * 0.4 +
      params.verifiedMembersRatio * 100 * 0.3 +
      (params.hasEmergencyContacts ? 30 : 0) -
      params.weatherRiskPenalty;

    score = Math.max(10, Math.min(100, Math.round(score)));

    const recommendations: string[] = [];
    if (params.verifiedMembersRatio < 0.5) {
      recommendations.push('Encourage group members to complete ID verification.');
    }
    if (!params.hasEmergencyContacts) {
      recommendations.push('Add at least one emergency contact to your profile.');
    }
    if (params.weatherRiskPenalty > 10) {
      recommendations.push('Adverse weather detected. Carry appropriate safety gear.');
    }

    let level: 'LOW_RISK' | 'MODERATE_RISK' | 'HIGH_RISK' = 'LOW_RISK';
    if (score < 60) level = 'HIGH_RISK';
    else if (score < 80) level = 'MODERATE_RISK';

    return { score, level, recommendations };
  }
}

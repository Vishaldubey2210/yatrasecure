import { Injectable } from '@nestjs/common';

export type TransportMode = 'flight' | 'train' | 'car' | 'bus';

@Injectable()
export class CarbonFootprintService {
  // Grams of CO2 per passenger kilometer
  private readonly emissionFactors: Record<TransportMode, number> = {
    flight: 255,
    car: 171,
    bus: 82,
    train: 35,
  };

  calculateEmissions(distanceKm: number, mode: TransportMode, travelers: number = 1): {
    totalKgCO2: number;
    perPersonKgCO2: number;
    treesToOffset: number;
  } {
    const factor = this.emissionFactors[mode] || 150;
    const perPersonGrams = distanceKm * factor;
    const totalKg = Number(((perPersonGrams * travelers) / 1000).toFixed(2));
    const perPersonKg = Number((perPersonGrams / 1000).toFixed(2));

    // ~21 kg CO2 absorbed per mature tree per year
    const treesToOffset = Math.ceil(totalKg / 21);

    return {
      totalKgCO2: totalKg,
      perPersonKgCO2: perPersonKg,
      treesToOffset,
    };
  }
}

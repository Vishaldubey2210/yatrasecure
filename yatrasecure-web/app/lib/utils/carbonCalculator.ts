export function estimateTripCO2(distanceKm: number, transport: 'flight' | 'train' | 'car' | 'bus'): {
  kgCO2: number;
  treesNeeded: number;
} {
  const factors = {
    flight: 0.255,
    car: 0.171,
    bus: 0.082,
    train: 0.035,
  };

  const kgCO2 = Number((distanceKm * factors[transport]).toFixed(1));
  const treesNeeded = Math.max(1, Math.ceil(kgCO2 / 21));

  return { kgCO2, treesNeeded };
}

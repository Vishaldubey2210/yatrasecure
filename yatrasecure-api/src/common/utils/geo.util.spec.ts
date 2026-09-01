import { GeoUtil } from './geo.util';

describe('GeoUtil', () => {
  it('should calculate distance between Delhi and Manali accurately', () => {
    const delhi = { lat: 28.6139, lng: 77.2090 };
    const manali = { lat: 32.2396, lng: 77.1887 };
    const dist = GeoUtil.calculateDistance(delhi, manali);
    // Approx 400 - 450 km
    expect(dist).toBeGreaterThan(390);
    expect(dist).toBeLessThan(450);
  });

  it('should return 0 distance for identical coordinates', () => {
    const point = { lat: 15.2993, lng: 74.1240 };
    expect(GeoUtil.calculateDistance(point, point)).toBe(0);
  });

  it('should correctly check if point is in radius', () => {
    const center = { lat: 28.6139, lng: 77.2090 };
    const nearby = { lat: 28.6200, lng: 77.2100 };
    expect(GeoUtil.isPointInRadius(center, nearby, 5)).toBe(true);
  });
});

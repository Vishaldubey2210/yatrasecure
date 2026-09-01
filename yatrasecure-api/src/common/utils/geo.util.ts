export interface Coordinates {
  lat: number;
  lng: number;
}

export class GeoUtil {
  /**
   * Calculate great-circle distance between two points using Haversine formula in kilometers
   */
  static calculateDistance(coord1: Coordinates, coord2: Coordinates): number {
    const R = 6371; // Earth's radius in km
    const dLat = this.toRadians(coord2.lat - coord1.lat);
    const dLng = this.toRadians(coord2.lng - coord1.lng);

    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(this.toRadians(coord1.lat)) *
        Math.cos(this.toRadians(coord2.lat)) *
        Math.sin(dLng / 2) *
        Math.sin(dLng / 2);

    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return Number((R * c).toFixed(2));
  }

  static toRadians(degrees: number): number {
    return (degrees * Math.PI) / 180;
  }

  static isPointInRadius(center: Coordinates, point: Coordinates, radiusKm: number): boolean {
    return this.calculateDistance(center, point) <= radiusKm;
  }
}

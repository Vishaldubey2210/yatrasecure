export class DateUtil {
  static getDaysBetween(startDate: Date | string, endDate: Date | string): number {
    const start = new Date(startDate).getTime();
    const end = new Date(endDate).getTime();
    const diffTime = Math.abs(end - start);
    return Math.ceil(diffTime / (1000 * 60 * 60 * 24)) + 1;
  }

  static isDateInPast(date: Date | string): boolean {
    return new Date(date).getTime() < Date.now();
  }

  static isDateRangeValid(startDate: Date | string, endDate: Date | string): boolean {
    return new Date(startDate).getTime() <= new Date(endDate).getTime();
  }

  static formatDateISO(date: Date | string): string {
    return new Date(date).toISOString().split('T')[0];
  }
}

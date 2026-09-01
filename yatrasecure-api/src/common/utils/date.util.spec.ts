import { DateUtil } from './date.util';

describe('DateUtil', () => {
  it('should calculate correct inclusive days between two dates', () => {
    const start = new Date('2026-09-01');
    const end = new Date('2026-09-05');
    expect(DateUtil.getDaysBetween(start, end)).toBe(5);
  });

  it('should validate chronological date order', () => {
    expect(DateUtil.isDateRangeValid('2026-09-01', '2026-09-10')).toBe(true);
    expect(DateUtil.isDateRangeValid('2026-09-10', '2026-09-01')).toBe(false);
  });

  it('should format date string to ISO date component', () => {
    const formatted = DateUtil.formatDateISO('2026-09-01T12:00:00Z');
    expect(formatted).toBe('2026-09-01');
  });
});

import { calculatePagination, buildPaginatedResponse } from './pagination.util';

describe('PaginationUtil', () => {
  it('should calculate skip and take correctly', () => {
    const { skip, take, page, limit } = calculatePagination(2, 10);
    expect(skip).toBe(10);
    expect(take).toBe(10);
    expect(page).toBe(2);
    expect(limit).toBe(10);
  });

  it('should handle default and negative values safely', () => {
    const { skip, page } = calculatePagination(-1, 0);
    expect(skip).toBe(0);
    expect(page).toBe(1);
  });

  it('should build standardized paginated response metadata', () => {
    const items = ['trip1', 'trip2'];
    const res = buildPaginatedResponse(items, 50, 1, 10);
    expect(res.meta.totalItems).toBe(50);
    expect(res.meta.totalPages).toBe(5);
    expect(res.meta.currentPage).toBe(1);
    expect(res.data).toEqual(items);
  });
});

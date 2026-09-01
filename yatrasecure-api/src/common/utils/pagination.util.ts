export interface PaginationParams {
  page?: number;
  limit?: number;
}

export interface PaginatedResult<T> {
  data: T[];
  meta: {
    totalItems: number;
    itemCount: number;
    itemsPerPage: number;
    totalPages: number;
    currentPage: number;
  };
}

export function calculatePagination(page: number = 1, limit: number = 10) {
  const normalizedPage = Math.max(1, Math.floor(page || 1));
  const normalizedLimit = Math.min(100, Math.max(1, Math.floor(limit || 10)));
  const skip = (normalizedPage - 1) * normalizedLimit;

  return {
    skip,
    take: normalizedLimit,
    page: normalizedPage,
    limit: normalizedLimit,
  };
}

export function buildPaginatedResponse<T>(
  data: T[],
  totalItems: number,
  page: number,
  limit: number,
): PaginatedResult<T> {
  const totalPages = Math.ceil(totalItems / limit) || 1;
  return {
    data,
    meta: {
      totalItems,
      itemCount: data.length,
      itemsPerPage: limit,
      totalPages,
      currentPage: page,
    },
  };
}

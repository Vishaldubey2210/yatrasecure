import { SetMetadata } from '@nestjs/common';

export const PAGINATED_RESPONSE_KEY = 'paginatedResponse';
export const ApiPaginatedResponse = () => SetMetadata(PAGINATED_RESPONSE_KEY, true);

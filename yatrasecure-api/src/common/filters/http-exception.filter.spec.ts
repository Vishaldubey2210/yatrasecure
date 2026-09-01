import { HttpExceptionFilter } from './http-exception.filter';
import { HttpException, HttpStatus } from '@nestjs/common';

describe('HttpExceptionFilter', () => {
  it('should be defined', () => {
    const filter = new HttpExceptionFilter();
    expect(filter).toBeDefined();
  });
});

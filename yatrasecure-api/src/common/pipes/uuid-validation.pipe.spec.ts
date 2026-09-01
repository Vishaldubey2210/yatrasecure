import { ParseUUIDPipe } from './uuid-validation.pipe';
import { BadRequestException } from '@nestjs/common';

describe('ParseUUIDPipe', () => {
  let pipe: ParseUUIDPipe;

  beforeEach(() => {
    pipe = new ParseUUIDPipe();
  });

  it('should allow valid UUID v4', () => {
    const validUUID = '123e4567-e89b-12d3-a456-426614174000';
    expect(pipe.transform(validUUID)).toBe(validUUID);
  });

  it('should throw BadRequestException on invalid UUID', () => {
    expect(() => pipe.transform('invalid-uuid-123')).toThrow(BadRequestException);
  });
});

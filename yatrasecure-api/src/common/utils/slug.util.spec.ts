import { generateSlug, sanitizeFileName } from './slug.util';

describe('SlugUtil', () => {
  it('should convert text to valid lowercase URL slug', () => {
    expect(generateSlug('Manali & Rohtang Pass 2026!')).toBe('manali-rohtang-pass-2026');
  });

  it('should replace invalid characters in filenames', () => {
    expect(sanitizeFileName('passport photo/copy?.jpg')).toBe('passport_photo_copy__jpg');
  });
});

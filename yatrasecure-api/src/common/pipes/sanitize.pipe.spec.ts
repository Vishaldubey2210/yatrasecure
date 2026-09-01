import { SanitizePipe } from './sanitize.pipe';

describe('SanitizePipe', () => {
  let pipe: SanitizePipe;

  beforeEach(() => {
    pipe = new SanitizePipe();
  });

  it('should strip script tags from string inputs', () => {
    const malicious = 'Hello <script>alert("hack")</script> World';
    expect(pipe.transform(malicious, { type: 'body' })).toBe('Hello  World');
  });

  it('should recursively sanitize nested objects', () => {
    const input = {
      name: 'Safe Name',
      bio: 'Click <script>steal()</script> here',
    };
    const sanitized = pipe.transform(input, { type: 'body' });
    expect(sanitized.bio).toBe('Click  here');
  });
});

export class SanitizeUtil {
  static cleanHtml(input: string): string {
    if (!input || typeof input !== 'string') return '';
    return input
      .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
      .replace(/on\w+="[^"]*"/g, '')
      .replace(/javascript:[^"]*/gi, '')
      .trim();
  }

  static stripTags(input: string): string {
    if (!input || typeof input !== 'string') return '';
    return input.replace(/<[^>]*>?/gm, '').trim();
  }
}

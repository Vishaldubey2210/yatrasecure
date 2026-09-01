import { CryptoUtil } from './crypto.util';

describe('CryptoUtil', () => {
  it('should generate a random hex token of expected byte length', () => {
    const token = CryptoUtil.generateRandomToken(16);
    expect(token).toHaveLength(32); // 16 bytes = 32 hex chars
  });

  it('should generate an invite code of specified length', () => {
    const code = CryptoUtil.generateInviteCode(8);
    expect(code).toHaveLength(8);
    expect(/^[A-Z0-9]+$/.test(code)).toBe(true);
  });

  it('should hash string consistently using sha256', () => {
    const hash1 = CryptoUtil.hashString('test-string');
    const hash2 = CryptoUtil.hashString('test-string');
    expect(hash1).toBe(hash2);
  });
});

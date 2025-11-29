import { describe, it, expect } from 'vitest';
import { convertTimeZone } from './convertTimeZone';

describe('convertTimeZone', () => {
  it('converts time to IST', () => {
    const result = convertTimeZone('2024-06-01T12:00:00Z', 'Asia/Kolkata');
    expect(result.startsWith('2024-06-01')).toBe(true);
  });

  it('returns empty string for invalid date', () => {
    expect(convertTimeZone('invalid', 'Asia/Kolkata')).toBe('');
  });

  it('returns empty string for invalid timezone', () => {
    expect(convertTimeZone('2024-06-01T12:00:00Z', 'Invalid/Zone')).toBe('');
  });

  it('returns empty string for Unix epoch', () => {
    expect(convertTimeZone('', 'Asia/Kolkata')).toBe('');
    expect(convertTimeZone('1970-01-01T00:00:00.000Z', 'Asia/Kolkata')).toBe('');
  });
});

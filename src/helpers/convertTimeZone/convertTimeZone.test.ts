import { describe, it, expect } from 'vitest';
import { convertTimeZone } from './convertTimeZone';

describe('convertTimeZone', () => {
  it('converts time to IST', () => {
    const result = convertTimeZone('2024-06-01T12:00:00Z', 'IST');
    expect(result.startsWith('2024-06-01')).toBe(true);
  });

  it('converts time to EST', () => {
    const result = convertTimeZone('2024-06-01T12:00:00Z', 'EST');
    expect(result.startsWith('2024-06-01')).toBe(true);
  });

  it('returns empty string for invalid date', () => {
    expect(convertTimeZone('invalid', 'IST')).toBe('');
  });

  it('returns empty string for invalid zone', () => {
    expect(convertTimeZone('2024-06-01T12:00:00Z', 'ABC')).toBe('');
  });

  it('returns empty string for Unix epoch', () => {
    expect(convertTimeZone('', 'IST')).toBe('');
    expect(convertTimeZone('1970-01-01T00:00:00.000Z', 'IST')).toBe('');
  });
});

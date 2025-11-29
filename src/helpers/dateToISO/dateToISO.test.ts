import { describe, it, expect } from 'vitest';
import { dateToISO, getDateString, getTimeString } from './index';

describe('dateToISO', () => {
  it('returns ISO string for valid date', () => {
    expect(dateToISO(new Date('2024-06-01T12:34:56Z'))).toBe('2024-06-01T12:34:56.000Z');
    expect(dateToISO('2024-06-01T12:34:56Z')).toBe('2024-06-01T12:34:56.000Z');
    expect(dateToISO(1717245296000)).toBe(new Date(1717245296000).toISOString());
  });

  it('returns empty string for invalid date', () => {
    expect(dateToISO('invalid')).toBe('');
    expect(dateToISO(null)).toBe('');
    expect(dateToISO(undefined)).toBe('');
  });
});

describe('getDateString', () => {
  it('returns date part for valid date', () => {
    expect(getDateString('2024-06-01T12:34:56Z')).toBe('2024-06-01');
  });

  it('returns empty string for invalid date', () => {
    expect(getDateString('invalid')).toBe('');
  });
});

describe('getTimeString', () => {
  it('returns time part for valid date', () => {
    expect(getTimeString('2024-06-01T12:34:56Z')).toBe('12:34:56');
  });

  it('returns empty string for invalid date', () => {
    expect(getTimeString('invalid')).toBe('');
  });
});

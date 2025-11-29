import { describe, it, expect } from 'vitest';
import { getCurrentDateISO, getCurrentTimeString, isValidDate } from './dateUtils';

describe('getCurrentDateISO', () => {
  it('returns current date in ISO format', () => {
    expect(getCurrentDateISO()).toMatch(/^\d{4}-\d{2}-\d{2}$/);
  });
});

describe('getCurrentTimeString', () => {
  it('returns current time in HH:mm:ss format', () => {
    expect(getCurrentTimeString()).toMatch(/^\d{2}:\d{2}:\d{2}$/);
  });
});

describe('isValidDate', () => {
  it('returns true for valid date', () => {
    expect(isValidDate('2024-06-01')).toBe(true);
  });

  it('returns false for invalid date', () => {
    expect(isValidDate('invalid')).toBe(false);
  });
});

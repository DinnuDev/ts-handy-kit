import { describe, it, expect } from 'vitest';
import { capitalizeFirstLetter } from './capitalizeFirstLetter';

describe('capitalizeFirstLetter', () => {
  it('capitalizes the first letter of a string', () => {
    expect(capitalizeFirstLetter('hello')).toBe('Hello');
  });

  it('returns empty string for empty input', () => {
    expect(capitalizeFirstLetter('')).toBe('');
  });

  it('returns empty string for null', () => {
    expect(capitalizeFirstLetter(null)).toBe('');
  });

  it('returns empty string for undefined', () => {
    expect(capitalizeFirstLetter(undefined)).toBe('');
  });

  it('returns empty string for non-string input', () => {
    expect(capitalizeFirstLetter(123 as any)).toBe('');
    expect(capitalizeFirstLetter({} as any)).toBe('');
  });

  it('capitalizes only the first character', () => {
    expect(capitalizeFirstLetter('hELLO')).toBe('HELLO');
  });
});

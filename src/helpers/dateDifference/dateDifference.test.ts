import { describe, it, expect } from 'vitest';
import { dateDifference } from './dateDifference';

describe('dateDifference', () => {
  it('returns correct difference in days', () => {
    expect(dateDifference('2024-06-01', '2024-06-03')).toBe(2);
  });

  it('returns NaN for invalid dates', () => {
    expect(dateDifference('invalid', '2024-06-03')).toBeNaN();
    expect(dateDifference('', '2024-06-03')).toBeNaN();
    expect(dateDifference('1970-01-01T00:00:00.000Z', '2024-06-03')).toBeNaN();
  });
});

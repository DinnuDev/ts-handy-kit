import { describe, it, expect } from 'vitest';
import { timeDifference } from './timeDifference';

describe('timeDifference', () => {
  it('returns correct difference in ms', () => {
    expect(timeDifference('2024-06-01T10:00:00Z', '2024-06-01T10:00:01Z')).toBe(1000);
  });

  it('returns NaN for invalid times', () => {
    expect(timeDifference('invalid', '2024-06-01T10:00:01Z')).toBeNaN();
    expect(timeDifference('', '2024-06-01T10:00:01Z')).toBeNaN();
    expect(timeDifference('1970-01-01T00:00:00.000Z', '2024-06-01T10:00:01Z')).toBeNaN();
  });
});

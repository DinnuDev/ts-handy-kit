import { describe, it, expect } from 'vitest';
import { shallowEqual } from './shallowEqual';

describe('shallowEqual', () => {
  it('returns true for shallow equal objects', () => {
    expect(shallowEqual({ a: 1 }, { a: 1 })).toBe(true);
  });
  it('returns false for different objects', () => {
    expect(shallowEqual({ a: 1 }, { a: 2 })).toBe(false);
    expect(shallowEqual({ a: 1 }, { a: 1, b: 2 })).toBe(false);
  });
});

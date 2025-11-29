import { describe, it, expect } from 'vitest';
import { isAriaDisabled } from './isAriaDisabled';

describe('isAriaDisabled', () => {
  it('returns true for aria-disabled true', () => {
    expect(isAriaDisabled({ 'aria-disabled': true })).toBe(true);
    expect(isAriaDisabled({ 'aria-disabled': 'true' })).toBe(true);
  });
  it('returns false for aria-disabled false', () => {
    expect(isAriaDisabled({ 'aria-disabled': false })).toBe(false);
    expect(isAriaDisabled({ 'aria-disabled': 'false' })).toBe(false);
    expect(isAriaDisabled({})).toBe(false);
  });
});

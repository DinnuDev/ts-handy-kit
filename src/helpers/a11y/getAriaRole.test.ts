import { describe, it, expect } from 'vitest';
import { getAriaRole } from './getAriaRole';

describe('getAriaRole', () => {
  it('returns role from props', () => {
    expect(getAriaRole({ role: 'button' })).toBe('button');
    expect(getAriaRole({ 'aria-role': 'dialog' })).toBe('dialog');
    expect(getAriaRole({})).toBeUndefined();
  });
});

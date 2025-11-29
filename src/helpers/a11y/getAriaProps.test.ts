import { describe, it, expect } from 'vitest';
import { getAriaProps } from './getAriaProps';

describe('getAriaProps', () => {
  it('returns only aria props', () => {
    const props = {
      'aria-label': 'Label',
      'aria-hidden': true,
      'role': 'button',
      'id': 'test'
    };
    expect(getAriaProps(props)).toEqual({
      'aria-label': 'Label',
      'aria-hidden': true
    });
  });
});

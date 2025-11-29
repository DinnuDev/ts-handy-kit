import { describe, it, expect } from 'vitest';
import { createAriaAttributes } from './createAriaAttributes';

describe('createAriaAttributes', () => {
  it('creates aria attributes from config', () => {
    const config = {
      'aria-label': 'Label',
      'aria-hidden': true,
      'id': 'test'
    };
    expect(createAriaAttributes(config)).toEqual({
      'aria-label': 'Label',
      'aria-hidden': true
    });
  });
});

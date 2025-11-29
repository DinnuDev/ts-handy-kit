import { describe, it, expect } from 'vitest';
import { flattenChildren } from './flattenChildren';

describe('flattenChildren', () => {
  it('flattens nested arrays', () => {
    expect(flattenChildren([1, [2, [3]], 4])).toEqual([1, 2, 3, 4]);
  });
});

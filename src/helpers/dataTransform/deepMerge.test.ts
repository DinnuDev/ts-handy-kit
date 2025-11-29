import { describe, it, expect } from 'vitest';
import { deepMerge } from './deepMerge';

describe('deepMerge', () => {
  it('merges nested objects', () => {
    const a = { foo: { bar: 1 }, arr: [1, 2] };
    const b = { foo: { baz: 2 }, arr: [3] };
    expect(deepMerge(a, b)).toEqual({ foo: { bar: 1, baz: 2 }, arr: [3] });
  });
});

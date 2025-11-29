import { describe, it, expect } from 'vitest';
import { removeNullUndefined } from './removeNullUndefined';

describe('removeNullUndefined', () => {
  it('removes null and undefined values', () => {
    expect(removeNullUndefined({ a: 1, b: null, c: undefined })).toEqual({ a: 1 });
  });
});

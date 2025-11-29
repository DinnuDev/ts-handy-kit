import { describe, it, expect } from 'vitest';
import { isActiveElementFocusable } from './isActiveElementFocusable';

describe('isActiveElementFocusable', () => {
  it('returns false if no active element', () => {
    const originalDocument = globalThis.document;
    // @ts-ignore
    delete globalThis.document;
    expect(isActiveElementFocusable()).toBe(false);
    globalThis.document = originalDocument;
  });
});

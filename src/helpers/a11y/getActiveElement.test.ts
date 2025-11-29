import { describe, it, expect } from 'vitest';
import { getActiveElement } from './getActiveElement';

describe('getActiveElement', () => {
  it('returns null if document is undefined', () => {
    const originalDocument = globalThis.document;
    // @ts-ignore
    delete globalThis.document;
    expect(getActiveElement()).toBeNull();
    globalThis.document = originalDocument;
  });
});

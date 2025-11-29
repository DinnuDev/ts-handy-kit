import { describe, it, expect } from 'vitest';
import { generateId } from './generateId';

describe('generateId', () => {
  it('generates a unique id with prefix', () => {
    const id = generateId('aria');
    expect(id.startsWith('aria-')).toBe(true);
    expect(id.length).toBeGreaterThan(5);
  });
  it('generates a unique id with default prefix', () => {
    const id = generateId();
    expect(id.startsWith('aria-')).toBe(true);
  });
});

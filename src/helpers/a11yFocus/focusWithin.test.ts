import { describe, it, expect } from 'vitest';
import { focusWithin } from './focusWithin';

describe('focusWithin', () => {
  it('focuses the first element if none is focused', () => {
    const container = document.createElement('div');
    const btn = document.createElement('button');
    container.append(btn);
    document.body.append(container);
    (document.activeElement as HTMLElement)?.blur?.();
    expect(focusWithin(container)).toBe(true);
    expect(document.activeElement).toBe(btn);
    container.remove();
  });
});

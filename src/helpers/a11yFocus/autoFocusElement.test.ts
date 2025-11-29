import { describe, it, expect } from 'vitest';
import { autoFocusElement } from './autoFocusElement';

describe('autoFocusElement', () => {
  it('auto-focuses element', () => {
    const btn = document.createElement('button');
    document.body.append(btn);
    btn.blur();
    expect(autoFocusElement(btn)).toBe(true);
    expect(document.activeElement).toBe(btn);
    btn.remove();
  });
});

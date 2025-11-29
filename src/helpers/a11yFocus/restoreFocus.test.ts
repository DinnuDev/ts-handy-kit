import { describe, it, expect } from 'vitest';
import { restoreFocus } from './restoreFocus';

describe('restoreFocus', () => {
  it('restores focus to element', () => {
    const btn = document.createElement('button');
    document.body.append(btn);
    btn.blur();
    expect(restoreFocus(btn)).toBe(true);
    expect(document.activeElement).toBe(btn);
    btn.remove();
  });
});

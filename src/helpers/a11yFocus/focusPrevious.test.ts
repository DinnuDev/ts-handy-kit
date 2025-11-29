import { describe, it, expect } from 'vitest';
import { focusPrevious } from './focusPrevious';

describe('focusPrevious', () => {
  it('focuses the previous focusable element', () => {
    const container = document.createElement('div');
    const btn1 = document.createElement('button');
    const btn2 = document.createElement('button');
    container.append(btn1, btn2);
    document.body.append(container);
    btn2.focus();
    expect(focusPrevious(container)).toBe(true);
    expect(document.activeElement).toBe(btn1);
    container.remove();
  });
});

import { describe, it, expect } from 'vitest';
import { focusNext } from './focusNext';

describe('focusNext', () => {
  it('focuses the next focusable element', () => {
    const container = document.createElement('div');
    const btn1 = document.createElement('button');
    const btn2 = document.createElement('button');
    container.append(btn1, btn2);
    document.body.append(container);
    btn1.focus();
    expect(focusNext(container)).toBe(true);
    expect(document.activeElement).toBe(btn2);
    container.remove();
  });
});

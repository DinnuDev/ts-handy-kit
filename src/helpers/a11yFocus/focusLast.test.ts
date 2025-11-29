import { describe, it, expect } from 'vitest';
import { focusLast } from './focusLast';

describe('focusLast', () => {
  it('focuses the last focusable element', () => {
    const container = document.createElement('div');
    const btn1 = document.createElement('button');
    const btn2 = document.createElement('button');
    container.append(btn1, btn2);
    document.body.append(container);
    btn2.blur();
    expect(focusLast(container)).toBe(true);
    expect(document.activeElement).toBe(btn2);
    container.remove();
  });
});

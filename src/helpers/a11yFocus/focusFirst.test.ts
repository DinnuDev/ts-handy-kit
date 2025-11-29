import { describe, it, expect } from 'vitest';
import { focusFirst } from './focusFirst';

describe('focusFirst', () => {
  it('focuses the first focusable element', () => {
    const container = document.createElement('div');
    const btn1 = document.createElement('button');
    const btn2 = document.createElement('button');
    container.append(btn1, btn2);
    document.body.append(container);
    btn1.blur();
    expect(focusFirst(container)).toBe(true);
    expect(document.activeElement).toBe(btn1);
    container.remove();
  });
});

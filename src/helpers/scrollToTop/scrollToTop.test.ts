import { describe, it, expect, vi } from 'vitest';
import { scrollToTop } from './scrollToTop';

describe('scrollToTop', () => {
  it('calls window.scrollTo if available', () => {
    // @ts-ignore
    global.window = { scrollTo: vi.fn() };
    scrollToTop();
    expect(global.window.scrollTo).toHaveBeenCalledWith({ top: 0, behavior: 'smooth' });
  });

  it('does nothing if window.scrollTo is not available', () => {
    // @ts-ignore
    global.window = {};
    expect(() => scrollToTop()).not.toThrow();
  });
});

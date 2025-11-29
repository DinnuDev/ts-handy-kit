import { describe, it, expect, vi } from 'vitest';
import { copyToClipboard } from './copyToClipboard';

describe('copyToClipboard', () => {
  it('returns false if navigator.clipboard is not available', async () => {
    // Remove navigator from globalThis
    Object.defineProperty(globalThis, 'navigator', {
      value: undefined,
      configurable: true,
      writable: true,
    });
    expect(await copyToClipboard('test')).toBe(false);
  });

  it('copies text if clipboard is available', async () => {
    Object.defineProperty(globalThis, 'navigator', {
      value: {
        clipboard: {
          writeText: vi.fn().mockResolvedValue(undefined)
        }
      },
      configurable: true,
      writable: true,
    });
    expect(await copyToClipboard('test')).toBe(true);
  });

  it('returns false if clipboard throws', async () => {
    Object.defineProperty(globalThis, 'navigator', {
      value: {
        clipboard: {
          writeText: vi.fn().mockRejectedValue(new Error('fail'))
        }
      },
      configurable: true,
      writable: true,
    });
    expect(await copyToClipboard('test')).toBe(false);
  });
});

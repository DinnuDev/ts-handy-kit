import { describe, it, expect } from 'vitest';
import { retry } from './retry';

describe('retry', () => {
  it('resolves if function succeeds', async () => {
    let count = 0;
    const fn = async () => ++count;
    expect(await retry(fn, 2)).toBe(1);
  });

  it('retries and eventually fails', async () => {
    let count = 0;
    const fn = async () => {
      count++;
      throw new Error('fail');
    };
    await expect(retry(fn, 2)).rejects.toThrow('fail');
    expect(count).toBe(3);
  });
});

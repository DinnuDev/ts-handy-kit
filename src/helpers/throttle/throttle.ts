/**
 * Creates a throttled function that only invokes the provided function at most once per every wait milliseconds.
 * @param fn Function to throttle.
 * @param wait Delay in milliseconds.
 * @returns Throttled function.
 */
export function throttle<T extends (...args: any[]) => void>(fn: T, wait: number): (...args: Parameters<T>) => void {
  let lastCall = 0;
  return (...args: Parameters<T>) => {
    const now = Date.now();
    if (now - lastCall >= wait) {
      lastCall = now;
      fn(...args);
    }
  };
}

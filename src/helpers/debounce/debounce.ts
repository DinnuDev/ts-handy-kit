/**
 * Creates a debounced function that delays invoking the provided function until after wait milliseconds have elapsed.
 * @param fn Function to debounce.
 * @param wait Delay in milliseconds.
 * @returns Debounced function.
 */
export function debounce<T extends (...args: any[]) => void>(fn: T, wait: number): (...args: Parameters<T>) => void {
  let timeout: ReturnType<typeof setTimeout> | null = null;
  return (...args: Parameters<T>) => {
    if (timeout) clearTimeout(timeout);
    timeout = setTimeout(() => fn(...args), wait);
  };
}

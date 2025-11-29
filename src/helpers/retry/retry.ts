/**
 * Retries an async function a specified number of times.
 * @param fn Function to retry.
 * @param retries Number of retries.
 * @returns Promise resolving to function result or rejecting after all retries.
 */
export async function retry<T>(fn: () => Promise<T>, retries: number): Promise<T> {
  let lastError: any;
  for (let i = 0; i <= retries; i++) {
    try {
      return await fn();
    } catch (err) {
      lastError = err;
    }
  }
  throw lastError;
}

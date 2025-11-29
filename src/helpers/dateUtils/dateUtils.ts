/**
 * Returns current date in ISO format.
 */
export function getCurrentDateISO(): string {
  return new Date().toISOString().slice(0, 10);
}

/**
 * Returns current time in HH:mm:ss format.
 */
export function getCurrentTimeString(): string {
  return new Date().toISOString().slice(11, 19);
}

/**
 * Checks if a date string is valid.
 */
export function isValidDate(dateStr: string): boolean {
  const date = new Date(dateStr);
  return !isNaN(date.getTime());
}

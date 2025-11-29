/**
 * Converts a date/time input to ISO string.
 * @param input Date, string, or number representing a date/time.
 * @returns ISO string or empty string if invalid.
 */
export function dateToISO(input: unknown): string {
  const date = new Date(input as any);
  return isNaN(date.getTime()) ? '' : date.toISOString();
}

/**
 * Gets the date part (YYYY-MM-DD) from a date/time input.
 * @param input Date, string, or number representing a date/time.
 * @returns Date string or empty string if invalid.
 */
export function getDateString(input: unknown): string {
  const date = new Date(input as any);
  return isNaN(date.getTime()) ? '' : date.toISOString().slice(0, 10);
}

/**
 * Gets the time part (HH:mm:ss) from a date/time input.
 * @param input Date, string, or number representing a date/time.
 * @returns Time string or empty string if invalid.
 */
export function getTimeString(input: unknown): string {
  const date = new Date(input as any);
  return isNaN(date.getTime()) ? '' : date.toISOString().slice(11, 19);
}

/**
 * Returns the difference in days between two dates.
 * @param date1 First date.
 * @param date2 Second date.
 * @returns Number of days difference, or NaN if either date is invalid.
 */
export function dateDifference(date1: string | Date, date2: string | Date): number {
  const d1 = new Date(date1);
  const d2 = new Date(date2);
  if (
    isNaN(d1.getTime()) ||
    isNaN(d2.getTime()) ||
    d1.toISOString() === '1970-01-01T00:00:00.000Z' ||
    d2.toISOString() === '1970-01-01T00:00:00.000Z'
  ) return NaN;
  const diff = Math.abs(d1.getTime() - d2.getTime());
  return Math.floor(diff / (1000 * 60 * 60 * 24));
}

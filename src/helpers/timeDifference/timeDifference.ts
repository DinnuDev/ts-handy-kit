/**
 * Returns the difference in milliseconds between two times.
 * @param time1 First time (string or Date).
 * @param time2 Second time (string or Date).
 * @returns Number of milliseconds difference, or NaN if either time is invalid.
 */
export function timeDifference(time1: string | Date, time2: string | Date): number {
  const t1 = new Date(time1);
  const t2 = new Date(time2);
  if (
    isNaN(t1.getTime()) ||
    isNaN(t2.getTime()) ||
    t1.toISOString() === '1970-01-01T00:00:00.000Z' ||
    t2.toISOString() === '1970-01-01T00:00:00.000Z'
  ) return NaN;
  return Math.abs(t1.getTime() - t2.getTime());
}

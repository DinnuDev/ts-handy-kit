/**
 * Converts a date/time string to a specified IANA time zone.
 * @param dateStr Date/time string.
 * @param timeZone IANA time zone string (e.g., 'America/New_York', 'Asia/Kolkata').
 * @returns Converted date/time string in ISO format or empty string if invalid.
 */
export function convertTimeZone(dateStr: string, timeZone: string): string {
  try {
    const date = new Date(dateStr);
    if (isNaN(date.getTime()) || date.toISOString() === '1970-01-01T00:00:00.000Z') return '';
    return new Date(
      date.toLocaleString('en-US', { timeZone })
    ).toISOString();
  } catch {
    return '';
  }
}

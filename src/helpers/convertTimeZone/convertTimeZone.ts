/**
 * Converts a date/time string to a specified three-letter time zone (e.g., 'UTC', 'EST', 'IST').
 * @param dateStr Date/time string.
 * @param zone Three-letter time zone string.
 * @returns Converted date/time string in ISO format or empty string if invalid.
 */
const zoneMap: Record<string, string> = {
  UTC: 'Etc/UTC',
  EST: 'America/New_York',
  PST: 'America/Los_Angeles',
  CST: 'America/Chicago',
  MST: 'America/Denver',
  IST: 'Asia/Kolkata',
  JST: 'Asia/Tokyo',
  GMT: 'Etc/GMT',
  BST: 'Europe/London',
  CEST: 'Europe/Berlin',
  // Add more as needed
};

export function convertTimeZone(dateStr: string, zone: string): string {
  const timeZone = zoneMap[zone.toUpperCase()];
  if (!timeZone) return '';
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

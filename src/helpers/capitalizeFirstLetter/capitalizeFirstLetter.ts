/**
 * Capitalizes the first letter of a string.
 * Handles null, undefined, empty string, and non-string input.
 * @param str The string to capitalize.
 * @returns The string with the first letter capitalized.
 */
export function capitalizeFirstLetter(str: unknown): string {
  if (typeof str !== 'string' || !str) return '';
  return str.charAt(0).toUpperCase() + str.slice(1);
}

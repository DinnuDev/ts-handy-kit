/**
 * Generates a unique ID for ARIA attributes.
 */
export function generateId(prefix = 'aria'): string {
  return `${prefix}-${Math.random().toString(36).substr(2, 9)}`;
}

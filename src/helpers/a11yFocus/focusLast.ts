/**
 * Focuses the last focusable element within a container.
 * @param container HTMLElement
 * @returns true if focused, false otherwise
 */
export function focusLast(container: HTMLElement): boolean {
  if (
    !container ||
    typeof container.querySelectorAll !== 'function'
  ) return false;
  const focusable = Array.from(container.querySelectorAll<HTMLElement>(
    'a[href], button:not([disabled]), input:not([disabled]), textarea:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])'
  )).filter(el => typeof el.focus === 'function');
  if (focusable.length > 0) {
    focusable[focusable.length - 1].focus();
    return true;
  }
  return false;
}

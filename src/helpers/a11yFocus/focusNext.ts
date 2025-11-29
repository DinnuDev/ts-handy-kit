/**
 * Focuses the next focusable element within a container.
 * @param container HTMLElement
 * @returns true if focused, false otherwise
 */
export function focusNext(container: HTMLElement): boolean {
  if (
    !container ||
    typeof container.querySelectorAll !== 'function' ||
    typeof document === 'undefined'
  ) return false;
  const focusable = Array.from(container.querySelectorAll<HTMLElement>(
    'a[href], button:not([disabled]), input:not([disabled]), textarea:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])'
  )).filter(el => typeof el.focus === 'function');
  const active = document.activeElement as HTMLElement;
  const idx = focusable.indexOf(active);
  if (idx >= 0 && idx < focusable.length - 1) {
    focusable[idx + 1].focus();
    return true;
  }
  return false;
}

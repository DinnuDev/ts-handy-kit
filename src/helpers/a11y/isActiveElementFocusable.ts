/**
 * Checks if the currently active element is focusable.
 */
export function isActiveElementFocusable(): boolean {
  const el = typeof document !== 'undefined' ? document.activeElement : null;
  if (!el) return false;
  return typeof (el as HTMLElement).focus === 'function';
}

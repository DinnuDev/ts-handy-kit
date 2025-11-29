/**
 * Restores focus to a previously focused element.
 * @param element HTMLElement
 * @returns true if focused, false otherwise
 */
export function restoreFocus(element: HTMLElement | null): boolean {
  if (element && typeof element.focus === 'function') {
    element.focus();
    return true;
  }
  return false;
}

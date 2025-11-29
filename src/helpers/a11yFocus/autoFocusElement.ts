/**
 * Auto-focuses a given element if possible.
 * @param element HTMLElement
 * @returns true if focused, false otherwise
 */
export function autoFocusElement(element: HTMLElement | null): boolean {
  if (element && typeof element.focus === 'function') {
    element.focus();
    return true;
  }
  return false;
}

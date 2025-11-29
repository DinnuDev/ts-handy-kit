/**
 * Returns the currently active (focused) element in the document.
 */
export function getActiveElement(): Element | null {
  if (typeof document !== 'undefined') {
    return document.activeElement;
  }
  return null;
}

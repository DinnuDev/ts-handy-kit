import { focusFirst } from './focusFirst';

/**
 * Focuses the first focusable element within a container if none is focused.
 * @param container HTMLElement
 * @returns true if focused, false otherwise
 */
export function focusWithin(container: HTMLElement): boolean {
  if (
    !container ||
    typeof container.contains !== 'function' ||
    typeof document === 'undefined'
  ) return false;
  if (!container.contains(document.activeElement)) {
    return focusFirst(container);
  }
  return false;
}

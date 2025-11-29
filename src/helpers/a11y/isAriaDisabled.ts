/**
 * Checks if ARIA disabled is set.
 * @param props Object with possible aria-disabled property.
 * @returns True if aria-disabled is true.
 */
export function isAriaDisabled(props: { 'aria-disabled'?: boolean | string }): boolean {
  return props['aria-disabled'] === true || props['aria-disabled'] === 'true';
}

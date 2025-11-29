/**
 * Returns the ARIA role from props.
 */
export function getAriaRole(props: Record<string, any>): string | undefined {
  return props['role'] || props['aria-role'];
}

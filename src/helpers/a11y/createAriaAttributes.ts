/**
 * Creates ARIA attributes from a config object.
 */
export function createAriaAttributes(config: Record<string, any>): Record<string, any> {
  const attrs: Record<string, any> = {};
  for (const key in config) {
    if (key.startsWith('aria-')) {
      attrs[key] = config[key];
    }
  }
  return attrs;
}

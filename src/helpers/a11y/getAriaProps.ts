import { ariaPropTypes } from './ariaPropTypes';

/**
 * Returns only ARIA props from an object.
 */
export function getAriaProps(props: Record<string, any>): Record<string, any> {
  return Object.fromEntries(
    Object.entries(props).filter(([key]) => ariaPropTypes.includes(key))
  );
}

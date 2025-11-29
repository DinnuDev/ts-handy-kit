/**
 * Flattens nested arrays (children).
 */
export function flattenChildren(children: any[]): any[] {
  return children.flat(Infinity);
}

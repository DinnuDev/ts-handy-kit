/**
 * Deeply merges two objects. Arrays are not merged, only replaced.
 */
export function deepMerge<T extends object, U extends object>(target: T, source: U): T & U {
  const output = { ...target } as any;
  for (const key in source) {
    if (
      source[key] &&
      typeof source[key] === 'object' &&
      !Array.isArray(source[key]) &&
      key in target &&
      typeof (target as any)[key] === 'object'
    ) {
      output[key] = deepMerge((target as any)[key], source[key]);
    } else {
      output[key] = source[key];
    }
  }
  return output;
}

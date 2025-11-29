# ts-handy-kit

A collection of useful TypeScript helper functions for string, date/time manipulation, and function utilities.

## Installation

```bash
npm install ts-handy-kit
```

## Usage

Import the helpers you need:

```typescript
import {
  capitalizeFirstLetter,
  dateToISO,
  getDateString,
  getTimeString,
  debounce,
  throttle
} from 'ts-handy-kit';

// Capitalize the first letter of a string
console.log(capitalizeFirstLetter('hello world')); // "Hello world"

// Convert date/time to ISO string
console.log(dateToISO('2024-06-01T12:34:56Z')); // "2024-06-01T12:34:56.000Z"

// Get only the date part
console.log(getDateString('2024-06-01T12:34:56Z')); // "2024-06-01"

// Get only the time part
console.log(getTimeString('2024-06-01T12:34:56Z')); // "12:34:56"

// Debounce example
const debouncedFn = debounce(() => console.log('Debounced!'), 300);
debouncedFn();
debouncedFn(); // Only one "Debounced!" after 300ms

// Throttle example
const throttledFn = throttle(() => console.log('Throttled!'), 500);
throttledFn();
throttledFn(); // Only one "Throttled!" per 500ms
```

## Helpers

- **capitalizeFirstLetter(str: unknown): string**  
  Capitalizes the first letter of a string. Returns an empty string for invalid input.

- **dateToISO(input: unknown): string**  
  Converts a date/time input to an ISO string. Returns an empty string for invalid input.

- **getDateString(input: unknown): string**  
  Returns the date part (YYYY-MM-DD) from a date/time input. Returns an empty string for invalid input.

- **getTimeString(input: unknown): string**  
  Returns the time part (HH:mm:ss) from a date/time input. Returns an empty string for invalid input.

- **debounce(fn, wait): Function**  
  Returns a debounced version of the function that delays execution until after `wait` milliseconds have elapsed since the last call.

- **throttle(fn, wait): Function**  
  Returns a throttled version of the function that only executes once per `wait` milliseconds.

## Configuration Files

This project supports the following configuration files:
- `.eslintrc.cjs` (ESLint)
- `tsup.config.ts` (Tsup)
- `rollup.config.js` (Rollup)
- `tsconfig.json` (TypeScript)
- `vitest.config.ts` (Vitest)

## Contributing

Feel free to open issues or submit pull requests for new helpers or improvements!

## License

ISC

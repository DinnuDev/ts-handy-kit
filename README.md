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
  throttle,
  convertTimeZone,
  copyToClipboard,
  dateDifference,
  timeDifference,
  isFalsy,
  retry,
  scrollToTop,
  getCurrentDateISO,
  getCurrentTimeString,
  isValidDate
} from 'ts-handy-kit';

// Capitalize the first letter of a string
console.log(capitalizeFirstLetter('hello world')); // "Hello world"

// Convert date/time to ISO string
console.log(dateToISO('2024-06-01T12:34:56Z')); // "2024-06-01T12:34:56.000Z"

// Get only the date part
console.log(getDateString('2024-06-01T12:34:56Z')); // "2024-06-01"

// Get only the time part
console.log(getTimeString('2024-06-01T12:34:56Z')); // "12:34:56"

// Convert time to another time zone (three-letter code: UTC, EST, IST, etc.)
console.log(convertTimeZone('2024-06-01T12:00:00Z', 'IST')); // e.g. "2024-06-01T17:30:00.000Z"
console.log(convertTimeZone('2024-06-01T12:00:00Z', 'EST')); // e.g. "2024-06-01T08:00:00.000Z"

// Copy to clipboard (browser only)
copyToClipboard('Copied text!').then(success => console.log(success));

// Difference in dates (days)
console.log(dateDifference('2024-06-01', '2024-06-03')); // 2

// Difference in time (milliseconds)
console.log(timeDifference('2024-06-01T10:00:00Z', '2024-06-01T10:00:01Z')); // 1000

// Check for falsy values
console.log(isFalsy(0)); // true
console.log(isFalsy('hello')); // false

// Retry an async function
retry(async () => {
  // your async logic
}, 3).then(result => console.log(result)).catch(err => console.error(err));

// Scroll to top (browser only)
scrollToTop();

// Get current date and time
console.log(getCurrentDateISO()); // e.g. "2024-06-01"
console.log(getCurrentTimeString()); // e.g. "12:34:56"

// Check if a date string is valid
console.log(isValidDate('2024-06-01')); // true
console.log(isValidDate('invalid-date')); // false
```

## Helpers

```
capitalizeFirstLetter(str: unknown): string
    Capitalizes the first letter of a string. Returns an empty string for invalid input.

dateToISO(input: unknown): string
    Converts a date/time input to an ISO string. Returns an empty string for invalid input.

getDateString(input: unknown): string
    Returns the date part (YYYY-MM-DD) from a date/time input. Returns an empty string for invalid input.

getTimeString(input: unknown): string
    Returns the time part (HH:mm:ss) from a date/time input. Returns an empty string for invalid input.

debounce(fn, wait): Function
    Returns a debounced version of the function that delays execution until after `wait` milliseconds have elapsed since the last call.

throttle(fn, wait): Function
    Returns a throttled version of the function that only executes once per `wait` milliseconds.

convertTimeZone(dateStr, zone): string
    Converts a date/time string to a specified three-letter time zone code (`UTC`, `EST`, `IST`, etc.).

copyToClipboard(text): Promise<boolean>
    Copies a string to the clipboard (browser only).

dateDifference(date1, date2): number
    Returns the difference in days between two dates.

timeDifference(time1, time2): number
    Returns the difference in milliseconds between two times.

isFalsy(value): boolean
    Checks if a value is falsy in JavaScript.

retry(fn, retries): Promise<any>
    Retries an async function a specified number of times.

scrollToTop(): void
    Scrolls the window to the top (browser only).

getCurrentDateISO(): string
    Returns the current date in ISO format (YYYY-MM-DD).

getCurrentTimeString(): string
    Returns the current time in HH:mm:ss format.

isValidDate(dateStr): boolean
    Checks if a date string is valid.
```

## Contributing

Feel free to open issues or submit pull requests for new helpers or improvements!

## License

ISC

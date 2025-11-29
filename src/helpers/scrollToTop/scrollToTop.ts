/**
 * Scrolls the window to the top (browser only).
 */
export function scrollToTop(): void {
  if (typeof window !== 'undefined' && window.scrollTo) {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}

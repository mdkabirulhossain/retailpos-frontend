/**
 * Format a number as currency (e.g. 1000 → "৳1,000.00")
 */
export function formatCurrency(amount: number, currency = "BDT"): string {
  return new Intl.NumberFormat("en-BD", {
    style: "currency",
    currency,
    minimumFractionDigits: 2,
  }).format(amount);
}

/**
 * Format a date string to a human-readable format
 */
export function formatDate(date: string | Date): string {
  return new Intl.DateTimeFormat("en-BD", {
    year: "numeric",
    month: "short",
    day: "numeric",
  }).format(new Date(date));
}

/**
 * Generate a short unique ID (for temporary client-side use only)
 */
export function generateId(): string {
  return Math.random().toString(36).substring(2, 10);
}

/**
 * Capitalize the first letter of a string
 */
export function capitalize(str: string): string {
  if (!str) return "";
  return str.charAt(0).toUpperCase() + str.slice(1);
}

/**
 * Calculate cart total from an array of items
 */
export function calcCartTotal(
  items: Array<{ price: number; quantity: number }>
): number {
  return items.reduce((sum, item) => sum + item.price * item.quantity, 0);
}

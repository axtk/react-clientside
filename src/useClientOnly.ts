/**
 * Returns `true` if the component is rendered on the client,
 * and `false` otherwise.
 *
 * @example
 * ```js
 * let isClient = useClientOnly();
 * ```
 */
export function useClientOnly() {
  return typeof window !== "undefined";
}

import { useSyncExternalStore } from "react";

function subscribe() {
  return () => {};
}

function getSnapshot() {
  return true;
}

function getServerSnapshot() {
  return false;
}

/**
 * Returns `true` if the component is rendered after hydration,
 * and `false` otherwise.
 *
 * In contrast to the two-pass rendering with `useEffect` used in
 * `useMounted`, this hook allows to skip the effect phase with subsequent
 * renders after hydration.
 *
 * @example
 * ```js
 * let isHydrated = useHydrated();
 * ```
 */
export function useHydrated() {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}

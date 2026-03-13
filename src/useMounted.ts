import { useEffect, useState } from "react";

/**
 * Returns `true` if the component is already mounted, and `false` otherwise.
 *
 * @example
 * ```js
 * let isMounted = useMounted();
 * ```
 */
export function useMounted() {
  let [isMounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return isMounted;
}

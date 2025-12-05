import { useEffect, useState } from "react";

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
  let [isClient, setClient] = useState(false);

  useEffect(() => {
    setClient(true);
  }, []);

  return isClient;
}

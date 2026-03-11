import type { ReactNode } from "react";
import { useClientOnly } from "./useClientOnly.ts";

export type ClientOnlyProps = {
  children?: ReactNode;
  fallback?: ReactNode;
};

/**
 * Renders its nested content if rendered on the client, and the
 * `fallback` prop value (which is empty by default) otherwise.
 */
export const ClientOnly = ({ children, fallback = null }: ClientOnlyProps) => {
  let isClient = useClientOnly();

  return <>{isClient ? children : fallback}</>;
};

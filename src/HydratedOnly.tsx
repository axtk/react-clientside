import type { ReactNode } from "react";
import { useHydrated } from "./useHydrated.ts";

export type HydratedOnlyProps = {
  children?: ReactNode;
  fallback?: ReactNode;
};

/**
 * Renders its nested content if it's rendered after hydration, and the
 * `fallback` prop value (which is empty by default) otherwise.
 */
export const HydratedOnly = ({ children, fallback = null }: HydratedOnlyProps) => {
  let isHydrated = useHydrated();

  return <>{isHydrated ? children : fallback}</>;
};

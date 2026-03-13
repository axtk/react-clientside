import type { ReactNode } from "react";
import { useMounted } from "./useMounted.ts";

export type MountedOnlyProps = {
  children?: ReactNode;
  fallback?: ReactNode;
};

/**
 * Renders its nested content if it's mounted on the client, and the
 * `fallback` prop value (which is empty by default) otherwise.
 */
export const MountedOnly = ({
  children,
  fallback = null,
}: MountedOnlyProps) => {
  let isMounted = useMounted();

  return <>{isMounted ? children : fallback}</>;
};

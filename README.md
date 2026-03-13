# react-clientside

Utilities to render content on the client and skip SSR in a React app

This package distinguishes two ways of detecting client-side rendering, primarily to avoid hydration mismatch errors: when a component is mounted and when it's hydrated. Whether a component is mounted is checked with `useEffect` under the hood that runs a two-pass rendering<sup>[[1](https://react.dev/reference/react-dom/client/hydrateRoot#handling-different-client-and-server-content)]</sup> which may introduce a delay before rendering the required content. Checking whether a component is hydrated seeks to eliminate the delay on subsequent renders.

## useMounted

```jsx
import { useMounted } from "react-clientside";

export const Component = () => {
  let isMounted = useMounted();

  return <p hidden={!isClient}>Hidden unless mounted on the client</p>;
};
```

## MountedOnly

```jsx
import { MountedOnly } from "react-clientside";

export const Component = () => {
  return <MountedOnly>Renders nothing before mounting</MountedOnly>;
};

export const ComponentWithFallback = () => {
  return <MountedOnly fallback="SSR content">CSR content</MountedOnly>;
};
```

## useHydrated

```jsx
import { useHydrated } from "react-clientside";

export const Component = () => {
  let isHydrated = useHydrated();

  return <p hidden={!isHydrated}>Hidden unless hydrated on the client</p>;
};
```

## HydratedOnly

```jsx
import { HydratedOnly } from "react-clientside";

export const Component = () => {
  return <HydratedOnly>Renders nothing before hydrating</HydratedOnly>;
};

export const ComponentWithFallback = () => {
  return <HydratedOnly fallback="SSR content">CSR content</HydratedOnly>;
};
```

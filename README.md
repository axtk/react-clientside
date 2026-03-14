# react-clientside

Utilities to render content on the client and skip SSR in a React app

This package distinguishes two ways of detecting client-side rendering: when a component is mounted and when it's hydrated. The primary use case for this is avoiding React's hydration mismatch errors, when a portion of SSR content and the corresponding client-side content are intentionally or inevitably different (such as when using values from `localStorage`, or `new Date()`, or `Math.random()`, or similar).

Checking whether a component is mounted requires a two-pass rendering<sup>[[1](https://react.dev/reference/react-dom/client/hydrateRoot#handling-different-client-and-server-content)]</sup> with `useEffect` under the hood. This approach may introduce a delay before rendering the required content each time the component gets mounted. Checking whether a component is hydrated is a way to eliminate the delay when the component is mounted after the hydration phase.

## useMounted

```jsx
import { useMounted } from "react-clientside";

export const Component = () => {
  let isMounted = useMounted();

  return <p hidden={!isMounted}>Hidden unless mounted on the client</p>;
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

# react-clientside

A lightweight React component and a hook to render content on the client and skip SSR

## `<ClientOnly>`

```jsx
import { ClientOnly } from "react-clientside";

export const Component = () => {
  return <ClientOnly>Skipped during SSR</ClientOnly>;
};
```

Or with a fallback to be rendered during SSR, which can be any `ReactNode`:

```jsx
export const Component = () => {
  return <ClientOnly fallback="SSR content">CSR content</ClientOnly>;
};
```

## `useClientOnly()`

```jsx
import { useClientOnly } from "react-clientside";

export const Component = () => {
  let isClient = useClientOnly();

  return <p hidden={!isClient}>Hidden during SSR</p>;
};
```

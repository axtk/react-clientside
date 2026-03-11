# react-clientside

A lightweight React component and a hook to render content on the client and skip SSR

## `<ClientOnly>`

```js
import { ClientOnly } from "react-clientside";

export const Component = () => {
  return <ClientOnly>This is skipped during SSR</ClientOnly>;
};
```

With a fallback to be rendered during SSR, which can be any `ReactNode`:

```diff
- <ClientOnly>This is skipped during SSR</ClientOnly>;
+ <ClientOnly fallback={<Fallback/>}>This has a fallback during SSR</ClientOnly>;
```

## `useClientOnly()`

```js
import { useClientOnly } from "react-clientside";

export const Component = () => {
  let isClient = useClientOnly();

  return <p hidden={!isClient}>Hidden during SSR</p>;
};
```

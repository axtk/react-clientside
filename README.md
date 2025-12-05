# @t8/react-client-only

*A lightweight React component and a hook to render content on the client and skip SSR*

[![npm](https://img.shields.io/npm/v/@t8/react-client-only?labelColor=345&color=46e)](https://www.npmjs.com/package/@t8/react-client-only) ![Lightweight](https://img.shields.io/bundlephobia/minzip/@t8/react-client-only?label=minzip&labelColor=345&color=46e)

Installation: `npm i @t8/react-client-only`

## `<ClientOnly>`

```js
import { ClientOnly } from "@t8/react-client-only";

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
import { useClientOnly } from "@t8/react-client-only";

export const Component = () => {
  let isClient = useClientOnly();

  return <p hidden={!isClient}>Hidden during SSR</p>;
};
```

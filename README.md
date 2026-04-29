# React UI Vegeta's Wife

React UI component library built on top of [Bulma](https://bulma.io/).

The library provides React components that map closely to Bulma elements,
components, form controls, grid primitives, helpers, and layout blocks. It also
ships a small compiled CSS bundle for custom controls that are not covered by
Bulma's default stylesheet.

## Installation

```sh
npm install react-ui-vegetas-wife
```

Install the required peer dependencies if your app does not already provide
them:

```sh
npm install react react-dom bulma
```

## Styles

Import Bulma and the library stylesheet once in your app entrypoint:

```ts
import 'bulma/css/bulma.min.css';
import 'react-ui-vegetas-wife/styles.css';
```

`bulma` is a peer dependency. The package does not bundle Bulma's full CSS into
`styles.css`; consumers keep control over how Bulma is loaded, themed, or
customized.

`react-ui-vegetas-wife/styles.css` is generated from
`src/assets/styles/bulma.scss` and contains the library's custom checkbox,
radio, and switch styles.

## Basic Usage

```tsx
import 'bulma/css/bulma.min.css';
import 'react-ui-vegetas-wife/styles.css';
import { Button, Field, Input, Label } from 'react-ui-vegetas-wife';

export function Example() {
  return (
    <Field>
      <Label>Name</Label>
      <Input color="primary" placeholder="Vegeta" />
      <Button color="primary">Save</Button>
    </Field>
  );
}
```

## Public Entry Points

Main component API:

```ts
import { Button, Card, Input, Navbar, Section } from 'react-ui-vegetas-wife';
```

Stylesheet:

```ts
import 'bulma/css/bulma.min.css';
import 'react-ui-vegetas-wife/styles.css';
```

## Available Component Groups

- Form controls: `Input`, `Textarea`, `Checkbox`, `Radio`, `Switch`, `File`,
  `Field`, `Control`, `Label`, `Help`.
- Elements: `Button`, `Buttons`, `Box`, `Content`, `Delete`, `Icon`, `Image`,
  `Notification`, `Progress`, `Tag`, `Tags`, `Title`, `Subtitle`, `Video`.
- Components: `Breadcrumb`, `Card`, `Dropdown`, `Menu`, `Message`, `Modal`,
  `Navbar`, `Pagination`, `Panel`, `Tabs`.
- Layout and structure: `Container`, `Section`, `Hero`, `Level`, `Media`,
  `Columns`, `Column`, `FixedGrid`, `SmartGrid`, `Cell`.

TypeScript prop types are exported from the package, for example:

```ts
import type { ButtonProps, InputProps, Colors, Sizes } from 'react-ui-vegetas-wife';
```

## Development

Install dependencies:

```sh
npm install
```

Run Storybook:

```sh
npm run storybook
```

Build the library:

```sh
npm run build
```

Run tests:

```sh
npm run test -- --run
```

Run lint:

```sh
npm run lint
```

## Build Output

The Vite library build emits:

- `dist/react-vegetas-wife.js` for ESM consumers.
- `dist/react-vegetas-wife.cjs` for CommonJS consumers.
- `dist/react-vegetas-wife.css` for library-specific control styles.

## License

MIT

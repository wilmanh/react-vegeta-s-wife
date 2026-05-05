# AGENTS.md

## Project

This repository is a React UI component library built on top of Bulma.

Package name: `react-ui-vegetas-wife`

The package exposes React components from `src/index.ts`, emits ESM/CJS bundles
with Vite, and emits TypeScript declarations with `vite-plugin-dts`.

## Public Contract

Consumers import components from the package root:

```ts
import { Button, Input, Navbar } from 'react-ui-vegetas-wife';
```

Consumers must import Bulma and then the library control styles:

```ts
import 'bulma/css/bulma.min.css';
import 'react-ui-vegetas-wife/styles.css';
```

`bulma`, `react`, and `react-dom` are peer dependencies. The library CSS does
not bundle full Bulma; it contains custom checkbox, radio, and switch styles
from `src/assets/styles/bulma.scss`.

## Important Files

- `src/index.ts`: public API exports.
- `vite.config.ts`: library build, alias config, and declaration generation.
- `tsconfig.lib.json`: typecheck config for library source.
- `tsconfig.storybook.json`: typecheck config for Storybook files.
- `.storybook/main.ts`: Storybook config and React docgen settings.
- `src/assets/styles/bulma.scss`: library stylesheet entrypoint.

## Commands

Run these before considering changes ready:

```sh
npm run build
npm run lint
npm run test -- --run
npm run typecheck:storybook
```

Check published package contents:

```sh
npm_config_cache=/tmp/npm-cache npm pack --dry-run
```

Use the `/tmp` npm cache in this environment if npm cannot write to
`/home/sirius/.npm`.

## Build Output

The package publishes only `dist`, `README.md`, and `LICENSE`.

Expected build artifacts:

- `dist/react-vegetas-wife.js`
- `dist/react-vegetas-wife.cjs`
- `dist/react-vegetas-wife.css`
- `dist/index.d.ts`
- supporting `.d.ts` files under `dist/ui` and `dist/logic`

## Development Notes

- Keep implementation changes inside `src/ui`, `src/logic`, `src/assets`, or
  Storybook files as appropriate.
- Avoid exporting implementation-only class resolvers or `*.classes` files from
  `src/index.ts` unless intentionally making them public API.
- `@/` resolves to `src` in Vite, Vitest, and TypeScript.
- The old Vite app files (`src/App.tsx`, `src/main.tsx`, `index.html`) are not
  needed for the library build.
- Storybook reuses `vite.config.ts`; `vite-plugin-dts` may run during
  `build-storybook`. This is currently harmless but unnecessary.

## Known Cleanup Opportunities

- Internal typos remain in some filenames/types, such as `classess` and
  `VisibiltyShow`. Treat renames carefully because they may affect imports.
- Some generated declaration files expose internal paths because
  `vite-plugin-dts` preserves referenced declarations. This is acceptable for
  now, but the public API should still be curated through `src/index.ts`.
- Keep README aligned with the CSS contract: Bulma is loaded by the consumer;
  `styles.css` only adds library-specific control styles.

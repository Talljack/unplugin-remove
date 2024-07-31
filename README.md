# unplugin-remove

Auto remove `console[log|warn|error|info|debug]` and `debugger` in **production** mode.

<div>
<img src="https://img.shields.io/npm/dm/unplugin-remove" />
<img src="https://img.shields.io/github/last-commit/Talljack/unplugin-remove
">
<img src="https://codecov.io/gh/Talljack/unplugin-remove/graph/badge.svg?token=KI043GVTMM"/>
</div>

## Install

```bash
[npm|pnpm] i unplugin-remove -D

or

yarn add unplugin-remove -D
```

## Demo

Example: [`playground/`](./playground/)

<details>
<summary>Vite</summary><br>

```ts
// vite.config.ts
import viteRemove from 'unplugin-remove/vite'

export default defineConfig({
  plugins: [
    viteRemove({ /* options */ }),
  ],
})
```

<br></details>

<details>
<summary>Rollup</summary><br>

```ts
// rollup.config.js
import rollupRemove from 'unplugin-remove/rollup'

export default {
  plugins: [
    rollupRemove({ /* options */ }),
  ],
}
```

<br></details>

<details>
<summary>Webpack</summary><br>

```ts
// webpack.config.js
module.exports = {
  /* ... */
  plugins: [
    process.env.MODE === 'production' ? require('unplugin-remove/webpack')({ /* options */ }) : null,
  ].filter(Boolean),
}
```

<br></details>

<details>
<summary>esbuild</summary><br>

```ts
// esbuild.config.js
import { build } from 'esbuild'
import esbuildRemove from 'unplugin-remove/esbuild'

build({
  plugins: [esbuildRemove()],
})
```

<br></details>

<details>
<summary>Rspack  (
  <g-emoji class="g-emoji" alias="warning">⚠️</g-emoji>
   experimental)</summary><br>

```ts
// rspack.config.js
const RspackPlugin = require('unplugin-remove/rspack').default

module.exports = {
  plugins: [
    new rspack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
    }),
    RspackPlugin(),
  ],
}
```

<br></details>

<details>
<summary>
  Rolldown
  (
  <g-emoji class="g-emoji" alias="warning">⚠️</g-emoji>
   experimental)
</summary>
<br>

```ts
// rolldown.config.js
import { defineConfig } from 'rolldown'
import Rolldown from 'unplugin-remove/rolldown'

export default defineConfig({
  plugins: [
    process.env.MODE === 'production' ? Rolldown() : null,
  ],
})
```

<br></details>

## Configuration

The following shows the default values of the configuration

```ts
Remove({
  // don't remove console.([log|warn|error|info|debug]) and debugger these module
  external: [],

  // remove console type of these module
  // enum: ['log', 'warn', 'error', 'info', 'debug']
  consoleType: ['log'],

  // filters for transforming targets
  include: [/\.[jt]sx?$/, /\.vue\??/],
  exclude: [/node_modules/, /\.git/],
  // transform source code
  sourceMaps: true,
})
```

## CHANGELOG

You can see [CHANGELOG](./CHANGELOG.md) here.

## License

MIT License © 2022-PRESENT [Talljack](https://github.com/talljack)

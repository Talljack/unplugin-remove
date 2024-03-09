# unplugin-remove

Auto remove `console[log|warn|error|info|debug]` and `debugger` in production mode.

<div>
<img src="https://img.shields.io/npm/dm/unplugin-remove" />
<img src="https://img.shields.io/github/last-commit/Talljack/unplugin-remove
">
</div>


## Install

```bash
[npm|pnpm] i unplugin-remove -D

or

yarn add unplugin-remove -D
```

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

Example: [`playground/`](./playground/)

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
    process.env.MODE === 'production' ? require('unplugin-remove/webpack')({ /* options */ }) : null
  ].filter(Boolean)
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
})
```

## CHANGELOG

You can see [CHANGELOG](./CHANGELOG.md) here.

## License

MIT License © 2022-PRESENT [Talljack](https://github.com/talljack)

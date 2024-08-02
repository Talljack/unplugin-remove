import { defineConfig } from 'rolldown'
import Rolldown from 'unplugin-remove/rolldown'

export default defineConfig({
  input: './src/main.ts',
  output: {
    format: 'esm',
    sourcemap: true,
  },
  plugins: [
    process.env.MODE === 'production' ? Rolldown({ sourceMaps: true }) : null,
  ].filter(Boolean),
})

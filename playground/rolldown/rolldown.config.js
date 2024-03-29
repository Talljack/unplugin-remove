import { defineConfig } from 'rolldown'
import Rolldown from 'unplugin-remove/rolldown'

export default defineConfig({
  input: './src/main.ts',
  output: {
    format: 'es'
  },
  plugins: [
    process.env.MODE === 'production' ? Rolldown() : null,
  ].filter(Boolean)
})

/// <reference types="vitest" />
import { defineConfig } from 'vite'
import Inspect from 'vite-plugin-inspect'
import unpluginRemoveVite from '../../src/vite'

export default defineConfig({
  plugins: [Inspect(), unpluginRemoveVite()],
  build: {
    sourcemap: true,
  },
  test: {
		coverage: {
			enabled: true,
			provider: 'v8',
			reporter: ['text', 'json', 'html'],
		},
  }
})

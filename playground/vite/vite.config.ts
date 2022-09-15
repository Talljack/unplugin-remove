import { defineConfig } from 'vite'
import Inspect from 'vite-plugin-inspect'
import unpluginRemoveVite from 'unplugin-remove/vite'

export default defineConfig({
  plugins: [Inspect(), unpluginRemoveVite()],
})

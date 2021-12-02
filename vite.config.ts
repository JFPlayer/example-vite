import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { minifyHtml } from 'vite-plugin-html'
import legacy from '@vitejs/plugin-legacy'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    minifyHtml(),
    legacy({
      ignoreBrowserslistConfig: true,
    }),
  ]
})

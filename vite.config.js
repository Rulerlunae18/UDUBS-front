// vite.config.js
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],

  build: {
    outDir: 'dist',
  },

  // ⚠️ CRITICAL: Fix routes on Render
  server: {
    historyApiFallback: true,
  },

  preview: {
    historyApiFallback: true,
  }
})

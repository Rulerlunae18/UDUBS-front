import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  preview: {
    allowedHosts: ['udubs-front.onrender.com'],
    host: true,
    port: 4173
  }
})

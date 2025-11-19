import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],

  server: {
    host: true,
    port: 5173
  },

  preview: {
    host: true,
    port: parseInt(process.env.PORT) || 4173,
    allowedHosts: ['udubs-front.onrender.com']
  }
})

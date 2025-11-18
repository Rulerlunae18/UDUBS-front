import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],

  preview: {
    host: true, // позволяет слушать 0.0.0.0
    port: process.env.PORT || 4173, // Render сам подставит порт
    allowedHosts: ["udubs-front.onrender.com"], // <- важно!
  },
})

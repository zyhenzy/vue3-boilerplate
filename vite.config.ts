import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 8008,
    proxy: {
      '/v1/xxx': {
        target: 'http://192.168.157.182:5708',
        changeOrigin: true,
      },
      '/api':{
        target: 'http://localhost:3000',
        changeOrigin: true,
      }
    },
  },
  plugins: [
    vue(),
    vueJsx(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})

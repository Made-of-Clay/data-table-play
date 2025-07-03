import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [react(), vue()],
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
        react: 'react.html',
        vue: 'vue.html',
        native: 'native.html'
      }
    }
  }
})

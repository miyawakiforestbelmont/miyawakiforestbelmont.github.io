import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/MiyawakiForestsBelmont.github.io/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  }
})

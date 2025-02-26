import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import compression from 'vite-plugin-compression';

// https://vite.dev/config/
export default defineConfig({
  // plugins: [react()],
  plugins: [react(),compression({ algorithm: 'brotliCompress' })]
})

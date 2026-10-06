import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer'
import viteCompression from 'vite-plugin-compression'

export default defineConfig({
  base: './',
  plugins: [
    react(),
    ViteImageOptimizer({
      png: { quality: 90 },
      jpeg: { quality: 85 },
      jpg: { quality: 85 },
      webp: { quality: 85 },
      avif: { quality: 75 },
    }),
    viteCompression({ algorithm: 'gzip', ext: '.gz' }),
  ],
})

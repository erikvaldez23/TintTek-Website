// vite.config.ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  // You have a custom domain (tinttekplus.com), so:
  base: '/', // if using username.github.io/repo, set base: '/<REPO>/'
  plugins: [
    react(),
  ]
})

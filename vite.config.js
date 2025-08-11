// vite.config.ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { vitePrerenderPlugin } from 'vite-prerender-plugin'

export default defineConfig({
  // You have a custom domain (tinttekplus.com), so:
  base: '/', // if using username.github.io/repo, set base: '/<REPO>/'
  plugins: [
    react(),
  ]
})

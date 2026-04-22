import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Node built-ins + backend-only packages that must stay external in SSR
const SSR_EXTERNAL = [
  'fs', 'fs/promises', 'path', 'os', 'crypto', 'http', 'https',
  'url', 'stream', 'child_process', 'util', 'events', 'buffer',
  'net', 'tls', 'zlib', 'dns', 'readline', 'vm', 'querystring',
  'assert', 'module', 'perf_hooks', 'worker_threads', 'inspector',
  // backend npm packages
  'express', 'mongoose', 'cors', 'openai', 'node-fetch', 'axios',
  'dotenv', 'fast-levenshtein', 'sitemap-generator', 'puppeteer',
  'mongodb', 'bson',
]

export default defineConfig({
  base: '/',
  plugins: [react()],
  ssr: {
    // Bundle all frontend npm packages so CJS/ESM named-export issues
    // and directory imports are resolved by Vite rather than Node.js.
    noExternal: /^(?!node:)/,
    // These always stay external (Node built-ins + server-only packages).
    external: SSR_EXTERNAL,
  },
})

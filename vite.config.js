import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: undefined
      }
    }
  },
  base: '/', // your base URL
  server: {
    historyApiFallback: true,  // This will catch refresh errors and redirect to index.html
  },
});
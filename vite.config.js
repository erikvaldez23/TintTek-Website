import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: "/TintTek-Website/", // 🔥 Replace this with your repo name
});

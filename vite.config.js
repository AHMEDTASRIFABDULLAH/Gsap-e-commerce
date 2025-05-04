import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    // 👇 THIS IS THE FIX FOR REACT ROUTER DOM
    historyApiFallback: true
  }
});

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      // Make sure to include the extensions you're using in your project
      // For example, add '.jsx' if your React components have a .jsx extension
      external: ['.css', '.jsx'],
    },
  },


  
});

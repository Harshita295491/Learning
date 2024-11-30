import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5174, // Change this to your desired port
    strictPort: true,
    host: '127.0.0.1', // Ensures localhost resolves to 127.0.0.1
  },
})
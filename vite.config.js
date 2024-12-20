import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      // Proxy requests to your backend server (e.g., PythonAnywhere)
      '/api': {
        target: 'http://abenezer.pythonanywhere.com', // Your backend server URL
        changeOrigin: true, // Set to true to change the origin of the request
        // rewrite: (path) => path.replace(/^\/api/, ''), // Remove the /api prefix if needed
      },
    },
  },
})

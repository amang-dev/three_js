import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],

  //  server: {
  //   host: '192.168.1.23', // Use your machine's IP here
  //   port: 5173,            // Optional; default is 5173
  // }
})



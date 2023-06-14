import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
let $PORT = 8080

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: $PORT 
  }
})

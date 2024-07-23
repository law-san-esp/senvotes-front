import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
require('dotenv').config({path:'./.env'});

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: process.env.PORT || 3001,
  }
})

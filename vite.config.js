import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],

  server: {
    host: '0.0.0.0', // Allow access from other devices on the network
    port: 4000,       // Ensure the port matches the one you're forwarding
  },
})

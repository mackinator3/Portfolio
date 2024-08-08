import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
    base: "https://mackinator3.github.io/Portfolio/",
  plugins: [react()],
})

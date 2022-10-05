import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import viteCompression from 'vite-plugin-compression';
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), viteCompression()],
  base: "https://vue-music-app.oss-cn-hangzhou.aliyuncs.com",
  resolve: {
    alias: {
      "@": "/src"
    }
  }
})

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import htmlPlugin from 'vite-plugin-index-html'

console.log('fsdfsf', htmlPlugin)

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), htmlPlugin({
    input: './src/main.ts'
  })]
})

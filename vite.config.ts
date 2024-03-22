import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import {createSvgIconsPlugin} from "vite-plugin-svg-icons";

// https://vitejs.dev/config/
export default defineConfig({
  server: { // 服务器选项
    port: 3000, // 服务器主机
    open: false, // 是否自动打开浏览器
    strictPort: true // 端口占用退出
  },
  resolve: {
    alias: {
      '~': path.resolve(__dirname, './'),
      '@': path.resolve(__dirname, './src'),
    },
  },
  plugins: [
      vue(),
      createSvgIconsPlugin({
        iconDirs: [path.resolve(process.cwd(), 'src/assets/icons')], //svg图片存放的目录
        symbolId: 'icon-[dir]-[name]' //symbolId格式
      })
  ]
})

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from "path"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server:{
    hmr: true,
    port:3001,
    proxy:{
      '/api':{
        target:"后端服务接口",//目标代理接口地址
        secure:false,
        changeOrigin:true,//开启代理，在本地创建一个虚拟服务器
        pathRewrite:{
          '^/api':'/api',
        }
      }
    },
    host:'0.0.0.0'
  },
  resolve:{
    //配置路径别名
    alias:{
      '@':path.resolve(__dirname,'./src'),
    }
  }
})


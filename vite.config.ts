import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

import Components from 'unplugin-vue-components/vite'
import {
  VantResolver,
} from 'unplugin-vue-components/resolvers'

import WindiCSS from "vite-plugin-windicss"
import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'

import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Icons({ autoInstall: true }),
    Components({
      extensions: ['vue'],

      // allow auto import and register components used in markdown
      include: [/\.vue$/, /\.vue\?vue/],

      // custom resolvers
      resolvers: [
        VantResolver(),
        // auto import icons
        // https://github.com/antfu/unplugin-icons
        IconsResolver({
          componentPrefix: '',
          enabledCollections: ['carbon']
        }),
      ],

      dts: 'src/components.d.ts',
    }),
    WindiCSS()
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
      '@views': resolve(__dirname, './src/views'),
      '@style': resolve(__dirname, './src/style'),
      '@comp': resolve(__dirname, './src/components'),
      '@utils': resolve(__dirname, './src/utils'),
    },
  },
  server: {},
  css: {
    preprocessorOptions: {
      scss: {
        // additionalData 每个scss和<style></style>添加样式, 适合用于全局的变量和工具类
        // done 工具类导入
        additionalData: `@import '@style/tools/index.scss';
          @import '@style/settings/var.scss';`,
      },
    },
  },
  optimizeDeps: {
    // 强制加入预编译
    include: ['vue', 'vuex', 'vue-router', 'axios', 'vant'],
  },
})

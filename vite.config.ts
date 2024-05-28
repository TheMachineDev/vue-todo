import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  base: '/vue-todo/'
})

// export default defineConfig(({ command, mode, isSsrBuild, isPreview }) => {
//   if (command === 'serve') {
//     return {
//       plugins: [vue()],
//       resolve: {
//         alias: {
//           '@': fileURLToPath(new URL('./src', import.meta.url))
//         }
//       },
//       base: '/kekw'
//     }
//   } else {
//     // command === 'build'
//     return {
//       plugins: [vue()],
//       resolve: {
//         alias: {
//           '@': fileURLToPath(new URL('./src', import.meta.url))
//         }
//       },
//       base: '/lol'
//     }
//   }
// })

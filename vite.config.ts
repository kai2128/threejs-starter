import { URL, fileURLToPath } from 'url'
import { defineConfig } from 'vite'
import glsl from 'vite-plugin-glsl'

export default defineConfig({
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  plugins: [
    glsl({
      include: [
        '**/*.glsl', '**/*.wgsl',
        '**/*.vert', '**/*.frag',
        '**/*.vs', '**/*.fs',
      ],
      warnDuplicatedImports: true,
      defaultExtension: 'glsl',
      watch: true,
      root: '/src/shader',
    }),
  ],
})

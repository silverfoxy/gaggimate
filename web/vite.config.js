import { defineConfig } from 'vite';
import preact from '@preact/preset-vite';
import { viteMockServe } from 'vite-plugin-mock';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    preact(),
    viteMockServe({
      mockPath: 'src/mocks',
      localEnabled: true,
    }),
  ],
  server: {
    proxy: {
      '/api': {
        target: 'http://gaggimate.local/',
        changeOrigin: true,
      },
      '/ws': {
        target: 'ws://gaggimate.local',
        ws: true,
      }
    },
  },
});

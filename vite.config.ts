import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig(({ mode }) => {
  const base = mode === 'production' ? '/freightmate-website/' : '/';

  return {
    base,
    plugins: [vue()],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      }
    },
    server: {
      port: 3000
    },
    test: {
      environment: 'jsdom',
      globals: true,
      setupFiles: ['./tests/vitest.setup.ts'],
      coverage: {
        reporter: ['text', 'lcov'],
        reportsDirectory: './coverage',
        include: ['src/components/**/*.{ts,vue}', 'src/pages/**/*.vue', 'src/lib/**/*.ts']
      }
    }
  };
});

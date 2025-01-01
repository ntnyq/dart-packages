import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    reporters: ['dot'],
    coverage: {
      include: ['**/packages/*/src'],
      reporter: ['lcov', 'text'],
    },
  },
})

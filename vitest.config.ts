import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    coverage: {
      include: ['packages/*/src'],
      reporter: ['lcov', 'text'],
    },
    reporters: ['dot'],
  },
})

import { configDefaults, defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    reporters: ['dot'],
    coverage: {
      reporter: ['lcov', 'text', 'json'],
      exclude: [
        ...(configDefaults.coverage.exclude ?? []),
        // Exclude dist directory from coverage
        '**/dist/**',
      ],
    },
  },
})

import { defineConfig } from 'vitest/config';

export default defineConfig({
	test: {
		globals: true,
		include: ['./src/**/*.test.{ts,tsx}'],
		restoreMocks: true,
		setupFiles: ['./tests/setup/setupTestEnv.ts'],
		coverage: {
			include: ['src/**/utils/*.{ts,tsx}'],
			exclude: ['src/**/*.test.{ts,tsx}', 'src/components', 'src/utils/tv.ts', 'src/**/index.ts'],
			all: true,
		},
	},
});

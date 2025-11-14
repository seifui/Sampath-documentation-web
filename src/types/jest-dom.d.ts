// Make jest-dom matchers available to TypeScript globally during compilation.
// This file is picked up by tsconfig since it includes src/**/*.d.ts
// The import helps runtime/test setup, and the declaration below ensures
// TypeScript understands the commonly used matcher `toBeInTheDocument` during builds.
import '@testing-library/jest-dom';

declare global {
	namespace jest {
		interface Matchers<R> {
			toBeInTheDocument(): R;
		}
	}
}

export {};

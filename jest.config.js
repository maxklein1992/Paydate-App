module.exports = {
  collectCoverageFrom: [
    "src/**/*.{js,jsx,ts,tsx}",
    "!src/mocks/**",
    "!src/pages/api/**",
    "!**/*.d.ts",
    "!**/*.data.ts",
    "!**/node_modules/**",
  ],
  coverageReporters: ["json", "lcov", "text", "clover", "cobertura"],
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80,
    },
  },
  moduleNameMapper: {
    // Handle image imports
    // https://jestjs.io/docs/webpack#handling-static-assets
    "^.+\\.(jpg|jpeg|png|gif|webp|svg)$": "<rootDir>/__mocks__/fileMock.js",
    "\\.(css|scss)$": "<rootDir>/__mocks__/styleMock.js",
    // Handle absolute imports and module path aliases
    // https://nextjs.org/docs/testing#jest-and-react-testing-library
    "^@components": "<rootDir>/src/components/index",
    "^@context": "<rootDir>/src/context/index",
    "^@lib": "<rootDir>/src/lib/index",
    "^@test-utils": "<rootDir>/src/utils/test-utils",
    "^@utils": "<rootDir>/src/utils/index",
  },
  setupFilesAfterEnv: ["./jest.setup.ts"],
  testPathIgnorePatterns: ["<rootDir>/node_modules/", "<rootDir>/.next/"],
  testEnvironment: "jsdom",
  transform: {
    // Use babel-jest to transpile tests with the next/babel preset
    // https://jestjs.io/docs/configuration#transform-objectstring-pathtotransformer--pathtotransformer-object
    "^.+\\.(js|jsx|ts|tsx)$": ["babel-jest", { presets: ["next/babel"] }],
  },
  transformIgnorePatterns: [
    "/node_modules/",
    "^.+\\.module\\.(css|sass|scss)$",
  ],
};

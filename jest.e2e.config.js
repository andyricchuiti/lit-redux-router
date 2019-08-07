module.exports = {
  collectCoverageFrom: ['src/**/*.ts'],
  transform: {
    '^.+\\.ts$': 'ts-jest',
  },
  testMatch: ['**/*.e2e.ts'],
  preset: 'jest-puppeteer',
};

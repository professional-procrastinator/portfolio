module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  globalTeardown: '<rootDir>/global-teardown.js',
  moduleFileExtensions: ['js', 'ts', 'tsx'],
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
  globals: {
    'ts-jest': {
      tsconfig: 'tsconfig.json',
    },
  },
  testMatch: ['**/tests/*.+(ts|tsx|js)'],
  // testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.(tsx|ts|js)?$",
};

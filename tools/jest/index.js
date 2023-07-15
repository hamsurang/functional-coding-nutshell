/**
 *
 * @param {import('jest').Config} customConfig
 * @returns
 */
function makeConfig(customConfig) {
  return {
    preset: "ts-jest",
    testEnvironment: "node",
    transformIgnorePatterns: ["<rootDir>/node_modules/"],
    verbose: true,
    ...customConfig,
  };
}

module.exports = makeConfig;

/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  rootDir: "./",
  preset: "ts-jest",
  transform: {
    "^.+\\.(ts|tsx)?$": "ts-jest",
  },
  moduleFileExtensions: ["js", "ts"],
  testEnvironment: "node",
  projects: ["<rootDir>/packages/*/jest.config.js"],
};

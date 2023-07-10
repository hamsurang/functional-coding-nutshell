const path = require("path");

const buildPrettierCommand = (filenames) =>
  `yarn prettier --write ${filenames.map((f) => path.relative(process.cwd(), f)).join(" ")}`;

const buildEslintCommand = (filenames) =>
  `yarn lint ${filenames.map((f) => path.relative(process.cwd(), f)).join(" ")}`;

module.exports = {
  "./apps/**/*.{ts,tsx}": [buildPrettierCommand, buildEslintCommand],
};

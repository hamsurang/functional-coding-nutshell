const path = require("path");

const buildEslintCommand = (filenames) =>
  `yarn lint ${filenames.map((f) => path.relative(process.cwd(), f)).join(" ")}`;

module.exports = {
  "./apps/**/*.{ts,tsx}": [buildEslintCommand],
};

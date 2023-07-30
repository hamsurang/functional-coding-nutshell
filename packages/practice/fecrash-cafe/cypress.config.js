const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    screenshotOnRunFailure: false,
    video: false,
    specPattern: ['./**/*.cy.{js,jsx,ts,tsx}'],
  },
})

const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },

    baseUrl: "https://opensource-demo.orangehrmlive.com",
    specPattern: "cypress/e2e/**/*.{js,jsx,ts,tsx,feature}",

    viewportHeight: 1080,
    viewportWidth: 1630,

    // screenshotOnRunFailure: true,
    // trashAssetsBeforeRuns: true,

    retries:{
      openMode: 0,
      runMode: 0
    },
    // reporter: 'mochawesome',
    // projectId: "ixuerh",

    env: {



      qa: "https://www.google.com/",

      uat: "https://www.yahoo.com/?guccounter=1",

      bank: "https://parabank.parasoft.com/parabank/register.htm"

    }

  },
});

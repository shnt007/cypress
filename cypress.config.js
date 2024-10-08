const { defineConfig } = require("cypress");

module.exports = defineConfig({

  /* Auto Reload  */
  watchForFileChanges: false,

  pageLoadTimeout: 10_000,

  // screenshotOnRunFailure: true,

  /** for html report */
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    reportPageTitle: 'test-report',
    reportFilename: "[status]_[datetime]-[name]-report",
    timestamp: "longDate",
    overwrite: false,
    charts: true,
    autoOpen: true
  },

  /* To capture video */
  video: false,

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here

      /* for html report */
      require('cypress-mochawesome-reporter/plugin')(on);
    },
  },
});

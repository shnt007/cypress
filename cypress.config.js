const { defineConfig } = require("cypress");

module.exports = defineConfig({
  watchForFileChanges: false,
  /** for html report */
  // reporter: 'cypress-mochawesome-reporter',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here

      /* for html report */
      // required('cypress-mochawesome-reporter/plugin')(on);
    },
  },
});

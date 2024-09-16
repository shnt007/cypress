const { defineConfig } = require("cypress");

module.exports = defineConfig({

  /* Auto Reload  */
  watchForFileChanges: false,

  /** for html report */
  // reporter: 'cypress-mochawesome-reporter',

  /* To capture video */
  video: false,

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here

      /* for html report */
      // required('cypress-mochawesome-reporter/plugin')(on);
    },
  },
});

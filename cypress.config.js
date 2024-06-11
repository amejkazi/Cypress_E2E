const { defineConfig } = require("cypress");

module.exports = defineConfig({


  defaultCommandTimeout: 6000,
  env: {
    url: "https://rahulshettyacademy.com",
  },
  retries: {
    runMode: 1,
    
    },
  projectId: "j3vj6e",
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern:'cypress/e2e/*.js'
    
  },
});

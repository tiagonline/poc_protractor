'use strict';

exports.config = {
  directConnect: true,
  // seleniumAddress: 'http://localhost:4444/wd/hub',
  getPageTimeout: 60000,
  allScriptsTimeout: 500000,

  specs: [
    'spec/*.spec.js'
  ],

  framework: 'jasmine2',
  onPrepare: function () {
    var AllureReporter = require('jasmine-allure-reporter');
    jasmine.getEnv().addReporter(new AllureReporter({
      resultsDir: 'allure-results'
    }));

    browser.ignoreSynchronization = true;
  },

  capabilities: {
    'browserName': 'chrome',
    'chromeOptions': {
      'args': ['window-size=1440,3000']
    }
  },

  jasmineNodeOpts: {
    onComplete: null,
    isVerbose: false,
    showColors: true,
    includeStackTrace: false
  }
};

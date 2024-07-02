const {
  setHeadlessWhen,
  setCommonPlugins
} = require('@codeceptjs/configure');
// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

// enable all common plugins https://github.com/codeceptjs/configure#setcommonplugins
setCommonPlugins();

/** @type {CodeceptJS.MainConfig} */
exports.config = {
  tests: './tests/*_tests.js',
  output: './output',
  helpers: {
    Playwright: {
      browser: 'chromium',
      url: 'http://localhost',
      show: true,
      waitForNavigation: 'load',
      waitForTimeout: 10000,
      windowSize: '1400x900',
    },
    Mochawesome: {
      uniqueScreenshotNames: 'true',
    },
    ChaiWrapper: {
      require: 'codeceptjs-chai',
    },
  },
  include: {
    I: './steps_file.js',

    docStatePage: './pages/docState.js',
  },
  mocha: {
    reporterOptions: {
      reportDir: 'output',
      json: 'false',
      reportFilename: '[datetime]_[name]_[status]-report',
      timestamp: 'longDate',
    },
  },
  name: 'ID_check',
};
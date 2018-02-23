const webpackConfig = require('./webpack.test.config.js');

module.exports = function(config) {
  const customLaunchers = {
    ChromeBeta: {
      base: 'SauceLabs',
      browserName: 'chrome',
      version: 'beta'
    },
    Chrome: {
      base: 'SauceLabs',
      browserName: 'chrome'
    },
    Firefox: {
      base: 'SauceLabs',
      browserName: 'firefox'
    },
    Edge: {
      base: 'SauceLabs',
      browserName: 'microsoftedge'
    },
    InternetExplorer11: {
      base: 'SauceLabs',
      browserName: 'internet explorer',
      version: '11'
    },
    Safari10: {
      base: 'SauceLabs',
      browserName: 'safari',
      version: '10'
    },
    Safari9: {
      base: 'SauceLabs',
      browserName: 'safari',
      version: '9'
    },
    Safari8: {
      base: 'SauceLabs',
      browserName: 'safari',
      version: '8'
    }
    // TODO: For some reason Safari 7 gets fails to load
    // the test page, every other browser seems to work fine.
    // Safari7: {
    //   base: 'SauceLabs',
    //   browserName: 'safari',
    //   platform: 'OS X 10.9',
    //   version: '7'
    // }
  };

  const karmaConfig = {
    basePath: '',

    frameworks: [
      'mocha',
      'sinon'
    ],

    files: [
      'tests/index.js'
    ],

    preprocessors: {
      'tests/index.js': ['webpack', 'sourcemap']
    },

    webpack: webpackConfig,

    webpackMiddleware: {
      noInfo: true
    },

    reporters: ['mocha'],

    port: 9876,

    colors: true,

    logLevel: config.LOG_INFO,

    sauceLabs: {
      testName: 'BerkleyTechnologyServices/slidey',
      tunnelIdentifier: process.env.TRAVIS_JOB_NUMBER,
      startConnect: true
    },

    captureTimeout: 0,
    browserNoActivityTimeout: 120000,

    singleRun: true
  };

  karmaConfig.customLaunchers = customLaunchers;
  karmaConfig.browsers = Object.keys(customLaunchers);
  karmaConfig.reporters.push('saucelabs');

  config.set(karmaConfig);
};

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
    },
    Safari7: {
      base: 'SauceLabs',
      browserName: 'safari',
      version: '7'
    }
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

  // https://github.com/travis-ci/travis-ci/issues/1946
  // TODO: Switch to SauceLabs purely once Encrypted Variables in PRs are supported
  if (process.env.TRAVIS_PULL_REQUEST === 'false') {
    karmaConfig.customLaunchers = customLaunchers;
    karmaConfig.browsers = Object.keys(customLaunchers);
    karmaConfig.reporters.push('saucelabs');
  } else {
    karmaConfig.browsers = ['Chrome', 'Firefox'];
  }

  config.set(karmaConfig);
};

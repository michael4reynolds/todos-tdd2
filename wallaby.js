/* eslint-disable */
module.exports = function (wallaby) {
  // Babel, jest-cli and some other modules are located under
  // react-scripts/node_modules, so need to let node.js know about it
  var path = require('path');
  process.env.NODE_PATH +=
    path.delimiter +
    path.join(__dirname, 'node_modules') +
    path.delimiter +
    path.join(__dirname, 'node_modules/react-scripts/node_modules');
  require('module').Module._initPaths();

  // Babel needs this
  process.env.NODE_ENV = 'development';

  return {
    files: [
      'src/**/*.js*',
      'test/**/*.js*',
      '!test/**/*.spec.js',
    ],

    tests: [
      'test/**/*.spec.js*',
      '!test/**/*.spec.js.snap'
    ],

    env: {
      type: 'node',
      runner: 'node',
    },

    compilers: {
      '**/*.js*': wallaby.compilers.babel({
        babel: require('babel-core'),
        presets: ['react-app'],
      }),
    },

    setup: function (wallaby) {
      wallaby.testFramework.configure({
        // as in node_modules/react-scripts/utils/createJestConfig.js
        moduleNameMapper: {
          '^.+\\.(jpg|jpeg|png|gif|svg)$': require.resolve('react-scripts/config/jest/fileTransform.js'),
          '^.+\\.css$': require.resolve('react-scripts/config/jest/cssTransform.js'),
        },
      });
    },

    testFramework: 'jest',
  };
};

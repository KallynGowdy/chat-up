var webpackConfig = require('./webpack.config');

module.exports = function(config) {
  'use strict';
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: './',

    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['mocha', 'chai', 'sinon'],

    // list of files / patterns to load in the browser
    files: [
      'node_modules/mocha/mocha.js',
      'www/build/js/es6-shim.min.js',
      'www/build/js/Reflect.js',
      'www/build/js/zone.js',
      'www/build/js/web-animations.min.js',
      'app/app.spec.ts',
      {pattern: 'node_modules/reflect-metadata/Reflect.js.map', included: false, served: true}, // 404 on the same
      {pattern: 'app/**/*.html', included: false, served: true},
      {pattern: 'www/build/**/*.css', included: false, served: true}
    ],

    // list of files to exclude
    exclude: [
      'node_modules/angular2/**/*_spec.js',
      'node_modules/ionic-angular/**/*spec*'
    ],

    // options on how to report coverage:
    coverageReporter: {
      reporters: [
        {type: 'text'},
        {type: 'lcov', dir: 'coverage', subdir: '.'}
      ]
    },

    preprocessors: {
      '**/*.ts': ['webpack']
    },

    webpack: {
      module: webpackConfig.module,
      resolve: webpackConfig.resolve
    },

    // typescriptPreprocessor: {
    //   // options passed to the typescript compiler
    //   options: {
    //     sourceMap: false, // (optional) Generates corresponding .map file.
    //     target: 'ES5', // (optional) Specify ECMAScript target version: 'ES3' (default), or 'ES5'
    //     module: 'amd', // (optional) Specify module code generation: 'commonjs' or 'amd'
    //     noImplicitAny: false, // (optional) Warn on expressions and declarations with an implied 'any' type.
    //     noResolve: false, // (optional) Skip resolution and preprocessing.
    //     removeComments: false, // (optional) Do not emit comments to output.
    //     concatenateOutput: false // (optional) Concatenate and emit output to single file. By default true if module option is omited, otherwise false.
    //   },
    //   // transforming the filenames
    //   transformPath: function(path) {
    //     return path.replace(/\.ts$/, '.js');
    //   }
    // },

    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['mocha'],

    // web server port
    port: 9876,

    // enable / disable colors in the output (reporters and logs)
    colors: true,

    // GOTCHA -- Karma proxies _everything_ through base first..
    //           Also any files you want to serve need to be in the files array above with serverd: true
    proxies: {
      '/build': '/base/www/build'
    },

    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,

    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: false,
    singleRun: true,

    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: [
      'Chrome'
    ],

    // https://github.com/lathonez/clicker/issues/82
    // try increasing this value if you see the error "Disconnected (1 times), because no message in 30000 ms."
    browserNoActivityTimeout: 30000
  });

  if (process.env.TRAVIS || process.env.CIRCLECI) {
    config.browsers = ['Chrome', 'PhantomJS'];
    config.singleRun = true;
  }
};

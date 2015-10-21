'use strict';

var gulp = require('gulp');
var jshint = require('gulp-jshint');
var stylish = require('jshint-stylish');
var jscs = require('gulp-jscs');
var istanbul = require('gulp-istanbul');
var mocha = require('gulp-mocha');

var paths = {
  javascript: ['./*.js', './lib/*.js', './test/*.js'],
  tests: ['./test/*.js'],
  codeCoverage: ['./index.js', './lib/*.js'],
};

gulp.task('jshint', function() {
  return gulp.src(paths.javascript)
    .pipe(jshint())
    .pipe(jshint.reporter(stylish))
    .pipe(jshint.reporter('fail'));
});

gulp.task('jscs', function() {
  return gulp.src(paths.javascript)
    .pipe(jscs())
    .pipe(jscs.reporter())
    .pipe(jscs.reporter('fail'));
});

gulp.task('istanbul', function() {
  return gulp.src(paths.codeCoverage)
    .pipe(istanbul())
    .pipe(istanbul.hookRequire());
});

gulp.task('mocha', ['istanbul'], function() {
  return gulp.src(paths.tests, { read: false })
    .pipe(mocha({
      reporter: 'spec',
      globals: {
        should: require('should'),
      },
    }))
    .pipe(istanbul.writeReports())
    .pipe(istanbul.enforceThresholds({ thresholds: { global: 90 } }));
});

gulp.task('test', ['jshint', 'jscs', 'mocha']);

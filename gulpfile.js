'use strict';

/**
 * Module dependencies
 */

var browserify = require('gulp-browserify');
var rename = require('gulp-rename');
var concat = require('gulp-concat');
var myth = require('gulp-myth');
var gulp = require('gulp');

/**
 * Compile CSS
 */

gulp.task('styles', function() {
  gulp
    .src('client/styles/*.css')
    .pipe(myth())
    .pipe(concat('build.css'))
    .pipe(gulp.dest('build/styles'));
});

/**
 * Compile JS
 */

gulp.task('modules', function() {
  gulp
    .src('client/modules/index.js')
    .pipe(browserify({buffer: false, debug: true}))
    .pipe(rename('build.js'))
    .pipe(gulp.dest('build/'));
});

/**
 * Default
 */

gulp.task('default', [
  'styles',
  'modules'
]);
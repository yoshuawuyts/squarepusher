'use strict';

/**
 * Module dependencies
 */

var Component = require('../../client/index');
var markdown = require('./readFile');
var React = require('react');
var koa = require('koa');
console.log(markdown)
/**
 * Initialize 'app'.
 */

var app = koa();

/**
 * Export 'app'.
 */

module.exports = app;

/**
 * Always return files.
 */

app.use(function *(next) {
  this.body = React.renderComponentToString(Component({markdown: markdown}));
});

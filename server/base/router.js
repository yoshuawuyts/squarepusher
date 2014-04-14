'use strict';

/**
 * Module dependencies
 */

var Component = require('../../client/index');
var React = require('react');
var koa = require('koa');

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
  this.body = React.renderComponentToString(Component());
});

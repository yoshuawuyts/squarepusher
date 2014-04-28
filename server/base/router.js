'use strict';

/**
 * Module dependencies
 */

var grid = require('../../.database/grid1.json');
var Component = require('../../client/index');
var data = require('../../.database/data1.json');
var markdown = require('./readFile');
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
  this.body = React.renderComponentToString(Component({markdown: markdown, data: data, grid: grid}));
});

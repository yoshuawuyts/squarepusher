'use strict';

/**
 * Module dependencies
 */

var grid = require('../../data/grid1.json');
var index = require('../../client/modules/index/index');
var data = require('../../data/data1.json');
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

app.use(function *() {
  this.body = React.renderComponentToString(index({markdown: markdown, data: data, grid: grid}));
});

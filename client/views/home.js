'use strict';

/**
 * Module dependencies
 */

var React = require('react');
var prepareData = require('../iterate/preparate');
var iterate = require('../iterate/iterative');
var prepareGrid = require('../grid/grid');
var listObject = require('../list/list');

/**
 * Define view
 *
 * @params {Object[]} data
 * @params {Object} grid
 * @return {ReactComponent}
 * @api public
 */

module.exports = React.createClass({

  /**
   * Render element
   */

  render: function () {

    var list = prepareData(this.props.data);
    var grid = prepareGrid(this.props.grid);
    iterate(grid, list);

    // Return grid to be rendered.
    return React.DOM.div(null);
  }
});
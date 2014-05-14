'use strict';

/**
 * Module dependencies
 */

var React = require('react');
var gridObject = require('./canvasObjects/grid');
var listObject = require('./canvasObjects/list');
var tileObject = require('./canvasObjects/tile');
var iterate = require('./canvasAlgorithms/iterative');

/**
 * Define view
 *
 * @props {Object[]} tiles
 * @props {Object} grid
 * @return {ReactComponent}
 * @api public
 */

module.exports = React.createClass({

  /**
   * Render element
   */

  render: function () {

    var grid = gridObject(this.props.grid);
    var tiles = tileObject(this.props.data);
    var list = listObject(tiles);

    iterate(grid, list);

    // Return grid to be rendered.
    return React.DOM.div(null);
  }
});
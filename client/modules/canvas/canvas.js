'use strict';

/**
 * Module dependencies
 */

var React = require('react');
var iterate = require('../iterate/iterative');
var gridObject = require('../grid/grid');
var listObject = require('../list/list');

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
    var list = listObject(this.props.data);

    iterate(grid, list);

    // Return grid to be rendered.
    return React.DOM.div(null);
  }
});
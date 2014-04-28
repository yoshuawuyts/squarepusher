'use strict';

/**
 * Module dependencies
 */

var React = require('react');

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
    var grid = this.props.grid;
    var tiles = this.props.data;

    // Initialize blank grid.
    grid = this.gridAttr(grid);

    // Add 'grid.add' function.
    grid = this.gridAdd(grid);

    // Add 'tile.id' property.
    tiles = this.tilesId(tiles);

    // Add 'tile.surface' property.
    tiles = this.tilesSurface(tiles);

    // Add 'tile.horizontal', 'tile.vertical' & 'tile.square'
    tiles = this.tilesRotate(tiles);

    // Sort tiles.
    tiles = this.sort(tiles);

    // Fill grid with tiles.
    //tiles = this.fill(tiles, grid);

    // Return grid to be rendered.
    return React.DOM.div(null)
  },

  /**
   * Set initial grid attr.
   *
   * @param {Object} grid
   * @return (Object)
   * @api private
   */

  gridAttr: function(grid) {
    var tmpArray = [];

    for(var i = 0, j = grid.height - 1; i < j; i++) {
      tmpArray.push([]);

      for(var k = 0, l = grid.width - 1; k < l; k++) {
        tmpArray[i].push(-1);
      }
    }

    grid.attr = tmpArray;
    return grid;
  },

  /**
   * Set 'grid.add' function which places a tile in the grid.
   *
   * @param {Object} baseGrid
   * @return {Object}
   * @api private
   */

  gridAdd: function(grid) {

    /**
     * 'grid.add'.
     *
     * @param {Object} tile
     * @return {Object|Boolean}
     * @api private
     */

    grid.add = function(tile) {
      var coordinates = {};
      var correct = true;

      // read values till a '-1' is found
      for(var i = 0, j = grid.height - 1; i < j; i++) {
        for(var k = 0, l = grid.width - 1; k < l; k++) {
          if (grid.attr[i][k] == -1) {
            coordinates.y = i;
            coordinates.x = k;
            break;
          }
        }
      }

      // check if bounds allow placement
      if ((grid.height - coordinates.y - tile.height) < 0) return false;
      if ((grid.width - coordinates.x - tile.width) < 0) return false;

      // start filling in values
      //   if runs into another num, return false
      for(var i = coordinates.y, j = tile.height + i; i < j; i++) {
        for(var k = coordinates.x, l = tile.width + k; k < l; k++) {
          
          // catch err
          if (grid.attr[i][k] != -1) {
            correct = false;
            break;
          }

          grid.attr[i][k] = tile.id;
        }
      }

      // return
      if (correct != true) return false;
      return grid;
    };

    return grid;
  },

  /**
   * Add an id to each tile.
   *
   * @param {Object[]} tiles
   * @return {Object[]}
   * @api private
   */

  tilesId: function(tiles) {
    console.log(tiles);
    tiles.forEach(function(tile, index) {
      tile.id = index;
    });

    return tiles;
  },

  /**
   * Calculate the surface of each tile.
   *
   * @param {Object[]} tiles
   * @return {Object}
   * @api private
   */

  tilesSurface: function(tiles) {
    tiles.forEach(function(tile) {
      tile.surface = tile.height * tile.width;
    });

    return tiles;
  },

  /**
   * Set 'tile.horizontal' and 'tile.vertical' functions.
   * Set 'tile.square' to Boolean.
   *
   * @param {Object[]} tiles
   * @return {Object[]}
   * @api private
   */

  tilesRotate: function(tiles) {
    tiles.forEach(function(tile) {
      if(tile.height == tile.width) {
        tile.square = true;

      } else {
        tile.square = false;

        // normal
        tile.horizontal = function() {
          return [tile.height, tile.width]
        };

        // rotate
        tile.vertical = function() {
          return [tile.width, tile.height]
        };
      }
    });
  },

  /**
   * Sort elements by surface
   *
   * @param {Object[]} tiles
   * @return {Object}
   * @api private
   */

  sort: function(tiles) {
    tiles.sort(function(a, b) {
      if(a.surface < b.surface) return -1;
      if(a.surface > b.surface) return 1;

      // if equal surface, determine order by height.
      if(a.height < b.height) return -1;
      if(a.height > b.height) return 1;

      // if equal surface and equal height, determine order by width.
      if(a.width < b.width) return -1;
      if(a.width > b.width) return 1;

      return 0;
    });

    return tiles;
  }
});
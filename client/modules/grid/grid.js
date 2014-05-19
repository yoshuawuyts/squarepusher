/**
 * Module dependencies
 */

var debug = require('debug')('sp:grid');


/**
 * Grid prototype
 */

var grid = Grid.prototype;

/**
 * Expose Grid
 */

exports = module.exports = Grid;

/**
 * Create a new 'Grid'.
 *
 * @return {Object}
 * @api public
 */

function Grid() {
  if (!(this instanceof Grid)) return new Grid;
  this.attr = [];
  this.height = 0;
  this.width = 0;
};

/**
 * Set initial grid attr.
 *
 * @param {Object} grid
 * @return {Object}
 * @api public
 */

grid.initialize = function(grid) {
  this.height = grid.height;
  this.width = grid.width;

  for(var i = 0, j = grid.height; i < j; i++) {
    this.attr.push([]);
    
    for(var k = 0, l = grid.width; k < l; k++) {
      this.attr[i].push(-1);
    }
  }
  return this;
};

/**
 * Add a tile to the grid.
 *
 * @param {Object} tile
 * @return {Object|Boolean}
 * @api public
 */

grid.add = function(tile) {
  var coordinates = {};
  var found = false;
  
  // read values from grid until an empty space is found.
  for(var i = 0, j = this.height; i < j; i++) {
    for(var k = 0, l = this.width; k < l; k++) {
      if (this.attr[i][k] == -1) {
        coordinates.x = k;
        coordinates.y = i;
        found = true;
      }
      if(found) break;
    }
    if(found) break;
  }

  // check if 'tile' fits into the empty space without going outside the grid.
  if ((this.height - coordinates.y - tile.height) < 0) return false;
  if ((this.width - coordinates.x - tile.width) < 0) return false;
  
  // fill empty space with 'tile', if it encounters filled space > exit.
  for(var i = coordinates.y, j = tile.height + i; i < j; i++) {
    for(var k = coordinates.x, l = tile.width + k; k < l; k++) {
      
      // check if value is empty
      if (-1 != this.attr[i][k]) return false;
      this.attr[i][k] = tile.id;
    }
  }

  return this;
};
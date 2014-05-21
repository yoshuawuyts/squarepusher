/**
 * Module dependencies
 */

var debug = require('debug')('sp:list');
var flatten = require('flatten-array');

/**
 * Grid prototype
 */

var list = List.prototype;

/**
 * Exports
 */

module.exports = List;

/**
 * Create a new 'List'.
 *
 * @return {Object}
 * @api public
 */

function List() {
  if (!(this instanceof List)) return new List;
  this.attr = [];
  this.used = [];
};

/**
 * Initialize all objects
 */

list.initialize = function(data) {
  this.add(data);
  this.applySurface();
  this.applyRotation();
  this.sort();
  this.applyId();
  return this;
}

/**
 * Save an array to list
 *
 * @param {Object} values
 * @api public
 */

list.add = function(values) {
  this.attr = flatten(values);
};

/**
 * Return a tile from the list at position 'offset'.
 *
 * @param {Number} offset
 * @return {Object}
 * @api public
 */

list.giveTile = function(offset) {
  if (undefined == offset) throw new Error('Provide an offset for \'giveTile\'');
  var id = this.attr[offset].id;

  // check if element at attrIndex is already in use
  var used = this.used.some(function(elementZero, indexZero) {
    return elementZero == id;
  }.bind(this));

  if(!used) return this.attr[offset];
  return false;
};

/**
 * Set a tile at offset n to used
 *
 * @param {Number} offset
 * @return {Object}
 * @api public
 */

list.setUsed = function(offset) {
  var tmp = Object.create(this);
  tmp.used = this.used.slice(0);
  tmp.attr = this.attr.slice(0);
  tmp.used.push(tmp.attr[offset].id);
  return tmp;
};

/**
 * Add an id to each tile.
 *
 * @api public
 */

list.applyId = function() {
  if (!this.attr) throw new Error('Load tiles first')
  this.attr.forEach(function(tile, index) {
    tile.id = index;
  });
};

/**
 * Calculate and set the surface for each tile;
 *
 * @api public
 */

list.applySurface = function() {
  if (!this.attr) throw new Error('Load tiles first');
  this.attr.forEach(function(tile) {
    tile.surface = tile.height * tile.width;
  });
}

/**
 * Set 'tile.horizontal' and 'tile.vertical' functions.
 * Set 'tile.square' to Boolean.
 *
 * @api private
 */

list.applyRotation = function () {
  this.attr.forEach(function(tile) {
    tile.height == tile.width
      ? tile.square = true
      : tile.square = false;

    if(!tile.square) {
      tile.horizontal = [tile.height, tile.width];
      tile.vertical = [tile.width, tile.height];
    }
  });
};

/**
 * Sort elements by surface
 *
 * @param {Object[]} tiles
 * @return {Object}
 * @api private
 */

list.sort = function () {
  this.attr.sort(function(a, b) {
    if(a.surface > b.surface) return -1;
    if(a.surface < b.surface) return 1;

    // if equal surface, determine order by height.
    if(a.height > b.height) return -1;
    if(a.height < b.height) return 1;

    // if equal surface and equal height, determine order by width.
    if(a.width > b.width) return -1;
    if(a.width < b.width) return 1;

    return 0;
  });
};
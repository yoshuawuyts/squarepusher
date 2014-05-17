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
  return this;
};


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
 * Return the largest unused value with an offset of n.
 *
 *   tiles.attr = [{id: 3, surface: 4}, {id: 9, surface: 6}]
 *   tiles.giveTile();
 *   // -> 9
 *   tiles.giveTile(1);
 *   // -> 3
 *
 * @param {Number} offset
 * @return {Number}
 * @api public
 */

list.giveTile = function(offset) {
  offset = offset || 0;
  var offsetCounter = 0;
  var attrIndex = 0;
  var returnValue;

  while(this.used.length < this.attr.length) {

    // check if element at attrIndex is already in used
    var overlap = this.used.some(function(elementZero, indexZero) {
      return elementZero == this.attr[attrIndex].id;
    }.bind(this));

    // return conditional
    if(!overlap && offsetCounter >= offset) {
      this.used.push(attrIndex);
      returnValue = this.attr[attrIndex];
      debug('value', returnValue);
      debug('used', this.used);
      break;
    }

    // increment offsetCount
    if(!overlap && offsetCounter < offset) {
      offsetCounter++;
    }

    attrIndex++;
  }
  return returnValue;
};

/**
 * Return the number of unused tiles.
 *
 * @return {Number}
 * @api public
 */

list.giveLength = function() {
  return this.attr.length - this.used.length;
};

/**
 * Calculate and set the surface for each tile;
 *
 */

list.applySurface = function() {
  if (!this.attr) throw new Error('Load a ')
}
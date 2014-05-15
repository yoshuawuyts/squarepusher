/**
 * Module dependencies
 */

var debug = require('debug')('sp:list');

/**
 * Exports
 */

module.exports = listObject;

/**
 * Call all other functions
 */

function listObject(tiles) {
  tiles = tileAttributes(tiles);
  tiles = tilesList(tiles);
  tiles = tilesLength(tiles);
  return tiles;
};

function tileAttributes(tiles) {
  var tmp = {};
  tmp.attr = tiles;
  tiles = tmp;
  tiles.used = [];
  return tiles;
};

/**
 * Add 'giveTile()' function.
 *
 * @param {Object} tiles
 * @return {Object}
 * @api public
 */

function tilesList(tiles) {

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

  tiles.giveTile = function(offset) {
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

  return tiles;
};

/**
 * Add 'giveTile()' function.
 *
 * @param {Object} tiles
 * @return {Object}
 * @api public
 */

function tilesLength(tiles) {

  /**
   * Return the number of unused tiles.
   *
   * @return {Number}
   * @api public
   */

  tiles.giveLength = function() {
    return this.attr.length - this.used.length;
  };

  return tiles;
};
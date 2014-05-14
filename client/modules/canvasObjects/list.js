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
    var returnValue = this.attr[offset];
    this.used.push(returnValue);
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
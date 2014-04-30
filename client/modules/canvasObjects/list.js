/**
 * Exports
 */

module.exports = listObject;

/**
 * Call all other functions
 */

function listObject(tiles) {
  tiles = tilesList(tiles);
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
  tiles.attr = tiles;
  tiles.used = [];

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
   * @api private
   */

  tiles.giveTile = function(offset) {
    offset = offset || 0;
    
  };

  return tiles;
};
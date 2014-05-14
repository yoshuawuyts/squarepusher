/**
 * Exports.
 */

module.exports = tilesObject;

/**
 * Call all other functions
 *
 * @param {Object[]} tiles
 * @return {Object[]}
 * @api public
 */

function tilesObject(tiles) {
  tiles = tilesId(tiles);
  tiles = tilesSurface(tiles);
  tiles = tilesRotate(tiles);
  tiles = tilesSort(tiles);
  return tiles;
};

/**
 * Add an id to each tile.
 *
 * @param {Object[]} tiles
 * @return {Object[]}
 * @api private
 */

function tilesId(tiles) {
  tiles.forEach(function(tile, index) {
    tile.id = index;
  });

  return tiles;
};

/**
 * Calculate the surface of each tile.
 *
 * @param {Object[]} tiles
 * @return {Object}
 * @api private
 */

function tilesSurface(tiles) {
  tiles.forEach(function(tile) {
    tile.surface = tile.height * tile.width;
  });

  return tiles;
};

/**
 * Set 'tile.horizontal' and 'tile.vertical' functions.
 * Set 'tile.square' to Boolean.
 *
 * @param {Object[]} tiles
 * @return {Object[]}
 * @api private
 */

function tilesRotate(tiles) {
  tiles.forEach(function(tile) {
    if(tile.height == tile.width) {
      tile.square = true;

    } else {
      tile.square = false;

      // normal
      tile.horizontal = function() {
        return [tile.height, tile.width];
      };

      // rotate
      tile.vertical = function() {
        return [tile.width, tile.height];
      };
    }
  });
  return tiles;
};

/**
 * Sort elements by surface
 *
 * @param {Object[]} tiles
 * @return {Object}
 * @api private
 */

function tilesSort(tiles) {
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
};
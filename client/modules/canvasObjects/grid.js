/**
 * Exports
 */

module.exports = gridObject;

/**
 * Create a new 'gridObject'.
 *
 * @param {Object} grid
 * @return {Object}
 * @api public
 */

function gridObject(grid) {
  grid = gridAttr(grid);
  grid = gridAdd(grid);
  return grid;
};

/**
 * Set initial grid attr.
 *
 * @param {Object} grid
 * @return {Object}
 * @api private
 */

function gridAttr(grid) {
  var tmpArray = [];

  for(var i = 0, j = grid.height - 1; i < j; i++) {
    tmpArray.push([]);

    for(var k = 0, l = grid.width - 1; k < l; k++) {
      tmpArray[i].push(-1);
    }
  }

  grid.attr = tmpArray;
  return grid;
};

/**
 * Set 'grid.add' function which places a tile in the grid.
 *
 * @param {Object} baseGrid
 * @return {Object}
 * @api private
 */

function gridAdd(grid) {

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
    var found = false;

    // read values from grid till a '-1' is found
    for(var i = 0, j = grid.height - 1; i < j; i++) {
      for(var k = 0, l = grid.width - 1; k < l; k++) {
        if (grid.attr[i][k] == -1) {
          coordinates.y = i;
          coordinates.x = k;
          found = true;
        }
        if(found == true) break;
      }
      if(found == true) break;
    }

    console.log(coordinates);

    // check if bounds allow placement
    if ((grid.height - coordinates.y - tile.height) < 0) return false;
    if ((grid.width - coordinates.x - tile.width) < 0) return false;

    // start filling in values, if runs into another num, return false
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
};
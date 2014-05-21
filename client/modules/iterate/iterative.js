/**
 * Module dependencies
 */

var debug = require('debug')('sp:iterative');

/**
 * Exports.
 */

module.exports = iterate;

/**
 * Iterate over each row in the grid, and try to fill rows
 * with the biggest fitting element.
 *
 * @param {Object} grid
 * @param {Object[]} list
 * @return {Object}
 * @api public
 */
    
    /*
    console.log(tile)
    console.log('\n\n')
    console.log('depth', depth, '\n', 'posi', i, '\n')
    console.log(grid.attr)
    console.log('used', list.used);
    console.log('\n\n')
    */
    // depth = depth || 0;

function iterate(grid, list) {

  for(var i = 0, j = list.attr.length - 1; i <= j; i++) {

    var tile = list.giveTile(i);
    if(!tile) continue;

    var newGrid = grid.add(tile);

    // execute only if grid returned true
    if(newGrid) {
      var newList = list.setUsed(i);
      if(newList.used.length == j + 1) return newGrid;

      var answer = iterate(newGrid, newList);
      if(answer) return answer;
    }

    // try to rotate the tile
    if(tile.square) continue;
    tile = list.rotateTile(tile);

    var newGrid2 = grid.add(tile);
    if(!newGrid2) continue;

    var newList2 = list.setUsed(i);
    if(newList2.used.length == j + 1) return newGrid2;

    var answer2 = iterate(newGrid2, newList2);
    if(answer2) return answer2;
  };
};
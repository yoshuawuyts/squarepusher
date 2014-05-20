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

function iterate(grid, list) {
  for(var i = 0, j = list.length() - 1; i <= j; i++) {
    console.log(i, j)
    console.log(grid)
    console.log('\n\n')


    var tile = list.giveTile(i);
    console.log(tile)
    if (!tile) continue;

    var newGrid = grid.add(tile);
    if(!newGrid && i == j) return false;
    if(!newGrid) continue;
    if(i == j) return newGrid;

    // if option n returns true, call iterate again.
    var answer = iterate(newGrid, list);
    if(answer) return answer;
  };
};
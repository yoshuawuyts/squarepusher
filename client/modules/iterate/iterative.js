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
  for(var i = 0, j = list.length(); i <= j; i++) {
    var tile = list.giveTile(i);
    var gridIsFatter = grid.add(tile);
    
    //console.log(gridIsFatter)
    if(!gridIsFatter && i == j) {
      return false;
    }

    // if option n returns true, call iterate again.
    if(gridIsFatter) {
      var answer = iterate(grid, list);
      if(answer) return answer;
    }
  };
};
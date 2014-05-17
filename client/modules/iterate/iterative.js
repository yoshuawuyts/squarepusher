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
  for(var i = 0, j = list.giveLength(); i <= j; i++) {
    debug(j,i);
    //console('tile', list.giveTile(i))

    // if the last option from the loop returns fails, it means all our options
    // are exhausted, thus return false.
    if(grid.add(list.giveTile(i)) == false && i == j) {
      return false;
    }

    // if option n returns true, call iterate again.
    if(grid.add(list.giveTile(i))) {
      console.log(grid.attr);
      var tmp = iterate(grid, list);
      if(tmp) return tmp;
    }
  };
};
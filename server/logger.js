/**
 * Module dependencies
 */

var iterate = require('../client/modules/iterate/iterative');
var grid = require('../client/modules/grid/grid');
var list = require('../client/modules/list/list');

var tileData = require('../data/data1.json');
var gridData = require('../data/grid1.json');

/**
 * Prepare data
 */

list = list().initialize(tileData);
grid = grid().initialize(gridData);
//console.log('list at stage 0', list);
//console.log('grid at stage 0', grid);

/**
 * Find solution
 */

var result = iterate(grid, list);
console.log(result);
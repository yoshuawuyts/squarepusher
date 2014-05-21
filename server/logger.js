/**
 * Module dependencies
 */

var iterate = require('../client/modules/iterate/iterative');
var grid = require('../client/modules/grid/grid');
var list = require('../client/modules/list/list');

var tileData1 = require('../data/data1.json');
var gridData1 = require('../data/grid1.json');

var tileData2 = require('../data/data2.json');
var gridData2 = require('../data/grid2.json');

/**
 * Case #1
 */

// prepare
var list1 = list().initialize(tileData1);
var grid1 = grid().initialize(gridData1);
// calculate
var start = new Date;
var result = iterate(grid1, list1);
// log data
var ms = new Date - start;
console.log(ms + 'ms')
console.log(result);

/**
 * Case #2
 */

// prepare
var list2 = list().initialize(tileData2);
var grid2 = grid().initialize(gridData2);
// calculate
var start = new Date;
var result2 = iterate(grid2, list2);
var ms = new Date - start;
// log data
console.log(ms + 'ms');
console.log(result2);
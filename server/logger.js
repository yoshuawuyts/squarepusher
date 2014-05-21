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

var tileData3 = require('../data/data3.json');
var gridData3 = require('../data/grid3.json');

/**
 * Case #1
 */

// prepare
var list1 = list().initialize(tileData1);
var grid1 = grid().initialize(gridData1);
// calculate
var start1 = new Date;
var result = iterate(grid1, list1);
// log data
var ms2 = new Date - start1;
console.log(ms2 + 'ms')
console.log(result);

/**
 * Case #2
 */

// prepare
var list2 = list().initialize(tileData2);
var grid2 = grid().initialize(gridData2);
// calculate
var start2 = new Date;
var result2 = iterate(grid2, list2);
var ms2 = new Date - start2;
// log data
console.log(ms2 + 'ms');
console.log(result2);

/**
 * Case #2
 */

// prepare
var list3 = list().initialize(tileData3);
var grid3 = grid().initialize(gridData3);
// calculate
var start3 = new Date;
var result3 = iterate(grid3, list3);
var ms3 = new Date - start3;
// log data
console.log(ms3 + 'ms');
console.log(result3);
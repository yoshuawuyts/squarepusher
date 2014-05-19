/*eslint no-unused-expressions: 0*/
'use strict';

/**
 * Module dependencies
 */

var should = require('should');
var iterate = require('../../client/modules/iterate/iterative');
var list = require('../../client/modules/list/list');
var grid = require('../../client/modules/grid/grid');
var gridData1 = {'height': 3, 'width': 3};
var tileData1 = require('./tiles.json');

/**
 * Tests
 */

describe('#iterate()', function () {
  it('should properly calculate for n = 3', function (done) {
    list = list().initialize(tileData1);
    console.log('list at stage 0', list);

    grid = grid().initialize(gridData1);
    console.log('grid at stage 0', grid);

    var result = iterate(grid, list);
    result.attr.should.equal[[0, 1, 2], [3, 4, 5], [6, 7, 8]];
  });
});
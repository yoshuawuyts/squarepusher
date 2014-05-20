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

describe('#iterate()', function () {
  it('should properly calculate for n = 3', function (done) {
    list = list().initialize(tileData1);

    grid = grid().initialize(gridData1);
    console.log('grid at stage 0', grid.attr);

    var result = iterate(grid, list);
    result.attr.should.equal[[0, 1, 2], [3, 4, 5], [6, 7, 8]];
  });


  it('should be able to rotate tiles to fill a grid', function (done) {
    done();
  });
});
 */
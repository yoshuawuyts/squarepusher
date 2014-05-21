/*eslint no-unused-expressions: 0*/
'use strict';

/**
 * Module dependencies
 */

var should = require('should');
var iterate = require('../../client/modules/iterate/iterative');
var list = require('../../client/modules/list/list');
var grid = require('../../client/modules/grid/grid');
var tileData1 = require('./tileData1.json');
var tileData2 = require('./tileData2.json');

/**
 * Tests
 */

describe('#iterate()', function () {
  it('should properly calculate for n = 3', function (done) {
    var list1 = list().initialize(tileData1);
    var grid1 = grid().initialize({'height': 3, 'width': 3});

    var result = iterate(grid1, list1);
    result.attr.should.containDeep([[0, 1, 2], [3, 4, 5], [6, 7, 8]]);
    done();
  });

  it('should be able to correct misplaced tiles', function (done) {
    var list2 = list().initialize(tileData2);
    var grid2 = grid().initialize({'height': 4, 'width': 4});

    var result = iterate(grid2, list2);
    result.attr.should.containDeep([
      [0, 0, 1, 1],
      [0, 0, 1, 1],
      [0, 0, 2, 2],
      [3, 3, 2, 2]
    ]);
    done();
  });

  it('should be able to rotate tiles to fill a grid', function (done) {
    done();
  });
});